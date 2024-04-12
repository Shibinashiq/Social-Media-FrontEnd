import { Frown } from "lucide-react";

const NotFound = () => {
  return (
    <div id="notfound" className="flex items-center justify-center h-screen">
      <div className="notfound max-w-md text-center justify-between flex flex-col">

        <Frown className="text-white w-16 h-16 ml-[166px] md:ml-48" />
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-4">
          Sorry but the page you are looking for does not exist or is temporarily unavailable.
        </p>
        {/* <a
          href="/"
          className="inline-block py-2 px-6 font-semibold rounded-lg bg-blue-500 text-white"
        > */}
           
        {/* </a> */}
      </div>
    </div>
  );
};

export default NotFound;
