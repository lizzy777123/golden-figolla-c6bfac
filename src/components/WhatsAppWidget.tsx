import React from 'react';

interface WhatsAppWidgetProps {
  onClick: () => void;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 animate-in fade-in duration-500">
      {/* Tooltip / Prompt bubble */}
      <div 
        className="bg-white text-slate-900 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 text-xs font-bold animate-bounce duration-1000 cursor-pointer select-none" 
        onClick={onClick}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>Chat with Miami Dispatch 👋</span>
      </div>

      {/* Main floating actual WhatsApp image icon */}
      <button
        onClick={onClick}
        aria-label="WhatsApp Chat"
        className="rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 animate-pulse-glow focus:outline-none"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp Chat" 
          className="w-16 h-16 object-contain drop-shadow-lg" 
        />
      </button>
    </div>
  );
};
