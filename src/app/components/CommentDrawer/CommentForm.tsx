"use client";

export const CommentForm = () => {
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
      />
      <div className="flex justify-end mt-2 space-x-2 text-sm">
        <button className="bg-primary  px-3 py-1 rounded">Respond</button>
      </div>
    </div>
  );
};
