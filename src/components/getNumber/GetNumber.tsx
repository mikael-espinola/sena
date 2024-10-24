"use client";
import React, { useState } from "react";
import { Button, Icon, Item, List, Span } from "./style";

const GetNumber = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getNumbers = () => {
    setIsLoading(true);
    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then((data) => {
        setSortedNumbers(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <Button onClick={getNumbers}>Novos números</Button>
      <List>
        {isLoading ? (
          <Item>
            <Icon />
          </Item>
        ) : (
          sortedNumbers.map((num, index) => (
            <Item key={index}>
              <Span>{num}</Span>
            </Item>
          ))
        )}
      </List>
    </>
  );
};

export default GetNumber;
