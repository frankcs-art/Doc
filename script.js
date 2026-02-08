document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard interactivo cargado.');

    // --- Lógica del Modal ---

    const modal = document.getElementById('project-modal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const detailButtons = document.querySelectorAll('.button[data-project]');

    // Contenido de ejemplo para cada proyecto
    const projectDetails = {
        alpha: {
            title: 'Detalles del Proyecto Alpha',
            description: 'Este es un análisis detallado del Proyecto Alpha. Actualmente estamos en la fase de desarrollo del prototipo, centrándonos en la funcionalidad principal. Los próximos pasos incluyen pruebas de usuario y la iteración del diseño.'
        },
        beta: {
            title: 'Detalles del Proyecto Beta',
            description: 'El Proyecto Beta está en la fase de planificación. Se han definido los requisitos y ahora estamos creando el cronograma del proyecto. El siguiente hito es la asignación de recursos y el inicio del desarrollo.'
        },
        gamma: {
            title: 'Detalles del Proyecto Gamma',
            description: 'El Proyecto Gamma está a punto de ser lanzado. Se han completado todas las fases de desarrollo y pruebas. Actualmente estamos preparando la documentación final y el plan de marketing para el lanzamiento.'
        }
    };

    // Abrir el modal y rellenar con datos
    detailButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const projectName = button.getAttribute('data-project');
            const details = projectDetails[projectName];

            if (details) {
                modalTitle.textContent = details.title;
                modalDescription.textContent = details.description;
                modal.style.display = 'block';
            }
        });
    });

    // Cerrar el modal
    const closeModal = () => {
        modal.style.display = 'none';
    };

    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // --- Fin de la Lógica del Modal ---


    // --- Lógica del Gráfico de Aprendizaje ---

    const ctx = document.getElementById('learningChart').getContext('2d');
    const learningChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Proyecto Alpha', 'Proyecto Beta', 'Proyecto Gamma'],
            datasets: [{
                label: 'Progreso del Proyecto (%)',
                data: [75, 40, 95], // Datos de ejemplo
                backgroundColor: [
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(231, 76, 60, 0.7)',
                    'rgba(46, 204, 113, 0.7)'
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(231, 76, 60, 1)',
                    'rgba(46, 204, 113, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Progreso General de los Proyectos'
                }
            }
        }
    });

    // --- Fin de la Lógica del Gráfico ---
});
