import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  justify-content: space-between;
  flex-direction: ${({ layout }) => layout || "row"};

  & > div {
    flex: 1;
  }
  img {
    max-width: 80%;
    overflow: hidden;
  }

  h2 {
    margin-bottom: 8px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    gap: 40px;
    height: 80vh;
    text-align: center;
  }
`;
