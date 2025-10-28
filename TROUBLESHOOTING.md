# 图片不显示问题排查指南

## 快速检查清单

### 1️⃣ 检查 Vercel 部署状态
- 访问 [Vercel Dashboard](https://vercel.com/dashboard)
- 查看最新的部署是否显示 "Ready" 状态
- 如果显示 "Building..." 或 "Queued"，请等待完成
- 部署完成时间：通常 1-2 分钟

### 2️⃣ 强制刷新浏览器缓存
浏览器可能缓存了旧版本的网站：

**Windows / Linux:**
- Chrome/Edge: `Ctrl + Shift + R` 或 `Ctrl + F5`
- Firefox: `Ctrl + Shift + R`

**Mac:**
- Chrome/Edge: `Cmd + Shift + R`
- Safari: `Cmd + Option + R`
- Firefox: `Cmd + Shift + R`

### 3️⃣ 清除浏览器缓存
如果强制刷新不起作用：
1. 按 `F12` 打开开发者工具
2. 右键点击刷新按钮
3. 选择 "清空缓存并硬性重新加载"

### 4️⃣ 检查浏览器控制台错误
1. 按 `F12` 打开开发者工具
2. 切换到 "Console" 标签
3. 刷新页面
4. 查看是否有红色错误信息
5. 截图发给我

### 5️⃣ 检查网络请求
1. 按 `F12` 打开开发者工具
2. 切换到 "Network" 标签
3. 勾选 "Disable cache"
4. 刷新页面
5. 在过滤框输入 "me0" 或 "png"
6. 查看图片请求：
   - ✅ 状态码 200 = 图片加载成功
   - ❌ 状态码 404 = 图片找不到
   - ❌ 状态码 Failed = 网络问题

---

## 本地测试（100% 准确）

在本地预览生产构建版本：

```bash
cd /Users/siyux1927/local/portfolio/sonja-portfolio

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

然后访问 `http://localhost:4173`

**如果本地预览图片正常显示**：
- ✅ 代码没问题
- 问题在于 Vercel 部署或浏览器缓存

**如果本地预览图片也不显示**：
- ❌ 代码可能还有问题
- 需要进一步调试

---

## 可能的问题和解决方案

### 问题 1：图片路径大小写
某些服务器区分大小写。检查：
- 文件名：`me0.png` vs `Me0.png`
- import 路径是否完全匹配文件名

### 问题 2：图片在错误的分支
检查图片是否在 `oct2025` 分支：
```bash
git checkout oct2025
ls -la src/assets/
```

应该看到：
```
me0.png
me1.png
me4.png
me5.png
me6.png
me9.png
```

### 问题 3：Vercel 部署配置错误
检查 Vercel 项目设置：
1. Framework Preset: **Vite**
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Install Command: `npm install`

### 问题 4：图片只在大屏幕显示
代码中有 `hidden lg:block`，意味着图片只在大屏幕（≥1024px）显示。

如果您在手机或小屏幕设备上查看，图片会隐藏。

**解决方法**：
- 在电脑上查看（屏幕宽度 > 1024px）
- 或者调整浏览器窗口到全屏

---

## 调试步骤

### Step 1: 检查图片是否在仓库中
```bash
cd /Users/siyux1927/local/portfolio/sonja-portfolio
ls -lh src/assets/*.png
```

### Step 2: 检查构建输出
```bash
npm run build
ls -lh dist/assets/*.png
```

应该看到类似：
```
me0-HuRKXmlG.png
me1-BS0-TybT.png
me4-M5E8E2cD.png
me5-D8HZ4LXU.png
me6-btf0Td9i.png
me9-CYR78wzg.png
```

### Step 3: 本地预览
```bash
npm run preview
```

访问 `http://localhost:4173`，滚动到 "About Me" 部分。

---

## 具体位置

图片应该显示在：
- **页面位置**: 主页 → 向下滚动 → "About Me & Education" 部分
- **屏幕要求**: 宽度 ≥ 1024px（桌面屏幕）
- **位置**: 文字右侧的拼贴画区域

---

## 联系我

如果以上步骤都无法解决，请提供：
1. 浏览器控制台的截图（F12 → Console）
2. Network 标签的截图（F12 → Network，过滤 "png"）
3. Vercel 部署日志截图
4. 您访问的 URL

我会帮您进一步诊断！

