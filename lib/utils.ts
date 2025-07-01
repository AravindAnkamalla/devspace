import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const openInNewTab = (url?: string) => {
  if (url && typeof url === 'string') {
    window.open(url, '_blank', 'noopener,noreferrer')
  } else {
    console.warn('Invalid or missing URL')
  }
}
export const openMailClient = (email?: string) => {
  if (email && typeof email === 'string') {
    window.location.href = `mailto:${email}`
  } else {
    console.warn('Invalid or missing email address')
  }
}
