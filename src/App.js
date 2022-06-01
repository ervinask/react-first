import React from "react";
import "normalize.css";

import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Hero title="Title" subtitle="This is subtitle..." />
      <Button type="button" color="bold">
        Ate
      </Button>
    </div>
  );
}

export default App;
