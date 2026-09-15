import Link from "next/link";

type header = {
  title: string,
  linkHref?: string,
  linkTitle?: string
}

const Header = ({ title, linkHref, linkTitle }: header) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold border-b-2 border-secondary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="text-md md:text-xl underline hover:text-secondary transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
