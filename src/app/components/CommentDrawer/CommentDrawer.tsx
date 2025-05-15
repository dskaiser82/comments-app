"use client";

import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { CommentForm } from "./CommentForm";
import { CommentCard } from "./CommentCard";
import { GetComments, SeedComments } from "@/app/server/api";
import { CommentType } from "../types";

export const CommentDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    setIsOpen(true);
    SeedComments();
    setComments(GetComments());
  }, []);

  return (
    <>
      {/* Overlay */}
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
          <CommentForm setComments={setComments} />
          {comments.length > 0 &&
            comments.map((comment) => (
              <CommentCard
                key={comment.id}
                setComments={setComments}
                comment={comment}
              />
            ))}
        </div>
      </div>
    </>
  );
};
