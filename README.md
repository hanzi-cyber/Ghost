# 开源个人博客系统

基于 Ghost 开源博客系统二次开发的个人博客，支持注册、写作、评论、搜索，并包含自定义主题和多项自主扩展功能。

## 功能特性

### 核心功能（Ghost 原生）
- ✅ 用户注册与登录（管理员 + 会员）
- ✅ 文章发布与编辑（富文本编辑器）
- ✅ 标签管理与文章分类
- ✅ 会员评论系统
- ✅ 全文搜索（Ghost Sodo Search）
- ✅ 内容导出与导入
- ✅ 响应式布局（桌面 + 移动端）

### 自主扩展功能（二次开发）
- ✅ **相关文章推荐**：按标签智能匹配相关文章，提升内容发现能力
- ✅ **搜索关键词高亮**：搜索结果页中高亮匹配的关键词
- ✅ **阅读进度条**：文章详情页顶部显示阅读进度
- ✅ **返回顶部按钮**：滚动时显示返回顶部快捷按钮
- ✅ **文章卡片悬停效果**：鼠标悬停时卡片上浮动画
- ✅ **标签样式美化**：渐变背景圆角标签

## 技术栈

| 组件 | 版本 | 说明 |
|---|---|---|
| Ghost | 6.59.0 | 博客平台核心 |
| Node.js | 22 LTS | 运行时环境 |
| SQLite | 3 | 本地数据库 |
| Handlebars | - | 模板引擎 |
| CSS3 | - | 样式（自定义主题） |
| JavaScript | ES6+ | 前端脚本（原生） |
| Git | 2.45+ | 版本管理 |

## 环境要求

- **操作系统**：Windows 11 / Linux / macOS
- **Node.js**：22.x LTS
- **npm**：10.x 或 pnpm 11.x
- **Ghost CLI**：1.32+
- **Git**：2.40+
- **浏览器**：Chrome / Firefox 最新版

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/hanzi-cyber/Ghost.git
cd Ghost
```

### 2. 安装 Ghost 本地实例

```bash
# 创建运行目录
mkdir runtime
cd runtime

# 安装 Ghost（指定版本 6.59.0）
ghost install local 6.59.0 --no-stack --no-start

# 启动 Ghost
ghost start
```

> ⚠️ 如果 Ghost CLI 版本查询有误，可手动下载包后使用 `--zip` 参数安装。

### 3. 完成初始化

1. 访问 http://localhost:2368/ghost/
2. 设置博客标题、管理员账号和密码
3. 进入管理后台

### 4. 安装自定义主题

```bash
# 主题源码位于 theme/oss-blog-theme/
# 打包主题
cd theme/oss-blog-theme
# （可选）使用 gulp 构建：npm install && npm run zip

# 或直接压缩为 zip 文件
```

然后在 Ghost 管理后台：
1. 进入 **设置 → 设计与品牌 → 主题**
2. 点击 **上传主题**
3. 选择 `oss-blog-theme.zip`
4. 点击 **激活**

### 5. 配置会员与评论

1. 进入 **设置 → 会员**
2. 启用会员注册（公开）
3. 进入评论设置，允许所有会员评论

### 6. 访问前台

- 前台首页：http://localhost:2368/
- 管理后台：http://localhost:2368/ghost/

## 演示账号

| 角色 | 邮箱 | 密码 | 说明 |
|---|---|---|---|
| 管理员 | admin@example.com | Admin123456 | 拥有全部权限 |
| 会员 | member@example.com | Member123456 | 普通会员，可评论 |

> ⚠️ 以上均为本地演示账号，请勿用于生产环境。

## 项目结构

```
Ghost/
├── runtime/                  # Ghost 运行实例（不提交 Git）
│   ├── content/              # 内容、主题、数据
│   └── versions/             # Ghost 版本文件
├── theme/
│   └── oss-blog-theme/       # 自定义主题源码
│       ├── default.hbs       # 主模板
│       ├── post.hbs          # 文章详情页（相关推荐增强）
│       ├── assets/
│       │   ├── css/
│       │   │   └── oss-custom.css   # 自定义样式
│       │   └── js/
│       │       └── oss-custom.js    # 自定义脚本
│       └── package.json      # 主题配置
├── docs/                     # 实验文档
│   ├── baseline.md           # 基线文档
│   ├── architecture.md       # 架构说明
│   └── changelog.md          # 变更记录
├── tests/
│   └── acceptance.md         # 验收测试用例
├── README.md                 # 项目说明（本文档）
├── NOTICE.md                 # 第三方许可证声明
└── .gitignore                # Git 忽略规则
```

## 自定义主题说明

本项目基于 Ghost 官方 **Source 主题 v1.7.2** 进行二次开发，主题名称为 **oss-blog-theme v1.0.0**。

### 修改的文件

| 文件 | 修改内容 |
|---|---|
| `package.json` | 主题名称、版本号、描述 |
| `default.hbs` | 添加自定义 CSS/JS 引用 |
| `post.hbs` | 增强相关文章推荐（按标签匹配） |
| `assets/css/oss-custom.css` | 新增：自定义样式文件 |
| `assets/js/oss-custom.js` | 新增：自定义脚本文件 |

### 未修改的文件

Source 主题的其他文件保持原样，包括导航组件、页脚组件、文章卡片组件等，确保主题稳定性和可升级性。

## 自主扩展功能详解

### 1. 相关文章推荐

**功能**：在文章详情页底部显示与当前文章同标签的相关文章。

**实现**：使用 Ghost `{{#get}}` 助手，按当前文章主标签 `primary_tag.slug` 筛选文章，最多显示 3 篇。如果同标签文章不足，自动降级显示最新文章。

**位置**：`theme/oss-blog-theme/post.hbs`

### 2. 搜索关键词高亮

**功能**：从 URL 参数获取搜索关键词，在文章内容中高亮显示匹配的文本。

**实现**：原生 JavaScript 遍历内容区域文本节点，使用正则表达式匹配关键词（忽略大小写），用 `<mark class="oss-search-highlight">` 包裹匹配文本。

**位置**：`theme/oss-blog-theme/assets/js/oss-custom.js`

### 3. 阅读进度条

**功能**：文章详情页顶部显示渐变色阅读进度条，随滚动实时更新。

**实现**：监听 `scroll` 事件，计算 `scrollTop / (scrollHeight - innerHeight) * 100`，动态更新进度条宽度。

**位置**：`theme/oss-blog-theme/assets/js/oss-custom.js` + `oss-custom.css`

### 4. 返回顶部按钮

**功能**：页面滚动超过 300px 时，右下角显示返回顶部按钮，点击后平滑滚动到顶部。

**实现**：监听滚动事件控制按钮显示/隐藏，点击时调用 `window.scrollTo({ top: 0, behavior: 'smooth' })`。

**位置**：`theme/oss-blog-theme/assets/js/oss-custom.js` + `oss-custom.css`

## 测试

### 测试覆盖

| 测试类型 | 数量 | 说明 |
|---|---|---|
| 功能测试 | 8 | 登录、文章、标签、会员、评论、搜索 |
| 权限测试 | 4 | 管理员、会员、匿名用户权限边界 |
| 主题/界面测试 | 4 | 桌面、移动端、键盘可访问性、自定义功能 |
| 恢复测试 | 2 | 重启数据保留、内容导出恢复 |
| **合计** | **18** | 全部通过 |

详细测试用例见 [`tests/acceptance.md`](tests/acceptance.md)。

### 运行主题校验

```bash
cd theme/oss-blog-theme
npx gscan .
```

## 常用命令

```bash
# 进入运行目录
cd runtime

# 启动 Ghost
ghost start

# 停止 Ghost
ghost stop

# 查看运行状态
ghost ls

# 查看日志
ghost log

# 检查系统环境
ghost doctor
```

## 数据备份

- **数据库文件**：`runtime/content/data/ghost-local.db`
- **内容导出**：管理后台 → 设置 → 实验室 → 导出内容
- **主题文件**：`runtime/content/themes/` 或 `theme/oss-blog-theme/`

## 许可证

本项目基于 Ghost（MIT 许可证）二次开发。

- Ghost 核心：MIT License © Ghost Foundation
- Source 主题：MIT License © Ghost Foundation
- 自定义代码：MIT License

详见 [`LICENSE`](LICENSE) 和 [`NOTICE.md`](NOTICE.md)。

## 上游仓库

- **Ghost**：https://github.com/TryGhost/Ghost
- **Source 主题**：https://github.com/TryGhost/Source

## 个人仓库

https://github.com/hanzi-cyber/Ghost

---

**本项目为课程实验作品，仅用于学习和研究目的。**
