import React from "react";
import { CommentType } from "../types";
import { DeleteComment, GetComments } from "@/app/server/api";

type CommentCardProps = {
  setComments: (comments: CommentType[]) => void;
  comment: CommentType;
};

export const CommentCard = ({ comment, setComments }: CommentCardProps) => {
  const handleDelete = (id: string) => {
    DeleteComment(id);
    setComments(GetComments());
  };

  // temp
  const isAdminOrOwner = true;

  return (
    <div className="border-t pt-4">
      <div className="flex items-center space-x-2 mb-1">
        {comment.image && (
          <img
            src={comment.image}
            className="w-6 h-6 rounded-full"
            alt="Commenter"
          />
        )}
        <div className="text-sm font-medium">{comment.author}</div>
        <span className="text-xs text-gray-500">{comment.date}</span>
      </div>
      <p className="text-sm text-gray-700 mt-1">{comment.text}</p>
      {isAdminOrOwner && (
        <button
          onClick={() => handleDelete(comment.id)}
          className="text-sm text-white bg-red-500 px-2 py-1 rounded-md mt-2"
        >
          Delete
        </button>
      )}
    </div>
  );
};
