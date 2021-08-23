import styled from "@emotion/styled";
import { $white } from "@utils/color";

export const MainWrapper = styled.section`  
  width: 100%;
  min-height: 100%;
  
  background: #282626;
  
  font-family: 'Roboto Light';
  
  @font-face { 
    font-family: 'Roboto Light'; 
    src: url(../../styles/font/Roboto-Light.ttf) format('truetype');
  }`

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 77.5rem;
  height: 60px;
  margin: auto;
  padding: 1rem;
  
  @media screen and (max-width: 1260px) {
    max-width: 56.875rem;
  }
  
  @media screen and (max-width: 968px) {
    max-width: 36.25rem;
  }
  
  @media screen and (max-width: 605px) {
    max-width: 15.625rem;
    justify-content: center;
  }`

export const MainLine = styled.hr`
    margin: 0;
    
    height: 1px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #00E6BB;
`

export const AboutButton = styled.button`
  margin: 0;
  padding: 0;
  
  font-size: 24px;
  color: ${$white};
  
  border: none;
  background: none;
  
  @media screen and (max-width: 605px) {
    display: none;
  }`
