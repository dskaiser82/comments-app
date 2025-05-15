import { ReactNode } from "react";
import { CommentDrawer } from "../CommentDrawer/CommentDrawer";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="min-h-screen  flex items-center justify-center bg-light px-4">
      <CommentDrawer />
      <div className="bg-white w-full max-w-2xl text-center">{children}</div>
    </main>
  );
};
