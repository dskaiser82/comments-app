export type CommentType = {
  id: string;
  author: string;
  text: string;
  date: string;
  likes: number;
  image: string;
  parentId: string | null;
};
