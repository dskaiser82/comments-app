import React from "react";

type CommentCardProps = {
  id: string;
  author: string;
  text: string;
  date: string;
  likes: number;
  image: string;
  parentId: string | null;
};

export const CommentCard = ({
  id,
  author,
  text,
  date,
  likes,
  image,
  parentId,
}: CommentCardProps) => {
  return (
    <div className="border-t pt-4">
      <div className="flex items-center space-x-2 mb-1">
        {image && (
          <img src={image} className="w-6 h-6 rounded-full" alt="Commenter" />
        )}
        <div className="text-sm font-medium">{author}</div>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <p className="text-sm text-gray-700 mt-1">{text}</p>
      <button className="text-sm text-blue-500 mt-2">Reply</button>
    </div>
  );
};
