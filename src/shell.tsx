import { ReactNode } from "react";
import "./app/globals.css";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <main className="flex-grow">{children}</main>
    </div>
  );
}
