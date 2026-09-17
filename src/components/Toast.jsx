import React, { useEffect } from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 size={20} className="toast-icon success" />,
    info: <Info size={20} className="toast-icon info" />,
    error: <AlertCircle size={20} className="toast-icon error" />
  };

  return (
    <div className={`toast-container animate-fade-in ${toast.type || 'info'}`} role="status" aria-live="polite">
      <div className="toast-icon-wrap">
        {icons[toast.type] || icons.info}
      </div>
      <div className="toast-content">
        <p className="toast-title">{toast.title}</p>
        {toast.message && <p className="toast-msg">{toast.message}</p>}
      </div>
      <button 
        onClick={onClose} 
        className="toast-close-btn" 
        aria-label="Close notification"
      >
        <X size={16} />
      </button>
    </div>
  );
}
