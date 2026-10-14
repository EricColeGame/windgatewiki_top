import { BookOpen, Boxes, Compass, Shield, Trophy, Users, Zap, type LucideIcon } from "lucide-react";

export interface NavigationItem {
  /** 翻译键（en.json 的 nav 命名空间下的 key，同时也是分类 slug） */
  key: string;
  /** 该分类列表页的 URL 路径 */
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

/**
 * 导航配置：分类 slug 与 content/<locale>/ 下的文章子目录一一对应
 * （来源：关键词.json 的 categories）。
 * 消费者（SiteHeader、content.ts、[...slug]/page.tsx）读取的 key/path 字段保持不变。
 */
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Zap, isContentType: true },
  { key: "building", path: "/building", icon: Boxes, isContentType: true },
  { key: "progression", path: "/progression", icon: Trophy, isContentType: true },
  { key: "items", path: "/items", icon: Compass, isContentType: true },
  { key: "comparison", path: "/comparison", icon: Shield, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
