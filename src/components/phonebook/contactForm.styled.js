import styled from 'styled-components';

export const FormEl = styled.form`
  padding: ${p => p.theme.space[4]}px;
  display: grid;
  gap: 10px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.text};
`;

export const LabelEl = styled.label`
  display: grid;
  gap: 5px;
  flex-direction: column;
  max-width: 200px;
`;

export const ButtonEl = styled.button`
  width: 100px;
  margin: 5px 10px;
  background-color: #0a0131ab;
  color: white;
  border-radius: 7px;
  border-color: #0a0131ab;
  &:hover {
    background-color: white;
    color: #0a0131ab;
    border-color: #0a0131ab;
  }
`;
