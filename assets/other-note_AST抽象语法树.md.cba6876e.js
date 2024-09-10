import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.d7c6e0b6.js";const m=JSON.parse('{"title":"AST抽象语法树","description":"","frontmatter":{},"headers":[],"relativePath":"other-note/AST抽象语法树.md","filePath":"other-note/AST抽象语法树.md","lastUpdated":1720779672000}'),l={name:"other-note/AST抽象语法树.md"},p=e(`<h1 id="ast抽象语法树" tabindex="-1">AST抽象语法树 <a class="header-anchor" href="#ast抽象语法树" aria-label="Permalink to &quot;AST抽象语法树&quot;">​</a></h1><p>官方文档查看链接：<a href="https://developer.mozilla.org/zh-CN/docs/Mozilla/Projects/SpiderMonkey/Parser_API" target="_blank" rel="noreferrer">AST对象文档</a> 文档参考链接：<a href="https://segmentfault.com/a/1190000016231512" target="_blank" rel="noreferrer">AST抽象语法树</a> 插件：<code>npm i recast</code>;</p><h2 id="常用方法" tabindex="-1">常用方法 <a class="header-anchor" href="#常用方法" aria-label="Permalink to &quot;常用方法&quot;">​</a></h2><ul><li>解析代码：<code>recast.parse(code)</code></li><li>输出代码：<code>recast.print(ast).code</code></li><li>输出美化代码：<code>recast.prettyPrint(ast, { tabWidth: 2 }).code</code></li><li>读取文件：<code>recast.run(function(ast, printSource) {})</code></li><li>节点遍历：<code>recast.visit(ast, {visitExpressionStatement:function(path){}})</code></li></ul><h2 id="解析代码" tabindex="-1">解析代码 <a class="header-anchor" href="#解析代码" aria-label="Permalink to &quot;解析代码&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const code = \`</span></span>
<span class="line"><span style="color:#e1e4e8;">function add(a, b) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return a + b;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">\`</span></span>
<span class="line"><span style="color:#e1e4e8;">const ast = recast.parse(code)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const code = \`</span></span>
<span class="line"><span style="color:#24292e;">function add(a, b) {</span></span>
<span class="line"><span style="color:#24292e;">  return a + b;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">\`</span></span>
<span class="line"><span style="color:#24292e;">const ast = recast.parse(code)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="recast-types-builders-制作模具" tabindex="-1">recast.types.builders 制作模具 <a class="header-anchor" href="#recast-types-builders-制作模具" aria-label="Permalink to &quot;recast.types.builders 制作模具&quot;">​</a></h2><p>用来修改代码，里面包含所有的AST工具，AST可以去<a href="https://developer.mozilla.org/zh-CN/docs/Mozilla/Projects/SpiderMonkey/Parser_API" target="_blank" rel="noreferrer">AST对象文档</a>查看</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const {</span></span>
<span class="line"><span style="color:#e1e4e8;">  variableDeclaration,</span></span>
<span class="line"><span style="color:#e1e4e8;">  variableDeclarator,</span></span>
<span class="line"><span style="color:#e1e4e8;">  functionExpression </span></span>
<span class="line"><span style="color:#e1e4e8;">} = recast.types.builders;</span></span>
<span class="line"><span style="color:#e1e4e8;">ast.program.body[0] = variableDeclaration(&#39;const&#39;, [</span></span>
<span class="line"><span style="color:#e1e4e8;">  variableDeclarator(add.id, functionExpression(null, add.params, add.body))</span></span>
<span class="line"><span style="color:#e1e4e8;">])</span></span>
<span class="line"><span style="color:#e1e4e8;">const output = recast.print(ast).code;</span></span>
<span class="line"><span style="color:#e1e4e8;">// 输出美化格式的代码</span></span>
<span class="line"><span style="color:#e1e4e8;">// const output = recast.prettyPrint(ast, { tabWidth: 2 }).code;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(output)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const {</span></span>
<span class="line"><span style="color:#24292e;">  variableDeclaration,</span></span>
<span class="line"><span style="color:#24292e;">  variableDeclarator,</span></span>
<span class="line"><span style="color:#24292e;">  functionExpression </span></span>
<span class="line"><span style="color:#24292e;">} = recast.types.builders;</span></span>
<span class="line"><span style="color:#24292e;">ast.program.body[0] = variableDeclaration(&#39;const&#39;, [</span></span>
<span class="line"><span style="color:#24292e;">  variableDeclarator(add.id, functionExpression(null, add.params, add.body))</span></span>
<span class="line"><span style="color:#24292e;">])</span></span>
<span class="line"><span style="color:#24292e;">const output = recast.print(ast).code;</span></span>
<span class="line"><span style="color:#24292e;">// 输出美化格式的代码</span></span>
<span class="line"><span style="color:#24292e;">// const output = recast.prettyPrint(ast, { tabWidth: 2 }).code;</span></span>
<span class="line"><span style="color:#24292e;">console.log(output)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="命令行文件读取-recast-run" tabindex="-1">命令行文件读取 recast.run <a class="header-anchor" href="#命令行文件读取-recast-run" aria-label="Permalink to &quot;命令行文件读取 recast.run&quot;">​</a></h2><p>创建read.js</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const recast = require(&#39;recast&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">recast.run(function(ast, printSource) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  printSource(ast)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const recast = require(&#39;recast&#39;)</span></span>
<span class="line"><span style="color:#24292e;">recast.run(function(ast, printSource) {</span></span>
<span class="line"><span style="color:#24292e;">  printSource(ast)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>命令行输入</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">node read demo.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">node read demo.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="节点遍历-recast-visit" tabindex="-1">节点遍历 recast.visit <a class="header-anchor" href="#节点遍历-recast-visit" aria-label="Permalink to &quot;节点遍历 recast.visit&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">recast.run(function(ast, printSource) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  recast.visit(ast, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    visitExpressionStatement: function(path) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      const node = path.node;</span></span>
<span class="line"><span style="color:#e1e4e8;">      return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">recast.run(function(ast, printSource) {</span></span>
<span class="line"><span style="color:#24292e;">  recast.visit(ast, {</span></span>
<span class="line"><span style="color:#24292e;">    visitExpressionStatement: function(path) {</span></span>
<span class="line"><span style="color:#24292e;">      const node = path.node;</span></span>
<span class="line"><span style="color:#24292e;">      return false;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>注意：</p><ul><li>想遍历什么就在前面加<code>visit</code></li><li>每个节点遍历必须<code>return false</code>，或者 <code>this.traverse(path)</code>，否则报错；</li><li>遍历中想输出ast对象，就使用<code>console.log(node)</code>，想输出ast对象对应的源码，可以<code>printSource(node)</code></li><li><code>#!/usr/bin/env node</code> 在所有使用<code>recast.run()</code>的文件顶部都需要加入这一行</li></ul><h2 id="判断ast对象类型" tabindex="-1">判断AST对象类型 <a class="header-anchor" href="#判断ast对象类型" aria-label="Permalink to &quot;判断AST对象类型&quot;">​</a></h2><p>TNT，recast.types.namedTypes</p><ul><li><code>TNT.Node.assert(node)</code> 判断node不为Node时，正确不输出，错误全局报错</li><li><code>TNT.Node.check(node)</code> 判断node是否与Node一致，Node为AST对象，比如ExpressionStatement</li></ul><h2 id="实战操作替换" tabindex="-1">实战操作替换 <a class="header-anchor" href="#实战操作替换" aria-label="Permalink to &quot;实战操作替换&quot;">​</a></h2><p>可以使用在线ast语法树，输入想要转换的结构，获取对应的节点类型，之后进行替换</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/usr/bin/env node</span></span>
<span class="line"><span style="color:#e1e4e8;">const recast = require(&quot;recast&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">const {</span></span>
<span class="line"><span style="color:#e1e4e8;">  identifier: id,</span></span>
<span class="line"><span style="color:#e1e4e8;">  expressionStatement,</span></span>
<span class="line"><span style="color:#e1e4e8;">  memberExpression,</span></span>
<span class="line"><span style="color:#e1e4e8;">  assignmentExpression,</span></span>
<span class="line"><span style="color:#e1e4e8;">  arrowFunctionExpression</span></span>
<span class="line"><span style="color:#e1e4e8;">} = recast.types.builders</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const fs = require(&#39;fs&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">const path = require(&#39;path&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">// 截取参数</span></span>
<span class="line"><span style="color:#e1e4e8;">const options = process.argv.slice(2)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//如果没有参数，或提供了-h 或--help选项，则打印帮助</span></span>
<span class="line"><span style="color:#e1e4e8;">if(options.length===0 || options.includes(&#39;-h&#39;) || options.includes(&#39;--help&#39;)){</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(\`</span></span>
<span class="line"><span style="color:#e1e4e8;">    采用commonjs规则，将.js文件内所有函数修改为导出形式。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    选项： -r  或 --rewrite 可直接覆盖原有文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    \`)</span></span>
<span class="line"><span style="color:#e1e4e8;">  process.exit(0)</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 只要有-r 或--rewrite参数，则rewriteMode为true</span></span>
<span class="line"><span style="color:#e1e4e8;">let rewriteMode = options.includes(&#39;-r&#39;) || options.includes(&#39;--rewrite&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 获取文件名</span></span>
<span class="line"><span style="color:#e1e4e8;">const clearFileArg = options.filter((item)=&gt;{</span></span>
<span class="line"><span style="color:#e1e4e8;">  return ![&#39;-r&#39;,&#39;--rewrite&#39;,&#39;-h&#39;,&#39;--help&#39;].includes(item)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 只处理一个文件</span></span>
<span class="line"><span style="color:#e1e4e8;">let filename = clearFileArg[0]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const writeASTFile = function(ast, filename, rewriteMode){</span></span>
<span class="line"><span style="color:#e1e4e8;">  const newCode = recast.print(ast).code</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(!rewriteMode){</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 非覆盖模式下，将新文件写入*.export.js下</span></span>
<span class="line"><span style="color:#e1e4e8;">    filename = filename.split(&#39;.&#39;).slice(0,-1).concat([&#39;export&#39;,&#39;js&#39;]).join(&#39;.&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 将新代码写入文件</span></span>
<span class="line"><span style="color:#e1e4e8;">  fs.writeFileSync(path.join(process.cwd(),filename),newCode)</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">recast.run(function (ast, printSource) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  let funcIds = []</span></span>
<span class="line"><span style="color:#e1e4e8;">  recast.types.visit(ast, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    visitFunctionDeclaration(path) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      //获取遍历到的函数名、参数、块级域</span></span>
<span class="line"><span style="color:#e1e4e8;">      const node = path.node</span></span>
<span class="line"><span style="color:#e1e4e8;">      const funcName = node.id</span></span>
<span class="line"><span style="color:#e1e4e8;">      const params = node.params</span></span>
<span class="line"><span style="color:#e1e4e8;">      const body = node.body</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      funcIds.push(funcName.name)</span></span>
<span class="line"><span style="color:#e1e4e8;">      const rep = expressionStatement(assignmentExpression(&#39;=&#39;, memberExpression(id(&#39;exports&#39;), funcName),</span></span>
<span class="line"><span style="color:#e1e4e8;">        arrowFunctionExpression(params, body)))</span></span>
<span class="line"><span style="color:#e1e4e8;">      path.replace(rep)</span></span>
<span class="line"><span style="color:#e1e4e8;">      return false</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  recast.types.visit(ast, {</span></span>
<span class="line"><span style="color:#e1e4e8;">    visitCallExpression(path){</span></span>
<span class="line"><span style="color:#e1e4e8;">      const node = path.node;</span></span>
<span class="line"><span style="color:#e1e4e8;">      if (funcIds.includes(node.callee.name)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        node.callee = memberExpression(id(&#39;exports&#39;), node.callee)</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      return false</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  writeASTFile(ast,filename,rewriteMode)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/usr/bin/env node</span></span>
<span class="line"><span style="color:#24292e;">const recast = require(&quot;recast&quot;);</span></span>
<span class="line"><span style="color:#24292e;">const {</span></span>
<span class="line"><span style="color:#24292e;">  identifier: id,</span></span>
<span class="line"><span style="color:#24292e;">  expressionStatement,</span></span>
<span class="line"><span style="color:#24292e;">  memberExpression,</span></span>
<span class="line"><span style="color:#24292e;">  assignmentExpression,</span></span>
<span class="line"><span style="color:#24292e;">  arrowFunctionExpression</span></span>
<span class="line"><span style="color:#24292e;">} = recast.types.builders</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const fs = require(&#39;fs&#39;)</span></span>
<span class="line"><span style="color:#24292e;">const path = require(&#39;path&#39;)</span></span>
<span class="line"><span style="color:#24292e;">// 截取参数</span></span>
<span class="line"><span style="color:#24292e;">const options = process.argv.slice(2)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//如果没有参数，或提供了-h 或--help选项，则打印帮助</span></span>
<span class="line"><span style="color:#24292e;">if(options.length===0 || options.includes(&#39;-h&#39;) || options.includes(&#39;--help&#39;)){</span></span>
<span class="line"><span style="color:#24292e;">  console.log(\`</span></span>
<span class="line"><span style="color:#24292e;">    采用commonjs规则，将.js文件内所有函数修改为导出形式。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    选项： -r  或 --rewrite 可直接覆盖原有文件</span></span>
<span class="line"><span style="color:#24292e;">    \`)</span></span>
<span class="line"><span style="color:#24292e;">  process.exit(0)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 只要有-r 或--rewrite参数，则rewriteMode为true</span></span>
<span class="line"><span style="color:#24292e;">let rewriteMode = options.includes(&#39;-r&#39;) || options.includes(&#39;--rewrite&#39;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 获取文件名</span></span>
<span class="line"><span style="color:#24292e;">const clearFileArg = options.filter((item)=&gt;{</span></span>
<span class="line"><span style="color:#24292e;">  return ![&#39;-r&#39;,&#39;--rewrite&#39;,&#39;-h&#39;,&#39;--help&#39;].includes(item)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 只处理一个文件</span></span>
<span class="line"><span style="color:#24292e;">let filename = clearFileArg[0]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const writeASTFile = function(ast, filename, rewriteMode){</span></span>
<span class="line"><span style="color:#24292e;">  const newCode = recast.print(ast).code</span></span>
<span class="line"><span style="color:#24292e;">  if(!rewriteMode){</span></span>
<span class="line"><span style="color:#24292e;">    // 非覆盖模式下，将新文件写入*.export.js下</span></span>
<span class="line"><span style="color:#24292e;">    filename = filename.split(&#39;.&#39;).slice(0,-1).concat([&#39;export&#39;,&#39;js&#39;]).join(&#39;.&#39;)</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  // 将新代码写入文件</span></span>
<span class="line"><span style="color:#24292e;">  fs.writeFileSync(path.join(process.cwd(),filename),newCode)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">recast.run(function (ast, printSource) {</span></span>
<span class="line"><span style="color:#24292e;">  let funcIds = []</span></span>
<span class="line"><span style="color:#24292e;">  recast.types.visit(ast, {</span></span>
<span class="line"><span style="color:#24292e;">    visitFunctionDeclaration(path) {</span></span>
<span class="line"><span style="color:#24292e;">      //获取遍历到的函数名、参数、块级域</span></span>
<span class="line"><span style="color:#24292e;">      const node = path.node</span></span>
<span class="line"><span style="color:#24292e;">      const funcName = node.id</span></span>
<span class="line"><span style="color:#24292e;">      const params = node.params</span></span>
<span class="line"><span style="color:#24292e;">      const body = node.body</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      funcIds.push(funcName.name)</span></span>
<span class="line"><span style="color:#24292e;">      const rep = expressionStatement(assignmentExpression(&#39;=&#39;, memberExpression(id(&#39;exports&#39;), funcName),</span></span>
<span class="line"><span style="color:#24292e;">        arrowFunctionExpression(params, body)))</span></span>
<span class="line"><span style="color:#24292e;">      path.replace(rep)</span></span>
<span class="line"><span style="color:#24292e;">      return false</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  recast.types.visit(ast, {</span></span>
<span class="line"><span style="color:#24292e;">    visitCallExpression(path){</span></span>
<span class="line"><span style="color:#24292e;">      const node = path.node;</span></span>
<span class="line"><span style="color:#24292e;">      if (funcIds.includes(node.callee.name)) {</span></span>
<span class="line"><span style="color:#24292e;">        node.callee = memberExpression(id(&#39;exports&#39;), node.callee)</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      return false</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  writeASTFile(ast,filename,rewriteMode)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h2 id="类型示例" tabindex="-1">类型示例 <a class="header-anchor" href="#类型示例" aria-label="Permalink to &quot;类型示例&quot;">​</a></h2><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712164855876.png" alt="image-20240712164855876"></p><h2 id="ast文章推荐" tabindex="-1">AST文章推荐 <a class="header-anchor" href="#ast文章推荐" aria-label="Permalink to &quot;AST文章推荐&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6923936548027105293" target="_blank" rel="noreferrer">像玩 jQuery 一样玩 AST</a></li><li>[阿里妈妈出的新工具，给批量修改项目代码减轻了痛苦](</li></ul>`,28),r=[p];function c(o,i,t,d,b,u){return n(),a("div",null,r)}const h=s(l,[["render",c]]);export{m as __pageData,h as default};
