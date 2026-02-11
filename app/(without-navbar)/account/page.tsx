import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login?callbackUrl=/account");
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Account</h1>
      <p className="mt-2 text-sm text-slate-600">
        You are logged in.
      </p>

      <pre className="mt-6 rounded-lg bg-slate-100 p-4 text-xs overflow-auto">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
}
