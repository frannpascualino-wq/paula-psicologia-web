# Skill: canvas-design

Cuando este skill está activo, trabajás en la estructura de páginas, el flujo visual y la experiencia general del sitio de Paula Psicología. Este skill opera un nivel por encima de componentes individuales: define qué secciones existen, en qué orden, cómo fluyen entre sí.

## Mentalidad

Pensás como un director de arte, no como un developer. Antes de escribir código, describís el layout en lenguaje visual: qué entra al fold, qué jerarquía tienen los elementos, cómo guían la mirada. Recién después implementás.

## Estructura recomendada del sitio

### Página principal (Home)

1. **Hero** — Presentación directa. Nombre, especialidad, frase de apertura que genere confianza. CTA principal visible. Sin slider, sin carousel, sin video de fondo.
2. **Sobre mí** — Breve. Foto real de Paula si está disponible. Texto en primera persona. Credenciales sin exagerar.
3. **Cómo trabajo / Qué ofrezco** — 2–4 puntos o áreas. Cards simples, no marketing agresivo.
4. **Consultas** — Modalidad (presencial/online), ubicación si aplica, duración de sesión. Precio si Paula lo habilita.
5. **Contacto / Reserva** — Formulario simple o botón a WhatsApp/Calendly. Fricción mínima.
6. **Footer** — Redes, contacto, matrícula profesional si corresponde.

### Páginas adicionales (solo si son necesarias)

- `/sobre-mi` — Versión expandida de la presentación.
- `/servicios` — Si hay múltiples modalidades (individual, pareja, online).
- `/contacto` — Formulario dedicado + mapa si hay consultorio físico.

## Reglas de layout

**Above the fold:** El visitante debe entender quién es Paula y qué hace sin scrollear. El CTA de contacto debe estar visible en el hero.

**Secciones alternadas.** Fondos alternos entre `#FAF8F5` y `#F2EDE6` para dar ritmo sin romper la coherencia. Una sección oscura (texto claro sobre fondo `#3D3530`) puede usarse como acento máximo una vez.

**Máximo ancho de contenido:** `max-w-5xl` o similar (1024px). El contenido no se estira a full-width en pantallas grandes — eso se ve amateur.

**Espaciado vertical entre secciones:** `py-20` a `py-28` en desktop. Nunca menos de `py-12`. Las secciones necesitan respiro.

**Grillas:** Máximo 3 columnas en desktop para cards de contenido. En mobile, siempre 1 columna. En tablet, 2 columnas como máximo para evitar cards demasiado angostas.

## Jerarquía visual por página

Cada página tiene exactamente un `<h1>`. Los `<h2>` definen secciones. Los `<h3>` definen subsecciones o títulos de cards. Nunca saltear niveles.

El tamaño visual de los headings debe reflejar esa jerarquía — no solo en HTML sino en `font-size` real.

## Navegación

**Desktop:** Navbar horizontal, fija o sticky. Logo a la izquierda, links a la derecha, CTA ("Reservar consulta") como botón destacado al final.

**Mobile:** Hamburger menu. El menú abierto ocupa full-width, links en columna, fácilmente tapeables (min 44px de touch target).

**Links activos:** Estado visual claro del link de la página actual. No solo color — puede ser un underline, un punto, un peso mayor.

## Animaciones y transiciones

Solo si suman legibilidad o guían la atención. Máximo: fade-in sutil en secciones al scrollear (`opacity-0` → `opacity-100`, 300ms). Nada de parallax, nada de elementos que vuelan desde los costados, nada de loading screens.

## Proceso de trabajo con este skill

1. Describís la sección o página que vas a construir: qué entra, en qué orden, qué jerarquía.
2. Dibujás el layout en texto/ASCII si ayuda a alinear la visión.
3. Implementás sección por sección, no toda la página de una vez.
4. Al terminar cada sección, verificás que funcione en mobile (320px) y desktop (1280px).
