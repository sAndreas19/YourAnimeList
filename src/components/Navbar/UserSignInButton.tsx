import { authUserSession } from "@/src/libs/auth-user";
import Link from "next/link";

const UserSignInButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex justify-between items-center gap-4">
      {user ? <Link className="font-bold text-xl hover:text-secondary" href="/users/dashboard">Dashboard</Link> : null}

      <Link className="border rounded px-2 py-1 hover:text-secondary" href={actionURL}>{actionLabel}</Link>
    </div>
  );
};

export default UserSignInButton;
