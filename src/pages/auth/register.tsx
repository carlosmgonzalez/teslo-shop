import { AuthLayout } from "@/components/layouts/AuthLayout";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <AuthLayout title="Teslo | Login">
      <div className={`p-5 rounded bg-neutral-900 w-[400px]`}>
        <h1 className={`text-2xl text-center font-semibold mb-3`}>Register</h1>
        <form action="" className={`flex flex-col gap-3 justify-center items-center w-full`}>
          <input type="text" placeholder="Name" className={`w-full py-1 px-2 focus:outline-none bg-neutral-700 text-neutral-400 rounded-md`} />
          <input type="email" placeholder="Email" className={`w-full py-1 px-2 focus:outline-none bg-neutral-700 text-neutral-400 rounded-md`} />
          <input type="password" placeholder="Password" className={`w-full py-1 px-2 focus:outline-none bg-neutral-700 text-neutral-400 rounded-md`} />
          <div className={`w-full flex justify-between items-center`}>
            <div>
              <p className={`font-light`}>Do you already have an account?</p>
              <Link href={"/auth/login"} className={`font-light text-blue-600 underline`}>Login</Link>
            </div>
            <button className={`px-2 py-1 rounded-md bg-blue-800 font-semibold`}>Send</button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
