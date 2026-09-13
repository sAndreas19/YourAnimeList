import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="">
      <div className="flex flex-col md:flex-row justify-between md:items-center p-4 gap-2 bg-cards">
        <Link href="/" className="font-display font-bold hover:text-secondary tracking-wider text-2xl border-b-2 border-primary transition-all">
          YOUR ANIME LIST
        </Link>
        <InputSearch />
        <Link href="/api/auth/signin">Sign In</Link>
      </div>
    </header>
  );
};

export default Navbar;
