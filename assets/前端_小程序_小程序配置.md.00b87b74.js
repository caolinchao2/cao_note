import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.b5309610.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/小程序/小程序配置.md","filePath":"前端/小程序/小程序配置.md","lastUpdated":null}'),l={name:"前端/小程序/小程序配置.md"},o=p(`<h2 id="小程序配置" tabindex="-1">小程序配置 <a class="header-anchor" href="#小程序配置" aria-label="Permalink to &quot;小程序配置&quot;">​</a></h2><h3 id="_1-全局配置app-json" tabindex="-1">1.全局配置app.json <a class="header-anchor" href="#_1-全局配置app-json" aria-label="Permalink to &quot;1.全局配置app.json&quot;">​</a></h3><p>格式很严格，不能写注释</p><p>小程序根目录下的 <code>app.json</code> 文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。</p><h4 id="pages" tabindex="-1">pages <a class="header-anchor" href="#pages" aria-label="Permalink to &quot;pages&quot;">​</a></h4><p>小程序页面的路径，路径和页面要一一对应</p><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;pages&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;pages/index/index&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;pages/logs/logs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;pages/cart/cart&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;pages/my/my&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;pages/cate/cate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;pages/order/order&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;pages&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;pages/index/index&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;pages/logs/logs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;pages/cart/cart&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;pages/my/my&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;pages/cate/cate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;pages/order/order&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  ],</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="entrypagepath" tabindex="-1">entryPagePath <a class="header-anchor" href="#entrypagepath" aria-label="Permalink to &quot;entryPagePath&quot;">​</a></h4><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;entryPagePath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;pages/my/my&quot;</span><span style="color:#E1E4E8;">,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;entryPagePath&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;pages/my/my&quot;</span><span style="color:#24292E;">,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>小程序默认启动的首页</p><p>如果没有这个配置，默认是pages中的第一个，如果有这个选项启动页就是这个配置</p><h4 id="window" tabindex="-1">window <a class="header-anchor" href="#window" aria-label="Permalink to &quot;window&quot;">​</a></h4><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;window&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&quot;navigationBarBackgroundColor&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#ff0000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&quot;navigationStyle&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;custom&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&quot;navigationBarTextStyle&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;white&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&quot;navigationBarTitleText&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;小u商城&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&quot;backgroundColor&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#00ff00&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&quot;backgroundTextStyle&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;light&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&quot;enablePullDownRefresh&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;window&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;navigationBarBackgroundColor&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#ff0000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;navigationStyle&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;custom&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;navigationBarTextStyle&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;white&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;navigationBarTitleText&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;小u商城&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;backgroundColor&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#00ff00&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;backgroundTextStyle&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;light&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;enablePullDownRefresh&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="tabbar" tabindex="-1">tabbar <a class="header-anchor" href="#tabbar" aria-label="Permalink to &quot;tabbar&quot;">​</a></h4><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;tabBar&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;color&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#000000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;selectedColor&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#ff0000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;backgroundColor&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#ffff00&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&quot;list&quot;</span><span style="color:#E1E4E8;">: [{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;pagePath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;pages/index/index&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;首页&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;iconPath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/static/tabs/index.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;selectedIconPath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/static/tabs/indexFull.png&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   },{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;pagePath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;pages/cart/cart&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;购物车&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;iconPath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/static/tabs/cart.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;selectedIconPath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/static/tabs/cartFull.png&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   },{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;pagePath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;pages/my/my&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;我的&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;iconPath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/static/tabs/my.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">​    </span><span style="color:#9ECBFF;">&quot;selectedIconPath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/static/tabs/myFull.png&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   }]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;tabBar&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;color&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#000000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;selectedColor&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#ff0000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;backgroundColor&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#ffff00&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;list&quot;</span><span style="color:#24292E;">: [{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;pagePath&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;pages/index/index&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;首页&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;iconPath&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/static/tabs/index.png&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;selectedIconPath&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/static/tabs/indexFull.png&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   },{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;pagePath&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;pages/cart/cart&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;购物车&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;iconPath&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/static/tabs/cart.png&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;selectedIconPath&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/static/tabs/cartFull.png&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   },{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;pagePath&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;pages/my/my&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;我的&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;iconPath&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/static/tabs/my.png&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">​    </span><span style="color:#032F62;">&quot;selectedIconPath&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/static/tabs/myFull.png&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   }]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h3 id="_2-页面配置page-json" tabindex="-1">2.页面配置page.json <a class="header-anchor" href="#_2-页面配置page-json" aria-label="Permalink to &quot;2.页面配置page.json&quot;">​</a></h3><p>每一个小程序页面也可以使用同名 <code>.json</code> 文件来对本页面的窗口表现进行配置，页面中配置项会覆盖 <code>app.json</code> 的 <code>window</code> 中相同的配置项。</p><p>{</p><p>&quot;usingComponents&quot;: {},</p><p>&quot;navigationBarBackgroundColor&quot;: &quot;#00ff00&quot;,</p><p>&quot;navigationBarTitleText&quot;: &quot;首页&quot;,</p><p>&quot;navigationBarTextStyle&quot;: &quot;black&quot;</p><p>}</p><h3 id="_3-sitemap的配置-了解" tabindex="-1">3 sitemap的配置(了解) <a class="header-anchor" href="#_3-sitemap的配置-了解" aria-label="Permalink to &quot;3 sitemap的配置(了解)&quot;">​</a></h3><p>小程序项目完成</p><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;rules&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&quot;action&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;disallow&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&quot;page&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;/pages/my/my&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&quot;action&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;disallow&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">&quot;page&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;/pages/order/order&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"> ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;rules&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;action&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;disallow&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;page&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;/pages/my/my&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;action&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;disallow&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#032F62;">&quot;page&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;/pages/order/order&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"> ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="获取场景值" tabindex="-1">获取场景值 <a class="header-anchor" href="#获取场景值" aria-label="Permalink to &quot;获取场景值&quot;">​</a></h2><p>对于小程序，可以在 <code>App</code> 的 <code>onLaunch</code> 和 <code>onShow</code>，或<a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html" target="_blank" rel="noreferrer">wx.getLaunchOptionsSync</a> 中获取上述场景值。</p>`,28),e=[o];function t(c,r,i,E,u,y){return n(),a("div",null,e)}const F=s(l,[["render",t]]);export{b as __pageData,F as default};
