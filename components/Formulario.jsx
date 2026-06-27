"use client";

import { useState } from "react";
import { enviarCorreo } from "../app/actions.js";
import styles from "./Formulario.module.css"

export default function FormularioContacto() {
  const [estado, setEstado] = useState({});
  const [cargando, setCargando] = useState(false);

  async function handleFormSubmit(formData) {
    setCargando(true);
    setEstado({});

    const resultado = await enviarCorreo(formData);

    setCargando(false);
    if (resultado?.error) {
      setEstado({ error: resultado.error });
    } else {
      setEstado({ success: true });
    }
  }

  return (
    <form action={handleFormSubmit} className={styles.f}>
      <h2 style={{fontFamily: 'Space', fontSize: '40px', color: 'white'}}>Contáctame</h2>
      
      <div className={styles.formspace}>
        <label htmlFor="nombre">Nombre</label>
        <input 
          type="text" 
          id="nombre" 
          name="nombre" 
          required
          placeholder="Tu nombre"
        />
      </div>

      <div className={styles.formspace}>
        <label htmlFor="correo">Correo Electrónico</label>
        <input 
          type="email" 
          id="correo" 
          name="correo" 
          required 
          placeholder="tu@email.com"
        />
      </div>

      <div className={styles.formspace}>
        <label htmlFor="mensaje">Mensaje</label>
        <textarea 
          id="mensaje" 
          name="mensaje" 
          rows={4} 
          required
          placeholder="Cuentame sobre tu proyecto..."
        />
      </div>

      <button 
        type="submit" 
        disabled={cargando}
      >
        {cargando ? "Enviando..." : "Enviar Mensaje"}
      </button>

      {estado.success && (
        <p style={{fontFamily: 'Space', color: 'white', marginTop: '20px'}}>¡Tu mensaje ha sido enviado con éxito!</p>
      )}
      {estado.error && (
        <p style={{fontFamily: 'Space', color: 'white', marginTop: '20px'}}>{estado.error}</p>
      )}
    </form>
  );
}