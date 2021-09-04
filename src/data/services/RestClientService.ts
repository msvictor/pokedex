import type {
  RestClient,
  RequestWithData,
  RequestWithoutData,
} from '@infra/interfaces/RestClient';

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class RestClientService implements RestClient {
  private authentication = {
    username: process.env.API_USER ?? 'SomeUsername',
    password: process.env.API_PASS ?? 'SomePassword',
  };

  public get({
    path,
    config = {},
    isRequestAuthenticated = false,
  }: RequestWithoutData): Promise<AxiosResponse> {
    const requestConfig: AxiosRequestConfig = isRequestAuthenticated
      ? {
          ...config,
          auth: this.authentication,
        }
      : config;

    return axios.get(path, requestConfig);
  }

  public delete({
    path,
    config = {},
    isRequestAuthenticated = false,
  }: RequestWithoutData): Promise<AxiosResponse> {
    const requestConfig: AxiosRequestConfig = isRequestAuthenticated
      ? {
          ...config,
          auth: this.authentication,
        }
      : config;

    return axios.delete(path, requestConfig);
  }

  public post({
    path,
    data,
    config = {},
    isRequestAuthenticated = false,
  }: RequestWithData): Promise<AxiosResponse> {
    const requestConfig: AxiosRequestConfig = isRequestAuthenticated
      ? {
          ...config,
          auth: this.authentication,
        }
      : config;

    return axios.post(path, data, requestConfig);
  }

  public put({
    path,
    data,
    config = {},
    isRequestAuthenticated = false,
  }: RequestWithData): Promise<AxiosResponse> {
    const requestConfig: AxiosRequestConfig = isRequestAuthenticated
      ? {
          ...config,
          auth: this.authentication,
        }
      : config;

    return axios.put(path, data, requestConfig);
  }

  public patch({
    path,
    data,
    config = {},
    isRequestAuthenticated = false,
  }: RequestWithData): Promise<AxiosResponse> {
    const requestConfig: AxiosRequestConfig = isRequestAuthenticated
      ? {
          ...config,
          auth: this.authentication,
        }
      : config;

    return axios.patch(path, data, requestConfig);
  }
}

export default new RestClientService();
