import styled from '@emotion/styled';

export const PostWrapper = styled.section`
  margin: auto;
  margin-top: 40px;
  
  max-width: 77.5rem;
  padding: 0 1rem;`

export const GoBack = styled.div`
  display: flex;
  align-items: center;
  
  color: #C4C4C4;
  
  column-gap: 0.25rem;
  
  @media screen and (max-width: 968px) {
    font-size: 0.95rem;
  }`

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.25rem;
  
  margin: 1.25rem 0;
  padding: 0 1.25rem;`

export const PostTitle = styled.span`
  font-size: 2rem;
  color: hsla(255, 87%, 100%, 1);
  work-break: break-all;
  
  @media screen and (max-width: 968px) {
    font-size: 1.5rem;
  }`

export const PostBody = styled.p`
  padding: 3.125rem 1.25rem;
  margin: 0;
  
  word-break: break-all;
  
  font-size: 1.125rem;
  color: #fff;
  
  border-top: 1px solid #00E6BB;
  border-bottom: 1px solid #00E6BB;`
