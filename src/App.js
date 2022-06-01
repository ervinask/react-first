import React from "react";
import "normalize.css";

import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";
import Section from "./components/Section/Section";
import Article from "./components/Article/Article";

function App() {
  return (
    <div>
      <Hero title="Title" subtitle="This is subtitle..." />
      <Section>
        <Button type="button" color="bold">
          Ate
        </Button>
        <Button type="button" color="outline">
          Labas
        </Button>
      </Section>
    </div>
  );
}

export default App;
