# 第三方资源许可证声明

本项目基于多个开源项目进行二次开发，以下列出所有使用的第三方资源及其许可证信息。

## Ghost 核心

- **项目名称**：Ghost
- **仓库地址**：https://github.com/TryGhost/Ghost
- **版本**：6.59.0
- **许可证**：MIT License
- **版权所有**：Copyright (c) Ghost Foundation
- **许可证文本**：

```
MIT License

Copyright (c) Ghost Foundation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Source 主题

- **项目名称**：Source（Ghost 官方主题）
- **仓库地址**：https://github.com/TryGhost/Source
- **版本**：1.7.2
- **许可证**：MIT License
- **版权所有**：Copyright (c) Ghost Foundation
- **使用方式**：作为自定义主题的基础，在其基础上进行二次开发

## 自定义代码

本项目中新增的自定义代码（包括但不限于 `assets/css/oss-custom.css`、`assets/js/oss-custom.js`、`post.hbs` 中的相关推荐逻辑）采用 MIT 许可证。

- **作者**：hanzi-cyber
- **许可证**：MIT License

## 依赖包

Ghost 及其主题使用了大量开源 npm 依赖包，各依赖包的许可证信息详见其各自的 package.json 或 LICENSE 文件。主要依赖包括：

| 包名 | 许可证 |
|---|---|
| express | MIT |
| knex | MIT |
| bookshelf | MIT |
| handlebars | MIT |
| sharp | Apache-2.0 |
| better-sqlite3 | MIT |
| lodash | MIT |
| moment | MIT |
| validator | MIT |
| jsonwebtoken | MIT |

完整依赖列表请查看 `runtime/current/node_modules/` 中各包的许可证文件。

## 图标资源

本项目使用的图标来自 Ghost Source 主题内置的 SVG 图标，许可证为 MIT。

## 字体资源

本项目使用系统默认字体和 Ghost 主题内置的字体加载方案，未引入额外的第三方字体文件。

## 图片资源

本项目未包含第三方图片资源。演示文章中使用的图片均为 Ghost 默认生成或用户自行上传，版权归原作者所有。

## 声明

1. 本项目严格遵守各开源项目的许可证要求，保留原始版权声明和许可证文本。
2. 对 Ghost 核心代码未做任何修改，所有二次开发均在主题层面完成。
3. 本项目仅用于学习和研究目的，不得用于商业用途。
4. 如本项目中存在未正确标注许可证的第三方资源，请及时联系作者进行修正。

---

**最后更新**：2026-09-06
