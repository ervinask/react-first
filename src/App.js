import React from "react";
import "normalize.css";

import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";
import Section from "./components/Section/Section";
import Article from "./components/Article/Article";

function App() {
  return (
    <>
      <Hero title="React" subtitle="We love react" />
      <Section>
        <Article title="Best Javascript Libraries">
          <ul>
            <li>React</li>
            <li>React!</li>
            <li>React!!!!!!!!!!!!!!!</li>
          </ul>
        </Article>
      </Section>

      <Section>
        <Article title="Do you love react?">
          <p>
            React. js is an open-source JavaScript library that is used for
            building user interfaces specifically for single-page applications.
            It's used for handling the view layer for web and mobile apps. React
            also allows us to create reusable UI components
          </p>

          <Button
            type="button"
            handleClick={() => window.location.replace("https://reactjs.org/")}
          >
            Yes
          </Button>
          <Button
            type="button"
            color="outline"
            handleClick={() => window.location.replace("https://reactjs.org/")}
          >
            Yes
          </Button>
        </Article>
      </Section>
    </>
  );
}

export default App;
