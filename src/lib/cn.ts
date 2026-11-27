import { clsx, type ClassValue } from 'clsx';

/**
 * Join class names. This does not resolve Tailwind conflicts (no
 * tailwind-merge, to keep the bundle small): never pass two classes that set
 * the same property.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
