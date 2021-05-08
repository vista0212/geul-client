import styled from "@emotion/styled";

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;

  padding: 1.25rem;
  
  .input {
    border: 1px solid #00E6BB;
    background: #302D2D;
    color: hsla(255, 87%, 100%, 1);
    
    &::placeholder {
      color: hsla(0, 0%, 75%, 50%)
    }
  }`

export const CommentsTitle = styled.span`
  font-size: 1.25rem;
  color: hsla(255, 87%, 100%, 1);`

export const Input = styled.input`
  padding: 0.375rem 0.75rem;
  
  width: 11.125rem;
  height: 2.1875rem;

  font-size: 1.25rem;`

export const SubmitButton = styled.button`
  padding: 0;
  margin: 0;
  
  width: 7.5rem;
  
  font-size: 1.25rem;
  color: hsla(255, 87%, 100%, 1);
  
  border: 0;
  background: #00A687;`

export const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  
  padding: 0;`

export const Comment = styled.li`
  display: flex;
  `