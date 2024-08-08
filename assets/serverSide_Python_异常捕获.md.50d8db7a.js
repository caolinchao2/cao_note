import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b5309610.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"serverSide/Python/异常捕获.md","filePath":"serverSide/Python/异常捕获.md","lastUpdated":1721987715000}'),p={name:"serverSide/Python/异常捕获.md"},o=l(`<h2 id="python异常处理" tabindex="-1">Python异常处理 <a class="header-anchor" href="#python异常处理" aria-label="Permalink to &quot;Python异常处理&quot;">​</a></h2><p>如果程序报错，不会结束程序，而是执行except里面的的代码</p><h4 id="捕获常规异常" tabindex="-1">捕获常规异常 <a class="header-anchor" href="#捕获常规异常" aria-label="Permalink to &quot;捕获常规异常&quot;">​</a></h4><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;d:/Python/dataType/haha0.txt&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;r&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">encoding</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;utf-8&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;result:&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">except</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;d:/Python/dataType/haha0.txt&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;a&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">encoding</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;utf-8&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;except...&quot;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">try</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">open</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;d:/Python/dataType/haha0.txt&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;r&quot;</span><span style="color:#24292E;">,</span><span style="color:#E36209;">encoding</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;utf-8&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;result:&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">except</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">open</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;d:/Python/dataType/haha0.txt&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;a&quot;</span><span style="color:#24292E;">,</span><span style="color:#E36209;">encoding</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;utf-8&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;except...&quot;</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="捕获特定异常" tabindex="-1">捕获特定异常 <a class="header-anchor" href="#捕获特定异常" aria-label="Permalink to &quot;捕获特定异常&quot;">​</a></h4><ul><li>如果尝试执行的代码的异常类型和要捕获的异常类型不一致，则无法捕获异常。</li></ul><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    可能发生错误的代码</span></span>
<span class="line"><span style="color:#F97583;">except</span><span style="color:#E1E4E8;"> 待捕获异常名 </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> 别名:</span></span>
<span class="line"><span style="color:#E1E4E8;">    如果出现异常执行的代码</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">try</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    可能发生错误的代码</span></span>
<span class="line"><span style="color:#D73A49;">except</span><span style="color:#24292E;"> 待捕获异常名 </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> 别名:</span></span>
<span class="line"><span style="color:#24292E;">    如果出现异常执行的代码</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="捕获多个异常" tabindex="-1">捕获多个异常 <a class="header-anchor" href="#捕获多个异常" aria-label="Permalink to &quot;捕获多个异常&quot;">​</a></h4><ul><li><p>格式一：当待捕获异常名为<code>Exception</code>可以捕获所有类型异常，作用与常规异常一样一致</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;C:/code/study.txt&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;r&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">except</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Exception</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> e:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;文件不存在&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">try</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">open</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;C:/code/study.txt&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;r&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">except</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Exception</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> e:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;文件不存在&#39;</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>格式二:把要捕获的异常类型的名字，放到except 后，并使用元组的方式进行书写。</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    可能发生错误的代码</span></span>
<span class="line"><span style="color:#F97583;">except</span><span style="color:#E1E4E8;"> (异常名1,异常名2) </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> 别名:</span></span>
<span class="line"><span style="color:#E1E4E8;">    如果出现异常执行的代码</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">try</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    可能发生错误的代码</span></span>
<span class="line"><span style="color:#D73A49;">except</span><span style="color:#24292E;"> (异常名1,异常名2) </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> 别名:</span></span>
<span class="line"><span style="color:#24292E;">    如果出现异常执行的代码</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul><h4 id="其他用法" tabindex="-1">其他用法 <a class="header-anchor" href="#其他用法" aria-label="Permalink to &quot;其他用法&quot;">​</a></h4><h5 id="打印异常信息" tabindex="-1">打印异常信息 <a class="header-anchor" href="#打印异常信息" aria-label="Permalink to &quot;打印异常信息&quot;">​</a></h5><ul><li><p>异常描述信息存贮在别名中，可以通过打印别名获取</p></li><li><p>使用示例：</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(num) </span><span style="color:#6A737D;"># 未定义，报错</span></span>
<span class="line"><span style="color:#F97583;">except</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">NameError</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">ZeroDivisionError</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> e:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(e) </span><span style="color:#6A737D;"># 打印 name &#39;num&#39; is not defined</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">try</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(num) </span><span style="color:#6A737D;"># 未定义，报错</span></span>
<span class="line"><span style="color:#D73A49;">except</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">NameError</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">ZeroDivisionError</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> e:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(e) </span><span style="color:#6A737D;"># 打印 name &#39;num&#39; is not defined</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul><h5 id="异常else" tabindex="-1">异常else <a class="header-anchor" href="#异常else" aria-label="Permalink to &quot;异常else&quot;">​</a></h5><ul><li><p>else表示的是如果没有异常要执行的代码。</p></li><li><p>使用示例：</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(num) </span><span style="color:#6A737D;"># 未定义，报错</span></span>
<span class="line"><span style="color:#F97583;">except</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">NameError</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">ZeroDivisionError</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> e:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(e) </span><span style="color:#6A737D;"># 打印 name &#39;num&#39; is not defined</span></span>
<span class="line"><span style="color:#F97583;">else</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;无异常&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;"># 有异常，不执行  //无异常执行</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">try</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(num) </span><span style="color:#6A737D;"># 未定义，报错</span></span>
<span class="line"><span style="color:#D73A49;">except</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">NameError</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">ZeroDivisionError</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> e:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(e) </span><span style="color:#6A737D;"># 打印 name &#39;num&#39; is not defined</span></span>
<span class="line"><span style="color:#D73A49;">else</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;无异常&quot;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;"># 有异常，不执行  //无异常执行</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ul><h5 id="异常finally" tabindex="-1">异常finally <a class="header-anchor" href="#异常finally" aria-label="Permalink to &quot;异常finally&quot;">​</a></h5><ul><li><p>finally表示的是无论是否异常都要执行的代码</p></li><li><p>使用示例：</p><ul><li><p>果open文件却一直未close且程序未中止，将一直占用文件无法操作</p></li><li><p>如果打开文件后发生异常，未close也将导致一直占用，因此可选择在finally中close</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">global</span><span style="color:#E1E4E8;"> f</span></span>
<span class="line"><span style="color:#F97583;">try</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    f </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">open</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;C:/code/aaa.txt&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;r&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">except</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Exception</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> e:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(e)  </span></span>
<span class="line"><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    f.close() </span><span style="color:#6A737D;"># 一定会执行close操作</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">global</span><span style="color:#24292E;"> f</span></span>
<span class="line"><span style="color:#D73A49;">try</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    f </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">open</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;C:/code/aaa.txt&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;r&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">except</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Exception</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> e:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(e)  </span></span>
<span class="line"><span style="color:#D73A49;">finally</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    f.close() </span><span style="color:#6A737D;"># 一定会执行close操作</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul></li></ul>`,16),e=[o];function t(r,c,i,y,E,u){return n(),a("div",null,e)}const b=s(p,[["render",t]]);export{h as __pageData,b as default};
