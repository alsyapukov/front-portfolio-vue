import axios from "axios";
import {
  cacheAdapterEnhancer,
  throttleAdapterEnhancer
} from "axios-extensions";

const API = process.env.VUE_APP_API_ADDRESS || 'http://localhost:5001';
// Common Base Instance
export default axios.create({
  adapter: throttleAdapterEnhancer(
    cacheAdapterEnhancer(axios.defaults.adapter)
  ),
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});
