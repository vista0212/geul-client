export class SliceResponse<T> {
  private readonly _sliceSize: number;
  private readonly _hasMoreItems: boolean;
  private readonly _items: T[];

  constructor(sliceSize: number, items: T[]) {
    this._sliceSize = sliceSize;
    this._hasMoreItems = items.length > sliceSize;
    this._items = items.slice(0, sliceSize);
  }

  get sliceSize(): number {
    return this._sliceSize;
  }

  get hasMoreItems(): boolean {
    return this._hasMoreItems;
  }

  get items(): T[] {
    return this._items;
  }
}
