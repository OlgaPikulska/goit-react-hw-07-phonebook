import { ContactForm } from "./ContactForm";
import { Filter } from "./Filter";
import { Section } from "./Section";

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
      </Section>
    </>
  );
};
