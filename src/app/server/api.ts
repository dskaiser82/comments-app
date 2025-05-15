import { CommentType } from "../components/types";
import { Seed } from "./seed";

const COMMENTS_KEY = "comments";

export const GetComments = (): CommentType[] => {
  if (typeof window === "undefined") return []; // guard for SSR
  const comments = localStorage.getItem(COMMENTS_KEY);
  return comments ? JSON.parse(comments) : [];
};

export const DeleteComment = (id: string) => {
  if (typeof window === "undefined") return;

  const comments = JSON.parse(localStorage.getItem(COMMENTS_KEY) || "[]");
  const filtered = comments.filter((comment: CommentType) => comment.id !== id);

  localStorage.setItem(COMMENTS_KEY, JSON.stringify(filtered));
};

export const SeedComments = () => {
  if (typeof window === "undefined") return;
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(Seed.comments));
};

export const AddComment = (text: string) => {
  if (typeof window === "undefined") return;

  const newComment: CommentType = {
    id: Date.now().toString(),
    author: "Admin",
    text,
    date: new Date().toISOString(),
    likes: 0,
    image: "https://miro.medium.com/v2/resize:fill:32:32/0*POKNPqwG7KllHKi8.",
    parentId: null,
  };

  const comments = GetComments();
  const updatedComments = [newComment, ...comments];

  localStorage.setItem(COMMENTS_KEY, JSON.stringify(updatedComments));
};
