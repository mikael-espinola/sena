"use client";

import { LuLoader2 } from "react-icons/lu";
import styled, { keyframes } from "styled-components";

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
    transition: background-color 0.2s ease;
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
  font-size: 15px;

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
  animation: ${rotate} 2s linear infinite;
  font-size: 60px;
  color: white;
`;
