import { Container } from "@/components/layout";
import { Hero, Currently } from "@/components/home";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Currently />
    </Container>
  );
}
