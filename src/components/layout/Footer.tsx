import { Container } from "./Container";
import { SocialLinks } from "../ui/SocialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Hannes Täyrönen
          </p>
          <SocialLinks iconSize="sm" />
        </div>
      </Container>
    </footer>
  );
}
