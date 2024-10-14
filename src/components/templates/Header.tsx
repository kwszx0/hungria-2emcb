import { donau } from '@/app/fonts'
import { List, X } from '@phosphor-icons/react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className={donau.className}>
        <div className="fixed top-0 z-30 flex h-16 w-full items-center justify-between bg-[#4D6130] px-2">
          <div className="w-6" />

          <div className="flex justify-center items-center gap-1 text-[#D4E5BC]">
            <img className="w-6" src="/assets/jimm-logo.png" alt="VIII JIMM" />
            <X size={22} weight="light" />
            <h1 className="text-xl">2EMCB</h1>
          </div>

          <div className="flex justify-center items-center text-[#D4E5BC]">
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
          } z-20`}
        >
          <ul className="flex flex-col mt-16 h-full text-[#D4E5BC]">
            <li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a
                href="#contexto-historico"
                className="text-2xl h-14 flex items-center hover:bg-[#3B4C23]/90 transition-colors duration-300 ease-in-out p-4"
                onClick={() => setIsOpen(false)}
              >
                CONTEXTO HISTÓRICO
              </a>
            </li>

            <li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a
                href="#contexto-olimpico"
                className="text-2xl h-14 flex items-center hover:bg-[#3B4C23]/90 transition-colors duration-300 ease-in-out p-4"
                onClick={() => setIsOpen(false)}
              >
                CONTEXTO OLÍMPICO
              </a>
            </li>

            <li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a
                href="#quadro-de-medalhas"
                className="text-2xl h-14 flex items-center hover:bg-[#3B4C23]/90 transition-colors duration-300 ease-in-out p-4"
                onClick={() => setIsOpen(false)}
              >
                QUADRO DE MEDALHAS
              </a>
            </li>

            <li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a
                href="#modalidades"
                className="text-2xl h-14 flex items-center hover:bg-[#3B4C23]/90 transition-colors duration-300 ease-in-out p-4"
                onClick={() => setIsOpen(false)}
              >
                MODALIDADES
              </a>
            </li>

            <li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a
                href="#atletas"
                className="text-2xl h-14 flex items-center hover:bg-[#3B4C23]/90 transition-colors duration-300 ease-in-out p-4"
                onClick={() => setIsOpen(false)}
              >
                ATLETAS
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="h-16" />
    </>
  )
}
