import styled from '@emotion/styled';
import { $white } from '@utils/color';

export const PostWrapper = styled.section`
  margin: auto;
  margin-top: 40px;

  max-width: 910px;
  padding: 0 1rem;

  @media screen and (max-width: 968px) {
    max-width: 580px;
  }

  @media screen and (max-width: 605px) {
    max-width: 250px;
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

  border-top: 1px solid #81a1c1;
  border-bottom: 1px solid #81a1c1;
`;
