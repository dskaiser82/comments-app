import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="min-h-screen  flex items-center justify-center bg-light px-4">
      <div className="bg-white w-full max-w-2xl text-center">{children}</div>
    </main>
  );
};
