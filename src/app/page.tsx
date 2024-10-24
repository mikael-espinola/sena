"use client";

import { useState } from "react";
import { Box, Button, Container, Icon, Item, List, Span, Title } from "./style";

export default function HomePage() {
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
    <Container>
      <Box>
        <Title>Números da Sena</Title>
      </Box>
      <Button onClick={getNumbers}>Novos números</Button>
      <List>
        {isLoading ? (
          <span>
            <Icon />
          </span>
        ) : (
          sortedNumbers.map((num, index) => (
            <Item key={index}>
              <Span>{num}</Span>
            </Item>
          ))
        )}
      </List>
    </Container>
  );
}
