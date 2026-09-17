import Link from "next/link";
import InputSearch from "./InputSearch";
import SignInButton from "./UserSignInButton";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="">
      <div className="flex flex-col md:flex-row justify-between md:items-center p-4 gap-2 bg-cards">
        <Link
          href="/"
          className="flex justify-center items-center font-display font-bold hover:text-secondary tracking-wider text-2xl border-b-2 border-primary transition-all"
        > 
        <Image src={"/icon.png"} alt="icon" width={28} height={28}/>
        <h1>
          YOUR ANIME LIST
        </h1>
        </Link>
        <InputSearch />
        <SignInButton />
      </div>
    </header>
  );
};

export default Navbar;
