import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledLinkButton = styled(Link)`
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
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.light ? "var(--secondary)" : "transparent"};
    color: ${(props) => (!props.light ? "var(--secondary)" : "white")};
  }
  p {
    margin: 0;
  }
`;

const StyledActionButton = styled.div`
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
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.light ? "var(--secondary)" : "transparent"};
    color: ${(props) => (!props.light ? "var(--secondary)" : "white")};
  }
  p {
    margin: 0;
  }
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
      <p>{children}</p>
    </StyledActionButton>
  );
};

export default Button;
