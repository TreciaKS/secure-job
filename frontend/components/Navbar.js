import Link from 'next/link'

const Navbar = () => {
    return ( 
        <header className="sticky top-0 z-10 text-gray-600 bg-white shadow-lg body-font">
            <div className="container flex flex-row flex-wrap items-center justify-between p-5 mx-auto">
                <div className="flex items-center font-medium text-indigo-500">
                    <span className="ml-1 text-xl text-center">Secure Job</span>
                </div>
                    <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                        <Link href='/'><a className="mr-5 underline hover:text-gray-900 underline-offset-2 decoration-2 decoration-indigo-500">Home</a></Link>
                        <Link href='/jobs'><a className="mr-5 hover:text-gray-900">Jobs</a></Link>
                        <a target={'_blank'} href='https://github.com/TreciaKS/secure-job' className="mr-5 hover:text-gray-900">Github</a>
                    </nav>
            </div>
        </header>
     );
}
 
export default Navbar;