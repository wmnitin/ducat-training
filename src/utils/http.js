import axios from 'axios';

const httpFetch = (url, headers) => {
  return axios(url, headers).then(res => res.data)
}

export default httpFetch