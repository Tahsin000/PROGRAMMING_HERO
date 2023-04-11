import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
        <div className="container h-screen mx-auto flex flex-col items-center justify-center">
                    
            <h1 className="text-[3rem] font-[800]">Oops!</h1>
            <p className="md:text-[1.25rem] text-[0.75rem] font-[300]">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to={'/'} className='rounded-md font-[800] text-white p-3 px-6 bg-gradient-to-r mt-9 from-[#7E90FE] to-[#9873FF]'>GO TO HOMEPAGE</Link>
        </div>
    </div>
  );
}