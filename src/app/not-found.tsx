import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="flex flex-col items-center font-sans">
      <Image
        src={"/notFound.png"}
        alt=""
        width={750}
        height={750}
        className="mx-auto"
      />
      <div className=" font-heading flex flex-col gap-3 items-center justify-center">
        <h1 className="font-semibold text-gray-800 text-2xl">Page Not Found</h1>
        <p className="">
          Oops! It seems like the page you're looking for doesn't exist.
        </p>
        <Link href={"/"} className="text-blue-600">
          Go back to the homepage
        </Link>
      </div>
    </main>
  );
};
export default NotFoundPage;
