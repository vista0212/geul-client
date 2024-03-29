import styled from '@emotion/styled';
import { $white } from '@utils/color';

export const MainWrapper = styled.section`
  width: 100%;
  min-height: 100%;

  background: #2e3440;

  font-family: 'Roboto Light';

  @font-face {
    font-family: 'Roboto Light';
    src: url(../../styles/font/Roboto-Light.ttf) format('truetype');
  }
`;

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 77.5rem;
  height: 60px;
  margin: auto;
  padding: 0 16px;

  @media screen and (max-width: 1260px) {
    max-width: 56.875rem;
  }

  @media screen and (max-width: 968px) {
    max-width: 36.25rem;
  }

  @media screen and (max-width: 605px) {
    max-width: 15.625rem;
    justify-content: center;
  }
`;

export const MainLine = styled.hr`
  margin: 0;

  height: 1px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #81a1c1;
`;

export const HeaderMenuButton = styled.span`
  padding: 10px;

  display: flex;
  align-items: center;

  height: 100%;

  font-size: 18px;
  text-decoration: none;
  color: ${$white};

  background: none;

  border: none;

  cursor: pointer;

  :hover {
    //filter: brightness(0.85);
    background: #3b4252;
  }
`;
