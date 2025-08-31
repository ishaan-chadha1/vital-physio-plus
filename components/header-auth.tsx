import Link from "next/link";
import { Button } from "./ui/button";

export default function HeaderAuth() {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex gap-2">
        <Button asChild size="sm" variant={"outline"}>
          <Link href="/contact">Contact Us</Link>
        </Button>
        <Button asChild size="sm" variant={"default"}>
          <Link href="/form">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}
  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"}>
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/sign-in">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
