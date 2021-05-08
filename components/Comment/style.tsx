import styled from "@emotion/styled";

export const CommentWrapper = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  
  padding-top: 0.5rem;
  
  background: #3D3A3A;
  
  border-radius: 0.25rem;`

export const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 0.75rem;
 
  font-size: 1.25rem;
  color: #fff;
  
  .icon_wrapper:first-child {
    margin-right: 0.5rem;
  }`

export const CommentLine = styled.hr`
  margin: 0;
  
  height: 1px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #00E6BB;`

export const CommentBody = styled.p`
  padding: 0 0.75rem;
  
  font-size: 1rem;
  color: #fff;`