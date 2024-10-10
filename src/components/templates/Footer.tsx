import { league_spartan } from '@/app/fonts'
import { InstagramLogo } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer className={league_spartan.className}>
      <div className="flex flex-col w-full bg-gradient-to-b from-[#EA9898] to-[#560202] text-[#E9E4E4] space-y-2">
        <div className="flex justify-center items-center mx-5 mt-3 text-center">
          <h1 className="font-bold text-md">
            Sinta-se à vontade para visitar a bancada da 2EMCB no VIII JIMM!
          </h1>
        </div>

        <div className="flex justify-between h-16 items-center mx-3">
          <a className="flex gap-1 font-bold text-md hover:underline" href="/">
            <InstagramLogo size={20} /> 2CB
          </a>
          <a className="flex gap-1 font-bold text-md hover:underline" href="/">
            <InstagramLogo size={20} /> JIMM
          </a>
          <a className="flex gap-1 font-bold text-md hover:underline" href="/">
            <InstagramLogo size={20} />
            FMM
          </a>
        </div>
      </div>
    </footer>
  )
}
