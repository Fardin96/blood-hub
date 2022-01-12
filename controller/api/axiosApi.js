import axios from "axios";

export default axios.create({
    //try and find an alternative to ngrok; this shit expires every 2hrs!
    baseURL: 'https://caad-103-112-150-244.ngrok.io',
});
