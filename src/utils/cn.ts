import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind class names with support for conditional logic (clsx)
 * and conflict resolution (twMerge). Use this instead of clsx directly.
 *
 * @param inputs Tailwind or conditional class strings
 * @returns A clean, merged className string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
