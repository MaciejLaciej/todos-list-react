import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";

const tasks = [
  { id: 1, content: "Zjeść", done: true },
  { id: 2, content: "Umyć się", done: false },
];

const hideDone = true;

function App() {
const [hideDone, setHideDone] = useState(false);

const toggleHideDone =() => {
  setHideDone(hideDone => !hideDone);
}

  return (
    <div>
      <Container>
        <Header 
        title="Lista zadań"
        />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDone={hideDone} />}
          extraHeaderContent={
          <Buttons
          tasks={tasks}
          hideDone={hideDone}
          toggleHideDone={toggleHideDone}
          />}
        />
      </Container>
    </div >
  );
}

export default App;