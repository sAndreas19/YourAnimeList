import Header from "@/src/components/Dashboard/Header";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="text-xl px-2 font-bold mt-4 w-full">
      <Header title={"My Collections"}/>

      <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/" className="relative border">
          <Image src="" alt="" width={350} height={300} className="w-full"/>
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-primary h-16">

            <h5 className="text-xl text-center">
              Judul Anime
            </h5>
          </div>
        </Link>
        <Link href="/" className="relative border">
          <Image src="" alt="" width={350} height={300} className="w-full"/>
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-primary h-16">

            <h5 className="text-xl text-center">
              Judul Anime
            </h5>
          </div>
        </Link>
        <Link href="/" className="relative border">
          <Image src="" alt="" width={350} height={300} className="w-full"/>
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-primary h-16">

            <h5 className="text-xl text-center">
              Judul Anime
            </h5>
          </div>
        </Link>
        <Link href="/" className="relative border">
          <Image src="" alt="" width={350} height={300} className="w-full"/>
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-primary h-16">

            <h5 className="text-xl text-center">
              Judul Anime
            </h5>
          </div>
        </Link>
        <Link href="/" className="relative border">
          <Image src="" alt="" width={350} height={300} className="w-full"/>
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-primary h-16">

            <h5 className="text-xl text-center">
              Judul Anime
            </h5>
          </div>
        </Link>
        <Link href="/" className="relative border">
          <Image src="" alt="" width={350} height={300} className="w-full"/>
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-primary h-16">

            <h5 className="text-xl text-center">
              Judul Anime
            </h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default page;
