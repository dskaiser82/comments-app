"use client";

import { AddComment, GetComments } from "@/app/server/api";
import { useState } from "react";
import { CommentType } from "../types";

export const CommentForm = ({
  setComments,
}: {
  setComments: (comments: CommentType[]) => void;
}) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    AddComment(text);
    setComments(GetComments());
    setText(""); // clear input after submission
  };

  return (
    <div>
      <div className="flex items-center space-x-3 mb-2">
        <img
          src="https://miro.medium.com/v2/resize:fill:32:32/0*POKNPqwG7KllHKi8."
          className="w-8 h-8 rounded-full"
          alt="User"
        />
        <span className="text-sm font-medium">Admin Dan Kaiser</span>
      </div>
      <textarea
        className="w-full p-3 border rounded bg-gray-50 resize-none"
        placeholder="What are your thoughts?"
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex justify-end mt-2 space-x-2 text-sm">
        <button
          onClick={handleSubmit}
          className="bg-black hover:bg-black/80 text-white font-medium py-2 px-4 rounded-md shadow-md transition-all"
        >
          Respond
        </button>
      </div>
    </div>
  );
};
