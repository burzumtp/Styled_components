import styled from "styled-components";
export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;
  text-align: center;

  ul {
    list-style: none;
    margin-top: 30px;
  }
  ul li {
    margin-bottom: 20px;
  }
  p {
    text-align: right;
  }
`;
