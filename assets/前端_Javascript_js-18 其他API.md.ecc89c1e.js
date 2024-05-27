import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b5309610.js";const b=JSON.parse('{"title":"js-18 其他API","description":"","frontmatter":{},"headers":[],"relativePath":"前端/Javascript/js-18 其他API.md","filePath":"前端/Javascript/js-18 其他API.md","lastUpdated":1715053679000}'),p={name:"前端/Javascript/js-18 其他API.md"},e=l(`<h1 id="js-18-其他api" tabindex="-1">js-18 其他API <a class="header-anchor" href="#js-18-其他api" aria-label="Permalink to &quot;js-18 其他API&quot;">​</a></h1><h2 id="一、intersectionobserver" tabindex="-1">一、IntersectionObserver <a class="header-anchor" href="#一、intersectionobserver" aria-label="Permalink to &quot;一、IntersectionObserver&quot;">​</a></h2><p>判断元素是否在可视区域</p><ol><li><p>用法</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> io </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IntersectionObserver</span><span style="color:#E1E4E8;">(callback[,option])</span></span>
<span class="line"><span style="color:#6A737D;">// 开始观察</span></span>
<span class="line"><span style="color:#E1E4E8;">io.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.example&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#6A737D;">// 停止观察</span></span>
<span class="line"><span style="color:#E1E4E8;">io.</span><span style="color:#B392F0;">unobserve</span><span style="color:#E1E4E8;">(element)</span></span>
<span class="line"><span style="color:#6A737D;">// 关闭观察</span></span>
<span class="line"><span style="color:#E1E4E8;">io.</span><span style="color:#B392F0;">disconnect</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 返回所有监听的目标元素集合</span></span>
<span class="line"><span style="color:#E1E4E8;">io.</span><span style="color:#B392F0;">takeRecords</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> io </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IntersectionObserver</span><span style="color:#24292E;">(callback[,option])</span></span>
<span class="line"><span style="color:#6A737D;">// 开始观察</span></span>
<span class="line"><span style="color:#24292E;">io.</span><span style="color:#6F42C1;">observe</span><span style="color:#24292E;">(document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.example&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#6A737D;">// 停止观察</span></span>
<span class="line"><span style="color:#24292E;">io.</span><span style="color:#6F42C1;">unobserve</span><span style="color:#24292E;">(element)</span></span>
<span class="line"><span style="color:#6A737D;">// 关闭观察</span></span>
<span class="line"><span style="color:#24292E;">io.</span><span style="color:#6F42C1;">disconnect</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 返回所有监听的目标元素集合</span></span>
<span class="line"><span style="color:#24292E;">io.</span><span style="color:#6F42C1;">takeRecords</span><span style="color:#24292E;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>（1）callback可见性变化时的回调函数，options是参数配置对象，可选</p><p>（2）如果需要观察多个节点，直接调用多次observe即可；</p></li><li><p>callback参数用法</p><p>目标元素的可见性变化时就会立即调用该函数</p><p>一般触发两次callback，一次是目标元素进入视口，一次是完全离开视口</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> io </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IntersectionObserver</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entries</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(entries)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> io </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IntersectionObserver</span><span style="color:#24292E;">(</span><span style="color:#E36209;">entries</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(entries)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>（1）监听一个</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> io </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">IntersectionObserver</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">entries</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> item </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> entries[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 是一个数组, 只有一个元素</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 添加最后一个元素</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(item.isIntersecting){</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(滚动到底部了, 可以请求数据了)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.reference&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">// 参照元素</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> io </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">IntersectionObserver</span><span style="color:#24292E;">(</span><span style="color:#E36209;">entries</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> item </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> entries[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#6A737D;">// 是一个数组, 只有一个元素</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 添加最后一个元素</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(item.isIntersecting){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(滚动到底部了, 可以请求数据了)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">observe</span><span style="color:#24292E;">(document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.reference&#39;</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">// 参照元素</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p><code>IntersectionObserverEntry</code>对象属性</p><ul><li><code>boundingClientRect</code> 目标元素的矩形信息</li><li><code>intersectionRatio</code> 相交区域和目标元素的比例值 intersectionRect/boundingClientRect 不可见时小于等于0</li><li><code>intersectionRect</code> 目标元素和视窗（根）相交的矩形信息 可以称为相交区域</li><li><code>isIntersecting</code> 目标元素当前是否可见 Boolean值 可见为true</li><li><code>rootBounds</code> 根元素的矩形信息，没有指定根元素就是当前视窗的矩形信息</li><li><code>target</code> 观察的目标元素</li><li><code>time</code> 返回一个记录从IntersectionObserver的时间到交叉被触发的时间的时间戳</li></ul><p><code>intersectionRatio</code>和isIntersecting用来判断元素是否在可视区域</p></li><li><p>options对象的配置</p><p>（1）<code>root：null</code> 观察根元素，默认浏览器视口，指定元素的时候用于观察元素必须是指定元素的子元素</p><p>（2）<code>threshold</code>:[0,0.5,1] 一个数组，触发callback的时机</p><p>（3）<code>rootMargin</code>: &#39;30px 100px 20px&#39;； 用来扩大或者缩小视察的大小，使用css的定义方法</p></li><li><p>兼容性</p></li></ol><p>官方polyfill： <a href="https://github.com/w3c/IntersectionObserver/tree/master/polyfill" target="_blank" rel="noreferrer">https://github.com/w3c/IntersectionObserver/tree/master/polyfill</a></p><h2 id="二、mutationobserver-监视dom变动" tabindex="-1">二、MutationObserver 监视DOM变动 <a class="header-anchor" href="#二、mutationobserver-监视dom变动" aria-label="Permalink to &quot;二、MutationObserver 监视DOM变动&quot;">​</a></h2><h3 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h3><ul><li>监视dom发生变动时，MutationObserver将收到通知并触发事先设定好的回调函数；</li><li>MutationObserver是异步触发的，为了避免dom频繁变动导致回调函数被频繁调用，造成浏览器卡顿；</li></ul><h3 id="mutationobserver" tabindex="-1">MutationObserver <a class="header-anchor" href="#mutationobserver" aria-label="Permalink to &quot;MutationObserver&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> observer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MutationObserver</span><span style="color:#E1E4E8;">(callback);</span></span>
<span class="line"><span style="color:#E1E4E8;">callback接收两个参数，第一个参数包含了所有mutationRecord对象的数组，第二个是MutationObserver实例本身；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> observer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MutationObserver</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mutations</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">observer</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    mutations.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">mutation</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(mutation, </span><span style="color:#9ECBFF;">&#39;mutation&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> observer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MutationObserver</span><span style="color:#24292E;">(callback);</span></span>
<span class="line"><span style="color:#24292E;">callback接收两个参数，第一个参数包含了所有mutationRecord对象的数组，第二个是MutationObserver实例本身；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> observer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MutationObserver</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">mutations</span><span style="color:#24292E;">, </span><span style="color:#E36209;">observer</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    mutations.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">mutation</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(mutation, </span><span style="color:#032F62;">&#39;mutation&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h3><p><strong>observe</strong></p><ul><li><p>第一个参数：所要观察的dom节点</p></li><li><p>第二个参数：一个配置对象，指定所要观察的特定变动</p><ul><li>childList：子节点的变动（新增、删除或更改）</li><li>attributes：属性的变动；</li><li>characterData：节点内容或节点文本的变动；</li><li>subtree：是否监听该节点的所有后代节点</li><li>attributeOldValue：观察attributes变动时，是否需要记录变动前的值；</li><li>characterDataOldValue：观察characterData时，是否需要记录变动前的值；</li><li>attributeFilter：数组，表示需要观察特定的属性（如：[&#39;class&#39;, &#39;src&#39;]）</li></ul></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> article </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;article&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> options </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    childList: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    attributes: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">observer.</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(article, options)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> article </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;article&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> options </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    childList: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    attributes: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">observer.</span><span style="color:#6F42C1;">observe</span><span style="color:#24292E;">(article, options)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>注意：childList、attributes、characterData三者必须选其一或多个，否则报错；</p><p>对节点添加了observe就像添加了addEventListener一样，当添加不同的options时，可以触发多次；</p><ul><li><p><strong>disconnect</strong>：用来停止观察，调用该方法后，dom再发生变动，也不会触发观察器；</p></li><li><p><strong>takeRecords</strong>：用来清除变动记录，即不再处理未处理的变动，该方法返回变动记录的数组；</p></li></ul><h3 id="mutationrecord" tabindex="-1">MutationRecord <a class="header-anchor" href="#mutationrecord" aria-label="Permalink to &quot;MutationRecord&quot;">​</a></h3><p>dom每次发生变化时，就会生成一条变动记录（MutationRecord实例），该实例包含了与变动相关的所有信息，mutation observer处理的就是一个个mutationrecord实例所组成的数组；</p><p>mutationRecord对象包含了dom的相关信息：</p><ul><li><code>type</code>：观察的变动类型（attribute、characterData或者childList）。</li><li><code>target</code>：发生变动的DOM节点。</li><li><code>addedNodes</code>：新增的DOM节点。</li><li><code>removedNodes</code>：删除的DOM节点。</li><li><code>previousSibling</code>：前一个同级节点，如果没有则返回null。</li><li><code>nextSibling</code>：下一个同级节点，如果没有则返回null。</li><li><code>attributeName</code>：发生变动的属性。如果设置了attributeFilter，则只返回预先指定的属性。</li><li><code>oldValue</code>：变动前的值。这个属性只对attribute和characterData变动有效，如果发生childList变动，则返回null。</li></ul><h2 id="三、documentfragment" tabindex="-1">三、DocumentFragment <a class="header-anchor" href="#三、documentfragment" aria-label="Permalink to &quot;三、DocumentFragment&quot;">​</a></h2><ol><li>nodeType值为11；</li><li>documentFragment是一个文档片段，一种&#39;轻量级节点&#39;；</li><li>通常作为仓库使用，不存在DOM树上，是一种游离态，主要是优化页面性能；</li><li>用途：当使用js创建很多dom节点时，在加入节点到dom树上时，节点需要一个个渲染，这样节点数较多时会影响浏览器的渲染效率，这个时候我们将创建的节点都放在documentFragment这样的节点上，然后把documentFragment加入到DOM，只需要完成一次渲染就可以达到之前很多次渲染的效果；</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> ul </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ul&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> flag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createDocumentFragment</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">&lt;</span><span style="color:#79B8FF;">101</span><span style="color:#E1E4E8;">;i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> li </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createElement</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;li&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> liText </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">createTextNode</span><span style="color:#E1E4E8;">(i);</span></span>
<span class="line"><span style="color:#E1E4E8;">     li.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(liText);</span></span>
<span class="line"><span style="color:#E1E4E8;">     flag.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(li);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">ul.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(flag);</span></span>
<span class="line"><span style="color:#E1E4E8;">document.body.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(ul);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> ul </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ul&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> flag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createDocumentFragment</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">101</span><span style="color:#24292E;">;i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> li </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createElement</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;li&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> liText </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">createTextNode</span><span style="color:#24292E;">(i);</span></span>
<span class="line"><span style="color:#24292E;">     li.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(liText);</span></span>
<span class="line"><span style="color:#24292E;">     flag.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(li);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">ul.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(flag);</span></span>
<span class="line"><span style="color:#24292E;">document.body.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(ul);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="四、requestanimationframe" tabindex="-1">四、requestAnimationFrame <a class="header-anchor" href="#四、requestanimationframe" aria-label="Permalink to &quot;四、requestAnimationFrame&quot;">​</a></h2><blockquote><p>用来调节重新渲染，大副提高网页性能；</p></blockquote><ol><li><p>类似定时器，与setTimeout相比，它的最大优势是由系统来决定回调函数的执行时机，不需要设置时间间隔，</p></li><li><p>刷新频率：如果屏幕刷新率是60HZ，那么回调函数就每16.7ms被执行一次，如果是75hz，就是1000/75=13.3ms执行一次，它能保证回调函数在屏幕每一次的刷新间隔中只被执行一次， 这样不会引起丢帧现象， 也不会导致动画出现卡顿的问题；</p></li><li><p>requestAnimationFrame的基本思想是 让页面重绘的频率和刷新频率保持同步；</p></li><li><p>优势</p></li></ol><p>（1）cpu节能：如果使用setTimeout实现的动画，即使切换了窗口，后台仍在执行动画，而requestAnimationFrame则不会执行，当出现在视口内，则开始执行；</p><p>（2）函数节流： 在高频率事件(resize,scroll等)中，为了防止在一个刷新间隔内发生多次函数执行，使用requestAnimationFrame可保证每个刷新间隔内，函数只被执行一次，这样既能保证流畅性，也能更好的节省函数执行的开销。一个刷新间隔内函数执行多次时没有意义的，因为显示器每16.7ms刷新一次，多次绘制并不会在屏幕上体现出来。</p><ol start="5"><li>执行 <code>requestAnimationFrame</code>会返回一个定时器编号，传递给 <code>cancelAnimationFrame</code>用于取消这个函数；编号一般是1；</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> count </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">requestAnimation</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(count </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">){   </span><span style="color:#6A737D;">// 作一下判断</span></span>
<span class="line"><span style="color:#E1E4E8;">        count</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(count)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 需要在函数里面调用该事件;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">requestAnimationFrame</span><span style="color:#E1E4E8;">(requestAnimation);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">requestAnimationFrame</span><span style="color:#E1E4E8;">(requestAnimation)  </span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 页面打开加载这个函数</span></span>
<span class="line"><span style="color:#B392F0;">cancelAnimationFrame</span><span style="color:#E1E4E8;">(id)   取消requestAnimationFrame</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> count </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">requestAnimation</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(count </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">){   </span><span style="color:#6A737D;">// 作一下判断</span></span>
<span class="line"><span style="color:#24292E;">        count</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(count)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 需要在函数里面调用该事件;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">requestAnimationFrame</span><span style="color:#24292E;">(requestAnimation);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">requestAnimationFrame</span><span style="color:#24292E;">(requestAnimation)  </span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 页面打开加载这个函数</span></span>
<span class="line"><span style="color:#6F42C1;">cancelAnimationFrame</span><span style="color:#24292E;">(id)   取消requestAnimationFrame</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="五、requestidlecallback" tabindex="-1">五、requestIdleCallback <a class="header-anchor" href="#五、requestidlecallback" aria-label="Permalink to &quot;五、requestIdleCallback&quot;">​</a></h2><blockquote><p>另一个用来调节重新渲染的函数，将任务放置后台处理</p></blockquote><p>将在浏览器的空闲时段内调用函数排队，使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件</p><p>当一帧的末尾有空闲时间，才会执行回调函数；</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> handle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.</span><span style="color:#B392F0;">requestIdleCallback</span><span style="color:#E1E4E8;">(callback[,options])</span></span>
<span class="line"><span style="color:#6A737D;">// 结束回调</span></span>
<span class="line"><span style="color:#E1E4E8;">window.</span><span style="color:#B392F0;">cancelIdleCallback</span><span style="color:#E1E4E8;">(handle)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> handle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> window.</span><span style="color:#6F42C1;">requestIdleCallback</span><span style="color:#24292E;">(callback[,options])</span></span>
<span class="line"><span style="color:#6A737D;">// 结束回调</span></span>
<span class="line"><span style="color:#24292E;">window.</span><span style="color:#6F42C1;">cancelIdleCallback</span><span style="color:#24292E;">(handle)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>options参数：timeout：指定毫秒数，将在指定的毫秒数执行函数；</p><p>参考地址：</p><ul><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback</a></p></li><li><p><a href="http://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html" target="_blank" rel="noreferrer">阮一峰-网页性能优化</a></p></li></ul>`,39),o=[e];function r(t,c,i,E,y,d){return n(),a("div",null,o)}const m=s(p,[["render",r]]);export{b as __pageData,m as default};
