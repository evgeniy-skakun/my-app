import axios, { AxiosRequestConfig } from 'axios';

/**
 * @description Wrapper used to make REST API calls to the backend
 * @author Haron Arama
 *
 * @param url
 * @param method
 * @param body
 * @param params
 * @param headers
 * @param config
 */
export const makeHttpRequest = async <T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS',
  body?: any,
  params?: any,
  headers?: Record<string, string>,
  config?: AxiosRequestConfig,
) => {
  const token: string | undefined = '...'; // await auth().currentUser?.getIdToken();

  const options: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      'x-my-app-version': '...',
      'x-api-key': '...',
      ...headers,
    },
    params,
    ...(config || {}),
  };

  const route = `${url}`;

  let response = undefined;
  switch (method) {
    case 'GET':
      response = axios.get(route, options);
      break;
    case 'POST':
      response = axios.post(route, body, options);
      break;
    case 'PATCH':
      response = axios.patch(route, body, options);
      break;
    case 'PUT':
      response = axios.put(route, body, options);
      break;
    case 'DELETE':
      response = axios.delete(route, options);
      break;
    default:
      throw `${method} is not a valid HTTP request.`;
  }

  return response.then((res: { data: T }) => {
    return res.data;
  });
};
