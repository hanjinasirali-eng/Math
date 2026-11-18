import React from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
  autoUpgradeMath?: boolean;
}

const HAS_URDU_CHAR = /[\u0600-\u06FF]/;
const HAS_ENGLISH_WORD = /\b[A-Za-z]{3,}\b/;

/**
 * Converts a pure plain-text mathematical expression (without Urdu/English prose)
 * into clean LaTeX so KaTeX renders fractions, powers, roots, and boxed results nicely.
 */
export function asciiMathToLatex(expr: string): string {
  let out = expr.trim();
  if (!out) return out;

  // Already contains explicit LaTeX commands
  if (/\\(frac|boxed|sqrt|times|div|pi|cdot|le|ge|ne|approx)\b/.test(out)) {
    return out;
  }

  // Replace unicode math symbols with LaTeX
  out = out
    .replace(/×/g, ' \\times ')
    .replace(/÷/g, ' \\div ')
    .replace(/−/g, ' - ')
    .replace(/≤/g, ' \\le ')
    .replace(/≥/g, ' \\ge ')
    .replace(/≠/g, ' \\ne ')
    .replace(/≈/g, ' \\approx ')
    .replace(/π/g, ' \\pi ')
    .replace(/⇒|⇐/g, ' \\Rightarrow ')
    .replace(/°/g, '^\\circ');

  // Convert superscript unicode digits if present
  out = out
    .replace(/²/g, '^{2}')
    .replace(/³/g, '^{3}');

  // Convert √(...) or √number
  out = out
    .replace(/√\(([^)]+)\)/g, '\\sqrt{$1}')
    .replace(/√([0-9]+(?:\.[0-9]+)?|[a-zA-Z])/g, '\\sqrt{$1}');

  // Convert simple numeric or single-letter fractions a/b (avoid dates/urls/prose)
  out = out.replace(
    /(^|[\s=+\-*(\[,])(-?\d+|[a-zA-Z])\/(\d+|[a-zA-Z])(?=$|[\s=+\-*)\],.۔])/g,
    '$1\\frac{$2}{$3}'
  );

  // Convert exponents like x^2 or 10^-3 or (x+1)^2
  out = out.replace(/\^(-?\d+|[a-zA-Z])/g, '^{$1}');

  return out.replace(/\s+/g, ' ').trim();
}

function isPureMathLine(line: string): boolean {
  const t = line.trim();
  if (!t) return false;
  if (HAS_URDU_CHAR.test(t)) return false;
  // Allow LaTeX commands even though they have 3+ letters, strip \command before checking prose
  const withoutLatexCmds = t.replace(/\\[a-zA-Z]+/g, '');
  if (HAS_ENGLISH_WORD.test(withoutLatexCmds)) return false;
  // Must contain at least one digit or math operator/symbol
  return /[\d=+\-−×÷*/^√<>≤≥≠≈\\{}]/.test(t);
}

function renderKatexHtml(latex: string, displayMode: boolean): string {
  try {
    return katex.renderToString(latex.trim(), {
      displayMode,
      throwOnError: false,
      strict: false,
    });
  } catch {
    return latex;
  }
}

interface TextSegment {
  type: 'text' | 'inline-math' | 'display-math';
  value: string;
}

/**
 * Splits a string into text, inline math ($...$, \(...\)), and display math ($$...$$, \[...\], or standalone [...]).
 */
function parseSegments(input: string, autoUpgradeMath: boolean): TextSegment[] {
  // Normalize standalone [ \n ... \n ] blocks containing LaTeX or math formulas into $$...$$
  const normalized = input.replace(
    /(?:^|\n)\[\s*\n?([^\]]*?(?:\\frac|\\boxed|\\sqrt|\\times|\\div|=)[^\]]*?)\n?\s*\](?=\s*(?:\n|$))/g,
    (_m, inner: string) => `\n$$${inner.trim()}$$\n`
  );

  const segments: TextSegment[] = [];
  const tokenRegex =
    /(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|\$(?!\s)[^$\n]+?(?<!\s)\$)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = tokenRegex.exec(normalized)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: 'text',
        value: normalized.slice(lastIndex, match.index),
      });
    }
    const raw = match[0];
    if (raw.startsWith('$$') && raw.endsWith('$$')) {
      segments.push({ type: 'display-math', value: raw.slice(2, -2) });
    } else if (raw.startsWith('\\[') && raw.endsWith('\\]')) {
      segments.push({ type: 'display-math', value: raw.slice(2, -2) });
    } else if (raw.startsWith('\\(') && raw.endsWith('\\)')) {
      segments.push({ type: 'inline-math', value: raw.slice(2, -2) });
    } else if (raw.startsWith('$') && raw.endsWith('$')) {
      segments.push({ type: 'inline-math', value: raw.slice(1, -1) });
    }
    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < normalized.length) {
    segments.push({ type: 'text', value: normalized.slice(lastIndex) });
  }

  if (!autoUpgradeMath) {
    return segments;
  }

  // Upgrade plain lines that are purely mathematical into clean display-math blocks,
  // and inline fractions like 3/4 inside text lines into inline-math.
  const upgraded: TextSegment[] = [];
  for (const seg of segments) {
    if (seg.type !== 'text') {
      upgraded.push(seg);
      continue;
    }

    const lines = seg.value.split('\n');
    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      if (trimmed && isPureMathLine(trimmed)) {
        upgraded.push({
          type: 'display-math',
          value: asciiMathToLatex(trimmed),
        });
      } else if (trimmed) {
        // Check for standalone simple fractions like 11/15 or x^2 inside prose
        const inlineRegex =
          /(\b\d+\/\d+\b|[a-zA-Z0-9)]+\^(?:-?\d+|\{[^}]+\})|√\([^)]+\)|√\d+)/g;
        let pLast = 0;
        let m: RegExpExecArray | null;
        while ((m = inlineRegex.exec(line)) !== null) {
          if (m.index > pLast) {
            upgraded.push({
              type: 'text',
              value: line.slice(pLast, m.index),
            });
          }
          upgraded.push({
            type: 'inline-math',
            value: asciiMathToLatex(m[0]),
          });
          pLast = inlineRegex.lastIndex;
        }
        if (pLast < line.length) {
          upgraded.push({
            type: 'text',
            value: line.slice(pLast),
          });
        }
      }
      if (idx < lines.length - 1) {
        upgraded.push({ type: 'text', value: '\n' });
      }
    });
  }

  return upgraded;
}

export const MathText: React.FC<MathTextProps> = ({
  text,
  className = '',
  autoUpgradeMath = true,
}) => {
  const segments = React.useMemo(
    () => parseSegments(text, autoUpgradeMath),
    [text, autoUpgradeMath]
  );

  return (
    <span className={className}>
      {segments.map((seg, i) => {
        if (seg.type === 'display-math') {
          const html = renderKatexHtml(seg.value, true);
          return (
            <span
              key={i}
              dir="ltr"
              className="math-ltr block my-2 px-3 py-2 rounded-lg bg-slate-50/90 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700/70 overflow-x-auto text-center text-slate-900 dark:text-slate-100"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }
        if (seg.type === 'inline-math') {
          const html = renderKatexHtml(seg.value, false);
          return (
            <span
              key={i}
              dir="ltr"
              className="math-ltr inline-block align-baseline mx-0.5 text-slate-900 dark:text-slate-100"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }
        // Preserve intentional line breaks in text segments
        if (seg.value === '\n') {
          return <br key={i} />;
        }
        return <React.Fragment key={i}>{seg.value}</React.Fragment>;
      })}
    </span>
  );
};
