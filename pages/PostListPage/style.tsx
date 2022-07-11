import styled from '@emotion/styled';

export const PostsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 80px 0;
  margin: auto;

  max-width: 56.875rem;

  column-gap: 5rem;
  row-gap: 30px;

  @media screen and (max-width: 968px) {
    max-width: 36.25rem;
  }

  @media screen and (max-width: 605px) {
    max-width: 15.625rem;
  }
`;
