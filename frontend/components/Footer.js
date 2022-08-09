const Footer = () => {
    return (
      <footer className="relative bottom-0 w-full text-gray-600 bg-indigo-500 body-font">
        <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
            <div className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <span className="ml-3 text-xl text-white">Secure Job</span>
            </div>
            <p className="mt-4 text-sm text-gray-50 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-indigo-800 sm:py-2 sm:mt-0">© 2022 Secure Job —
            <a href="https://twitter.com/TreciaKS" className="ml-1 text-gray-300" rel="noopener noreferrer" target="_blank">@TreciaKS</a>
            </p>
                <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
                <a className="ml-3 text-gray-800">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
                <a className="ml-3 text-gray-800">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                </a>
                </span>
            </div>
        </footer>
    )
  };

export default Footer