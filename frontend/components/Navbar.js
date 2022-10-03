import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

const Navbar = () => {
    const { data: session, status } = useSession()
    console.log('session => ', session)
    console.log('status => ', status)
  
    return ( 
        <header className="sticky top-0 z-10 text-gray-600 bg-white shadow-lg body-font">
            <div className="container flex flex-row flex-wrap items-center justify-between p-5 mx-auto">
                <div className="flex items-center font-medium text-indigo-500">
                    <span className="ml-1 text-xl text-center">Secure Job</span>
                </div>
                    <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                        <Link href='/'><a className="mr-5 underline hover:text-gray-900 underline-offset-2 decoration-2 decoration-indigo-500">Home</a></Link>
                        {session && status !== 'unauthenticated' && (
                            <>
                                <Link href='/jobs'><a className="mr-5 hover:text-gray-900">Jobs</a></Link>
                                <a target={'_blank'} href='https://github.com/TreciaKS/secure-job' className="mr-5 hover:text-gray-900">Github</a>
                                <Link href='http://localhost:3000/api/auth/signout'>
                                    <a 
                                    className="mr-5 hover:text-gray-900"
                                    onClick={ 
                                    e => { e.preventDefault()
                                    signOut()}
                                    }
                                    >Sign Out</a>
                                </Link>
                            </>
                        )}
                        {!session && status !== 'authenticated' && (
                            <Link href='http://localhost:3000/api/auth/signin'>
                                <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:-gray-200 md:mt-0">
                                <a onClick={ 
                                e => { e.preventDefault()
                                signIn()}
                                }>
                                Sign In
                                </a>
                                </button>
                            </Link>
                        )}
                    </nav>
            </div>
        </header>
     );
}
 
export default Navbar;