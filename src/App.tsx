function App() {
  return (
    <div className="dashboard">
      <header>
        <h1>Mi Dashboard de Proyectos</h1>
      </header>
      <main>
        <section className="projects">
          <h2>Mis Proyectos</h2>
          <div className="project-buttons">
            <button>Proyecto Alpha</button>
            <button>Proyecto Beta</button>
            <button>Proyecto Gamma</button>
          </div>
        </section>
        <section className="learning">
          <h2>Mis Apuntes de Aprendizaje</h2>
          <div
            className="learning-content"
            contentEditable="true"
            suppressContentEditableWarning={true}
          >
            Escribe aquí tus notas...
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
