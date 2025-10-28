# 部署指南 | Deployment Guide

你的网站可以通过多种方式部署。以下是两种最简单的方案：

---

## 🚀 方案 1：Vercel 部署（推荐 - 最简单）

### 为什么选择 Vercel？
- ✅ **完全免费**
- ✅ **自动 HTTPS**
- ✅ **自动 CI/CD**（每次 push 自动部署）
- ✅ **超快速度**（全球 CDN）
- ✅ **完美支持 Vite + React**

### 部署步骤：

#### 1. 提交并推送代码到 GitHub
```bash
cd /Users/siyux1927/local/portfolio/sonja-portfolio

# 添加所有更改
git add .

# 提交更改
git commit -m "Ready for deployment"

# 推送到 GitHub
git push origin oct2025
```

#### 2. 在 Vercel 上部署
1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 **"Add New..."** → **"Project"**
4. 选择你的仓库：`SonyaX20/SonyaX20.github.io`
5. Vercel 会自动检测到 Vite 项目
6. 点击 **"Deploy"**

**就这么简单！** 🎉

#### 3. 部署完成
- Vercel 会给你一个域名，比如：`sonja-portfolio.vercel.app`
- 每次 push 到 GitHub，网站会自动更新
- 你也可以绑定自己的域名（如 `sonjaxiao.com`）

---

## 📦 方案 2：GitHub Pages 部署

### 步骤 1：安装 gh-pages
```bash
cd /Users/siyux1927/local/portfolio/sonja-portfolio
npm install --save-dev gh-pages
```

### 步骤 2：更新 vite.config.js
需要添加 base path 配置：

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // 如果仓库名是 username.github.io，用 '/'
  // 如果仓库名不是 username.github.io，改为 '/repository-name/'
})
```

### 步骤 3：添加部署脚本到 package.json
在 `scripts` 中添加：

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 步骤 4：部署
```bash
npm run deploy
```

### 步骤 5：配置 GitHub Pages
1. 访问你的 GitHub 仓库
2. 进入 **Settings** → **Pages**
3. Source 选择 **gh-pages** 分支
4. 点击 **Save**

等待几分钟，你的网站就会发布到：
`https://sonyax20.github.io`

---

## 🔧 方案 3：GitHub Actions 自动部署（高级）

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ oct2025 ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

这样每次 push 到 oct2025 分支，网站会自动部署。

---

## 📝 快速命令参考

### 本地预览构建版本
```bash
npm run build
npm run preview
```

### 提交和推送到 GitHub
```bash
git add .
git commit -m "Update website"
git push origin oct2025
```

### 部署到 GitHub Pages
```bash
npm run deploy
```

---

## 🌐 自定义域名（可选）

### Vercel
1. 在 Vercel 项目设置中点击 "Domains"
2. 添加你的域名（如 `sonjaxiao.com`）
3. 按照指示在域名提供商处添加 DNS 记录

### GitHub Pages
1. 在项目根目录创建 `public/CNAME` 文件
2. 文件内容为你的域名：`sonjaxiao.com`
3. 在域名提供商处设置 DNS：
   - Type: `A`
   - Name: `@`
   - Value: GitHub Pages IP 地址

---

## ⚡ 性能优化提示

在部署前，确保：
- ✅ 所有图片已优化（使用 WebP 格式）
- ✅ 移除 console.log 语句
- ✅ 检查 bundle size：`npm run build`

---

## 🆘 常见问题

### Q: 部署后页面空白？
A: 检查 `vite.config.js` 中的 `base` 配置是否正确。

### Q: 路由不工作（刷新页面 404）？
A: 
- **Vercel**: 创建 `vercel.json`（见下方）
- **GitHub Pages**: 使用 Hash Router 或创建 `404.html`

### Vercel 路由配置（vercel.json）
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🎯 推荐方案

**我强烈推荐使用 Vercel**：
1. 完全免费
2. 设置简单（3分钟完成）
3. 自动 CI/CD
4. 更好的性能
5. 完美支持 SPA 路由

GitHub Pages 更适合静态网站或个人博客。

---

## 📞 需要帮助？

如果部署过程中遇到问题：
1. 检查浏览器控制台的错误信息
2. 查看 Vercel 或 GitHub Actions 的构建日志
3. 确保 `npm run build` 在本地能成功运行

祝部署顺利！🚀

