import './App.css'

function App() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Panel de Proyectos Personales</h1>
      </header>
      <main className="dashboard-main">
        <section className="projects-section">
          <h2>Mis Proyectos</h2>
          <div className="project-buttons">
            <button>Proyecto "Galaxia"</button>
            <button>Proyecto "Océano"</button>
            <button>Nuevo Proyecto</button>
          </div>
        </section>
        <section className="learning-section">
          <h2>Visual de Aprendizaje</h2>
          <div
            className="editable-visual"
            contentEditable="true"
            aria-label="Área de notas editable. Haz clic para empezar a escribir."
            role="textbox"
          >
            <p>Aquí puedes escribir tus notas...</p>
          </div>
        </section>
      </main>
      <footer className="dashboard-footer">
        <p>🎨 Diseñado con cariño por Palette.</p>
      </footer>
    </div>
  )
}

export default App
