import styled from "styled-components";
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div,
  & > ul {
    flex: 1;

    h1 {
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 16px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;

    h1 {
      margin-top: 40px;
    }
  }
`;
