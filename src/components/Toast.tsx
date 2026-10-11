import React from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="bg-[#4A2E1B] text-[#FFFCF7] px-5 py-3.5 rounded-2xl shadow-2xl flex items-center space-x-3 border border-[#F7E6CA]/30">
        <span className="text-lg">🥥</span>
        <span className="text-xs font-sans font-medium">{message}</span>
        <button
          onClick={onClose}
          className="text-[#F7E6CA] hover:text-white font-bold text-sm ml-2"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
