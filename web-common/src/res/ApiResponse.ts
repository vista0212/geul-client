export class ApiResponse<T> {
  private readonly _statusCode: string;
  private readonly _message: string;
  private readonly _data: T;

  constructor(statusCode: string, message: string, data: T) {
    this._statusCode = statusCode;
    this._message = message;
    this._data = data;
  }

  get isSuccess(): boolean {
    return this._statusCode === 'OK';
  }

  get statusCode(): string {
    return this._statusCode;
  }

  get message(): string {
    return this._message;
  }

  get data(): T {
    return this._data;
  }
}
