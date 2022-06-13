export class ApiResponseTemp<T> {
  constructor(
    private _success: boolean,
    private _code: boolean,
    private _data: T,
    private _message: string,
  ) {}

  get isSuccess(): boolean {
    return this._success;
  }

  get success(): boolean {
    return this._success;
  }

  get code(): boolean {
    return this._code;
  }

  get data(): T {
    return this._data;
  }

  get message(): string {
    return this._message;
  }
}
