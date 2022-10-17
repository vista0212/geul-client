import { SliceRequest } from '../../../web-common/src/req/SliceRequest';

export class PostFindRequest extends SliceRequest {
  private readonly tags: string[];
  private readonly keyword: string;

  constructor(
    keyword: string,
    tags?: string[],
    sliceSize?: number,
    lastId?: number,
  ) {
    super(sliceSize, lastId);
    this.tags = tags || [];
    this.keyword = keyword;
  }
}
