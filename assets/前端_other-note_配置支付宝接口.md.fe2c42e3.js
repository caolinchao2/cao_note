import{_ as E,o as t,c as e,Q as a}from"./chunks/framework.b5309610.js";const g=JSON.parse('{"title":"配置支付宝接口","description":"","frontmatter":{},"headers":[],"relativePath":"前端/other-note/配置支付宝接口.md","filePath":"前端/other-note/配置支付宝接口.md","lastUpdated":1715053679000}'),i={name:"前端/other-note/配置支付宝接口.md"},n=a('<h1 id="配置支付宝接口" tabindex="-1">配置支付宝接口 <a class="header-anchor" href="#配置支付宝接口" aria-label="Permalink to &quot;配置支付宝接口&quot;">​</a></h1><ol><li>登录open.alipay.com；</li><li>找到文档中心，进入之后并找到最下面的电脑网站支付</li></ol><p><img src="https://notecdn.hrhe.cn/images/%E9%85%8D%E7%BD%AE%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8E%A5%E5%8F%A3-01.png" alt="image"></p><p><img src="https://notecdn.hrhe.cn/images/%E9%85%8D%E7%BD%AE%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8E%A5%E5%8F%A3-02.png" alt="image"></p><ol start="3"><li>找到sdk &amp;demo，下载demo示例文件并解压</li></ol><p><img src="https://notecdn.hrhe.cn/images/%E9%85%8D%E7%BD%AE%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8E%A5%E5%8F%A3-03.png" alt="image"></p><ol start="4"><li>找到快速接入并找到配置密钥，进去下载密钥工具</li></ol><p><img src="https://notecdn.hrhe.cn/images/%E9%85%8D%E7%BD%AE%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8E%A5%E5%8F%A3-04.png" alt="image"></p><p><img src="https://notecdn.hrhe.cn/images/%E9%85%8D%E7%BD%AE%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8E%A5%E5%8F%A3-05.png" alt="image"></p><ol start="5"><li>下载之后打开，并运行签名工具并点击生成密钥；</li></ol><p><img src="https://notecdn.hrhe.cn/images/%E9%85%8D%E7%BD%AE%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8E%A5%E5%8F%A3-06.png" alt="image"></p><p><img src="https://notecdn.hrhe.cn/images/%E9%85%8D%E7%BD%AE%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8E%A5%E5%8F%A3-07.png" alt="image"></p><ol start="6"><li>进入到开放平台-沙箱环境中，并进行信息配置，将公钥复制过去；</li></ol><p><img src="https://notecdn.hrhe.cn/images/%E9%85%8D%E7%BD%AE%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8E%A5%E5%8F%A3-08.png" alt="image"></p><p><img src="https://notecdn.hrhe.cn/images/%E9%85%8D%E7%BD%AE%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8E%A5%E5%8F%A3-09.png" alt="image"></p><ol start="7"><li>配置应用网关以及回调地址，填写自己的域名，文件名填写上传到的位置，现在先自定义一个alipay的地址；</li></ol><p><img src="https://notecdn.hrhe.cn/images/%E9%85%8D%E7%BD%AE%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8E%A5%E5%8F%A3-10.png" alt="image"></p><ol start="8"><li>将下载好的demo示例文件使用编辑器打开，并修改里面的文件内容，appid去沙箱平台查看，私钥填写工具生成的，通知地址填写上面的网关地址； 示例：<code>http://39.107.82.176/alipay/notify_url.php</code></li></ol><p><img src="https://notecdn.hrhe.cn/images/%E9%85%8D%E7%BD%AE%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8E%A5%E5%8F%A3-11.png" alt="image"></p><ol start="9"><li>上面改好之后复制支付宝网关中的地址，到搜索里面去查询，修改所有查询到的文件的网关，添加dev，为沙箱环境；所以修改完成之后，不要忘记修改最后面一行，最后一行填写生成的公钥就可以了；</li></ol><p><img src="https://notecdn.hrhe.cn/images/%E9%85%8D%E7%BD%AE%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8E%A5%E5%8F%A3-12.png" alt="image"></p><p><img src="https://notecdn.hrhe.cn/images/%E9%85%8D%E7%BD%AE%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8E%A5%E5%8F%A3-13.png" alt="image"></p><ol start="10"><li>将下载好的demo文件，修改成自己定义的文件名，并上传到服务器上面；并解压，注意路径是alipay的，否则会报错；</li></ol><p><img src="https://notecdn.hrhe.cn/images/%E9%85%8D%E7%BD%AE%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8E%A5%E5%8F%A3-14.png" alt="image"></p><ol start="11"><li>之后可以访问域名加上文件夹，进行支付测试，登录账号密码去沙箱账号进行查看；</li></ol>',25),p=[n];function s(l,o,A,c,r,h){return t(),e("div",null,p)}const B=E(i,[["render",s]]);export{g as __pageData,B as default};
