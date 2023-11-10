  import { Inter,Poppins, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const poppins = Poppins({ subsets: ['latin'], weight: '600' });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});