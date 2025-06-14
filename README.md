# MBTI-App.Online

一个基于 Next.js 13 App Router 开发的在线 MBTI 性格测试解读平台。使用 TypeScript、Tailwind CSS、Shadcn UI 构建，提供美观的界面和流畅的用户体验。

## 项目简介

MBTI-App.Online 是一个专业的 MBTI 性格类型解读平台，帮助用户深入了解自己的性格特点，提供个性化的职业发展、人际关系和个人成长建议。

## 主要功能

- MBTI 性格类型解读
- AI 驱动的个性化分析
- 实时评论与讨论
- 响应式设计
- 自动部署集成

## 技术栈

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Server Components
- Vercel 自动部署

## 部署

本项目已配置 Vercel 自动部署：
- 推送到 `main` 分支会自动触发生产环境部署
- 推送到其他分支会创建预览部署
- 部署状态可在 Vercel Dashboard 中查看

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start
```

## 环境变量

创建 `.env.local` 文件并设置以下环境变量：

```env
NEXT_PUBLIC_DEEPSEEK_API_KEY=your_api_key
```

## 许可证

MIT # API 配置更新 - 2025年 6月 2日 星期一 18时29分46秒 CST
# 触发重新部署 - 2025年 6月 2日 星期一 18时57分57秒 CST
# 强制重新部署 API 修复 - 2025年 6月 2日 星期一 19时01分07秒 CST

# 强制部署更新 - 2025年 6月14日 星期六 14时59分47秒 CST
