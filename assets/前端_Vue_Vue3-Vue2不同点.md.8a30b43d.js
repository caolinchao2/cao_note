import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.b5309610.js";const m=JSON.parse('{"title":"Vue3-Vue2不同点","description":"","frontmatter":{},"headers":[],"relativePath":"前端/Vue/Vue3-Vue2不同点.md","filePath":"前端/Vue/Vue3-Vue2不同点.md","lastUpdated":null}'),l={name:"前端/Vue/Vue3-Vue2不同点.md"},o=p(`<h1 id="vue3-vue2不同点" tabindex="-1">Vue3-Vue2不同点 <a class="header-anchor" href="#vue3-vue2不同点" aria-label="Permalink to &quot;Vue3-Vue2不同点&quot;">​</a></h1><p>本节只讲在Vue3-API没有的内容</p><h2 id="片段" tabindex="-1">片段 <a class="header-anchor" href="#片段" aria-label="Permalink to &quot;片段&quot;">​</a></h2><p>template模板在2.x中，必须有一个父节点，3.x中可以不用包裹节点，相对的，$attrs则需要手动指定了</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-bind</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$attrs&quot;</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">header</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">header</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">main</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-bind</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$attrs&quot;</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">main</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">footer</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">footer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="v-model" tabindex="-1">v-model <a class="header-anchor" href="#v-model" aria-label="Permalink to &quot;v-model&quot;">​</a></h2><h3 id="绑定名字" tabindex="-1">绑定名字 <a class="header-anchor" href="#绑定名字" aria-label="Permalink to &quot;绑定名字&quot;">​</a></h3><p>v-model使用<code>modelValue</code>来接收，如果绑定一个变量，则用变量来接收</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">my-component</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;book&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model:title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;bookTitle&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">my-component</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">my-component</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;book&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model:title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bookTitle&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">my-component</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;custom-form&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    emits: [</span><span style="color:#9ECBFF;">&#39;update:modelValue&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;update:title&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    template: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">		&lt;input @input=&quot;$emit(&#39;update:title&#39;)&quot; /&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">	\`</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;custom-form&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    emits: [</span><span style="color:#032F62;">&#39;update:modelValue&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;update:title&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    template: </span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">		&lt;input @input=&quot;$emit(&#39;update:title&#39;)&quot; /&gt;</span></span>
<span class="line"><span style="color:#032F62;">	\`</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="绑定修饰符" tabindex="-1">绑定修饰符 <a class="header-anchor" href="#绑定修饰符" aria-label="Permalink to &quot;绑定修饰符&quot;">​</a></h3><p>v-model包含内置修饰符：<code>.trim</code>、<code>.number</code>、<code>.lazy</code></p><p>也支持自定义的修饰符，自定义修饰符将传送到<code>this.modelModifiers</code>中</p><p>如果修饰符带参数，则prop的名称为：<code>arg + &quot;Modifiers&quot;</code></p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">my-component</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-model.capitalize</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;myText&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-model:description.capitalize</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;myText&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">my-component</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-model.capitalize</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;myText&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-model:description.capitalize</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;myText&quot;</span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-component&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: [</span><span style="color:#9ECBFF;">&#39;modelValue&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;modelModifiers&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;description&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;descriptionModifiers&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  emits: [</span><span style="color:#9ECBFF;">&#39;update:modelValue&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;update:description&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;input type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">      :value=&quot;modelValue&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">      @input=&quot;$emit(&#39;update:modelValue&#39;, $event.target.value)&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">  \`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">created</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.modelModifiers) </span><span style="color:#6A737D;">// { capitalize: true }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;my-component&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  props: [</span><span style="color:#032F62;">&#39;modelValue&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;modelModifiers&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;description&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;descriptionModifiers&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  emits: [</span><span style="color:#032F62;">&#39;update:modelValue&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;update:description&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  template: </span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">    &lt;input type=&quot;text&quot;</span></span>
<span class="line"><span style="color:#032F62;">      :value=&quot;modelValue&quot;</span></span>
<span class="line"><span style="color:#032F62;">      @input=&quot;$emit(&#39;update:modelValue&#39;, $event.target.value)&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">  \`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">created</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.modelModifiers) </span><span style="color:#6A737D;">// { capitalize: true }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="多个应用共享配置" tabindex="-1">多个应用共享配置 <a class="header-anchor" href="#多个应用共享配置" aria-label="Permalink to &quot;多个应用共享配置&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Foo </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./Foo.vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Bar </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./Bar.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createMyApp</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(options)</span></span>
<span class="line"><span style="color:#E1E4E8;">  app.</span><span style="color:#B392F0;">directive</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;focus&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">/* ... */</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> app</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">createMyApp</span><span style="color:#E1E4E8;">(Foo).</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#foo&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">createMyApp</span><span style="color:#E1E4E8;">(Bar).</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#bar&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Foo </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./Foo.vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Bar </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./Bar.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createMyApp</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(options)</span></span>
<span class="line"><span style="color:#24292E;">  app.</span><span style="color:#6F42C1;">directive</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;focus&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">/* ... */</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> app</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">createMyApp</span><span style="color:#24292E;">(Foo).</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#foo&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">createMyApp</span><span style="color:#24292E;">(Bar).</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#bar&#39;</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="按键修饰符" tabindex="-1">按键修饰符 <a class="header-anchor" href="#按键修饰符" aria-label="Permalink to &quot;按键修饰符&quot;">​</a></h2><p>vue2.x支持keyCodes作为v-on的一种方式</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-on:keyup.112</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-on:keyup.112</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>vue3.x不再支持，现在建议对任何要用作修饰符的键使用 kebab-cased (短横线) 名称。</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- Vue 3 在 v-on 上使用按键修饰符 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-on:keyup.page-down</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;nextPage&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 同时匹配 q 和 Q --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-on:keypress.q</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;quit&quot;</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- Vue 3 在 v-on 上使用按键修饰符 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-on:keyup.page-down</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;nextPage&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 同时匹配 q 和 Q --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-on:keypress.q</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;quit&quot;</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>语法的限制导致某些特定字符无法被匹配，比如 <code>&quot;</code>、<code>&#39;</code>、<code>/</code>、<code>=</code>、<code>&gt;</code> 和 <code>.</code>。对于这些字符，你应该在监听器内使用 <code>event.key</code> 代替。</p><h2 id="eventbus" tabindex="-1">EventBus <a class="header-anchor" href="#eventbus" aria-label="Permalink to &quot;EventBus&quot;">​</a></h2><p>vue2.x中支持的eventBus也不再被支持，vue3.x移除了 <code>$on</code>、<code>$off</code> 和 <code>$once</code> 方法，<code>$emit</code> 仍然包含于现有的 API 中，因为它用于触发由父组件声明式添加的事件处理函数。</p><p><strong>更换策略</strong></p><p>事件总线模式可以被替换为使用外部的、实现了事件触发器接口的库，例如 <a href="https://github.com/developit/mitt" target="_blank" rel="noreferrer">mitt</a> 或 <a href="https://github.com/scottcorgan/tiny-emitter" target="_blank" rel="noreferrer">tiny-emitter</a>。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// eventBus.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> emitter </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;tiny-emitter/instance&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">$on</span><span style="color:#E1E4E8;">: (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> emitter.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">$once</span><span style="color:#E1E4E8;">: (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> emitter.</span><span style="color:#B392F0;">once</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">$off</span><span style="color:#E1E4E8;">: (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> emitter.</span><span style="color:#B392F0;">off</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">$emit</span><span style="color:#E1E4E8;">: (</span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> emitter.</span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args),</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// eventBus.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> emitter </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;tiny-emitter/instance&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">$on</span><span style="color:#24292E;">: (</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> emitter.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">args),</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">$once</span><span style="color:#24292E;">: (</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> emitter.</span><span style="color:#6F42C1;">once</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">args),</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">$off</span><span style="color:#24292E;">: (</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> emitter.</span><span style="color:#6F42C1;">off</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">args),</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">$emit</span><span style="color:#24292E;">: (</span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> emitter.</span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">args),</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="过滤器" tabindex="-1">过滤器 <a class="header-anchor" href="#过滤器" aria-label="Permalink to &quot;过滤器&quot;">​</a></h2><p>vue2.x中的过滤器，3.x不再支持，建议直接使用<code>computed</code>即可，或者在绑定到根组件</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.config.globalProperties.$filters </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">currencyUSD</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;$&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> value</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.config.globalProperties.$filters </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">currencyUSD</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;$&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> value</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,32),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const b=s(l,[["render",t]]);export{m as __pageData,b as default};
