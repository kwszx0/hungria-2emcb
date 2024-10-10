import { List, X } from '@phosphor-icons/react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header>
        <div className="fixed top-0 z-10 flex h-16 w-full items-center justify-between bg-[#4D6130] px-2">
          <div className="w-8" />

          <div className="flex justify-center items-center gap-1 text-[#D4E5BC]">
            <p>L</p>
            <X />
            <h1>2EMCB</h1>
          </div>

          <div className="text-[#D4E5BC]">
            <button
              className="relative w-6 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
            >
              <List
                className={`absolute transition-transform duration-300 ease-in-out transform ${
                  isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                }`}
                size={24}
              />

              <X
                className={`absolute transition-transform duration-300 ease-in-out transform ${
                  isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                }`}
                size={24}
              />
            </button>
          </div>
        </div>

        <nav
          className={`fixed top-0 right-0 h-full w-2/3 backdrop-blur-sm bg-gradient-to-t from-zinc-900 to-[#4D6130]/90 text-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col mt-20 m-3 h-full space-y-4">
            <li>
              <a href="#introduction" className="text-xl">
                Contexto Histórico
              </a>
            </li>
            <li>
              <a href="#olympic-context" className="text-xl">
                Contexto Olímpico
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="h-16" />
    </>
  )
}
