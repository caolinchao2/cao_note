import{_ as s,o,c as a,Q as e}from"./chunks/framework.b5309610.js";const h=JSON.parse('{"title":"js-01 javascript 初始","description":"","frontmatter":{},"headers":[],"relativePath":"前端/Javascript/js-01 javascript 初始.md","filePath":"前端/Javascript/js-01 javascript 初始.md","lastUpdated":1715053679000}'),l={name:"前端/Javascript/js-01 javascript 初始.md"},p=e(`<h1 id="js-01-javascript-初始" tabindex="-1">js-01 javascript 初始 <a class="header-anchor" href="#js-01-javascript-初始" aria-label="Permalink to &quot;js-01 javascript 初始&quot;">​</a></h1><h2 id="一、js发展历史" tabindex="-1">一、js发展历史： <a class="header-anchor" href="#一、js发展历史" aria-label="Permalink to &quot;一、js发展历史：&quot;">​</a></h2><p>ECMAScript（Europe Computer Manufacture Association)；语法，定义变量</p><p>DOM（Document Object model） ; 文档对象模型；</p><p>BOM（Brower Object model）; 浏览器对象模型；</p><p><code>javascript</code>是一个单线程、非阻塞、异步、解释性脚本语言；</p><p>V8是chrome里的javascript运行环境；</p><ol><li>javascript 是解释性脚本语言；</li></ol><ul><li>javascript原名不是JavaScript，而是Livescript；</li><li>js是用来解决用户和浏览器交互的问题；</li><li>ECMAScript是JavaScript的规范，JavaScript是ECMAScript的实现；</li><li>ECMAScript方言：Jscript、ActionScript；</li></ul><ol start="2"><li>Javascript的创造者<code>Netscape</code>（网景公司）</li></ol><h2 id="二、script引入方法" tabindex="-1">二、script引入方法 <a class="header-anchor" href="#二、script引入方法" aria-label="Permalink to &quot;二、script引入方法&quot;">​</a></h2><ol><li>行间样式，在标签内直接写<code>onclick</code>点击事件。</li></ol><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> = </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">alert</span><span style="color:#9ECBFF;">(&#39;点击&#39;)&quot;</span><span style="color:#B392F0;">;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> = </span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">alert</span><span style="color:#032F62;">(&#39;点击&#39;)&quot;</span><span style="color:#6F42C1;">;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li><p>内部样式，用script标签，写入事件，一般写在body结束标签之前。</p></li><li><p>外部样式，创建一个js文件，在html引入<code>&lt;script src=&quot;&quot;&gt;</code>，src输入地址；</p></li></ol><p><strong>放置位置：</strong></p><p>当浏览器解析script标签时，会暂停构建DOM，完成后才会从暂停的地方重新开始，也就是说，如果想在首屏渲染快，就越不应该在首屏就加载JS文件，所以都建议将script标签放在body结束标签之前的原因；</p><p>也可以在script标签上添加<code>defer</code>属性，规定是否对脚本执行进行延迟，直到页面加载为止；</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defer</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;defer&#39;</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defer</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;defer&#39;</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>也可以添加<code>async</code>属性，立即加载脚本，不影响其他的顺序 ；</p><p><code>defer</code>和<code>async</code>只对外部脚本有效</p><h2 id="三、基本使用语法" tabindex="-1">三、基本使用语法 <a class="header-anchor" href="#三、基本使用语法" aria-label="Permalink to &quot;三、基本使用语法&quot;">​</a></h2><ol><li>注释</li></ol><p>单行注释：// 多行注释：/**/ 。</p><p>单行注释一般用在一行代码上，多行注释一般用在函数上边；</p><p>&quot;;&quot;和回车表示一条语句的结束，</p><ol start="2"><li>js字符串类型可以是双引号也可以是单引号；</li></ol><p>理解：</p><ol><li><p>在script的标签中有错误的代码，错误后面的代码都不执行；</p></li><li><p>一个页面可以使用多个script标签，在一对script的标签里写错了代码，不会影响到其他script标签的代码；</p></li><li><p>script的标准写法：<code>&lt;script type=&quot;text/javascript&quot;&gt;</code>或者写<code>language=&quot;JavaScript&quot;</code>;</p></li><li><p>在html5当中是不需要写这个type的，在严谨的浏览器，需要写上，在不兼容的时候，写上两个都是可以的；</p></li><li><p>不要在引入js的标签里面写任何js代码，可能导致文件js文件加载异常；</p></li><li><p>如果script标签放在html后面，浏览器会自动放进body中的内容最后面；</p></li><li><p>变量的命名规则</p></li><li><p>不能有中划线，需要使用驼峰命名</p></li><li><p>严格区分大小写</p></li><li><p>可以以$符和下划线开头，不能以数字开头</p></li><li><p>不能使用保留字和关键字</p></li><li><p>起有意义的变量名</p></li><li><p>关键字，浏览器当中标签名字也就是关键字，比如script，var；</p></li><li><p>进制</p></li></ol><p>以0开头的值为进制，16进制以0x开头，默认是十进制</p><p>八进制：遇八进1，十六进制，遇十六进1；</p><p>例如：07，表示八进制的7, 10，表示八进制的8；</p><p>0xa 表示十六进制的10；</p><ol start="6"><li>变量</li></ol><p>变量声明，有var，有变量名字，没有值；</p><p>变量初始化，有var，有变量名字有值；</p><p><code>var num=10</code></p><p>可以说是声明变量并初始化--变量的初始化--声明变量赋值；</p><ol start="6"><li>声明变量的方式</li></ol><p>先声明，后赋值 <code>var a; a=12;</code></p><p>声明并赋值：<code>var a=12</code>;</p><p>声明多个变量时：<code>var x,y,z;</code> <code>x=1;y=2;z=3</code>;或<code>var x=1,y=2,z=3</code>；</p><p>声明多个值相同的变量时 <code>var a=b=c=12</code>，只有第一个有var。</p><p>只声明不负值时，变量为<code>undefined</code>;</p><p>变量名不能重复声明，后声明的会覆盖掉前面的声明；</p><ol start="7"><li><p>变量交换：</p></li><li><p>借助第三个变量交换；</p></li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> n</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">a;</span></span>
<span class="line"><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">b;</span></span>
<span class="line"><span style="color:#E1E4E8;">b</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">n;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> n</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">a;</span></span>
<span class="line"><span style="color:#24292E;">a</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">b;</span></span>
<span class="line"><span style="color:#24292E;">b</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">n;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>相加：一般适用于数字交换；</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">b;</span></span>
<span class="line"><span style="color:#E1E4E8;">b</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">b;</span></span>
<span class="line"><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">a</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">b;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">a</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">b;</span></span>
<span class="line"><span style="color:#24292E;">b</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">b;</span></span>
<span class="line"><span style="color:#24292E;">a</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">a</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">b;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="四、简单交互" tabindex="-1">四、简单交互 <a class="header-anchor" href="#四、简单交互" aria-label="Permalink to &quot;四、简单交互&quot;">​</a></h2><ol><li>找到谁</li></ol><p>通过id名获取元素：<code>document.getElementById(&quot;box&quot;)</code>;</p><ol start="2"><li>干什么：</li></ol><p><code>document.getElementById(&quot;box&quot;).onclick = function(){}</code></p><p>通过(by)id获取(get)元素(Element)并声明变量。</p><ol start="3"><li>结果是什么：</li></ol><p><code>document.getElementById(&quot;box&quot;).onclick = function(){alert(1);}</code></p><h2 id="四、获取元素" tabindex="-1">四、获取元素 <a class="header-anchor" href="#四、获取元素" aria-label="Permalink to &quot;四、获取元素&quot;">​</a></h2><ol><li>通过标签名获取元素；</li></ol><p><code>document.getElementsByTagName(&quot;&quot;)</code>;</p><p>获取到的都是类数组；当只有一个类名时，可以直接在括号后加中括号下标；</p><p>获取到数组中的某个具体标签需要加下标，从0开始；</p><ol start="2"><li>通过类名获取元素（IE9+）</li></ol><p><code>document.getElementsByClassName(&quot;&quot;)</code>;</p><p>获取之后也是类数组，</p><p>通过<code>className</code>获取的元素，属于；</p><ol start="3"><li>从父元素通过标签名获取元素：</li></ol><p><code>父元素.getElementsByTagName(&quot;类名&quot;)</code>;</p><p><code>父元素.getElementsByClassName(&quot;&quot;)</code>;</p><ol start="4"><li>通过css选择器来获取元素；</li></ol><p><code>document.querySelector(&quot;css选择器选择&quot;)</code>; 返回的是一个</p><p><code>document.querySelectorAll(&quot;css选择器选择&quot;)</code>； 返回的是一组；</p><p>比如：<code>ul.querySelectorAll(&#39;[title^=&quot;3&quot;]&#39;)</code>; title属性以3开头的；</p><p><code>document</code>也可以是父级元素；</p><p>括号获取和css选择器一样选择，兼容IE8+；</p><ol start="5"><li><p>也可以通过<code>window.id</code>名 也可以获取；</p></li><li><p>现在通过给元素设置id名，可以直接调用事件，不需要获取了；</p></li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;btn1&#39;</span><span style="color:#E1E4E8;">&gt;按钮&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">btn1.</span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    consle.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;11111111111&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;btn1&#39;</span><span style="color:#24292E;">&gt;按钮&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">btn1.</span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    consle.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;11111111111&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="五、鼠标事件" tabindex="-1">五、鼠标事件 <a class="header-anchor" href="#五、鼠标事件" aria-label="Permalink to &quot;五、鼠标事件&quot;">​</a></h2><p><code>元素.事件 = function(){}</code></p><p><code>元素.addEventListener(&#39;事件&#39;, handler)</code></p><ol><li><p>单击事件， <code>onclick</code>，单击触发</p></li><li><p>双击事件， <code>ondblclick</code>，双击触发</p></li><li><p>移入， <code>onmouseover</code>，鼠标移入触发，移入子元素再次触发；</p></li><li><p>移入， <code>onmouseenter</code>，鼠标移入触发，移入子元素不触发，穿过子元素；</p></li><li><p>移出， <code>onmouseout</code>，当鼠标离开时会触发，移入子元素也触发离开；</p></li><li><p>移出 <code>onmouseleave</code>；移入子元素不触发离开；</p></li><li><p>移动 <code>onmousemove</code>；鼠标经过元素每一个点都会触发一次。</p></li><li><p>按下 <code>onmousedown</code>；鼠标按下会触发</p></li><li><p>抬起 <code>onmouseup</code>；鼠标松开会触发；和<code>onmousedown</code>组成一个完整的单击事件；</p></li><li><p>菜单 <code>oncontextmenu</code>；右键触发菜单；</p></li></ol><h2 id="六、操作内容" tabindex="-1">六、操作内容 <a class="header-anchor" href="#六、操作内容" aria-label="Permalink to &quot;六、操作内容&quot;">​</a></h2><ol><li>获取内容</li></ol><p><code>元素.innerHTML</code> 可以识别标签；</p><p><code>元素.innerText</code> 不能识别标签，纯文本；</p><ol start="2"><li>设置</li></ol><p><code>变量.innerHTML = &quot;&quot;</code>; 赋值</p><p><code>变量.innerText = &quot;&quot;</code>; 赋值</p><h2 id="七、表单操作内容" tabindex="-1">七、表单操作内容 <a class="header-anchor" href="#七、表单操作内容" aria-label="Permalink to &quot;七、表单操作内容&quot;">​</a></h2><p>表单有三种，<code>input</code>,<code>textarea</code>,<code>select</code>。</p><ol><li>获取</li></ol><p><code>input.value</code>; 获取的是value值；</p><p><code>textarea.value</code>; 获取的是value值；</p><p><code>select.value</code>；获取的是里面默认被选中的value值；</p><p><code>元素.checked=true</code>；复选框被选中</p><ol start="2"><li>设置</li></ol><p><code>input.value = &quot;&quot;</code>; 改变其中的内容</p><p><code>select.value = &quot;&quot;</code>; 改变默认选中项；</p><h2 id="八、操作元素属性" tabindex="-1">八、操作元素属性 <a class="header-anchor" href="#八、操作元素属性" aria-label="Permalink to &quot;八、操作元素属性&quot;">​</a></h2><ol><li><p>获取</p><p>变量名.属性名。例如:<code>a.href</code>；</p><p>获取类名时：<code>变量名.className</code>; 需要大写；</p></li><li><p>设置</p><p><code>box.id = &quot;obox&quot;</code>;</p><p><code>a.href = &quot;http://baidu.com&quot;</code>;</p><p><code>img.src = &quot;1.jpg&quot;</code>；js外部文件时路劲要以html文件来找；</p></li></ol><h2 id="九、操作元素样式" tabindex="-1">九、操作元素样式 <a class="header-anchor" href="#九、操作元素样式" aria-label="Permalink to &quot;九、操作元素样式&quot;">​</a></h2><ol><li><p>获取</p><p><code>元素.style.属性值</code>；只能获取行内样式；</p></li><li><p>设置</p></li></ol><p>(1)<code>元素.style.属性值 = &quot;&quot;;</code>（设置的样式也都是在行内样式）</p><p>属性值是font-size有中划线的时候，需要fontSize；去掉中划线，第二个单词首字母大写；</p><p>(2)<code>元素.style.cssText = &quot;&quot;</code>; 可以写多个样式；</p><p>(3)<code>元素.style = &quot;&quot;</code>; 可以写多个样式， //行间样式会全部替换掉；分号隔开;</p><p>常用: <code>元素.clssName</code>，写一个类名，使用时添加类名</p><h2 id="六、document-write" tabindex="-1">六、document.write()； <a class="header-anchor" href="#六、document-write" aria-label="Permalink to &quot;六、document.write()；&quot;">​</a></h2><p><code>document.write()</code> 和 innerHTML 的功能类似，操作标签的内容，但是 <code>document.write()</code> 只能操作 body 的内容。</p><p><code>document.write()</code> 和 <code>innerHTML</code> 的区别：</p><ol><li><code>document.write()</code> 可以识别标签。</li><li><code>document.write()</code> 会覆盖标签中已有的内容，但是不会覆盖 document.write() 添加的内容。</li><li><code>document.write()</code> 只能操作 body 的内容。</li><li><code>document.write() == document.body.innerHTML</code>。</li></ol><p>document.writeln 与 document.write的区别：仅仅是writeln多了一个换行符</p><h2 id="十、常用方法" tabindex="-1">十、常用方法 <a class="header-anchor" href="#十、常用方法" aria-label="Permalink to &quot;十、常用方法&quot;">​</a></h2><ol><li><code>document.write()</code>; 在页面添加内容。</li><li><code>prompt()</code>；打开浏览器弹窗输入；</li><li><code>alert</code> 弹窗</li><li><code>console.log(内容)</code> 输出到控制台</li><li><code>+</code>拼接符 可以将前后内容链接起来，组成一串完整的代码；</li><li><code>javascript:void(0)</code>; 写在a标签里面，阻止浏览器刷新，#号也行，点击之后http地址自动多个#，并文字变色；</li></ol><p><code>window.onload = function(){}</code></p><p>当前页面加载完之后再执行函数中的代码</p><p>可以将script写在body内容之上；</p><h2 id="高频面试题" tabindex="-1">高频面试题： <a class="header-anchor" href="#高频面试题" aria-label="Permalink to &quot;高频面试题：&quot;">​</a></h2><p>● 什么是 JavaScript ？</p><p>● JavaScript 与 ECMAScript 的关系？</p><p>● 变量的命名规则？</p><p>● window.onload 的作用？</p><p>● document.write() 与 innerHTML 的区别？</p>`,122),n=[p];function t(c,i,r,d,u,E){return o(),a("div",null,n)}const m=s(l,[["render",t]]);export{h as __pageData,m as default};
