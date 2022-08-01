import styled from '@emotion/styled';
import { $white } from '@utils/color';

export const PostListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 80px 0;
  margin: auto;

  max-width: 910px;

  column-gap: 5rem;
  row-gap: 30px;

  @media screen and (max-width: 968px) {
    max-width: 580px;
  }

  @media screen and (max-width: 605px) {
    max-width: 250px;
  }
`;

export const PostListSearchInput = styled.input`
  max-width: 700px;
  width: 100%;
  height: 40px;

  padding: 0 5px;
  font-size: 26px;

  background: none;
  border: none;
  border-bottom: 1px solid #81a1c1;
  outline: none;
  color: ${$white};

  letter-spacing: 0.5px;
`;
