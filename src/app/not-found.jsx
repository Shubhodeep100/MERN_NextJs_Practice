import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="flex justify-center items-center text-violet-700 font-bold text-4xl">
        Not Found 404
      </p>
      <p className="text-xl text-amber-700 font-semibold">
        Sorry, the requested page does not exist
      </p>
      <Link href="/" className="text-blue-800">Return Home</Link>
    </div>
  );
};

export default NotFound;
