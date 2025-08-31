# 台灣高效能運算教育協會 Taiwan HPC Education Association

台灣高效能運算教育協會官方網站，致力於培育具備理論與實務能力的 HPC 與 IC 設計人才，連結學界與產業需求。

## 網站架構圖 (Site Architecture)

```
首頁 (Home) - /
│
├── 關於我們 (About Us) - /about
│   │
│   ├── 使命 (Mission) - /about#mission
│   │
│   ├── 理監事成員 (Board) - /about#board
│   │
│   ├── 歷史 (History) - /about#history
│   │
│   ├── 年度報告 (Annual Report) - /about#annual-report
│   │
│   └── 合作夥伴 (Partners) - /about#partners
│
├── 專案與研究 (Projects & Research) - /projects
│   │
│   ├── BlackBear 開源計畫 (BlackBear Project) - /projects/blackbear
│   │
│   └── ACALSim 模擬平台 (ACALSim Platform) - /projects/acalsim
│
├── 教育培訓 (Education & Training) - /education
│   │
│   ├── 課程特色 (Course Features) - /education/features
│   │
│   └── ACALSim 課程 (ACALSim Courses) - /education/acalsim-course
│
├── 最新消息 (News) - /news
│   │
│   ├── 新聞文章 (News Articles) - /news/[slug]
│   │
│   ├── ACALSim 課程發布 (ACALSim Course Launch) - /news/acalsim-course-launch
│   │
│   ├── 2025年度會議 (Annual Conference 2025) - /news/annual-conference-2025
│   │
│   └── 產業合作 (Industry Partnership) - /news/industry-partnership
│
├── 聯絡我們 (Contact Us) - /contact
│
├── 加入會員 (Join Us) - /join-us
│
└── 贊助我們 (Donate) - /donate
```

## 技術架構

- **框架**: Astro 4.x
- **樣式**: Tailwind CSS + 語義化品牌色彩系統
- **內容管理**: Astro Content Collections
- **組件系統**: 響應式可重用組件
- **部署**: 靜態網站生成 (SSG)

## 色彩設計系統

### 語義化品牌色彩
- **brand-primary**: `#3a3a3a` - 主要文字色
- **brand-secondary**: `#29434e` - 次要文字色
- **brand-light**: `#FFF5E4` - 淺色背景
- **brand-accent**: `#CD5C08` - 強調色/CTA按鈕
- **brand-muted**: `#94a3b8` - 靜音文字
- **brand-surface**: `#ffffff` - 卡片背景
- **brand-border**: `#e2e8f0` - 邊框色

### 原始設計色彩
- **主色 (橘色)**: `#CD5C08` - 用於 CTA 按鈕和強調元素
- **次色 (灰綠)**: `#6A9C89` - 用於按鈕和資訊區塊
- **背景色 (米白)**: `#FFF5E4` - 用於背景和區塊分隔
- **輔助色 (淺綠)**: `#C1D8C3` - 用於標題、區塊和卡片背景
- **文字色**: `#29434e`, `#3a3a3a` - 用於主要文字內容

## 開發指令

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 建置網站
npm run build

# 預覽建置結果
npm run preview
```

## 組件架構

### 可重用組件
- **Card.astro** - 通用卡片容器，支援響應式內距和文字對齊
- **IconCard.astro** - 圖示卡片，支援多種尺寸和顏色主題
- **ProjectCard.astro** - 專案展示卡片，包含漸層標題、功能列表、標籤和按鈕
- **PageHero.astro** - 頁面英雄區塊，支援背景圖片和漸層樣式

### 響應式設計
- **Mobile-First 方法**: 所有組件預設為手機尺寸，使用 `md:` 前綴優化平板/桌面
- **響應式網格**: `grid-responsive-cards` (1→2→3列), `grid-responsive-projects` (1→2列)
- **響應式按鈕**: `btn-primary`, `btn-primary-full` (手機全寬)
- **響應式文字**: 標題、描述、圖示都有適當的尺寸調整

### 全域樣式類別
```css
.section-padding     /* 響應式區塊內距 */
.icon-container-*    /* 圖示容器尺寸 */
.feature-list        /* 功能列表樣式 */
.section-title       /* 區塊標題樣式 */
.card-title          /* 卡片標題樣式 */
.card-description    /* 卡片描述樣式 */
```

## Changelog

### v1.1.0 - 2025-08-31

#### 🎨 樣式系統重構
- **語義化色彩系統**: 實施品牌色彩語義化命名
  - 統一色彩管理，單一真實來源 (Single Source of Truth)
  - 替換硬編碼顏色類別為語義化類別
  - 便於未來維護和主題切換

#### 🧩 組件化架構
- **可重用組件**: 創建 Card、IconCard、ProjectCard 組件
- **響應式設計**: 所有組件支援 Mobile-First 響應式設計
- **一致性**: 統一卡片樣式、間距、圓角等設計元素

#### 🎯 Hero 區塊統一
- **PageHero 組件**: 統一所有頁面的英雄區塊樣式
- **漸層背景**: 非首頁使用一致的漸層背景
- **響應式文字**: 標題和副標題支援響應式尺寸

#### 🛠️ 全域樣式優化
- **實用類別**: 新增常用組件模式的實用類別
- **響應式網格**: 預定義響應式網格系統
- **按鈕樣式**: 統一按鈕樣式和響應式行為

### v1.0.0 - 2025-08-31

#### 🎨 設計重構
- **完整重新設計**: 根據設計稿重新設計整個網站界面
- **色彩系統更新**: 實施新的品牌色彩方案
  - 主色橘色 `#CD5C08`
  - 次色灰綠 `#6A9C89`
  - 背景米白 `#FFF5E4`
  - 輔助淺綠 `#C1D8C3`

#### 🧭 導航系統
- **導航欄重構**: 更新導航選單項目
  - 首頁 (Home)
  - 關於我們 (About Us)
  - 課程 (Courses) - 原教育培訓
  - 活動 (Activities) - 原最新消息
  - 聯絡我們 (Contact Us) - 新增
- **Join Us 按鈕**: 使用品牌橘色突出顯示

#### 🏠 首頁重新設計
- **Hero 區塊**: 全屏背景圖片設計
  - 使用 `hero-computing.jpg` 作為背景
  - 添加半透明深色遮罩 (70% 透明度)
  - 提升文字可讀性
- **區塊重新排列**: 按照設計稿重新組織內容區塊
  - 使命區塊 - 米白背景
  - 重點專案區塊 - 淺綠背景
  - 最新消息區塊 - 白色背景
  - 合作夥伴區塊 - 米白背景 (新增)
  - CTA 區塊 - 灰綠背景

#### 📄 新增頁面
- **聯絡我們頁面**: 創建完整的聯絡頁面
  - 聯絡表單
  - 聯絡資訊展示
  - 響應式設計

#### 🎯 CTA 按鈕優化
- **主要 CTA**: "Join Us" 使用橘色 `#CD5C08`
- **次要 CTA**: 其他按鈕使用灰綠色 `#6A9C89`
- **色盲友善**: 高對比設計，符合 WCAG 2.1 AA 標準

#### 🛠️ 技術改進
- **Tailwind 配置**: 更新色彩系統配置
- **組件重構**: 更新 Header 組件以支援新導航
- **響應式設計**: 確保所有新設計在各裝置上正常顯示

#### 📁 項目管理
- **Git 初始化**: 建立版本控制
- **`.gitignore`**: 配置忽略檔案
  - 排除 `node_modules/`, 建置輸出
  - 排除設計檔案和規格文件
- **文件結構**: 整理項目檔案結構

---

## 貢獻指南

1. Fork 此專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 授權

此專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 檔案

## 聯絡資訊

- **官方網站**: [https://twhpcedu.org](https://twhpcedu.org)
- **電子郵件**: contact@twhpcedu.org
- **地址**: 台灣台北市
