import axios from 'axios';
import ENV from './env';

export const getApiEndpoint = url => ENV.api.base_url + url;

export const request = opts => {
  if (!opts.url) {
    throw new Error('url is required');
  }
  opts.baseURL = ENV.api.base_url;
  opts.method = opts.method || 'get';
  const parsedUrl = new URL(opts.url, ENV.api.base_url);
  if (!parsedUrl.searchParams.has('client_id')) {
    parsedUrl.searchParams.append('client_id', ENV.api.client_id);
  }
  if (!parsedUrl.searchParams.has('client_secret')) {
    parsedUrl.searchParams.append('client_secret', ENV.api.client_secret);
  }

  const url = parsedUrl.toString();

  return axios({ ...opts, url })
    .then(res => {
      return res.data;
    })
    .catch(res => {
      let err = null;
      let response = res.response;
      if (response && response.data && response.data.error) {
        err = response.data.error;
        err.status = response.status;
      } else if (response) {
        err = new Error(response.statusText);
        err.status = response.status;
      } else {
        err = new Error(res.message || 'HTTP Error');
        err.status = 0;
      }

      err._logged = true;

      throw err;
    });
};
export const get = (url, params) => request({ url, params });

export const post = (url, params, data) =>
  request({ method: 'post', url, params, data });

export const put = (url, params, data) =>
  request({ method: 'put', url, params, data });

export const del = (url, params, data) =>
  request({ method: 'delete', url, params, data });

export const head = (url, params) => request({ method: 'head', url, params });
