import './global.css'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div className="h-screen w-full bg-[url('assets/bg.svg')] bg-cover bg-top overflow-hidden flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white bg-black/40 px-6 py-3 rounded-2xl shadow-lg">
        Ruti
      </h1>
    </div>
  )
}

const root = createElement('div')
document.body.appendChild(root)
createRoot(root).render(<App />)
