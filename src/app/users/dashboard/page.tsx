import { authUserSession } from "@/src/libs/auth-user";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const user = await authUserSession();
  return (
    <div className="mt-5 flex justify-center flex-col items-center gap-8">
      <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
      {user?.image && (
        <Image
        src={user?.image}
        alt="Terserah"
        width={250}
        height={250}/>
      )}
      <div className="flex gap-4">
        <Link className="bg-cards text-xl py-2 px-4 rounded border hover:bg-secondary hover:text-cards" href="dashboard/collection">My Collection</Link>
        <Link className="bg-cards text-xl py-2 px-5 rounded border hover:bg-secondary hover:text-cards" href="dashboard/collection">My Collection</Link>
      </div>
    </div>
  );
};

export default page;
