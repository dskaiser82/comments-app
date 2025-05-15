import React from "react";

export const CommentCard = () => {
  return (
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
        The author does a great job of capturing the intensity and discipline
        required in high school sports, especially wrestling...
      </p>
      <button className="text-sm text-blue-500 mt-2">Reply</button>
    </div>
  );
};
