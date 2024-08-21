import React from "react";
import { Container } from "./styles/Container.styled";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" />
          <Button>Try it Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build the Community Your Fans Will Love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              expedita animi cum itaque nulla delectus nesciunt eius voluptate.
              At, eius. Lorem ipsum dolor sit amet consectetur.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started for free
            </Button>
          </div>

          <Image src="./images/illustration-mockups.svg"></Image>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
