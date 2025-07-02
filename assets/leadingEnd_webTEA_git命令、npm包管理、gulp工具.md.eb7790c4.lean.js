import{_ as n,o as a,c as p,O as l}from"./chunks/framework.b55d0e42.js";const F=JSON.parse('{"title":"git 命令、npm 包管理、gulp 工具","description":"","frontmatter":{},"headers":[],"relativePath":"leadingEnd/webTEA/git命令、npm包管理、gulp工具.md","filePath":"leadingEnd/webTEA/git命令、npm包管理、gulp工具.md","lastUpdated":1743127905000}'),e={name:"leadingEnd/webTEA/git命令、npm包管理、gulp工具.md"};function o(c,s,r,t,i,y){return a(),p("div",null,s[0]||(s[0]=[l(`<h1 id="git-命令、npm-包管理、gulp-工具" tabindex="-1">git 命令、npm 包管理、gulp 工具 <a class="header-anchor" href="#git-命令、npm-包管理、gulp-工具" aria-label="Permalink to &quot;git 命令、npm 包管理、gulp 工具&quot;">​</a></h1><h2 id="git-操作" tabindex="-1">git 操作 <a class="header-anchor" href="#git-操作" aria-label="Permalink to &quot;git 操作&quot;">​</a></h2><h3 id="git-常规操作" tabindex="-1">git 常规操作 <a class="header-anchor" href="#git-常规操作" aria-label="Permalink to &quot;git 常规操作&quot;">​</a></h3><div class="language-git vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">git</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 查看状态</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git status</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 添加管理(将文件或目录添加到本地仓库的暂存区)</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git add filename  # 将指定的文件添加到暂存区</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git add path/     # 将指定的目录添加到暂存区</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git add .         # 将当前目录所有内容(文件和文件夹)添加到暂存区</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git add --all     # 将当前目录所有内容(文件和文件夹)添加到暂存区</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 将文件移出暂存区</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git rm --cached filenamed</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 将暂存区的内容提交到本地仓库 （yarn lint:fix   处理eslint格式）</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git commit -m &#39;&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"> build:用于修改项目构建系统，例如修改依赖库、外部接口或者升级Node 版本等;</span></span>
<span class="line"><span style="color:#e1e4e8;"> chore:用于对非业务性代码进行修改，例如修改构建流程或者工具配置等;</span></span>
<span class="line"><span style="color:#e1e4e8;"> ci: 用于修改持续集成流程，例如修改Travis、Jenkins等工作流配置;</span></span>
<span class="line"><span style="color:#e1e4e8;"> docs:用于修改文档，例如修改README 文件、API 文档等;</span></span>
<span class="line"><span style="color:#e1e4e8;"> style: 用于修改代码的样式，例如调整缩进、空格、空行等;</span></span>
<span class="line"><span style="color:#e1e4e8;"> refactor:用于重构代码，例如修改代码结构、变量名、函数名等但不修改功能逻辑;</span></span>
<span class="line"><span style="color:#e1e4e8;"> perf: 用于优化性能，例如提升代码的性能、减少内存占用等;</span></span>
<span class="line"><span style="color:#e1e4e8;"> test: 用于修改测试用例，例如添加、删除、修改代码的测试用例等。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看提交日志</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git log</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 恢复历史版本</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git reset --hard hash(前六位)</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git push -f origin xxx 推送到远程</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 恢复文件</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git checkout filename</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看分支</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git branch</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#更新远程分支</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git fetch origin</span></span>
<span class="line"><span style="color:#e1e4e8;">#或者</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git remote update origin --prune</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 创建分支</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git branch 分支名</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#推送/拉取到远程分支 git pull是两个指令的组合：git fetch和git merge</span></span>
<span class="line"><span style="color:#e1e4e8;">$git push/pull origin 分支名</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 切换分支</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git checkout 分支名</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 返回上游分支</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git checkout -</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 合并远程分支</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git merge 远程分支名</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#代码冲突后，放弃或者退出流程：</span></span>
<span class="line"><span style="color:#e1e4e8;">#放弃,回到操作前的样子，就像什么都没发生过</span></span>
<span class="line"><span style="color:#e1e4e8;">$ gits cherry-pick --abort</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#退出,不回到操作前的样子,即保留已经 cherry-pick 成功的 commit，并退出 cherry-pick 流程：</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git cherry-pick --quit</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#删除本地已合并的分支：</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git branch -D [branchName]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#删除远程分支:</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git push origin --delete [branchname]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 添加远程仓库地址 并取名 origin</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git remote add origin url    //一般新建仓库就有，直接复制</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 创建并切换到 XXX 分支</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git branch -M XXX</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 将本地仓库推送到远程仓库</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git push -u origin 分支名    //一般新建仓库就有，直接复制   //git push -u origin master   主分支</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#如果返回： fatal: 远程 origin 已经存在。   此时只需要将远程配置删除，重新添加即可；</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git remote rm origin</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 克隆远程仓库(从无到有)</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git clone https://github.com/jxsrzj0325/mi.com.git</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 从远程仓库拉取分支(更新 -&gt; 相当于 git branch 和 git merge)</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git pull origin master</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 保存当前未commit的代码</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git stash</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 保存当前未commit的代码并添加备注</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git stash save &quot;备注的内容&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 列出stash的所有记录</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git stash list</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除stash的所有记录</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git stash clear</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 应用最近一次的stash</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git stash apply</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 应用最近一次的stash，随后删除该记录</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git stash pop</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除最近的一次stash</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git stash drop</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看所有tag</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git tag -l</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 打tag</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git tag v1.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 提交tag</span></span>
<span class="line"><span style="color:#e1e4e8;">$ git push origin v1.0.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 查看状态</span></span>
<span class="line"><span style="color:#24292e;">$ git status</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 添加管理(将文件或目录添加到本地仓库的暂存区)</span></span>
<span class="line"><span style="color:#24292e;">$ git add filename  # 将指定的文件添加到暂存区</span></span>
<span class="line"><span style="color:#24292e;">$ git add path/     # 将指定的目录添加到暂存区</span></span>
<span class="line"><span style="color:#24292e;">$ git add .         # 将当前目录所有内容(文件和文件夹)添加到暂存区</span></span>
<span class="line"><span style="color:#24292e;">$ git add --all     # 将当前目录所有内容(文件和文件夹)添加到暂存区</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 将文件移出暂存区</span></span>
<span class="line"><span style="color:#24292e;">$ git rm --cached filenamed</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 将暂存区的内容提交到本地仓库 （yarn lint:fix   处理eslint格式）</span></span>
<span class="line"><span style="color:#24292e;">$ git commit -m &#39;&#39;</span></span>
<span class="line"><span style="color:#24292e;"> build:用于修改项目构建系统，例如修改依赖库、外部接口或者升级Node 版本等;</span></span>
<span class="line"><span style="color:#24292e;"> chore:用于对非业务性代码进行修改，例如修改构建流程或者工具配置等;</span></span>
<span class="line"><span style="color:#24292e;"> ci: 用于修改持续集成流程，例如修改Travis、Jenkins等工作流配置;</span></span>
<span class="line"><span style="color:#24292e;"> docs:用于修改文档，例如修改README 文件、API 文档等;</span></span>
<span class="line"><span style="color:#24292e;"> style: 用于修改代码的样式，例如调整缩进、空格、空行等;</span></span>
<span class="line"><span style="color:#24292e;"> refactor:用于重构代码，例如修改代码结构、变量名、函数名等但不修改功能逻辑;</span></span>
<span class="line"><span style="color:#24292e;"> perf: 用于优化性能，例如提升代码的性能、减少内存占用等;</span></span>
<span class="line"><span style="color:#24292e;"> test: 用于修改测试用例，例如添加、删除、修改代码的测试用例等。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看提交日志</span></span>
<span class="line"><span style="color:#24292e;">$ git log</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 恢复历史版本</span></span>
<span class="line"><span style="color:#24292e;">$ git reset --hard hash(前六位)</span></span>
<span class="line"><span style="color:#24292e;">$ git push -f origin xxx 推送到远程</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 恢复文件</span></span>
<span class="line"><span style="color:#24292e;">$ git checkout filename</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看分支</span></span>
<span class="line"><span style="color:#24292e;">$ git branch</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#更新远程分支</span></span>
<span class="line"><span style="color:#24292e;">$ git fetch origin</span></span>
<span class="line"><span style="color:#24292e;">#或者</span></span>
<span class="line"><span style="color:#24292e;">$ git remote update origin --prune</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 创建分支</span></span>
<span class="line"><span style="color:#24292e;">$ git branch 分支名</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#推送/拉取到远程分支 git pull是两个指令的组合：git fetch和git merge</span></span>
<span class="line"><span style="color:#24292e;">$git push/pull origin 分支名</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 切换分支</span></span>
<span class="line"><span style="color:#24292e;">$ git checkout 分支名</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 返回上游分支</span></span>
<span class="line"><span style="color:#24292e;">$ git checkout -</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 合并远程分支</span></span>
<span class="line"><span style="color:#24292e;">$ git merge 远程分支名</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#代码冲突后，放弃或者退出流程：</span></span>
<span class="line"><span style="color:#24292e;">#放弃,回到操作前的样子，就像什么都没发生过</span></span>
<span class="line"><span style="color:#24292e;">$ gits cherry-pick --abort</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#退出,不回到操作前的样子,即保留已经 cherry-pick 成功的 commit，并退出 cherry-pick 流程：</span></span>
<span class="line"><span style="color:#24292e;">$ git cherry-pick --quit</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#删除本地已合并的分支：</span></span>
<span class="line"><span style="color:#24292e;">$ git branch -D [branchName]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#删除远程分支:</span></span>
<span class="line"><span style="color:#24292e;">$ git push origin --delete [branchname]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 添加远程仓库地址 并取名 origin</span></span>
<span class="line"><span style="color:#24292e;">$ git remote add origin url    //一般新建仓库就有，直接复制</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 创建并切换到 XXX 分支</span></span>
<span class="line"><span style="color:#24292e;">$ git branch -M XXX</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 将本地仓库推送到远程仓库</span></span>
<span class="line"><span style="color:#24292e;">$ git push -u origin 分支名    //一般新建仓库就有，直接复制   //git push -u origin master   主分支</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#如果返回： fatal: 远程 origin 已经存在。   此时只需要将远程配置删除，重新添加即可；</span></span>
<span class="line"><span style="color:#24292e;">$ git remote rm origin</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 克隆远程仓库(从无到有)</span></span>
<span class="line"><span style="color:#24292e;">$ git clone https://github.com/jxsrzj0325/mi.com.git</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 从远程仓库拉取分支(更新 -&gt; 相当于 git branch 和 git merge)</span></span>
<span class="line"><span style="color:#24292e;">$ git pull origin master</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 保存当前未commit的代码</span></span>
<span class="line"><span style="color:#24292e;">$ git stash</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 保存当前未commit的代码并添加备注</span></span>
<span class="line"><span style="color:#24292e;">$ git stash save &quot;备注的内容&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 列出stash的所有记录</span></span>
<span class="line"><span style="color:#24292e;">$ git stash list</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 删除stash的所有记录</span></span>
<span class="line"><span style="color:#24292e;">$ git stash clear</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 应用最近一次的stash</span></span>
<span class="line"><span style="color:#24292e;">$ git stash apply</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 应用最近一次的stash，随后删除该记录</span></span>
<span class="line"><span style="color:#24292e;">$ git stash pop</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 删除最近的一次stash</span></span>
<span class="line"><span style="color:#24292e;">$ git stash drop</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看所有tag</span></span>
<span class="line"><span style="color:#24292e;">$ git tag -l</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 打tag</span></span>
<span class="line"><span style="color:#24292e;">$ git tag v1.0.0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 提交tag</span></span>
<span class="line"><span style="color:#24292e;">$ git push origin v1.0.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br></div></div><h3 id="修改一个提交" tabindex="-1">修改一个提交 <a class="header-anchor" href="#修改一个提交" aria-label="Permalink to &quot;修改一个提交&quot;">​</a></h3><h5 id="推送到远程仓库" tabindex="-1">推送到远程仓库 <a class="header-anchor" href="#推送到远程仓库" aria-label="Permalink to &quot;推送到远程仓库&quot;">​</a></h5><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">如果你想要修改最新的提交，并且这个提交还没有被推送，你可以使用</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">git</span><span style="color:#9ECBFF;"> commit </span><span style="color:#79B8FF;">--amend</span><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">命令。</span></span>
<span class="line"><span style="color:#B392F0;">这将允许你修改最后一次提交的信息和内容。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">修改的文</span><span style="color:#E1E4E8;">件</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--amend</span></span>
<span class="line"><span style="color:#B392F0;">这将打开一个编辑器，让你修改提交信息。如果你没有添加新的更改，你可以简单地保存并关闭编辑器。</span></span>
<span class="line"><span style="color:#B392F0;">如果你想要完全重做最新的提交，可以使用</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">git</span><span style="color:#9ECBFF;"> reset\`</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">命令。</span></span>
<span class="line"><span style="color:#B392F0;">这将撤销你的提交，但不会影响你的工作目录。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">软重置（\`</span><span style="color:#B392F0;">--soft</span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">）：重置提交，但保留更改在暂存区。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">混成重置（\`</span><span style="color:#B392F0;">--mixed</span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">）：重置提交，保留更改在工作目录。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">硬重置（\`</span><span style="color:#B392F0;">--hard</span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">）：重置提交，丢弃所有更改。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--soft</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD~1</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 撤销最后一次提交，更改保留在暂存区</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;"># 现在你可以重新提交更改</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;更新后的提交信息&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">如果你想要修改最新的提交，并且这个提交还没有被推送，你可以使用</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> commit </span><span style="color:#005CC5;">--amend</span><span style="color:#032F62;">\`</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">命令。</span></span>
<span class="line"><span style="color:#6F42C1;">这将允许你修改最后一次提交的信息和内容。</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">修改的文</span><span style="color:#24292E;">件</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--amend</span></span>
<span class="line"><span style="color:#6F42C1;">这将打开一个编辑器，让你修改提交信息。如果你没有添加新的更改，你可以简单地保存并关闭编辑器。</span></span>
<span class="line"><span style="color:#6F42C1;">如果你想要完全重做最新的提交，可以使用</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> reset\`</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">命令。</span></span>
<span class="line"><span style="color:#6F42C1;">这将撤销你的提交，但不会影响你的工作目录。</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">软重置（\`</span><span style="color:#6F42C1;">--soft</span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">）：重置提交，但保留更改在暂存区。</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">混成重置（\`</span><span style="color:#6F42C1;">--mixed</span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">）：重置提交，保留更改在工作目录。</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">硬重置（\`</span><span style="color:#6F42C1;">--hard</span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">）：重置提交，丢弃所有更改。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--soft</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD~1</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 撤销最后一次提交，更改保留在暂存区</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;"># 现在你可以重新提交更改</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;更新后的提交信息&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h5 id="推送到远程仓库-1" tabindex="-1">推送到远程仓库 <a class="header-anchor" href="#推送到远程仓库-1" aria-label="Permalink to &quot;推送到远程仓库&quot;">​</a></h5><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">如果你需要修改已经推送到远程仓库的提交，你需要使用</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">git</span><span style="color:#9ECBFF;"> push </span><span style="color:#79B8FF;">--force</span><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">命令。</span></span>
<span class="line"><span style="color:#B392F0;">这将强制推送你的本地更改到远程仓库，覆盖远程仓库的历史记录。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--amend</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--force</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 或者 git push --force-with-lease，更安全</span></span>
<span class="line"><span style="color:#B392F0;">强制推送会覆盖远程仓库的历史记录，这可能会影响其他协作者的工作。在团队中使用时需要格外小心。</span></span>
<span class="line"><span style="color:#B392F0;">如果你不想强制推送，你可以创建一个新的提交来修复错误。这通常涉及到创建一个新的提交，其中包含对之前提交的更改。</span></span>
<span class="line"><span style="color:#B392F0;">使用</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">git</span><span style="color:#9ECBFF;"> rebase </span><span style="color:#79B8FF;">-i</span><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">可以交互式地修改、删除或重新排序提交。</span></span>
<span class="line"><span style="color:#B392F0;">这通常用于清理提交历史，但也可以用于修改已经推送的提交。</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rebase</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD~N</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># N 是你想要修改的提交数量</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">如果你需要修改已经推送到远程仓库的提交，你需要使用</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> push </span><span style="color:#005CC5;">--force</span><span style="color:#032F62;">\`</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">命令。</span></span>
<span class="line"><span style="color:#6F42C1;">这将强制推送你的本地更改到远程仓库，覆盖远程仓库的历史记录。</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--amend</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--force</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 或者 git push --force-with-lease，更安全</span></span>
<span class="line"><span style="color:#6F42C1;">强制推送会覆盖远程仓库的历史记录，这可能会影响其他协作者的工作。在团队中使用时需要格外小心。</span></span>
<span class="line"><span style="color:#6F42C1;">如果你不想强制推送，你可以创建一个新的提交来修复错误。这通常涉及到创建一个新的提交，其中包含对之前提交的更改。</span></span>
<span class="line"><span style="color:#6F42C1;">使用</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">git</span><span style="color:#032F62;"> rebase </span><span style="color:#005CC5;">-i</span><span style="color:#032F62;">\`</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">可以交互式地修改、删除或重新排序提交。</span></span>
<span class="line"><span style="color:#6F42C1;">这通常用于清理提交历史，但也可以用于修改已经推送的提交。</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rebase</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD~N</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># N 是你想要修改的提交数量</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="npm-包管理工具" tabindex="-1">npm 包管理工具 <a class="header-anchor" href="#npm-包管理工具" aria-label="Permalink to &quot;npm 包管理工具&quot;">​</a></h2><h5 id="npm-发布自己的包" tabindex="-1">npm 发布自己的包 <a class="header-anchor" href="#npm-发布自己的包" aria-label="Permalink to &quot;npm 发布自己的包&quot;">​</a></h5><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">注册npm账号：首先需要在npm官网上注册一个账号，可以通过npm adduser命令来进行注册，按照提示输入用户名、密码和邮箱即可。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">初始化项目：在本地创建一个新的项目文件夹，并在该文件夹下执行npm init命令来初始化项目，按照提示输入项目的名称、版本号、描述等信息。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">编写代码：在项目文件夹中编写自己的代码，并确保代码可以正常运行。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">创建发布配置文件：在项目文件夹中创建一个名为.npmignore的文件，用来指定哪些文件不需要发布到npm上，例如测试文件、配置文件等。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">发布包：在项目文件夹下执行npm publish命令来发布包，该命令会将项目打包并上传到npm服务器上。在发布之前，可以通过npm login命令来登录npm账号，确保发布时使用的是正确的账号。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">更新包：如果需要更新已发布的包，可以修改项目代码后，修改package.json中的版本号，并执行npm publish命令来发布更新后的包。</span></span>
<span class="line"><span style="color:#E1E4E8;">在发布包之前，可以通过npm version命令来修改版本号，例如npm version patch表示增加一个补丁版本号。</span></span>
<span class="line"><span style="color:#E1E4E8;">发布包时，确保项目中的依赖项已经在package.json中正确声明，并且已经安装了这些依赖项。</span></span>
<span class="line"><span style="color:#E1E4E8;">发布包时，确保项目中的代码已经经过测试，并且没有明显的bug。</span></span>
<span class="line"><span style="color:#E1E4E8;">发布包时，可以通过npm publish </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">access public命令来将包设置为公开访问，这样其他人就可以通过npm install命令来安装和使用你的包。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">注册npm账号：首先需要在npm官网上注册一个账号，可以通过npm adduser命令来进行注册，按照提示输入用户名、密码和邮箱即可。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">初始化项目：在本地创建一个新的项目文件夹，并在该文件夹下执行npm init命令来初始化项目，按照提示输入项目的名称、版本号、描述等信息。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">编写代码：在项目文件夹中编写自己的代码，并确保代码可以正常运行。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">创建发布配置文件：在项目文件夹中创建一个名为.npmignore的文件，用来指定哪些文件不需要发布到npm上，例如测试文件、配置文件等。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">发布包：在项目文件夹下执行npm publish命令来发布包，该命令会将项目打包并上传到npm服务器上。在发布之前，可以通过npm login命令来登录npm账号，确保发布时使用的是正确的账号。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">更新包：如果需要更新已发布的包，可以修改项目代码后，修改package.json中的版本号，并执行npm publish命令来发布更新后的包。</span></span>
<span class="line"><span style="color:#24292E;">在发布包之前，可以通过npm version命令来修改版本号，例如npm version patch表示增加一个补丁版本号。</span></span>
<span class="line"><span style="color:#24292E;">发布包时，确保项目中的依赖项已经在package.json中正确声明，并且已经安装了这些依赖项。</span></span>
<span class="line"><span style="color:#24292E;">发布包时，确保项目中的代码已经经过测试，并且没有明显的bug。</span></span>
<span class="line"><span style="color:#24292E;">发布包时，可以通过npm publish </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">access public命令来将包设置为公开访问，这样其他人就可以通过npm install命令来安装和使用你的包。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h5 id="npm-包管理工具-1" tabindex="-1">npm 包管理工具 <a class="header-anchor" href="#npm-包管理工具-1" aria-label="Permalink to &quot;npm 包管理工具&quot;">​</a></h5><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">在将目录结构创建好以后</span></span>
<span class="line"><span style="color:#B392F0;">1.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">填写一个git忽略文件</span></span>
<span class="line"><span style="color:#B392F0;">2.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">初始化项目</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">在项目根目录执行</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">$</span><span style="color:#9ECBFF;"> npm init </span><span style="color:#79B8FF;">-y</span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#B392F0;">3.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">初始化代码管理工具</span></span>
<span class="line"><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">$</span><span style="color:#9ECBFF;"> git init\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">项目的代码</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">划分成三类</span></span>
<span class="line"><span style="color:#B392F0;">1.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">源代码</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">用于开发环境</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">2.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">第三方代码</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">jquery</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bootstrap</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">3.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">部署代码</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">用于部署服务器环境的代码</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">由工具生成</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">第三方工具(库</span><span style="color:#E1E4E8;">) 安装</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install[i]</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package[@verstion]</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;">             </span><span style="color:#6A737D;"># 全局安装(命令行工具)</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install[i]</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package[@verstion]</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save[-S]</span><span style="color:#E1E4E8;">     </span><span style="color:#6A737D;"># 项目依赖安装(项目中需要用到的代码)</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install[i]</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package[@verstion]</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save-dev[-D]</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 项目开发依赖安装(开发工具)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">使用</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm/cnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">安装依赖时</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">需要在项目的根目录执行命令</span></span>
<span class="line"><span style="color:#B392F0;">osx用户进行全局安装时</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">需要获得超级管理员权限</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">sudo</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uninstall</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pakcage</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;"># 卸载模块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">进入工程目录，项目初始化</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">初始化完成会在项目根目录生成一个文件</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package.json</span></span>
<span class="line"><span style="color:#E1E4E8;">$npm install     //安装所以记录的依赖</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">使用cnpm工具代替npm工具</span><span style="color:#E1E4E8;"> (推荐)</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--registry=https://registry.npm.taobao.org/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">在将目录结构创建好以后</span></span>
<span class="line"><span style="color:#6F42C1;">1.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">填写一个git忽略文件</span></span>
<span class="line"><span style="color:#6F42C1;">2.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">初始化项目</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">在项目根目录执行</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">$</span><span style="color:#032F62;"> npm init </span><span style="color:#005CC5;">-y</span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#6F42C1;">3.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">初始化代码管理工具</span></span>
<span class="line"><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">$</span><span style="color:#032F62;"> git init\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">项目的代码</span><span style="color:#24292E;"> </span><span style="color:#032F62;">划分成三类</span></span>
<span class="line"><span style="color:#6F42C1;">1.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">源代码</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">用于开发环境</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">2.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">第三方代码</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">jquery</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bootstrap</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">3.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">部署代码</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">用于部署服务器环境的代码</span><span style="color:#24292E;"> </span><span style="color:#032F62;">由工具生成</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">第三方工具(库</span><span style="color:#24292E;">) 安装</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install[i]</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package[@verstion]</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;">             </span><span style="color:#6A737D;"># 全局安装(命令行工具)</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install[i]</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package[@verstion]</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save[-S]</span><span style="color:#24292E;">     </span><span style="color:#6A737D;"># 项目依赖安装(项目中需要用到的代码)</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install[i]</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package[@verstion]</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save-dev[-D]</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 项目开发依赖安装(开发工具)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">使用</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm/cnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">安装依赖时</span><span style="color:#24292E;"> </span><span style="color:#032F62;">需要在项目的根目录执行命令</span></span>
<span class="line"><span style="color:#6F42C1;">osx用户进行全局安装时</span><span style="color:#24292E;"> </span><span style="color:#032F62;">需要获得超级管理员权限</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">sudo</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-s</span><span style="color:#032F62;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uninstall</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pakcage</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save</span><span style="color:#24292E;">   </span><span style="color:#6A737D;"># 卸载模块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">进入工程目录，项目初始化</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">初始化完成会在项目根目录生成一个文件</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package.json</span></span>
<span class="line"><span style="color:#24292E;">$npm install     //安装所以记录的依赖</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">使用cnpm工具代替npm工具</span><span style="color:#24292E;"> (推荐)</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cnpm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--registry=https://registry.npm.taobao.org/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h5 id="nrm-工具" tabindex="-1">nrm 工具 <a class="header-anchor" href="#nrm-工具" aria-label="Permalink to &quot;nrm 工具&quot;">​</a></h5><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm(nodejs包管理工具库</span><span style="color:#E1E4E8;">) 它的服务器在国外 访问速度慢</span></span>
<span class="line"><span style="color:#B392F0;">使用国内镜像提升访问速度</span></span>
<span class="line"><span style="color:#B392F0;">国内的npm镜像由阿里云免费提供</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">使用</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nrm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">工具切换镜像源</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nrm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;"># 全局安装nrm</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nrm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;">               </span><span style="color:#6A737D;"># 查看所有镜像源</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nrm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">taobao</span><span style="color:#E1E4E8;">       </span><span style="color:#6A737D;"># 切换到taobao镜像</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm(nodejs包管理工具库</span><span style="color:#24292E;">) 它的服务器在国外 访问速度慢</span></span>
<span class="line"><span style="color:#6F42C1;">使用国内镜像提升访问速度</span></span>
<span class="line"><span style="color:#6F42C1;">国内的npm镜像由阿里云免费提供</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">使用</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nrm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">工具切换镜像源</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nrm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;">   </span><span style="color:#6A737D;"># 全局安装nrm</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nrm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;">               </span><span style="color:#6A737D;"># 查看所有镜像源</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nrm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">taobao</span><span style="color:#24292E;">       </span><span style="color:#6A737D;"># 切换到taobao镜像</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="gulp-工具" tabindex="-1">gulp 工具 <a class="header-anchor" href="#gulp-工具" aria-label="Permalink to &quot;gulp 工具&quot;">​</a></h2><h5 id="项目构建" tabindex="-1">项目构建 <a class="header-anchor" href="#项目构建" aria-label="Permalink to &quot;项目构建&quot;">​</a></h5><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Gulp.js</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">是基于nodejs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">构建的,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">它利用了Nodejs的流控制能力</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">辅助项目构建.</span></span>
<span class="line"><span style="color:#B392F0;">你可以快速通过Gulp构建项目</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">减少频繁的I/O操作.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 全局安装的东西 每台电脑只需要进行一次安装</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gulp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># 全局安装gulp</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gulp-cli</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 全局安装gulp命令行工具</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gulp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># 项目开发依赖安装gulp(必须在项目根目录执行)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Gulp.js</span><span style="color:#24292E;"> </span><span style="color:#032F62;">是基于nodejs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">构建的,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">它利用了Nodejs的流控制能力</span><span style="color:#24292E;"> </span><span style="color:#032F62;">辅助项目构建.</span></span>
<span class="line"><span style="color:#6F42C1;">你可以快速通过Gulp构建项目</span><span style="color:#24292E;"> </span><span style="color:#032F62;">减少频繁的I/O操作.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 全局安装的东西 每台电脑只需要进行一次安装</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gulp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;">      </span><span style="color:#6A737D;"># 全局安装gulp</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gulp-cli</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 全局安装gulp命令行工具</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gulp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;">      </span><span style="color:#6A737D;"># 项目开发依赖安装gulp(必须在项目根目录执行)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h5 id="代码压缩工具" tabindex="-1">代码压缩工具 <a class="header-anchor" href="#代码压缩工具" aria-label="Permalink to &quot;代码压缩工具&quot;">​</a></h5><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gulp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">&#39;gulp&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">引入模块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gulp.task</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">taskname,callback</span><span style="color:#E1E4E8;">);   </span><span style="color:#B392F0;">部署任务</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gulp.src</span><span style="color:#E1E4E8;">()     </span><span style="color:#9ECBFF;">源</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gulp.pipe</span><span style="color:#E1E4E8;">()    </span><span style="color:#9ECBFF;">管道</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">通道</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gulp.dest</span><span style="color:#E1E4E8;">()    </span><span style="color:#9ECBFF;">目的地</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">gulp.task(</span><span style="color:#B392F0;">&#39;copyindex&#39;</span><span style="color:#B392F0;">,</span><span style="color:#E1E4E8;"> () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gulp.src</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">&#39;./src/html/index.html&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">.pipe(gulp.dest(</span><span style="color:#B392F0;">&#39;./dist/html&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#B392F0;">gulp.task(</span><span style="color:#B392F0;">&#39;copyjs&#39;</span><span style="color:#B392F0;">,</span><span style="color:#E1E4E8;"> () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gulp.src</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;./src/js/*.js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;!src/js/index.js&#39;</span><span style="color:#E1E4E8;">])  </span><span style="color:#9ECBFF;">//反选</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">.pipe(gulp.dest(</span><span style="color:#B392F0;">&#39;./dist/js&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//第三方模块</span></span>
<span class="line"><span style="color:#B392F0;">gulp-htmlmin</span><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">//压缩HTml</span></span>
<span class="line"><span style="color:#B392F0;">gulp-cssmin</span><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">//压缩CSS</span></span>
<span class="line"><span style="color:#B392F0;">gulp-ugify</span><span style="color:#E1E4E8;">       </span><span style="color:#9ECBFF;">//压缩JS</span></span>
<span class="line"><span style="color:#B392F0;">gulp-imagemin</span><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">//压缩图片</span></span>
<span class="line"><span style="color:#B392F0;">gulp.spritesmith</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">//精灵图制作</span></span>
<span class="line"><span style="color:#B392F0;">gulp-concat</span><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">//合并文件</span></span>
<span class="line"><span style="color:#B392F0;">gulp-less</span><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">//编译less</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">const</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gulp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">require</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">&#39;gulp&#39;</span><span style="color:#24292E;">); </span><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">引入模块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gulp.task</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">taskname,callback</span><span style="color:#24292E;">);   </span><span style="color:#6F42C1;">部署任务</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gulp.src</span><span style="color:#24292E;">()     </span><span style="color:#032F62;">源</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gulp.pipe</span><span style="color:#24292E;">()    </span><span style="color:#032F62;">管道</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">通道</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gulp.dest</span><span style="color:#24292E;">()    </span><span style="color:#032F62;">目的地</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">gulp.task(</span><span style="color:#6F42C1;">&#39;copyindex&#39;</span><span style="color:#6F42C1;">,</span><span style="color:#24292E;"> () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gulp.src</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">&#39;./src/html/index.html&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">.pipe(gulp.dest(</span><span style="color:#6F42C1;">&#39;./dist/html&#39;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6F42C1;">gulp.task(</span><span style="color:#6F42C1;">&#39;copyjs&#39;</span><span style="color:#6F42C1;">,</span><span style="color:#24292E;"> () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gulp.src</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;./src/js/*.js&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;!src/js/index.js&#39;</span><span style="color:#24292E;">])  </span><span style="color:#032F62;">//反选</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">.pipe(gulp.dest(</span><span style="color:#6F42C1;">&#39;./dist/js&#39;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//第三方模块</span></span>
<span class="line"><span style="color:#6F42C1;">gulp-htmlmin</span><span style="color:#24292E;">     </span><span style="color:#032F62;">//压缩HTml</span></span>
<span class="line"><span style="color:#6F42C1;">gulp-cssmin</span><span style="color:#24292E;">      </span><span style="color:#032F62;">//压缩CSS</span></span>
<span class="line"><span style="color:#6F42C1;">gulp-ugify</span><span style="color:#24292E;">       </span><span style="color:#032F62;">//压缩JS</span></span>
<span class="line"><span style="color:#6F42C1;">gulp-imagemin</span><span style="color:#24292E;">    </span><span style="color:#032F62;">//压缩图片</span></span>
<span class="line"><span style="color:#6F42C1;">gulp.spritesmith</span><span style="color:#24292E;"> </span><span style="color:#032F62;">//精灵图制作</span></span>
<span class="line"><span style="color:#6F42C1;">gulp-concat</span><span style="color:#24292E;">      </span><span style="color:#032F62;">//合并文件</span></span>
<span class="line"><span style="color:#6F42C1;">gulp-less</span><span style="color:#24292E;">        </span><span style="color:#032F62;">//编译less</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,21)]))}const b=n(e,[["render",o]]);export{F as __pageData,b as default};
