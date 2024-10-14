'use client'

import Separator from '@/components/Separator'
import Page from '@/components/templates/Page'
import {
  agrandir_grand,
  binggo_wood,
  brice_semiexpanded,
  cmu_serif,
  donau,
  font29lt_adir,
  league_spartan,
  lovelo,
  poppins,
} from '../fonts'
import RoundedBox from '@/components/RoundedBox'
import AthleteBox from '@/components/AthleteBox'

export default function Home() {
  return (
    <Page>
      <Separator />

      <div className="flex justify-center items-center">
        <img
          className="rounded-3xl h-52 w-[25rem]"
          src="/assets/parlamento-budapeste.jpg"
          alt="Parlamento de Budapeste"
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
            src="/assets/parlamento-budapeste-02.jpg"
            alt="Parlamento de Budapeste"
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

            <div
              className={`${font29lt_adir.className} px-2 space-y-4 text-justify`}
            >
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
                className="w-80 h-[13.5rem] object-cover border-[3px] border-dashed border-[#990F02]"
                src="/assets/territorio.jpg"
                alt="Território"
              />
            </div>
          </div>

          <div className="h-px" />
        </div>
      </div>

      <Separator />

      <div className="flex flex-col mx-2" id="contexto-olimpico">
        <div className="flex">
          <div className="flex justify-center items-center w-1/2">
            <img
              className="w-44 object-cover border-[10px] border-[#990F02] rounded-full"
              src="/assets/contexto-olímpico.png"
              alt="Contexto Olímpico"
            />
          </div>

          <div
            className={`${agrandir_grand.className} flex flex-col justify-center items-center w-1/2 text-[#990F02]`}
          >
            <h1 className="text-2xl">Contexto</h1>
            <h1 className="text-2xl">Olímpico:</h1>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex">
            <img
              className="w-44 h-32 object-cover"
              src="/assets/logo-olimpíadas.png"
              alt="Logo das Olimpíadas"
            />

            <p
              className={`${poppins.className} mt-10 text-[#990F02] text-xs text-justify`}
            >
              <span className={`${lovelo.className} text-lg`}>A Hungria</span>{' '}
              possui uma das histórias olímpicas mais ricas e impressionantes do
              mundo, destacando-se entre as nações com o maior número de
              medalhas
            </p>
          </div>

          <div
            className={`${poppins.className} flex flex-col gap-1 text-[#990F02] text-xs text-justify`}
          >
            <p>
              per capita. Desde sua primeira participação em 1896, em Atenas, o
              país construiu uma trajetória marcada por conquistas
              extraordinárias, especialmente em esportes como esgrima, polo
              aquático, canoagem e ginástica.
            </p>

            <p>
              <span className="ml-8">Ao</span> longo de mais de um século de
              participação nos Jogos, a Hungria conquistou mais de 500 medalhas,
              o que a coloca entre os países mais bem-sucedidos na história das
              Olimpíadas. Atletas húngaros como Aladár Gerevich, com seis
              medalhas de ouro em esgrima, e Krisztina Egerszegi, uma das
              nadadoras mais vitoriosas de todos os tempos, tornaram-se ícones
              não só no país, mas globalmente. Esses atletas ajudaram a definir
              a reputação da Hungria como uma nação esportiva de elite, cujo
              espírito competitivo e habilidade técnica permanecem fortes em
              cada edição dos Jogos.
            </p>

            <p>
              <span className="ml-8">Nos</span> dias de hoje, a Hungria continua
              a ser uma força respeitável nas Olimpíadas, especialmente nas
              modalidades em que tem tradição, como a canoagem e a esgrima. Com
              uma sólida infraestrutura esportiva e programas de formação de
              atletas, o país mantém seu legado e busca constantemente novos
              talentos para manter sua posição entre as potências olímpicas. A
              combinação de tradição e inovação garante que a Hungria continue a
              ser um nome forte no cenário olímpico mundial.
            </p>
          </div>
        </div>
      </div>

      <div className="m-4" id="quadro-de-medalhas">
        <RoundedBox modality={false} color="green" border={true}>
          <img
            className="w-28 h-56 object-cover"
            src="/assets/medalhas.jpg"
            alt=""
          />

          <div className="flex flex-col gap-3 justify-center">
            <h1 className={`${donau.className} font-medium text-2xl`}>
              QUADRO DE MEDALHAS
            </h1>

            <div className={`${lovelo.className} text-sm`}>
              <p>I. Esgrima: 87 medalhas</p>
              <p>II. Canoagem: 84 medalhas</p>
              <p>III. Atletismo: 33 medalhas</p>
              <p>IV. Natação: 31 medalhas</p>
              <p>V. Lutas: 19 medalhas</p>
              <p>VI. Polo Aquático: 15 medalhas</p>
            </div>
          </div>
        </RoundedBox>
      </div>

      <div className="my-4" id="modalidades">
        <div className="relative bg-[#4D6130] p-6">
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-[#A1BE76]" />
          <div className="absolute bottom-4 left-0 right-0 h-0.5 bg-[#A1BE76]" />
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#A1BE76]" />
          <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-[#A1BE76]" />

          <div className="relative z-10">
            <div className="flex flex-col gap-8 py-2">
              <RoundedBox imageSrc="esgrima.jpg" heading="Esgrima" color="red">
                A Hungria é uma potência na esgrima, acumulando 87 medalhas
                olímpicas e consagrando atletas lendários como Aladár Gerevich.
              </RoundedBox>

              <RoundedBox
                imageSrc="atletismo.jpg"
                heading="Atletismo"
                color="green"
              >
                No atletismo, a Hungria brilha com 33 medalhas olímpicas,
                incluindo 10 ouros, em provas de campo e corrida.
              </RoundedBox>

              <RoundedBox imageSrc="natação.jpg" heading="Natação" color="red">
                Com 31 medalhas olímpicas, a natação húngara é dominada por
                nomes como Krisztina Egerszegi, uma das maiores nadadoras de
                todos os tempos.
              </RoundedBox>

              <RoundedBox
                imageSrc="canoagem.jpg"
                heading="Canoagem"
                color="green"
              >
                A canoagem é uma das modalidades mais vitoriosas da Hungria, com
                84 medalhas conquistadas, destacando atletas como György
                Kolonics.
              </RoundedBox>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-2 space-y-4" id="parlamento-budapeste">
        <div className="flex justify-center items-center">
          <img
            className="w-[calc(100%-0.5rem)]"
            src="/assets/parlamento-budapeste-03.jpg"
            alt="Parlamento de Budapeste"
          />
        </div>

        <p
          className={`${league_spartan.className} text-[#EC5C4F] text-justify text-xs font-bold`}
        >
          — O Parlamento de Budapeste, às margens do rio Danúbio, é uma das
          construções mais icônicas da Hungria, com sua grandiosa arquitetura
          neogótica, simbolizando o coração político do país e uma das maiores
          atrações turísticas da capital.
        </p>
      </div>

      <Separator />

      <div className="space-y-5" id="atletas">
        <AthleteBox
          athleteName="Aladár Gerevich"
          athleteImage="gerevich.jpg"
          color="red"
        >
          Esgrimista lendário, Gerevich conquistou sete medalhas de ouro
          olímpicas entre 1932 e 1960, sendo considerado o maior esgrimista de
          sabre da história.
        </AthleteBox>

        <AthleteBox
          athleteName="Krisztina Egerszegi"
          athleteImage="egerszegi.jpg"
          color="green"
        >
          A campeã olímpica húngara venceu cinco medalhas de ouro entre 1988 e
          1996, destacando-se nas provas de nado costas, tornando-se uma das
          nadadoras mais jovens e vitoriosas da história.
        </AthleteBox>

        <AthleteBox
          athleteName="Ferenc Puskás"
          athleteImage="puskás.jpg"
          color="red"
        >
          Um dos maiores jogadores de futebol de todos os tempos, Puskás liderou
          a seleção húngara nos anos 1950, sendo um dos maiores artilheiros da
          história e referência do "Time de Ouro" da Hungria.
        </AthleteBox>

        <AthleteBox
          athleteName="György Kolonics"
          athleteImage="kolonics.jpg"
          color="green"
        >
          Kolonics foi um dos maiores canoístas da Hungria, com duas medalhas de
          ouro olímpicas (1996 e 2000) e um total de quinze títulos mundiais,
          tornando-se uma lenda na canoagem.
        </AthleteBox>
      </div>

      <Separator />
    </Page>
  )
}
