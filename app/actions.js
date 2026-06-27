"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function enviarCorreo(formData) {
  const nombre = formData.get("nombre");
  const correoCliente = formData.get("correo");
  const mensaje = formData.get("mensaje");

  if (!nombre || !correoCliente || !mensaje) {
    return { error: "Todos los campos son obligatorios." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "camilo20126@gmail.com",
      subject: `Nuevo mensaje de ${nombre} desde el Portafolio`,
      replyTo: correoCliente,
      html: `
        <h2>¡Tienes un nuevo mensaje de contacto!</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email de contacto:</strong> ${correoCliente}</p>
        <p><strong>Mensaje:</strong></p>
        <p style="white-space: pre-wrap; background: #f4f4f4; padding: 15px; border-radius: 5px;">${mensaje}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error enviando el correo:", error);
    return { error: "Hubo un error al enviar el correo. Inténtalo de nuevo." };
  }
}