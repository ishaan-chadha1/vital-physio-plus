import { signInAction } from "@/app/actions";
import { FormMessage } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default async function Login({ searchParams }: { searchParams: any }) {
  // Await searchParams!
  const params = await searchParams;
  const redirect = params?.redirect;
  const success = params?.success;
  const error = params?.error;
  const message = params?.message;
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-[#f9f9f9]">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
        <form className="flex flex-col">
          <input type="hidden" name="redirect" value={redirect || ""} />
          <h1 className="text-3xl font-semibold mb-2 text-center">Sign in</h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            Don't have an account?{" "}
            <Link
              className="text-blue-600 font-medium underline"
              href="/sign-up"
            >
              Sign up
            </Link>
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input name="email" placeholder="you@example.com" required />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  className="text-xs text-blue-600 underline"
                  href="/forgot-password"
                >
                  Forgot Password?
                </Link>
              </div>
              <Input
                type="password"
                name="password"
                placeholder="Your password"
                required
              />
            </div>

            <SubmitButton pendingText="Signing In..." formAction={signInAction}>
              Sign in
            </SubmitButton>

            <FormMessage
              success={success}
              error={error}
              message={message}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
