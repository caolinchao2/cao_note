import{_ as i,o as a,c as t,Q as o}from"./chunks/framework.b5309610.js";const _=JSON.parse('{"title":"配置支付宝接口","description":"","frontmatter":{},"headers":[],"relativePath":"other-note/配置支付宝接口.md","filePath":"other-note/配置支付宝接口.md","lastUpdated":1720779672000}'),m={name:"other-note/配置支付宝接口.md"},g=o('<h1 id="配置支付宝接口" tabindex="-1">配置支付宝接口 <a class="header-anchor" href="#配置支付宝接口" aria-label="Permalink to &quot;配置支付宝接口&quot;">​</a></h1><ol><li>登录open.alipay.com；</li><li>找到文档中心，进入之后并找到最下面的电脑网站支付</li></ol><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712162045925.png" alt="image-20240712162045925"></p><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712162903342.png" alt="image-20240712162903342"></p><ol start="3"><li>找到sdk &amp;demo，下载demo示例文件并解压</li></ol><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712162910166.png" alt="image-20240712162910166"></p><ol start="4"><li>找到快速接入并找到配置密钥，进去下载密钥工具</li></ol><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712162917184.png" alt="image-20240712162917184"></p><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712162924089.png" alt="image-20240712162924089"></p><ol start="5"><li>下载之后打开，并运行签名工具并点击生成密钥；</li></ol><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712162930617.png" alt="image-20240712162930617"></p><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712162936799.png" alt="image-20240712162936799"></p><ol start="6"><li>进入到开放平台-沙箱环境中，并进行信息配置，将公钥复制过去；</li></ol><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712162942227.png" alt="image-20240712162942227"></p><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712162946899.png" alt="image-20240712162946899"></p><ol start="7"><li>配置应用网关以及回调地址，填写自己的域名，文件名填写上传到的位置，现在先自定义一个alipay的地址；</li></ol><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712162952488.png" alt="image-20240712162952488"></p><ol start="8"><li>将下载好的demo示例文件使用编辑器打开，并修改里面的文件内容，appid去沙箱平台查看，私钥填写工具生成的，通知地址填写上面的网关地址； 示例：<code>http://39.107.82.176/alipay/notify_url.php</code></li></ol><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712163000623.png" alt="image-20240712163000623"></p><ol start="9"><li>上面改好之后复制支付宝网关中的地址，到搜索里面去查询，修改所有查询到的文件的网关，添加dev，为沙箱环境；所以修改完成之后，不要忘记修改最后面一行，最后一行填写生成的公钥就可以了；</li></ol><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712163005982.png" alt="image-20240712163005982"></p><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712163010521.png" alt="image-20240712163010521"></p><ol start="10"><li>将下载好的demo文件，修改成自己定义的文件名，并上传到服务器上面；并解压，注意路径是alipay的，否则会报错；</li></ol><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/image-20240712163014731.png" alt="image-20240712163014731"></p><ol start="11"><li>之后可以访问域名加上文件夹，进行支付测试，登录账号密码去沙箱账号进行查看；</li></ol>',25),e=[g];function l(n,c,p,r,s,h){return a(),t("div",null,e)}const b=i(m,[["render",l]]);export{_ as __pageData,b as default};
