export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:1337/api/jobs?populate=*")

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

    const res = await fetch(`http://localhost:1337/api/jobs/${id}?populate=*`)
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
    return ( 
        <>
            <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
                {job.attributes.vacancy}
                {/* {JSON.stringify(job, null, 2)} */}

            </h2>
        </>
     )
}
 
export default DetailedJobs;