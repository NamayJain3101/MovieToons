import * as contentful from 'contentful'

export const Client = contentful.createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})