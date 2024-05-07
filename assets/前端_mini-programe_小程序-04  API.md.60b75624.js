import{_ as a,o as s,c as l,Q as e}from"./chunks/framework.b5309610.js";const m=JSON.parse('{"title":"小程序-04  API","description":"","frontmatter":{},"headers":[],"relativePath":"前端/mini-programe/小程序-04  API.md","filePath":"前端/mini-programe/小程序-04  API.md","lastUpdated":null}'),o={name:"前端/mini-programe/小程序-04  API.md"},n=e(`<h1 id="小程序-04-api" tabindex="-1">小程序-04 API <a class="header-anchor" href="#小程序-04-api" aria-label="Permalink to &quot;小程序-04  API&quot;">​</a></h1><h2 id="一、路由跳转" tabindex="-1">一、路由跳转 <a class="header-anchor" href="#一、路由跳转" aria-label="Permalink to &quot;一、路由跳转&quot;">​</a></h2><ol><li>wx.redirectTo(object)：重定向，对tabBar不管用；</li><li>wx.navigateTo() 打开新页面，保留当前页面（有返回按钮），对tabBar不管用；</li><li>wx.navigateBack()；返回；不需要写参数；</li><li>wx.switchTab()；tab切换，只能切换tabBar页面；</li><li>wx.reLaunch() 关闭所有页面，重定向，可以打开任意页面</li></ol><p>属性：url ，路径填写pages下的组件；记得带上/；如：/pages/info/info；</p><p>events，页面通过接口，当数据过多时，可以使用；</p><p>查看官网地址：<a href="https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html</a></p><p>getCurrentPages() 获取当前页面路由；</p><p>注意：调用页面路由带的参数可以在onLoad中获取；</p><h2 id="二、界面" tabindex="-1">二、界面 <a class="header-anchor" href="#二、界面" aria-label="Permalink to &quot;二、界面&quot;">​</a></h2><ol><li>wx.showToast({}) 显示消息提示框，会自动消失</li></ol><ul><li>title： 提示的内容</li><li>icon： 图标</li><li>image： 自定义图标的本地路径</li><li>duration： 提示的延迟时间</li></ul><ol start="2"><li><p>showLoading({}) 显示loading提示框，需调用wx.hideLoading()才能关闭；</p></li><li><p>wx.showsModal({}) 显示模态对话框 有确定取消按钮</p></li></ol><ul><li>title： 提示标题</li><li>content： 提示内容</li><li>success： 接口调用成功的回调</li></ul><ol start="4"><li>wx.showActionSheet 显示操作菜单</li></ol><ul><li>itemList： 数组或字符串，按钮的文字数组，最多6个；</li><li>itemColor： 文字颜色</li><li>success：成功的回调；res返回用户点击的按钮序号；</li><li>fail： 用户点击取消触发；</li></ul><h2 id="三、数据缓存" tabindex="-1">三、数据缓存 <a class="header-anchor" href="#三、数据缓存" aria-label="Permalink to &quot;三、数据缓存&quot;">​</a></h2><ol><li>设置</li></ol><p>wx.setStorage({}) 设置缓存 以key，data存取；success为成功的回调；</p><p>wx.setStoargeSync(key,value) 同步设置 如果错误使用try,catch；</p><ol start="2"><li>获取</li></ol><p>wx.getStorage({}) 获取缓存 没有设置好也会调用，调用key获取</p><p>wx.getStoargeSync() 同步获取</p><ol start="3"><li>移除</li></ol><p>wx.removeStorage({}) 传入key，success为成功回调；</p><p>wx.removeStorageSync(key) 从本地缓存移除指定key</p><ol start="4"><li>清除</li></ol><p>wx.clearStorageSync() 同步清除缓存</p><p>wx.clearStorage();</p><h2 id="四、请求网络" tabindex="-1">四、请求网络 <a class="header-anchor" href="#四、请求网络" aria-label="Permalink to &quot;四、请求网络&quot;">​</a></h2><ol><li>wx.request() 微信请求需要开启详情里面的不校验开启，上线需要在后台开发设置添加合法域名，线上请求地址必须是https；</li></ol><ul><li>url： 请求地址；</li><li>data： 一个对象，将需要传入的参数写入，也可以直接在url后面填写</li><li>success： 请求成功回调，注意this指向，可以在外面保留一下；</li><li>fail： 请求失败参数</li><li>method： get/post</li></ul><p>技巧：减少请求的次数</p><p>（1）将请求的数据存放在Storage里面，做判断，将Storage赋为一个空，之后判断storage是否为空，如果为空则获取数据，并存入数据，如果不为空，则不获取；</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> arr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> wx.</span><span style="color:#B392F0;">getStorage</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(arr){</span></span>
<span class="line"><span style="color:#E1E4E8;">    wx.</span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">.)</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> wx.</span><span style="color:#6F42C1;">getStorage</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(arr){</span></span>
<span class="line"><span style="color:#24292E;">    wx.</span><span style="color:#6F42C1;">request</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">.)</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>（2）新建一个目录，放js文件，将json数据复制到一个变量上，将这个变量导出；之后在需要的目录下引入该文件；引入必须填写相对路径；</p><h2 id="五、微信分享" tabindex="-1">五、微信分享 <a class="header-anchor" href="#五、微信分享" aria-label="Permalink to &quot;五、微信分享&quot;">​</a></h2><ol><li>链接：<a href="https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html</a></li></ol>`,37),t=[n];function p(r,i,c,d,h,u){return s(),l("div",null,t)}const g=a(o,[["render",p]]);export{m as __pageData,g as default};
