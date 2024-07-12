import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.b5309610.js";const m=JSON.parse('{"title":"Markdown语法","description":"","frontmatter":{},"headers":[],"relativePath":"other-note/Markdown语法.md","filePath":"other-note/Markdown语法.md","lastUpdated":null}'),l={name:"other-note/Markdown语法.md"},p=e(`<h1 id="markdown语法" tabindex="-1">Markdown语法 <a class="header-anchor" href="#markdown语法" aria-label="Permalink to &quot;Markdown语法&quot;">​</a></h1><h2 id="一、常用选项" tabindex="-1">一、常用选项 <a class="header-anchor" href="#一、常用选项" aria-label="Permalink to &quot;一、常用选项&quot;">​</a></h2><ol><li><p><strong>标题：</strong> 一个#代表一级标题，等同于h1~h6</p></li><li><p>加粗文本：**印象笔记**</p></li><li><p>斜体：*印象*</p></li><li><p>引用文本：&gt;</p></li><li><p>高亮：\`高亮文本\`</p></li><li><p>标记：==文本==</p></li><li><p>列表：</p><ul><li>无序列表：*、+、-</li><li>有序列表：1.空格</li></ul></li><li><p>下划线：&lt;u&gt;印象&lt;/u&gt;</p></li><li><p>添加颜色和字体大小：<code>&lt;font color=red size=18&gt;哈哈&lt;/font&gt;</code></p></li><li><p>上标：&lt;sup&gt;</p></li><li><p>下标：&lt;sub&gt;</p></li><li><p>删除线：~~印象~~</p></li><li><p>分隔线：***或---</p></li><li><p>插入行内代码或代码块：\`\`\`语言</p></li><li><p>插入链接：[百度](www.baidu.com)</p></li><li><p>插入图片：![image](地址) 支持网络图片</p><p>本地图片控制大小：图片名@w=300h=200</p></li><li><p>插入数字公式：\`\`\`math</p></li><li><p>设置目录：[TOC]</p></li><li><p>空格：</p><p>半方大的空白：&amp;ensp;或&amp;#8194;</p><p>全方大的空白：&amp;emsp;或&amp;#8195;</p><p>不断行的空白：&amp;nbsp;或&amp;#160;</p></li><li><p>脚注：</p><p>[^自定义变量]</p></li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">生成一个脚注1[^footnote]. </span></span>
<span class="line"><span style="color:#e1e4e8;">[^footnote]: 这里是 **脚注** 的 *内容*. </span></span>
<span class="line"><span style="color:#e1e4e8;">生成一个脚注2[^foot]. </span></span>
<span class="line"><span style="color:#e1e4e8;">[^foot]:这里是**脚注2**的*内容*.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">生成一个脚注1[^footnote]. </span></span>
<span class="line"><span style="color:#24292e;">[^footnote]: 这里是 **脚注** 的 *内容*. </span></span>
<span class="line"><span style="color:#24292e;">生成一个脚注2[^foot]. </span></span>
<span class="line"><span style="color:#24292e;">[^foot]:这里是**脚注2**的*内容*.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="二、待办事项" tabindex="-1">二、待办事项 <a class="header-anchor" href="#二、待办事项" aria-label="Permalink to &quot;二、待办事项&quot;">​</a></h2><p>*[ ] 第一只青蛙</p><h2 id="三、插入表格" tabindex="-1">三、插入表格 <a class="header-anchor" href="#三、插入表格" aria-label="Permalink to &quot;三、插入表格&quot;">​</a></h2><ul><li>使用|符号，---来区分标题</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">| 帐户类型 | 免费帐户 | 标准帐户 | 高级帐户 |</span></span>
<span class="line"><span style="color:#e1e4e8;">| --- | --- | --- | --- |</span></span>
<span class="line"><span style="color:#e1e4e8;">| 帐户流量 | 60M | 1GB | 10GB |</span></span>
<span class="line"><span style="color:#e1e4e8;">| 设备数目 | 2台 | 无限制 | 无限制 |</span></span>
<span class="line"><span style="color:#e1e4e8;">| 当前价格 | 免费 | ￥8.17/月 | ￥12.33/月|</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">| 帐户类型 | 免费帐户 | 标准帐户 | 高级帐户 |</span></span>
<span class="line"><span style="color:#24292e;">| --- | --- | --- | --- |</span></span>
<span class="line"><span style="color:#24292e;">| 帐户流量 | 60M | 1GB | 10GB |</span></span>
<span class="line"><span style="color:#24292e;">| 设备数目 | 2台 | 无限制 | 无限制 |</span></span>
<span class="line"><span style="color:#24292e;">| 当前价格 | 免费 | ￥8.17/月 | ￥12.33/月|</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><table><thead><tr><th>帐户类型</th><th>免费帐户</th><th>标准帐户</th><th>高级帐户</th></tr></thead><tbody><tr><td>帐户流量</td><td>60M</td><td>1GB</td><td>10GB</td></tr><tr><td>设备数目</td><td>2台</td><td>无限制</td><td>无限制</td></tr><tr><td>当前价格</td><td>免费</td><td>￥8.17/月</td><td>￥12.33/月</td></tr></tbody></table><h2 id="四、插入图表chart" tabindex="-1">四、插入图表chart <a class="header-anchor" href="#四、插入图表chart" aria-label="Permalink to &quot;四、插入图表chart&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`chart</span></span>
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
<span class="line"><span style="color:#24292e;">​\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>更多语法百度查看</li></ul>`,13),t=[p];function o(i,r,c,d,u,b){return n(),a("div",null,t)}const y=s(l,[["render",o]]);export{m as __pageData,y as default};
