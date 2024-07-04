import{_ as t,o as s,c as l,Q as e}from"./chunks/framework.b5309610.js";const E=JSON.parse('{"title":"选择器，文字样式","description":"","frontmatter":{},"headers":[],"relativePath":"leadingEnd/css/选择器，文字样式.md","filePath":"leadingEnd/css/选择器，文字样式.md","lastUpdated":1718705038000}'),a={name:"leadingEnd/css/选择器，文字样式.md"},p=e(`<h1 id="选择器-文字样式" tabindex="-1">选择器，文字样式 <a class="header-anchor" href="#选择器-文字样式" aria-label="Permalink to &quot;选择器，文字样式&quot;">​</a></h1><h2 id="一、选择器" tabindex="-1">一、选择器 <a class="header-anchor" href="#一、选择器" aria-label="Permalink to &quot;一、选择器&quot;">​</a></h2><ol><li><p>标签选择器：直接选择标签名字。</p></li><li><p>class选择器(类选择器)：给标签起class名，css直接写.class名。</p></li></ol><p>同一个标签可以有多个class名，class名中间用空格隔开，</p><p>同一个class名可以使用多次，相当于人的姓名。</p><p>class命名规则：a-z,A-Z,0-9,_,-，必须以字母开头</p><ol start="3"><li>id选择器：给标签起id名，css直接写#id名。</li></ol><p>同一个id名只能使用一次，同一个标签只可以有一个id名，相当于人的身份证</p><ol start="4"><li><p>后代选择器：中间用空格隔开，选择class名里面的标签。</p></li><li><p>群组选择器：中间用逗号隔开(逗号隔开的是完整的选择器)。</p></li><li><p>直接子元素选择器：只选择儿子那辈，儿子里面的标签不被选中，中间用&gt;号隔开。·</p></li><li><p>交集选择器：中间啥标点符号都不加</p></li></ol><p>div.red：选中所有div标签带red的class名的标签。</p><ol start="8"><li>通配符(*)，把所有的标签都选中，修改所有属性</li></ol><p>常用于margin值，padding值初始化</p><p>优先级：</p><p>权重值：id选择器 100&gt;class选择器 10&gt;标签选择器 1。</p><ol><li>当选择到不同的标签上的时候，继承来的样式优先级小于给自己设置的优先级。</li><li>当选择到同一个标签上的时候，比较权重，谁的权重高，谁的优先级就更大。</li><li>当选择到同一个标签，权重还相同的时候，遵循就近原则。</li><li>行间样式优先级大于id选择器，class选择器，标签选择器</li><li><code>!important</code> 优先级最大 写在分号里面</li></ol><p>选择器的表格</p><table><thead><tr><th>选择器</th><th>例子</th><th>例子描述</th><th>CSS</th></tr></thead><tbody><tr><td>element&gt;element</td><td>div&gt;p</td><td>选择父元素为 <code>&lt;div&gt;</code> 元素的所有 <code>&lt;p&gt;</code> 元素。</td><td>2</td></tr><tr><td>element+element</td><td>div+p</td><td>选择紧接在 <code>&lt;div&gt;</code> 元素之后的所有 <code>&lt;p&gt;</code> 元素。</td><td>2</td></tr><tr><td>[attribute=value]</td><td>[target=_blank]</td><td>选择 target=&quot;_blank&quot; 的所有元素。</td><td>2</td></tr><tr><td>[attribute~=value]</td><td>[title~=flower]</td><td>选择 title 属性包含单词 &quot;flower&quot; 的所有元素。</td><td>2</td></tr><tr><td>[attribute|=value]</td><td>[lang|=en]</td><td>选择 lang 属性值以 &quot;en&quot; 开头的所有元素。</td><td>2</td></tr><tr><td>:focus</td><td>input:focus</td><td>选择获得焦点的 input 元素。</td><td>2</td></tr><tr><td>:first-letter</td><td>p:first-letter</td><td>选择每个 <code>&lt;p&gt;</code> 元素的首字母。</td><td>1</td></tr><tr><td>:first-line</td><td>p:first-line</td><td>选择每个 <code>&lt;p&gt;</code> 元素的首行。</td><td>1</td></tr><tr><td>:before</td><td>p:before</td><td>在每个 <code>&lt;p&gt;</code> 元素的内容之前插入内容。</td><td>2</td></tr><tr><td>:after</td><td>p:after</td><td>在每个 <code>&lt;p&gt;</code> 元素的内容之后插入内容。</td><td>2</td></tr><tr><td>:lang(language)</td><td>p:lang(it)</td><td>选择带有以 &quot;it&quot; 开头的 lang 属性值的每个 <code>&lt;p&gt;</code> 元素。</td><td>2</td></tr><tr><td>element1~element2</td><td>p~ul</td><td>选择前面有 <code>&lt;p&gt;</code> 元素的每个 <code>&lt;ul&gt;</code> 元素。</td><td>3</td></tr><tr><td>[attribute^=value]</td><td>a[src^=&quot;https&quot;]</td><td>选择其 src 属性值以 &quot;https&quot; 开头的每个 <code>&lt;a&gt;</code> 元素。</td><td>3</td></tr><tr><td>[attribute$=value]</td><td>a[src$=&quot;.pdf&quot;]</td><td>选择其 src 属性以 &quot;.pdf&quot; 结尾的所有 <code>&lt;a&gt;</code> 元素。</td><td>3</td></tr><tr><td>[attribute*=value]</td><td>a[src*=&quot;abc&quot;]</td><td>选择其 src 属性中包含 &quot;abc&quot; 子串的每个 <code>&lt;a&gt;</code> 元素。</td><td>3</td></tr><tr><td>:first-of-type</td><td>p:first-of-type</td><td>选择属于其父元素的首个 <code>&lt;p&gt;</code> 元素的每个 <code>&lt;p&gt;</code> 元素。</td><td>3</td></tr><tr><td>:last-of-type</td><td>p:last-of-type</td><td>选择属于其父元素的最后 <code>&lt;p&gt;</code> 元素的每个 <code>&lt;p&gt;</code> 元素。</td><td>3</td></tr><tr><td>:only-of-type</td><td>p:only-of-type</td><td>选择属于其父元素唯一的 <code>&lt;p&gt;</code> 元素的每个 <code>&lt;p&gt;</code> 元素。</td><td>3</td></tr><tr><td>:only-child</td><td>p:only-child</td><td>选择属于其父元素的唯一子元素的每个 <code>&lt;p&gt;</code> 元素。</td><td>3</td></tr><tr><td>:nth-child(n)</td><td>p:nth-child(2)</td><td>选择属于其父元素的第二个子元素的每个 <code>&lt;p&gt;</code> 元素。</td><td>3</td></tr><tr><td>:nth-last-child(n)</td><td>p:nth-last-child(2)</td><td>同上，从最后一个子元素开始计数。</td><td>3</td></tr><tr><td>:nth-of-type(n)</td><td>p:nth-of-type(2)</td><td>选择属于其父元素第二个 <code>&lt;p&gt;</code> 元素的每个 <code>&lt;p&gt;</code> 元素。</td><td>3</td></tr><tr><td>:nth-last-of-type(n)</td><td>p:nth-last-of-type(2)</td><td>同上，但是从最后一个子元素开始计数。</td><td>3</td></tr><tr><td>:last-child</td><td>p:last-child</td><td>选择属于其父元素最后一个子元素每个 <code>&lt;p&gt;</code> 元素。</td><td>3</td></tr><tr><td>:root</td><td>:root</td><td>选择文档的根元素。</td><td>3</td></tr><tr><td>:empty</td><td>p:empty</td><td>选择没有子元素的每个 <code>&lt;p&gt;</code> 元素（包括文本节点）。</td><td>3</td></tr><tr><td>:target</td><td>#news:target</td><td>选择当前活动的 #news 元素。</td><td>3</td></tr><tr><td>:enabled</td><td>input:enabled</td><td>选择每个启用的 <code>&lt;input&gt;</code> 元素。</td><td>3</td></tr><tr><td>:disabled</td><td>input:disabled</td><td>选择每个禁用的 <code>&lt;input&gt;</code> 元素</td><td>3</td></tr><tr><td>:checked</td><td>input:checked</td><td>选择每个被选中的 <code>&lt;input&gt;</code> 元素。</td><td>3</td></tr><tr><td>:not(selector)</td><td>:not(p)</td><td>选择非 <code>&lt;p&gt;</code> 元素的每个元素。</td><td>3</td></tr><tr><td>::selection</td><td>::selection</td><td>选择被用户选取的元素部分。</td><td>3</td></tr></tbody></table><h3 id="_1、伪类选择器" tabindex="-1">1、伪类选择器 <a class="header-anchor" href="#_1、伪类选择器" aria-label="Permalink to &quot;1、伪类选择器&quot;">​</a></h3><p><code>a:link</code>，初始样式。</p><p><code>a:visited</code>，访问过后的样式。</p><p><code>a:hover</code>，鼠标滑过的样式。</p><p><code>a:active</code>，鼠标按住的样式。</p><p>顺序不能错乱：l-v-h-a。</p><h3 id="_2、伪元素选择器before-after" tabindex="-1">2、伪元素选择器before,after <a class="header-anchor" href="#_2、伪元素选择器before-after" aria-label="Permalink to &quot;2、伪元素选择器before,after&quot;">​</a></h3><ol><li><p>在E元素内部的开始位置和结束位创建一个元素，该元素为行内元素，且必须要结合content属性使用。</p></li><li><p>为什么用双冒号：</p><p>E:after、E:before 在旧版本里是伪元素，CSS3的规范里“:”用来表示伪类，“::”用来表示伪元素，但是在高版本浏览器下E:after、E:before会被自动识别为E::after、E::before，这样做的目的是用来做兼容处理，&quot;:&quot; 与 &quot;::&quot; 区别在于区分伪类和伪元素。</p></li><li><p>before,aften其实是一个盒子，这个盒子是内联元素，转块可以改变宽高，content属性是伪元素的内容，使用时必须配合使用，也称为是一个能插入元素的选择器，改变属性可以利用改变父元素继承。</p></li></ol><p>补充：</p><p>●滑过选中设置好的伪元素： div:hover::before；(鼠标放在div上将before选出来，选出来之后是不用加content的，因为前面已经加了），也可以做动画效果，因为before是一个独立的盒子，可以单独做效果，如果写一个文字是无法做效果的；</p><p>content属性可以使用attr()函数，取元素的属性名；</p><h3 id="_3、结构性伪类选择器" tabindex="-1">3、结构性伪类选择器 <a class="header-anchor" href="#_3、结构性伪类选择器" aria-label="Permalink to &quot;3、结构性伪类选择器&quot;">​</a></h3><p>child用法必须保证是连续数的，从父级元素里面开始算第几个的。</p><p>n是从0开始走的，第一个是2*0+1，第二个是2*1+1，</p><p>几n就是几的倍数。</p><h4 id="nth-child-n" tabindex="-1">nth-child（n） <a class="header-anchor" href="#nth-child-n" aria-label="Permalink to &quot;nth-child（n）&quot;">​</a></h4><ol><li><p><code>nth-child(3)</code></p><p>表示选择列表中的第3个标签，代码如下：</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">li</span><span style="color:#B392F0;">:nth-child</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">){</span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">li</span><span style="color:#6F42C1;">:nth-child</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">){</span><span style="color:#005CC5;">background</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p><code>nth-child(2n)</code></p><p>表示选择列表中的偶数标签，即选择 第2. 第4. 第6…… 标签，代码如下：</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">li</span><span style="color:#B392F0;">:nth-child</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2n</span><span style="color:#E1E4E8;">){</span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">li</span><span style="color:#6F42C1;">:nth-child</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2n</span><span style="color:#24292E;">){</span><span style="color:#005CC5;">background</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p><code>nth-child(2n-1)</code></p><p>表示选择列表中的奇数标签，即选择 第1. 第3. 第5. 第7……标签，代码如下：</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">li</span><span style="color:#B392F0;">:nth-child</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2n-1</span><span style="color:#E1E4E8;">){</span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">li</span><span style="color:#6F42C1;">:nth-child</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2n-1</span><span style="color:#24292E;">){</span><span style="color:#005CC5;">background</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p><code>nth-child(n+3)</code></p><p>表示选择列表中的标签从第3个开始到最后，代码如下：</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">li</span><span style="color:#B392F0;">:nth-child</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">n+3</span><span style="color:#E1E4E8;">){</span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">li</span><span style="color:#6F42C1;">:nth-child</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">n+3</span><span style="color:#24292E;">){</span><span style="color:#005CC5;">background</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p><code>nth-child(-n+3)</code></p><p>表示选择列表中的标签从0到3，即小于3的标签，代码如下：</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">li</span><span style="color:#B392F0;">:nth-child</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">-n+3</span><span style="color:#E1E4E8;">){</span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">li</span><span style="color:#6F42C1;">:nth-child</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">-n+3</span><span style="color:#24292E;">){</span><span style="color:#005CC5;">background</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p><code>nth-last-child(3)</code></p><p>表示选择列表中的倒数第3个标签，代码如下：</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">li</span><span style="color:#B392F0;">:nth-last-child</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">){</span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">li</span><span style="color:#6F42C1;">:nth-last-child</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">){</span><span style="color:#005CC5;">background</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ol><h4 id="first-child" tabindex="-1">first-child <a class="header-anchor" href="#first-child" aria-label="Permalink to &quot;first-child&quot;">​</a></h4><ol><li><p><code>first-child</code></p><p>first-child表示选择列表中的第一个标签。代码如下：</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">li</span><span style="color:#B392F0;">:first-child</span><span style="color:#E1E4E8;">{</span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">li</span><span style="color:#6F42C1;">:first-child</span><span style="color:#24292E;">{</span><span style="color:#005CC5;">background</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ol><h4 id="last-child用法" tabindex="-1">last-child用法 <a class="header-anchor" href="#last-child用法" aria-label="Permalink to &quot;last-child用法&quot;">​</a></h4><ol><li><code>last-child</code></li></ol><p>last-child表示选择列表中的最后一个标签，代码如下：</p><pre><code>\`\`\`css
</code></pre><p>li:last-child{background:#fff} \`\`\`</p><h4 id="高级用法" tabindex="-1">高级用法 <a class="header-anchor" href="#高级用法" aria-label="Permalink to &quot;高级用法&quot;">​</a></h4><p><code>nth-child(n+2):nth-child(odd):nth-child(-n+9)</code></p><p>使用我们将会选中的子元素是从第2位到第9位，并且只包含奇数位。</p><h4 id="nth-of-type" tabindex="-1">nth-of-type <a class="header-anchor" href="#nth-of-type" aria-label="Permalink to &quot;nth-of-type&quot;">​</a></h4><p>type用法是选择所有级元素里面第几次出现的</p><ol><li><p><code>nth-of-type(n)</code></p><p>选择父元素中第几次出现的元素；</p></li><li><p><code>nth-last-of-type(n)</code></p><p>选择父元素中倒数第几次出现的元素；</p></li><li><p><code>nth-of-type(odd)/(2n-1)</code></p><p>选择父元素中出现的奇数次元素；</p></li><li><p><code>nth-of-type(even)/(2n);</code></p><p>选择父元素中出现的偶数次元素；</p></li></ol><h3 id="_4、属性选择器" tabindex="-1">4、属性选择器 <a class="header-anchor" href="#_4、属性选择器" aria-label="Permalink to &quot;4、属性选择器&quot;">​</a></h3><ol><li><p><code>div[title]</code></p><p>选择所有div标签包含有title的属性；</p></li><li><p><code>div[title=value]</code></p><p>选择所有div标签包含value值相等的元素</p></li><li><p><code>div[title*=value]</code></p><p>选中包含字母的所有标签；</p></li><li><p><code>div[title~=value]</code></p><p>选中单独的单词的标签；</p></li><li><p><code>div[title^=value]</code></p><p>选中以value开头的标签；</p></li><li><p><code>div[title$=value]</code></p><p>选中以value值结尾的标签；</p></li><li><p>属性选择器也可以单独选择；</p><p><code>[title=value]</code></p></li></ol><h4 id="补充" tabindex="-1">补充： <a class="header-anchor" href="#补充" aria-label="Permalink to &quot;补充：&quot;">​</a></h4><p><code>:not()</code>，选择器匹配非指定元素选择器的每个元素；</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">li</span><span style="color:#B392F0;">:not</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">:last-child</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">/*选择除最后一行的所有元素 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">margin-bottom</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">; </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">li</span><span style="color:#6F42C1;">:not</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">:last-child</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">/*选择除最后一行的所有元素 */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">margin-bottom</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">; </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_5、状态伪类选择器" tabindex="-1">5、状态伪类选择器 <a class="header-anchor" href="#_5、状态伪类选择器" aria-label="Permalink to &quot;5、状态伪类选择器&quot;">​</a></h3><ol><li><p><code>checked</code> 选中的元素；</p></li><li><p><code>enabled</code> 可用的状态；</p></li><li><p><code>disabled</code> 禁用状态；</p></li><li><p><code>focus</code> 选中鼠标点击获取的焦点；</p></li><li><p><code>::first-line</code> 选中文本中第一行文字；</p></li><li><p><code>::first-letter</code> 文本中的第一个单词或字，用于金钱的地方</p></li><li><p><code>p::selection</code> 改变鼠标选中文字的样式(必须双冒号)；</p></li><li><p><code>target</code> 选择当前活动的元素，可以不写标签，直接:target。 给a标签href地址里面写#name，给需要选中的标签添加id=name；</p></li></ol><h2 id="二、文字相关样式" tabindex="-1">二、文字相关样式 <a class="header-anchor" href="#二、文字相关样式" aria-label="Permalink to &quot;二、文字相关样式&quot;">​</a></h2><ol><li><p><code>font-size</code>：文字字号，可以继承，</p><p>谷歌里面默认是16px，默认最小是12px，通常情况下，文字的字号都是双数（但也是有单数的）</p></li><li><p><code>line-height</code>：行高，可以继承，想要设置一行文字在盒子里垂直位置居中，给文字设置行高和盒子高度相等，</p><p>单位：px %，如果字号是100px，line-height:2，表示行高是200px；</p></li><li><p><code>font-family</code>：文字字体，可以继承，</p><p>安全字体：楷体，宋体，微软雅黑，黑体，可以设置多种字体，用逗号隔开，先识别第一种，字体带空格，必须加空格。</p></li><li><p><code>font-style</code>：设置文字是否倾斜，可以继承，italic倾斜，normal不倾斜。</p></li><li><p><code>font-weight</code>：文字是否加粗，可以继承，bold加粗，normal不加粗。</p></li><li><p>文字样式复合写法，倾斜和加粗如果省略，默认是不倾斜加粗的，字号和字体不能省略。</p><p><code>font:italic bold 30px/50px &#39;楷体&#39;</code>； font:是否倾斜 是否加粗 字号/行高 字体。</p></li><li><p>color文字颜色</p><p>①英文单词，</p><p>②十六进制，六位数组成，0-9，a-f，前两位是红色，中间是绿色，最后是蓝色</p><p>③rgb，取值0到255，中间用逗号隔开，示例：rgb(255,255,255)</p></li></ol><p><strong>解决最小12px问题</strong></p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">font-size</span><span style="color:#E1E4E8;">:10px;          </span></span>
<span class="line"><span style="color:#E1E4E8;">-webkit-transform-origin-x: 0;    </span><span style="color:#6A737D;">/*定义元素被置于x轴的何处*/</span></span>
<span class="line"><span style="color:#E1E4E8;">-webkit-transform: scale(0</span><span style="color:#B392F0;">.90</span><span style="color:#E1E4E8;">);   </span><span style="color:#6A737D;">/*定义元素被缩放*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">font-size</span><span style="color:#24292E;">:10px;          </span></span>
<span class="line"><span style="color:#24292E;">-webkit-transform-origin-x: 0;    </span><span style="color:#6A737D;">/*定义元素被置于x轴的何处*/</span></span>
<span class="line"><span style="color:#24292E;">-webkit-transform: scale(0</span><span style="color:#6F42C1;">.90</span><span style="color:#24292E;">);   </span><span style="color:#6A737D;">/*定义元素被缩放*/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="三、文本相关样式-可以继承" tabindex="-1">三、文本相关样式，可以继承 <a class="header-anchor" href="#三、文本相关样式-可以继承" aria-label="Permalink to &quot;三、文本相关样式，可以继承&quot;">​</a></h2><ol><li><p><code>text-indent</code>，首行缩进，单位:px em，一般使用2em（表示第一行空2格）</p><p>em 是本身的font-size值相比较 font-size:20px 。1em=20px,2em=40px</p></li><li><p><code>text-align</code>，文字对齐方式，可以继承,center/left/right。对inline元素都起作用；如果子元素都是span，可以给父级div设置</p><p>让文字两端对齐：</p></li></ol><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">text-align</span><span style="color:#E1E4E8;">:justify</span></span>
<span class="line"><span style="color:#85E89D;">text-align-last</span><span style="color:#E1E4E8;">:justify</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">text-align</span><span style="color:#24292E;">:justify</span></span>
<span class="line"><span style="color:#22863A;">text-align-last</span><span style="color:#24292E;">:justify</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li><p><code>text-decoration</code>，设置文本装饰，可以继承</p><p><code>line-through</code>，中划线，<code>underline</code>，下划线，</p><p><code>overline</code>，上划线，，，<code>none</code>，去掉下划线</p></li><li><p><code>letter-spacing</code>，字母与字母之间的距离，文字与文字之间的距离。</p></li><li><p><code>word-spacing</code>，单词与单词之间的距离，空白距离</p></li><li><p>如果想让横着的文字重叠到一起：设置letter-spacing 为负值</p><p>如果想让竖着的文字重叠到一起：设置行高为0。</p></li><li><p><code>user-select: none</code> 让用户不能选择文本内容</p></li><li><p><code>text-overflow: ellipsis</code>； 超过文本变点状</p></li><li><p><code>text-transform: uppercase</code> 让输入的字母通通大写；</p></li><li><p><code>white-space</code> 空白处理</p><p>当html中输入多个空白符时，默认会被当成一个空白符处理，就是这个属性控制的；</p></li></ol><ul><li><code>normal</code>： 合并空白符和换行符</li><li><code>nowrap</code>：合并空白符，但不许换行；</li><li><code>pre</code>：不合并空白符，并且只在有换行符的地方换行；（常用）</li><li><code>pre-wrap</code>：不合并空白符，允许换行符换行和文本自动换行；</li></ul><ol start="11"><li><code>word-break: break-all</code>; 以字母作为依据换行，解决文本在不该换行的时候换行；</li></ol><p><code>white-space: pre-wrap;</code> textarea保留换行；</p>`,65),o=[p];function n(d,c,i,r,h,y){return s(),l("div",null,o)}const b=t(a,[["render",n]]);export{E as __pageData,b as default};
