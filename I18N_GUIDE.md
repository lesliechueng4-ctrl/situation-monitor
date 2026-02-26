# Situation Monitor 中文化指南

## 📝 已创建文件

我已经创建了一个完整的中文翻译系统！

### 文件列表

1. **翻译字典** (`src/lib/i18n/zh.ts`)
   - 包含所有界面的中文翻译
   - 涵盖所有面板、设置、错误消息等

2. **i18n 状态管理** (`src/lib/i18n/index.ts`)
   - 语言切换功能
   - 翻译函数 `t(key)`
   - 自动保存到 localStorage

---

## 🚀 如何使用

### 1. 导入 i18n 模块

```typescript
<script lang="ts">
  import { t, language, setLanguage } from '$lib/i18n';
</script>
```

### 2. 使用翻译

```svelte
<h1>{t('nav.title')}</h1>
<p>{t('panels.news')}</p>
<button>{t('common.refresh')}</button>
```

### 3. 带参数的翻译

```svelte
<p>{t('time.minutesAgo', 5)}</p>
<!-- 输出: 5 分钟前 -->
```

### 4. 语言切换按钮

```svelte
<button on:click={() => setLanguage('zh')}>中文</button>
<button on:click={() => setLanguage('en')}>English</button>
```

---

## 📋 翻译覆盖范围

### ✅ 已完成的翻译

| 分类 | 翻译项 | 状态 |
|------|---------|------|
| **导航** | 导航标题、设置等 | ✅ |
| **通用** | 加载、刷新、保存等 | ✅ |
| **面板名称** | 新闻、市场、美联储等 | ✅ |
| **新闻** | 分类、来源、时间 | ✅ |
| **市场** | 指数、板块、涨跌幅 | ✅ |
| **热力图** | 上涨、下跌、持平 | ✅ |
| **美联储** | 印钞机、资产负债表 | ✅ |
| **裁员** | 公司、行业、裁员人数 | ✅ |
| **鲸鱼交易** | 代币、数量、价值 | ✅ |
| **预测市场** | 问题、概率、交易量 | ✅ |
| **相关性** | 强相关、弱相关 | ✅ |
| **叙事分析** | 热门、新兴、情绪 | ✅ |
| **时间** | 今天、昨天、N分钟前 | ✅ |
| **错误消息** | 网络错误、数据错误 | ✅ |
| **成功消息** | 已保存、已删除 | ✅ |

---

## 🔧 下一步集成

要完全集成中文化，需要：

### 1. 在主页面导入

```typescript
// src/routes/+page.svelte
import { t, language, setLanguage, isZh } from '$lib/i18n';
```

### 2. 添加语言切换器

```svelte
<!-- 添加到右上角 -->
<div class="language-switcher">
  <button 
    class:active={$isZh}
    on:click={() => setLanguage('zh')}
  >
    中文
  </button>
  <button 
    class:active={!$isZh}
    on:click={() => setLanguage('en')}
  >
    English
  </button>
</div>
```

### 3. 替换所有文本

将页面中的英文文本替换为翻译函数调用：

```svelte
<!-- 原来 -->
<h1>Global News</h1>
<button>Refresh</button>

<!-- 改为 -->
<h1>{t('news.title')}</h1>
<button>{t('common.refresh')}</button>
```

---

## 💡 使用示例

### 示例 1：新闻面板

```svelte
<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<div class="news-panel">
  <h2>{t('news.title')}</h2>
  
  <div class="categories">
    <span>{t('news.categories.politics')}</span>
    <span>{t('news.categories.tech')}</span>
  </div>
  
  <button>{t('common.refresh')}</button>
</div>
```

### 示例 2：时间显示

```svelte
<script lang="ts">
  import { t } from '$lib/i18n';
  
  let minutesAgo = 5;
</script>

<p>{t('time.minutesAgo', minutesAgo)}</p>
<!-- 输出: 5 分钟前 -->
```

---

## 🎨 CSS 样式建议

```css
.language-switcher {
  display: flex;
  gap: 0.5rem;
}

.language-switcher button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
}

.language-switcher button.active {
  background: #007bff;
  color: white;
}
```

---

## 📊 特性

- ✅ **自动保存**：语言选择保存到 localStorage
- ✅ **即时切换**：无需刷新页面
- ✅ **参数支持**：支持动态文本插值
- ✅ **类型安全**：TypeScript 支持
- ✅ **轻量级**：按需加载

---

## ⚠️ 注意事项

1. **嵌套访问**：使用点号 `.` 访问嵌套键
   ```typescript
   t('news.categories.tech') // ✅
   ```

2. **回退机制**：如果翻译不存在，返回原键
   ```typescript
   t('non.existent.key') // 返回 'non.existent.key'
   ```

3. **参数索引**：从 0 开始
   ```typescript
   t('format', 10, 20) // {0}=10, {1}=20
   ```

---

## 🔄 更新翻译

如需修改翻译，编辑 `src/lib/i18n/zh.ts` 文件：

```typescript
export const zh = {
  // 修改这里
  nav: {
    title: '态势监控', // 改为中文标题
  },
};
```

---

## 🚀 部署更新

汉化完成后，重新部署：

```bash
cd C:\Users\k1_adm\.openclaw\workspace\situation-monitor

# 提交更改
git add src/lib/i18n
git commit -m "Add Chinese language support"

# 推送
git push origin main

# 重新构建
npm run build
```

---

## 📞 下一步建议

要完全汉化整个应用，建议：

1. **逐个面板汉化**
   - 从最常用的面板开始
   - 测试每个翻译是否准确

2. **添加更多翻译**
   - 如发现缺少的文本，补充到 `zh.ts`

3. **测试语言切换**
   - 确保切换流畅
   - 检查所有文本是否更新

4. **用户体验优化**
   - 添加语言切换动画
   - 保存用户偏好

---

## ✅ 已完成

✅ 创建中文翻译字典  
✅ 创建 i18n 状态管理系统  
✅ 支持语言切换  
✅ 支持参数插值  
✅ 自动保存偏好  

**中文翻译系统已就绪！**

---

**需要我继续集成到具体的页面组件吗？**
