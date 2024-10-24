"use client";
import { LuLoader2 } from "react-icons/lu";
import styled, { keyframes } from "styled-components";

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

export const Box = styled.header`
  display: flex;
`;

export const Title = styled.h1`
  white-space: nowrap;
`;

export const Button = styled.button`
  margin-top: 5rem;
  background-color: #154a34;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
  border: none;
  &:active {
    background-color: #143f2d;
    transition: background-color 0.2s ease; /* Controla a transição da cor */
  }

  &:focus-visible {
    outline: 2px solid aqua;
    outline-offset: 4px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 5rem;
  padding: 1rem;
  width: 100%;
  height: 5rem;
`;

export const Item = styled.li`
  font-size: 22px;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Span = styled.span`
  text-decoration: underline;
  color: white;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Icon = styled(LuLoader2)`
  animation: ${rotate} 2s linear infinite; // 2s é o tempo da animação, pode ser ajustado
  font-size: 40px;
  color: white;
`;
