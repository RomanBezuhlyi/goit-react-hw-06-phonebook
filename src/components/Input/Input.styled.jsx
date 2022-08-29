import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const InputField = styled.input`
  display: block;
  margin-bottom: 20px;

  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.borderMiddleColor};
  transition: box-shadow 250ms ease-out;

  &:focus-within {
    outline: none;
    box-shadow: 0 0 7px ${({ theme }) => theme.colors.accentColor};
  }
`;
