import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.b5309610.js";const m=JSON.parse('{"title":"reset.css","description":"","frontmatter":{},"headers":[],"relativePath":"前端/Html5-Css3/reset.css.md","filePath":"前端/Html5-Css3/reset.css.md","lastUpdated":1715053679000}'),l={name:"前端/Html5-Css3/reset.css.md"},o=p(`<h2 id="normalize-css" tabindex="-1">normalize.css <a class="header-anchor" href="#normalize-css" aria-label="Permalink to &quot;normalize.css&quot;">​</a></h2><p><a href="https://github.com/necolas/normalize.css" target="_blank" rel="noreferrer">https://github.com/necolas/normalize.css</a></p><p>比reset更兼容，reset是把默认样式替换掉，normalize仅修复一些样式bug，并保证各自浏览器的一致性；</p><h1 id="reset-css" tabindex="-1">reset.css <a class="header-anchor" href="#reset-css" aria-label="Permalink to &quot;reset.css&quot;">​</a></h1><p>网址：<a href="https://css-tricks.com/video-screencasts/174-using-local-overrides-in-devtools/" target="_blank" rel="noreferrer">https://css-tricks.com/video-screencasts/174-using-local-overrides-in-devtools/</a></p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">screen</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> (prefers-reduced-motion:reduce) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">*</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">-webkit-transition</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">s!important</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">transition</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">s!important</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">*</span><span style="color:#E1E4E8;">,</span><span style="color:#B392F0;">::after</span><span style="color:#E1E4E8;">,</span><span style="color:#B392F0;">::before</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">-webkit-box-sizing</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">border-box</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">box-sizing</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">border-box</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">text-decoration</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">article</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">aside</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">figcaption</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">figure</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">hgroup</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">nav</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">summary</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">audio</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">canvas</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">video</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">inline-block</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">audio</span><span style="color:#B392F0;">:not</span><span style="color:#E1E4E8;">([</span><span style="color:#B392F0;">controls</span><span style="color:#E1E4E8;">]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">hidden</span><span style="color:#E1E4E8;">] {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">-webkit-text-size-adjust</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">-ms-text-size-adjust</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">dl</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">menu</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">ol</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">list-style</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">dd</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">menu</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">ol</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">nav</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">ol</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">nav</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">list-style</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">list-style-image</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">-ms-interpolation-mode</span><span style="color:#E1E4E8;">: bicubic</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">figure</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">form</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">legend</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">white-space</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">normal</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">select</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">textarea</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">vertical-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">baseline</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">line-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">normal</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">button</span><span style="color:#E1E4E8;">],</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;">],</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">submit</span><span style="color:#E1E4E8;">] {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">-webkit-appearance</span><span style="color:#E1E4E8;">: button;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">cursor</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">pointer</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">],</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">] {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">cursor</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">default</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">checkbox</span><span style="color:#E1E4E8;">],</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">radio</span><span style="color:#E1E4E8;">] {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">search</span><span style="color:#E1E4E8;">] {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">-webkit-appearance</span><span style="color:#E1E4E8;">: textfield</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">search</span><span style="color:#E1E4E8;">]</span><span style="color:#B392F0;">::-webkit-search-cancel-button</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">search</span><span style="color:#E1E4E8;">]</span><span style="color:#B392F0;">::-webkit-search-decoration</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">-webkit-appearance</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">button</span><span style="color:#B392F0;">::-moz-focus-inner</span><span style="color:#E1E4E8;">,</span><span style="color:#85E89D;">input</span><span style="color:#B392F0;">::-moz-focus-inner</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">textarea</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">vertical-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">top</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// 自制，需要scss</span></span>
<span class="line"><span style="color:#F97583;">@each</span><span style="color:#E1E4E8;"> $name,$prop in (p:padding,pt:padding-top,pr:padding-right,pb:padding-bottom,pl:padding-left){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">@for</span><span style="color:#E1E4E8;"> $i from 5 through 30 {</span></span>
<span class="line"><span style="color:#E1E4E8;">    .#{$</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">}#{$</span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;">}{</span></span>
<span class="line"><span style="color:#E1E4E8;">      #{$</span><span style="color:#79B8FF;">prop</span><span style="color:#E1E4E8;">}: #{$</span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;">}px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">} // 更方便的使用间隔，如p10类名，padding：10px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@each</span><span style="color:#E1E4E8;"> $name,$prop in (m:margin,mt:margin-top,mr:margin-right,mb:margin-bottom,ml:margin-left){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">@for</span><span style="color:#E1E4E8;"> $i from 5 through 30 {</span></span>
<span class="line"><span style="color:#E1E4E8;">    .#{$</span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">}#{$</span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;">}{</span></span>
<span class="line"><span style="color:#E1E4E8;">      #{$</span><span style="color:#79B8FF;">prop</span><span style="color:#E1E4E8;">}: #{$</span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;">}px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// 居中类名</span></span>
<span class="line"><span style="color:#B392F0;">.dibvm:after</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">inline-block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">vertical-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">middle</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.clearfix::after</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">visibility</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">clear</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">both</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// 循环字体</span></span>
<span class="line"><span style="color:#B392F0;">.f0</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.f10</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">transform</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">scale</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.8</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">transform-origin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">left</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">12</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@for</span><span style="color:#E1E4E8;"> $i from 12 through 24 {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">@if</span><span style="color:#E1E4E8;"> $i &lt; 16 {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.f</span><span style="color:#E1E4E8;">#{$</span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: #{$i}px; // 12. 13. 14. 15. 16px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">@else</span><span style="color:#E1E4E8;"> if $i % 2 == 0 {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.f</span><span style="color:#E1E4E8;">#{$</span><span style="color:#79B8FF;">i</span><span style="color:#E1E4E8;">} {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: #{$i}px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.cp</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">cursor</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">pointer</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.usn</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">user-select</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">screen</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> (prefers-reduced-motion:reduce) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">*</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">-webkit-transition</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">s!important</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">transition</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">s!important</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">*</span><span style="color:#24292E;">,</span><span style="color:#6F42C1;">::after</span><span style="color:#24292E;">,</span><span style="color:#6F42C1;">::before</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">-webkit-box-sizing</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">border-box</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">box-sizing</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">border-box</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">a</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">text-decoration</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">article</span><span style="color:#24292E;">,</span><span style="color:#22863A;">aside</span><span style="color:#24292E;">,</span><span style="color:#22863A;">details</span><span style="color:#24292E;">,</span><span style="color:#22863A;">figcaption</span><span style="color:#24292E;">,</span><span style="color:#22863A;">figure</span><span style="color:#24292E;">,</span><span style="color:#22863A;">footer</span><span style="color:#24292E;">,</span><span style="color:#22863A;">header</span><span style="color:#24292E;">,</span><span style="color:#22863A;">hgroup</span><span style="color:#24292E;">,</span><span style="color:#22863A;">nav</span><span style="color:#24292E;">,</span><span style="color:#22863A;">section</span><span style="color:#24292E;">,</span><span style="color:#22863A;">summary</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">block</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">audio</span><span style="color:#24292E;">,</span><span style="color:#22863A;">canvas</span><span style="color:#24292E;">,</span><span style="color:#22863A;">video</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">inline-block</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">audio</span><span style="color:#6F42C1;">:not</span><span style="color:#24292E;">([</span><span style="color:#6F42C1;">controls</span><span style="color:#24292E;">]) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#6F42C1;">hidden</span><span style="color:#24292E;">] {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">html</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">-webkit-text-size-adjust</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">-ms-text-size-adjust</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">padding</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">body</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">dl</span><span style="color:#24292E;">,</span><span style="color:#22863A;">menu</span><span style="color:#24292E;">,</span><span style="color:#22863A;">ol</span><span style="color:#24292E;">,</span><span style="color:#22863A;">ul</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">list-style</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">dd</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">menu</span><span style="color:#24292E;">,</span><span style="color:#22863A;">ol</span><span style="color:#24292E;">,</span><span style="color:#22863A;">ul</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">padding</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">nav</span><span style="color:#24292E;"> </span><span style="color:#22863A;">ol</span><span style="color:#24292E;">,</span><span style="color:#22863A;">nav</span><span style="color:#24292E;"> </span><span style="color:#22863A;">ul</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">list-style</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">list-style-image</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">img</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">-ms-interpolation-mode</span><span style="color:#24292E;">: bicubic</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">figure</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">form</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">legend</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">padding</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">white-space</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">normal</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">button</span><span style="color:#24292E;">,</span><span style="color:#22863A;">input</span><span style="color:#24292E;">,</span><span style="color:#22863A;">select</span><span style="color:#24292E;">,</span><span style="color:#22863A;">textarea</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">vertical-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">baseline</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">button</span><span style="color:#24292E;">,</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">line-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">normal</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">button</span><span style="color:#24292E;">,</span><span style="color:#22863A;">html</span><span style="color:#24292E;"> </span><span style="color:#22863A;">input</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">button</span><span style="color:#24292E;">],</span><span style="color:#22863A;">input</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">reset</span><span style="color:#24292E;">],</span><span style="color:#22863A;">input</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">submit</span><span style="color:#24292E;">] {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">-webkit-appearance</span><span style="color:#24292E;">: button;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">cursor</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">pointer</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">button</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">],</span><span style="color:#22863A;">input</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">] {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">cursor</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">default</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">input</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">checkbox</span><span style="color:#24292E;">],</span><span style="color:#22863A;">input</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">radio</span><span style="color:#24292E;">] {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">padding</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">input</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">search</span><span style="color:#24292E;">] {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">-webkit-appearance</span><span style="color:#24292E;">: textfield</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">input</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">search</span><span style="color:#24292E;">]</span><span style="color:#6F42C1;">::-webkit-search-cancel-button</span><span style="color:#24292E;">,</span><span style="color:#22863A;">input</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">search</span><span style="color:#24292E;">]</span><span style="color:#6F42C1;">::-webkit-search-decoration</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">-webkit-appearance</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">button</span><span style="color:#6F42C1;">::-moz-focus-inner</span><span style="color:#24292E;">,</span><span style="color:#22863A;">input</span><span style="color:#6F42C1;">::-moz-focus-inner</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">padding</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">textarea</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">vertical-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">top</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// 自制，需要scss</span></span>
<span class="line"><span style="color:#D73A49;">@each</span><span style="color:#24292E;"> $name,$prop in (p:padding,pt:padding-top,pr:padding-right,pb:padding-bottom,pl:padding-left){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">@for</span><span style="color:#24292E;"> $i from 5 through 30 {</span></span>
<span class="line"><span style="color:#24292E;">    .#{$</span><span style="color:#005CC5;">name</span><span style="color:#24292E;">}#{$</span><span style="color:#005CC5;">i</span><span style="color:#24292E;">}{</span></span>
<span class="line"><span style="color:#24292E;">      #{$</span><span style="color:#005CC5;">prop</span><span style="color:#24292E;">}: #{$</span><span style="color:#005CC5;">i</span><span style="color:#24292E;">}px;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">} // 更方便的使用间隔，如p10类名，padding：10px;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@each</span><span style="color:#24292E;"> $name,$prop in (m:margin,mt:margin-top,mr:margin-right,mb:margin-bottom,ml:margin-left){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">@for</span><span style="color:#24292E;"> $i from 5 through 30 {</span></span>
<span class="line"><span style="color:#24292E;">    .#{$</span><span style="color:#005CC5;">name</span><span style="color:#24292E;">}#{$</span><span style="color:#005CC5;">i</span><span style="color:#24292E;">}{</span></span>
<span class="line"><span style="color:#24292E;">      #{$</span><span style="color:#005CC5;">prop</span><span style="color:#24292E;">}: #{$</span><span style="color:#005CC5;">i</span><span style="color:#24292E;">}px;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// 居中类名</span></span>
<span class="line"><span style="color:#6F42C1;">.dibvm:after</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">content</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">inline-block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">vertical-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">middle</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.clearfix::after</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">visibility</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">clear</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">both</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">content</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// 循环字体</span></span>
<span class="line"><span style="color:#6F42C1;">.f0</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.f10</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">transform</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">scale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0.8</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">transform-origin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">left</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">12</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@for</span><span style="color:#24292E;"> $i from 12 through 24 {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">@if</span><span style="color:#24292E;"> $i &lt; 16 {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.f</span><span style="color:#24292E;">#{$</span><span style="color:#005CC5;">i</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: #{$i}px; // 12. 13. 14. 15. 16px;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">@else</span><span style="color:#24292E;"> if $i % 2 == 0 {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.f</span><span style="color:#24292E;">#{$</span><span style="color:#005CC5;">i</span><span style="color:#24292E;">} {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: #{$i}px;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.cp</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">cursor</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">pointer</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.usn</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">user-select</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br></div></div>`,6),e=[o];function c(r,t,E,y,i,b){return n(),a("div",null,e)}const u=s(l,[["render",c]]);export{m as __pageData,u as default};
