import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  display: inline-block;
  padding: 0.5rem 2.5rem;
  text-align: center;
  background-color: ${(props) =>
    !props.light ? "var(--secondary)" : "transparent"};
  border: 2px solid var(--secondary);
  font-family: "Roboto", sans-serif;
  font-family: "Roboto", sans-serif;
  margin-top: 4rem;
  color: ${(props) => (props.light ? "var(--secondary)" : "white")};
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 1rem;

  &&:hover {
    background-color: ${(props) =>
      props.light ? "var(--secondary)" : "transparent"};
    color: ${(props) => (!props.light ? "var(--secondary)" : "white")};
  }
`;

const Button = ({ href, children, light }) => {
  return (
    <StyledButton href={href} light={light}>
      {children}
    </StyledButton>
  );
};

export default Button;
