import GetNumber from "@/components/getNumber/GetNumber";
import { Container } from "./style";
import Title from "@/components/title/Title";

export default function HomePage() {
  return (
    <Container>
      <Title />
      <GetNumber />
    </Container>
  );
}
