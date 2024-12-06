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

const SignUpPage = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <Card className="w-[90%] max-w-[450px] max-h-fit text-gray-600 flex flex-col gap-3 ">
        <CardHeader className="font-heading flex flex-col4 gap-3 items-center justify-center">
          <CardTitle className="text-2xl">
            <h1 className="text-4xl text-blue-600">ProForma</h1>
          </CardTitle>
          <CardDescription className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-xl text-gray-900">Sign Up</h2>
            <p className="text-center">
              Create your free account to start managing invoices effortlessly.
              Once registered, you can create, send, and track invoices in just
              a few clicks.
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 font-sans">
          <div className="flex flex-col gap-3">
            <Label htmlFor="name" className="">
              Name
            </Label>
            <Input id="name" type="text" name="name" className="py-6 " />
          </div>
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
            Sign Up
          </Button>
        </CardContent>
        <CardFooter className="font-sans flex gap-1">
          <p>Already have an account?</p>
          <Link
            href={"/sign-in"}
            className="text-blue-600 hover:opacity-85 transition-opacity "
          >
            Sign In
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};
export default SignUpPage;
