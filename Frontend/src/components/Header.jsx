import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign Up"}
      </button>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 4rem;
  .logo {
    img {
      height: 5rem;
      cursor: pointer;
    }
  }
  button {
    padding: 1rem 1.5rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size:1.5rem;
  }
`;
