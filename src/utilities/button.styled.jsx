import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.backgroundLightColor};
  color: ${({ theme }) => theme.colors.textLightColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: color, background-color, box-shadow 250ms ease-out;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.textLightColor};
    opacity: 0.5;
  }
`;
