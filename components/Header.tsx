import { UserButton } from "@clerk/nextjs";
import { UserResource } from "@clerk/types";

interface HeaderProps {
  user: UserResource | null | undefined;
}

export const Header = ({ user }: HeaderProps) => {
  return (
    <main className="flex justify-between bg-[#232324] h-[100px] items-center px-6">
      <div>
        <h1 className="text-3xl text-white font-bold">Logo</h1>
      </div>
      <div className="flex gap-x-4">
        <h1 className="text-xl text-white font-semibold text-center">
          {user?.username}
        </h1>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
};
