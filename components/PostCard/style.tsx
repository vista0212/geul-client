import styled from '@emotion/styled';
import { $white } from '@utils/color';

export const PostCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 15.625rem;
  height: 21.5625rem;

  background: #3b4252;

  border-radius: 4px;

  color: ${$white};

  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 7px 7px hsla(220, 16.8%, 31.6%, 10);
  }
`;

export const PostCardImage = styled.img`
  width: 100%;
  height: 15.125rem;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const PostCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  padding: 10px 20px;
`;

export const PostCardTitle = styled.span`
  margin-bottom: auto;

  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  white-space: nowrap;

  &:link {
    border: 0;
  }
`;

export const PostCardDate = styled.time`
  margin-left: auto;

  font-size: 0.875rem;
`;
