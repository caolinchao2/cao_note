import{_ as e,o as a,c as s,Q as o}from"./chunks/framework.b5309610.js";const g=JSON.parse('{"title":"浏览器技巧","description":"","frontmatter":{},"headers":[],"relativePath":"前端/other-note/浏览器技巧.md","filePath":"前端/other-note/浏览器技巧.md","lastUpdated":1715053679000}'),l={name:"前端/other-note/浏览器技巧.md"},n=o(`<h1 id="浏览器技巧" tabindex="-1">浏览器技巧 <a class="header-anchor" href="#浏览器技巧" aria-label="Permalink to &quot;浏览器技巧&quot;">​</a></h1><h2 id="一、快捷键" tabindex="-1">一、快捷键 <a class="header-anchor" href="#一、快捷键" aria-label="Permalink to &quot;一、快捷键&quot;">​</a></h2><ul><li>ctrl + R ----- 刷新页面</li><li>ctrl + W ------关闭页面</li><li>ctrl + J ----- 打开下载页面</li><li>ctrl + H -----打开历史记录</li><li>ctrl + K ---- 快捷搜索</li><li>ctrl + 1-9 ---- 快速切换tab</li><li>ctrl + shift + T -------打开上一次关闭的页面</li><li>ctrl + shift + J -------打开f12控制台</li><li>ctrl + shift + C ------快速查看元素</li><li>ctrl + shift + delete --- 清除浏览器历史记录</li></ul><p>f12控制台常用快捷键</p><ul><li><p>ctrl + [ | ] ------切换tab栏</p></li><li><p>ctrl + L ------清除控制台</p></li><li><p>ctrl + shift + M ------打开手机浏览</p></li><li><p>ESC ---- 打开控制台底部的控制栏</p><p><img src="https://notecdn.hrhe.cn/images/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8A%80%E5%B7%A7-01.png" alt="image"></p></li></ul><h2 id="二、小技巧" tabindex="-1">二、小技巧 <a class="header-anchor" href="#二、小技巧" aria-label="Permalink to &quot;二、小技巧&quot;">​</a></h2><ul><li><p>通过按ctrl+shfit+c可以选中浮动的元素；</p></li><li><p>打开f12，在elments，按下ctrl+f，可以通过输入选择器来找到选择到的元素；</p></li><li><p>可以通过双击盒模型直接修改border、margin值；</p></li><li><p>在style编辑面板中</p><ul><li><p>上方向键 / 下方向键可以使属性值以 1 递增 / 递减</p></li><li><p>ALT + 上方向键 / 下方向键可以使属性值以 0.1 递增 / 递减</p></li><li><p>SHIFT + 上方向键 / 下方向键可以使属性值以 10 递增 / 递减</p></li><li><p>CTRL + 上方向键 / 下方向键可以使属性值以 100 递增 / 递减</p></li></ul></li><li><p>在f12中，通过按住shfit点击颜色，可以切换颜色的显示值；</p></li><li><p>获取hover tips方法</p><ul><li>打开控制台，切换到source tab</li><li>按暂停代码，由于hover中没法按，可以使用快捷键command+F8</li></ul></li></ul><h2 id="三、console的用法" tabindex="-1">三、console的用法 <a class="header-anchor" href="#三、console的用法" aria-label="Permalink to &quot;三、console的用法&quot;">​</a></h2><h3 id="console对象的所有属性" tabindex="-1">console对象的所有属性 <a class="header-anchor" href="#console对象的所有属性" aria-label="Permalink to &quot;console对象的所有属性&quot;">​</a></h3><p><img src="https://notecdn.hrhe.cn/images/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8A%80%E5%B7%A7-02.png" alt="image"></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;信息是：%s&#39;</span><span style="color:#E1E4E8;">,str)；可以直接将str变量放进</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">s位置；</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">()：清空控制台</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">assert</span><span style="color:#E1E4E8;">(v, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 当v为假时,输出后面的字符串,否则无输出</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">table</span><span style="color:#E1E4E8;">()：以table形式输出对象</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">group</span><span style="color:#E1E4E8;">()：以分组形式输出</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">()：以warn形式输出</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">()：以error形式输出</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">count</span><span style="color:#E1E4E8;">()：统计代码被执行的次数</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">trace</span><span style="color:#E1E4E8;">()：显示当前执行的堆栈调用路径,放在最后一个调用的函数中；</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">time</span><span style="color:#E1E4E8;">()：用来计时一个方法运行多长时间，使用timeEnd来结束；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">time</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;func&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">timeEnd</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;func&#39;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 里面名字需要填写一样的;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">dir</span><span style="color:#E1E4E8;">()：直观的展示一个对象的所有属性和方法</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;信息是：%s&#39;</span><span style="color:#24292E;">,str)；可以直接将str变量放进</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">s位置；</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">clear</span><span style="color:#24292E;">()：清空控制台</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">assert</span><span style="color:#24292E;">(v, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 当v为假时,输出后面的字符串,否则无输出</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">table</span><span style="color:#24292E;">()：以table形式输出对象</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">group</span><span style="color:#24292E;">()：以分组形式输出</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">warn</span><span style="color:#24292E;">()：以warn形式输出</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">()：以error形式输出</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">count</span><span style="color:#24292E;">()：统计代码被执行的次数</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">trace</span><span style="color:#24292E;">()：显示当前执行的堆栈调用路径,放在最后一个调用的函数中；</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">time</span><span style="color:#24292E;">()：用来计时一个方法运行多长时间，使用timeEnd来结束；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">time</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;func&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">timeEnd</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;func&#39;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 里面名字需要填写一样的;</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">dir</span><span style="color:#24292E;">()：直观的展示一个对象的所有属性和方法</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><strong>console.dir</strong></p><p>当输出dom元素时，显示的是dom元素的对象属性，当console.log则是标签；</p><p><img src="https://notecdn.hrhe.cn/images/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8A%80%E5%B7%A7-03.png" alt="image"></p><p><strong>console.table()</strong></p><p>第一个可以传入对象或数组，第二个参数可选，可以单独放入想要展示的内容；</p><p><img src="https://notecdn.hrhe.cn/images/console_table.gif" alt="img"></p><h3 id="符的用法" tabindex="-1">$符的用法 <a class="header-anchor" href="#符的用法" aria-label="Permalink to &quot;$符的用法&quot;">​</a></h3><p>console里面可以直接使用$符获取元素，跟jquery操作方式一样，</p><ul><li>$：相当于querySelector，获取元素</li><li>$$：相当于querySelectorAll，获取一组元素</li><li>$0-4：获取最近5个选择过的dom节点</li><li>$_：返回最近一次表达式执行的结果</li></ul><p>其他简写：</p><ul><li>dir、keys、values</li></ul><p><img src="https://notecdn.hrhe.cn/images/about$01.gif" alt="image"></p><h3 id="copy" tabindex="-1">copy <a class="header-anchor" href="#copy" aria-label="Permalink to &quot;copy&quot;">​</a></h3><p><code>copy(document.body)</code>，将获取到的内容复制到剪贴板，可以粘贴到任意地方</p><p>鼠标对对象使用右键 Store as global variable，可以直接将一个对象给复制到剪贴板</p><p><img src="https://notecdn.hrhe.cn/images/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8A%80%E5%B7%A7-11.gif" alt="image"></p><h3 id="monitor-事件监听" tabindex="-1">monitor 事件监听 <a class="header-anchor" href="#monitor-事件监听" aria-label="Permalink to &quot;monitor 事件监听&quot;">​</a></h3><p><code>monitor</code> &amp; <code>unmonitor</code>，接收一个函数名作为参数，当该函数被执行，就会被监听到，unmonitor用来停止监听的；</p><p><img src="https://notecdn.hrhe.cn/images/image-20200629144106288.png" alt="image-20200629144106288"></p><h3 id="monitorevents-事件监控" tabindex="-1">monitorEvents 事件监控 <a class="header-anchor" href="#monitorevents-事件监控" aria-label="Permalink to &quot;monitorEvents 事件监控&quot;">​</a></h3><p><code>monitorEvents</code>&amp;<code>unmonitorEvents</code>，一个为监控事件，一个为解除监听，第一个参数为选中的元素，第二个参数为事件，也可以是数组</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">monitorEvents</span><span style="color:#E1E4E8;">(window, </span><span style="color:#9ECBFF;">&#39;resize&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">monitorEvents</span><span style="color:#E1E4E8;">(window, [</span><span style="color:#9ECBFF;">&#39;resize&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;scroll&#39;</span><span style="color:#E1E4E8;">])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">monitorEvents</span><span style="color:#24292E;">(window, </span><span style="color:#032F62;">&#39;resize&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">monitorEvents</span><span style="color:#24292E;">(window, [</span><span style="color:#032F62;">&#39;resize&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;scroll&#39;</span><span style="color:#24292E;">])</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>第二个参数也可以放入类型；</p><table><thead><tr><th>类型</th><th>事件</th></tr></thead><tbody><tr><td>mouse</td><td>&quot;mousedown&quot;, &quot;mouseup&quot;, &quot;click&quot;, &quot;dblclick&quot;, &quot;mousemove&quot;, &quot;mouseover&quot;, &quot;mouseout&quot;, &quot;mousewheel&quot;</td></tr><tr><td>key</td><td>&quot;keydown&quot;, &quot;keyup&quot;, &quot;keypress&quot;, &quot;textInput&quot;</td></tr><tr><td>touch</td><td>&quot;touchstart&quot;, &quot;touchmove&quot;, &quot;touchend&quot;, &quot;touchcancel&quot;</td></tr><tr><td>control</td><td>&quot;resize&quot;, &quot;scroll&quot;, &quot;zoom&quot;, &quot;focus&quot;, &quot;blur&quot;, &quot;select&quot;, &quot;change&quot;, &quot;submit&quot;, &quot;reset&quot;</td></tr></tbody></table><h3 id="json-stringify来输出格式" tabindex="-1">JSON.stringify来输出格式 <a class="header-anchor" href="#json-stringify来输出格式" aria-label="Permalink to &quot;JSON.stringify来输出格式&quot;">​</a></h3><p>使用它的第三个参数，让显示更有格式化效果；</p><p><img src="https://notecdn.hrhe.cn/images/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8A%80%E5%B7%A7-04.png" alt="image"></p><h3 id="对象需要展开" tabindex="-1">对象需要展开 <a class="header-anchor" href="#对象需要展开" aria-label="Permalink to &quot;对象需要展开&quot;">​</a></h3><p>当查看对象的时候，需要展开才能查看，大大的影响开发效力</p><p><img src="https://notecdn.hrhe.cn/images/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8A%80%E5%B7%A7-09.png" alt="image"></p><p>原因：(...)是get/set类的属性，点击后出现是当前的值，不一定输出log的时候的值，如果想直接看log时的值，需要<code>console.log(JSON.parse(JSON.stringify($var)))</code>；</p><h3 id="页面跳转保留控制台输出" tabindex="-1">页面跳转保留控制台输出 <a class="header-anchor" href="#页面跳转保留控制台输出" aria-label="Permalink to &quot;页面跳转保留控制台输出&quot;">​</a></h3><p>一般用于调试跳转之后输出的内容；</p><p>点击右侧小齿轮，之后开启Preserve log即可；</p><p><img src="https://notecdn.hrhe.cn/images/image-20200805101534220.png" alt="image-20200805101534220"></p><h2 id="四、断点篇" tabindex="-1">四、断点篇 <a class="header-anchor" href="#四、断点篇" aria-label="Permalink to &quot;四、断点篇&quot;">​</a></h2><h3 id="快捷键" tabindex="-1">快捷键 <a class="header-anchor" href="#快捷键" aria-label="Permalink to &quot;快捷键&quot;">​</a></h3><ul><li><p><code>f8</code> 过程执行，跳过当前断点继续执行（对循环特别有用，可以跳到下一次循环断点处，直接点击页面上的绿色按钮）</p></li><li><p><code>f10</code> 逐步执行，它会忽略方法体内部，</p></li><li><p><code>f11</code> 细节语句执行，进入方法体内部</p></li><li><p><code>shift + f11</code> 细节语句返回主体函数</p></li></ul><h3 id="element元素断点" tabindex="-1">element元素断点 <a class="header-anchor" href="#element元素断点" aria-label="Permalink to &quot;element元素断点&quot;">​</a></h3><p><img src="https://notecdn.hrhe.cn/images/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8A%80%E5%B7%A7-05.png" alt="image"></p><ul><li>subtree moditications：当添加改变删除元素时触发</li><li>Attribute modifications：元素属性改变时触发</li><li>Node removal：移除这个dom元素时触发</li></ul><p>当通过js操作时，会被跳到当前断点；</p><h3 id="黑匣子" tabindex="-1">黑匣子 <a class="header-anchor" href="#黑匣子" aria-label="Permalink to &quot;黑匣子&quot;">​</a></h3><p>当我们打断点时，会跳到源码里面绕一大圈，最终找不到我们想要的东西，无法很快定位到错误的地方，chrome提供了一个黑匣子（黑名单），在源码文件点击之后，下次跳转就不会进来了；</p><p><img src="https://notecdn.hrhe.cn/images/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8A%80%E5%B7%A7-06.png" alt="image"></p><p>还可以到设置中，可以自己加需要忽略的库或文件</p><p><img src="https://notecdn.hrhe.cn/images/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8A%80%E5%B7%A7-07.png" alt="image"></p><p><img src="https://notecdn.hrhe.cn/images/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8A%80%E5%B7%A7-08.png" alt="image"></p><p>将以下两个加入到黑匣子，可以解决大部分断点跳插件的问题</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">node_modules</span></span>
<span class="line"><span style="color:#E1E4E8;">\\.min</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">node_modules</span></span>
<span class="line"><span style="color:#24292E;">\\.min</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="xhr-fetch断点" tabindex="-1">xhr/fetch断点 <a class="header-anchor" href="#xhr-fetch断点" aria-label="Permalink to &quot;xhr/fetch断点&quot;">​</a></h3><p><img src="https://notecdn.hrhe.cn/images/add_new_request_breakpoint.png" alt="img"></p><p>也可以直接对network进行断点</p><p><img src="https://notecdn.hrhe.cn/images/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_15959047639023.png" alt="img"></p><h2 id="五、浏览器插件分享" tabindex="-1">五、浏览器插件分享 <a class="header-anchor" href="#五、浏览器插件分享" aria-label="Permalink to &quot;五、浏览器插件分享&quot;">​</a></h2><ol><li><a href="https://chrome.google.com/webstore/detail/github-hovercard/mmoahbbnojgkclgceahhakhnccimnplk" target="_blank" rel="noreferrer">GitHub Hovercard</a> github增加头像查看author，支持多种悬浮窗</li><li><a href="https://chrome.google.com/webstore/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb" target="_blank" rel="noreferrer">Adblock Plus</a> 谷歌广告拦截</li><li><a href="https://chrome.google.com/webstore/detail/astar-vpn-free-and-fast-v/jajilbjjinjmgcibalaakngmkilboobh?utm_source=chrome-ntp-icon" target="_blank" rel="noreferrer">Astar</a> 免费翻墙，可看youtube</li><li><a href="https://chrome.google.com/webstore/detail/download-plus/gokgophibdidjjpildcdbfpmcahilaaf?utm_source=chrome-ntp-icon" target="_blank" rel="noreferrer">下载+</a> 下载管理工具</li><li><a href="https://www.octotree.io/" target="_blank" rel="noreferrer">octotree</a> github左侧固定文件树</li><li><a href="https://chrome.google.com/webstore/detail/gitako-github-file-tree/giljefjcheohhamkjphiebfjnlphnokk/related" target="_blank" rel="noreferrer">gitako</a> 也是文件树，还支持代码折叠</li><li><a href="https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp/related?hl=zh-CN" target="_blank" rel="noreferrer">OctoLinker</a> github代码支持点击路径跳转，支持package.json点击到对应仓库</li><li><a href="https://chrome.google.com/webstore/detail/octohint/hbkpjkfdheainjkkebeoofkpgddnnbpk" target="_blank" rel="noreferrer">Octohint</a> github按住方法跳转，还支持类型显示</li><li><a href="https://chrome.google.com/webstore/detail/ajax-interceptor/nhpjggchkhnlbgdfcbgpdpkifemomkpg" target="_blank" rel="noreferrer">Ajax Interceptor</a> 修改后端接口响应值</li><li><a href="https://chrome.google.com/webstore/detail/xswitch/idkjhjggpffolpidfkikidcokdkdaogg" target="_blank" rel="noreferrer">XSwitch</a> 地址转发请求</li><li><a href="https://chrome.google.com/webstore/detail/material-icons-for-github/bggfcpfjbdkhfhfmkjpbhnkhnpjjeomc/related?hl=zh-CN" target="_blank" rel="noreferrer">Material Icons for GitHub</a> github版的文件图标</li><li><a href="https://chrome.google.com/webstore/detail/smartup-gestures/bgjfekefhjemchdeigphccilhncnjldn" target="_blank" rel="noreferrer">smartUp手势</a> 增加鼠标右键支持快捷操作</li><li><a href="https://extension.yunpanjingling.com/" target="_blank" rel="noreferrer">云盘万能钥匙</a> 自动输入百度网盘密钥</li><li><a href="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo" target="_blank" rel="noreferrer">Tampermonkey 油猴</a> 支持安装更多的插件插入脚本，非常好用</li><li><a href="https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo" target="_blank" rel="noreferrer">Infinity 新标签页</a> 新增标签添加快速访问，支持书签关键字搜索</li><li><a href="https://chrome.google.com/webstore/detail/pesticide-for-chrome/bblbgcheenepgnnajgfpiicnbbdmmooh" target="_blank" rel="noreferrer">Pesticide</a> 快速查看页面布局信息</li><li><a href="https://chrome.google.com/webstore/detail/%E4%B8%80%E9%94%AE%E7%AE%A1%E7%90%86%E6%89%A9%E5%B1%95/lboblnfejcmcaplhnbkkfcienhlhpnni" target="_blank" rel="noreferrer">一键管理扩展</a> 当扩展过多时，使用该插件非常方便</li><li><a href="https://chrome.google.com/webstore/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm" target="_blank" rel="noreferrer">Talend API</a> 浏览器版本的Postman</li></ol><h3 id="i-浏览器使用npm插件" tabindex="-1">$i 浏览器使用npm插件 <a class="header-anchor" href="#i-浏览器使用npm插件" aria-label="Permalink to &quot;$i 浏览器使用npm插件&quot;">​</a></h3><p>安装地址：<a href="https://chrome.google.com/webstore/detail/console-importer/hgajpakhafplebkdljleajgbpdmplhie/related" target="_blank" rel="noreferrer">Console Importer</a></p><p><img src="https://notecdn.hrhe.cn/images/dayjs-demo.gif" alt="image"></p><h2 id="六、codebox" tabindex="-1">六、codebox <a class="header-anchor" href="#六、codebox" aria-label="Permalink to &quot;六、codebox&quot;">​</a></h2><p>在浏览器快速写代码，可以按ctrl+enter即可进行输出了；</p><p><img src="https://notecdn.hrhe.cn/images/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8A%80%E5%B7%A7-12.png" alt="image-20200601141945879"></p><h2 id="七、修改devtools默认主题" tabindex="-1">七、修改devtools默认主题 <a class="header-anchor" href="#七、修改devtools默认主题" aria-label="Permalink to &quot;七、修改devtools默认主题&quot;">​</a></h2><ol><li>地址输入url：<code>chrome://flags/#enable-devtools-experiments</code>，搜索Developer Tools experiments并启用；</li><li>控制台中使用<code>F1</code>打开设置，切换到<code>Experiments</code>选项，启用<code>Allow custom UI themes</code></li><li>从chrome商店搜索安装：<code>Material DevTools Theme Collection</code> 扩展程序，之后选择喜欢的主题进行重启即可；（如果选中的是带Dark的主题，需要切换对应的默认主题，在<code>settings</code>--&gt;<code>preferences</code>--&gt;<code>theme</code>选项卡；</li></ol><p><img src="https://notecdn.hrhe.cn/images/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8A%80%E5%B7%A7-13.png" alt="image-20200601142707823"></p><h2 id="其他技巧" tabindex="-1">其他技巧 <a class="header-anchor" href="#其他技巧" aria-label="Permalink to &quot;其他技巧&quot;">​</a></h2><ol><li>选中节点之后，点击Event Listeners，可以查看当前元素包括冒泡的所有事件，取消勾选Ancestors All之后，可以查看当前元素的所有事件</li></ol><p><img src="https://notecdn.hrhe.cn/images/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8A%80%E5%B7%A7-10.png" alt="image"></p><h2 id="摘抄地址" tabindex="-1">摘抄地址 <a class="header-anchor" href="#摘抄地址" aria-label="Permalink to &quot;摘抄地址&quot;">​</a></h2><ol><li><a href="https://blog.csdn.net/xiaofeng19930727/article/details/80402818" target="_blank" rel="noreferrer">CSDN</a></li><li><a href="https://segmentfault.com/a/1190000002511877" target="_blank" rel="noreferrer">segmentfault</a><a href="https://segmentfault.com/q/1010000018895611" target="_blank" rel="noreferrer">查看对象</a></li><li><a href="https://developers.google.com/web/tools/chrome-devtools/console" target="_blank" rel="noreferrer">官网</a></li><li><a href="https://juejin.im/post/5ec338436fb9a0432d76e0c4" target="_blank" rel="noreferrer">Chrome DevTools中的这些骚操作，你都知道吗？</a></li><li><a href="https://www.frontendwingman.com/Chrome/" target="_blank" rel="noreferrer">frontendwingman</a></li></ol>`,81),t=[n];function r(p,c,i,h,d,m){return a(),s("div",null,t)}const u=e(l,[["render",r]]);export{g as __pageData,u as default};
