import axios from 'axios';

export const callEndpoint = async (url, data) => {
    try {
        const response = await axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY");
        return response;
    } catch (error) {
        return error;
    }
}
