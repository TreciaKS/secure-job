import Link from 'next/link'

export const getStaticPaths = async () => {
    const res = await fetch("https://sleepy-cliffs-76413.herokuapp.com/api/jobs?populate=*")

    const { data: jobs } = await res.json()


    // convert to string because it returns value as interger

    
   /* return {
        paths: data.data.map((item) => ({
            params: { 
                id: item.id.toString(),
            },
        })),
        fallback: false
    }
    */

    const paths = jobs.map( (job) => {
        return  {
            params: { 
                id: job.id.toString(),
            }
     }})

    return {
        paths,
        fallback: false
    }
}

// we run the 'async (context)' function 10 times because we have 10 items in the 'paths' property that holds an array of objects from the URL? API request
// The id of each item that we are going to get is attached to this context object
export const getStaticProps = async ({params}) => {
    // const id = context.params.id
    // console.log( params )

    const {id} = params

    const res = await fetch(`https://sleepy-cliffs-76413.herokuapp.com/api/jobs/${id}?populate=*`)
    // const item = await res.json()
    const {data: job } = await res.json() //destructure and rename

 /*   return {
        props: {
            job: item.data
        },
        revalidate: 1,
    }
*/

    return {
        props: {job},
        revalidate: 1,
    }

}

const DetailedJobs = ({job}) => {
    const Max_DATE_LENGHT = 10
    const Max_TIME_LENGHT = 11
    
    return ( 
        <>
        {/* {JSON.stringify(job, null, 2)} */}
        <article className="px-4 py-5 mx-auto max-w-7xl" itemid="#" itemscope itemtype="http://schema.org/BlogPosting">
            <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
                <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">{job.attributes.categories.data[0].attributes.type + " LEVEL"}</p>
                <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                {job.attributes.vacancy}
                </h1>
                <div className="flex mb-6 space-x-2 text-sm">
                <a className="p-1 bg-indigo-500 rounded-full text-gray-50 badge hover:bg-gray-200" href="#">CSS</a>
                <a className="p-1 bg-indigo-500 rounded-full text-gray-50 badge hover:bg-gray-200" href="#">Tailwind</a>
                <a className="p-1 bg-indigo-500 rounded-full text-gray-50 badge hover:bg-gray-200" href="#">AlpineJS</a>
                </div>
                <a className="flex items-center text-gray-700" href="#">
                <div className="avatar">
                    <img 
                    className="flex-shrink-0 object-cover object-center w-24 h-24 rounded-full"
                    src={`https://sleepy-cliffs-76413.herokuapp.com${job.attributes.image.data.attributes.url}`}
                    alt={"Photo of " + job.attributes.recruiter} />
                </div>
                <div className="ml-4">
                    <p className="font-semibold text-gray-800 text-md">{job.attributes.recruiter}</p>
                    <p className="text-sm text-gray-500">{job.attributes.publishedAt.substring(0, Max_DATE_LENGHT)}</p>
                    <p className="text-sm text-gray-500">{job.attributes.createdAt.substring(16, Max_TIME_LENGHT)}</p>
                </div>
                </a>
            </div>

            <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
                <p>
                {job.attributes.description}
                </p>
            </div>
            
            <div className="flex flex-col items-center justify-center mt-10 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
                 <Link href="/jobs"><a href="#" className="px-3 py-2 text-indigo-500 border border-indigo-500 border-solid hover:text-black md:w-auto">Back</a>
                 </Link>
             </div>
        </article>
        </>
     )
}
 
export default DetailedJobs;