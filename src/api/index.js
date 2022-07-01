import axios from 'axios'
import { appConfig } from './../config'
import { getToken, removeToken } from './../utils'
import history from './../utils/history'

const proxyURL = process.env.REACT_APP_PROXY_URL;

const mainInstance = axios.create({
  baseURL: appConfig.backendBaseUrl
});

const makeRequest = instance => (method, url, ...params) => {
  const accessToken = getToken();
  if (accessToken) {
    axios.defaults.headers.common.authorization = `Token ${accessToken.token}`;
  } else {
    axios.defaults.headers.common.authorization = "";
  }
  instance.interceptors.response.use(
    response => {
      return response;
    }, error => {
      if (error && error.response && error.response.status === 401) {
        if (accessToken) removeToken("authData");
        history.push("/");
      }
      return Promise.reject(error)
    }
  );
  return instance[method](url, ...params);
};

const request = (method, url) => (...params) =>
  makeRequest(mainInstance)(method, url, ...params);

const auth = {
  githubLogin: (...params) =>
    request("post", proxyURL)(...params),
};

const sampleAPIs = {
  getCoffee: (...params) =>
    request('get', '/coffee/hot')(...params),
};


export {
  auth,
  sampleAPIs
};
