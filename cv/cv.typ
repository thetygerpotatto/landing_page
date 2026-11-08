// CV source: one file, two languages.
//   typst compile cv/cv.typ public/cv-en.pdf --input lang=en
//   typst compile cv/cv.typ public/cv-es.pdf --input lang=es
// Or run: npm run cv

#let lang = sys.inputs.at("lang", default: "en")
#let t(en, es) = if lang == "es" { es } else { en }

// ---------- personal data ----------
#let name = "Jaime Andrés Noreña Cordoba"
#let phone = "+57 316 561 8529"
#let email = "jndevc@gmail.com"
#let github = "github.com/thetygerpotatto"
#let linkedin = "linkedin.com/in/jaime-andrés-noreña-552125261"
#let linkedin-url = "https://www.linkedin.com/in/jaime-andr%C3%A9s-nore%C3%B1a-552125261"

// ---------- style ----------
#let accent = rgb("#0f766e")
#let muted = rgb("#52525b")

#set document(title: name + " – CV", author: name)
#set page(paper: "us-letter", margin: (x: 0.6in, y: 0.5in))
#set text(font: "Nimbus Sans", size: 10.2pt, lang: lang, fill: rgb("#18181b"))
#set par(leading: 0.55em, spacing: 0.7em, justify: false)
#set list(indent: 0.2em, body-indent: 0.5em, spacing: 0.55em, marker: text(fill: accent)[•])
#show link: it => it

#let section(title) = {
  v(0.9em)
  text(size: 11pt, weight: "bold", fill: accent, upper(title))
  v(-0.45em)
  line(length: 100%, stroke: 0.6pt + accent)
  v(0.1em)
}

#let entry(title, meta: none, right: none, url: none) = {
  grid(
    columns: (1fr, auto),
    {
      text(weight: "bold", title)
      if meta != none { text(fill: muted)[ | #meta] }
      if url != none { h(0.4em); link("https://" + url, text(size: 8.6pt, fill: accent, url)) }
    },
    text(fill: muted, right),
  )
  v(-0.1em)
}

// ---------- header ----------
#align(center)[
  #text(size: 20pt, weight: "bold", name) \
  #v(-0.2em)
  #text(size: 11pt, fill: accent, weight: "medium", t(
    "Backend Developer · C · Python · Java",
    "Desarrollador Backend · C · Python · Java",
  )) \
  #v(-0.1em)
  #text(size: 9.2pt, fill: muted)[
    Zarzal, Valle del Cauca, Colombia #h(0.35em)•#h(0.35em)
    #link("tel:+573165618529", phone) #h(0.35em)•#h(0.35em)
    #link("mailto:" + email, email) \
    #link("https://" + github, github) #h(0.35em)•#h(0.35em)
    #link(linkedin-url, linkedin)
  ]
]

#section(t("Profile", "Perfil"))
#t(
  [Systems Engineering student (8th semester) focused on *backend development*. I enjoy working close to the system in *C* (memory management, algorithms, rendering) and building production-style services: *ETL pipelines, REST APIs, authentication and CI/CD*. Looking for a junior backend role or internship.],
  [Estudiante de Ingeniería de Sistemas (8.º semestre) enfocado en *desarrollo backend*. Disfruto trabajar cerca del sistema en *C* (manejo de memoria, algoritmos, renderizado) y construir servicios con prácticas de producción: *pipelines ETL, APIs REST, autenticación y CI/CD*. Busco un cargo backend junior o práctica profesional.],
)

#section(t("Education", "Formación"))
#entry(
  "Universidad del Valle",
  right: t("Expected graduation: 2027", "Graduación esperada: 2027"),
)
#grid(
  columns: (1fr, auto),
  t("B.S. in Systems Engineering · Currently in 8th semester · GPA 4.1 / 5.0",
    "Ingeniería de Sistemas · Cursando 8.º semestre · Promedio 4,1 / 5,0"),
  text(fill: muted, "Cali, Colombia"),
)
#v(0.15em)
#text(fill: muted, t(
  [*Relevant coursework:* Algorithm Analysis & Design, Functional & Concurrent Programming, Discrete Mathematics, Software Development, Computer Infrastructure, Artificial Intelligence, Cybersecurity.],
  [*Cursos relevantes:* Análisis y Diseño de Algoritmos, Programación Funcional y Concurrente, Matemáticas Discretas, Desarrollo de Software, Infraestructuras Computacionales, Inteligencia Artificial, Ciberseguridad.],
))

#section(t("Projects", "Proyectos"))

#entry(
  t("Labor-Market BI Platform (GEIH_BI)", "Plataforma BI del mercado laboral (GEIH_BI)"),
  meta: "Python, pandas, MongoDB, Streamlit, Docker, pytest",
  right: "2026",
)
- #t(
    [Built an *ETL pipeline* over 4 years of raw national survey data from DANE (*\~3.4M person-month records*), handling nested archives, broken file encodings and inconsistent CSV formats.],
    [Construí un *pipeline ETL* sobre 4 años de datos en bruto de la encuesta nacional del DANE (*\~3,4 M de registros persona-mes*), manejando ZIP anidados, codificaciones dañadas y formatos CSV inconsistentes.],
  )
- #t(
    [Designed a *star-schema data warehouse* in MongoDB (fact table, 10 dimensions, pre-aggregated monthly cube) with idempotent, logged loads, plus a *role-based dashboard*. Covered by *82 automated tests*.],
    [Diseñé un *data warehouse en esquema estrella* en MongoDB (tabla de hechos, 10 dimensiones, cubo mensual preagregado) con cargas idempotentes y registradas, más un *dashboard con acceso por roles*. Cubierto por *82 pruebas automatizadas*.],
  )

#entry(
  t("Fitness Tracking App (UVfit)", "App de seguimiento físico (UVfit)"),
  meta: "React Native, TypeScript, FastAPI, SQLAlchemy, Azure",
  right: "2025",
)
- #t(
    [Built most of a cross-platform mobile app for tracking training, nutrition and sleep, with *Android Health Connect* sync and offline storage in SQLite.],
    [Desarrollé la mayor parte de una app móvil multiplataforma para registrar entrenamiento, alimentación y sueño, con sincronización de *Android Health Connect* y almacenamiento sin conexión en SQLite.],
  )
- #t(
    [Developed the *FastAPI backend* (user management, bcrypt hashing, *JWT authentication*) and deployed it to *Azure App Service* through a *GitHub Actions CI/CD* pipeline.],
    [Desarrollé el *backend en FastAPI* (gestión de usuarios, hash con bcrypt, *autenticación JWT*) y lo desplegué en *Azure App Service* mediante un pipeline de *CI/CD con GitHub Actions*.],
  )

#entry(
  t("Raycasting 3D Engine", "Motor 3D de raycasting"),
  meta: "C, raylib",
  right: "2024",
)
- #t(
    [Wrote a Wolfenstein-style 3D renderer from scratch in C: *grid ray traversal*, fisheye-corrected projection, *texture mapping*, collision detection and frame-rate-independent movement.],
    [Escribí desde cero en C un renderizador 3D estilo Wolfenstein: *recorrido de rayos por cuadrícula*, proyección con corrección de ojo de pez, *mapeo de texturas*, detección de colisiones y movimiento independiente de los FPS.],
  )

#entry(
  t("Formal Grammar Interpreter (Gramable)", "Intérprete de gramáticas formales (Gramable)"),
  meta: "C",
  right: "2024",
)
- #t(
    [Tests word membership and generates languages through *bounded recursive derivation*. Built on hand-written *dynamic string and set libraries* with manual memory management.],
    [Comprueba la pertenencia de palabras y genera lenguajes mediante *derivación recursiva acotada*. Construido sobre *librerías propias de cadenas y conjuntos dinámicos* con manejo manual de memoria.],
  )

#entry(
  t("Real-time Pixel Canvas (UVplace)", "Lienzo de píxeles en tiempo real (UVplace)"),
  meta: "Python, Flask, WebSockets, SQLite",
  right: "2025",
)
- #t(
    [Built the backend and real-time layer of a multiplayer, r/place-style canvas: pixel updates are saved and *broadcast to all clients over WebSockets*, with session-based authentication.],
    [Construí el backend y la capa de tiempo real de un lienzo multijugador estilo r/place: cada cambio se guarda y se *transmite a todos los clientes por WebSockets*, con autenticación por sesión.],
  )

#entry(
  t("Event Ticketing Microservices (VivaEventos)", "Microservicios de venta de boletas (VivaEventos)"),
  meta: "Java, Spring Boot",
  right: "2026",
)
- #t(
    [Built the *event service* (REST API, DTOs, domain exceptions, Postman test collection) in a 7-person team's *microservices architecture* with an API gateway and service discovery.],
    [Desarrollé el *servicio de eventos* (API REST, DTOs, excepciones de dominio, colección de pruebas en Postman) dentro de una *arquitectura de microservicios* de un equipo de 7 personas, con API gateway y descubrimiento de servicios.],
  )

#section(t("Skills", "Habilidades"))
#grid(
  columns: (auto, 1fr),
  column-gutter: 0.8em,
  row-gutter: 0.5em,
  text(weight: "bold", t("Languages", "Lenguajes")), [C, C++, Python, Java, TypeScript / JavaScript, SQL],
  text(weight: "bold", t("Backend & Data", "Backend y datos")), [FastAPI, Flask, Spring Boot, REST APIs, WebSockets, MongoDB, PostgreSQL, SQLite],
  text(weight: "bold", t("Web & Mobile", "Web y móvil")), [React Native, Expo, HTML & CSS, Astro, Tailwind CSS],
  text(weight: "bold", t("Tools", "Herramientas")), [Linux, Git / GitHub, GitHub Actions, Docker, Make, pytest, pandas, Azure],
  text(weight: "bold", t("Spoken languages", "Idiomas")), t("Spanish (native), English (B2)", "Español (nativo), inglés (B2)"),
)
