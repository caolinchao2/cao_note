import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.b5309610.js";const g=JSON.parse('{"title":"Typora 常用设置选项","description":"","frontmatter":{},"headers":[],"relativePath":"other-note/Typora设置.md","filePath":"other-note/Typora设置.md","lastUpdated":null}'),l={name:"other-note/Typora设置.md"},o=e(`<h1 id="typora-常用设置选项" tabindex="-1">Typora 常用设置选项 <a class="header-anchor" href="#typora-常用设置选项" aria-label="Permalink to &quot;Typora 常用设置选项&quot;">​</a></h1><h2 id="设置图片自动上传github" tabindex="-1">设置图片自动上传github <a class="header-anchor" href="#设置图片自动上传github" aria-label="Permalink to &quot;设置图片自动上传github&quot;">​</a></h2><ol><li>转到文件-&gt;偏好设置-&gt;图像</li><li>按照以下示例，首先选好对应的上传服务，之后再下载更新文件</li></ol><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712164121965.png" alt="image-20240712164121965"></p><ol start="3"><li>打开配置文件； <ul><li>repo输入格式：wing/h-note，前者为github用户名, 后者为目录名</li><li>path路径为 图片上传的路径，下列表示在当前目录的img目录下</li></ul></li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;picBed&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;github&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;repo&quot;: &quot;\${github-username/github-repo}&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;token&quot;: &quot;\${github-token}&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;path&quot;: &quot;img/&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;customUrl&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;branch&quot;: &quot;master&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;current&quot;: &quot;github&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;uploader&quot;: &quot;github&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;picgoPlugins&quot;: {}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;picBed&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;github&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;repo&quot;: &quot;\${github-username/github-repo}&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;token&quot;: &quot;\${github-token}&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;path&quot;: &quot;img/&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;customUrl&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;branch&quot;: &quot;master&quot;</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    &quot;current&quot;: &quot;github&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;uploader&quot;: &quot;github&quot;</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  &quot;picgoPlugins&quot;: {}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol start="4"><li>进入github，按照以下操作 <ul><li>点击头像--&gt;点击settings--&gt;点击Developer settings--&gt;点击Personal access tokens--&gt;点击create new token--&gt;输入token的名字--&gt;仅勾选repo选项即可；</li></ul></li></ol><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712164126130.png" alt="image-20240712164126130"></p><p>之后点击创建，复制给出的token，token刷新之后再也无法看见，注意保存好，最后将token输入到配置文件的对应位置即可；</p><ol start="5"><li>设置好之后点击测试是否可以上传了，可能会上传失败，可以多试几次</li></ol><p>我的最终配置：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;picBed&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;github&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;repo&quot;: &quot;wing/h-note&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;token&quot;: &quot;e53233d92e704ec4529ba1ec37d34dd43f7f96d7&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;path&quot;: &quot;image/&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;customUrl&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;branch&quot;: &quot;master&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;current&quot;: &quot;github&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;uploader&quot;: &quot;github&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;picgoPlugins&quot;: {}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;picBed&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;github&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;repo&quot;: &quot;wing/h-note&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;token&quot;: &quot;e53233d92e704ec4529ba1ec37d34dd43f7f96d7&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;path&quot;: &quot;image/&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;customUrl&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;branch&quot;: &quot;master&quot;</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    &quot;current&quot;: &quot;github&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;uploader&quot;: &quot;github&quot;</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  &quot;picgoPlugins&quot;: {}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>参考博客：<a href="https://blog.csdn.net/xiaozecheng/article/details/105197126" target="_blank" rel="noreferrer">https://blog.csdn.net/xiaozecheng/article/details/105197126</a></p><h2 id="配置typora样式文件" tabindex="-1">配置Typora样式文件 <a class="header-anchor" href="#配置typora样式文件" aria-label="Permalink to &quot;配置Typora样式文件&quot;">​</a></h2><ol><li>进入文件--&gt;偏好设置--&gt;外观--&gt;打开主题文件夹</li><li>创建base.user.css文件</li><li>在Typora工具中，按shift+f12打开开发者工具</li><li>使用箭头选中元素，复制对应的类名，修改样式即可</li></ol><h2 id="配置自动上传到七牛云" tabindex="-1">配置自动上传到七牛云 <a class="header-anchor" href="#配置自动上传到七牛云" aria-label="Permalink to &quot;配置自动上传到七牛云&quot;">​</a></h2><p><a href="https://blog.csdn.net/weimeibuqieryu/article/details/105315807" target="_blank" rel="noreferrer">typora+picgo+七牛云实现图片上传</a></p>`,17),t=[o];function p(r,i,u,c,q,b){return n(),a("div",null,t)}const d=s(l,[["render",p]]);export{g as __pageData,d as default};
