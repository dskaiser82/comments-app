import { CommentType } from "../components/types";

const COMMENTS_KEY = "comments";

export const GetComments = async () => {
  const comments = localStorage.getItem(COMMENTS_KEY);
  return comments ? JSON.parse(comments) : [];
};

export const AddComment = async (text: string) => {
  const newComment = {
    id: new Date().getTime().toString(),
    author: "Admin",
    text: text,
    date: new Date().getTime().toString(),
    likes: 0,
    image: "https://miro.medium.com/v2/resize:fill:32:32/0*POKNPqwG7KllHKi8.",
    parentId: null,
  };

  const comments = await GetComments();
  const updatedComments = [newComment, ...comments];

  try {
    const data = JSON.stringify(updatedComments);
    localStorage.setItem(COMMENTS_KEY, data);
  } catch (err) {
    console.error("Failed to save comments:", err);
  }
};
