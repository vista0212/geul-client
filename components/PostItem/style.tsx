import styled from '@emotion/styled';
import { $white } from '@utils/color';

export const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  background-color: #3b4252;

  padding: 15px;

  border-radius: 4px;

  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
`;

export const PostItemTitle = styled.h3`
  font-size: 1.5rem;
  color: ${$white};
  margin: 0 0 12px;

  max-width: 700px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const PostItemIntroduce = styled.span`
  display: block;
  font-size: 14px;
  color: ${$white};
  opacity: 0.85;

  letter-spacing: 0.5px;
  line-height: 1.3;
`;

export const PostItemPublishDate = styled.span`
  display: block;
  font-size: 14px;

  color: ${$white};
  opacity: 0.85;
  float: right;
`;
