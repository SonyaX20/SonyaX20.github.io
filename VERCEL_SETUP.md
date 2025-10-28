# Vercel 部署配置指南

## 🚨 重要：确保 Vercel 配置正确

### 1️⃣ 检查 Vercel 项目设置

访问 [Vercel Dashboard](https://vercel.com/dashboard)，找到您的项目，点击进入。

### 2️⃣ 确认分支设置

点击 **Settings** → **Git**，确认：

**Production Branch:** `oct2025`  
（这是您的默认分支）

如果不是 `oct2025`，请更改为 `oct2025`。

### 3️⃣ 确认构建设置

点击 **Settings** → **Build & Development Settings**

确认以下配置：

```
Framework Preset:     Vite
Build Command:        npm run build
Output Directory:     dist
Install Command:      npm install
```

**如果这些设置不对，请按照以下步骤修改：**

1. Framework Preset: 选择 **Vite**
2. Build Command: 
   - ✅ 保持 `npm run build` 或 `vite build`
   - ❌ 不要用 `npm run dev`
3. Output Directory: 
   - ✅ 必须是 `dist`
   - ❌ 不要是 `build` 或其他
4. Install Command:
   - ✅ `npm install`

### 4️⃣ 强制重新部署

**方法 1: 在 Vercel Dashboard 中**
1. 进入您的项目
2. 点击 **Deployments** 标签
3. 找到最新的部署
4. 点击右侧的 **三个点 (⋯)**
5. 选择 **Redeploy**
6. 选择 **Use existing Build Cache** 的选项要 **取消勾选**
7. 点击 **Redeploy**

**方法 2: 使用 Vercel CLI**（如果已安装）
```bash
vercel --prod --force
```

### 5️⃣ 等待部署完成

部署通常需要 **1-3 分钟**。

在 Vercel Dashboard 中：
- ⏳ **Building** = 正在构建
- ✅ **Ready** = 部署完成
- ❌ **Error** = 构建失败（查看日志）

### 6️⃣ 检查构建日志

如果部署失败：
1. 点击失败的部署
2. 查看 **Building** 日志
3. 查找错误信息
4. 截图发给我

### 7️⃣ 清除浏览器缓存

部署成功后，必须强制刷新浏览器：

**Mac:**
- Chrome/Edge: `Cmd + Shift + R`
- Safari: `Cmd + Option + R`

**或者：**
1. 按 `F12` 打开开发者工具
2. 右键点击刷新按钮
3. 选择 "清空缓存并硬性重新加载"

---

## 🔍 验证部署是否成功

### 检查构建日志中的图片

在 Vercel 构建日志中，应该看到类似：

```
dist/assets/me0-[hash].png
dist/assets/me1-[hash].png
dist/assets/me4-[hash].png
dist/assets/me5-[hash].png
dist/assets/me6-[hash].png
dist/assets/me9-[hash].png
```

**如果看不到这些文件**，说明图片没有被正确打包。

### 检查部署的文件

1. 在 Vercel Dashboard 中，点击您的部署
2. 点击 **Source** 标签
3. 查看 `src/pages/Home.jsx` 文件
4. 确认前 20 行应该包含：

```javascript
// Import images
import me0 from '../assets/me0.png';
import me1 from '../assets/me1.png';
import me4 from '../assets/me4.png';
import me5 from '../assets/me5.png';
import me6 from '../assets/me6.png';
import me9 from '../assets/me9.png';
```

**如果没有这些 import**，说明 Vercel 部署的是旧代码。

---

## 🐛 常见问题

### 问题 1: Vercel 部署旧代码
**原因**: Vercel 可能连接到错误的分支

**解决**:
1. Settings → Git
2. 确认 Production Branch 是 `oct2025`
3. 手动触发 Redeploy

### 问题 2: 图片 404 错误
**原因**: 图片路径不正确

**解决**: 
- 确认代码使用 ES6 import（不是字符串路径）
- 重新部署

### 问题 3: 构建成功但图片不显示
**原因**: 浏览器缓存

**解决**:
- 强制刷新: `Cmd + Shift + R`
- 或清空浏览器缓存

### 问题 4: 图片只在本地显示
**原因**: Vercel 的构建配置不正确

**解决**:
- 确认 Output Directory 是 `dist`
- 确认 Framework Preset 是 `Vite`

---

## ✅ 最新代码状态

**最新提交**: `84236bd - Trigger Vercel redeploy - fix image paths`

**包含的修复**:
- ✅ 使用 ES6 import 导入图片
- ✅ 移除字符串路径 `/src/assets/me0.png`
- ✅ 所有 6 张图片正确打包

---

## 🆘 如果还是不行

请提供以下信息：

1. **Vercel 部署状态**: 
   - 截图 Dashboard 显示 "Ready" 还是 "Error"

2. **Vercel 构建日志**:
   - 在 Deployment 中点击 "Building"
   - 滚动到底部，截图最后 50 行

3. **浏览器控制台**:
   - F12 → Console 标签
   - 截图所有红色错误

4. **Network 请求**:
   - F12 → Network 标签
   - 过滤 "png"
   - 截图图片请求的状态码

5. **Vercel Source 代码**:
   - Deployment → Source 标签
   - 查看 `src/pages/Home.jsx`
   - 截图前 20 行

有了这些信息，我就能准确定位问题！

