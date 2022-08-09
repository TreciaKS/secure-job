export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:1337/api/jobs?populate=*")
    const data = await res.json()

    const paths = Object.keys(data).map(item => {
        // throws an error!! can't read toString() and A required parameter (id) was not provided as a string
        return {
            params: { id: item.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: true
    }
}

// we run the 'async (context)' function 10 times because we have 10 items in the 'paths' property that holds an array of objects from the URL? API request
// The id of each item that we are going to get is attached to this context object
export const getStaticProps = async (context) => {
    const id = context.params.id

    const res = await fetch("http://localhost:1337/api/jobs?populate=*" + id)
    const data = await res.json()

    return {
        props: {
            jobItem: data
        }
    }
}

const DetailedJobs = ({jobItem}) => {
    return ( 
        <>
            <h1>Hello {jobItem.attributes.vacancy}</h1>
        </>
     )
}
 
export default DetailedJobs;