import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "1d428a185b66469cbf48ffa79e7fc475"
    }
})