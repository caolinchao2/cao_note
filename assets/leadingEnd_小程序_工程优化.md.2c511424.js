import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.b5309610.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"leadingEnd/小程序/工程优化.md","filePath":"leadingEnd/小程序/工程优化.md","lastUpdated":1723012755000}'),l={name:"leadingEnd/小程序/工程优化.md"},p=e(`<h2 id="工程优化" tabindex="-1">工程优化 <a class="header-anchor" href="#工程优化" aria-label="Permalink to &quot;工程优化&quot;">​</a></h2><h3 id="分包" tabindex="-1">分包 <a class="header-anchor" href="#分包" aria-label="Permalink to &quot;分包&quot;">​</a></h3><p>某些情况下，开发者需要将小程序划分成不同的子包，在构建时打包成不同的分包，用户在使用时按需进行加载。每个使用分包小程序必定含有一个主包。所谓的主包，即放置默认启动页面/TabBar 页面，以及一些所有分包都需用到公共资源/JS 脚本；而分包则是根据开发者的配置进行划分。</p><p><strong>优势</strong></p><p>1.在小程序启动时，默认会下载主包并启动主包内页面，当用户进入分包内某个页面时，客户端会把对应分包下载下来，下载完成后再进行展示。 2.单个分包/主包大小不能超过 2M,整个小程序所有分包大小不超过 20M,能够将工程大小扩充到20M 3.对小程序进行分包，可以优化小程序首次启动的下载时间，以及在多团队共同开发时可以更好的解耦协作。</p><h4 id="配置分包结构" tabindex="-1">配置分包结构 <a class="header-anchor" href="#配置分包结构" aria-label="Permalink to &quot;配置分包结构&quot;">​</a></h4><p>开发者通过在 app.json <code>subpackages</code> 字段声明项目分包结构：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">  &quot;subPackages&quot;: [{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;root&quot;: &quot;animal&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;pages&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;pages/dog/dog&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;pages/cat/cat&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  },{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;root&quot;: &quot;fruit&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;pages&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;pages/apple/apple&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;pages/orange/orange&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  }],</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">  &quot;subPackages&quot;: [{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;root&quot;: &quot;animal&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;pages&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">      &quot;pages/dog/dog&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;pages/cat/cat&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">  },{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;root&quot;: &quot;fruit&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;pages&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">      &quot;pages/apple/apple&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;pages/orange/orange&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">  }],</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="打包原则" tabindex="-1">打包原则 <a class="header-anchor" href="#打包原则" aria-label="Permalink to &quot;打包原则&quot;">​</a></h4><ul><li>声明 <code>subpackages</code> 后，将按 <code>subpackages</code> 配置路径进行打包，<code>subpackages</code> 配置路径外的目录将被打包到 app（主包） 中</li><li>app（主包）也可以有自己的 pages（即最外层的 pages 字段）</li><li><code>subpackage</code> 的根目录不能是另外一个 <code>subpackage</code> 内的子目录</li><li><code>tabBar</code> 页面必须在 app（主包）内</li></ul><h4 id="引用原则" tabindex="-1">引用原则 <a class="header-anchor" href="#引用原则" aria-label="Permalink to &quot;引用原则&quot;">​</a></h4><ul><li><code>packageA</code> 无法 require <code>packageB</code> JS 文件，但可以 require <code>app</code>、自己 package 内的 JS 文件；使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/async.html" target="_blank" rel="noreferrer">分包异步化</a> 时不受此条限制</li><li><code>packageA</code> 无法 import <code>packageB</code> 的 template，但可以 require <code>app</code>、自己 package 内的 template</li><li><code>packageA</code> 无法使用 <code>packageB</code> 的资源，但可以使用 <code>app</code>、自己 package 内的资源</li></ul><h4 id="_1-2-独立分包" tabindex="-1">1.2.独立分包 <a class="header-anchor" href="#_1-2-独立分包" aria-label="Permalink to &quot;1.2.独立分包&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;subPackages&quot;: [{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;root&quot;: &quot;animal&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;pages&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;pages/dog/dog&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;pages/cat/cat&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;independent&quot;: true</span></span>
<span class="line"><span style="color:#e1e4e8;">  },{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;root&quot;: &quot;fruit&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;pages&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;pages/apple/apple&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;pages/orange/orange&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  }],</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;subPackages&quot;: [{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;root&quot;: &quot;animal&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;pages&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">      &quot;pages/dog/dog&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;pages/cat/cat&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">    &quot;independent&quot;: true</span></span>
<span class="line"><span style="color:#24292e;">  },{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;root&quot;: &quot;fruit&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;pages&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">      &quot;pages/apple/apple&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;pages/orange/orange&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">  }],</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li><strong>独立分包中不能依赖主包和其他分包中的内容</strong>，包括 js 文件、template、wxss、自定义组件、插件等（使用 <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/async.html" target="_blank" rel="noreferrer">分包异步化</a> 时 js 文件、自定义组件、插件不受此条限制）</li><li>主包中的 <code>app.wxss</code> 对独立分包无效，应避免在独立分包页面中使用 <code>app.wxss</code> 中的样式；</li><li><code>App</code> 只能在主包内定义，独立分包中不能定义 <code>App</code>，会造成无法预期的行为；</li><li>独立分包中暂时不支持使用插件。</li></ul><h4 id="_1-3-分包预下载" tabindex="-1">1.3.分包预下载 <a class="header-anchor" href="#_1-3-分包预下载" aria-label="Permalink to &quot;1.3.分包预下载&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;preloadRule&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;pages/index/index&quot;:{</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   &quot;network&quot;: &quot;wifi&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   &quot;packages&quot;: [&quot;animal&quot;,&quot;fruit&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;pages/detail/detail&quot;:{</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   &quot;network&quot;: &quot;all&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   &quot;packages&quot;: [&quot;animal&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"> },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;preloadRule&quot;: {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &quot;pages/index/index&quot;:{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">   &quot;network&quot;: &quot;wifi&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">   &quot;packages&quot;: [&quot;animal&quot;,&quot;fruit&quot;]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &quot;pages/detail/detail&quot;:{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">   &quot;network&quot;: &quot;all&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">   &quot;packages&quot;: [&quot;animal&quot;]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="基础库低版本处理" tabindex="-1">基础库低版本处理 <a class="header-anchor" href="#基础库低版本处理" aria-label="Permalink to &quot;基础库低版本处理&quot;">​</a></h3><p>小程序的功能不断的增加，但是旧版本的微信客户端并不支持新功能，所以在使用这些新能力的时候需要做兼容。</p><h4 id="版本号比较" tabindex="-1">版本号比较 <a class="header-anchor" href="#版本号比较" aria-label="Permalink to &quot;版本号比较&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function compareVersion(v1, v2) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    v1 = v1.split(&#39;.&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    v2 = v2.split(&#39;.&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    const len = Math.max(v1.length, v2.length)</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">    while (v1.length &lt; len) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      v1.push(&#39;0&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    while (v2.length &lt; len) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      v2.push(&#39;0&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">    for (let i = 0; i &lt; len; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      const num1 = parseInt(v1[i])</span></span>
<span class="line"><span style="color:#e1e4e8;">      const num2 = parseInt(v2[i])</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">      if (num1 &gt; num2) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return 1</span></span>
<span class="line"><span style="color:#e1e4e8;">      } else if (num1 &lt; num2) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return -1</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">    return 0</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  export default  compareVersion</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function compareVersion(v1, v2) {</span></span>
<span class="line"><span style="color:#24292e;">    v1 = v1.split(&#39;.&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    v2 = v2.split(&#39;.&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    const len = Math.max(v1.length, v2.length)</span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    while (v1.length &lt; len) {</span></span>
<span class="line"><span style="color:#24292e;">      v1.push(&#39;0&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    while (v2.length &lt; len) {</span></span>
<span class="line"><span style="color:#24292e;">      v2.push(&#39;0&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    for (let i = 0; i &lt; len; i++) {</span></span>
<span class="line"><span style="color:#24292e;">      const num1 = parseInt(v1[i])</span></span>
<span class="line"><span style="color:#24292e;">      const num2 = parseInt(v2[i])</span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">      if (num1 &gt; num2) {</span></span>
<span class="line"><span style="color:#24292e;">        return 1</span></span>
<span class="line"><span style="color:#24292e;">      } else if (num1 &lt; num2) {</span></span>
<span class="line"><span style="color:#24292e;">        return -1</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">    return 0</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  export default  compareVersion</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h4 id="api-存在判断" tabindex="-1">API 存在判断 <a class="header-anchor" href="#api-存在判断" aria-label="Permalink to &quot;API 存在判断&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">if(wx.showModal){</span></span>
<span class="line"><span style="color:#e1e4e8;">            wx.showModal({</span></span>
<span class="line"><span style="color:#e1e4e8;">              cancelColor: &#39;cancelColor&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">              title:&quot;系统提示&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;">        }else{</span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(&quot;版本低&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">if(wx.showModal){</span></span>
<span class="line"><span style="color:#24292e;">            wx.showModal({</span></span>
<span class="line"><span style="color:#24292e;">              cancelColor: &#39;cancelColor&#39;,</span></span>
<span class="line"><span style="color:#24292e;">              title:&quot;系统提示&quot;</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;">        }else{</span></span>
<span class="line"><span style="color:#24292e;">            console.log(&quot;版本低&quot;)</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="wx-caniuse" tabindex="-1">wx.canIUse <a class="header-anchor" href="#wx-caniuse" aria-label="Permalink to &quot;wx.canIUse&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"> wx.canIUse(&#39;view.hover-stop-propagation&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"> wx.canIUse(&#39;view.hover-stop-propagation&#39;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="不给这部分用户服务" tabindex="-1">不给这部分用户服务 <a class="header-anchor" href="#不给这部分用户服务" aria-label="Permalink to &quot;不给这部分用户服务&quot;">​</a></h4><p>在设置中设置最低版本。</p><h3 id="骨架屏使用" tabindex="-1">骨架屏使用 <a class="header-anchor" href="#骨架屏使用" aria-label="Permalink to &quot;骨架屏使用&quot;">​</a></h3><p>1 使用新版的微信开发者工具(大于 <a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/nightly.html" target="_blank" rel="noreferrer">1.03.2006032</a> 或 <a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/nightly.html" target="_blank" rel="noreferrer">1.04.2006032</a> )</p><p>2 微信开发者工具上模拟器右下角有三个点，点击生成骨架屏--在对应的页面目录下产生骨架屏的wxml 和wxss</p><p>3 使用骨架屏(模板和引用)</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;import src=&quot;./list.skeleton.wxml&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;template is=&quot;skeleton&quot; wx:if=&quot;{{loading}}&quot;&gt;&lt;/template&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;import src=&quot;./list.skeleton.wxml&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;template is=&quot;skeleton&quot; wx:if=&quot;{{loading}}&quot;&gt;&lt;/template&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,32),o=[p];function c(t,r,i,u,d,b){return n(),a("div",null,o)}const y=s(l,[["render",c]]);export{m as __pageData,y as default};
