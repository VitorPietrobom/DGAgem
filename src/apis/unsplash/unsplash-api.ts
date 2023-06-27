import axios from "axios";


const apiAccessKey = "K7s-f8GcN6uc77oVlJbBcY5HqvyfTqzD9JwzfkhLAqw";
const apiURLs = {
    base: "https://api.unsplash.com/",
    searchPhotos: "search/photos"
}

const defaultErrorHandler = (error: any) => {
    console.log(error);
}

export const getRandomCityPhoto = (city: string, successCalbackFunction: Function) => {
    const endpointURL = `${apiURLs.base}${apiURLs.searchPhotos}`;
    const endpointConfig = {
        headers: {
            Authorization: `Client-ID ${apiAccessKey}`
        },
        params: {
            query: city,
            per_page: 100,
            orientation: "landscape",
        }
    };
    axios.get(endpointURL, endpointConfig)
    .then((response) => successCalbackFunction(response.data))
    .catch(defaultErrorHandler);
}