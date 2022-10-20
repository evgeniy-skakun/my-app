import { AxiosRequestConfig } from 'axios';

import { makeHttpRequest } from '@services/RestService';
import { Profile } from '@models/ProfileModel';

/**
 * @description get the user profile
 *
 * @param uid
 * @param config
 */
export const getUserByUid = async (
  uid: string,
  config?: AxiosRequestConfig,
) => {
  const url = `https://randomuser.me/api/`;
  return makeHttpRequest<{ results: [Profile] }>(
    url,
    'GET',
    {},
    {},
    {},
    config,
  ).then((res) => res.results[0]);
};

/**
 * @description get profiles
 *
 * @param config
 */
export const getUserPofiles = async (config?: AxiosRequestConfig) => {
  const url = `https://randomuser.me/api/`;
  return makeHttpRequest<{ results: [Profile] }>(
    url,
    'GET',
    {},
    { results: 500 },
    {},
    config,
  ).then((res) => res.results);
};
