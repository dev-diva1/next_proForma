import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <Card className=" w-[90%] max-w-[450px] py-5 text-gray-600 flex flex-col gap-3">
        <CardHeader className="font-heading  flex flex-col gap items-center justify-center">
          <CardTitle className="text-center text-2x">
            <h1 className="text-4xl text-blue-600">ProForma</h1>
          </CardTitle>
          <CardDescription className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-xl text-gray-900">Sign In</h2>
            <p className="text-center">
              Welcome Back! Please sign in to your account to create, send, and
              track invoices in just a few clicks.
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 font-sans">
          <div className="flex flex-col gap-3">
            <Label htmlFor="username" className="">
              Username
            </Label>
            <Input id="username" type="text" name="username" className="py-6" />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="text" name="password" className="py-6" />
          </div>
          <Button className="bg-blue-600 py-6 text-[18px] hover:bg-blue-600 hover:opacity-85 transition-opacity">
            Sign in
          </Button>
        </CardContent>
        <CardFooter className="font-sans flex gap-1">
          <p>Don&apos;t have an account?</p>
          <Link
            href={"/sign-up"}
            className="text-blue-600 hover:opacity-85 transition-opacity "
          >
            Sign Up
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};
export default SignInPage;
