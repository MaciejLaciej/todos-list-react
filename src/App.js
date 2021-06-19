import Form from "./Form"
import Tasks from "./Tasks"
import Buttons from "./Buttons"

const tasks = [
  {id: 1, content: "Zjeść", done: true },
  {id: 2, content: "Umyć się", done: false },
];

const hideDoneTasks = true;

function App() {
  return (
    <div>
      <main className="container">
        <header>
          <h1 className="container__header">Lista zadań</h1>
        </header>

        <section className="section">
          <h2 className="section__header">Dodaj nowe zadanie</h2>
          <div className="section__body">
            <Form />
          </div>
        </section>
        <section className="section">
          <header className="section__header">
            <h2>Lista zadań</h2>
            <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
          </header>
          <div className="section__body"></div>
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </section>
      </main>
    </div>
  );
}

export default App;
