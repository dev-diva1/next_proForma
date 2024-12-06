import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const HomePage = () => {
  return (
    <main className="flex flex-col gap-20 lg:gap-32">
      <header className="w-[98%] mt-6 mx-auto py-10 px-5 rounded-md bg-blue-600">
        <h1 className="text-4xl text-white font-heading">ProForma</h1>
      </header>
      <section className="w-[98%] px-5 flex flex-col gap-8 items-start">
        <p className="hyphens-auto text-justify tracking-wide font-sans xl:max-w-[50%] leading-8 text-xl text-black font-light">
          <span className="font-heading font-semibold text-2xl text-gray-600 ">
            Welcome to ProForma.
          </span>{" "}
          ProForma is a sleek and efficient invoicing solution designed to
          simplify billing for professionals and businesses. With its intuitive
          interface, customizable templates, and real-time tracking, ProForma
          ensures seamless financial management, helping you{" "}
          <span className="text-blue-600 font-normal">save time </span> and{" "}
          <span className="text-blue-600 font-normal">stay organized</span>.
        </p>
        <Link
          href={"/sign-in"}
          type="button"
          className="tracking-wide font-sans flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-sm hover:opacity-85 transition"
        >
          <span>Login</span>
          <FaArrowRightLong />
        </Link>
      </section>
    </main>
  );
};
export default HomePage;
