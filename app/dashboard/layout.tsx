"use client";

import { Header } from "@/components/Header";
import { useUser } from "@clerk/nextjs";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user } = useUser();

  return (
    <main>
      <Header user={user} />
      <div>{children}</div>
    </main>
  );
};

export default DashboardLayout;
