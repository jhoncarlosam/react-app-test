const apiKey = '1eG46qAktzUTYYG4ChP5BPXmuIq8JS3S'

export default function getGifs ({keyword = 'berserk'} = {}) {
    const APIURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=4&offset=0&rating=g&lang=en`
    return fetch(APIURL)
        .then(res => res.json())
        .then(response => {
            const {data = []} = response
            if(Array.isArray(data)) {
                const gifs = data.map(image => {
                    const { images, title, id } = image
                    const { url } = images.downsized_medium
                    return { title, id, url }
                })
                return gifs
            }
    })
}