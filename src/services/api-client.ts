import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '77c32a0ba87d43bb865ed151d2351fe7'
  }
})