import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [likes, setLikes] = useState(0)

  return (
    <>
      <header>
        <div className="logos">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>E-Commerce Frontend</h1>
        <p className="subtitle">Proyecto de Práctica Profesionalizante 1</p>
      </header>

      <main className="card">
        <p>
          Este proyecto representa el <strong>frontend</strong> del sistema de gestión de ventas desarrollado con
          <strong> React, HTML, CSS y TypeScript</strong>.
        </p>
        <p>
          Ofrece una interfaz moderna, dinámica y responsiva que permite a los usuarios:
        </p>
        <ul>
          <li>Navegar por productos</li>
          <li>Ver detalles individuales</li>
          <li>Gestionar el carrito de compras</li>
          <li>Realizar pedidos de forma sencilla</li>
        </ul>

        <h2>Tecnologías utilizadas</h2>
        <ul>
          <li><strong>Frontend:</strong> React con Next.js y CSS</li>
          <li><strong>Backend:</strong> Node.js con Express</li>
          <li><strong>Base de datos:</strong> MySQL</li>
          <li><strong>Control de versiones:</strong> GitHub</li>
        </ul>

        <button onClick={() => setLikes((prev) => prev + 1)}>
          ❤️ Me gusta ({likes})
        </button>
      </main>

      <footer className="read-the-docs">
        <p>
          Cloná el proyecto desde <code>GitHub</code> y ejecutalo con:
        </p>
        <pre>
{`git clone https://github.com/usuario/nombre-del-repositorio.git
cd nombre-del-repositorio
npm install
npm start`}
        </pre>
      </footer>
    </>
  )
}

export default App
