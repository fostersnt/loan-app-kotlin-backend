// resources/js/Components/Modal.jsx
import React from 'react';

export default function UserEditModal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
