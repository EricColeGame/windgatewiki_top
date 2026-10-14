import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
}

/**
 * 导航配置：新站点尚未确定内容结构，先清空。
 * 消费者（SiteHeader、content.ts、[...slug]/page.tsx）读取的 key/path 字段保持不变。
 */
export const NAVIGATION_CONFIG: readonly NavigationItem[] = [];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
