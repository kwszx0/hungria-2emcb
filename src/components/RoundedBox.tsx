import { donau, font29lt_adir } from '@/app/fonts'
import type { ReactNode } from 'react'

interface RoundedBoxProps {
  modality?: boolean
  imageSrc?: string
  heading?: string
  color: 'red' | 'green'
  border?: boolean
  children: ReactNode
}

export default function RoundedBox({
  modality = true,
  imageSrc,
  heading,
  color,
  border = false,
  children,
}: RoundedBoxProps) {
  return (
    <div
      className={`${
        color === 'red' ? 'bg-[#CC5044]' : 'bg-[#A1BE76]'
      } ${border && 'border-2  border-white border-dashed'} rounded-2xl px-4 py-3`}
    >
      {modality ? (
        <div className="flex gap-2">
          <img
            className="w-24 h-24 rounded-2xl object-cover"
            src={`/assets/${imageSrc}`}
            alt={heading}
          />

          <div className="flex flex-col gap-1 justify-center h-24">
            <h1 className={`${donau.className} font-medium text-xl`}>
              {heading?.toLocaleUpperCase()}
            </h1>

            <p className={`${font29lt_adir.className} text-sm text-justify`}>
              {children}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex gap-2">{children}</div>
      )}
    </div>
  )
}
