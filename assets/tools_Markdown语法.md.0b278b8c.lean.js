import{_ as a,o as n,c as e,O as l}from"./chunks/framework.db831a78.js";const y=JSON.parse('{"title":"Markdown 语法","description":"","frontmatter":{},"headers":[],"relativePath":"tools/Markdown语法.md","filePath":"tools/Markdown语法.md","lastUpdated":null}'),p={name:"tools/Markdown语法.md"};function o(r,s,t,c,i,d){return n(),e("div",null,s[0]||(s[0]=[l(`<h1 id="markdown-语法" tabindex="-1">Markdown 语法 <a class="header-anchor" href="#markdown-语法" aria-label="Permalink to &quot;Markdown 语法&quot;">​</a></h1><h2 id="一、常用选项" tabindex="-1">一、常用选项 <a class="header-anchor" href="#一、常用选项" aria-label="Permalink to &quot;一、常用选项&quot;">​</a></h2><ol><li><p><strong>标题：</strong> 一个#代表一级标题，等同于 h1~h6</p></li><li><p>加粗文本：**印象笔记**</p></li><li><p>斜体：*印象*</p></li><li><p>引用文本：&gt;</p></li><li><p>高亮：\`高亮文本\`</p></li><li><p>标记：==文本==</p></li><li><p>列表：</p><ul><li>无序列表：*、+、-</li><li>有序列表：1.空格</li></ul></li><li><p>下划线：&lt;u&gt;印象&lt;/u&gt;</p></li><li><p>添加颜色和字体大小：<code>&lt;font color=red size=18&gt;哈哈&lt;/font&gt;</code></p></li><li><p>上标：&lt;sup&gt;</p></li><li><p>下标：&lt;sub&gt;</p></li><li><p>删除线：~~印象~~</p></li><li><p>分隔线：***或---</p></li><li><p>插入行内代码或代码块：\`\`\`语言</p></li><li><p>插入链接：[百度](www.baidu.com)</p></li><li><p>插入图片：![image](地址) 支持网络图片</p><p>本地图片控制大小：图片名@w=300h=200</p></li><li><p>插入数字公式：\`\`\`math</p></li><li><p>设置目录：[TOC]</p></li><li><p>空格：</p><p>半方大的空白：&amp;ensp;或&amp;#8194;</p><p>全方大的空白：&amp;emsp;或&amp;#8195;</p><p>不断行的空白：&amp;nbsp;或&amp;#160;</p></li><li><p>脚注：</p><p>[^自定义变量]</p></li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">生成一个脚注1[^footnote].</span></span>
<span class="line"><span style="color:#e1e4e8;">[^footnote]: 这里是 **脚注** 的 *内容*.</span></span>
<span class="line"><span style="color:#e1e4e8;">生成一个脚注2[^foot].</span></span>
<span class="line"><span style="color:#e1e4e8;">[^foot]:这里是**脚注2**的*内容*.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">生成一个脚注1[^footnote].</span></span>
<span class="line"><span style="color:#24292e;">[^footnote]: 这里是 **脚注** 的 *内容*.</span></span>
<span class="line"><span style="color:#24292e;">生成一个脚注2[^foot].</span></span>
<span class="line"><span style="color:#24292e;">[^foot]:这里是**脚注2**的*内容*.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="二、待办事项" tabindex="-1">二、待办事项 <a class="header-anchor" href="#二、待办事项" aria-label="Permalink to &quot;二、待办事项&quot;">​</a></h2><p>*[ ] 第一只青蛙</p><h2 id="三、插入表格" tabindex="-1">三、插入表格 <a class="header-anchor" href="#三、插入表格" aria-label="Permalink to &quot;三、插入表格&quot;">​</a></h2><ul><li>使用|符号，---来区分标题</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">| 帐户类型 | 免费帐户 | 标准帐户 | 高级帐户 |</span></span>
<span class="line"><span style="color:#e1e4e8;">| --- | --- | --- | --- |</span></span>
<span class="line"><span style="color:#e1e4e8;">| 帐户流量 | 60M | 1GB | 10GB |</span></span>
<span class="line"><span style="color:#e1e4e8;">| 设备数目 | 2台 | 无限制 | 无限制 |</span></span>
<span class="line"><span style="color:#e1e4e8;">| 当前价格 | 免费 | ￥8.17/月 | ￥12.33/月|</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">| 帐户类型 | 免费帐户 | 标准帐户 | 高级帐户 |</span></span>
<span class="line"><span style="color:#24292e;">| --- | --- | --- | --- |</span></span>
<span class="line"><span style="color:#24292e;">| 帐户流量 | 60M | 1GB | 10GB |</span></span>
<span class="line"><span style="color:#24292e;">| 设备数目 | 2台 | 无限制 | 无限制 |</span></span>
<span class="line"><span style="color:#24292e;">| 当前价格 | 免费 | ￥8.17/月 | ￥12.33/月|</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><table><thead><tr><th>帐户类型</th><th>免费帐户</th><th>标准帐户</th><th>高级帐户</th></tr></thead><tbody><tr><td>帐户流量</td><td>60M</td><td>1GB</td><td>10GB</td></tr><tr><td>设备数目</td><td>2 台</td><td>无限制</td><td>无限制</td></tr><tr><td>当前价格</td><td>免费</td><td>￥ 8.17/月</td><td>￥ 12.33/月</td></tr></tbody></table><h2 id="四、插入图表-chart" tabindex="-1">四、插入图表 chart <a class="header-anchor" href="#四、插入图表-chart" aria-label="Permalink to &quot;四、插入图表 chart&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`chart</span></span>
<span class="line"><span style="color:#e1e4e8;">,预算,收入,花费,债务</span></span>
<span class="line"><span style="color:#e1e4e8;">June,5000,8000,4000,6000</span></span>
<span class="line"><span style="color:#e1e4e8;">July,3000,1000,4000,3000</span></span>
<span class="line"><span style="color:#e1e4e8;">Aug,5000,7000,6000,3000</span></span>
<span class="line"><span style="color:#e1e4e8;">Sep,7000,2000,3000,1000</span></span>
<span class="line"><span style="color:#e1e4e8;">Oct,6000,5000,4000,2000</span></span>
<span class="line"><span style="color:#e1e4e8;">Nov,4000,3000,5000,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">type: pie</span></span>
<span class="line"><span style="color:#e1e4e8;">title: 每月收益</span></span>
<span class="line"><span style="color:#e1e4e8;">x.title: Amount</span></span>
<span class="line"><span style="color:#e1e4e8;">y.title: Month</span></span>
<span class="line"><span style="color:#e1e4e8;">y.suffix: $</span></span>
<span class="line"><span style="color:#e1e4e8;">​\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`chart</span></span>
<span class="line"><span style="color:#24292e;">,预算,收入,花费,债务</span></span>
<span class="line"><span style="color:#24292e;">June,5000,8000,4000,6000</span></span>
<span class="line"><span style="color:#24292e;">July,3000,1000,4000,3000</span></span>
<span class="line"><span style="color:#24292e;">Aug,5000,7000,6000,3000</span></span>
<span class="line"><span style="color:#24292e;">Sep,7000,2000,3000,1000</span></span>
<span class="line"><span style="color:#24292e;">Oct,6000,5000,4000,2000</span></span>
<span class="line"><span style="color:#24292e;">Nov,4000,3000,5000,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">type: pie</span></span>
<span class="line"><span style="color:#24292e;">title: 每月收益</span></span>
<span class="line"><span style="color:#24292e;">x.title: Amount</span></span>
<span class="line"><span style="color:#24292e;">y.title: Month</span></span>
<span class="line"><span style="color:#24292e;">y.suffix: $</span></span>
<span class="line"><span style="color:#24292e;">​\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="五、mermaid-图表-主流-markdown-编辑器支持" tabindex="-1">五、Mermaid 图表（主流 Markdown 编辑器支持） <a class="header-anchor" href="#五、mermaid-图表-主流-markdown-编辑器支持" aria-label="Permalink to &quot;五、Mermaid 图表（主流 Markdown 编辑器支持）&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`mermaid</span></span>
<span class="line"><span style="color:#e1e4e8;">graph TD;</span></span>
<span class="line"><span style="color:#e1e4e8;">    A--&gt;B;</span></span>
<span class="line"><span style="color:#e1e4e8;">    A--&gt;C;</span></span>
<span class="line"><span style="color:#e1e4e8;">    B--&gt;D;</span></span>
<span class="line"><span style="color:#e1e4e8;">    C--&gt;D;</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`mermaid</span></span>
<span class="line"><span style="color:#24292e;">graph TD;</span></span>
<span class="line"><span style="color:#24292e;">    A--&gt;B;</span></span>
<span class="line"><span style="color:#24292e;">    A--&gt;C;</span></span>
<span class="line"><span style="color:#24292e;">    B--&gt;D;</span></span>
<span class="line"><span style="color:#24292e;">    C--&gt;D;</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">graph</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TD</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">A</span><span style="color:#F97583;">--&gt;</span><span style="color:#FFAB70;">B</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">A</span><span style="color:#F97583;">--&gt;</span><span style="color:#FFAB70;">C</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">B</span><span style="color:#F97583;">--&gt;</span><span style="color:#FFAB70;">D</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">C</span><span style="color:#F97583;">--&gt;</span><span style="color:#FFAB70;">D</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">graph</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TD</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">A</span><span style="color:#D73A49;">--&gt;</span><span style="color:#E36209;">B</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">A</span><span style="color:#D73A49;">--&gt;</span><span style="color:#E36209;">C</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">B</span><span style="color:#D73A49;">--&gt;</span><span style="color:#E36209;">D</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">C</span><span style="color:#D73A49;">--&gt;</span><span style="color:#E36209;">D</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="时序图" tabindex="-1">时序图 <a class="header-anchor" href="#时序图" aria-label="Permalink to &quot;时序图&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`mermaid</span></span>
<span class="line"><span style="color:#e1e4e8;">sequenceDiagram</span></span>
<span class="line"><span style="color:#e1e4e8;">    Alice-&gt;&gt;John: Hello John, how are you?</span></span>
<span class="line"><span style="color:#e1e4e8;">    John--&gt;&gt;Alice: Great!</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`mermaid</span></span>
<span class="line"><span style="color:#24292e;">sequenceDiagram</span></span>
<span class="line"><span style="color:#24292e;">    Alice-&gt;&gt;John: Hello John, how are you?</span></span>
<span class="line"><span style="color:#24292e;">    John--&gt;&gt;Alice: Great!</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="甘特图" tabindex="-1">甘特图 <a class="header-anchor" href="#甘特图" aria-label="Permalink to &quot;甘特图&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`mermaid</span></span>
<span class="line"><span style="color:#e1e4e8;">gantt</span></span>
<span class="line"><span style="color:#e1e4e8;">    title 项目计划</span></span>
<span class="line"><span style="color:#e1e4e8;">    dateFormat  YYYY-MM-DD</span></span>
<span class="line"><span style="color:#e1e4e8;">    section 设计</span></span>
<span class="line"><span style="color:#e1e4e8;">    需求分析     :done, 2024-01-01, 7d</span></span>
<span class="line"><span style="color:#e1e4e8;">    原型设计     :active, 2024-01-08, 5d</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`mermaid</span></span>
<span class="line"><span style="color:#24292e;">gantt</span></span>
<span class="line"><span style="color:#24292e;">    title 项目计划</span></span>
<span class="line"><span style="color:#24292e;">    dateFormat  YYYY-MM-DD</span></span>
<span class="line"><span style="color:#24292e;">    section 设计</span></span>
<span class="line"><span style="color:#24292e;">    需求分析     :done, 2024-01-01, 7d</span></span>
<span class="line"><span style="color:#24292e;">    原型设计     :active, 2024-01-08, 5d</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="六、其他常用语法" tabindex="-1">六、其他常用语法 <a class="header-anchor" href="#六、其他常用语法" aria-label="Permalink to &quot;六、其他常用语法&quot;">​</a></h2><h3 id="任务列表" tabindex="-1">任务列表 <a class="header-anchor" href="#任务列表" aria-label="Permalink to &quot;任务列表&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> [</span><span style="color:#DBEDFF;text-decoration:underline;">x</span><span style="color:#E1E4E8;">] 已完成任务</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> [ ] 未完成任务</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> [ ] 待办任务</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;"> [</span><span style="color:#032F62;text-decoration:underline;">x</span><span style="color:#24292E;">] 已完成任务</span></span>
<span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;"> [ ] 未完成任务</span></span>
<span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;"> [ ] 待办任务</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="锚点链接" tabindex="-1">锚点链接 <a class="header-anchor" href="#锚点链接" aria-label="Permalink to &quot;锚点链接&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">跳转到标题</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">#标题名称</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">跳转到标题</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">#标题名称</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="折叠详情" tabindex="-1">折叠详情 <a class="header-anchor" href="#折叠详情" aria-label="Permalink to &quot;折叠详情&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;details&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;summary&gt;点击展开&lt;/summary&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">这里是隐藏内容</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/details&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;details&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;summary&gt;点击展开&lt;/summary&gt;</span></span>
<span class="line"><span style="color:#24292E;">这里是隐藏内容</span></span>
<span class="line"><span style="color:#24292E;">&lt;/details&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="自定义容器-vitepress-vuepress" tabindex="-1">自定义容器（Vitepress/VuePress） <a class="header-anchor" href="#自定义容器-vitepress-vuepress" aria-label="Permalink to &quot;自定义容器（Vitepress/VuePress）&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::: tip 提示</span></span>
<span class="line"><span style="color:#E1E4E8;">这是一个提示</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: warning 注意</span></span>
<span class="line"><span style="color:#E1E4E8;">这是一个警告</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: danger 危险</span></span>
<span class="line"><span style="color:#E1E4E8;">这是一个危险提示</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::: tip 提示</span></span>
<span class="line"><span style="color:#24292E;">这是一个提示</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: warning 注意</span></span>
<span class="line"><span style="color:#24292E;">这是一个警告</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: danger 危险</span></span>
<span class="line"><span style="color:#24292E;">这是一个危险提示</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,28)]))}const u=a(p,[["render",o]]);export{y as __pageData,u as default};
