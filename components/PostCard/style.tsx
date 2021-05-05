import styled from "@emotion/styled";

export const PostCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 15.625rem;
  height: 21.5625rem;
  
  background: #3D3A3A;
  
  border-radius: 4px;
  
  color: hsla(255, 87%, 100%, 1);
  
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 10px hsla(169, 100%, 45%, 0.2);
  }`

export const PostCardImage = styled.img`
  width: 100%;
  height: 15.125rem;
  
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;`

export const PostCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  
  padding: 10px 20px;`

export const PostCardTitle = styled.span`
  margin-bottom: auto;
  
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;`

export const PostCardDate = styled.time`
  margin-left: auto;

  font-size: 0.875rem;`