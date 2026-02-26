/**
 * i18n 状态管理
 * 用于多语言支持
 */

import { writable, derived } from 'svelte/store';
import { zh } from './zh';

// 支持的语言
export type Language = 'en' | 'zh';

// 当前语言状态
export const language = writable<Language>('zh');

// 翻译函数
export function t(key: string, params?: Record<string, string | number>): string {
  const currentLang = get(language);
  
  if (currentLang === 'zh') {
    // 从中文翻译中查找
    const translation = key.split('.').reduce((obj: any, k) => obj?.[k], zh);
    if (typeof translation === 'string') {
      return replaceParams(translation as string, params);
    }
  }
  
  // 默认返回 key
  return params ? replaceParams(key, params) : key;
}

// 替换参数
function replaceParams(text: string, params?: Record<string, string | number>): string {
  if (!params) return text;
  
  return text.replace(/\{(\d+)\}/g, (match, index) => {
    const value = params[index];
    return value !== undefined ? String(value) : match;
  });
}

// 派生存储：是否使用中文
export const isZh = derived(language, ($lang) => $lang === 'zh');

// 语言切换函数
export function setLanguage(lang: Language) {
  language.set(lang);
  // 可以保存到 localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('situation-monitor-lang', lang);
  }
}

// 初始化语言（从 localStorage 读取）
export function initLanguage() {
  if (typeof window === 'undefined') return;
  
  const savedLang = localStorage.getItem('situation-monitor-lang');
  if (savedLang === 'en' || savedLang === 'zh') {
    language.set(savedLang as Language);
  }
}

// 初始化
（typeof window !== 'undefined') {
  initLanguage();
}
