import React from 'react';

export default function Card({ doc, onSelect }) {
  const isMaestria = doc.tag.includes('Maestría');
  const isIndexado = doc.tag.includes('IEEE') || doc.tag.includes('SciELO');
  const badgeClass = isMaestria ? 'badge-maestria' : isIndexado ? 'badge-indexado' : 'badge-pregrado';

  return (
    <div className="card-container">
      <span className={`card-badge ${badgeClass}`}>{doc.tag}</span>
      <h3 className="card-title">{doc.titulo}</h3>
      <p className="card-author">Autor: {doc.autor} ({doc.anio})</p>
      <button className="card-btn" onClick={() => onSelect(doc)}>
        Seleccionar y Ver Datos
      </button>
    </div>
  );
}