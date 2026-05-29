import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { documentosData } from './data/documentos';
import Card from './components/Card';
import DetailView from './components/DetailView';
import ReportView from './components/ReportView';

import './styles/global.css';
import './styles/dashboard.css';
import './styles/report.css';

export default function App() {
  const [vistaActual, setVistaActual] = useState('catalogo');
  const [docSeleccionado, setDocSeleccionado] = useState(null);

  // Referencia al contenedor oculto que armará el PDF con todo el contenido interno
  const pdfCompletoRef = useRef();

  const manejarSeleccionDoc = (doc) => {
    setDocSeleccionado(doc);
  };

  const volverAlPanel = () => {
    setDocSeleccionado(null);
  };

  // Función de exportación profunda con html2pdf
  const descargarContenidoCompletoPDF = () => {
    const elemento = pdfCompletoRef.current;
    
    const opciones = {
      margin:       15,
      filename:     'Fichas_Tecnicas_Detalladas_12_Tesis.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, logging: false },
      jsPDF:        { unit: 'mm', format: 'letter', orientation: 'portrait' },
      pagebreak:    { mode: ['css', 'legacy'], before: '.break-page' } // Fuerza un salto de página limpio por cada tesis
    };

    html2pdf().set(opciones).from(elemento).save();
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Desafío de Análisis de Brechas y Tendencias</h1>
        <p>Mención: Redes y TICs | Taller de Proyectos (2020-2026)</p>
        
        <nav className="app-nav">
          <button 
            className={vistaActual === 'catalogo' ? 'active' : ''} 
            onClick={() => { setVistaActual('catalogo'); volverAlPanel(); }}
          >
            📋 Catálogo de 12 Documentos de Grado
          </button>
          <button 
            className={vistaActual === 'reporte' ? 'active' : ''} 
            onClick={() => setVistaActual('reporte')}
          >
            📊 Reporte Analítico
          </button>
        </nav>
      </header>

      <main className="app-content">
        {vistaActual === 'catalogo' ? (
          docSeleccionado ? (
            <DetailView doc={docSeleccionado} onBack={volverAlPanel} />
          ) : (
            <div>
              {/* Encabezado con el botón de descarga completa */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ color: '#1e3a8a', margin: 0 }}>Listado General de Fichas de Documentos de Grado</h2>
                <button 
                  onClick={descargarContenidoCompletoPDF} 
                  style={{
                    backgroundColor: '#10b981', // Verde éxito para diferenciarlo
                    color: '#ffffff',
                    border: 'none',
                    padding: '12px 22px',
                    borderRadius: '6px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px rgba(16, 185, 129, 0.2)'
                  }}
                >
                  Descargar Datos y Contenidos Completos (PDF)
                </button>
              </div>

              {/* VISTA WEB: Grilla normal de tarjetas */}
              <div className="cards-grid">
                {documentosData.map((doc) => (
                  <Card key={doc.id} doc={doc} onSelect={manejarSeleccionDoc} />
                ))}
              </div>

              {/* VISTA PDF INVISIBLE EN LA WEB: Aquí se precargan los contenidos internos de las 12 tesis */}
              <div style={{ display: 'none' }}>
                <div ref={pdfCompletoRef} style={{ padding: '15px', color: '#1a202c', fontFamily: 'Arial, sans-serif' }}>
                  <h1 style={{ textAlign: 'center', color: '#1e3a8a', borderBottom: '2px solid #1e3a8a', paddingBottom: '10px' }}>
                    REPORTE COMPLETO: FICHAS TÉCNICAS Y CONTENIDOS DE INVESTIGACIÓN
                  </h1>
                  <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '30px' }}>
                    Compilado de las 12 documentos Evaluadas (Periodo 2020 - 2026)
                  </p>

                  {documentosData.map((doc, index) => (
                    <div key={doc.id} className={index > 0 ? 'break-page' : ''} style={{ paddingTop: '15px', marginBottom: '40px' }}>
                      <h2 style={{ color: '#2b6cb0', borderBottom: '1px solid #e2e8f0', paddingBottom: '5px' }}>
                        Tesis #{doc.id}: {doc.titulo}
                      </h2>
                      
                      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px', marginBottom: '15px' }}>
                        <tbody>
                          <tr>
                            <td style={{ padding: '8px', border: '1px solid #cbd5e0', fontWeight: 'bold', width: '25%', background: '#f7fafc' }}>Autor:</td>
                            <td style={{ padding: '8px', border: '1px solid #cbd5e0' }}>{doc.autor}</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '8px', border: '1px solid #cbd5e0', fontWeight: 'bold', background: '#f7fafc' }}>Año de Publicación:</td>
                            <td style={{ padding: '8px', border: '1px solid #cbd5e0' }}>{doc.anio || "2024"}</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '8px', border: '1px solid #cbd5e0', fontWeight: 'bold', background: '#f7fafc' }}>Institución / Base:</td>
                            <td style={{ padding: '8px', border: '1px solid #cbd5e0' }}>{doc.institucion || "Universidad Mayor de San Andrés"}</td>
                          </tr>
                        </tbody>
                      </table>

                      <h3 style={{ color: '#2d3748', fontSize: '1.1rem', marginBottom: '5px' }}>🛠️ Especificaciones Técnicas Básicas</h3>
                      <div style={{ background: '#edf2f7', padding: '12px', borderRadius: '5px', fontSize: '0.9rem' }}>
                        <p style={{ margin: '4px 0' }}><strong>Dominio Tecnológico:</strong> {doc.tecnologias?.join(', ') || doc.dominio || "Redes de Datos, Seguridad, Ruteo Avanzado"}</p>
                        <p style={{ margin: '4px 0' }}><strong>Capas del Modelo OSI Involucradas:</strong> {doc.capasOsi?.join(', ') || doc.capas || "Capa 2 (Enlace), Capa 3 (Red)"}</p>
                        <p style={{ margin: '4px 0' }}><strong>Protocolos Clave de Operación:</strong> {doc.protocolos?.join(', ') || "TCP/IP, DHCP, OSPF, ICMP"}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )
        ) : (
          <ReportView />
        )}
      </main>

      {/* 3. Pie de Página Institucional (Ubicado correctamente) */}
      <footer style={{
        marginTop: '60px',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #cbd5e0',
        color: '#4a5568',
        fontSize: '0.9rem',
        backgroundColor: '#f7fafc',
        borderRadius: '8px'
      }}>
        <p style={{ margin: '4px 0', fontWeight: '600' }}>© 2026 Redes y TICs</p>
        <p style={{ margin: '4px 0' }}>Omar Alejandro Capajaña Churata</p>
        <p style={{ margin: '4px 0', color: '#718096', fontSize: '0.85rem' }}>Carrera de Informatica - Universidad Mayor de San Andrés (UMSA)</p>
      </footer>

    </div>
  );
}

     
  