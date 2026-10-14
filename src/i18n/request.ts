import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import ptBr from "@/locales/pt-br.json";
import ja from "@/locales/ja.json";

type Messages = typeof en;

/** 语言 → 消息文件映射；键集合必须与 routing.locales 完全一致。 */
const messagesMap: Record<string, Partial<Messages>> = {
  "en": en,
  "es": es,
  "pt-br": ptBr,
  "ja": ja,
};

function deepMerge<T>(base: T, override: Partial<T>): T {
  if (
    typeof base !== "object" ||
    base === null ||
    typeof override !== "object" ||
    override === null
  ) {
    return (override as T) ?? base;
  }

  if (Array.isArray(base)) {
    return (Array.isArray(override) ? override : base) as T;
  }

  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };

  for (const key of Object.keys(override as Record<string, unknown>)) {
    const baseValue = (base as Record<string, unknown>)[key];
    const overrideValue = (override as Record<string, unknown>)[key];
    if (overrideValue === undefined) continue;
    result[key] = deepMerge(baseValue as never, overrideValue as never);
  }

  return result as T;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // 缺失的翻译键回退到 en，保证任何语言都不会出现空白文案。
  const localeMessages: Partial<Messages> = messagesMap[locale] ?? {};

  const messages = deepMerge(en, localeMessages);
  return { locale, messages };
});
