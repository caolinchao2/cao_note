import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.d7c6e0b6.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"leadingEnd/小程序/小程序配置.md","filePath":"leadingEnd/小程序/小程序配置.md","lastUpdated":1720261195000}'),l={name:"leadingEnd/小程序/小程序配置.md"},o=p(`<h2 id="小程序配置" tabindex="-1">小程序配置 <a class="header-anchor" href="#小程序配置" aria-label="Permalink to &quot;小程序配置&quot;">​</a></h2><h3 id="_1-全局配置-app-json" tabindex="-1">1.全局配置 app.json <a class="header-anchor" href="#_1-全局配置-app-json" aria-label="Permalink to &quot;1.全局配置 app.json&quot;">​</a></h3><p>格式很严格，不能写注释</p><p>小程序根目录下的 <code>app.json</code> 文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。</p><h4 id="pages" tabindex="-1">pages <a class="header-anchor" href="#pages" aria-label="Permalink to &quot;pages&quot;">​</a></h4><p>小程序页面的路径，路径和页面要一一对应</p><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;pages&quot;</span><span style="color:#E1E4E8;">: [</span></span>
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
<span class="line"><span style="color:#24292E;">  ],</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="entrypagepath" tabindex="-1">entryPagePath <a class="header-anchor" href="#entrypagepath" aria-label="Permalink to &quot;entryPagePath&quot;">​</a></h4><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;entryPagePath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;pages/my/my&quot;</span><span style="color:#E1E4E8;">,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;entryPagePath&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;pages/my/my&quot;</span><span style="color:#24292E;">,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>小程序默认启动的首页</p><p>如果没有这个配置，默认是 pages 中的第一个，如果有这个选项启动页就是这个配置</p><h4 id="window" tabindex="-1">window <a class="header-anchor" href="#window" aria-label="Permalink to &quot;window&quot;">​</a></h4><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;window&quot;</span><span style="color:#E1E4E8;">: {</span></span>
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
<span class="line"><span style="color:#24292E;">  },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h3 id="_2-页面配置-page-json" tabindex="-1">2.页面配置 page.json <a class="header-anchor" href="#_2-页面配置-page-json" aria-label="Permalink to &quot;2.页面配置 page.json&quot;">​</a></h3><p>每一个小程序页面也可以使用同名 <code>.json</code> 文件来对本页面的窗口表现进行配置，页面中配置项会覆盖 <code>app.json</code> 的 <code>window</code> 中相同的配置项。</p><p>{</p><p>&quot;usingComponents&quot;: {},</p><p>&quot;navigationBarBackgroundColor&quot;: &quot;#00ff00&quot;,</p><p>&quot;navigationBarTitleText&quot;: &quot;首页&quot;,</p><p>&quot;navigationBarTextStyle&quot;: &quot;black&quot;</p><p>}</p><h3 id="_3-sitemap-的配置-了解" tabindex="-1">3 sitemap 的配置(了解) <a class="header-anchor" href="#_3-sitemap-的配置-了解" aria-label="Permalink to &quot;3 sitemap 的配置(了解)&quot;">​</a></h3><p>小程序项目完成</p><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
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
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="获取场景值" tabindex="-1">获取场景值 <a class="header-anchor" href="#获取场景值" aria-label="Permalink to &quot;获取场景值&quot;">​</a></h2><p>对于小程序，可以在 <code>App</code> 的 <code>onLaunch</code> 和 <code>onShow</code>，或<a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html" target="_blank" rel="noreferrer">wx.getLaunchOptionsSync</a> 中获取上述场景值。</p><h2 id="路由封装" tabindex="-1">路由封装 <a class="header-anchor" href="#路由封装" aria-label="Permalink to &quot;路由封装&quot;">​</a></h2><ol><li>在app.js入口文件写请求地址；</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">App</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    globalData: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        currentEnv: </span><span style="color:#9ECBFF;">&#39;prod&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//当前环境</span></span>
<span class="line"><span style="color:#E1E4E8;">        host: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        hostServe: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">        authorization: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// token</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onLaunch</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.globalData.host </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.globalData.hostServe[</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.globalData.currentEnv]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">App</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    globalData: {</span></span>
<span class="line"><span style="color:#24292E;">        currentEnv: </span><span style="color:#032F62;">&#39;prod&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//当前环境</span></span>
<span class="line"><span style="color:#24292E;">        host: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        hostServe: {},</span></span>
<span class="line"><span style="color:#24292E;">        authorization: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// token</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onLaunch</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.globalData.host </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.globalData.hostServe[</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.globalData.currentEnv]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="2"><li>创建util/common.js文件，里面写封装路由的方法</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">APP</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getApp</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 获取全局方法</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">GET_DATA</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">opt</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> origin; </span><span style="color:#6A737D;">// 接口域名</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">URL</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// http请求地址</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> contentType </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> opt.contentType </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;application/json&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 接口请求类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> authorization </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">APP</span><span style="color:#E1E4E8;">.globalData.authorization;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> opt.data </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 请求数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> method </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> opt.method </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;GET&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(method.</span><span style="color:#B392F0;">toUpperCase</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">        data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(data)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> fnSuccess </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> opt.success </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// token的命名根据自己项目来定</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> accessToken </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> wx.</span><span style="color:#B392F0;">getStorageSync</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;access_token&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    wx.</span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: </span><span style="color:#79B8FF;">URL</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        method,</span></span>
<span class="line"><span style="color:#E1E4E8;">        header: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;Content-Type&#39;</span><span style="color:#E1E4E8;">: contentType,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;Authorization&#39;</span><span style="color:#E1E4E8;">: authorization,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;time&#39;</span><span style="color:#E1E4E8;">: Date.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">(), </span><span style="color:#6A737D;">//Long型时间戳</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;token&#39;</span><span style="color:#E1E4E8;">: accessToken, </span><span style="color:#6A737D;">// 统一用户token</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        data,</span></span>
<span class="line"><span style="color:#E1E4E8;">        dataType: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">res.data) </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 以下做拦截的请求, 当需要成功时则调用 fnSuccess &amp;&amp; fnSuccess(res.data) 将data返回</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            wx.</span><span style="color:#B392F0;">showToast</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                title: </span><span style="color:#9ECBFF;">&#39;网络错误, 请稍后再试&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                duration: </span><span style="color:#79B8FF;">1500</span></span>
<span class="line"><span style="color:#E1E4E8;">            })</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">APP</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getApp</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 获取全局方法</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">GET_DATA</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">opt</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> origin; </span><span style="color:#6A737D;">// 接口域名</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">URL</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// http请求地址</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> contentType </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> opt.contentType </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;application/json&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 接口请求类型</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> authorization </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">APP</span><span style="color:#24292E;">.globalData.authorization;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> opt.data </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 请求数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> method </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> opt.method </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;GET&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(method.</span><span style="color:#6F42C1;">toUpperCase</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;POST&#39;</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">        data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(data)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> fnSuccess </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> opt.success </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// token的命名根据自己项目来定</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> accessToken </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> wx.</span><span style="color:#6F42C1;">getStorageSync</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;access_token&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    wx.</span><span style="color:#6F42C1;">request</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        url: </span><span style="color:#005CC5;">URL</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        method,</span></span>
<span class="line"><span style="color:#24292E;">        header: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;Content-Type&#39;</span><span style="color:#24292E;">: contentType,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;Authorization&#39;</span><span style="color:#24292E;">: authorization,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;time&#39;</span><span style="color:#24292E;">: Date.</span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">(), </span><span style="color:#6A737D;">//Long型时间戳</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;token&#39;</span><span style="color:#24292E;">: accessToken, </span><span style="color:#6A737D;">// 统一用户token</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        data,</span></span>
<span class="line"><span style="color:#24292E;">        dataType: </span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">res.data) </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 以下做拦截的请求, 当需要成功时则调用 fnSuccess &amp;&amp; fnSuccess(res.data) 将data返回</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            wx.</span><span style="color:#6F42C1;">showToast</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                title: </span><span style="color:#032F62;">&#39;网络错误, 请稍后再试&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                duration: </span><span style="color:#005CC5;">1500</span></span>
<span class="line"><span style="color:#24292E;">            })</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>`,33),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const q=s(l,[["render",t]]);export{F as __pageData,q as default};
