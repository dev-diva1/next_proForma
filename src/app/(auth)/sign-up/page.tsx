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
import { signUp, State } from "@/actions/authActions";
import { useActionState } from "react";
import clsx from "clsx";

const SignUpPage = () => {
  const initialState: State = { status: null, message: "", details: [] };
  const [errors, formAction, isPending] = useActionState(signUp, initialState);

  return (
    <form
      action={formAction}
      className="h-screen flex flex-col items-center justify-center"
    >
      <Card className="w-[90%] max-w-[450px] text-gray-600 flex flex-col gap-2">
        <CardHeader className="font-heading flex flex-col gap-2 items-center justify-center">
          <CardTitle className="text-2xl">
            <h1 className="text-4xl text-blue-600">ProForma</h1>
          </CardTitle>
          <CardDescription className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-xl text-gray-900">Sign Up</h2>
            <p className="text-center">
              Create your free account to start managing invoices effortlessly.
              Once registered, you can create, send, and track invoices in just
              a few clicks.{" "}
              <span>
                Already have an account?{" "}
                <Link
                  href={"/sign-in"}
                  className="text-blue-600 hover:opacity-85 transition-opacity "
                >
                  Sign in
                </Link>
              </span>
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className="relative flex flex-col gap-2 font-sans">
          <div className="absolute -top-6">
            {errors && errors.details ? (
              errors?.details?.map((err, i) => (
                <p className="text-xs text-red-500" key={i}>
                  {err}
                </p>
              ))
            ) : (
              <p className="text-xs text-red-500">{errors.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="firstName" className="">
              First Name
            </Label>
            <Input
              id="firstName"
              type="text"
              name="firstName"
              className="py-5 "
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="lastName" className="">
              Last Name
            </Label>
            <Input id="lastName" type="text" name="lastName" className="py-5" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="">
              Email
            </Label>
            <Input id="email" type="email" name="email" className="py-5" />
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="text" name="password" className="py-5" />
          </div>
          <Button
            disabled={isPending}
            className={clsx(
              "py-5 text-[18px] hover:bg-blue-600 hover:opacity-85 transition-opacity",
              { "bg-blue-600": !isPending, "bg-blue-400": isPending }
            )}
          >
            {isPending ? "Signing up" : "Sign up"}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
};
export default SignUpPage;
