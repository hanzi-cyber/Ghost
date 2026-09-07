# 实验基线文档

## 基本信息

| 项目 | 值 |
|---|---|
| 实验名称 | 开源个人博客系统二次开发 |
| 安装日期 | 2026-09-06 |
| 博客标题 | 开源个人博客 |
| 访问地址 | http://localhost:2368/ |
| 管理后台 | http://localhost:2368/ghost/ |

## 环境版本

| 组件 | 版本 |
|---|---|
| Ghost | 6.59.0 |
| Ghost CLI | 1.32.3 |
| Node.js | v22.23.2 |
| npm | 10.9.8 |
| pnpm | 11.21.0 |
| Git | 2.45.1.windows.1 |
| 操作系统 | Windows 11 家庭版 |
| 数据库 | SQLite 3（本地文件） |

## 仓库信息

| 项目 | 地址 |
|---|---|
| 上游仓库（upstream） | https://github.com/TryGhost/Ghost |
| 个人仓库（origin） | https://github.com/hanzi-cyber/Ghost |
| 固定上游 Commit | 26746d30ce |

## 账号信息（演示用）

| 角色 | 邮箱 | 密码 | 说明 |
|---|---|---|---|
| 管理员 | admin@example.com | Admin123456 | 拥有全部权限 |
| 会员 | member@example.com | Member123456 | 普通会员，可评论 |

> ⚠️ 以上均为本地演示账号，请勿用于生产环境。

## 目录结构

```
Ghost/
├── runtime/              # Ghost 运行实例（不提交 Git）
│   ├── content/          # 内容、主题、数据
│   ├── versions/         # Ghost 版本文件
│   └── config.development.json
├── theme/                # 自定义主题源码
│   └── oss-blog-theme/
├── docs/                 # 实验文档
│   ├── baseline.md       # 本文档
│   ├── architecture.md   # 架构说明
│   └── changelog.md      # 变更记录
├── tests/                # 测试用例
│   └── acceptance.md     # 验收测试
└── README.md             # 项目说明
```

## 基线功能验证

在未做任何修改前，Ghost 原生支持以下功能：

- [x] 管理员登录与文章发布
- [x] 标签管理与文章关联
- [x] 会员注册与登录
- [x] 评论功能（需在设置中启用）
- [x] 原生搜索（Sodo Search）
- [x] 内容导出与导入
- [x] 主题切换与安装

## 启动与停止命令

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
```

## 数据备份

- 数据库文件：`runtime/content/data/ghost-local.db`
- 内容导出：管理后台 → 设置 → 实验室 → 导出内容
- 主题文件：`runtime/content/themes/`
