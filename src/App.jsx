import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Role from "./components/Role";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Role />
        </section>
      </main>
    </div>
  );
}

export default App;
