"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { signIn, State } from "@/actions/authActions";
import { useActionState } from "react";
import clsx from "clsx";

const SignInPage = () => {
  const initialState: State = { status: null, message: "", details: [] };
  const [errors, formAction, isPending] = useActionState(signIn, initialState);
  return (
    <form
      action={formAction}
      className="h-screen flex flex-col items-center justify-center"
    >
      <Card className=" w-[90%] max-w-[450px] py-5 text-gray-600 flex flex-col gap-3">
        <CardHeader className="font-heading  flex flex-col gap items-center justify-center">
          <CardTitle className="text-center text-2x">
            <h1 className="text-4xl text-blue-600">ProForma</h1>
          </CardTitle>
          <CardDescription className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-xl text-gray-900">Sign In</h2>
            <p className="text-center">
              Welcome Back! Please sign in to your account to create, send, and
              track invoices in just a few clicks.{" "}
              <span>
                Don&#39;t have an account?{" "}
                <Link
                  href={"/sign-up"}
                  className="text-blue-600 hover:opacity-85 transition-opacity "
                >
                  Sign Up
                </Link>
              </span>
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className="relative flex flex-col gap-3 font-sans">
          <div className="absolute -top-10">
            {errors && errors.details ? (
              errors.details.map((err, i) => (
                <p key={i} className="text-xs text-red-500">
                  {err}
                </p>
              ))
            ) : (
              <p className="text-xs text-red-500">{errors.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="username" className="">
              Email
            </Label>
            <Input id="email" type="text" name="email" className="py-5" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="text" name="password" className="py-5" />
          </div>
          <Button
            disabled={isPending}
            className={clsx(
              " py-5 text-[18px] hover:bg-blue-600 hover:opacity-85 transition-opacity",
              { "bg-blue-600": !isPending, "bg-blue-300": isPending }
            )}
          >
            {isPending ? "Signing in" : "Sign in"}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
};
export default SignInPage;
