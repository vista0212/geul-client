import styled from '@emotion/styled';
import { $white } from '@utils/color';

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;

  padding: 1.25rem;
  
  .input {
    border: 1px solid #00E6BB;
    background: #302D2D;
    color: ${$white};
    
    &::placeholder {
      color: hsla(0, 0%, 75%, 50%)
    }
  }`;

export const CommentsTitle = styled.span`
  font-size: 1.25rem;
  color: ${$white};`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem`;

export const InputWithButton = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 605px) {
    flex-direction: column;
  }`;

export const InputBox = styled.div`
  display: flex;
  column-gap: 0.5rem;
  
  @media screen and (max-width: 605px) {
    margin-bottom: 0.5rem;
  }`;

export const Input = styled.input`
  padding: 0.375rem 0.75rem;
  
  width: 11.125rem;
  height: 2.1875rem;

  font-size: 1.25rem;
  
  &:focus-visible {
    outline: none !important;
    border-color: #00E6BB;
    box-shadow: 0 0 10px #719ECE;
  }
  
  @media screen and (max-width: 605px) {
    width: 50%;
  }`;

export const CommentInput = styled.textarea`
  height: 130px;
  
  border: 1px solid #00E6BB;
  background: none;
  resize: none;
  
  &:focus-visible {
    outline: none !important;
    border-color: #00E6BB;
    box-shadow: 0 0 10px #719ECE;
  }
`

export const SubmitButton = styled.button`
  padding: 0;
  margin: 0;
  
  width: 7.5rem;
  
  font-size: 1.25rem;
  color: ${$white};
  
  border: 0;
  background: #00A687;
  
  cursor: pointer;
  
  &:hover {
    background: #009274;
  }
  
  @media screen and (max-width: 605px) {
    width: 100%;
    height: 2.1875rem;
  }`;

export const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  
  padding: 0;`;