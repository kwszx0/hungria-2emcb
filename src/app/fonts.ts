import { Inter, League_Spartan, Poppins } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({ subsets: ['latin'] })
export const league_spartan = League_Spartan({ subsets: ['latin'] })
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
export const brice_semiexpanded = localFont({
  src: './fonts/Brice_SemiExpanded.otf',
})
export const lovelo = localFont({ src: './fonts/Lovelo.otf' })
export const font29lt_adir = localFont({ src: './fonts/29LT_Adir.otf' })
export const binggo_wood = localFont({ src: './fonts/Binggo_Wood.otf' })
export const cmu_serif = localFont({ src: './fonts/CMU_Serif.ttf' })
