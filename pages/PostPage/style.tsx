import styled from '@emotion/styled';
import { $white } from '@utils/color';

export const PostWrapper = styled.section`
  margin: auto;
  margin-top: 40px;

  max-width: 77.5rem;
  padding: 0 1rem;
`;

export const GoBack = styled.div`
  display: flex;
  align-items: center;

  color: #c4c4c4;

  column-gap: 0.25rem;

  @media screen and (max-width: 968px) {
    font-size: 0.95rem;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.25rem;

  margin: 1.25rem 0;
  padding: 0 1.25rem;
`;

export const PostTitle = styled.h1`
  margin: 0;
  font-weight: 500;

  font-size: 2rem;
  color: ${$white};
  work-break: break-all;

  @media screen and (max-width: 968px) {
    font-size: 1.5rem;
  }
`;

export const PostBody = styled.p`
  padding: 3.125rem 1.25rem;
  margin: 0;

  word-break: break-all;

  line-height: 1.5;
  letter-spacing: -0.3px;
  font-size: 1.125rem;
  color: ${$white};

  border-top: 1px solid #00e6bb;
  border-bottom: 1px solid #00e6bb;
`;
