import React from 'react';
// 1. Importamos el archivo PDF directamente desde tu carpeta de assets
import documentoPDF from '../assets/Reporte_Analitico_Brechas_Redes_TICs.pdf';

export default function ReportView() {
  return (
    <div className="report-container">
      <h2>Reporte Analítico de Brechas</h2>
      
      <div className="report-preview-box">
        <h3>Mapeo de Densidad:</h3>
        <p>La revisión de la matriz muestra una concentración visible en tres subáreas principales: IoT y redes de sensores, SDN/automatización de redes, y monitoreo/gestión de infraestructura. En la práctica, varios documentos se enfocan en IoT aplicado a medición, sensorización o monitoreo, mientras que otro grupo se orienta a redes definidas por software, SD-WAN o arquitecturas de optimización de servicios. También aparece una línea menos frecuente pero importante en ciberseguridad para entornos IoT y en infraestructura de red de alta disponibilidad, lo que confirma que la formación investigativa sí cubre aspectos modernos, aunque con marcada repetición en problemas de sensorización y conectividad básica.</p>
        <p>Desde una lectura de densidad temática, puede afirmarse que IoT representa la subárea más recurrente, seguida por SDN y monitoreo de red. Esto sugiere que el repositorio analizado tiende a privilegiar soluciones de implementación y prototipado, especialmente en escenarios de medición, conectividad y supervisión, antes que aproximaciones avanzadas de analítica, automatización inteligente o seguridad de nueva generación. En consecuencia, la matriz revela una base sólida en temas de entrada y despliegue de redes, pero una menor diversidad en enfoques de observabilidad avanzada, orquestación dinámica y toma de decisiones basada en datos.</p>
      </div>
      <div className="report-preview-box">
        <h3>Evaluación de Obsolescencia:</h3>
        <p>La obsolescencia no debe entenderse aquí como un error de los proyectos, sino como una señal de dependencia de tecnologías que, aunque aún funcionan, ya no representan el estado del arte. En la matriz aparecen referencias a IPv4 en transición a IPv6, DOCSIS 3.0, soluciones de monitoreo convencionales y validaciones apoyadas principalmente en entornos tradicionales de laboratorio o en prototipos de bajo alcance. Estas tecnologías no son inútiles, pero en 2026 ya no constituyen por sí mismas una propuesta suficientemente innovadora si no se acompañan de automatización, telemetría avanzada o mecanismos adaptativos de seguridad.</p>
        <p>También se observa que varias investigaciones en IoT y monitoreo tienden a validar con prototipos funcionales o con revisión comparativa de protocolos, pero sin integrar observabilidad en tiempo real, inteligencia artificial, microsegmentación o arquitecturas Zero Trust. Ese patrón limita la vigencia tecnológica de algunas propuestas frente a las exigencias actuales de redes resilientes y autoajustables. En términos académicos, esto indica que la base del repositorio es útil para aprender e implementar, pero todavía presenta una brecha hacia arquitecturas más sofisticadas, seguras y automatizadas.</p>
      </div>
      <div className="report-preview-box">
        <h3>Identificación de la Brecha:</h3>
        <p>La principal brecha detectada es la escasa presencia de temas vinculados con telemetría avanzada, analítica inteligente de tráfico, automatización basada en políticas y seguridad de nueva generación. Aunque hay proyectos sobre SDN, IoT y monitoreo, no se aprecia una explotación sistemática de tecnologías como streaming telemetry, intent-based networking, AIOps, detección de anomalías mediante aprendizaje automático o Zero Trust aplicado a redes institucionales. Esto constituye un vacío relevante porque esas áreas son precisamente las que están marcando la evolución contemporánea de las redes.</p>
        <p>Otra brecha clara es la poca presencia de soluciones integradas que combinen varias capas tecnológicas al mismo tiempo. En la muestra predominan trabajos centrados en un solo componente: sensorización, migración de protocolo, red óptica, monitoreo o SDN. Sin embargo, las redes actuales suelen requerir enfoques híbridos que articulen infraestructura, automatización, seguridad y observabilidad bajo una misma arquitectura. Esa ausencia abre un espacio interesante para propuestas que conecten capas, por ejemplo, SDN más telemetría, IoT más analítica de seguridad, o virtualización más gestión inteligente del tráfico.</p>
      </div>
      <div className="report-preview-box">
        <h2>Propuesta de Línea de Investigación Personal:</h2>
        <div className="report-preview-box">
          <h3>PRIMERA PROPUESTA:</h3>
          <h4>“Diseño de una arquitectura de telemetría inteligente para la detección temprana de anomalías en redes universitarias”:</h4>
          <p>Este tema responde al vacío observado en monitoreo tradicional y permite incorporar herramientas modernas de observabilidad, análisis de tráfico y alertamiento proactivo. Además, mantiene pertinencia académica y aplicabilidad institucional, lo que facilita la formulación de objetivos, métricas y validación experimental.</p>
        </div>
        <div className="report-preview-box">
          <h3>SEGUNDA PROPUESTA:</h3>
          <h4>“Implementación de una arquitectura SDN con políticas Zero Trust para el fortalecimiento de la seguridad en redes académicas”:</h4>
          <p>En esta propuesta aprovecha la presencia de trabajos sobre SDN y ciberseguridad, pero introduce una capa de madurez superior al integrar control centralizado, segmentación dinámica y verificación continua de acceso.</p>
        </div>
      </div>

      <div className="download-box" style={{ marginTop: '30px', textAlign: 'center' }}>
        <p style={{ marginBottom: '15px', color: '#4a5568' }}>
          Haz clic abajo para obtener el documento PDF :
        </p>
        
        {/* 2. Usamos una etiqueta <a> configurada para descargar el archivo importado */}
        <a 
          href={documentoPDF} 
          download="Reporte_Analitico_Brechas_Redes_TICs.pdf"
          className="btn-download"
          style={{
            display: 'inline-block',
            backgroundColor: '#dc2626',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '600',
            boxShadow: '0 4px 6px rgba(220, 38, 38, 0.25)',
            cursor: 'pointer'
          }}
        >
          Descargar Reporte Analítico en PDF
        </a>
      </div>
    </div>
  );
}