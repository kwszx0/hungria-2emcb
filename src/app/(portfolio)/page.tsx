'use client'

import Separator from '@/components/Separator'
import Page from '@/components/templates/Page'
import { brice_semiexpanded, lovelo } from '../fonts'

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

      {/* <div className="h-[2000px]" /> */}
    </Page>
  )
}
