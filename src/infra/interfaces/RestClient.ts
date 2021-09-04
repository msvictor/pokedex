import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestWithoutData {
  path: string;
  config?: AxiosRequestConfig;
  isRequestAuthenticated?: boolean;
}

export interface RequestWithData {
  path: string;
  data: unknown;
  config?: AxiosRequestConfig;
  isRequestAuthenticated?: boolean;
}

export abstract class RestClient {
  public abstract get(params: RequestWithoutData): Promise<AxiosResponse>;

  public abstract delete(params: RequestWithoutData): Promise<AxiosResponse>;

  public abstract post(params: RequestWithData): Promise<AxiosResponse>;

  public abstract put(params: RequestWithData): Promise<AxiosResponse>;

  public abstract patch(params: RequestWithData): Promise<AxiosResponse>;
}
