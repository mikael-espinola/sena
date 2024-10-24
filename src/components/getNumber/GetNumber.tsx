"use client";
import React, { useState } from "react";
import {
  BoxResults,
  Button,
  Icon,
  Item,
  List,
  ListResult,
  Result,
  Span,
  SpanRresult,
} from "./style";

interface TArr {
  numberList: number[];
}

const GetNumber = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);
  const [numbersList, setNumbersList] = useState<number[][]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getNumbers = () => {
    setIsLoading(true);
    fetch(`${apiUrl}`)
      .then((response) => response.json())
      .then((data) => {
        setSortedNumbers(data);
        setNumbersList((prev) => [...prev, data]);
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
      <BoxResults>
        {numbersList.map((arr, index) => (
          <SpanRresult key={index}>
            <h3>{index + 1}</h3>
            <ListResult>
              {arr.map((num, indexNum) => (
                <Result key={indexNum}>{num}</Result>
              ))}
            </ListResult>
          </SpanRresult>
        ))}
      </BoxResults>
    </>
  );
};

export default GetNumber;
