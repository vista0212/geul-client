import { SliceRequest } from '../../../web-common/src/req/SliceRequest';

export class PostFindRequest extends SliceRequest {
  tags: string[] = [];

  constructor(tags?: string[], sliceSize?: number, lastId?: number) {
    super(sliceSize, lastId);
    this.tags = tags || [];
  }
}
