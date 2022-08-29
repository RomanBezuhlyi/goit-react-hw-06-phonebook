import styled from '@emotion/styled';

export const Title = styled.h1`
  display: block;
  width: 100%;
  margin-top: 0;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 36px;
  line-height: 1.25;
  text-transform: uppercase;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.backgroundDarkColor};
`;
