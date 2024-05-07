import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.b5309610.js";const h=JSON.parse('{"title":"js-13 cookie","description":"","frontmatter":{},"headers":[],"relativePath":"前端/Javascript/js-13 cookie.md","filePath":"前端/Javascript/js-13 cookie.md","lastUpdated":null}'),e={name:"前端/Javascript/js-13 cookie.md"},l=o(`<h1 id="js-13-cookie" tabindex="-1">js-13 cookie <a class="header-anchor" href="#js-13-cookie" aria-label="Permalink to &quot;js-13 cookie&quot;">​</a></h1><h2 id="一、cookie" tabindex="-1">一、cookie <a class="header-anchor" href="#一、cookie" aria-label="Permalink to &quot;一、cookie&quot;">​</a></h2><p>保存页面中的信息，比如用户名、密码等；比较小，只有4kb；</p><p>不同浏览器的cookie是不相通的；</p><p>谷歌浏览器的cookie不允许访问本地的cookie，只允许访问网上的，而火狐和ie可以访问本地的；</p><h3 id="cookie机制" tabindex="-1">cookie机制 <a class="header-anchor" href="#cookie机制" aria-label="Permalink to &quot;cookie机制&quot;">​</a></h3><p>如果不在浏览器中设置过期时间，cookie被保存在内存中，生命周期随浏览器的关闭而结束，这种cookie简称会话cookie。</p><p>如果设置cookie的过期时间，cookie被 保存在硬盘中，关闭浏览器后，cookie数据仍然存在，直到过期时间结束才消失。</p><h3 id="操作方式" tabindex="-1">操作方式 <a class="header-anchor" href="#操作方式" aria-label="Permalink to &quot;操作方式&quot;">​</a></h3><ul><li>存储：<code>document.cookie = &quot;key=value&quot;;</code> 设置临时存储，键值对；</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">document.cookie </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;key=12;expires=&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> 字符串格式时间；有过期时间；</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">document.cookie </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;key=12;expires=&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> 字符串格式时间；有过期时间；</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>date.setSeconds()；设置秒，可以设置所有时间；</p><ul><li><p>读取：<code>document.cookie</code>；获取的是字符串，中间用分号和空格分开的；</p></li><li><p>删除：将过期时间设置成负数；</p></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> date </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">date.</span><span style="color:#B392F0;">setDate</span><span style="color:#E1E4E8;">(date.</span><span style="color:#B392F0;">getDate</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);  </span><span style="color:#6A737D;">//设置10天以后过期；</span></span>
<span class="line"><span style="color:#E1E4E8;">date.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">//10天以后的字符串格式时间</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> date </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">date.</span><span style="color:#6F42C1;">setDate</span><span style="color:#24292E;">(date.</span><span style="color:#6F42C1;">getDate</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);  </span><span style="color:#6A737D;">//设置10天以后过期；</span></span>
<span class="line"><span style="color:#24292E;">date.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">//10天以后的字符串格式时间</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="cookie和session的区别" tabindex="-1">cookie和session的区别 <a class="header-anchor" href="#cookie和session的区别" aria-label="Permalink to &quot;cookie和session的区别&quot;">​</a></h3><ul><li>（1）(失效) Session 会在浏览器关闭之后失效，Cookie 则可以在理论上永久有效(设置过期时间)。</li><li>（2）(存放) Cookie 数据存放在客户的浏览器上， Session 数据存放在服务器上。</li><li>（3）(黑客) Cookie 不安全，黑客可以分析本地的 Cookie, 并进行 Cookie 欺骗。 而 Session 保存在远程服务器上，相对安全（重要的信息应该存在session）;</li><li>（4）(限制) Cookie有大小限制，一般是4KB。 域名20-50个以内，Session 则没有这方面的限制。</li><li>（5）(禁用) 浏览器的设置可能禁用 Cookie，这时所有关于 Cookie 的应用都将失败，但是 Session 却永远不会有这个问题；</li></ul><h3 id="session与cookie的联系" tabindex="-1">session与cookie的联系 <a class="header-anchor" href="#session与cookie的联系" aria-label="Permalink to &quot;session与cookie的联系&quot;">​</a></h3><p>​ Session 依赖 cookie，因为 session id 存在客户端。</p><h2 id="二、js-cookie操作方式" tabindex="-1">二、js-cookie操作方式 <a class="header-anchor" href="#二、js-cookie操作方式" aria-label="Permalink to &quot;二、js-cookie操作方式&quot;">​</a></h2><ol><li>安装：<code>npm i js-cookie</code></li><li>用法：</li></ol><p>在项目中引入：import Cookie from &#39;js-cookie&#39;</p><p>（1）<code>Cookie.set(&#39;name&#39;,&#39;value&#39;, {expires: 7， path:&#39;&#39;})</code>，name和value不可少</p><p>（2）<code>Cookie.get(&#39;name&#39;, {domain: &#39;sub.example.com&#39;})</code>，name不可少</p><p>（3）<code>Cookie.remove(&#39;name&#39;, {path: &#39;&#39;,domain: &#39;&#39;})</code>，name不可少</p><ol start="3"><li>解决命名空间冲突问题</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Cookies2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cookies.</span><span style="color:#B392F0;">noConflict</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">Cookies2.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Cookies2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cookies.</span><span style="color:#6F42C1;">noConflict</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">Cookies2.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4"><li>安全</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 需要使用https才有效</span></span>
<span class="line"><span style="color:#E1E4E8;">Cookies.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">,{secure: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 需要使用https才有效</span></span>
<span class="line"><span style="color:#24292E;">Cookies.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">,{secure: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="5"><li>设置默认值</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">api</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cookies.</span><span style="color:#B392F0;">withAttributes</span><span style="color:#E1E4E8;">({path: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">, domain: </span><span style="color:#9ECBFF;">&#39;.example.com&#39;</span><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">api</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cookies.</span><span style="color:#6F42C1;">withAttributes</span><span style="color:#24292E;">({path: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">, domain: </span><span style="color:#032F62;">&#39;.example.com&#39;</span><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="6"><li>控制读写</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> cookie </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Cookies.</span><span style="color:#B392F0;">withConverter</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 读</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">read</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(name </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;escaped&#39;</span><span style="color:#E1E4E8;">){}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Cookies.converter.</span><span style="color:#B392F0;">read</span><span style="color:#E1E4E8;">(value, name)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 写</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">write</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> value.</span><span style="color:#B392F0;">toUpperCase</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 之后使用cookie对象来进行读写操作</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> cookie </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Cookies.</span><span style="color:#6F42C1;">withConverter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 读</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">read</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">value</span><span style="color:#24292E;">, </span><span style="color:#E36209;">name</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(name </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;escaped&#39;</span><span style="color:#24292E;">){}</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Cookies.converter.</span><span style="color:#6F42C1;">read</span><span style="color:#24292E;">(value, name)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 写</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">write</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">, </span><span style="color:#E36209;">name</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> value.</span><span style="color:#6F42C1;">toUpperCase</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 之后使用cookie对象来进行读写操作</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="三、web-storage-html5" tabindex="-1">三、web Storage（HTML5） <a class="header-anchor" href="#三、web-storage-html5" aria-label="Permalink to &quot;三、web Storage（HTML5）&quot;">​</a></h2><h3 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h3><p><code>localStorage</code>的储存没有时间限制，永久保存，除非主动删除；</p><p><code>sessionStorage</code>用于临时保存同一窗口(或标签页)的数据，在关闭窗口之后将会删除这些数据；</p><p>兼容：ie8+</p><h3 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h3><p>（1）生命周期：</p><ul><li><p>localStorage：永久的，关闭浏览器都不会消失，除非主动删除数据；</p></li><li><p>sessionStorage：仅在当前会话下有效，只要窗口没关闭，数据永远存在，刷新页面都在；两个窗口的sessionStorage数据是不一样的；</p></li></ul><p>（2）存储大小：两者都是5MB；</p><p>（3）存储位置：都保存在客户端，不与服务器进行交互通信；</p><p>（4）存储类型：仅支持字符串类型，对象数组需要使用JSON对象的stringify和parse处理；</p><p>（5）应用场景：</p><ul><li>localStorage：常用于长期登录，适合长期保存在本地的数据；</li><li>sessionStorage：敏感账号一次性登录；</li></ul><h3 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h3><p>localStorage和sessionStorage使用方法一致；</p><ol><li>储存：<code>setItem(key, value)</code></li><li>获取：<code>getItem(key)</code></li><li>删除：<code>removeItem(key)</code></li><li>清空：<code>clear()</code>；</li><li>索引：<code>key(index)</code> 可以通过索引获取；</li></ol><p>除了以上方式，还支持点的方式或中括号方式：</p><p>设置：localStorage.age = 18</p><p>获取：localStorage.age</p><p>当储存的值是对象或者数组时：</p><p>储存：<code>localStorage.setItem(&#39;test&#39;,JSON.stringify({id:1,age:18})</code>；</p><p>取值：<code>JSON.parse(localStorage.getItem(&#39;test&#39;)</code>；</p><h2 id="高频面试题" tabindex="-1">高频面试题 <a class="header-anchor" href="#高频面试题" aria-label="Permalink to &quot;高频面试题&quot;">​</a></h2><p>● 使用正则表达式验证邮箱。</p><p>● 请用 js 去除字符串空格 var str = “ fdf er re545 6565 2fdfd ”</p><p>● 判断字符串是否是这样组成的。第一个字符必须是字母，后面可以是字母、数字、下划线，总长度 5-20。</p><p>● cookie 的利弊？</p><p>● 封装一个获取 cookie 的函数。</p>`,60),p=[l];function c(t,r,i,E,y,d){return a(),n("div",null,p)}const k=s(e,[["render",c]]);export{h as __pageData,k as default};
