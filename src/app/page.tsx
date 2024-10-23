"use client";

import { useEffect, useState } from "react";
import { Box, Button, Container, Item, List, Span, Title } from "./style";

export default function HomePage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);

  const getNumbers = () => {
    fetch(`${apiUrl}/sort-number`)
      .then((response) => response.json())
      .then((data) => {
        setSortedNumbers(data);
      });
  };

  return (
    <Container>
      <Box>
        <Title>Números da Sena</Title>
      </Box>
      <Button onClick={getNumbers}>Novos números</Button>
      <List>
        {sortedNumbers.map((num, index) => (
          <Item key={index}>
            <Span>{num}</Span>
          </Item>
        ))}
      </List>
    </Container>
  );
}
