#!/bin/bash

# 🚀 Vercel 快速部署脚本

echo "🔧 准备部署到 Vercel..."

# 检查是否安装了 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📦 安装 Vercel CLI..."
    npm install -g vercel
fi

# 安装依赖
echo "📦 安装项目依赖..."
npm install

# 本地构建测试
echo "🏗️ 本地构建测试..."
npm run build

# 如果构建成功，询问是否部署
if [ $? -eq 0 ]; then
    echo "✅ 构建成功！"
    echo ""
    echo "选择部署方式："
    echo "1) 预览环境部署 (vercel)"
    echo "2) 生产环境部署 (vercel --prod)"
    echo "3) 仅构建，不部署"
    echo ""
    read -p "请选择 (1-3): " choice
    
    case $choice in
        1)
            echo "🚀 部署到预览环境..."
            vercel
            ;;
        2)
            echo "🚀 部署到生产环境..."
            vercel --prod
            ;;
        3)
            echo "✅ 构建完成，已跳过部署"
            ;;
        *)
            echo "❌ 无效选择"
            exit 1
            ;;
    esac
else
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi

echo ""
echo "✨ 部署流程完成！"