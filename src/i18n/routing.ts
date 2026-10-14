import { defineRouting } from "next-intl/routing";

/**
 * 唯一真相源：全站语言集合在这里维护。
 * request.ts、language-switcher.tsx 的标签键、src/locales/*.json 文件名必须与本数组保持一致。
 */
export const locales = ["en", "es", "pt-br", "ja"] as const;

export const defaultLocale = "en";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
