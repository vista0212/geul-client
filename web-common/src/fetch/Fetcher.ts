import { toQueryString } from '@utils/toQueryString';
import { ApiResponse } from '../res/ApiResponse';

export class Fetcher {
  static async get<T>(url: string, query?: object): Promise<ApiResponse<T>> {
    const result = await fetch(
      process.env.REACT_APP_API_DOMAIN + url + toQueryString(query),
    );
    const { statusCode, message, data } = await result.json();
    return new ApiResponse<T>(statusCode, message, data);
  }

  static async post<T>(url: string, body: object): Promise<ApiResponse<T>> {
    const result = await fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { statusCode, message, data } = await result.json();
    return new ApiResponse<T>(statusCode, message, data);
  }

  static async patch<T>(url: string, body: object): Promise<void> {
    const result = await fetch(url);
  }

  static async delete<T>(url: string, body: object): Promise<void> {
    const result = await fetch(url);
  }
}
