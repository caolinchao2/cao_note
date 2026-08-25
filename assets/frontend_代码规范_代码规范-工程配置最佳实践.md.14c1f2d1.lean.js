import{_ as n,o as a,c as l,O as p}from"./chunks/framework.db831a78.js";const u=JSON.parse('{"title":"代码规范-工程配置最佳实践","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/代码规范/代码规范-工程配置最佳实践.md","filePath":"frontend/代码规范/代码规范-工程配置最佳实践.md","lastUpdated":null}'),e={name:"frontend/代码规范/代码规范-工程配置最佳实践.md"};function o(c,s,t,r,i,E){return a(),l("div",null,s[0]||(s[0]=[p(`<h1 id="代码规范-工程配置最佳实践" tabindex="-1">代码规范-工程配置最佳实践 <a class="header-anchor" href="#代码规范-工程配置最佳实践" aria-label="Permalink to &quot;代码规范-工程配置最佳实践&quot;">​</a></h1><h2 id="项目根目录配置文件一览" tabindex="-1">项目根目录配置文件一览 <a class="header-anchor" href="#项目根目录配置文件一览" aria-label="Permalink to &quot;项目根目录配置文件一览&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">my-project/</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .eslint/                    # ESLint 规则拆分</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── base.js</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── ts.js</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── vue.js</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .husky/</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── pre-commit</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── commit-msg</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .vscode/</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── settings.json           # 团队统一编辑器配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├── eslint.config.js            # ESLint 配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .prettierrc                 # Prettier 配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .prettierignore</span></span>
<span class="line"><span style="color:#e1e4e8;">├── commitlint.config.js        # Commit 规范</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .editorconfig               # 跨编辑器配置</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .npmrc                      # npm/pnpm 配置</span></span>
<span class="line"><span style="color:#e1e4e8;">└── tsconfig.json               # TypeScript 配置</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">my-project/</span></span>
<span class="line"><span style="color:#24292e;">├── .eslint/                    # ESLint 规则拆分</span></span>
<span class="line"><span style="color:#24292e;">│   ├── base.js</span></span>
<span class="line"><span style="color:#24292e;">│   ├── ts.js</span></span>
<span class="line"><span style="color:#24292e;">│   └── vue.js</span></span>
<span class="line"><span style="color:#24292e;">├── .husky/</span></span>
<span class="line"><span style="color:#24292e;">│   ├── pre-commit</span></span>
<span class="line"><span style="color:#24292e;">│   └── commit-msg</span></span>
<span class="line"><span style="color:#24292e;">├── .vscode/</span></span>
<span class="line"><span style="color:#24292e;">│   └── settings.json           # 团队统一编辑器配置</span></span>
<span class="line"><span style="color:#24292e;">├── eslint.config.js            # ESLint 配置</span></span>
<span class="line"><span style="color:#24292e;">├── .prettierrc                 # Prettier 配置</span></span>
<span class="line"><span style="color:#24292e;">├── .prettierignore</span></span>
<span class="line"><span style="color:#24292e;">├── commitlint.config.js        # Commit 规范</span></span>
<span class="line"><span style="color:#24292e;">├── .editorconfig               # 跨编辑器配置</span></span>
<span class="line"><span style="color:#24292e;">├── .npmrc                      # npm/pnpm 配置</span></span>
<span class="line"><span style="color:#24292e;">└── tsconfig.json               # TypeScript 配置</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="editorconfig" tabindex="-1">editorconfig <a class="header-anchor" href="#editorconfig" aria-label="Permalink to &quot;editorconfig&quot;">​</a></h2><p>跨编辑器统一基础设置（缩进、编码、换行符）。</p><div class="language-ini vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># .editorconfig</span></span>
<span class="line"><span style="color:#F97583;">root</span><span style="color:#E1E4E8;"> = true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">[*]</span></span>
<span class="line"><span style="color:#F97583;">indent_style</span><span style="color:#E1E4E8;"> = space</span></span>
<span class="line"><span style="color:#F97583;">indent_size</span><span style="color:#E1E4E8;"> = 2</span></span>
<span class="line"><span style="color:#F97583;">end_of_line</span><span style="color:#E1E4E8;"> = lf</span></span>
<span class="line"><span style="color:#F97583;">charset</span><span style="color:#E1E4E8;"> = utf-8</span></span>
<span class="line"><span style="color:#F97583;">trim_trailing_whitespace</span><span style="color:#E1E4E8;"> = true</span></span>
<span class="line"><span style="color:#F97583;">insert_final_newline</span><span style="color:#E1E4E8;"> = true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">[*.md]</span></span>
<span class="line"><span style="color:#F97583;">trim_trailing_whitespace</span><span style="color:#E1E4E8;"> = false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># .editorconfig</span></span>
<span class="line"><span style="color:#D73A49;">root</span><span style="color:#24292E;"> = true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">[*]</span></span>
<span class="line"><span style="color:#D73A49;">indent_style</span><span style="color:#24292E;"> = space</span></span>
<span class="line"><span style="color:#D73A49;">indent_size</span><span style="color:#24292E;"> = 2</span></span>
<span class="line"><span style="color:#D73A49;">end_of_line</span><span style="color:#24292E;"> = lf</span></span>
<span class="line"><span style="color:#D73A49;">charset</span><span style="color:#24292E;"> = utf-8</span></span>
<span class="line"><span style="color:#D73A49;">trim_trailing_whitespace</span><span style="color:#24292E;"> = true</span></span>
<span class="line"><span style="color:#D73A49;">insert_final_newline</span><span style="color:#24292E;"> = true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">[*.md]</span></span>
<span class="line"><span style="color:#D73A49;">trim_trailing_whitespace</span><span style="color:#24292E;"> = false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="vs-code-团队配置" tabindex="-1">VS Code 团队配置 <a class="header-anchor" href="#vs-code-团队配置" aria-label="Permalink to &quot;VS Code 团队配置&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// .vscode/settings.json — 提交到仓库，团队共享</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;editor.formatOnSave&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;editor.defaultFormatter&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;editor.codeActionsOnSave&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;source.fixAll.eslint&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;explicit&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;editor.tabSize&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;files.eol&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;typescript.tsdk&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node_modules/typescript/lib&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;css.lint.unknownAtRules&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ignore&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// .vscode/extensions.json — 推荐插件</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;recommendations&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;dbaeumer.vscode-eslint&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;esbenp.prettier-vscode&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;vue.volar&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;bradlc.vscode-tailwindcss&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// .vscode/settings.json — 提交到仓库，团队共享</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;editor.formatOnSave&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;editor.defaultFormatter&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;esbenp.prettier-vscode&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;editor.codeActionsOnSave&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;source.fixAll.eslint&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;explicit&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;editor.tabSize&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;files.eol&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;typescript.tsdk&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;node_modules/typescript/lib&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;css.lint.unknownAtRules&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ignore&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// .vscode/extensions.json — 推荐插件</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;recommendations&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;dbaeumer.vscode-eslint&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;esbenp.prettier-vscode&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;vue.volar&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;bradlc.vscode-tailwindcss&quot;</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="package-json-scripts" tabindex="-1">package.json scripts <a class="header-anchor" href="#package-json-scripts" aria-label="Permalink to &quot;package.json scripts&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;lint&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;eslint . --max-warnings=0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;lint:fix&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;eslint . --fix&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;format&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;prettier --write .&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;format:check&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;prettier --check .&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;typecheck&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;tsc --noEmit&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;prepare&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;husky&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;commit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cz&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;lint&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;eslint . --max-warnings=0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;lint:fix&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;eslint . --fix&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;format&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;prettier --write .&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;format:check&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;prettier --check .&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;typecheck&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;tsc --noEmit&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;prepare&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;husky&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;commit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;cz&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="monorepo-中的规范配置" tabindex="-1">Monorepo 中的规范配置 <a class="header-anchor" href="#monorepo-中的规范配置" aria-label="Permalink to &quot;Monorepo 中的规范配置&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">my-monorepo/</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .eslintrc.js              # root ESLint，各包可覆盖</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .prettierrc                # 统一格式</span></span>
<span class="line"><span style="color:#e1e4e8;">├── .husky/                    # 全局 Git Hooks</span></span>
<span class="line"><span style="color:#e1e4e8;">├── packages/</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── eslint-config/         # 共享 ESLint 配置</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── index.js</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── tsconfig/              # 共享 tsconfig</span></span>
<span class="line"><span style="color:#e1e4e8;">│       └── base.json</span></span>
<span class="line"><span style="color:#e1e4e8;">├── apps/</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── web/</span></span>
<span class="line"><span style="color:#e1e4e8;">│   │   └── .eslintrc.js       # 继承 root + 项目特有规则</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── admin/</span></span>
<span class="line"><span style="color:#e1e4e8;">│       └── .eslintrc.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">my-monorepo/</span></span>
<span class="line"><span style="color:#24292e;">├── .eslintrc.js              # root ESLint，各包可覆盖</span></span>
<span class="line"><span style="color:#24292e;">├── .prettierrc                # 统一格式</span></span>
<span class="line"><span style="color:#24292e;">├── .husky/                    # 全局 Git Hooks</span></span>
<span class="line"><span style="color:#24292e;">├── packages/</span></span>
<span class="line"><span style="color:#24292e;">│   ├── eslint-config/         # 共享 ESLint 配置</span></span>
<span class="line"><span style="color:#24292e;">│   │   └── index.js</span></span>
<span class="line"><span style="color:#24292e;">│   └── tsconfig/              # 共享 tsconfig</span></span>
<span class="line"><span style="color:#24292e;">│       └── base.json</span></span>
<span class="line"><span style="color:#24292e;">├── apps/</span></span>
<span class="line"><span style="color:#24292e;">│   ├── web/</span></span>
<span class="line"><span style="color:#24292e;">│   │   └── .eslintrc.js       # 继承 root + 项目特有规则</span></span>
<span class="line"><span style="color:#24292e;">│   └── admin/</span></span>
<span class="line"><span style="color:#24292e;">│       └── .eslintrc.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// packages/eslint-config/index.js</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  rules: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;no-console&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;warn&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;@typescript-eslint/no-unused-vars&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// apps/web/.eslintrc.js</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  root: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  extends: [</span><span style="color:#9ECBFF;">&#39;@my/eslint-config&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;plugin:vue/vue3-recommended&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// packages/eslint-config/index.js</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  rules: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;no-console&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;warn&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;@typescript-eslint/no-unused-vars&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// apps/web/.eslintrc.js</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  root: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  extends: [</span><span style="color:#032F62;">&#39;@my/eslint-config&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;plugin:vue/vue3-recommended&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="ci-阶段质量检查" tabindex="-1">CI 阶段质量检查 <a class="header-anchor" href="#ci-阶段质量检查" aria-label="Permalink to &quot;CI 阶段质量检查&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># .github/workflows/quality.yml</span></span>
<span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Code Quality</span></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">pull_request</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">lint</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pnpm/action-setup@v2</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-node@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">: { </span><span style="color:#85E89D;">node-version</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#85E89D;">cache</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;pnpm&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pnpm install</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pnpm lint</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pnpm typecheck</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pnpm test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># .github/workflows/quality.yml</span></span>
<span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Code Quality</span></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">pull_request</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">lint</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v4</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm/action-setup@v2</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-node@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">: { </span><span style="color:#22863A;">node-version</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#22863A;">cache</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;pnpm&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm install</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm lint</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm typecheck</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pnpm test</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,15)]))}const b=n(e,[["render",o]]);export{u as __pageData,b as default};
