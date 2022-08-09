import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Secure Job</title>
        <meta name="description" content="Job vacancies at your disposal" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="relative flex flex-col-reverse py-8 lg:pt-12 lg:flex-col lg:pb-0 h-screen">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"npx 
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="w-screen rounded shadow-lg h-object-cover lg:rounded-none lg:shadow-none md:h-96 lg:h-screen"
            src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <q className="inline-block py-px mb-4 text-md font-semibold tracking-wider text-indigo-500 capitalize rounded-full bg-teal-accent-400">
             Secure Job is the most effective way to find the right people, fast
            </q>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
             You deserve a job &nbsp; 
              <br className="hidden md:block" />
               that loves you{' '}
              <span className="inline-block text-deep-purple-accent-400">
              back
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              With Secure Job, you can search millions of jobs online to find the next step in your career. With tools for job search, resumes, company reviews and more. Let us help you secure a job.
            </p>
            <div className="flex items-center">
              <Link href='/jobs'>
              <a
                href="/jobs"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium text-indigo-500 transition duration-200 rounded shadow-md tracking-widetext-indigo-500 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none shadow-indigo-500/50"
              >
                Get hired
              </a>              
              </Link>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
