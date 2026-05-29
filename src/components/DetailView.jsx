import React from 'react';

export default function DetailView({ doc, onBack }) {
  if (!doc) return null;

  return (
    <div className="detail-view-container">
      <div className="detail-header">
        <button className="btn-back" onClick={onBack}>← Volver al Panel</button>
        <h2>[Ventana de Detalle] Documento #{doc.id}</h2>
      </div>
      
      <table className="tech-table">
        <tbody>
          <tr>
            <th>Dato de Origen Ordenado</th>
            <td>{doc.origenCompleto}</td>
          </tr>
          <tr>
            <th>Dominio Tecnológico Principal</th>
            <td>{doc.dominio}</td>
          </tr>
          <tr>
            <th>Capa Modelo OSI/TCP-IP</th>
            <td>{doc.capa}</td>
          </tr>
          <tr>
            <th>Entorno de Validación</th>
            <td>{doc.entorno}</td>
          </tr>
        </tbody>
      </table>
      
      <a href={doc.link} target="_blank" rel="noreferrer" className="doc-link">
        🔗 Enlace Oficial al Repositorio de Origen
      </a>
    </div>
  );
}