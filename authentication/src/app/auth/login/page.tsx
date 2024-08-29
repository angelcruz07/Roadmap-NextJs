import type { Metadata } from "next";
import { FormLogin } from "./ui/form/Form";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <div className="mb-5">
        <h1 className="text-2xl text-center font-semibold">Login</h1>
      </div>
      <div>
        <FormLogin />
      </div>
    </section>
  );
}
