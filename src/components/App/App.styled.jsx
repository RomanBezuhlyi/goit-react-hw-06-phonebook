import styled from '@emotion/styled';

export const Application = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24;
  color: ${({ theme }) => theme.colors.textLightColor};
  background-color: ${({ theme }) => theme.colors.backgroundLightColor}; ;
`;
