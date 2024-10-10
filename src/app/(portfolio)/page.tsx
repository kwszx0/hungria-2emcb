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

      <div className="flex justify-between items-center h-52">
        <div className="w-4 h-full bg-[#990F02] rounded-r-full" />
        <img
          className="w-[19rem] h-full border-2 border-[#990F02]"
          src="/assets/image-02.jpg"
          alt=""
        />
        <div className="w-4 h-full bg-[#990f02] rounded-l-full" />
      </div>

      <Separator />

      {/* <div className="h-[2000px]" /> */}
    </Page>
  )
}
