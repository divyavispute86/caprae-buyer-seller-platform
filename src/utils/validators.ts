export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export const isNonEmpty = (v: string) => v.trim().length > 0;
