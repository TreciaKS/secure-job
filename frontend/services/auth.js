import axios from 'axios'

// linked hosted heroku url for strapi app
const strapiURL = process.env.STRAPI_URL

export async function signIn({ email, password }) {
    const res = await axios.post(`${strapiURL}/api/auth/local`, 
    {
        identifier: email,
        password,
    });
    return res.data
}