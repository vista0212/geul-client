import { ApiResponse } from '../typings/ApiResponse';

export class Fetcher {
  static async get<T>(url: string) {
    const result = await fetch(url);
    const { success, code, data, message } = await result.json();
    return new ApiResponse<T>(success, code, data, message);
  }

  static async post<T>(url: string, body: object) {
    const result = await fetch(url);
  }

  static async patch<T>(url: string, body: object) {
    const result = await fetch(url);

  }

  static async delete<T>(url: string, body: object) {
    const result = await fetch(url);
  }
}