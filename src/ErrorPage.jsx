import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Oops!
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="mt-4 text-lg font-normal">
          <i>{error.statusText || error.message}</i>
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to={"/"}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
