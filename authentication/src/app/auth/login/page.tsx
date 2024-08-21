import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <div className="mb-5">
        <h1 className="text-2xl text-center font-semibold">Login</h1>
        <p>Enter yout email and password</p>
      </div>
      <div>
        <form action="" className="flex flex-col gap-y-3">
          <Input className="rounded" placeholder="Email" />
          <Input className="rounded" placeholder="password" />
          <Button type="submit" className="rounded">
            Sign in
          </Button>
          <div className="flex items-center my-5">
            <div className="flex-1 border-t border-gray-500"></div>
            <div className="px-2 text-gray-800">OR SIGN IN WITH</div>
            <div className="flex-1 border-t border-gray-500"></div>
          </div>
          <Button variant="outline">Google</Button>
        </form>
      </div>
    </section>
  );
}
