import React from 'react';

function App() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Panel de Proyectos</h1>
      </header>
      <main>
        <section className="projects-section">
          <h2>Mis Proyectos</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Proyecto Alpha</h3>
              <p>Descripción breve del estado actual del proyecto.</p>
              <button>Ver Detalles</button>
            </div>
            <div className="project-card">
              <h3>Proyecto Beta</h3>
              <p>Descripción breve del estado actual del proyecto.</p>
              <button>Ver Detalles</button>
            </div>
            <div className="project-card">
              <h3>Nuevo Proyecto</h3>
              <button>+ Agregar</button>
            </div>
          </div>
        </section>
        <section className="learning-section">
          <h2>Área de Aprendizaje</h2>
          <div
            className="editable-content"
            contentEditable="true"
            suppressContentEditableWarning={true}
          >
            <p>Haz clic aquí para escribir tus notas...</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
