"use client";

import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div
        className="bg-black rounded-lg shadow-lg w-full max-w-md p-10 relative"
        dir="rtl"
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>
        {title && <h2 className="text-lg font-bold mb-4">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
