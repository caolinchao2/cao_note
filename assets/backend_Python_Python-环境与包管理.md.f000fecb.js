import{_ as n,o as a,c as p,O as l}from"./chunks/framework.b55d0e42.js";const b=JSON.parse('{"title":"Python 环境与包管理","description":"","frontmatter":{},"headers":[],"relativePath":"backend/Python/Python-环境与包管理.md","filePath":"backend/Python/Python-环境与包管理.md","lastUpdated":1779446525000}'),e={name:"backend/Python/Python-环境与包管理.md"};function o(r,s,c,t,i,y){return a(),p("div",null,s[0]||(s[0]=[l(`<h1 id="python-环境与包管理" tabindex="-1">Python 环境与包管理 <a class="header-anchor" href="#python-环境与包管理" aria-label="Permalink to &quot;Python 环境与包管理&quot;">​</a></h1><blockquote><p>本章涵盖 Python 虚拟环境管理、包管理工具、项目配置（pyproject.toml）以及容器化部署等工程化内容。</p></blockquote><h2 id="虚拟环境" tabindex="-1">虚拟环境 <a class="header-anchor" href="#虚拟环境" aria-label="Permalink to &quot;虚拟环境&quot;">​</a></h2><h3 id="venv-python-内置" tabindex="-1">venv（Python 内置） <a class="header-anchor" href="#venv-python-内置" aria-label="Permalink to &quot;venv（Python 内置）&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 创建虚拟环境</span></span>
<span class="line"><span style="color:#B392F0;">python</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">venv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.venv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 激活（Windows）</span></span>
<span class="line"><span style="color:#B392F0;">.venv\\Scripts\\activate</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 激活（macOS/Linux）</span></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.venv/bin/activate</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 退出虚拟环境</span></span>
<span class="line"><span style="color:#B392F0;">deactivate</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 创建虚拟环境</span></span>
<span class="line"><span style="color:#6F42C1;">python</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">venv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.venv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 激活（Windows）</span></span>
<span class="line"><span style="color:#6F42C1;">.venv\\Scripts\\activate</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 激活（macOS/Linux）</span></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.venv/bin/activate</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 退出虚拟环境</span></span>
<span class="line"><span style="color:#6F42C1;">deactivate</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="virtualenv-第三方-功能更强" tabindex="-1">virtualenv（第三方，功能更强） <a class="header-anchor" href="#virtualenv-第三方-功能更强" aria-label="Permalink to &quot;virtualenv（第三方，功能更强）&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">virtualenv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建</span></span>
<span class="line"><span style="color:#B392F0;">virtualenv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.venv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 指定 Python 版本</span></span>
<span class="line"><span style="color:#B392F0;">virtualenv</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">python3.11</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.venv</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">virtualenv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建</span></span>
<span class="line"><span style="color:#6F42C1;">virtualenv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.venv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 指定 Python 版本</span></span>
<span class="line"><span style="color:#6F42C1;">virtualenv</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">python3.11</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.venv</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="包管理工具" tabindex="-1">包管理工具 <a class="header-anchor" href="#包管理工具" aria-label="Permalink to &quot;包管理工具&quot;">​</a></h2><h3 id="pip" tabindex="-1">pip <a class="header-anchor" href="#pip" aria-label="Permalink to &quot;pip&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装包</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 指定版本</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requests==</span><span style="color:#79B8FF;">2.31</span><span style="color:#9ECBFF;">.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装到用户目录（无需虚拟环境）</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--user</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 导出依赖</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">freeze</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从文件安装</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看已安装包</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看包信息</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 国内镜像（临时使用）</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requests</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://pypi.tuna.tsinghua.edu.cn/simple</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置默认镜像</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">global.index-url</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://pypi.tuna.tsinghua.edu.cn/simple</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装包</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 指定版本</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requests==</span><span style="color:#005CC5;">2.31</span><span style="color:#032F62;">.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装到用户目录（无需虚拟环境）</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--user</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 导出依赖</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">freeze</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从文件安装</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看已安装包</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看包信息</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 国内镜像（临时使用）</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requests</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://pypi.tuna.tsinghua.edu.cn/simple</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置默认镜像</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">global.index-url</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://pypi.tuna.tsinghua.edu.cn/simple</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="pipenv" tabindex="-1">pipenv <a class="header-anchor" href="#pipenv" aria-label="Permalink to &quot;pipenv&quot;">​</a></h3><p>整合了 pip 和 virtualenv，使用 Pipfile 管理依赖：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pipenv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建虚拟环境并安装包</span></span>
<span class="line"><span style="color:#B392F0;">pipenv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装开发依赖</span></span>
<span class="line"><span style="color:#B392F0;">pipenv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 激活虚拟环境</span></span>
<span class="line"><span style="color:#B392F0;">pipenv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">shell</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 生成 requirements.txt</span></span>
<span class="line"><span style="color:#B392F0;">pipenv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requirements</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requirements.txt</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pipenv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建虚拟环境并安装包</span></span>
<span class="line"><span style="color:#6F42C1;">pipenv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装开发依赖</span></span>
<span class="line"><span style="color:#6F42C1;">pipenv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 激活虚拟环境</span></span>
<span class="line"><span style="color:#6F42C1;">pipenv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">shell</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 生成 requirements.txt</span></span>
<span class="line"><span style="color:#6F42C1;">pipenv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requirements</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requirements.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="poetry-推荐" tabindex="-1">poetry（推荐） <a class="header-anchor" href="#poetry-推荐" aria-label="Permalink to &quot;poetry（推荐）&quot;">​</a></h3><p>新一代 Python 包管理和打包工具，使用 pyproject.toml：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">poetry</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建新项目</span></span>
<span class="line"><span style="color:#B392F0;">poetry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 初始化已有项目</span></span>
<span class="line"><span style="color:#B392F0;">poetry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#B392F0;">poetry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装开发依赖</span></span>
<span class="line"><span style="color:#B392F0;">poetry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装所有依赖</span></span>
<span class="line"><span style="color:#B392F0;">poetry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 激活虚拟环境</span></span>
<span class="line"><span style="color:#B392F0;">poetry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">shell</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 构建包</span></span>
<span class="line"><span style="color:#B392F0;">poetry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 发布到 PyPI</span></span>
<span class="line"><span style="color:#B392F0;">poetry</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">publish</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">poetry</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建新项目</span></span>
<span class="line"><span style="color:#6F42C1;">poetry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">new</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 初始化已有项目</span></span>
<span class="line"><span style="color:#6F42C1;">poetry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#6F42C1;">poetry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装开发依赖</span></span>
<span class="line"><span style="color:#6F42C1;">poetry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pytest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装所有依赖</span></span>
<span class="line"><span style="color:#6F42C1;">poetry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 激活虚拟环境</span></span>
<span class="line"><span style="color:#6F42C1;">poetry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">shell</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 构建包</span></span>
<span class="line"><span style="color:#6F42C1;">poetry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 发布到 PyPI</span></span>
<span class="line"><span style="color:#6F42C1;">poetry</span><span style="color:#24292E;"> </span><span style="color:#032F62;">publish</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="uv-新兴工具" tabindex="-1">uv（新兴工具） <a class="header-anchor" href="#uv-新兴工具" aria-label="Permalink to &quot;uv（新兴工具）&quot;">​</a></h3><p>Rust 编写的高性能包管理工具，比 pip 快 10-100 倍：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建虚拟环境</span></span>
<span class="line"><span style="color:#B392F0;">uv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">venv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装包</span></span>
<span class="line"><span style="color:#B392F0;">uv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从 requirements.txt 安装</span></span>
<span class="line"><span style="color:#B392F0;">uv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用 uv 替代 pip（兼容 pip 命令）</span></span>
<span class="line"><span style="color:#B392F0;">uv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"><span style="color:#B392F0;">uv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">freeze</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建虚拟环境</span></span>
<span class="line"><span style="color:#6F42C1;">uv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">venv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装包</span></span>
<span class="line"><span style="color:#6F42C1;">uv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从 requirements.txt 安装</span></span>
<span class="line"><span style="color:#6F42C1;">uv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用 uv 替代 pip（兼容 pip 命令）</span></span>
<span class="line"><span style="color:#6F42C1;">uv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span>
<span class="line"><span style="color:#6F42C1;">uv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">freeze</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="pyproject-toml-pep-621" tabindex="-1">pyproject.toml（PEP 621） <a class="header-anchor" href="#pyproject-toml-pep-621" aria-label="Permalink to &quot;pyproject.toml（PEP 621）&quot;">​</a></h2><p>Python 项目的新标准配置文件，替代 <code>setup.py</code>：</p><div class="language-toml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">build-system</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">requires = [</span><span style="color:#9ECBFF;">&quot;setuptools&gt;=68.0&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;wheel&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">build-backend = </span><span style="color:#9ECBFF;">&quot;setupools.build_meta&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">project</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">name = </span><span style="color:#9ECBFF;">&quot;my-project&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">version = </span><span style="color:#9ECBFF;">&quot;0.1.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">description = </span><span style="color:#9ECBFF;">&quot;示例项目&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">requires-python = </span><span style="color:#9ECBFF;">&quot;&gt;=3.11&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">dependencies = [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;fastapi&gt;=0.109.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;sqlalchemy&gt;=2.0.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;pydantic&gt;=2.0.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">project</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">optional-dependencies</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">dev = [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;pytest&gt;=8.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;ruff&gt;=0.1.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;mypy&gt;=1.8.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">tool</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ruff</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">target-version = </span><span style="color:#9ECBFF;">&quot;py311&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">line-length = </span><span style="color:#79B8FF;">100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">tool</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">mypy</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">python_version = </span><span style="color:#9ECBFF;">&quot;3.11&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">strict = </span><span style="color:#79B8FF;">true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span><span style="color:#6F42C1;">build-system</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">requires = [</span><span style="color:#032F62;">&quot;setuptools&gt;=68.0&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;wheel&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">build-backend = </span><span style="color:#032F62;">&quot;setupools.build_meta&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#6F42C1;">project</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">name = </span><span style="color:#032F62;">&quot;my-project&quot;</span></span>
<span class="line"><span style="color:#24292E;">version = </span><span style="color:#032F62;">&quot;0.1.0&quot;</span></span>
<span class="line"><span style="color:#24292E;">description = </span><span style="color:#032F62;">&quot;示例项目&quot;</span></span>
<span class="line"><span style="color:#24292E;">requires-python = </span><span style="color:#032F62;">&quot;&gt;=3.11&quot;</span></span>
<span class="line"><span style="color:#24292E;">dependencies = [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;fastapi&gt;=0.109.0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;sqlalchemy&gt;=2.0.0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;pydantic&gt;=2.0.0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#6F42C1;">project</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">optional-dependencies</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">dev = [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;pytest&gt;=8.0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;ruff&gt;=0.1.0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;mypy&gt;=1.8.0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#6F42C1;">tool</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">ruff</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">target-version = </span><span style="color:#032F62;">&quot;py311&quot;</span></span>
<span class="line"><span style="color:#24292E;">line-length = </span><span style="color:#005CC5;">100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#6F42C1;">tool</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">mypy</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">python_version = </span><span style="color:#032F62;">&quot;3.11&quot;</span></span>
<span class="line"><span style="color:#24292E;">strict = </span><span style="color:#005CC5;">true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="依赖管理最佳实践" tabindex="-1">依赖管理最佳实践 <a class="header-anchor" href="#依赖管理最佳实践" aria-label="Permalink to &quot;依赖管理最佳实践&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 区分生产与开发依赖</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requirements.txt</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requirements-dev.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用 pip-tools 锁定版本</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pip-tools</span></span>
<span class="line"><span style="color:#B392F0;">pip-compile</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requirements.in</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 生成锁定版本</span></span>
<span class="line"><span style="color:#B392F0;">pip-sync</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">requirements.txt</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 同步环境</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检查依赖安全</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">safety</span></span>
<span class="line"><span style="color:#B392F0;">safety</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">check</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 区分生产与开发依赖</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requirements.txt</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requirements-dev.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用 pip-tools 锁定版本</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pip-tools</span></span>
<span class="line"><span style="color:#6F42C1;">pip-compile</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requirements.in</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 生成锁定版本</span></span>
<span class="line"><span style="color:#6F42C1;">pip-sync</span><span style="color:#24292E;"> </span><span style="color:#032F62;">requirements.txt</span><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 同步环境</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 检查依赖安全</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">safety</span></span>
<span class="line"><span style="color:#6F42C1;">safety</span><span style="color:#24292E;"> </span><span style="color:#032F62;">check</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="docker-化-python-项目" tabindex="-1">Docker 化 Python 项目 <a class="header-anchor" href="#docker-化-python-项目" aria-label="Permalink to &quot;Docker 化 Python 项目&quot;">​</a></h2><h3 id="基础-dockerfile" tabindex="-1">基础 Dockerfile <a class="header-anchor" href="#基础-dockerfile" aria-label="Permalink to &quot;基础 Dockerfile&quot;">​</a></h3><div class="language-dockerfile vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 使用官方 Python 镜像</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> python:3.12-slim</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置工作目录</span></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置环境变量</span></span>
<span class="line"><span style="color:#F97583;">ENV</span><span style="color:#E1E4E8;"> PYTHONDONTWRITEBYTECODE=1 \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    PYTHONUNBUFFERED=1 \\</span></span>
<span class="line"><span style="color:#E1E4E8;">    PIP_NO_CACHE_DIR=1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 先安装依赖（利用 Docker 缓存）</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> requirements.txt .</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> pip install --no-cache-dir -r requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 复制项目代码</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> . .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行</span></span>
<span class="line"><span style="color:#F97583;">CMD</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;python&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;main.py&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 使用官方 Python 镜像</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> python:3.12-slim</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置工作目录</span></span>
<span class="line"><span style="color:#D73A49;">WORKDIR</span><span style="color:#24292E;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置环境变量</span></span>
<span class="line"><span style="color:#D73A49;">ENV</span><span style="color:#24292E;"> PYTHONDONTWRITEBYTECODE=1 \\</span></span>
<span class="line"><span style="color:#24292E;">    PYTHONUNBUFFERED=1 \\</span></span>
<span class="line"><span style="color:#24292E;">    PIP_NO_CACHE_DIR=1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 先安装依赖（利用 Docker 缓存）</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> requirements.txt .</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> pip install --no-cache-dir -r requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 复制项目代码</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> . .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行</span></span>
<span class="line"><span style="color:#D73A49;">CMD</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;python&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;main.py&quot;</span><span style="color:#24292E;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="多阶段构建" tabindex="-1">多阶段构建 <a class="header-anchor" href="#多阶段构建" aria-label="Permalink to &quot;多阶段构建&quot;">​</a></h3><div class="language-dockerfile vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 构建阶段</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> python:3.12-slim </span><span style="color:#F97583;">AS</span><span style="color:#E1E4E8;"> builder</span></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /app</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> requirements.txt .</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> pip install --user -r requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行阶段</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> python:3.12-slim</span></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /app</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> --from=builder /root/.local /root/.local</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> . .</span></span>
<span class="line"><span style="color:#F97583;">ENV</span><span style="color:#E1E4E8;"> PATH=/root/.local/bin:$PATH</span></span>
<span class="line"><span style="color:#F97583;">CMD</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;python&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;main.py&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 构建阶段</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> python:3.12-slim </span><span style="color:#D73A49;">AS</span><span style="color:#24292E;"> builder</span></span>
<span class="line"><span style="color:#D73A49;">WORKDIR</span><span style="color:#24292E;"> /app</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> requirements.txt .</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> pip install --user -r requirements.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行阶段</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> python:3.12-slim</span></span>
<span class="line"><span style="color:#D73A49;">WORKDIR</span><span style="color:#24292E;"> /app</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> --from=builder /root/.local /root/.local</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> . .</span></span>
<span class="line"><span style="color:#D73A49;">ENV</span><span style="color:#24292E;"> PATH=/root/.local/bin:$PATH</span></span>
<span class="line"><span style="color:#D73A49;">CMD</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;python&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;main.py&quot;</span><span style="color:#24292E;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="docker-compose-yml" tabindex="-1">docker-compose.yml <a class="header-anchor" href="#docker-compose-yml" aria-label="Permalink to &quot;docker-compose.yml&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;3.9&quot;</span></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">app</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;8000:8000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">.:/app</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">DATABASE_URL=postgresql://user:pass@db:5432/db</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">depends_on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">db</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">postgres:16-alpine</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">POSTGRES_USER</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">user</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">POSTGRES_PASSWORD</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pass</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">POSTGRES_DB</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">db</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">postgres_data:/var/lib/postgresql/data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">postgres_data</span><span style="color:#E1E4E8;">:</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3.9&quot;</span></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">app</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">build</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;8000:8000&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">.:/app</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">DATABASE_URL=postgresql://user:pass@db:5432/db</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">depends_on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">db</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">postgres:16-alpine</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">POSTGRES_USER</span><span style="color:#24292E;">: </span><span style="color:#032F62;">user</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">POSTGRES_PASSWORD</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pass</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">POSTGRES_DB</span><span style="color:#24292E;">: </span><span style="color:#032F62;">db</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">postgres_data:/var/lib/postgresql/data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">postgres_data</span><span style="color:#24292E;">:</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="dockerignore" tabindex="-1">.dockerignore <a class="header-anchor" href="#dockerignore" aria-label="Permalink to &quot;.dockerignore&quot;">​</a></h3><div class="language-dockerignore vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dockerignore</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">__pycache__</span></span>
<span class="line"><span style="color:#e1e4e8;">*.pyc</span></span>
<span class="line"><span style="color:#e1e4e8;">.env</span></span>
<span class="line"><span style="color:#e1e4e8;">.git</span></span>
<span class="line"><span style="color:#e1e4e8;">.venv</span></span>
<span class="line"><span style="color:#e1e4e8;">.idea</span></span>
<span class="line"><span style="color:#e1e4e8;">*.md</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">__pycache__</span></span>
<span class="line"><span style="color:#24292e;">*.pyc</span></span>
<span class="line"><span style="color:#24292e;">.env</span></span>
<span class="line"><span style="color:#24292e;">.git</span></span>
<span class="line"><span style="color:#24292e;">.venv</span></span>
<span class="line"><span style="color:#24292e;">.idea</span></span>
<span class="line"><span style="color:#24292e;">*.md</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="项目配置与环境管理" tabindex="-1">项目配置与环境管理 <a class="header-anchor" href="#项目配置与环境管理" aria-label="Permalink to &quot;项目配置与环境管理&quot;">​</a></h2><h3 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h3><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># .env 文件管理</span></span>
<span class="line"><span style="color:#6A737D;"># pip install python-dotenv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> dotenv </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> load_dotenv</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> os</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">load_dotenv()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">DATABASE_URL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> os.getenv(</span><span style="color:#9ECBFF;">&quot;DATABASE_URL&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;sqlite:///default.db&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">DEBUG</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> os.getenv(</span><span style="color:#9ECBFF;">&quot;DEBUG&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;false&quot;</span><span style="color:#E1E4E8;">).lower() </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;true&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># .env 文件管理</span></span>
<span class="line"><span style="color:#6A737D;"># pip install python-dotenv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> dotenv </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> load_dotenv</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> os</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">load_dotenv()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">DATABASE_URL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> os.getenv(</span><span style="color:#032F62;">&quot;DATABASE_URL&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;sqlite:///default.db&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#005CC5;">DEBUG</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> os.getenv(</span><span style="color:#032F62;">&quot;DEBUG&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;false&quot;</span><span style="color:#24292E;">).lower() </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;true&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="多环境配置" tabindex="-1">多环境配置 <a class="header-anchor" href="#多环境配置" aria-label="Permalink to &quot;多环境配置&quot;">​</a></h3><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># config.py</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> pydantic_settings </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> BaseSettings</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Settings</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">BaseSettings</span><span style="color:#E1E4E8;">):</span></span>
<span class="line"><span style="color:#E1E4E8;">    app_name: </span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;My App&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    debug: </span><span style="color:#79B8FF;">bool</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">False</span></span>
<span class="line"><span style="color:#E1E4E8;">    database_url: </span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;sqlite:///dev.db&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    redis_url: </span><span style="color:#79B8FF;">str</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;redis://localhost:6379&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Config</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        env_file </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;.env&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">settings </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Settings()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># config.py</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> pydantic_settings </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> BaseSettings</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Settings</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">BaseSettings</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    app_name: </span><span style="color:#005CC5;">str</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;My App&quot;</span></span>
<span class="line"><span style="color:#24292E;">    debug: </span><span style="color:#005CC5;">bool</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">False</span></span>
<span class="line"><span style="color:#24292E;">    database_url: </span><span style="color:#005CC5;">str</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;sqlite:///dev.db&quot;</span></span>
<span class="line"><span style="color:#24292E;">    redis_url: </span><span style="color:#005CC5;">str</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;redis://localhost:6379&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Config</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        env_file </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;.env&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">settings </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Settings()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="pre-commit-钩子" tabindex="-1">pre-commit 钩子 <a class="header-anchor" href="#pre-commit-钩子" aria-label="Permalink to &quot;pre-commit 钩子&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># .pre-commit-config.yaml</span></span>
<span class="line"><span style="color:#85E89D;">repos</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">repo</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://github.com/astral-sh/ruff-pre-commit</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">rev</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">v0.1.0</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">hooks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ruff</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ruff-format</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">repo</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://github.com/pre-commit/mirrors-mypy</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">rev</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">v1.8.0</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">hooks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mypy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">repo</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://github.com/pre-commit/pre-commit-hooks</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">rev</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">v4.5.0</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">hooks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">trailing-whitespace</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">end-of-file-fixer</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># .pre-commit-config.yaml</span></span>
<span class="line"><span style="color:#22863A;">repos</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">repo</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://github.com/astral-sh/ruff-pre-commit</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">rev</span><span style="color:#24292E;">: </span><span style="color:#032F62;">v0.1.0</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">hooks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ruff</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ruff-format</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">repo</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://github.com/pre-commit/mirrors-mypy</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">rev</span><span style="color:#24292E;">: </span><span style="color:#032F62;">v1.8.0</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">hooks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mypy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">repo</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://github.com/pre-commit/pre-commit-hooks</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">rev</span><span style="color:#24292E;">: </span><span style="color:#032F62;">v4.5.0</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">hooks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">trailing-whitespace</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">end-of-file-fixer</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="常用工具一览" tabindex="-1">常用工具一览 <a class="header-anchor" href="#常用工具一览" aria-label="Permalink to &quot;常用工具一览&quot;">​</a></h2><table><thead><tr><th>工具</th><th>用途</th><th>安装命令</th></tr></thead><tbody><tr><td><strong>ruff</strong></td><td>极速 linter + formatter</td><td><code>pip install ruff</code></td></tr><tr><td><strong>mypy</strong></td><td>静态类型检查</td><td><code>pip install mypy</code></td></tr><tr><td><strong>pytest</strong></td><td>测试框架</td><td><code>pip install pytest</code></td></tr><tr><td><strong>pre-commit</strong></td><td>Git 钩子管理</td><td><code>pip install pre-commit</code></td></tr><tr><td><strong>pip-tools</strong></td><td>依赖版本锁定</td><td><code>pip install pip-tools</code></td></tr><tr><td><strong>safety</strong></td><td>依赖安全审计</td><td><code>pip install safety</code></td></tr><tr><td><strong>nox</strong></td><td>自动化测试环境</td><td><code>pip install nox</code></td></tr><tr><td><strong>tox</strong></td><td>多 Python 版本测试</td><td><code>pip install tox</code></td></tr></tbody></table>`,42)]))}const u=n(e,[["render",o]]);export{b as __pageData,u as default};
