import { Button } from "@/components/ui/button";
import Container from "@/components/Container";

export default function Home() {
  return (
   <div>
   <Container className="py-20">
     <h2>Ecommerce site</h2>
    <Button variant="destructive">Click Me</Button>
   </Container>
   </div>
  );
}

