import React from 'react';
import { Languages, Moon, Sun } from 'lucide-react';
import { AppView, Language } from '../types/math';
import { UI_TEXT } from '../utils/i18n';
import { MathLogo } from './MathLogo';

interface HeaderProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  lang: Language;
  onChangeLanguage: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  theme,
  onToggleTheme,
  lang,
  onChangeLanguage,
}) => {
  const t = UI_TEXT[lang];
  const isRtl = lang === 'ur';

  const navItems: Array<{ id: AppView; label: string }> = [
    { id: 'dashboard', label: t.nav.dashboard },
    { id: 'practice', label: t.nav.practice },
    { id: 'test', label: t.nav.test },
    { id: 'history', label: t.nav.history },
  ];

  const activeTab = currentView === 'result' ? 'test' : currentView;

  return (
    <header className="sticky top-0 z-30 h-14 sm:h-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      {/* Keep header outer container LTR so the language switcher remains anchored at the top-right corner in both Urdu and English modes */}
      <div
        dir="ltr"
        className="max-w-7xl mx-auto h-full px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-6"
      >
        {/* Brand Logo & Title */}
        <button
          type="button"
          dir={isRtl ? 'rtl' : 'ltr'}
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 sm:gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-lg min-h-[44px] min-w-0 shrink"
        >
          <MathLogo className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
          <span className="font-display font-bold text-xs sm:text-base lg:text-lg tracking-tight text-slate-900 dark:text-slate-100 truncate">
            {t.appTitle}
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav
          dir={isRtl ? 'rtl' : 'ltr'}
          aria-label={t.nav.primaryNavAria}
          className="hidden md:flex items-center gap-6 shrink-0"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Top-Right Controls: Language Switcher (اردو / English) + Theme Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            role="group"
            aria-label={t.header.languageAria}
            className="inline-flex items-center p-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100/90 dark:bg-slate-800/90 shadow-xs"
          >
            <Languages
              className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 mx-1.5 hidden sm:block shrink-0"
              aria-hidden="true"
            />
            <button
              type="button"
              onClick={() => onChangeLanguage('ur')}
              aria-pressed={lang === 'ur'}
              className={`min-h-[34px] px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                lang === 'ur'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              {t.header.urduLabel}
            </button>
            <button
              type="button"
              onClick={() => onChangeLanguage('en')}
              aria-pressed={lang === 'en'}
              className={`min-h-[34px] px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                lang === 'en'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              {t.header.englishLabel}
            </button>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              theme === 'dark'
                ? t.header.switchToLightAria
                : t.header.switchToDarkAria
            }
            className="inline-flex items-center justify-center gap-1.5 min-h-[42px] min-w-[42px] px-2.5 sm:px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span className="hidden lg:inline">{t.header.lightMode}</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-slate-700" aria-hidden="true" />
                <span className="hidden lg:inline">{t.header.darkMode}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
