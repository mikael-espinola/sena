"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 1px solid black;
  margin: 0.5rem 2rem;
  background-color: #226522de;
  border-radius: 8px;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.541);

  @media (min-width: 700px) and (max-width: 1023px) {
    margin: 0.5rem 12rem;
  }
  @media (min-width: 1024px) {
    margin: 0.5rem 22rem;
  }
`;
