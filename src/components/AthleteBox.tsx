import { league_spartan, lovelo } from '@/app/fonts'
import type { ReactNode } from 'react'

interface AthleteBoxProps {
  athleteName: string
  athleteImage: string
  color: 'red' | 'green'
  children: ReactNode
}

export default function AthleteBox({
  athleteName,
  athleteImage,
  color,
  children,
}: AthleteBoxProps) {
  return (
    <div className="flex mx-2">
      <img
        className="w-32 h-40 object-cover"
        src={`/assets/${athleteImage}`}
        alt={athleteName}
      />

      <div
        className={`${
          color === 'red' ? 'bg-[#990F02]' : 'bg-[#4D6130]'
        } flex flex-col justify-center my-4 px-2`}
      >
        <h1 className={`${lovelo.className} text-lg`}>{athleteName}</h1>
        <p
          className={`${league_spartan.className} text-xs text-justify font-bold`}
        >
          {children}
        </p>
      </div>
    </div>
  )
}
