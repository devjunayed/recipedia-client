
import Link from "next/link";

const BottomMenu = () => {
  return (
    <div className="w-full md:hidden bg-white absolute   border-t-2 mx-auto bottom-0 left-0    gap-8 p-4 rounded-md">
      <div className="flex justify-between items-center">
        <Link
          className="flex flex-wrap items-center justify-center gap-2"
          href="/"
        >
           Home
        </Link>

        <Link
          className="flex flex-wrap items-center justify-center gap-2"
          href="/followers"
        >
           Followers
        </Link>
        <Link
          className="flex flex-wrap items-center justify-center gap-2"
          href="/following"
        >
           Following
        </Link>
        <Link
          className="flex flex-wrap items-center justify-center gap-2"
          href="/saved"
        >
           Saved
        </Link>
      </div>
    </div>
  );
};

export default BottomMenu;
