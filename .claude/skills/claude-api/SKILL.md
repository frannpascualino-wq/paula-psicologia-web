# Skill: claude-api

Cuando este skill está activo, trabajás con la API de Anthropic / Claude en el contexto del proyecto de Paula Psicología o cualquier integración que lo requiera.

## Contexto de uso en este proyecto

Posibles integraciones donde la Claude API podría ser útil:

- **Formulario de contacto inteligente:** Procesar mensajes de pacientes y generar respuestas preliminares o clasificar consultas.
- **Chatbot de derivación:** Un asistente que responde preguntas frecuentes sobre la práctica de Paula (modalidad, precios, qué esperar de la primera sesión).
- **Generación de contenido:** Ayudar a Paula a redactar posts, newsletters o respuestas a testimonios.

## Stack y configuración

**SDK:** `@anthropic-ai/sdk` (Node.js / TypeScript). Instalar con `npm install @anthropic-ai/sdk`.

**Modelo por defecto:** `claude-sonnet-4-6` para la mayoría de tareas. Usar `claude-haiku-4-5-20251001` para respuestas de baja latencia (chatbot). Usar `claude-opus-4-7` solo si la tarea requiere razonamiento muy complejo.

**Variables de entorno:** La API key va en `.env` como `ANTHROPIC_API_KEY`. Nunca hardcodeada. Nunca en el frontend (el bundle es público).

```
ANTHROPIC_API_KEY=sk-ant-...
```

## Patrones de implementación

### Llamada básica con prompt caching

```typescript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 1024,
  system: [
    {
      type: "text",
      text: "Sos el asistente virtual del consultorio de Paula, psicóloga clínica...",
      cache_control: { type: "ephemeral" }, // cachea el system prompt
    },
  ],
  messages: [{ role: "user", content: userMessage }],
});
```

**Siempre incluir prompt caching** en el system prompt cuando la conversación tiene contexto extenso fijo (descripción de Paula, FAQ, etc.). Reduce latencia y costo.

### Streaming para chatbot

```typescript
const stream = await client.messages.stream({
  model: "claude-haiku-4-5-20251001",
  max_tokens: 512,
  messages: [{ role: "user", content: userMessage }],
});

for await (const chunk of stream) {
  // enviar al frontend via SSE o WebSocket
}
```

### Manejo de errores

```typescript
try {
  const response = await client.messages.create({ ... });
} catch (error) {
  if (error instanceof Anthropic.APIError) {
    // error.status, error.message, error.headers
    if (error.status === 429) { /* rate limit */ }
    if (error.status === 529) { /* overloaded */ }
  }
}
```

## Seguridad

- La API key **nunca** va al frontend. Toda llamada a la API de Anthropic va a través de un endpoint serverless o API route de Next.js/Express.
- Validar y sanitizar el input del usuario antes de pasarlo al modelo.
- Establecer `max_tokens` explícitamente siempre — nunca dejar el default.
- Si el chatbot habla en nombre de Paula, definir límites claros en el system prompt: no dar consejos terapéuticos, solo derivar y responder FAQ.

## Cuándo NO usar la Claude API

- Para mostrar texto estático o FAQ que no cambia → HTML/Markdown directo.
- Para procesar formularios simples de contacto → EmailJS, Formspree, o similar.
- Para animaciones o interacciones visuales → eso es `frontend-design`, no este skill.
