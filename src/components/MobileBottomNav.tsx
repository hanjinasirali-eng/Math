import React from 'react';
import { BookOpen, ClipboardCheck, History, LayoutGrid } from 'lucide-react';
import { AppView, Language } from '../types/math';
import { UI_TEXT } from '../utils/i18n';

interface MobileBottomNavProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  lang: Language;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentView,
  onNavigate,
  lang,
}) => {
  const t = UI_TEXT[lang];
  const activeTab = currentView === 'result' ? 'test' : currentView;

  const tabs: Array<{
    id: AppView;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }> = [
    { id: 'dashboard', label: t.nav.dashboard, icon: LayoutGrid },
    { id: 'practice', label: t.nav.practice, icon: BookOpen },
    { id: 'test', label: t.nav.test, icon: ClipboardCheck },
    { id: 'history', label: t.nav.historyShort, icon: History },
  ];

  return (
    <nav
      aria-label={t.nav.mobileNavAria}
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 h-14 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800"
    >
      <div className="grid grid-cols-4 h-full">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center justify-center min-h-[44px] text-[11px] font-medium transition-colors ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" aria-hidden="true" />
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
