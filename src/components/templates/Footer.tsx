import { league_spartan } from '@/app/fonts'
import { InstagramLogo } from '@phosphor-icons/react'

export default function Footer() {
  const handleClick = (profile: string) => {
    window.open(`https://www.instagram.com/${profile}`, '_blank')
  }

  return (
    <footer className={league_spartan.className}>
      <div className="flex flex-col w-full bg-gradient-to-t from-red-950 to-red-400 text-[#E9E4E4] space-y-2">
        <div className="flex justify-center items-center mx-5 mt-3 text-center">
          <h1 className="font-bold text-md">
            Sinta-se à vontade para visitar a bancada da 2EMCB no VIII JIMM!
          </h1>
        </div>

        <div className="flex justify-between h-16 items-center mx-3">
          <button
            className="flex gap-1 font-bold text-md hover:underline"
            type="button"
            onClick={() => handleClick('2em_cb')}
          >
            <InstagramLogo size={20} /> 2CB
          </button>
          <button
            className="flex gap-1 font-bold text-md hover:underline"
            type="button"
            onClick={() => handleClick('jimmfmm')}
          >
            <InstagramLogo size={20} /> JIMM
          </button>
          <button
            className="flex gap-1 font-bold text-md hover:underline"
            type="button"
            onClick={() => handleClick('fmatiasmachline')}
          >
            <InstagramLogo size={20} /> FMM
          </button>
        </div>
      </div>
    </footer>
  )
}
