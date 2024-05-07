import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.b5309610.js";const u=JSON.parse('{"title":"es6-05 扩展","description":"","frontmatter":{},"headers":[],"relativePath":"前端/es6/es6-05 扩展.md","filePath":"前端/es6/es6-05 扩展.md","lastUpdated":null}'),p={name:"前端/es6/es6-05 扩展.md"},o=l(`<h1 id="es6-05-扩展" tabindex="-1">es6-05 扩展 <a class="header-anchor" href="#es6-05-扩展" aria-label="Permalink to &quot;es6-05 扩展&quot;">​</a></h1><h2 id="一、字符串扩展" tabindex="-1">一、字符串扩展 <a class="header-anchor" href="#一、字符串扩展" aria-label="Permalink to &quot;一、字符串扩展&quot;">​</a></h2><p>包含是否的结果都是true或false；</p><ul><li><p><code>includes</code>(str) : 判断是否包含指定的字符串 true|false === indexOf，也可以用于数组；includes是使用全等的；</p></li><li><p><code>startsWith</code>(str) : 判断是否以指定字符串开头</p></li><li><p><code>endsWith</code>(str) : 判断是否以指定字符串结尾</p></li><li><p><code>repeat</code>(count) : 重复指定次数 返回一个新的字符串</p></li></ul><p>javascript 就是由面向对象思想造出来的一个产品 语法是ECMAscript</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> s1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;abc&#39;</span><span style="color:#6A737D;">//字面量形式创建一个字符串类型的数据</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> s1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;abc&#39;</span><span style="color:#6A737D;">//字面量形式创建一个字符串类型的数据</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>虽然是字面量形式创建的字符串，字面量形式创建的数据也能继承 构造函数创建出来的字符串对象 的特性</p><p>只有对象才有属性和方法</p><p>字面量形式创建的字符串 本质上（底层）也是由 new String() 创建出来的</p><h3 id="padstart、padend" tabindex="-1">padStart、padEnd <a class="header-anchor" href="#padstart、padend" aria-label="Permalink to &quot;padStart、padEnd&quot;">​</a></h3><p>（1）接收两个参数，第一个参数为最小长度，第二个参数为补全字符串；</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">padStart</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">//返回 &#39;01&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">padEnd</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">//返回 &#39;10&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">padStart</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">//返回 &#39;01&#39;</span></span>
<span class="line"><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">padEnd</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">//返回 &#39;10&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>（2）如果原字符串等于或大于指定的最小长度，则返回原字符串；</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&#39;10&#39;</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">padStart</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">//返回 &#39;10&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&#39;10&#39;</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">padStart</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">//返回 &#39;10&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>（3）如果原字符串的长度小于补全字符串的长度，则截去超出位数的补全字符串；</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&#39;09-12&#39;</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">padStart</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;YYYY-MM-DD&#39;</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">// &quot;YYYY-09-12&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;09-12&#39;</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">padEnd</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;YYYY-MM-DD&#39;</span><span style="color:#E1E4E8;">)    </span><span style="color:#6A737D;">// &quot;09-12YYYY-&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&#39;09-12&#39;</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">padStart</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;YYYY-MM-DD&#39;</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">// &quot;YYYY-09-12&quot;</span></span>
<span class="line"><span style="color:#032F62;">&#39;09-12&#39;</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">padEnd</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;YYYY-MM-DD&#39;</span><span style="color:#24292E;">)    </span><span style="color:#6A737D;">// &quot;09-12YYYY-&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="二、数字的扩展" tabindex="-1">二、数字的扩展 <a class="header-anchor" href="#二、数字的扩展" aria-label="Permalink to &quot;二、数字的扩展&quot;">​</a></h2><ul><li><p><code>isFinite</code>(i) : 判断是否是有限大的数</p></li><li><p><code>isNaN</code>(i) : 判断是否是NaN，两个NaN是不等的；</p></li><li><p><code>Number.isInteger</code>(i) : 判断是否是整数</p></li><li><p><code>parseInt</code>(str) : 将字符串转换为对应的数值</p></li><li><p><code>Math.trunc</code>(i) : 直接去除小数部分，必须是纯数字，如果数字带单位，则会是NAN</p></li></ul><h2 id="三、数组扩展" tabindex="-1">三、数组扩展 <a class="header-anchor" href="#三、数组扩展" aria-label="Permalink to &quot;三、数组扩展&quot;">​</a></h2><h3 id="array-from" tabindex="-1">Array.from <a class="header-anchor" href="#array-from" aria-label="Permalink to &quot;Array.from&quot;">​</a></h3><blockquote><p>将伪数组对象或可遍历对象转换为真数组，需要一个变量来接收</p></blockquote><p><code>Array.from(v,[callback])</code></p><p>Array.from转换对象的时候，键名必须写数字下标， 必须加length长度，否则会失败；</p><p>一个类数组对象，必须要有length，属性名必须是数值，属性名作为数组的索引号，如果不带length，from转换出来的将是空数组；</p><p>Array.from的第二个参数为回调函数，指定返回的数组是什么形式的，参数item,index,arr</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">cities</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [{id:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,age:</span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">},{id:</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,age:</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">}]</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> arr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(cities,({</span><span style="color:#FFAB70;">age</span><span style="color:#E1E4E8;">})</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">age)   </span><span style="color:#6A737D;">//[18,20] 返回对象中的每一项</span></span>
<span class="line"><span style="color:#6A737D;">//{age} 第二个参数返回数组的每一项，也可以不填写；</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">cities</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{id:</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,age:</span><span style="color:#005CC5;">18</span><span style="color:#24292E;">},{id:</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,age:</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">}]</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Array.</span><span style="color:#6F42C1;">from</span><span style="color:#24292E;">(cities,({</span><span style="color:#E36209;">age</span><span style="color:#24292E;">})</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">age)   </span><span style="color:#6A737D;">//[18,20] 返回对象中的每一项</span></span>
<span class="line"><span style="color:#6A737D;">//{age} 第二个参数返回数组的每一项，也可以不填写；</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>小括号中代表每一个对象，使用对象解构，将年龄返回出来;如果是返回一个对象，则键名需要以[]中括号形式返回;</p><h3 id="array-of" tabindex="-1">Array.of <a class="header-anchor" href="#array-of" aria-label="Permalink to &quot;Array.of&quot;">​</a></h3><blockquote><p>将一系列值转换成数组，和new Array传值是一样的</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Array.</span><span style="color:#B392F0;">of</span><span style="color:#E1E4E8;">(v1, v2, v3)  </span><span style="color:#6A737D;">// 将一系列值转换成数组，和new Array传值是一样的；</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> arr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">of</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 这个3不是数组的长度，是一个数组；</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Array.</span><span style="color:#6F42C1;">of</span><span style="color:#24292E;">(v1, v2, v3)  </span><span style="color:#6A737D;">// 将一系列值转换成数组，和new Array传值是一样的；</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Array.</span><span style="color:#6F42C1;">of</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 这个3不是数组的长度，是一个数组；</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="array-fill" tabindex="-1">Array.fill <a class="header-anchor" href="#array-fill" aria-label="Permalink to &quot;Array.fill&quot;">​</a></h3><blockquote><p>使用什么来填充</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 将数组填充5个空字符串；fill填写字符；</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">fill</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 将数组填充5个空字符串；fill填写字符；</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="四、对象扩展" tabindex="-1">四、对象扩展 <a class="header-anchor" href="#四、对象扩展" aria-label="Permalink to &quot;四、对象扩展&quot;">​</a></h2><h3 id="object-is" tabindex="-1">Object.is <a class="header-anchor" href="#object-is" aria-label="Permalink to &quot;Object.is&quot;">​</a></h3><p><code>Object.is(v1, v2)</code></p><p>判断2个数据是否完全相等，两个NaN是相等的，普通判断两个NaN是不相等的；</p><h3 id="对象浅拷贝" tabindex="-1">对象浅拷贝 <a class="header-anchor" href="#对象浅拷贝" aria-label="Permalink to &quot;对象浅拷贝&quot;">​</a></h3><p><code>Object.assign(target, source1, source2..)</code></p><p>将源对象的属性复制到目标对象身上，source是源对象；</p><p>浅拷贝修改属性值之后，源对象的值不会被改变，如果是数组或对象，则会被改变；</p><p>需要声明一个空对象再进行拷贝；</p><p>也可以：<code>let obj3 = Object.assign({},obj1,obj2...)</code>常用于合并对象；</p><h3 id="对象深拷贝" tabindex="-1">对象深拷贝 <a class="header-anchor" href="#对象深拷贝" aria-label="Permalink to &quot;对象深拷贝&quot;">​</a></h3><p><code>var obj1 = JSON.parse(JSON.stringify(arr/obj)) </code></p><p>将对象转换成字符串，再将字符串转换成对象，所以需要一个变量来接收，就是一个新的对象；</p><p>数组或对象深拷贝, 函数不能拷贝；</p><p>深拷贝原理：（数组，对象都可用）浅拷贝+递归</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">deepCopy</span><span style="color:#E1E4E8;">( </span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;"> ){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">( </span><span style="color:#79B8FF;">Object</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.toString.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">( obj ).</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Object&#39;</span><span style="color:#E1E4E8;"> ){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">( </span><span style="color:#79B8FF;">Object</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.toString.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">( obj ).</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Array&#39;</span><span style="color:#E1E4E8;"> ){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">    }  </span><span style="color:#6A737D;">//判断数据类型类型  如果是数组则初始一个  []  如果是一个Object则初始一个 {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//浅拷贝，但是+ 递归思想，就实现了深拷贝</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">( </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> attr </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> obj ){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">( </span><span style="color:#F97583;">typeof</span><span style="color:#E1E4E8;"> obj[attr] </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;object&#39;</span><span style="color:#E1E4E8;">){      </span><span style="color:#6A737D;">//判断传入的键值是否是数组或对象</span></span>
<span class="line"><span style="color:#E1E4E8;">            result[attr] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">deepCopy</span><span style="color:#E1E4E8;">( obj[attr] )  </span><span style="color:#6A737D;">//如果是对象则再调用一次函数; 实现递归;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            result[attr] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> obj[attr]  </span><span style="color:#6A737D;">//将每一天数据输入进对象或数组;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">deepCopy</span><span style="color:#24292E;">( </span><span style="color:#E36209;">obj</span><span style="color:#24292E;"> ){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">( </span><span style="color:#005CC5;">Object</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.toString.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">( obj ).</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">8</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Object&#39;</span><span style="color:#24292E;"> ){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">    }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">( </span><span style="color:#005CC5;">Object</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.toString.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">( obj ).</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">8</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Array&#39;</span><span style="color:#24292E;"> ){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">    }  </span><span style="color:#6A737D;">//判断数据类型类型  如果是数组则初始一个  []  如果是一个Object则初始一个 {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//浅拷贝，但是+ 递归思想，就实现了深拷贝</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">( </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> attr </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> obj ){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">( </span><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> obj[attr] </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;object&#39;</span><span style="color:#24292E;">){      </span><span style="color:#6A737D;">//判断传入的键值是否是数组或对象</span></span>
<span class="line"><span style="color:#24292E;">            result[attr] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">deepCopy</span><span style="color:#24292E;">( obj[attr] )  </span><span style="color:#6A737D;">//如果是对象则再调用一次函数; 实现递归;</span></span>
<span class="line"><span style="color:#24292E;">        }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            result[attr] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> obj[attr]  </span><span style="color:#6A737D;">//将每一天数据输入进对象或数组;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,49),e=[o];function r(t,c,y,E,i,d){return a(),n("div",null,e)}const F=s(p,[["render",r]]);export{u as __pageData,F as default};
