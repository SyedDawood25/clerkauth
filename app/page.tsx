import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col gap-y-6 h-screen justify-center items-center">
      <h1 className="text-6xl font-bold text-red-950 text-center">Home</h1>
      <Button asChild>
        <Link href={"/dashboard"}>Go to Dashboard</Link>
      </Button>
    </main>
  );
};

export default Home;
