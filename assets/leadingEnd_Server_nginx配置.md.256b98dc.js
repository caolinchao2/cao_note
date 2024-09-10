import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.d7c6e0b6.js";const u=JSON.parse('{"title":"nginx配置","description":"","frontmatter":{},"headers":[],"relativePath":"leadingEnd/Server/nginx配置.md","filePath":"leadingEnd/Server/nginx配置.md","lastUpdated":1720779672000}'),l={name:"leadingEnd/Server/nginx配置.md"},e=p(`<h1 id="nginx配置" tabindex="-1">nginx配置 <a class="header-anchor" href="#nginx配置" aria-label="Permalink to &quot;nginx配置&quot;">​</a></h1><h2 id="搭建静态站点" tabindex="-1">搭建静态站点 <a class="header-anchor" href="#搭建静态站点" aria-label="Permalink to &quot;搭建静态站点&quot;">​</a></h2><div class="language-nginx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 虚拟主机server块</span></span>
<span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 端口</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 匹配请求中的host值</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;"> www.wing.vip;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 监听请求路径</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># return 503; # 可以直接指定返回的code</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 查找目录</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;">/source;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 默认查找</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> index </span><span style="color:#E1E4E8;">index.html index.htm;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 虚拟主机server块</span></span>
<span class="line"><span style="color:#D73A49;">server</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 端口</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> listen </span><span style="color:#24292E;">  </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 匹配请求中的host值</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> server_name </span><span style="color:#24292E;"> www.wing.vip;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 监听请求路径</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">/ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># return 503; # 可以直接指定返回的code</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 查找目录</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> root </span><span style="color:#24292E;">/source;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 默认查找</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> index </span><span style="color:#24292E;">index.html index.htm;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>配置完之后执行<code>nginx -t</code>查看是否有错误，如果看到下面的就是成功了</p><p>如果封装的docker执行：</p><ul><li>执行<code>docker ps</code> 查看<code>nginx</code>名字</li><li><code>docker exec -it data_nginx_1 nginx -t</code></li><li>进入nginx容器：<code>docker exec -it data_nginx_1 bash</code>；</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nginx:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">configuration</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/nginx/nginx.conf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">syntax</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ok</span></span>
<span class="line"><span style="color:#B392F0;">nginx:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">configuration</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">file</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/nginx/nginx.conf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">successful</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nginx:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">configuration</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/nginx/nginx.conf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">syntax</span><span style="color:#24292E;"> </span><span style="color:#032F62;">is</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ok</span></span>
<span class="line"><span style="color:#6F42C1;">nginx:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">configuration</span><span style="color:#24292E;"> </span><span style="color:#032F62;">file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/nginx/nginx.conf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span><span style="color:#24292E;"> </span><span style="color:#032F62;">is</span><span style="color:#24292E;"> </span><span style="color:#032F62;">successful</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="配置参数" tabindex="-1">配置参数 <a class="header-anchor" href="#配置参数" aria-label="Permalink to &quot;配置参数&quot;">​</a></h2><div class="language-nginx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> 		</span><span style="color:#6A737D;"># 配置虚拟主机的相关参数，可以有多个 </span></span>
<span class="line"><span style="color:#E1E4E8;">server_name </span><span style="color:#6A737D;"># 通过请求中的host值 找到对应的虚拟主机的配置 </span></span>
<span class="line"><span style="color:#E1E4E8;">location 	</span><span style="color:#6A737D;"># 配置请求路由，处理相关页面情况 </span></span>
<span class="line"><span style="color:#E1E4E8;">root 		</span><span style="color:#6A737D;"># 查找资源的路径</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">server</span><span style="color:#24292E;"> 		</span><span style="color:#6A737D;"># 配置虚拟主机的相关参数，可以有多个 </span></span>
<span class="line"><span style="color:#24292E;">server_name </span><span style="color:#6A737D;"># 通过请求中的host值 找到对应的虚拟主机的配置 </span></span>
<span class="line"><span style="color:#24292E;">location 	</span><span style="color:#6A737D;"># 配置请求路由，处理相关页面情况 </span></span>
<span class="line"><span style="color:#24292E;">root 		</span><span style="color:#6A737D;"># 查找资源的路径</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="常用指令" tabindex="-1">常用指令 <a class="header-anchor" href="#常用指令" aria-label="Permalink to &quot;常用指令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> 		</span><span style="color:#6A737D;"># 检查配置文件是否有语法错误 </span></span>
<span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reload</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 向主进程发送信号，重新加载配置文件 </span></span>
<span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> 	</span><span style="color:#6A737D;"># 快速关闭 </span></span>
<span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">quit</span><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;"># 等待工作进程处理完成后关闭</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> 		</span><span style="color:#6A737D;"># 检查配置文件是否有语法错误 </span></span>
<span class="line"><span style="color:#6F42C1;">nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reload</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 向主进程发送信号，重新加载配置文件 </span></span>
<span class="line"><span style="color:#6F42C1;">nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> 	</span><span style="color:#6A737D;"># 快速关闭 </span></span>
<span class="line"><span style="color:#6F42C1;">nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">quit</span><span style="color:#24292E;">	</span><span style="color:#6A737D;"># 等待工作进程处理完成后关闭</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><div class="language-nginx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 定义 nginx 运行的用户和用户组</span></span>
<span class="line"><span style="color:#6A737D;"># user  nginx;</span></span>
<span class="line"><span style="color:#6A737D;"># CPU 总核心数</span></span>
<span class="line"><span style="color:#F97583;">worker_processes </span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">error_log </span><span style="color:#E1E4E8;"> /var/log/nginx/error.log</span><span style="color:#79B8FF;"> warn</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;"># 进程文件</span></span>
<span class="line"><span style="color:#F97583;">pid </span><span style="color:#E1E4E8;">       /var/run/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">events</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 最大访问量</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> worker_connections </span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">http: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">upstream</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">jsanntq </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># upstream 的负载均衡，weight 是权重，可以根据机器配置定义权重。weigth 参数表示权值，权值越高被分配到的几率越大。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> 192.168.1.20:80 </span><span style="color:#FFAB70;">weight</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    server 192.168.1.21:80 </span><span style="color:#FFAB70;">weight</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    server 192.168.1.22:80 </span><span style="color:#FFAB70;">weight</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  upstream jsanntqAdmin{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 标记为备份服务器。当主服务器不可用时，将传递与备份服务器的连接。</span></span>
<span class="line"><span style="color:#E1E4E8;">    backup;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 保持会话，保证同一客户端始终访问一台服务器。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">ip_hash</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 优先分配最少连接数的服务器，避免服务器超载请求过多。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">least_conn</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 设置服务器的权重，默认为1，权重大的会被优先分配。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> 192.168.1.20:80 </span><span style="color:#FFAB70;">weight</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  server {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 端口</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 如果 Host 头部不匹配任何一个 server_name ,Nginx 将请求路由到默认虚拟服务器。</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 默认虚拟服务器是指：nginx.conf 文件中第一个 server 或者 显式用 default_server 声明</span></span>
<span class="line"><span style="color:#E1E4E8;">    listen      </span><span style="color:#79B8FF;">80 default_server</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#域名</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;">www.jsanntq.cn</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 开启gzip 压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">    gzip</span><span style="color:#79B8FF;"> on</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 设置gzip所需的http协议最低版本 （HTTP/1.1, HTTP/1.0）</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> gzip_http_version </span><span style="color:#E1E4E8;">1.1;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 设置压缩级别，压缩级别越高压缩时间越长  （1-9）</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> gzip_comp_level </span><span style="color:#E1E4E8;">4;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 设置压缩的最小字节数， 页面Content-Length获取</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> gzip_min_length </span><span style="color:#E1E4E8;">1000;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 设置压缩文件的类型  （text/html)</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> gzip_types </span><span style="color:#E1E4E8;">text/plain application/javascript text/css;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 查找目录</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;">/data/www/blog;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># vue-router history模式配置</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> try_files </span><span style="color:#E1E4E8;">$uri $uri/ /admin/index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/blog </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 代理 proxy_pass指令的参数为：协议+主机名+端口号</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># jsanntq对应upstream后定义的名称</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Host $http_host;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Scheme $scheme;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">http://jsanntq;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> try_files </span><span style="color:#E1E4E8;">$uri $uri/ /blog/index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/admin/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">http://jsanntqAdmin;</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;"> try_files </span><span style="color:#E1E4E8;">$uri $uri/ /admin/index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 多服务配置 用于配置多个项目</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">     </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#多域名</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;">ts.jsanntq.cn blog.jsanntq.cn</span></span>
<span class="line"><span style="color:#E1E4E8;">    location / {</span></span>
<span class="line"><span style="color:#E1E4E8;">        proxy_pass http://localhost:8080;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 定义 nginx 运行的用户和用户组</span></span>
<span class="line"><span style="color:#6A737D;"># user  nginx;</span></span>
<span class="line"><span style="color:#6A737D;"># CPU 总核心数</span></span>
<span class="line"><span style="color:#D73A49;">worker_processes </span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">error_log </span><span style="color:#24292E;"> /var/log/nginx/error.log</span><span style="color:#005CC5;"> warn</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;"># 进程文件</span></span>
<span class="line"><span style="color:#D73A49;">pid </span><span style="color:#24292E;">       /var/run/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">events</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 最大访问量</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> worker_connections </span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">http: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">upstream</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">jsanntq </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># upstream 的负载均衡，weight 是权重，可以根据机器配置定义权重。weigth 参数表示权值，权值越高被分配到的几率越大。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">server</span><span style="color:#24292E;"> 192.168.1.20:80 </span><span style="color:#E36209;">weight</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    server 192.168.1.21:80 </span><span style="color:#E36209;">weight</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    server 192.168.1.22:80 </span><span style="color:#E36209;">weight</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  upstream jsanntqAdmin{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 标记为备份服务器。当主服务器不可用时，将传递与备份服务器的连接。</span></span>
<span class="line"><span style="color:#24292E;">    backup;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 保持会话，保证同一客户端始终访问一台服务器。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">ip_hash</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 优先分配最少连接数的服务器，避免服务器超载请求过多。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">least_conn</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 设置服务器的权重，默认为1，权重大的会被优先分配。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">server</span><span style="color:#24292E;"> 192.168.1.20:80 </span><span style="color:#E36209;">weight</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  server {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 端口</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 如果 Host 头部不匹配任何一个 server_name ,Nginx 将请求路由到默认虚拟服务器。</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 默认虚拟服务器是指：nginx.conf 文件中第一个 server 或者 显式用 default_server 声明</span></span>
<span class="line"><span style="color:#24292E;">    listen      </span><span style="color:#005CC5;">80 default_server</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#域名</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> server_name </span><span style="color:#24292E;">www.jsanntq.cn</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 开启gzip 压缩</span></span>
<span class="line"><span style="color:#24292E;">    gzip</span><span style="color:#005CC5;"> on</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 设置gzip所需的http协议最低版本 （HTTP/1.1, HTTP/1.0）</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> gzip_http_version </span><span style="color:#24292E;">1.1;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 设置压缩级别，压缩级别越高压缩时间越长  （1-9）</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> gzip_comp_level </span><span style="color:#24292E;">4;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 设置压缩的最小字节数， 页面Content-Length获取</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> gzip_min_length </span><span style="color:#24292E;">1000;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 设置压缩文件的类型  （text/html)</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> gzip_types </span><span style="color:#24292E;">text/plain application/javascript text/css;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">/ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 查找目录</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> root </span><span style="color:#24292E;">/data/www/blog;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># vue-router history模式配置</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> try_files </span><span style="color:#24292E;">$uri $uri/ /admin/index.html;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">/blog </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 代理 proxy_pass指令的参数为：协议+主机名+端口号</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># jsanntq对应upstream后定义的名称</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">Host $http_host;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">X-Scheme $scheme;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_pass </span><span style="color:#24292E;">http://jsanntq;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> try_files </span><span style="color:#24292E;">$uri $uri/ /blog/index.html;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">/admin/ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;"> proxy_pass </span><span style="color:#24292E;">http://jsanntqAdmin;</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;"> try_files </span><span style="color:#24292E;">$uri $uri/ /admin/index.html;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 多服务配置 用于配置多个项目</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">server</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> listen </span><span style="color:#24292E;">     </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#多域名</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> server_name </span><span style="color:#24292E;">ts.jsanntq.cn blog.jsanntq.cn</span></span>
<span class="line"><span style="color:#24292E;">    location / {</span></span>
<span class="line"><span style="color:#24292E;">        proxy_pass http://localhost:8080;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div><h2 id="配置gzip压缩" tabindex="-1">配置gzip压缩 <a class="header-anchor" href="#配置gzip压缩" aria-label="Permalink to &quot;配置gzip压缩&quot;">​</a></h2><div class="language-nginx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 开启gzip 压缩</span></span>
<span class="line"><span style="color:#F97583;">gzip </span><span style="color:#E1E4E8;">on;</span></span>
<span class="line"><span style="color:#6A737D;"># 设置gzip所需的http协议最低版本 （HTTP/1.1, HTTP/1.0）</span></span>
<span class="line"><span style="color:#F97583;">gzip_http_version </span><span style="color:#E1E4E8;">1.1;</span></span>
<span class="line"><span style="color:#6A737D;"># 设置压缩级别，压缩级别越高压缩时间越长  （1-9）</span></span>
<span class="line"><span style="color:#F97583;">gzip_comp_level </span><span style="color:#E1E4E8;">4;</span></span>
<span class="line"><span style="color:#6A737D;"># 设置压缩的最小字节数， 页面Content-Length获取</span></span>
<span class="line"><span style="color:#F97583;">gzip_min_length </span><span style="color:#E1E4E8;">1000;</span></span>
<span class="line"><span style="color:#6A737D;"># 设置压缩文件的类型  （text/html)</span></span>
<span class="line"><span style="color:#F97583;">gzip_types </span><span style="color:#E1E4E8;">text/plain application/javascript text/css;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 开启gzip 压缩</span></span>
<span class="line"><span style="color:#D73A49;">gzip </span><span style="color:#24292E;">on;</span></span>
<span class="line"><span style="color:#6A737D;"># 设置gzip所需的http协议最低版本 （HTTP/1.1, HTTP/1.0）</span></span>
<span class="line"><span style="color:#D73A49;">gzip_http_version </span><span style="color:#24292E;">1.1;</span></span>
<span class="line"><span style="color:#6A737D;"># 设置压缩级别，压缩级别越高压缩时间越长  （1-9）</span></span>
<span class="line"><span style="color:#D73A49;">gzip_comp_level </span><span style="color:#24292E;">4;</span></span>
<span class="line"><span style="color:#6A737D;"># 设置压缩的最小字节数， 页面Content-Length获取</span></span>
<span class="line"><span style="color:#D73A49;">gzip_min_length </span><span style="color:#24292E;">1000;</span></span>
<span class="line"><span style="color:#6A737D;"># 设置压缩文件的类型  （text/html)</span></span>
<span class="line"><span style="color:#D73A49;">gzip_types </span><span style="color:#24292E;">text/plain application/javascript text/css;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>添加到对应的<code>conf</code>文件<code>server</code>下面，或者添加到全局的<code>nginx</code>配置<code>http</code>下面；</p><h2 id="代理node项目" tabindex="-1">代理node项目 <a class="header-anchor" href="#代理node项目" aria-label="Permalink to &quot;代理node项目&quot;">​</a></h2><div class="language-nginx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> listen	</span><span style="color:#E1E4E8;">80;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> server_name	</span><span style="color:#E1E4E8;">chat-server.wing.vip;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 本地地址不行就填服务器ip地址</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">http://127.0.0.1:8888;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_http_version </span><span style="color:#E1E4E8;">1.1;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Connection </span><span style="color:#9ECBFF;">&#39;upgrade&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_cache_bypass </span><span style="color:#E1E4E8;">$http_upgrade;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">server</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> listen	</span><span style="color:#24292E;">80;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> server_name	</span><span style="color:#24292E;">chat-server.wing.vip;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 本地地址不行就填服务器ip地址</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_pass </span><span style="color:#24292E;">http://127.0.0.1:8888;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_http_version </span><span style="color:#24292E;">1.1;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">Connection </span><span style="color:#032F62;">&#39;upgrade&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">Host $host;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_cache_bypass </span><span style="color:#24292E;">$http_upgrade;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><strong>node 项目上传流程</strong></p><ol><li>打包除node_modules所有文件以及文件夹</li><li>上传打包文件</li><li>解压文件</li><li>安装依赖</li><li>启动项目</li></ol><h2 id="配置https" tabindex="-1">配置https <a class="header-anchor" href="#配置https" aria-label="Permalink to &quot;配置https&quot;">​</a></h2><div class="language-nginx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> listen	</span><span style="color:#E1E4E8;">443 ssl;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> ssl_certificate </span><span style="color:#E1E4E8;">/etc/nginx/crt/3710899_web.wing.vip.pem;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> ssl_certificate_key </span><span style="color:#E1E4E8;">/etc/nginx/crt/3710899_web.wing.vip.key;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 如果有</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> include </span><span style="color:#E1E4E8;">/etc/nginx/https-base.conf;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 强制转发https</span></span>
<span class="line"><span style="color:#E1E4E8;">    if( $</span><span style="color:#F97583;">scheme</span><span style="color:#E1E4E8;"> = http ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 如果$host不行就更换$server_name</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">301</span><span style="color:#E1E4E8;"> https://$host$request_uri;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">server</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> listen	</span><span style="color:#24292E;">443 ssl;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> ssl_certificate </span><span style="color:#24292E;">/etc/nginx/crt/3710899_web.wing.vip.pem;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> ssl_certificate_key </span><span style="color:#24292E;">/etc/nginx/crt/3710899_web.wing.vip.key;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 如果有</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> include </span><span style="color:#24292E;">/etc/nginx/https-base.conf;</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 强制转发https</span></span>
<span class="line"><span style="color:#24292E;">    if( $</span><span style="color:#D73A49;">scheme</span><span style="color:#24292E;"> = http ) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 如果$host不行就更换$server_name</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">301</span><span style="color:#24292E;"> https://$host$request_uri;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><code>/etc/nginx/crt</code>为代理过的地址，在<code>/data/docker-compose.yml</code>查看</p><h2 id="配置http2-0" tabindex="-1">配置http2.0 <a class="header-anchor" href="#配置http2-0" aria-label="Permalink to &quot;配置http2.0&quot;">​</a></h2><ol><li>在ssl目录下面生成<code>dhparam.pem</code>文件</li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">openssl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dhparam</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-out</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dhparam.pem</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2048</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">openssl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dhparam</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-out</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dhparam.pem</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2048</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>新建<code>conf.d/https-base.conf</code>文件;</li></ol><div class="language-nginx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">listen </span><span style="color:#E1E4E8;">                 </span><span style="color:#79B8FF;">443</span><span style="color:#E1E4E8;"> ssl http2;</span></span>
<span class="line"><span style="color:#F97583;">listen </span><span style="color:#E1E4E8;">                 [::]:443 ssl http2;</span></span>
<span class="line"><span style="color:#6A737D;"># 配置共享会话缓存大小</span></span>
<span class="line"><span style="color:#F97583;">ssl_session_cache </span><span style="color:#E1E4E8;">      shared:SSL:10m;</span></span>
<span class="line"><span style="color:#6A737D;"># 配置会话超时时间</span></span>
<span class="line"><span style="color:#F97583;">ssl_session_timeout </span><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">10m</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 优先采取服务器算法</span></span>
<span class="line"><span style="color:#F97583;">ssl_prefer_server_ciphers </span><span style="color:#E1E4E8;">on;</span></span>
<span class="line"><span style="color:#6A737D;"># 使用 DH 文件</span></span>
<span class="line"><span style="color:#F97583;">ssl_dhparam </span><span style="color:#E1E4E8;">			ssl/dhparam.pem;</span></span>
<span class="line"><span style="color:#6A737D;"># 协议版本</span></span>
<span class="line"><span style="color:#F97583;">ssl_protocols </span><span style="color:#E1E4E8;">          TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span style="color:#6A737D;"># 定义算法</span></span>
<span class="line"><span style="color:#F97583;">ssl_ciphers	</span><span style="color:#E1E4E8;">		EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启用 HSTS 。允许 https 网站要求浏览器总是通过 https 来访问</span></span>
<span class="line"><span style="color:#F97583;">add_header </span><span style="color:#E1E4E8;">Strict-Transport-Security </span><span style="color:#9ECBFF;">&quot;max-age=31536000; includeSubDomains;preload&quot;</span><span style="color:#E1E4E8;"> always;</span></span>
<span class="line"><span style="color:#6A737D;"># 减少点击劫持</span></span>
<span class="line"><span style="color:#F97583;">add_header </span><span style="color:#E1E4E8;">X-Frame-Options DENY;</span></span>
<span class="line"><span style="color:#6A737D;"># 禁止服务器自动解析资源类型</span></span>
<span class="line"><span style="color:#F97583;">add_header </span><span style="color:#E1E4E8;">X-Content-Type-Options nosniff;</span></span>
<span class="line"><span style="color:#6A737D;"># 防XSS攻擊</span></span>
<span class="line"><span style="color:#F97583;">add_header </span><span style="color:#E1E4E8;">X-Xss-Protection </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">listen </span><span style="color:#24292E;">                 </span><span style="color:#005CC5;">443</span><span style="color:#24292E;"> ssl http2;</span></span>
<span class="line"><span style="color:#D73A49;">listen </span><span style="color:#24292E;">                 [::]:443 ssl http2;</span></span>
<span class="line"><span style="color:#6A737D;"># 配置共享会话缓存大小</span></span>
<span class="line"><span style="color:#D73A49;">ssl_session_cache </span><span style="color:#24292E;">      shared:SSL:10m;</span></span>
<span class="line"><span style="color:#6A737D;"># 配置会话超时时间</span></span>
<span class="line"><span style="color:#D73A49;">ssl_session_timeout </span><span style="color:#24292E;">    </span><span style="color:#005CC5;">10m</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 优先采取服务器算法</span></span>
<span class="line"><span style="color:#D73A49;">ssl_prefer_server_ciphers </span><span style="color:#24292E;">on;</span></span>
<span class="line"><span style="color:#6A737D;"># 使用 DH 文件</span></span>
<span class="line"><span style="color:#D73A49;">ssl_dhparam </span><span style="color:#24292E;">			ssl/dhparam.pem;</span></span>
<span class="line"><span style="color:#6A737D;"># 协议版本</span></span>
<span class="line"><span style="color:#D73A49;">ssl_protocols </span><span style="color:#24292E;">          TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span style="color:#6A737D;"># 定义算法</span></span>
<span class="line"><span style="color:#D73A49;">ssl_ciphers	</span><span style="color:#24292E;">		EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启用 HSTS 。允许 https 网站要求浏览器总是通过 https 来访问</span></span>
<span class="line"><span style="color:#D73A49;">add_header </span><span style="color:#24292E;">Strict-Transport-Security </span><span style="color:#032F62;">&quot;max-age=31536000; includeSubDomains;preload&quot;</span><span style="color:#24292E;"> always;</span></span>
<span class="line"><span style="color:#6A737D;"># 减少点击劫持</span></span>
<span class="line"><span style="color:#D73A49;">add_header </span><span style="color:#24292E;">X-Frame-Options DENY;</span></span>
<span class="line"><span style="color:#6A737D;"># 禁止服务器自动解析资源类型</span></span>
<span class="line"><span style="color:#D73A49;">add_header </span><span style="color:#24292E;">X-Content-Type-Options nosniff;</span></span>
<span class="line"><span style="color:#6A737D;"># 防XSS攻擊</span></span>
<span class="line"><span style="color:#D73A49;">add_header </span><span style="color:#24292E;">X-Xss-Protection </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ol start="3"><li>之后在需要的文件里面加入即可</li></ol><div class="language-nginx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> include </span><span style="color:#E1E4E8;">https-base.conf</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">server</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> include </span><span style="color:#24292E;">https-base.conf</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="4"><li><code>[::]:</code>表示ipv6配置</li></ol><h3 id="nginx不生效问题排查" tabindex="-1">nginx不生效问题排查 <a class="header-anchor" href="#nginx不生效问题排查" aria-label="Permalink to &quot;nginx不生效问题排查&quot;">​</a></h3><ol><li><p>配置https之后需要放开443端口，首先排查安全组是否放开端口号</p></li><li><p>查看443端口状态：</p><ol><li><code> netstat -ano -p tcp | find &quot;443&quot; &gt;nul 2&gt;nul &amp;&amp; echo 443端口已开启 || echo 443端口未开启</code></li><li><code>lsof -i:443</code> 如果有的话则表示开启了</li><li><code>telnet 1.1.1.1 443</code> 如果能连接成功表示通了</li></ol></li><li><p>如果是docker启动的nginx，docker需要配置443；</p></li></ol><h2 id="动态匹配-请求过滤" tabindex="-1">动态匹配（请求过滤） <a class="header-anchor" href="#动态匹配-请求过滤" aria-label="Permalink to &quot;动态匹配（请求过滤）&quot;">​</a></h2><blockquote><p>通常在开发环境或者测试环境的时候呢我们修改了代码，因为浏览器缓存，可能不会生效，需要手动清除缓存，才能看到修改后的效果，这里我们做一个配置让浏览器不缓存相关的资源。</p></blockquote><h2 id="配置nginx反向代理" tabindex="-1">配置nginx反向代理 <a class="header-anchor" href="#配置nginx反向代理" aria-label="Permalink to &quot;配置nginx反向代理&quot;">​</a></h2><p>注意api必须加上，检查api的地方，修改之后记得重启nginx服务器；</p><div class="language-nginx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/api </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">rewrite</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">^.+api/?(.*)$</span><span style="color:#E1E4E8;"> /$1 </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">http://39.107.127.240:3000;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 作用和proxyTable差不多  上传时记得删除这句话</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">/api </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">rewrite</span><span style="color:#24292E;"> </span><span style="color:#032F62;">^.+api/?(.*)$</span><span style="color:#24292E;"> /$1 </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> proxy_pass </span><span style="color:#24292E;">http://39.107.127.240:3000;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 作用和proxyTable差不多  上传时记得删除这句话</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="nginx常用配置" tabindex="-1">nginx常用配置 <a class="header-anchor" href="#nginx常用配置" aria-label="Permalink to &quot;nginx常用配置&quot;">​</a></h2><div class="language-nginx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">80;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;">wyy.wing.vip;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 避免非root路径404</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> try_files </span><span style="color:#E1E4E8;">$uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 解决跨域</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">/api </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">http://wyy.wing.vip;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 不区分大小写, 访问json文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">~.*\\.json </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 为带hash值的文件配置永久缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~*</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">\\.(?:css|js)$ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> try_files </span><span style="color:#E1E4E8;">$uri </span><span style="color:#79B8FF;">=404</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> expires </span><span style="color:#E1E4E8;">1y;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> add_header </span><span style="color:#E1E4E8;">Cache-Control </span><span style="color:#9ECBFF;">&quot;public&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">^.+\\..+$ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> try_files </span><span style="color:#E1E4E8;">$uri </span><span style="color:#79B8FF;">=404</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">server</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> listen </span><span style="color:#24292E;">80;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> server_name </span><span style="color:#24292E;">wyy.wing.vip;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 避免非root路径404</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">/ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> try_files </span><span style="color:#24292E;">$uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 解决跨域</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">/api </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_pass </span><span style="color:#24292E;">http://wyy.wing.vip;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 不区分大小写, 访问json文件</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">~.*\\.json </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 为带hash值的文件配置永久缓存</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">~*</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\\.(?:css|js)$ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> try_files </span><span style="color:#24292E;">$uri </span><span style="color:#005CC5;">=404</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> expires </span><span style="color:#24292E;">1y;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> add_header </span><span style="color:#24292E;">Cache-Control </span><span style="color:#032F62;">&quot;public&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">^.+\\..+$ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> try_files </span><span style="color:#24292E;">$uri </span><span style="color:#005CC5;">=404</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><h3 id="解决socket中nginx转发问题" tabindex="-1">解决socket中nginx转发问题 <a class="header-anchor" href="#解决socket中nginx转发问题" aria-label="Permalink to &quot;解决socket中nginx转发问题&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> listen </span><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> server_name </span><span style="color:#E1E4E8;"> school.godotdotdot.com;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> charset </span><span style="color:#E1E4E8;">utf-8;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">/ </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_pass </span><span style="color:#E1E4E8;">http://127.0.0.1:3000;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_http_version </span><span style="color:#E1E4E8;">1.1;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">Connection </span><span style="color:#9ECBFF;">&quot;upgrade&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_set_header </span><span style="color:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_connect_timeout </span><span style="color:#E1E4E8;">60;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_read_timeout </span><span style="color:#E1E4E8;">600;</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> proxy_send_timeout </span><span style="color:#E1E4E8;">600;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#F97583;">	error_page </span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">			/404.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;"> error_page </span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">502</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">503</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">504</span><span style="color:#E1E4E8;">  /50x.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">/50x.html </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;">  html;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">server</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> listen </span><span style="color:#24292E;">      </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> server_name </span><span style="color:#24292E;"> school.godotdotdot.com;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> charset </span><span style="color:#24292E;">utf-8;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/ </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_pass </span><span style="color:#24292E;">http://127.0.0.1:3000;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">Host $host;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_http_version </span><span style="color:#24292E;">1.1;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">Upgrade $http_upgrade;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">Connection </span><span style="color:#032F62;">&quot;upgrade&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_set_header </span><span style="color:#24292E;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_connect_timeout </span><span style="color:#24292E;">60;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_read_timeout </span><span style="color:#24292E;">600;</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> proxy_send_timeout </span><span style="color:#24292E;">600;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#D73A49;">	error_page </span><span style="color:#24292E;"> </span><span style="color:#005CC5;">404</span><span style="color:#24292E;">			/404.html;</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;"> error_page </span><span style="color:#24292E;">  </span><span style="color:#005CC5;">500</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">502</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">503</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">504</span><span style="color:#24292E;">  /50x.html;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/50x.html </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> root </span><span style="color:#24292E;">  html;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="nginx重定向" tabindex="-1">nginx重定向 <a class="header-anchor" href="#nginx重定向" aria-label="Permalink to &quot;nginx重定向&quot;">​</a></h2><p><a href="https://www.cnblogs.com/weiyiming007/p/11417320.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/weiyiming007/p/11417320.html</a></p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="http://jsanntq.cn/2020/04/07/Nginx/" target="_blank" rel="noreferrer">http://jsanntq.cn/2020/04/07/Nginx/</a></p></li><li><p><a href="https://juejin.im/post/5cae9de95188251ae2324ec3" target="_blank" rel="noreferrer">快狗打车前端团队 前端想要了解的Nginx</a></p></li><li><p><a href="https://juejin.im/post/5e44a2aa6fb9a07c9f3fd170#heading-15" target="_blank" rel="noreferrer">卖好车大前端团队 nginx 配置 https</a></p></li></ul>`,47),o=[e];function r(c,t,i,E,y,b){return n(),a("div",null,o)}const m=s(l,[["render",r]]);export{u as __pageData,m as default};
