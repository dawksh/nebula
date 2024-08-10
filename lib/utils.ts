import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Public_Sans } from "next/font/google";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const public_sans = Public_Sans({ subsets: ['latin'] })

export function generateRandomString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export const parseSpotifyCallback = (window: Window) => {
  const paramMap = window.location.hash.substring(1).split("&").map(el => el.split("="));
  const object: any = new Object();
  paramMap.map(el => {
    object[el[0]] = el[1];
  })
  return object
}
