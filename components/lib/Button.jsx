import React from "react";
import styled from "styled-components";


const commonStyles = ` 
 cursor: pointer;
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
  }`;

const StyledLinkButton = styled.a`
  ${commonStyles}
`;

const StyledActionButton = styled.div`
  ${commonStyles}
`;

const Button = ({
  href,
  children,
  light = false,
  isLink,
  onClick,
  openInNewTab,
}) => {
  return isLink ? (
    <StyledLinkButton
      href={href}
      light={light}
      target={openInNewTab && "_blank"}
    >
      {children}
    </StyledLinkButton>
  ) : (
    <StyledActionButton light={light} onClick={onClick}>
      {children}
    </StyledActionButton>
  );
};

export default Button;
