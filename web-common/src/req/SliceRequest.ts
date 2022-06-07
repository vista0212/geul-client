export abstract class SliceRequest {
  private static DEFAULT_SLICE_SIZE = 10;

  sliceSize: number = SliceRequest.DEFAULT_SLICE_SIZE;

  lastId?: number;

  protected constructor(sliceSize?: number, lastId?: number) {
    this.sliceSize = sliceSize || SliceRequest.DEFAULT_SLICE_SIZE;
    this.lastId = lastId;
  }
}
