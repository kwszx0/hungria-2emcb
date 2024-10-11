'use client'

import Separator from '@/components/Separator'
import Page from '@/components/templates/Page'
import {
  binggo_wood,
  brice_semiexpanded,
  cmu_serif,
  font29lt_adir,
  lovelo,
} from '../fonts'

export default function Home() {
  return (
    <Page>
      <Separator />

      <div className="flex justify-center items-center">
        <img
          className="rounded-3xl h-52 w-[25rem]"
          src="/assets/image-01.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-1 justify-center items-center mt-3">
        <h1
          className={`${brice_semiexpanded.className} text-5xl text-[#4D6130]`}
        >
          HUNGRIA
        </h1>
        <h2 className={`${lovelo.className} text-xs text-[#4D6130]`}>
          Portfólio informativo --- VIII JIMM
        </h2>
      </div>

      <Separator />

      <div id="contexto-historico">
        <div className="flex justify-between items-center h-56">
          <div className="w-4 h-full bg-[#990F02] rounded-r-full" />
          <img
            className="w-80 h-full border-2 border-[#990F02]"
            src="/assets/image-02.jpg"
            alt=""
          />
          <div className="w-4 h-full bg-[#990f02] rounded-l-full" />
        </div>

        <div className="w-[100%-1rem] mx-1 mt-3 bg-[#4D6130] text-[#D4E5BC] space-y-2">
          <h1 className={`${cmu_serif.className} pt-2 pl-2`}>Introdução</h1>

          <div className="w-full h-0.5 bg-[#D4E5BC]" />

          <div className="space-y-1 pb-2">
            <h1
              className={`${binggo_wood.className} font-medium text-3xl px-2`}
            >
              Contexto Historico:
            </h1>

            <div className={`${font29lt_adir.className} px-2 space-y-4`}>
              <p>
                <span className="ml-8">A</span> Hungria foi formada por tribos
                magiares que migraram para a Bacia dos Cárpatos no final do
                século IX. Em 895 d.C., os magiares, liderados pelo chefe Árpád,
                se estabeleceram na região e fundaram o reino que se tornaria a
                Hungria. No ano 1000, o príncipe húngaro Estêvão I foi coroado
                rei, adotando o cristianismo e consolidando o estado húngaro. Ao
                longo dos séculos, a Hungria passou por várias invasões, como a
                dos mongóis e dos otomanos, e enfrentou períodos de dominação
                estrangeira, como parte do Império Habsburgo e, posteriormente,
                do Império Austro-Húngaro.
              </p>

              <p>
                <span className="ml-8">Atualmente</span>, a Hungria é uma
                república parlamentarista, membro da União Europeia desde 2004.
                O país é conhecido por seu rico patrimônio cultural, suas belas
                paisagens e sua vibrante capital, Budapeste, famosa por suas
                termas e arquitetura. A economia húngara é diversificada, com
                setores fortes como manufatura, tecnologia e turismo.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 space-y-6">
          <h1
            className={`${lovelo.className} ml-3 font-bold text-2xl text-[#DC1300]`}
          >
            Localização:
          </h1>

          <div className="relative">
            <div className="flex flex-col gap-9">
              <div className="w-full h-9 bg-[#990F02]" />
              <div className="w-full h-9 bg-white" />
              <div className="w-full h-9 bg-[#4D6130]" />
            </div>

            <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 z-10">
              <img
                className="w-80 h-[13.5rem] border-[3px] border-dashed border-[#990F02]"
                src="/assets/image-03.jpg"
                alt="Localização"
              />
            </div>
          </div>

          <div className="h-px" />
        </div>
      </div>

      <Separator />

      {/* <div className="h-[2000px]" /> */}
    </Page>
  )
}
