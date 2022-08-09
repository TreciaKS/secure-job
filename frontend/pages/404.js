import Head from 'next/head'
import Link from 'next/link'

const NotFound = () => {
    return ( 
        <>
            <Head>
                <link rel="icon" href="/logo.png" />
            </Head>
            <section className="px-4 py-32 flex justify-center h-screen align-center bg-black">
                <div className="w-full mx-auto lg:w-1/3">
                    <a href="#" title="Hellonext Home Page" className="flex items-center">
                    <span className="sr-only text-white">Kutty Home Page</span>
                    </a>
                    <p className="mt-5 mb-3 text-xl font-bold text-white md:text-2xl">Page not found (404)</p>
                    <Link href='/'>
                    <span className="mb-3 text-base font-medium text-gray-200">
                    The page you're looking for may have moved or no longer exists. Head back to our <span className="underline text-indigo-500 cursor-pointer">homepage</span>, or take a look at one of the sections below.
                    </span>
                    </Link>
                </div>
            </section>
        </>

     );
}
 
export default NotFound;