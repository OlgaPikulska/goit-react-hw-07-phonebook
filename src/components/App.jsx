import { ContactForm } from "./ContactForm";
import { Section } from "./Section";

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts"></Section>
    </>
  );
};
