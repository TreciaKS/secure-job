export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:1337/api/jobs?populate=*")
    const data = await res.json()

    // convert to string because it returns value as interger
    const paths = data.data.map(item => {
        return {
            params: { id: item.id.toString() }
        }
    })
    
    return {
        paths: paths,
        fallback: false
    }
}

// we run the 'async (context)' function 10 times because we have 10 items in the 'paths' property that holds an array of objects from the URL? API request
// The id of each item that we are going to get is attached to this context object
export const getStaticProps = async (context) => {
    const id = context.params.id

    const res = await fetch("http://localhost:1337/api/jobs?populate=*/" + id)
    const data = await res.json()

    return {
        props: {
            job: data
        }
    }
}

const DetailedJobs = ({job}) => {
    return ( 
        <>
            <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
                Hello {job.attributes.email}
            </h2>
        </>
     )
}
 
export default DetailedJobs;