"use client";

import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { CommentForm } from "./CommentForm";

export const CommentDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      {/* Toggle button (you can place this anywhere) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-4 top-4 z-20 bg-primary text-white px-3 py-2 rounded shadow"
      >
        Comments
      </button>

      {/* Overlay - only show when mounted and open */}
      {isOpen && (
        <div
          className="fixed inset-0 opacity-20 bg-gray-50  z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-30 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Responses (2)</h2>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="p-4 space-y-6 overflow-y-auto h-[calc(100%-60px)]">
          <CommentForm />
          {/* Example comment */}
          <div className="border-t pt-4">
            <div className="flex items-center space-x-2 mb-1">
              <img
                src="/avatar2.png"
                className="w-6 h-6 rounded-full"
                alt="Commenter"
              />
              <div className="text-sm font-medium">mohamad shahkhajeh</div>
              <span className="text-xs text-gray-500">· 3 hours ago</span>
            </div>
            <p className="text-sm text-gray-700 mt-1">
              The author does a great job of capturing the intensity and
              discipline required in high school sports, especially wrestling...
            </p>
            <button className="text-sm text-blue-500 mt-2">Reply</button>
          </div>
        </div>
      </div>
    </>
  );
};
