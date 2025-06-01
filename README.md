# MBTI 性格解读应用

基于 Next.js 开发的 MBTI 性格类型解读工具，使用 AI 生成个性化解读。

## 功能特点

- 支持输入或选择 16 种 MBTI 性格类型
- 从职业发展、人际关系和个人成长三个方面提供解读
- 支持 OpenRouter API 和 Deepseek API 两种 AI 服务
- 响应式设计，适配各种设备

## 本地开发

1. 克隆仓库
```bash
git clone https://github.com/yourusername/mbti-app.git
cd mbti-app
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
   - 复制 `.env.example` 文件为 `.env.local`
   - 填入你的 API 密钥:
     ```
     NEXT_PUBLIC_OPENROUTER_API_KEY=你的OpenRouter_API_Key
     NEXT_PUBLIC_DEEPSEEK_API_KEY=你的Deepseek_API_Key
     ```

4. 启动开发服务器
```bash
npm run dev
```

5. 在浏览器中访问 `http://localhost:3000`

## API 密钥获取

- OpenRouter API: 访问 [OpenRouter](https://openrouter.ai/) 注册并获取 API 密钥
- Deepseek API: 访问 [Siliconflow](https://api.siliconflow.cn/) 注册并获取 API 密钥

## 注意事项

- API 密钥存储在 `.env.local` 文件中，该文件不应提交到 Git 仓库
- 确保在部署前设置相应的环境变量 