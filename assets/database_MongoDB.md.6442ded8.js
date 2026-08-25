import{_ as n,o as a,c as l,O as p}from"./chunks/framework.db831a78.js";const u=JSON.parse('{"title":"MongoDB","description":"","frontmatter":{},"headers":[],"relativePath":"database/MongoDB.md","filePath":"database/MongoDB.md","lastUpdated":null}'),o={name:"database/MongoDB.md"};function e(r,s,c,t,E,y){return a(),l("div",null,s[0]||(s[0]=[p(`<h1 id="mongodb" tabindex="-1">MongoDB <a class="header-anchor" href="#mongodb" aria-label="Permalink to &quot;MongoDB&quot;">​</a></h1><blockquote><p>面向文档的 NoSQL 数据库，灵活 schema、高可用、易水平扩展。</p></blockquote><hr><h2 id="一、mongodb-概述" tabindex="-1">一、MongoDB 概述 <a class="header-anchor" href="#一、mongodb-概述" aria-label="Permalink to &quot;一、MongoDB 概述&quot;">​</a></h2><h3 id="_1-1-什么是-mongodb" tabindex="-1">1.1 什么是 MongoDB <a class="header-anchor" href="#_1-1-什么是-mongodb" aria-label="Permalink to &quot;1.1 什么是 MongoDB&quot;">​</a></h3><p>MongoDB 是一个 <strong>面向文档（Document-oriented）</strong> 的 NoSQL 数据库，数据以 <strong>BSON（Binary JSON）</strong> 格式存储。与关系型数据库不同，它不需要预定义表结构（schema-less），适合快速迭代和灵活的数据模型。</p><h3 id="_1-2-核心特性" tabindex="-1">1.2 核心特性 <a class="header-anchor" href="#_1-2-核心特性" aria-label="Permalink to &quot;1.2 核心特性&quot;">​</a></h3><table><thead><tr><th>特性</th><th>说明</th></tr></thead><tbody><tr><td><strong>文档模型</strong></td><td>数据以 JSON-like 文档存储，直观且与面向对象编程天然匹配</td></tr><tr><td><strong>高可用</strong></td><td>复制集（Replica Set）提供自动故障转移和数据冗余</td></tr><tr><td><strong>水平扩展</strong></td><td>分片集群（Sharded Cluster）将数据分布到多台机器</td></tr><tr><td><strong>灵活 Schema</strong></td><td>同一集合中的文档可以有不同的字段结构</td></tr><tr><td><strong>丰富的查询语言</strong></td><td>支持范围查询、正则、地理空间、聚合管道等</td></tr><tr><td><strong>索引支持</strong></td><td>多种索引类型（单字段、复合、全文、TTL、哈希等）</td></tr><tr><td><strong>原生驱动</strong></td><td>官方支持 Java、Python、Node.js、Go、C# 等多种语言</td></tr></tbody></table><h3 id="_1-3-与-rdbms-概念对照" tabindex="-1">1.3 与 RDBMS 概念对照 <a class="header-anchor" href="#_1-3-与-rdbms-概念对照" aria-label="Permalink to &quot;1.3 与 RDBMS 概念对照&quot;">​</a></h3><table><thead><tr><th>MongoDB</th><th>RDBMS (MySQL / PostgreSQL)</th></tr></thead><tbody><tr><td>Database（数据库）</td><td>Database（数据库）</td></tr><tr><td>Collection（集合）</td><td>Table（表）</td></tr><tr><td>Document（文档）</td><td>Row（行）</td></tr><tr><td>Field（字段）</td><td>Column（列）</td></tr><tr><td>Embedded Document（嵌入式文档）</td><td>JOIN 关联表</td></tr><tr><td>_id （默认主键）</td><td>PRIMARY KEY（主键）</td></tr><tr><td>Index（索引）</td><td>Index（索引）</td></tr><tr><td>Aggregation Pipeline（聚合管道）</td><td>GROUP BY / JOIN / 子查询</td></tr><tr><td>Replica Set（复制集）</td><td>主从复制</td></tr></tbody></table><h3 id="_1-4-数据模型设计原则" tabindex="-1">1.4 数据模型设计原则 <a class="header-anchor" href="#_1-4-数据模型设计原则" aria-label="Permalink to &quot;1.4 数据模型设计原则&quot;">​</a></h3><ul><li><strong>内嵌（Embedding）</strong>：对于&quot;包含&quot;关系或一对少数关系，将子文档嵌入父文档中，避免 JOIN 查询。</li><li><strong>引用（Referencing）</strong>：对于多对多关系或独立实体，使用 <code>ObjectId</code> 引用，结合 <code>$lookup</code> 关联查询。</li><li><strong>反范式化（Denormalization）</strong>：为读取性能牺牲部分写入冗余，常见于频繁读取但很少修改的数据。</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 内嵌设计：一篇文章及其评论</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  _id: ObjectId(&quot;...&quot;),</span></span>
<span class="line"><span style="color:#e1e4e8;">  title: &quot;MongoDB 入门&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  content: &quot;...&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  comments: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    { user: &quot;张三&quot;, content: &quot;好文章！&quot;, createdAt: ISODate(&quot;...&quot;) },</span></span>
<span class="line"><span style="color:#e1e4e8;">    { user: &quot;李四&quot;, content: &quot;学习了&quot;, createdAt: ISODate(&quot;...&quot;) }</span></span>
<span class="line"><span style="color:#e1e4e8;">  ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 引用设计：用户和订单分开集合</span></span>
<span class="line"><span style="color:#e1e4e8;">// users 集合</span></span>
<span class="line"><span style="color:#e1e4e8;">{ _id: ObjectId(&quot;u1&quot;), name: &quot;张三&quot; }</span></span>
<span class="line"><span style="color:#e1e4e8;">// orders 集合</span></span>
<span class="line"><span style="color:#e1e4e8;">{ _id: ObjectId(&quot;o1&quot;), userId: ObjectId(&quot;u1&quot;), amount: 99.9 }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 内嵌设计：一篇文章及其评论</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  _id: ObjectId(&quot;...&quot;),</span></span>
<span class="line"><span style="color:#24292e;">  title: &quot;MongoDB 入门&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  content: &quot;...&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  comments: [</span></span>
<span class="line"><span style="color:#24292e;">    { user: &quot;张三&quot;, content: &quot;好文章！&quot;, createdAt: ISODate(&quot;...&quot;) },</span></span>
<span class="line"><span style="color:#24292e;">    { user: &quot;李四&quot;, content: &quot;学习了&quot;, createdAt: ISODate(&quot;...&quot;) }</span></span>
<span class="line"><span style="color:#24292e;">  ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 引用设计：用户和订单分开集合</span></span>
<span class="line"><span style="color:#24292e;">// users 集合</span></span>
<span class="line"><span style="color:#24292e;">{ _id: ObjectId(&quot;u1&quot;), name: &quot;张三&quot; }</span></span>
<span class="line"><span style="color:#24292e;">// orders 集合</span></span>
<span class="line"><span style="color:#24292e;">{ _id: ObjectId(&quot;o1&quot;), userId: ObjectId(&quot;u1&quot;), amount: 99.9 }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_1-5-安装与配置" tabindex="-1">1.5 安装与配置 <a class="header-anchor" href="#_1-5-安装与配置" aria-label="Permalink to &quot;1.5 安装与配置&quot;">​</a></h3><p><strong>Docker 部署：</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 拉取镜像并运行</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mongodb</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">27017</span><span style="color:#9ECBFF;">:27017</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">MONGO_INITDB_ROOT_USERNAME=admin</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">MONGO_INITDB_ROOT_PASSWORD=admin123</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">mongo:7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用 Docker Compose</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 拉取镜像并运行</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mongodb</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">27017</span><span style="color:#032F62;">:27017</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">MONGO_INITDB_ROOT_USERNAME=admin</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">MONGO_INITDB_ROOT_PASSWORD=admin123</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">mongo:7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 使用 Docker Compose</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># docker-compose.yml</span></span>
<span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;3.8&#39;</span></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">mongodb</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mongo:7</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mongodb</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;27017:27017&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">MONGO_INITDB_ROOT_USERNAME</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">admin</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">MONGO_INITDB_ROOT_PASSWORD</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">admin123</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">mongo_data:/data/db</span></span>
<span class="line"><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">mongo_data</span><span style="color:#E1E4E8;">:</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># docker-compose.yml</span></span>
<span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;3.8&#39;</span></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">mongodb</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mongo:7</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mongodb</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;27017:27017&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">MONGO_INITDB_ROOT_USERNAME</span><span style="color:#24292E;">: </span><span style="color:#032F62;">admin</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">MONGO_INITDB_ROOT_PASSWORD</span><span style="color:#24292E;">: </span><span style="color:#032F62;">admin123</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">mongo_data:/data/db</span></span>
<span class="line"><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">mongo_data</span><span style="color:#24292E;">:</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><strong>Native 安装（Ubuntu）：</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 导入 MongoDB GPG key</span></span>
<span class="line"><span style="color:#B392F0;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-qO</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://www.mongodb.org/static/pgp/server-7.0.asc</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt-key</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加源</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tee</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/apt/sources.list.d/mongodb-org-7.0.list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt-get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt-get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mongodb-org</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动服务</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mongod</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mongod</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 导入 MongoDB GPG key</span></span>
<span class="line"><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-qO</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://www.mongodb.org/static/pgp/server-7.0.asc</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt-key</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加源</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tee</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/apt/sources.list.d/mongodb-org-7.0.list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt-get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt-get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mongodb-org</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动服务</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mongod</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mongod</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>连接测试：</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mongosh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;mongodb://admin:admin123@localhost:27017&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mongosh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;mongodb://admin:admin123@localhost:27017&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 查看版本</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">version</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看数据库列表</span></span>
<span class="line"><span style="color:#E1E4E8;">show dbs;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 切换/创建数据库（use 命令在第一次写入数据时真正创建）</span></span>
<span class="line"><span style="color:#E1E4E8;">use mydb;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 查看版本</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">version</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看数据库列表</span></span>
<span class="line"><span style="color:#24292E;">show dbs;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 切换/创建数据库（use 命令在第一次写入数据时真正创建）</span></span>
<span class="line"><span style="color:#24292E;">use mydb;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><hr><h2 id="二、crud-操作" tabindex="-1">二、CRUD 操作 <a class="header-anchor" href="#二、crud-操作" aria-label="Permalink to &quot;二、CRUD 操作&quot;">​</a></h2><h3 id="_2-1-插入文档" tabindex="-1">2.1 插入文档 <a class="header-anchor" href="#_2-1-插入文档" aria-label="Permalink to &quot;2.1 插入文档&quot;">​</a></h3><h4 id="insertone" tabindex="-1">insertOne <a class="header-anchor" href="#insertone" aria-label="Permalink to &quot;insertOne&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 插入单条文档</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">insertOne</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;张三&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  email: </span><span style="color:#9ECBFF;">&quot;zhangsan@example.com&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  age: </span><span style="color:#79B8FF;">28</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  tags: [</span><span style="color:#9ECBFF;">&quot;developer&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;javascript&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  address: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    city: </span><span style="color:#9ECBFF;">&quot;北京&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    district: </span><span style="color:#9ECBFF;">&quot;海淀&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  createdAt: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 返回结果</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">acknowledged</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">insertedId</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;661a1b2c3d4e5f6a7b8c9d0e&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 插入单条文档</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">insertOne</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;张三&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  email: </span><span style="color:#032F62;">&quot;zhangsan@example.com&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  age: </span><span style="color:#005CC5;">28</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  tags: [</span><span style="color:#032F62;">&quot;developer&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;javascript&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  address: {</span></span>
<span class="line"><span style="color:#24292E;">    city: </span><span style="color:#032F62;">&quot;北京&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    district: </span><span style="color:#032F62;">&quot;海淀&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  createdAt: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 返回结果</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">acknowledged</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">insertedId</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;661a1b2c3d4e5f6a7b8c9d0e&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="insertmany" tabindex="-1">insertMany <a class="header-anchor" href="#insertmany" aria-label="Permalink to &quot;insertMany&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 批量插入</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">insertMany</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&quot;李四&quot;</span><span style="color:#E1E4E8;">, email: </span><span style="color:#9ECBFF;">&quot;lisi@example.com&quot;</span><span style="color:#E1E4E8;">, age: </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&quot;王五&quot;</span><span style="color:#E1E4E8;">, email: </span><span style="color:#9ECBFF;">&quot;wangwu@example.com&quot;</span><span style="color:#E1E4E8;">, age: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&quot;赵六&quot;</span><span style="color:#E1E4E8;">, email: </span><span style="color:#9ECBFF;">&quot;zhaoliu@example.com&quot;</span><span style="color:#E1E4E8;">, age: </span><span style="color:#79B8FF;">35</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 返回结果</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">acknowledged</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">insertedIds</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;661a...&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;661a...&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;661a...&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 批量插入</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">insertMany</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  { name: </span><span style="color:#032F62;">&quot;李四&quot;</span><span style="color:#24292E;">, email: </span><span style="color:#032F62;">&quot;lisi@example.com&quot;</span><span style="color:#24292E;">, age: </span><span style="color:#005CC5;">32</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { name: </span><span style="color:#032F62;">&quot;王五&quot;</span><span style="color:#24292E;">, email: </span><span style="color:#032F62;">&quot;wangwu@example.com&quot;</span><span style="color:#24292E;">, age: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { name: </span><span style="color:#032F62;">&quot;赵六&quot;</span><span style="color:#24292E;">, email: </span><span style="color:#032F62;">&quot;zhaoliu@example.com&quot;</span><span style="color:#24292E;">, age: </span><span style="color:#005CC5;">35</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 返回结果</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">acknowledged</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">insertedIds</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;661a...&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;661a...&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;2&#39;</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;661a...&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="批量插入-无序与有序" tabindex="-1">批量插入（无序与有序） <a class="header-anchor" href="#批量插入-无序与有序" aria-label="Permalink to &quot;批量插入（无序与有序）&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 有序插入（默认）：遇到错误停止后续插入</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">insertMany</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  [{ name: </span><span style="color:#9ECBFF;">&quot;A&quot;</span><span style="color:#E1E4E8;"> }, { _id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&quot;B&quot;</span><span style="color:#E1E4E8;"> }, { name: </span><span style="color:#9ECBFF;">&quot;C&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  { ordered: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 无序插入：遇到错误继续执行后续插入</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">insertMany</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  [{ name: </span><span style="color:#9ECBFF;">&quot;A&quot;</span><span style="color:#E1E4E8;"> }, { _id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&quot;B&quot;</span><span style="color:#E1E4E8;"> }, { name: </span><span style="color:#9ECBFF;">&quot;C&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  { ordered: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 有序插入（默认）：遇到错误停止后续插入</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">insertMany</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  [{ name: </span><span style="color:#032F62;">&quot;A&quot;</span><span style="color:#24292E;"> }, { _id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&quot;B&quot;</span><span style="color:#24292E;"> }, { name: </span><span style="color:#032F62;">&quot;C&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  { ordered: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 无序插入：遇到错误继续执行后续插入</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">insertMany</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  [{ name: </span><span style="color:#032F62;">&quot;A&quot;</span><span style="color:#24292E;"> }, { _id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&quot;B&quot;</span><span style="color:#24292E;"> }, { name: </span><span style="color:#032F62;">&quot;C&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  { ordered: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_2-2-查询文档" tabindex="-1">2.2 查询文档 <a class="header-anchor" href="#_2-2-查询文档" aria-label="Permalink to &quot;2.2 查询文档&quot;">​</a></h3><h4 id="find-基础用法" tabindex="-1">find 基础用法 <a class="header-anchor" href="#find-基础用法" aria-label="Permalink to &quot;find 基础用法&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 查询所有文档（返回游标）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 格式化为可读 JSON</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">pretty</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 带条件查询</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ age: { $gt: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查询特定字段（投影：1 包含，0 排除）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { age: { $gt: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, email: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, _id: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查询单条文档</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">findOne</span><span style="color:#E1E4E8;">({ email: </span><span style="color:#9ECBFF;">&quot;zhangsan@example.com&quot;</span><span style="color:#E1E4E8;"> });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 查询所有文档（返回游标）</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 格式化为可读 JSON</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">pretty</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 带条件查询</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ age: { $gt: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查询特定字段（投影：1 包含，0 排除）</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { age: { $gt: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;"> } },</span></span>
<span class="line"><span style="color:#24292E;">  { name: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, email: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, _id: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查询单条文档</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">findOne</span><span style="color:#24292E;">({ email: </span><span style="color:#032F62;">&quot;zhangsan@example.com&quot;</span><span style="color:#24292E;"> });</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="查询操作符" tabindex="-1">查询操作符 <a class="header-anchor" href="#查询操作符" aria-label="Permalink to &quot;查询操作符&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 比较操作符</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ age: { $eq: </span><span style="color:#79B8FF;">28</span><span style="color:#E1E4E8;"> } });           </span><span style="color:#6A737D;">// 等于</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ age: { $ne: </span><span style="color:#79B8FF;">28</span><span style="color:#E1E4E8;"> } });           </span><span style="color:#6A737D;">// 不等于</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ age: { $gt: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;"> } });            </span><span style="color:#6A737D;">// 大于</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ age: { $gte: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;"> } });           </span><span style="color:#6A737D;">// 大于等于</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ age: { $lt: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;"> } });            </span><span style="color:#6A737D;">// 小于</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ age: { $lte: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;"> } });           </span><span style="color:#6A737D;">// 小于等于</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ age: { $in: [</span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">28</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">] } });  </span><span style="color:#6A737D;">// 在列表中</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ age: { $nin: [</span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">28</span><span style="color:#E1E4E8;">] } });     </span><span style="color:#6A737D;">// 不在列表中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 逻辑操作符</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ $and: [{ age: { $gte: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;"> } }, { age: { $lte: </span><span style="color:#79B8FF;">35</span><span style="color:#E1E4E8;"> } }] });</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ $or: [{ age: { $lt: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;"> } }, { age: { $gt: </span><span style="color:#79B8FF;">35</span><span style="color:#E1E4E8;"> } }] });</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ $not: { age: { $gt: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;"> } } });</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ $nor: [{ age: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;"> }, { name: </span><span style="color:#9ECBFF;">&quot;张三&quot;</span><span style="color:#E1E4E8;"> }] });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 元素操作符</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ email: { $exists: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> } });    </span><span style="color:#6A737D;">// 字段存在</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ age: { $type: </span><span style="color:#9ECBFF;">&quot;int&quot;</span><span style="color:#E1E4E8;"> } });       </span><span style="color:#6A737D;">// 按类型查询</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 正则表达式</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ name: { $regex:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#DBEDFF;">张</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, $options: </span><span style="color:#9ECBFF;">&quot;i&quot;</span><span style="color:#E1E4E8;"> } });</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ name:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">张三</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> });                </span><span style="color:#6A737D;">// 简写形式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 数组查询</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ tags: </span><span style="color:#9ECBFF;">&quot;developer&quot;</span><span style="color:#E1E4E8;"> });            </span><span style="color:#6A737D;">// 包含元素</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ tags: { $all: [</span><span style="color:#9ECBFF;">&quot;developer&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;javascript&quot;</span><span style="color:#E1E4E8;">] } }); </span><span style="color:#6A737D;">// 同时包含</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ tags: { $size: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> } });           </span><span style="color:#6A737D;">// 数组长度</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ </span><span style="color:#9ECBFF;">&quot;tags.0&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;developer&quot;</span><span style="color:#E1E4E8;"> });         </span><span style="color:#6A737D;">// 按位置查询</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 嵌入式文档查询</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ </span><span style="color:#9ECBFF;">&quot;address.city&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;北京&quot;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ address: { city: </span><span style="color:#9ECBFF;">&quot;北京&quot;</span><span style="color:#E1E4E8;">, district: </span><span style="color:#9ECBFF;">&quot;海淀&quot;</span><span style="color:#E1E4E8;"> } }); </span><span style="color:#6A737D;">// 精确匹配</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 比较操作符</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ age: { $eq: </span><span style="color:#005CC5;">28</span><span style="color:#24292E;"> } });           </span><span style="color:#6A737D;">// 等于</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ age: { $ne: </span><span style="color:#005CC5;">28</span><span style="color:#24292E;"> } });           </span><span style="color:#6A737D;">// 不等于</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ age: { $gt: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;"> } });            </span><span style="color:#6A737D;">// 大于</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ age: { $gte: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;"> } });           </span><span style="color:#6A737D;">// 大于等于</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ age: { $lt: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;"> } });            </span><span style="color:#6A737D;">// 小于</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ age: { $lte: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;"> } });           </span><span style="color:#6A737D;">// 小于等于</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ age: { $in: [</span><span style="color:#005CC5;">25</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">28</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">] } });  </span><span style="color:#6A737D;">// 在列表中</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ age: { $nin: [</span><span style="color:#005CC5;">25</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">28</span><span style="color:#24292E;">] } });     </span><span style="color:#6A737D;">// 不在列表中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 逻辑操作符</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ $and: [{ age: { $gte: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;"> } }, { age: { $lte: </span><span style="color:#005CC5;">35</span><span style="color:#24292E;"> } }] });</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ $or: [{ age: { $lt: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;"> } }, { age: { $gt: </span><span style="color:#005CC5;">35</span><span style="color:#24292E;"> } }] });</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ $not: { age: { $gt: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;"> } } });</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ $nor: [{ age: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;"> }, { name: </span><span style="color:#032F62;">&quot;张三&quot;</span><span style="color:#24292E;"> }] });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 元素操作符</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ email: { $exists: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> } });    </span><span style="color:#6A737D;">// 字段存在</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ age: { $type: </span><span style="color:#032F62;">&quot;int&quot;</span><span style="color:#24292E;"> } });       </span><span style="color:#6A737D;">// 按类型查询</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 正则表达式</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ name: { $regex:</span><span style="color:#032F62;"> /</span><span style="color:#D73A49;">^</span><span style="color:#032F62;">张/</span><span style="color:#24292E;">, $options: </span><span style="color:#032F62;">&quot;i&quot;</span><span style="color:#24292E;"> } });</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ name:</span><span style="color:#032F62;"> /张三/</span><span style="color:#24292E;"> });                </span><span style="color:#6A737D;">// 简写形式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 数组查询</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ tags: </span><span style="color:#032F62;">&quot;developer&quot;</span><span style="color:#24292E;"> });            </span><span style="color:#6A737D;">// 包含元素</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ tags: { $all: [</span><span style="color:#032F62;">&quot;developer&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;javascript&quot;</span><span style="color:#24292E;">] } }); </span><span style="color:#6A737D;">// 同时包含</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ tags: { $size: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> } });           </span><span style="color:#6A737D;">// 数组长度</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ </span><span style="color:#032F62;">&quot;tags.0&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;developer&quot;</span><span style="color:#24292E;"> });         </span><span style="color:#6A737D;">// 按位置查询</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 嵌入式文档查询</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ </span><span style="color:#032F62;">&quot;address.city&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;北京&quot;</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ address: { city: </span><span style="color:#032F62;">&quot;北京&quot;</span><span style="color:#24292E;">, district: </span><span style="color:#032F62;">&quot;海淀&quot;</span><span style="color:#24292E;"> } }); </span><span style="color:#6A737D;">// 精确匹配</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h4 id="游标与分页" tabindex="-1">游标与分页 <a class="header-anchor" href="#游标与分页" aria-label="Permalink to &quot;游标与分页&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 排序</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">({ age: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> });   </span><span style="color:#6A737D;">// 升序</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">({ age: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> });  </span><span style="color:#6A737D;">// 降序</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">({ age: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, name: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }); </span><span style="color:#6A737D;">// 多字段排序</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 分页</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">skip</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">limit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);  </span><span style="color:#6A737D;">// 第 1 页</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">skip</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">limit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 第 2 页</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">skip</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">limit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 第 3 页</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 计数</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">countDocuments</span><span style="color:#E1E4E8;">({ age: { $gt: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;"> } });</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ age: { $gt: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;"> } }).</span><span style="color:#B392F0;">count</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 排序</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">({ age: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> });   </span><span style="color:#6A737D;">// 升序</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">({ age: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> });  </span><span style="color:#6A737D;">// 降序</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">({ age: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, name: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> }); </span><span style="color:#6A737D;">// 多字段排序</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 分页</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">skip</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">limit</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);  </span><span style="color:#6A737D;">// 第 1 页</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">skip</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">limit</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 第 2 页</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">skip</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">limit</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 第 3 页</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 计数</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">countDocuments</span><span style="color:#24292E;">({ age: { $gt: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;"> } });</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ age: { $gt: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;"> } }).</span><span style="color:#6F42C1;">count</span><span style="color:#24292E;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_2-3-更新文档" tabindex="-1">2.3 更新文档 <a class="header-anchor" href="#_2-3-更新文档" aria-label="Permalink to &quot;2.3 更新文档&quot;">​</a></h3><h4 id="updateone-updatemany" tabindex="-1">updateOne / updateMany <a class="header-anchor" href="#updateone-updatemany" aria-label="Permalink to &quot;updateOne / updateMany&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// updateOne：更新匹配的第一条文档</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { name: </span><span style="color:#9ECBFF;">&quot;张三&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $set: { age: </span><span style="color:#79B8FF;">29</span><span style="color:#E1E4E8;">, updatedAt: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">() } }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// updateMany：更新所有匹配的文档</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">updateMany</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { age: { $lt: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $set: { level: </span><span style="color:#9ECBFF;">&quot;junior&quot;</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// updateOne：更新匹配的第一条文档</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { name: </span><span style="color:#032F62;">&quot;张三&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { $set: { age: </span><span style="color:#005CC5;">29</span><span style="color:#24292E;">, updatedAt: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">() } }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// updateMany：更新所有匹配的文档</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">updateMany</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { age: { $lt: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;"> } },</span></span>
<span class="line"><span style="color:#24292E;">  { $set: { level: </span><span style="color:#032F62;">&quot;junior&quot;</span><span style="color:#24292E;"> } }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="更新操作符" tabindex="-1">更新操作符 <a class="header-anchor" href="#更新操作符" aria-label="Permalink to &quot;更新操作符&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// $set：设置字段值</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">({ _id: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">) }, { $set: { name: </span><span style="color:#9ECBFF;">&quot;新名字&quot;</span><span style="color:#E1E4E8;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $unset：删除字段</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">({ _id: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">) }, { $unset: { temporaryField: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $inc：递增/递减（原子操作）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">({ _id: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">) }, { $inc: { loginCount: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> } });</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">({ _id: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">) }, { $inc: { points: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $push：数组追加元素</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">({ _id: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">) }, { $push: { tags: </span><span style="color:#9ECBFF;">&quot;mongodb&quot;</span><span style="color:#E1E4E8;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $push + $each：追加多个</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { _id: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">) },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $push: { tags: { $each: [</span><span style="color:#9ECBFF;">&quot;nosql&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;database&quot;</span><span style="color:#E1E4E8;">] } } }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $pull：从数组中移除匹配元素</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">({ _id: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">) }, { $pull: { tags: </span><span style="color:#9ECBFF;">&quot;old-tag&quot;</span><span style="color:#E1E4E8;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $addToSet：向数组添加不重复的元素</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">({ _id: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">) }, { $addToSet: { tags: </span><span style="color:#9ECBFF;">&quot;unique-tag&quot;</span><span style="color:#E1E4E8;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $rename：重命名字段</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">({ _id: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">) }, { $rename: { </span><span style="color:#9ECBFF;">&quot;oldName&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;newName&quot;</span><span style="color:#E1E4E8;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $min / $max：条件更新（仅当新值更小/更大时更新）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.products.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">({ _id: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">) }, { $min: { price: </span><span style="color:#79B8FF;">9.99</span><span style="color:#E1E4E8;"> } });</span></span>
<span class="line"><span style="color:#E1E4E8;">db.products.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">({ _id: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">) }, { $max: { price: </span><span style="color:#79B8FF;">99.99</span><span style="color:#E1E4E8;"> } });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// $set：设置字段值</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">({ _id: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">) }, { $set: { name: </span><span style="color:#032F62;">&quot;新名字&quot;</span><span style="color:#24292E;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $unset：删除字段</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">({ _id: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">) }, { $unset: { temporaryField: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $inc：递增/递减（原子操作）</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">({ _id: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">) }, { $inc: { loginCount: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> } });</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">({ _id: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">) }, { $inc: { points: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $push：数组追加元素</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">({ _id: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">) }, { $push: { tags: </span><span style="color:#032F62;">&quot;mongodb&quot;</span><span style="color:#24292E;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $push + $each：追加多个</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { _id: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">) },</span></span>
<span class="line"><span style="color:#24292E;">  { $push: { tags: { $each: [</span><span style="color:#032F62;">&quot;nosql&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;database&quot;</span><span style="color:#24292E;">] } } }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $pull：从数组中移除匹配元素</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">({ _id: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">) }, { $pull: { tags: </span><span style="color:#032F62;">&quot;old-tag&quot;</span><span style="color:#24292E;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $addToSet：向数组添加不重复的元素</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">({ _id: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">) }, { $addToSet: { tags: </span><span style="color:#032F62;">&quot;unique-tag&quot;</span><span style="color:#24292E;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $rename：重命名字段</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">({ _id: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">) }, { $rename: { </span><span style="color:#032F62;">&quot;oldName&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;newName&quot;</span><span style="color:#24292E;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $min / $max：条件更新（仅当新值更小/更大时更新）</span></span>
<span class="line"><span style="color:#24292E;">db.products.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">({ _id: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">) }, { $min: { price: </span><span style="color:#005CC5;">9.99</span><span style="color:#24292E;"> } });</span></span>
<span class="line"><span style="color:#24292E;">db.products.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">({ _id: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">) }, { $max: { price: </span><span style="color:#005CC5;">99.99</span><span style="color:#24292E;"> } });</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h4 id="upsert" tabindex="-1">upsert <a class="header-anchor" href="#upsert" aria-label="Permalink to &quot;upsert&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// upsert: 文档存在则更新，不存在则插入</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { email: </span><span style="color:#9ECBFF;">&quot;newuser@example.com&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $set: { name: </span><span style="color:#9ECBFF;">&quot;新用户&quot;</span><span style="color:#E1E4E8;">, age: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, createdAt: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">() } },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { upsert: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 返回结果包含 upsertedId 表示是新插入的文档</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// upsert: 文档存在则更新，不存在则插入</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { email: </span><span style="color:#032F62;">&quot;newuser@example.com&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { $set: { name: </span><span style="color:#032F62;">&quot;新用户&quot;</span><span style="color:#24292E;">, age: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, createdAt: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">() } },</span></span>
<span class="line"><span style="color:#24292E;">  { upsert: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 返回结果包含 upsertedId 表示是新插入的文档</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="replaceone" tabindex="-1">replaceOne <a class="header-anchor" href="#replaceone" aria-label="Permalink to &quot;replaceOne&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 完全替换文档（保留 _id）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">replaceOne</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { _id: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">) },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;全新用户&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    email: </span><span style="color:#9ECBFF;">&quot;new@example.com&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    role: </span><span style="color:#9ECBFF;">&quot;admin&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 完全替换文档（保留 _id）</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">replaceOne</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { _id: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">) },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;全新用户&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    email: </span><span style="color:#032F62;">&quot;new@example.com&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    role: </span><span style="color:#032F62;">&quot;admin&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_2-4-删除文档" tabindex="-1">2.4 删除文档 <a class="header-anchor" href="#_2-4-删除文档" aria-label="Permalink to &quot;2.4 删除文档&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// deleteOne：删除匹配的第一条</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">deleteOne</span><span style="color:#E1E4E8;">({ email: </span><span style="color:#9ECBFF;">&quot;temp@example.com&quot;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// deleteMany：删除所有匹配的文档</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">deleteMany</span><span style="color:#E1E4E8;">({ status: </span><span style="color:#9ECBFF;">&quot;inactive&quot;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 删除整个集合（比 deleteMany 快得多）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">drop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 删除数据库</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">dropDatabase</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// deleteOne：删除匹配的第一条</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">deleteOne</span><span style="color:#24292E;">({ email: </span><span style="color:#032F62;">&quot;temp@example.com&quot;</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// deleteMany：删除所有匹配的文档</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">deleteMany</span><span style="color:#24292E;">({ status: </span><span style="color:#032F62;">&quot;inactive&quot;</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 删除整个集合（比 deleteMany 快得多）</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">drop</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 删除数据库</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">dropDatabase</span><span style="color:#24292E;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_2-5-批量操作-bulkwrite" tabindex="-1">2.5 批量操作（bulkWrite） <a class="header-anchor" href="#_2-5-批量操作-bulkwrite" aria-label="Permalink to &quot;2.5 批量操作（bulkWrite）&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bulkWrite 在单次调用中执行多种写入操作</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">bulkWrite</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    insertOne: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      document: { name: </span><span style="color:#9ECBFF;">&quot;新用户1&quot;</span><span style="color:#E1E4E8;">, email: </span><span style="color:#9ECBFF;">&quot;u1@example.com&quot;</span><span style="color:#E1E4E8;">, age: </span><span style="color:#79B8FF;">22</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    insertOne: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      document: { name: </span><span style="color:#9ECBFF;">&quot;新用户2&quot;</span><span style="color:#E1E4E8;">, email: </span><span style="color:#9ECBFF;">&quot;u2@example.com&quot;</span><span style="color:#E1E4E8;">, age: </span><span style="color:#79B8FF;">23</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    updateOne: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      filter: { name: </span><span style="color:#9ECBFF;">&quot;张三&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      update: { $set: { age: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    deleteOne: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      filter: { email: </span><span style="color:#9ECBFF;">&quot;old@example.com&quot;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    replaceOne: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      filter: { _id: </span><span style="color:#B392F0;">ObjectId</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">) },</span></span>
<span class="line"><span style="color:#E1E4E8;">      replacement: { name: </span><span style="color:#9ECBFF;">&quot;替换&quot;</span><span style="color:#E1E4E8;">, email: </span><span style="color:#9ECBFF;">&quot;replace@example.com&quot;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 有序执行（默认）：遇到错误停止</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">bulkWrite</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">], { ordered: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 无序执行：错误不影响其他操作</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">bulkWrite</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">], { ordered: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bulkWrite 在单次调用中执行多种写入操作</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">bulkWrite</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    insertOne: {</span></span>
<span class="line"><span style="color:#24292E;">      document: { name: </span><span style="color:#032F62;">&quot;新用户1&quot;</span><span style="color:#24292E;">, email: </span><span style="color:#032F62;">&quot;u1@example.com&quot;</span><span style="color:#24292E;">, age: </span><span style="color:#005CC5;">22</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    insertOne: {</span></span>
<span class="line"><span style="color:#24292E;">      document: { name: </span><span style="color:#032F62;">&quot;新用户2&quot;</span><span style="color:#24292E;">, email: </span><span style="color:#032F62;">&quot;u2@example.com&quot;</span><span style="color:#24292E;">, age: </span><span style="color:#005CC5;">23</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    updateOne: {</span></span>
<span class="line"><span style="color:#24292E;">      filter: { name: </span><span style="color:#032F62;">&quot;张三&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      update: { $set: { age: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;"> } }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    deleteOne: {</span></span>
<span class="line"><span style="color:#24292E;">      filter: { email: </span><span style="color:#032F62;">&quot;old@example.com&quot;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    replaceOne: {</span></span>
<span class="line"><span style="color:#24292E;">      filter: { _id: </span><span style="color:#6F42C1;">ObjectId</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">) },</span></span>
<span class="line"><span style="color:#24292E;">      replacement: { name: </span><span style="color:#032F62;">&quot;替换&quot;</span><span style="color:#24292E;">, email: </span><span style="color:#032F62;">&quot;replace@example.com&quot;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 有序执行（默认）：遇到错误停止</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">bulkWrite</span><span style="color:#24292E;">([</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">], { ordered: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 无序执行：错误不影响其他操作</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">bulkWrite</span><span style="color:#24292E;">([</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">], { ordered: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> });</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><hr><h2 id="三、聚合管道" tabindex="-1">三、聚合管道 <a class="header-anchor" href="#三、聚合管道" aria-label="Permalink to &quot;三、聚合管道&quot;">​</a></h2><p>聚合管道（Aggregation Pipeline）是 MongoDB 最强大的数据处理工具，通过多个阶段（Stage）对文档进行过滤、转换、分组和计算。</p><h3 id="_3-1-核心阶段" tabindex="-1">3.1 核心阶段 <a class="header-anchor" href="#_3-1-核心阶段" aria-label="Permalink to &quot;3.1 核心阶段&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// $match：过滤文档（类似 find，尽早过滤减少后续处理量）</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $match: { status: </span><span style="color:#9ECBFF;">&quot;completed&quot;</span><span style="color:#E1E4E8;">, total: { $gte: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;"> } } },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// $group：分组聚合</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $group: { _id: </span><span style="color:#9ECBFF;">&quot;$category&quot;</span><span style="color:#E1E4E8;">, totalSales: { $sum: </span><span style="color:#9ECBFF;">&quot;$total&quot;</span><span style="color:#E1E4E8;"> }, count: { $sum: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> } } },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// $project：投影、重命名字段、计算新字段</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $project: { category: </span><span style="color:#9ECBFF;">&quot;$_id&quot;</span><span style="color:#E1E4E8;">, totalSales: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, count: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, _id: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// $sort：排序</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $sort: { totalSales: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// $limit：限制结果数</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $limit: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// $skip：跳过结果</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $skip: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">aggregate</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// $match：过滤文档（类似 find，尽早过滤减少后续处理量）</span></span>
<span class="line"><span style="color:#24292E;">  { $match: { status: </span><span style="color:#032F62;">&quot;completed&quot;</span><span style="color:#24292E;">, total: { $gte: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;"> } } },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// $group：分组聚合</span></span>
<span class="line"><span style="color:#24292E;">  { $group: { _id: </span><span style="color:#032F62;">&quot;$category&quot;</span><span style="color:#24292E;">, totalSales: { $sum: </span><span style="color:#032F62;">&quot;$total&quot;</span><span style="color:#24292E;"> }, count: { $sum: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> } } },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// $project：投影、重命名字段、计算新字段</span></span>
<span class="line"><span style="color:#24292E;">  { $project: { category: </span><span style="color:#032F62;">&quot;$_id&quot;</span><span style="color:#24292E;">, totalSales: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, count: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, _id: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> } },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// $sort：排序</span></span>
<span class="line"><span style="color:#24292E;">  { $sort: { totalSales: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> } },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// $limit：限制结果数</span></span>
<span class="line"><span style="color:#24292E;">  { $limit: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// $skip：跳过结果</span></span>
<span class="line"><span style="color:#24292E;">  { $skip: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_3-2-分组操作符" tabindex="-1">3.2 分组操作符 <a class="header-anchor" href="#_3-2-分组操作符" aria-label="Permalink to &quot;3.2 分组操作符&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 常用累加器</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $group: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    _id: </span><span style="color:#9ECBFF;">&quot;$status&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    count: { $sum: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    totalAmount: { $sum: </span><span style="color:#9ECBFF;">&quot;$total&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    avgAmount: { $avg: </span><span style="color:#9ECBFF;">&quot;$total&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    minAmount: { $min: </span><span style="color:#9ECBFF;">&quot;$total&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    maxAmount: { $max: </span><span style="color:#9ECBFF;">&quot;$total&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    firstOrder: { $first: </span><span style="color:#9ECBFF;">&quot;$orderDate&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    lastOrder: { $last: </span><span style="color:#9ECBFF;">&quot;$orderDate&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    allItems: { $push: </span><span style="color:#9ECBFF;">&quot;$item&quot;</span><span style="color:#E1E4E8;"> },         </span><span style="color:#6A737D;">// 收集到数组</span></span>
<span class="line"><span style="color:#E1E4E8;">    uniqueItems: { $addToSet: </span><span style="color:#9ECBFF;">&quot;$item&quot;</span><span style="color:#E1E4E8;"> }   </span><span style="color:#6A737D;">// 去重收集</span></span>
<span class="line"><span style="color:#E1E4E8;">  }}</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 常用累加器</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">aggregate</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  { $group: {</span></span>
<span class="line"><span style="color:#24292E;">    _id: </span><span style="color:#032F62;">&quot;$status&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    count: { $sum: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    totalAmount: { $sum: </span><span style="color:#032F62;">&quot;$total&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    avgAmount: { $avg: </span><span style="color:#032F62;">&quot;$total&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    minAmount: { $min: </span><span style="color:#032F62;">&quot;$total&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    maxAmount: { $max: </span><span style="color:#032F62;">&quot;$total&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    firstOrder: { $first: </span><span style="color:#032F62;">&quot;$orderDate&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    lastOrder: { $last: </span><span style="color:#032F62;">&quot;$orderDate&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    allItems: { $push: </span><span style="color:#032F62;">&quot;$item&quot;</span><span style="color:#24292E;"> },         </span><span style="color:#6A737D;">// 收集到数组</span></span>
<span class="line"><span style="color:#24292E;">    uniqueItems: { $addToSet: </span><span style="color:#032F62;">&quot;$item&quot;</span><span style="color:#24292E;"> }   </span><span style="color:#6A737D;">// 去重收集</span></span>
<span class="line"><span style="color:#24292E;">  }}</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_3-3-unwind" tabindex="-1">3.3 $unwind <a class="header-anchor" href="#_3-3-unwind" aria-label="Permalink to &quot;3.3 $unwind&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 将数组字段拆分为多条文档</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 输入文档：{ _id: 1, items: [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;] }</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $unwind: </span><span style="color:#9ECBFF;">&quot;$items&quot;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 输出三条文档：{ _id: 1, items: &quot;a&quot; }, { _id: 1, items: &quot;b&quot; }, { _id: 1, items: &quot;c&quot; }</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理空数组或缺失字段的情况</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $unwind: { path: </span><span style="color:#9ECBFF;">&quot;$items&quot;</span><span style="color:#E1E4E8;">, preserveNullAndEmptyArrays: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 实战：统计每个商品的总销量</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $match: { status: </span><span style="color:#9ECBFF;">&quot;completed&quot;</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $unwind: </span><span style="color:#9ECBFF;">&quot;$items&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $group: { _id: </span><span style="color:#9ECBFF;">&quot;$items.productId&quot;</span><span style="color:#E1E4E8;">, totalQty: { $sum: </span><span style="color:#9ECBFF;">&quot;$items.qty&quot;</span><span style="color:#E1E4E8;"> }, revenue: { $sum: { $multiply: [</span><span style="color:#9ECBFF;">&quot;$items.price&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;$items.qty&quot;</span><span style="color:#E1E4E8;">] } } } },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $sort: { revenue: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 将数组字段拆分为多条文档</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">aggregate</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 输入文档：{ _id: 1, items: [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;] }</span></span>
<span class="line"><span style="color:#24292E;">  { $unwind: </span><span style="color:#032F62;">&quot;$items&quot;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 输出三条文档：{ _id: 1, items: &quot;a&quot; }, { _id: 1, items: &quot;b&quot; }, { _id: 1, items: &quot;c&quot; }</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理空数组或缺失字段的情况</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">aggregate</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  { $unwind: { path: </span><span style="color:#032F62;">&quot;$items&quot;</span><span style="color:#24292E;">, preserveNullAndEmptyArrays: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> } }</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 实战：统计每个商品的总销量</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">aggregate</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  { $match: { status: </span><span style="color:#032F62;">&quot;completed&quot;</span><span style="color:#24292E;"> } },</span></span>
<span class="line"><span style="color:#24292E;">  { $unwind: </span><span style="color:#032F62;">&quot;$items&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { $group: { _id: </span><span style="color:#032F62;">&quot;$items.productId&quot;</span><span style="color:#24292E;">, totalQty: { $sum: </span><span style="color:#032F62;">&quot;$items.qty&quot;</span><span style="color:#24292E;"> }, revenue: { $sum: { $multiply: [</span><span style="color:#032F62;">&quot;$items.price&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;$items.qty&quot;</span><span style="color:#24292E;">] } } } },</span></span>
<span class="line"><span style="color:#24292E;">  { $sort: { revenue: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> } }</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_3-4-lookup-关联查询" tabindex="-1">3.4 $lookup（关联查询） <a class="header-anchor" href="#_3-4-lookup-关联查询" aria-label="Permalink to &quot;3.4 $lookup（关联查询）&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 左外连接：将 orders 与 products 集合关联</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    $lookup: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      from: </span><span style="color:#9ECBFF;">&quot;products&quot;</span><span style="color:#E1E4E8;">,                 </span><span style="color:#6A737D;">// 关联集合名</span></span>
<span class="line"><span style="color:#E1E4E8;">      localField: </span><span style="color:#9ECBFF;">&quot;productId&quot;</span><span style="color:#E1E4E8;">,          </span><span style="color:#6A737D;">// 当前集合字段</span></span>
<span class="line"><span style="color:#E1E4E8;">      foreignField: </span><span style="color:#9ECBFF;">&quot;_id&quot;</span><span style="color:#E1E4E8;">,              </span><span style="color:#6A737D;">// 关联集合字段</span></span>
<span class="line"><span style="color:#E1E4E8;">      as: </span><span style="color:#9ECBFF;">&quot;productInfo&quot;</span><span style="color:#E1E4E8;">                 </span><span style="color:#6A737D;">// 输出数组字段名</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// $lookup 结果始终是数组，用 $unwind 或 $arrayElemAt 展开</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $unwind: { path: </span><span style="color:#9ECBFF;">&quot;$productInfo&quot;</span><span style="color:#E1E4E8;">, preserveNullAndEmptyArrays: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    $project: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      orderId: </span><span style="color:#9ECBFF;">&quot;$_id&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      productName: </span><span style="color:#9ECBFF;">&quot;$productInfo.name&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      price: </span><span style="color:#9ECBFF;">&quot;$productInfo.price&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      qty: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      total: { $multiply: [</span><span style="color:#9ECBFF;">&quot;$productInfo.price&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;$qty&quot;</span><span style="color:#E1E4E8;">] }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 带管道的 $lookup（更灵活）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    $lookup: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      from: </span><span style="color:#9ECBFF;">&quot;reviews&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      let: { productId: </span><span style="color:#9ECBFF;">&quot;$productId&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      pipeline: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $match: { $expr: { $eq: [</span><span style="color:#9ECBFF;">&quot;$productId&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;$$productId&quot;</span><span style="color:#E1E4E8;">] } } },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $sort: { createdAt: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $limit: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      as: </span><span style="color:#9ECBFF;">&quot;recentReviews&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 左外连接：将 orders 与 products 集合关联</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">aggregate</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    $lookup: {</span></span>
<span class="line"><span style="color:#24292E;">      from: </span><span style="color:#032F62;">&quot;products&quot;</span><span style="color:#24292E;">,                 </span><span style="color:#6A737D;">// 关联集合名</span></span>
<span class="line"><span style="color:#24292E;">      localField: </span><span style="color:#032F62;">&quot;productId&quot;</span><span style="color:#24292E;">,          </span><span style="color:#6A737D;">// 当前集合字段</span></span>
<span class="line"><span style="color:#24292E;">      foreignField: </span><span style="color:#032F62;">&quot;_id&quot;</span><span style="color:#24292E;">,              </span><span style="color:#6A737D;">// 关联集合字段</span></span>
<span class="line"><span style="color:#24292E;">      as: </span><span style="color:#032F62;">&quot;productInfo&quot;</span><span style="color:#24292E;">                 </span><span style="color:#6A737D;">// 输出数组字段名</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// $lookup 结果始终是数组，用 $unwind 或 $arrayElemAt 展开</span></span>
<span class="line"><span style="color:#24292E;">  { $unwind: { path: </span><span style="color:#032F62;">&quot;$productInfo&quot;</span><span style="color:#24292E;">, preserveNullAndEmptyArrays: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> } },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    $project: {</span></span>
<span class="line"><span style="color:#24292E;">      orderId: </span><span style="color:#032F62;">&quot;$_id&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      productName: </span><span style="color:#032F62;">&quot;$productInfo.name&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      price: </span><span style="color:#032F62;">&quot;$productInfo.price&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      qty: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      total: { $multiply: [</span><span style="color:#032F62;">&quot;$productInfo.price&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;$qty&quot;</span><span style="color:#24292E;">] }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 带管道的 $lookup（更灵活）</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">aggregate</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    $lookup: {</span></span>
<span class="line"><span style="color:#24292E;">      from: </span><span style="color:#032F62;">&quot;reviews&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      let: { productId: </span><span style="color:#032F62;">&quot;$productId&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      pipeline: [</span></span>
<span class="line"><span style="color:#24292E;">        { $match: { $expr: { $eq: [</span><span style="color:#032F62;">&quot;$productId&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;$$productId&quot;</span><span style="color:#24292E;">] } } },</span></span>
<span class="line"><span style="color:#24292E;">        { $sort: { createdAt: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> } },</span></span>
<span class="line"><span style="color:#24292E;">        { $limit: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      as: </span><span style="color:#032F62;">&quot;recentReviews&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h3 id="_3-5-addfields-bucket-facet" tabindex="-1">3.5 $addFields / $bucket / $facet <a class="header-anchor" href="#_3-5-addfields-bucket-facet" aria-label="Permalink to &quot;3.5 $addFields / $bucket / $facet&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// $addFields：添加新字段</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $addFields: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    totalPrice: { $multiply: [</span><span style="color:#9ECBFF;">&quot;$price&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;$qty&quot;</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">    discountedPrice: { $multiply: [</span><span style="color:#9ECBFF;">&quot;$price&quot;</span><span style="color:#E1E4E8;">, { $subtract: [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;$discountRate&quot;</span><span style="color:#E1E4E8;">] }] },</span></span>
<span class="line"><span style="color:#E1E4E8;">    orderYear: { $year: </span><span style="color:#9ECBFF;">&quot;$orderDate&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    isExpensive: { $gte: [</span><span style="color:#9ECBFF;">&quot;$total&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">] }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }}</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $bucket：分桶（类似直方图）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    $bucket: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      groupBy: </span><span style="color:#9ECBFF;">&quot;$total&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      boundaries: [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">],        </span><span style="color:#6A737D;">// 桶边界 [0,100), [100,500), ...</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#9ECBFF;">&quot;Other&quot;</span><span style="color:#E1E4E8;">,                               </span><span style="color:#6A737D;">// 超出范围的值</span></span>
<span class="line"><span style="color:#E1E4E8;">      output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        count: { $sum: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        avgTotal: { $avg: </span><span style="color:#9ECBFF;">&quot;$total&quot;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $facet：在同一输入上并行执行多个管道</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $match: { status: </span><span style="color:#9ECBFF;">&quot;completed&quot;</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    $facet: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      byCategory: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $group: { _id: </span><span style="color:#9ECBFF;">&quot;$category&quot;</span><span style="color:#E1E4E8;">, count: { $sum: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }, total: { $sum: </span><span style="color:#9ECBFF;">&quot;$total&quot;</span><span style="color:#E1E4E8;"> } } },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $sort: { total: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      stats: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $group: { _id: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, avgTotal: { $avg: </span><span style="color:#9ECBFF;">&quot;$total&quot;</span><span style="color:#E1E4E8;"> }, maxTotal: { $max: </span><span style="color:#9ECBFF;">&quot;$total&quot;</span><span style="color:#E1E4E8;"> }, totalOrders: { $sum: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> } } }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      monthly: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $group: { _id: { $dateToString: { format: </span><span style="color:#9ECBFF;">&quot;%Y-%m&quot;</span><span style="color:#E1E4E8;">, date: </span><span style="color:#9ECBFF;">&quot;$orderDate&quot;</span><span style="color:#E1E4E8;"> } }, count: { $sum: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> } } },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $sort: { _id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// $addFields：添加新字段</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">aggregate</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  { $addFields: {</span></span>
<span class="line"><span style="color:#24292E;">    totalPrice: { $multiply: [</span><span style="color:#032F62;">&quot;$price&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;$qty&quot;</span><span style="color:#24292E;">] },</span></span>
<span class="line"><span style="color:#24292E;">    discountedPrice: { $multiply: [</span><span style="color:#032F62;">&quot;$price&quot;</span><span style="color:#24292E;">, { $subtract: [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;$discountRate&quot;</span><span style="color:#24292E;">] }] },</span></span>
<span class="line"><span style="color:#24292E;">    orderYear: { $year: </span><span style="color:#032F62;">&quot;$orderDate&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    isExpensive: { $gte: [</span><span style="color:#032F62;">&quot;$total&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">] }</span></span>
<span class="line"><span style="color:#24292E;">  }}</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $bucket：分桶（类似直方图）</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">aggregate</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    $bucket: {</span></span>
<span class="line"><span style="color:#24292E;">      groupBy: </span><span style="color:#032F62;">&quot;$total&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      boundaries: [</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">],        </span><span style="color:#6A737D;">// 桶边界 [0,100), [100,500), ...</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#032F62;">&quot;Other&quot;</span><span style="color:#24292E;">,                               </span><span style="color:#6A737D;">// 超出范围的值</span></span>
<span class="line"><span style="color:#24292E;">      output: {</span></span>
<span class="line"><span style="color:#24292E;">        count: { $sum: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        avgTotal: { $avg: </span><span style="color:#032F62;">&quot;$total&quot;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// $facet：在同一输入上并行执行多个管道</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">aggregate</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  { $match: { status: </span><span style="color:#032F62;">&quot;completed&quot;</span><span style="color:#24292E;"> } },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    $facet: {</span></span>
<span class="line"><span style="color:#24292E;">      byCategory: [</span></span>
<span class="line"><span style="color:#24292E;">        { $group: { _id: </span><span style="color:#032F62;">&quot;$category&quot;</span><span style="color:#24292E;">, count: { $sum: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> }, total: { $sum: </span><span style="color:#032F62;">&quot;$total&quot;</span><span style="color:#24292E;"> } } },</span></span>
<span class="line"><span style="color:#24292E;">        { $sort: { total: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> } }</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      stats: [</span></span>
<span class="line"><span style="color:#24292E;">        { $group: { _id: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, avgTotal: { $avg: </span><span style="color:#032F62;">&quot;$total&quot;</span><span style="color:#24292E;"> }, maxTotal: { $max: </span><span style="color:#032F62;">&quot;$total&quot;</span><span style="color:#24292E;"> }, totalOrders: { $sum: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> } } }</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      monthly: [</span></span>
<span class="line"><span style="color:#24292E;">        { $group: { _id: { $dateToString: { format: </span><span style="color:#032F62;">&quot;%Y-%m&quot;</span><span style="color:#24292E;">, date: </span><span style="color:#032F62;">&quot;$orderDate&quot;</span><span style="color:#24292E;"> } }, count: { $sum: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> } } },</span></span>
<span class="line"><span style="color:#24292E;">        { $sort: { _id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> } }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h3 id="_3-6-聚合表达式与操作符" tabindex="-1">3.6 聚合表达式与操作符 <a class="header-anchor" href="#_3-6-聚合表达式与操作符" aria-label="Permalink to &quot;3.6 聚合表达式与操作符&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 字符串操作</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $project: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    fullName: { $concat: [</span><span style="color:#9ECBFF;">&quot;$firstName&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot; &quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;$lastName&quot;</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">    lowerEmail: { $toLower: </span><span style="color:#9ECBFF;">&quot;$email&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    nameLength: { $strLenCP: </span><span style="color:#9ECBFF;">&quot;$name&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    substring: { $substrCP: [</span><span style="color:#9ECBFF;">&quot;$name&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }}</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 日期操作</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $project: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    year: { $year: </span><span style="color:#9ECBFF;">&quot;$orderDate&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    month: { $month: </span><span style="color:#9ECBFF;">&quot;$orderDate&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    dayOfWeek: { $dayOfWeek: </span><span style="color:#9ECBFF;">&quot;$orderDate&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    dateStr: { $dateToString: { format: </span><span style="color:#9ECBFF;">&quot;%Y-%m-%d&quot;</span><span style="color:#E1E4E8;">, date: </span><span style="color:#9ECBFF;">&quot;$orderDate&quot;</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">    isWeekend: { $or: [{ $eq: [{ $dayOfWeek: </span><span style="color:#9ECBFF;">&quot;$orderDate&quot;</span><span style="color:#E1E4E8;"> }, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] }, { $eq: [{ $dayOfWeek: </span><span style="color:#9ECBFF;">&quot;$orderDate&quot;</span><span style="color:#E1E4E8;"> }, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">] }] }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }}</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 条件表达式</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $project: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    total: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    level: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      $switch: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        branches: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          { case: { $gte: [</span><span style="color:#9ECBFF;">&quot;$total&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">] }, then: </span><span style="color:#9ECBFF;">&quot;VIP&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { case: { $gte: [</span><span style="color:#9ECBFF;">&quot;$total&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">] }, then: </span><span style="color:#9ECBFF;">&quot;黄金&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { case: { $gte: [</span><span style="color:#9ECBFF;">&quot;$total&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">] }, then: </span><span style="color:#9ECBFF;">&quot;白银&quot;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&quot;普通&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    discount: { $cond: { if: { $gte: [</span><span style="color:#9ECBFF;">&quot;$total&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">500</span><span style="color:#E1E4E8;">] }, then: </span><span style="color:#79B8FF;">0.9</span><span style="color:#E1E4E8;">, else: </span><span style="color:#79B8FF;">1.0</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }}</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 字符串操作</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">aggregate</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  { $project: {</span></span>
<span class="line"><span style="color:#24292E;">    fullName: { $concat: [</span><span style="color:#032F62;">&quot;$firstName&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot; &quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;$lastName&quot;</span><span style="color:#24292E;">] },</span></span>
<span class="line"><span style="color:#24292E;">    lowerEmail: { $toLower: </span><span style="color:#032F62;">&quot;$email&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    nameLength: { $strLenCP: </span><span style="color:#032F62;">&quot;$name&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    substring: { $substrCP: [</span><span style="color:#032F62;">&quot;$name&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">] }</span></span>
<span class="line"><span style="color:#24292E;">  }}</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 日期操作</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">aggregate</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  { $project: {</span></span>
<span class="line"><span style="color:#24292E;">    year: { $year: </span><span style="color:#032F62;">&quot;$orderDate&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    month: { $month: </span><span style="color:#032F62;">&quot;$orderDate&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    dayOfWeek: { $dayOfWeek: </span><span style="color:#032F62;">&quot;$orderDate&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    dateStr: { $dateToString: { format: </span><span style="color:#032F62;">&quot;%Y-%m-%d&quot;</span><span style="color:#24292E;">, date: </span><span style="color:#032F62;">&quot;$orderDate&quot;</span><span style="color:#24292E;"> } },</span></span>
<span class="line"><span style="color:#24292E;">    isWeekend: { $or: [{ $eq: [{ $dayOfWeek: </span><span style="color:#032F62;">&quot;$orderDate&quot;</span><span style="color:#24292E;"> }, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] }, { $eq: [{ $dayOfWeek: </span><span style="color:#032F62;">&quot;$orderDate&quot;</span><span style="color:#24292E;"> }, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">] }] }</span></span>
<span class="line"><span style="color:#24292E;">  }}</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 条件表达式</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">aggregate</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  { $project: {</span></span>
<span class="line"><span style="color:#24292E;">    total: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    level: {</span></span>
<span class="line"><span style="color:#24292E;">      $switch: {</span></span>
<span class="line"><span style="color:#24292E;">        branches: [</span></span>
<span class="line"><span style="color:#24292E;">          { case: { $gte: [</span><span style="color:#032F62;">&quot;$total&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">] }, then: </span><span style="color:#032F62;">&quot;VIP&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          { case: { $gte: [</span><span style="color:#032F62;">&quot;$total&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">] }, then: </span><span style="color:#032F62;">&quot;黄金&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          { case: { $gte: [</span><span style="color:#032F62;">&quot;$total&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">] }, then: </span><span style="color:#032F62;">&quot;白银&quot;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        default: </span><span style="color:#032F62;">&quot;普通&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    discount: { $cond: { if: { $gte: [</span><span style="color:#032F62;">&quot;$total&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">500</span><span style="color:#24292E;">] }, then: </span><span style="color:#005CC5;">0.9</span><span style="color:#24292E;">, else: </span><span style="color:#005CC5;">1.0</span><span style="color:#24292E;"> } }</span></span>
<span class="line"><span style="color:#24292E;">  }}</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h3 id="_3-7-综合示例" tabindex="-1">3.7 综合示例 <a class="header-anchor" href="#_3-7-综合示例" aria-label="Permalink to &quot;3.7 综合示例&quot;">​</a></h3><p><strong>订单统计分析：</strong></p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 统计每个品类各月份的销售情况</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $match: { status: { $in: [</span><span style="color:#9ECBFF;">&quot;completed&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;shipped&quot;</span><span style="color:#E1E4E8;">] } } },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $unwind: </span><span style="color:#9ECBFF;">&quot;$items&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    $lookup: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      from: </span><span style="color:#9ECBFF;">&quot;products&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      localField: </span><span style="color:#9ECBFF;">&quot;items.productId&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      foreignField: </span><span style="color:#9ECBFF;">&quot;_id&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      as: </span><span style="color:#9ECBFF;">&quot;product&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $unwind: </span><span style="color:#9ECBFF;">&quot;$product&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    $group: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      _id: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        category: </span><span style="color:#9ECBFF;">&quot;$product.category&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        yearMonth: { $dateToString: { format: </span><span style="color:#9ECBFF;">&quot;%Y-%m&quot;</span><span style="color:#E1E4E8;">, date: </span><span style="color:#9ECBFF;">&quot;$orderDate&quot;</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalSales: { $sum: { $multiply: [</span><span style="color:#9ECBFF;">&quot;$items.price&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;$items.qty&quot;</span><span style="color:#E1E4E8;">] } },</span></span>
<span class="line"><span style="color:#E1E4E8;">      orderCount: { $sum: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      avgOrderValue: { $avg: { $multiply: [</span><span style="color:#9ECBFF;">&quot;$items.price&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;$items.qty&quot;</span><span style="color:#E1E4E8;">] } }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $sort: { </span><span style="color:#9ECBFF;">&quot;_id.yearMonth&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, totalSales: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    $group: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      _id: </span><span style="color:#9ECBFF;">&quot;$_id.category&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      monthlySales: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        $push: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          month: </span><span style="color:#9ECBFF;">&quot;$_id.yearMonth&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          sales: </span><span style="color:#9ECBFF;">&quot;$totalSales&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          orders: </span><span style="color:#9ECBFF;">&quot;$orderCount&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      totalSales: { $sum: </span><span style="color:#9ECBFF;">&quot;$totalSales&quot;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $sort: { totalSales: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $project: { category: </span><span style="color:#9ECBFF;">&quot;$_id&quot;</span><span style="color:#E1E4E8;">, monthlySales: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, totalSales: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, _id: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 统计每个品类各月份的销售情况</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">aggregate</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  { $match: { status: { $in: [</span><span style="color:#032F62;">&quot;completed&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;shipped&quot;</span><span style="color:#24292E;">] } } },</span></span>
<span class="line"><span style="color:#24292E;">  { $unwind: </span><span style="color:#032F62;">&quot;$items&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    $lookup: {</span></span>
<span class="line"><span style="color:#24292E;">      from: </span><span style="color:#032F62;">&quot;products&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      localField: </span><span style="color:#032F62;">&quot;items.productId&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      foreignField: </span><span style="color:#032F62;">&quot;_id&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      as: </span><span style="color:#032F62;">&quot;product&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  { $unwind: </span><span style="color:#032F62;">&quot;$product&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    $group: {</span></span>
<span class="line"><span style="color:#24292E;">      _id: {</span></span>
<span class="line"><span style="color:#24292E;">        category: </span><span style="color:#032F62;">&quot;$product.category&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        yearMonth: { $dateToString: { format: </span><span style="color:#032F62;">&quot;%Y-%m&quot;</span><span style="color:#24292E;">, date: </span><span style="color:#032F62;">&quot;$orderDate&quot;</span><span style="color:#24292E;"> } }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      totalSales: { $sum: { $multiply: [</span><span style="color:#032F62;">&quot;$items.price&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;$items.qty&quot;</span><span style="color:#24292E;">] } },</span></span>
<span class="line"><span style="color:#24292E;">      orderCount: { $sum: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      avgOrderValue: { $avg: { $multiply: [</span><span style="color:#032F62;">&quot;$items.price&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;$items.qty&quot;</span><span style="color:#24292E;">] } }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  { $sort: { </span><span style="color:#032F62;">&quot;_id.yearMonth&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, totalSales: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> } },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    $group: {</span></span>
<span class="line"><span style="color:#24292E;">      _id: </span><span style="color:#032F62;">&quot;$_id.category&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      monthlySales: {</span></span>
<span class="line"><span style="color:#24292E;">        $push: {</span></span>
<span class="line"><span style="color:#24292E;">          month: </span><span style="color:#032F62;">&quot;$_id.yearMonth&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          sales: </span><span style="color:#032F62;">&quot;$totalSales&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          orders: </span><span style="color:#032F62;">&quot;$orderCount&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      totalSales: { $sum: </span><span style="color:#032F62;">&quot;$totalSales&quot;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  { $sort: { totalSales: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> } },</span></span>
<span class="line"><span style="color:#24292E;">  { $project: { category: </span><span style="color:#032F62;">&quot;$_id&quot;</span><span style="color:#24292E;">, monthlySales: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, totalSales: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, _id: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> } }</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p><strong>用户行为漏斗分析：</strong></p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">db.events.</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    $facet: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      pageViews: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $match: { event: </span><span style="color:#9ECBFF;">&quot;page_view&quot;</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $group: { _id: </span><span style="color:#9ECBFF;">&quot;$userId&quot;</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $count: </span><span style="color:#9ECBFF;">&quot;count&quot;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      addToCart: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $match: { event: </span><span style="color:#9ECBFF;">&quot;add_to_cart&quot;</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $group: { _id: </span><span style="color:#9ECBFF;">&quot;$userId&quot;</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $count: </span><span style="color:#9ECBFF;">&quot;count&quot;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      purchases: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $match: { event: </span><span style="color:#9ECBFF;">&quot;purchase&quot;</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $group: { _id: </span><span style="color:#9ECBFF;">&quot;$userId&quot;</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { $count: </span><span style="color:#9ECBFF;">&quot;count&quot;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    $project: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      pageViews: { $arrayElemAt: [</span><span style="color:#9ECBFF;">&quot;$pageViews.count&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">      addToCart: { $arrayElemAt: [</span><span style="color:#9ECBFF;">&quot;$addToCart.count&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">      purchases: { $arrayElemAt: [</span><span style="color:#9ECBFF;">&quot;$purchases.count&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">      conversionRate: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        $round: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          { $multiply: [{ $divide: [{ $arrayElemAt: [</span><span style="color:#9ECBFF;">&quot;$purchases.count&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] }, { $arrayElemAt: [</span><span style="color:#9ECBFF;">&quot;$pageViews.count&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] }] }, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">db.events.</span><span style="color:#6F42C1;">aggregate</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    $facet: {</span></span>
<span class="line"><span style="color:#24292E;">      pageViews: [</span></span>
<span class="line"><span style="color:#24292E;">        { $match: { event: </span><span style="color:#032F62;">&quot;page_view&quot;</span><span style="color:#24292E;"> } },</span></span>
<span class="line"><span style="color:#24292E;">        { $group: { _id: </span><span style="color:#032F62;">&quot;$userId&quot;</span><span style="color:#24292E;"> } },</span></span>
<span class="line"><span style="color:#24292E;">        { $count: </span><span style="color:#032F62;">&quot;count&quot;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      addToCart: [</span></span>
<span class="line"><span style="color:#24292E;">        { $match: { event: </span><span style="color:#032F62;">&quot;add_to_cart&quot;</span><span style="color:#24292E;"> } },</span></span>
<span class="line"><span style="color:#24292E;">        { $group: { _id: </span><span style="color:#032F62;">&quot;$userId&quot;</span><span style="color:#24292E;"> } },</span></span>
<span class="line"><span style="color:#24292E;">        { $count: </span><span style="color:#032F62;">&quot;count&quot;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      purchases: [</span></span>
<span class="line"><span style="color:#24292E;">        { $match: { event: </span><span style="color:#032F62;">&quot;purchase&quot;</span><span style="color:#24292E;"> } },</span></span>
<span class="line"><span style="color:#24292E;">        { $group: { _id: </span><span style="color:#032F62;">&quot;$userId&quot;</span><span style="color:#24292E;"> } },</span></span>
<span class="line"><span style="color:#24292E;">        { $count: </span><span style="color:#032F62;">&quot;count&quot;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    $project: {</span></span>
<span class="line"><span style="color:#24292E;">      pageViews: { $arrayElemAt: [</span><span style="color:#032F62;">&quot;$pageViews.count&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] },</span></span>
<span class="line"><span style="color:#24292E;">      addToCart: { $arrayElemAt: [</span><span style="color:#032F62;">&quot;$addToCart.count&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] },</span></span>
<span class="line"><span style="color:#24292E;">      purchases: { $arrayElemAt: [</span><span style="color:#032F62;">&quot;$purchases.count&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] },</span></span>
<span class="line"><span style="color:#24292E;">      conversionRate: {</span></span>
<span class="line"><span style="color:#24292E;">        $round: [</span></span>
<span class="line"><span style="color:#24292E;">          { $multiply: [{ $divide: [{ $arrayElemAt: [</span><span style="color:#032F62;">&quot;$purchases.count&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] }, { $arrayElemAt: [</span><span style="color:#032F62;">&quot;$pageViews.count&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] }] }, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">] },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><hr><h2 id="四、索引" tabindex="-1">四、索引 <a class="header-anchor" href="#四、索引" aria-label="Permalink to &quot;四、索引&quot;">​</a></h2><h3 id="_4-1-索引类型" tabindex="-1">4.1 索引类型 <a class="header-anchor" href="#_4-1-索引类型" aria-label="Permalink to &quot;4.1 索引类型&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 单字段索引（默认升序）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">createIndex</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 复合索引（字段顺序很重要）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">createIndex</span><span style="color:#E1E4E8;">({ age: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, name: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 多键索引（数组字段，MongoDB 自动为数组创建多键索引）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.articles.</span><span style="color:#B392F0;">createIndex</span><span style="color:#E1E4E8;">({ tags: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 唯一索引</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">createIndex</span><span style="color:#E1E4E8;">({ email: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }, { unique: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 稀疏索引（只索引包含该字段的文档）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">createIndex</span><span style="color:#E1E4E8;">({ wechatId: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }, { sparse: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 部分索引（只索引满足条件的文档，更节省空间）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">createIndex</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { status: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, createdAt: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { partialFilterExpression: { status: </span><span style="color:#9ECBFF;">&quot;completed&quot;</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看集合的索引</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">getIndexes</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 删除索引</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">dropIndex</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;name_1&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">dropIndexes</span><span style="color:#E1E4E8;">();  </span><span style="color:#6A737D;">// 删除除 _id 以外的所有索引</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 单字段索引（默认升序）</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">createIndex</span><span style="color:#24292E;">({ name: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 复合索引（字段顺序很重要）</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">createIndex</span><span style="color:#24292E;">({ age: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, name: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 多键索引（数组字段，MongoDB 自动为数组创建多键索引）</span></span>
<span class="line"><span style="color:#24292E;">db.articles.</span><span style="color:#6F42C1;">createIndex</span><span style="color:#24292E;">({ tags: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 唯一索引</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">createIndex</span><span style="color:#24292E;">({ email: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> }, { unique: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 稀疏索引（只索引包含该字段的文档）</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">createIndex</span><span style="color:#24292E;">({ wechatId: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> }, { sparse: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 部分索引（只索引满足条件的文档，更节省空间）</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">createIndex</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { status: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, createdAt: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { partialFilterExpression: { status: </span><span style="color:#032F62;">&quot;completed&quot;</span><span style="color:#24292E;"> } }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看集合的索引</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">getIndexes</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 删除索引</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">dropIndex</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name_1&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">dropIndexes</span><span style="color:#24292E;">();  </span><span style="color:#6A737D;">// 删除除 _id 以外的所有索引</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="_4-2-复合索引设计原则" tabindex="-1">4.2 复合索引设计原则 <a class="header-anchor" href="#_4-2-复合索引设计原则" aria-label="Permalink to &quot;4.2 复合索引设计原则&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 创建复合索引</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">createIndex</span><span style="color:#E1E4E8;">({ userId: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, status: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, createdAt: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 复合索引的字段顺序遵循 ESR 原则：</span></span>
<span class="line"><span style="color:#6A737D;"> *   E (Equality) —— 等值查询的字段放最前面</span></span>
<span class="line"><span style="color:#6A737D;"> *   S (Sort)     —— 排序字段放中间</span></span>
<span class="line"><span style="color:#6A737D;"> *   R (Range)    —— 范围查询字段放最后面</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 以下查询能充分利用上面的索引：</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ userId: </span><span style="color:#9ECBFF;">&quot;u123&quot;</span><span style="color:#E1E4E8;">, status: </span><span style="color:#9ECBFF;">&quot;completed&quot;</span><span style="color:#E1E4E8;"> }).</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">({ createdAt: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#6A737D;">// 精准匹配 userId 和 status，再排序 createdAt，完全命中索引</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 注意：复合索引支持前缀匹配</span></span>
<span class="line"><span style="color:#6A737D;">// 以下查询也可使用该索引：</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ userId: </span><span style="color:#9ECBFF;">&quot;u123&quot;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ userId: </span><span style="color:#9ECBFF;">&quot;u123&quot;</span><span style="color:#E1E4E8;">, status: </span><span style="color:#9ECBFF;">&quot;completed&quot;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 以下查询无法使用该索引（跳过了 userId）：</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ status: </span><span style="color:#9ECBFF;">&quot;completed&quot;</span><span style="color:#E1E4E8;"> });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 创建复合索引</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">createIndex</span><span style="color:#24292E;">({ userId: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, status: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, createdAt: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 复合索引的字段顺序遵循 ESR 原则：</span></span>
<span class="line"><span style="color:#6A737D;"> *   E (Equality) —— 等值查询的字段放最前面</span></span>
<span class="line"><span style="color:#6A737D;"> *   S (Sort)     —— 排序字段放中间</span></span>
<span class="line"><span style="color:#6A737D;"> *   R (Range)    —— 范围查询字段放最后面</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 以下查询能充分利用上面的索引：</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ userId: </span><span style="color:#032F62;">&quot;u123&quot;</span><span style="color:#24292E;">, status: </span><span style="color:#032F62;">&quot;completed&quot;</span><span style="color:#24292E;"> }).</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">({ createdAt: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#6A737D;">// 精准匹配 userId 和 status，再排序 createdAt，完全命中索引</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 注意：复合索引支持前缀匹配</span></span>
<span class="line"><span style="color:#6A737D;">// 以下查询也可使用该索引：</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ userId: </span><span style="color:#032F62;">&quot;u123&quot;</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ userId: </span><span style="color:#032F62;">&quot;u123&quot;</span><span style="color:#24292E;">, status: </span><span style="color:#032F62;">&quot;completed&quot;</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 以下查询无法使用该索引（跳过了 userId）：</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ status: </span><span style="color:#032F62;">&quot;completed&quot;</span><span style="color:#24292E;"> });</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="_4-3-全文索引" tabindex="-1">4.3 全文索引 <a class="header-anchor" href="#_4-3-全文索引" aria-label="Permalink to &quot;4.3 全文索引&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 创建全文索引（一个集合只能有一个全文索引）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.articles.</span><span style="color:#B392F0;">createIndex</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { title: </span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;">, content: </span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;">, tags: </span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { weights: { title: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, content: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, tags: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> }, name: </span><span style="color:#9ECBFF;">&quot;article_text_index&quot;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 通配符全文索引：索引所有字符串字段</span></span>
<span class="line"><span style="color:#E1E4E8;">db.articles.</span><span style="color:#B392F0;">createIndex</span><span style="color:#E1E4E8;">({ </span><span style="color:#9ECBFF;">&quot;$**&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全文搜索</span></span>
<span class="line"><span style="color:#E1E4E8;">db.articles.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ $text: { $search: </span><span style="color:#9ECBFF;">&quot;mongodb 索引&quot;</span><span style="color:#E1E4E8;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 按相关性排序</span></span>
<span class="line"><span style="color:#E1E4E8;">db.articles.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $text: { $search: </span><span style="color:#9ECBFF;">&quot;mongodb 索引&quot;</span><span style="color:#E1E4E8;"> } },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { score: { $meta: </span><span style="color:#9ECBFF;">&quot;textScore&quot;</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">({ score: { $meta: </span><span style="color:#9ECBFF;">&quot;textScore&quot;</span><span style="color:#E1E4E8;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 短语精确搜索（用双引号）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.articles.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ $text: { $search: </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">mongodb aggregation</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 排除词语</span></span>
<span class="line"><span style="color:#E1E4E8;">db.articles.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ $text: { $search: </span><span style="color:#9ECBFF;">&quot;mongodb -sql&quot;</span><span style="color:#E1E4E8;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 语言指定</span></span>
<span class="line"><span style="color:#E1E4E8;">db.articles.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ $text: { $search: </span><span style="color:#9ECBFF;">&quot;数据库&quot;</span><span style="color:#E1E4E8;">, $language: </span><span style="color:#9ECBFF;">&quot;zh&quot;</span><span style="color:#E1E4E8;"> } });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 创建全文索引（一个集合只能有一个全文索引）</span></span>
<span class="line"><span style="color:#24292E;">db.articles.</span><span style="color:#6F42C1;">createIndex</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { title: </span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">, content: </span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">, tags: </span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { weights: { title: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, content: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, tags: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> }, name: </span><span style="color:#032F62;">&quot;article_text_index&quot;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 通配符全文索引：索引所有字符串字段</span></span>
<span class="line"><span style="color:#24292E;">db.articles.</span><span style="color:#6F42C1;">createIndex</span><span style="color:#24292E;">({ </span><span style="color:#032F62;">&quot;$**&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全文搜索</span></span>
<span class="line"><span style="color:#24292E;">db.articles.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ $text: { $search: </span><span style="color:#032F62;">&quot;mongodb 索引&quot;</span><span style="color:#24292E;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 按相关性排序</span></span>
<span class="line"><span style="color:#24292E;">db.articles.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { $text: { $search: </span><span style="color:#032F62;">&quot;mongodb 索引&quot;</span><span style="color:#24292E;"> } },</span></span>
<span class="line"><span style="color:#24292E;">  { score: { $meta: </span><span style="color:#032F62;">&quot;textScore&quot;</span><span style="color:#24292E;"> } }</span></span>
<span class="line"><span style="color:#24292E;">).</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">({ score: { $meta: </span><span style="color:#032F62;">&quot;textScore&quot;</span><span style="color:#24292E;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 短语精确搜索（用双引号）</span></span>
<span class="line"><span style="color:#24292E;">db.articles.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ $text: { $search: </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">mongodb aggregation</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 排除词语</span></span>
<span class="line"><span style="color:#24292E;">db.articles.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ $text: { $search: </span><span style="color:#032F62;">&quot;mongodb -sql&quot;</span><span style="color:#24292E;"> } });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 语言指定</span></span>
<span class="line"><span style="color:#24292E;">db.articles.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ $text: { $search: </span><span style="color:#032F62;">&quot;数据库&quot;</span><span style="color:#24292E;">, $language: </span><span style="color:#032F62;">&quot;zh&quot;</span><span style="color:#24292E;"> } });</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_4-4-ttl-索引" tabindex="-1">4.4 TTL 索引 <a class="header-anchor" href="#_4-4-ttl-索引" aria-label="Permalink to &quot;4.4 TTL 索引&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// TTL 索引：文档在指定时间后自动删除（用于 session、日志、验证码等）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.sessions.</span><span style="color:#B392F0;">createIndex</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { createdAt: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { expireAfterSeconds: </span><span style="color:#79B8FF;">3600</span><span style="color:#E1E4E8;"> }  </span><span style="color:#6A737D;">// 1 小时后自动删除</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 注意：TTL 索引只能作用于日期类型字段</span></span>
<span class="line"><span style="color:#6A737D;">// MongoDB 后台每 60 秒运行一次清理任务</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// TTL 索引：文档在指定时间后自动删除（用于 session、日志、验证码等）</span></span>
<span class="line"><span style="color:#24292E;">db.sessions.</span><span style="color:#6F42C1;">createIndex</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { createdAt: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { expireAfterSeconds: </span><span style="color:#005CC5;">3600</span><span style="color:#24292E;"> }  </span><span style="color:#6A737D;">// 1 小时后自动删除</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 注意：TTL 索引只能作用于日期类型字段</span></span>
<span class="line"><span style="color:#6A737D;">// MongoDB 后台每 60 秒运行一次清理任务</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_4-5-explain-分析查询计划" tabindex="-1">4.5 explain() 分析查询计划 <a class="header-anchor" href="#_4-5-explain-分析查询计划" aria-label="Permalink to &quot;4.5 explain() 分析查询计划&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 查看查询计划</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ age: { $gt: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;"> }, name:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">张</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> }).</span><span style="color:#B392F0;">explain</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 详细模式</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ age: { $gt: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;"> } }).</span><span style="color:#B392F0;">explain</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;executionStats&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全量模式</span></span>
<span class="line"><span style="color:#E1E4E8;">db.users.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ age: { $gt: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;"> } }).</span><span style="color:#B392F0;">explain</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;allPlansExecution&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* explain(&quot;executionStats&quot;) 返回的关键字段解读：</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * winningPlan:</span></span>
<span class="line"><span style="color:#6A737D;"> *   stage: &quot;COLLSCAN&quot;      —— 集合扫描（未使用索引，性能差）</span></span>
<span class="line"><span style="color:#6A737D;"> *   stage: &quot;IXSCAN&quot;        —— 索引扫描</span></span>
<span class="line"><span style="color:#6A737D;"> *   stage: &quot;FETCH&quot;         —— 取文档</span></span>
<span class="line"><span style="color:#6A737D;"> *   stage: &quot;SORT&quot;          —— 内存排序</span></span>
<span class="line"><span style="color:#6A737D;"> *   stage: &quot;SHARD_MERGE&quot;   —— 分片合并</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * executionStats:</span></span>
<span class="line"><span style="color:#6A737D;"> *   nReturned: 1000        —— 返回文档数</span></span>
<span class="line"><span style="color:#6A737D;"> *   totalDocsExamined: 5000 —— 扫描文档数（应接近 nReturned）</span></span>
<span class="line"><span style="color:#6A737D;"> *   totalKeysExamined: 2000 —— 扫描索引条目数</span></span>
<span class="line"><span style="color:#6A737D;"> *   executionTimeMillis: 45 —— 执行时间</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 理想情况：totalDocsExamined ≈ nReturned</span></span>
<span class="line"><span style="color:#6A737D;"> * 警告信号：totalDocsExamined &gt;&gt; nReturned</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 查看查询计划</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ age: { $gt: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;"> }, name:</span><span style="color:#032F62;"> /张/</span><span style="color:#24292E;"> }).</span><span style="color:#6F42C1;">explain</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 详细模式</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ age: { $gt: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;"> } }).</span><span style="color:#6F42C1;">explain</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;executionStats&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全量模式</span></span>
<span class="line"><span style="color:#24292E;">db.users.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ age: { $gt: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;"> } }).</span><span style="color:#6F42C1;">explain</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;allPlansExecution&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* explain(&quot;executionStats&quot;) 返回的关键字段解读：</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * winningPlan:</span></span>
<span class="line"><span style="color:#6A737D;"> *   stage: &quot;COLLSCAN&quot;      —— 集合扫描（未使用索引，性能差）</span></span>
<span class="line"><span style="color:#6A737D;"> *   stage: &quot;IXSCAN&quot;        —— 索引扫描</span></span>
<span class="line"><span style="color:#6A737D;"> *   stage: &quot;FETCH&quot;         —— 取文档</span></span>
<span class="line"><span style="color:#6A737D;"> *   stage: &quot;SORT&quot;          —— 内存排序</span></span>
<span class="line"><span style="color:#6A737D;"> *   stage: &quot;SHARD_MERGE&quot;   —— 分片合并</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * executionStats:</span></span>
<span class="line"><span style="color:#6A737D;"> *   nReturned: 1000        —— 返回文档数</span></span>
<span class="line"><span style="color:#6A737D;"> *   totalDocsExamined: 5000 —— 扫描文档数（应接近 nReturned）</span></span>
<span class="line"><span style="color:#6A737D;"> *   totalKeysExamined: 2000 —— 扫描索引条目数</span></span>
<span class="line"><span style="color:#6A737D;"> *   executionTimeMillis: 45 —— 执行时间</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 理想情况：totalDocsExamined ≈ nReturned</span></span>
<span class="line"><span style="color:#6A737D;"> * 警告信号：totalDocsExamined &gt;&gt; nReturned</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="_4-6-索引优化建议" tabindex="-1">4.6 索引优化建议 <a class="header-anchor" href="#_4-6-索引优化建议" aria-label="Permalink to &quot;4.6 索引优化建议&quot;">​</a></h3><ol><li><strong>为高频查询创建索引</strong>：用 <code>explain()</code> 确认查询是否使用索引。</li><li><strong>避免过多索引</strong>：每个索引会增加写入开销，写密集型集合索引数建议不超过 5 个。</li><li><strong>监控慢查询</strong>：打开 profiler 定位未使用索引的查询。</li><li><strong>注意复合索引字段顺序</strong>：ESR 原则（Equality -&gt; Sort -&gt; Range）。</li><li><strong>使用覆盖查询</strong>：<code>projection</code> 只包含索引中的字段，可避免 FETCH 阶段。</li><li><strong>定期评估索引使用情况</strong>：</li></ol><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 查看索引使用统计</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">aggregate</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $indexStats: {} }</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 返回各索引的访问次数和命中率</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 查看索引使用统计</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">aggregate</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  { $indexStats: {} }</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 返回各索引的访问次数和命中率</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><hr><h2 id="五、复制集" tabindex="-1">五、复制集 <a class="header-anchor" href="#五、复制集" aria-label="Permalink to &quot;五、复制集&quot;">​</a></h2><h3 id="_5-1-复制集架构" tabindex="-1">5.1 复制集架构 <a class="header-anchor" href="#_5-1-复制集架构" aria-label="Permalink to &quot;5.1 复制集架构&quot;">​</a></h3><p>复制集（Replica Set）是一组 mongod 实例，维护同一份数据，提供自动故障转移和数据冗余。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">+-------------------+      +-------------------+</span></span>
<span class="line"><span style="color:#e1e4e8;">|                   |      |                   |</span></span>
<span class="line"><span style="color:#e1e4e8;">|   Primary         |&lt;----&gt;|   Secondary       |</span></span>
<span class="line"><span style="color:#e1e4e8;">|   (读写)          |      |   (只读)          |</span></span>
<span class="line"><span style="color:#e1e4e8;">|                   |      |                   |</span></span>
<span class="line"><span style="color:#e1e4e8;">+--------+----------+      +---------+---------+</span></span>
<span class="line"><span style="color:#e1e4e8;">         |                           |</span></span>
<span class="line"><span style="color:#e1e4e8;">         | 心跳选举                   |</span></span>
<span class="line"><span style="color:#e1e4e8;">         |                           |</span></span>
<span class="line"><span style="color:#e1e4e8;">+--------+----------+      +---------+---------+</span></span>
<span class="line"><span style="color:#e1e4e8;">|                   |      |                   |</span></span>
<span class="line"><span style="color:#e1e4e8;">|   Secondary       |      |   Arbiter         |</span></span>
<span class="line"><span style="color:#e1e4e8;">|   (只读)          |      |   (仲裁节点，不存数据) |</span></span>
<span class="line"><span style="color:#e1e4e8;">|                   |      |                   |</span></span>
<span class="line"><span style="color:#e1e4e8;">+-------------------+      +-------------------+</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">+-------------------+      +-------------------+</span></span>
<span class="line"><span style="color:#24292e;">|                   |      |                   |</span></span>
<span class="line"><span style="color:#24292e;">|   Primary         |&lt;----&gt;|   Secondary       |</span></span>
<span class="line"><span style="color:#24292e;">|   (读写)          |      |   (只读)          |</span></span>
<span class="line"><span style="color:#24292e;">|                   |      |                   |</span></span>
<span class="line"><span style="color:#24292e;">+--------+----------+      +---------+---------+</span></span>
<span class="line"><span style="color:#24292e;">         |                           |</span></span>
<span class="line"><span style="color:#24292e;">         | 心跳选举                   |</span></span>
<span class="line"><span style="color:#24292e;">         |                           |</span></span>
<span class="line"><span style="color:#24292e;">+--------+----------+      +---------+---------+</span></span>
<span class="line"><span style="color:#24292e;">|                   |      |                   |</span></span>
<span class="line"><span style="color:#24292e;">|   Secondary       |      |   Arbiter         |</span></span>
<span class="line"><span style="color:#24292e;">|   (只读)          |      |   (仲裁节点，不存数据) |</span></span>
<span class="line"><span style="color:#24292e;">|                   |      |                   |</span></span>
<span class="line"><span style="color:#24292e;">+-------------------+      +-------------------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><strong>角色说明：</strong></p><table><thead><tr><th>角色</th><th>说明</th></tr></thead><tbody><tr><td><strong>Primary</strong></td><td>主节点，唯一接受写入操作的节点，默认也处理读操作</td></tr><tr><td><strong>Secondary</strong></td><td>从节点，复制 primary 的 oplog 保持数据同步，可配置为只读</td></tr><tr><td><strong>Arbiter</strong></td><td>仲裁节点，不存储数据，只在选举时投票（用于奇数投票）</td></tr><tr><td><strong>Delayed</strong></td><td>延迟复制节点，用于数据恢复</td></tr><tr><td><strong>Hidden</strong></td><td>隐藏节点，对客户端不可见，用于分析/备份</td></tr></tbody></table><h3 id="_5-2-选举机制" tabindex="-1">5.2 选举机制 <a class="header-anchor" href="#_5-2-选举机制" aria-label="Permalink to &quot;5.2 选举机制&quot;">​</a></h3><ul><li>当 Primary 不可达时（默认超过 10 秒），触发选举。</li><li>节点间通过心跳（heartbeat）相互检测，默认每 2 秒一次。</li><li>选举基于 <strong>多数派（Majority）</strong> 原则，要求大多数节点在线。</li><li>节点通过 <strong>优先级（priority）</strong> 决定谁更可能成为 Primary（优先级越高越优先）。</li><li>选举期间集群不可写入（通常几秒）。</li></ul><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 配置复制集（在 mongo shell 中）</span></span>
<span class="line"><span style="color:#E1E4E8;">rs.</span><span style="color:#B392F0;">initiate</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  _id: </span><span style="color:#9ECBFF;">&quot;rs0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  members: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { _id: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, host: </span><span style="color:#9ECBFF;">&quot;localhost:27017&quot;</span><span style="color:#E1E4E8;">, priority: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { _id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, host: </span><span style="color:#9ECBFF;">&quot;localhost:27018&quot;</span><span style="color:#E1E4E8;">, priority: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { _id: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, host: </span><span style="color:#9ECBFF;">&quot;localhost:27019&quot;</span><span style="color:#E1E4E8;">, priority: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { _id: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, host: </span><span style="color:#9ECBFF;">&quot;localhost:27020&quot;</span><span style="color:#E1E4E8;">, arbiterOnly: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看复制集状态</span></span>
<span class="line"><span style="color:#E1E4E8;">rs.</span><span style="color:#B392F0;">status</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看当前 Primary</span></span>
<span class="line"><span style="color:#E1E4E8;">rs.</span><span style="color:#B392F0;">isMaster</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 重新配置（先获取当前配置再修改）</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> cfg </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> rs.</span><span style="color:#B392F0;">conf</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">cfg.members[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].priority </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">rs.</span><span style="color:#B392F0;">reconfig</span><span style="color:#E1E4E8;">(cfg);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 手动触发选举</span></span>
<span class="line"><span style="color:#E1E4E8;">rs.</span><span style="color:#B392F0;">stepDown</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">);  </span><span style="color:#6A737D;">// 当前 Primary 主动退位，60 秒内不能重新当选</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 配置复制集（在 mongo shell 中）</span></span>
<span class="line"><span style="color:#24292E;">rs.</span><span style="color:#6F42C1;">initiate</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  _id: </span><span style="color:#032F62;">&quot;rs0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  members: [</span></span>
<span class="line"><span style="color:#24292E;">    { _id: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, host: </span><span style="color:#032F62;">&quot;localhost:27017&quot;</span><span style="color:#24292E;">, priority: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { _id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, host: </span><span style="color:#032F62;">&quot;localhost:27018&quot;</span><span style="color:#24292E;">, priority: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { _id: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, host: </span><span style="color:#032F62;">&quot;localhost:27019&quot;</span><span style="color:#24292E;">, priority: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { _id: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, host: </span><span style="color:#032F62;">&quot;localhost:27020&quot;</span><span style="color:#24292E;">, arbiterOnly: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看复制集状态</span></span>
<span class="line"><span style="color:#24292E;">rs.</span><span style="color:#6F42C1;">status</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看当前 Primary</span></span>
<span class="line"><span style="color:#24292E;">rs.</span><span style="color:#6F42C1;">isMaster</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 重新配置（先获取当前配置再修改）</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> cfg </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> rs.</span><span style="color:#6F42C1;">conf</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">cfg.members[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].priority </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">rs.</span><span style="color:#6F42C1;">reconfig</span><span style="color:#24292E;">(cfg);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 手动触发选举</span></span>
<span class="line"><span style="color:#24292E;">rs.</span><span style="color:#6F42C1;">stepDown</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">60</span><span style="color:#24292E;">);  </span><span style="color:#6A737D;">// 当前 Primary 主动退位，60 秒内不能重新当选</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="_5-3-读写分离" tabindex="-1">5.3 读写分离 <a class="header-anchor" href="#_5-3-读写分离" aria-label="Permalink to &quot;5.3 读写分离&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 在连接字符串中指定 readPreference</span></span>
<span class="line"><span style="color:#6A737D;">// mongodb://host1:27017,host2:27018,host3:27019/mydb?replicaSet=rs0&amp;readPreference=secondary</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 驱动中设置 readPreference（Node.js 示例）</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">MongoClient</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongodb&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">client</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MongoClient</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongodb://localhost:27017/mydb?replicaSet=rs0&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  readPreference: </span><span style="color:#9ECBFF;">&quot;secondaryPreferred&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 优先从 Secondary 读</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* readPreference 选项：</span></span>
<span class="line"><span style="color:#6A737D;"> * primary:           始终读 Primary（默认）</span></span>
<span class="line"><span style="color:#6A737D;"> * primaryPreferred:  优先读 Primary，不可用则读 Secondary</span></span>
<span class="line"><span style="color:#6A737D;"> * secondary:         始终读 Secondary</span></span>
<span class="line"><span style="color:#6A737D;"> * secondaryPreferred: 优先读 Secondary，不可用则读 Primary</span></span>
<span class="line"><span style="color:#6A737D;"> * nearest:           读网络延迟最低的节点</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 在连接字符串中指定 readPreference</span></span>
<span class="line"><span style="color:#6A737D;">// mongodb://host1:27017,host2:27018,host3:27019/mydb?replicaSet=rs0&amp;readPreference=secondary</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 驱动中设置 readPreference（Node.js 示例）</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">MongoClient</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongodb&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">client</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MongoClient</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongodb://localhost:27017/mydb?replicaSet=rs0&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  readPreference: </span><span style="color:#032F62;">&quot;secondaryPreferred&quot;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 优先从 Secondary 读</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* readPreference 选项：</span></span>
<span class="line"><span style="color:#6A737D;"> * primary:           始终读 Primary（默认）</span></span>
<span class="line"><span style="color:#6A737D;"> * primaryPreferred:  优先读 Primary，不可用则读 Secondary</span></span>
<span class="line"><span style="color:#6A737D;"> * secondary:         始终读 Secondary</span></span>
<span class="line"><span style="color:#6A737D;"> * secondaryPreferred: 优先读 Secondary，不可用则读 Primary</span></span>
<span class="line"><span style="color:#6A737D;"> * nearest:           读网络延迟最低的节点</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_5-4-写关注与读关注" tabindex="-1">5.4 写关注与读关注 <a class="header-anchor" href="#_5-4-写关注与读关注" aria-label="Permalink to &quot;5.4 写关注与读关注&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 写关注（writeConcern）：控制写入确认级别</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">insertOne</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { item: </span><span style="color:#9ECBFF;">&quot;商品A&quot;</span><span style="color:#E1E4E8;">, qty: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { writeConcern: { w: </span><span style="color:#9ECBFF;">&quot;majority&quot;</span><span style="color:#E1E4E8;">, j: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, wtimeout: </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;"> } }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * w: 1           —— 等待 Primary 确认（默认）</span></span>
<span class="line"><span style="color:#6A737D;"> * w: &quot;majority&quot;  —— 等待多数节点确认（最安全）</span></span>
<span class="line"><span style="color:#6A737D;"> * w: 3           —— 等待 3 个节点确认</span></span>
<span class="line"><span style="color:#6A737D;"> * w: 0           —— 不等待确认（最快，可能丢数据）</span></span>
<span class="line"><span style="color:#6A737D;"> * j: true        —— 等待写入 journal（持久化日志）</span></span>
<span class="line"><span style="color:#6A737D;"> * wtimeout: ms   —— 超时时间（超时抛出异常）</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 读关注（readConcern）：控制读取数据的隔离级别</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ status: </span><span style="color:#9ECBFF;">&quot;completed&quot;</span><span style="color:#E1E4E8;"> }).</span><span style="color:#B392F0;">readConcern</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;majority&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * local:        读本地最新数据（默认，可能读到未提交的数据）</span></span>
<span class="line"><span style="color:#6A737D;"> * majority:     读已经被多数节点确认的数据</span></span>
<span class="line"><span style="color:#6A737D;"> * linearizable: 线性化读，读取最新已确认数据（最严格，性能最差）</span></span>
<span class="line"><span style="color:#6A737D;"> * available:    读可用的最新数据（分片场景使用）</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 写关注（writeConcern）：控制写入确认级别</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">insertOne</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { item: </span><span style="color:#032F62;">&quot;商品A&quot;</span><span style="color:#24292E;">, qty: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { writeConcern: { w: </span><span style="color:#032F62;">&quot;majority&quot;</span><span style="color:#24292E;">, j: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, wtimeout: </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;"> } }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * w: 1           —— 等待 Primary 确认（默认）</span></span>
<span class="line"><span style="color:#6A737D;"> * w: &quot;majority&quot;  —— 等待多数节点确认（最安全）</span></span>
<span class="line"><span style="color:#6A737D;"> * w: 3           —— 等待 3 个节点确认</span></span>
<span class="line"><span style="color:#6A737D;"> * w: 0           —— 不等待确认（最快，可能丢数据）</span></span>
<span class="line"><span style="color:#6A737D;"> * j: true        —— 等待写入 journal（持久化日志）</span></span>
<span class="line"><span style="color:#6A737D;"> * wtimeout: ms   —— 超时时间（超时抛出异常）</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 读关注（readConcern）：控制读取数据的隔离级别</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ status: </span><span style="color:#032F62;">&quot;completed&quot;</span><span style="color:#24292E;"> }).</span><span style="color:#6F42C1;">readConcern</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;majority&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * local:        读本地最新数据（默认，可能读到未提交的数据）</span></span>
<span class="line"><span style="color:#6A737D;"> * majority:     读已经被多数节点确认的数据</span></span>
<span class="line"><span style="color:#6A737D;"> * linearizable: 线性化读，读取最新已确认数据（最严格，性能最差）</span></span>
<span class="line"><span style="color:#6A737D;"> * available:    读可用的最新数据（分片场景使用）</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="_5-5-复制集部署配置" tabindex="-1">5.5 复制集部署配置 <a class="header-anchor" href="#_5-5-复制集部署配置" aria-label="Permalink to &quot;5.5 复制集部署配置&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># docker-compose-replicaset.yml</span></span>
<span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;3.8&#39;</span></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">mongo-primary</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mongo:7</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mongo-primary</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">command</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mongod --replSet rs0 --port 27017</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;27017:27017&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">mongo_primary_data:/data/db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">mongo-secondary1</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mongo:7</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mongo-secondary1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">command</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mongod --replSet rs0 --port 27018</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;27018:27018&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">mongo_secondary1_data:/data/db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">mongo-secondary2</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mongo:7</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mongo-secondary2</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">command</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mongod --replSet rs0 --port 27019</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;27019:27019&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">mongo_secondary2_data:/data/db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">mongo_primary_data</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">mongo_secondary1_data</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">mongo_secondary2_data</span><span style="color:#E1E4E8;">:</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># docker-compose-replicaset.yml</span></span>
<span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;3.8&#39;</span></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">mongo-primary</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mongo:7</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mongo-primary</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">command</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mongod --replSet rs0 --port 27017</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;27017:27017&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">mongo_primary_data:/data/db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">mongo-secondary1</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mongo:7</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mongo-secondary1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">command</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mongod --replSet rs0 --port 27018</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;27018:27018&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">mongo_secondary1_data:/data/db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">mongo-secondary2</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mongo:7</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mongo-secondary2</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">command</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mongod --replSet rs0 --port 27019</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;27019:27019&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">mongo_secondary2_data:/data/db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">mongo_primary_data</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">mongo_secondary1_data</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">mongo_secondary2_data</span><span style="color:#24292E;">:</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 初始化复制集</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mongo-primary</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mongosh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--eval</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">rs.initiate({</span></span>
<span class="line"><span style="color:#9ECBFF;">  _id: &quot;rs0&quot;,</span></span>
<span class="line"><span style="color:#9ECBFF;">  members: [</span></span>
<span class="line"><span style="color:#9ECBFF;">    { _id: 0, host: &quot;mongo-primary:27017&quot; },</span></span>
<span class="line"><span style="color:#9ECBFF;">    { _id: 1, host: &quot;mongo-secondary1:27018&quot; },</span></span>
<span class="line"><span style="color:#9ECBFF;">    { _id: 2, host: &quot;mongo-secondary2:27019&quot; }</span></span>
<span class="line"><span style="color:#9ECBFF;">  ]</span></span>
<span class="line"><span style="color:#9ECBFF;">})</span></span>
<span class="line"><span style="color:#9ECBFF;">&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 初始化复制集</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">exec</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mongo-primary</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mongosh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--eval</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#032F62;">rs.initiate({</span></span>
<span class="line"><span style="color:#032F62;">  _id: &quot;rs0&quot;,</span></span>
<span class="line"><span style="color:#032F62;">  members: [</span></span>
<span class="line"><span style="color:#032F62;">    { _id: 0, host: &quot;mongo-primary:27017&quot; },</span></span>
<span class="line"><span style="color:#032F62;">    { _id: 1, host: &quot;mongo-secondary1:27018&quot; },</span></span>
<span class="line"><span style="color:#032F62;">    { _id: 2, host: &quot;mongo-secondary2:27019&quot; }</span></span>
<span class="line"><span style="color:#032F62;">  ]</span></span>
<span class="line"><span style="color:#032F62;">})</span></span>
<span class="line"><span style="color:#032F62;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><hr><h2 id="六、分片集群" tabindex="-1">六、分片集群 <a class="header-anchor" href="#六、分片集群" aria-label="Permalink to &quot;六、分片集群&quot;">​</a></h2><h3 id="_6-1-分片架构" tabindex="-1">6.1 分片架构 <a class="header-anchor" href="#_6-1-分片架构" aria-label="Permalink to &quot;6.1 分片架构&quot;">​</a></h3><p>分片集群将数据分布到多个服务器（Shard），支持海量数据和高吞吐量。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">+-----------------------------------------------+</span></span>
<span class="line"><span style="color:#e1e4e8;">|                  mongos                        |</span></span>
<span class="line"><span style="color:#e1e4e8;">|          （路由层，应用连接 mongos）              |</span></span>
<span class="line"><span style="color:#e1e4e8;">+-------------------+---------------------------+</span></span>
<span class="line"><span style="color:#e1e4e8;">                    |</span></span>
<span class="line"><span style="color:#e1e4e8;">        +-----------+-----------+</span></span>
<span class="line"><span style="color:#e1e4e8;">        |                       |</span></span>
<span class="line"><span style="color:#e1e4e8;">+-------v-------+      +-------v-------+</span></span>
<span class="line"><span style="color:#e1e4e8;">|  Config Server |      |  Config Server |</span></span>
<span class="line"><span style="color:#e1e4e8;">|  (副本集, 存元数据)|    |  (副本集)      |</span></span>
<span class="line"><span style="color:#e1e4e8;">+----------------+      +----------------+</span></span>
<span class="line"><span style="color:#e1e4e8;">                    |</span></span>
<span class="line"><span style="color:#e1e4e8;">        +-----------+-----------+</span></span>
<span class="line"><span style="color:#e1e4e8;">        |           |           |</span></span>
<span class="line"><span style="color:#e1e4e8;">+-------v---+ +---v-------+ +--v--------+</span></span>
<span class="line"><span style="color:#e1e4e8;">|  Shard 1  | |  Shard 2  | |  Shard N  |</span></span>
<span class="line"><span style="color:#e1e4e8;">| (复制集)   | | (复制集)   | | (复制集)   |</span></span>
<span class="line"><span style="color:#e1e4e8;">+-----------+ +-----------+ +-----------+</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">+-----------------------------------------------+</span></span>
<span class="line"><span style="color:#24292e;">|                  mongos                        |</span></span>
<span class="line"><span style="color:#24292e;">|          （路由层，应用连接 mongos）              |</span></span>
<span class="line"><span style="color:#24292e;">+-------------------+---------------------------+</span></span>
<span class="line"><span style="color:#24292e;">                    |</span></span>
<span class="line"><span style="color:#24292e;">        +-----------+-----------+</span></span>
<span class="line"><span style="color:#24292e;">        |                       |</span></span>
<span class="line"><span style="color:#24292e;">+-------v-------+      +-------v-------+</span></span>
<span class="line"><span style="color:#24292e;">|  Config Server |      |  Config Server |</span></span>
<span class="line"><span style="color:#24292e;">|  (副本集, 存元数据)|    |  (副本集)      |</span></span>
<span class="line"><span style="color:#24292e;">+----------------+      +----------------+</span></span>
<span class="line"><span style="color:#24292e;">                    |</span></span>
<span class="line"><span style="color:#24292e;">        +-----------+-----------+</span></span>
<span class="line"><span style="color:#24292e;">        |           |           |</span></span>
<span class="line"><span style="color:#24292e;">+-------v---+ +---v-------+ +--v--------+</span></span>
<span class="line"><span style="color:#24292e;">|  Shard 1  | |  Shard 2  | |  Shard N  |</span></span>
<span class="line"><span style="color:#24292e;">| (复制集)   | | (复制集)   | | (复制集)   |</span></span>
<span class="line"><span style="color:#24292e;">+-----------+ +-----------+ +-----------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><strong>组件说明：</strong></p><table><thead><tr><th>组件</th><th>说明</th></tr></thead><tbody><tr><td><strong>mongos</strong></td><td>路由服务，应用连接的入口，将请求分发到对应分片</td></tr><tr><td><strong>Config Server</strong></td><td>存储集群元数据（分片分布、数据库/集合配置），必须是复制集</td></tr><tr><td><strong>Shard</strong></td><td>存储实际数据，每个 Shard 可以是一个复制集（推荐）</td></tr></tbody></table><h3 id="_6-2-分片键选择策略" tabindex="-1">6.2 分片键选择策略 <a class="header-anchor" href="#_6-2-分片键选择策略" aria-label="Permalink to &quot;6.2 分片键选择策略&quot;">​</a></h3><p>分片键是用于在分片之间分布数据的字段或复合字段。</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 启用分片</span></span>
<span class="line"><span style="color:#E1E4E8;">sh.</span><span style="color:#B392F0;">enableSharding</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mydb&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 对集合进行分片</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 范围分片（Range-based Sharding）</span></span>
<span class="line"><span style="color:#E1E4E8;">sh.</span><span style="color:#B392F0;">shardCollection</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mydb.orders&quot;</span><span style="color:#E1E4E8;">, { userId: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 哈希分片（Hashed Sharding）—— 数据分布更均匀</span></span>
<span class="line"><span style="color:#E1E4E8;">sh.</span><span style="color:#B392F0;">shardCollection</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mydb.orders&quot;</span><span style="color:#E1E4E8;">, { userId: </span><span style="color:#9ECBFF;">&quot;hashed&quot;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 复合分片键</span></span>
<span class="line"><span style="color:#E1E4E8;">sh.</span><span style="color:#B392F0;">shardCollection</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mydb.orders&quot;</span><span style="color:#E1E4E8;">, { userId: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, createdAt: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 启用分片</span></span>
<span class="line"><span style="color:#24292E;">sh.</span><span style="color:#6F42C1;">enableSharding</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mydb&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 对集合进行分片</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 范围分片（Range-based Sharding）</span></span>
<span class="line"><span style="color:#24292E;">sh.</span><span style="color:#6F42C1;">shardCollection</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mydb.orders&quot;</span><span style="color:#24292E;">, { userId: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 哈希分片（Hashed Sharding）—— 数据分布更均匀</span></span>
<span class="line"><span style="color:#24292E;">sh.</span><span style="color:#6F42C1;">shardCollection</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mydb.orders&quot;</span><span style="color:#24292E;">, { userId: </span><span style="color:#032F62;">&quot;hashed&quot;</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 复合分片键</span></span>
<span class="line"><span style="color:#24292E;">sh.</span><span style="color:#6F42C1;">shardCollection</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mydb.orders&quot;</span><span style="color:#24292E;">, { userId: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, createdAt: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> });</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>分片键选择建议：</strong></p><table><thead><tr><th>原则</th><th>说明</th></tr></thead><tbody><tr><td><strong>高基数</strong></td><td>分片键的值应该有大量不同取值（如 userId 好于 status）</td></tr><tr><td><strong>均匀分布</strong></td><td>写入和读取应该均匀分布到所有分片（避免&quot;热分片&quot;）</td></tr><tr><td><strong>查询亲和性</strong></td><td>分片键应匹配高频查询条件，使查询尽可能路由到少量分片</td></tr><tr><td><strong>不可变</strong></td><td>生产环境分片键一旦选定很难修改（MongoDB 5.0+ 支持修改但有限制）</td></tr></tbody></table><h3 id="_6-3-哈希分片-vs-范围分片" tabindex="-1">6.3 哈希分片 vs 范围分片 <a class="header-anchor" href="#_6-3-哈希分片-vs-范围分片" aria-label="Permalink to &quot;6.3 哈希分片 vs 范围分片&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 范围分片（Range Sharding）</span></span>
<span class="line"><span style="color:#6A737D;"> *   - 按分片键值的范围划分数据</span></span>
<span class="line"><span style="color:#6A737D;"> *   - 优点：支持范围查询（如 find({ age: { $gte: 20, $lte: 30 } })）</span></span>
<span class="line"><span style="color:#6A737D;"> *   - 缺点：如果分片键单调递增，所有写入落在同一个分片（如使用时间戳）</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 适用场景：分片键分布均匀，且查询常涉及范围操作</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 哈希分片（Hashed Sharding）</span></span>
<span class="line"><span style="color:#6A737D;"> *   - 对分片键计算哈希值，按哈希范围分布</span></span>
<span class="line"><span style="color:#6A737D;"> *   - 优点：数据分布均匀，写入吞吐量高</span></span>
<span class="line"><span style="color:#6A737D;"> *   - 缺点：无法直接支持范围查询（哈希后失去顺序）</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 适用场景：分片键单调递增（如 ObjectId、时间戳），需要均匀写入</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 哈希索引示例</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">createIndex</span><span style="color:#E1E4E8;">({ userId: </span><span style="color:#9ECBFF;">&quot;hashed&quot;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 分片键为 hashed</span></span>
<span class="line"><span style="color:#E1E4E8;">sh.</span><span style="color:#B392F0;">shardCollection</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mydb.orders&quot;</span><span style="color:#E1E4E8;">, { userId: </span><span style="color:#9ECBFF;">&quot;hashed&quot;</span><span style="color:#E1E4E8;"> });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 范围分片（Range Sharding）</span></span>
<span class="line"><span style="color:#6A737D;"> *   - 按分片键值的范围划分数据</span></span>
<span class="line"><span style="color:#6A737D;"> *   - 优点：支持范围查询（如 find({ age: { $gte: 20, $lte: 30 } })）</span></span>
<span class="line"><span style="color:#6A737D;"> *   - 缺点：如果分片键单调递增，所有写入落在同一个分片（如使用时间戳）</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 适用场景：分片键分布均匀，且查询常涉及范围操作</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 哈希分片（Hashed Sharding）</span></span>
<span class="line"><span style="color:#6A737D;"> *   - 对分片键计算哈希值，按哈希范围分布</span></span>
<span class="line"><span style="color:#6A737D;"> *   - 优点：数据分布均匀，写入吞吐量高</span></span>
<span class="line"><span style="color:#6A737D;"> *   - 缺点：无法直接支持范围查询（哈希后失去顺序）</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> * 适用场景：分片键单调递增（如 ObjectId、时间戳），需要均匀写入</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 哈希索引示例</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">createIndex</span><span style="color:#24292E;">({ userId: </span><span style="color:#032F62;">&quot;hashed&quot;</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 分片键为 hashed</span></span>
<span class="line"><span style="color:#24292E;">sh.</span><span style="color:#6F42C1;">shardCollection</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mydb.orders&quot;</span><span style="color:#24292E;">, { userId: </span><span style="color:#032F62;">&quot;hashed&quot;</span><span style="color:#24292E;"> });</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="_6-4-分片平衡器" tabindex="-1">6.4 分片平衡器 <a class="header-anchor" href="#_6-4-分片平衡器" aria-label="Permalink to &quot;6.4 分片平衡器&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 查看平衡器状态</span></span>
<span class="line"><span style="color:#E1E4E8;">sh.</span><span style="color:#B392F0;">getBalancerState</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 启动/停止平衡器</span></span>
<span class="line"><span style="color:#E1E4E8;">sh.</span><span style="color:#B392F0;">startBalancer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">sh.</span><span style="color:#B392F0;">stopBalancer</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置平衡窗口（在业务低峰期进行数据均衡）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.settings.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { _id: </span><span style="color:#9ECBFF;">&quot;balancer&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $set: { activeWindow: { start: </span><span style="color:#9ECBFF;">&quot;02:00&quot;</span><span style="color:#E1E4E8;">, stop: </span><span style="color:#9ECBFF;">&quot;06:00&quot;</span><span style="color:#E1E4E8;"> } } },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { upsert: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看分片数据分布</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">getShardDistribution</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看分片状态</span></span>
<span class="line"><span style="color:#E1E4E8;">sh.</span><span style="color:#B392F0;">status</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 平衡器（Balancer）工作原理：</span></span>
<span class="line"><span style="color:#6A737D;"> * 1. 当分片间数据量差异超过阈值（通常 8MB 或 chunk 数量差异 &gt; 某个比例）</span></span>
<span class="line"><span style="color:#6A737D;"> * 2. 平衡器将 chunk 从数据多的分片移动到数据少的分片</span></span>
<span class="line"><span style="color:#6A737D;"> * 3. 移动过程中会阻塞对被移动 chunk 的访问</span></span>
<span class="line"><span style="color:#6A737D;"> * 4. chunk 大小默认 128MB（可配置）</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 修改 chunk 大小</span></span>
<span class="line"><span style="color:#E1E4E8;">db.settings.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  { _id: </span><span style="color:#9ECBFF;">&quot;chunksize&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { $set: { value: </span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;"> } },  </span><span style="color:#6A737D;">// 改为 64MB</span></span>
<span class="line"><span style="color:#E1E4E8;">  { upsert: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 查看平衡器状态</span></span>
<span class="line"><span style="color:#24292E;">sh.</span><span style="color:#6F42C1;">getBalancerState</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 启动/停止平衡器</span></span>
<span class="line"><span style="color:#24292E;">sh.</span><span style="color:#6F42C1;">startBalancer</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">sh.</span><span style="color:#6F42C1;">stopBalancer</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置平衡窗口（在业务低峰期进行数据均衡）</span></span>
<span class="line"><span style="color:#24292E;">db.settings.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { _id: </span><span style="color:#032F62;">&quot;balancer&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { $set: { activeWindow: { start: </span><span style="color:#032F62;">&quot;02:00&quot;</span><span style="color:#24292E;">, stop: </span><span style="color:#032F62;">&quot;06:00&quot;</span><span style="color:#24292E;"> } } },</span></span>
<span class="line"><span style="color:#24292E;">  { upsert: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看分片数据分布</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">getShardDistribution</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看分片状态</span></span>
<span class="line"><span style="color:#24292E;">sh.</span><span style="color:#6F42C1;">status</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 平衡器（Balancer）工作原理：</span></span>
<span class="line"><span style="color:#6A737D;"> * 1. 当分片间数据量差异超过阈值（通常 8MB 或 chunk 数量差异 &gt; 某个比例）</span></span>
<span class="line"><span style="color:#6A737D;"> * 2. 平衡器将 chunk 从数据多的分片移动到数据少的分片</span></span>
<span class="line"><span style="color:#6A737D;"> * 3. 移动过程中会阻塞对被移动 chunk 的访问</span></span>
<span class="line"><span style="color:#6A737D;"> * 4. chunk 大小默认 128MB（可配置）</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 修改 chunk 大小</span></span>
<span class="line"><span style="color:#24292E;">db.settings.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  { _id: </span><span style="color:#032F62;">&quot;chunksize&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { $set: { value: </span><span style="color:#005CC5;">64</span><span style="color:#24292E;"> } },  </span><span style="color:#6A737D;">// 改为 64MB</span></span>
<span class="line"><span style="color:#24292E;">  { upsert: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><hr><h2 id="七、事务" tabindex="-1">七、事务 <a class="header-anchor" href="#七、事务" aria-label="Permalink to &quot;七、事务&quot;">​</a></h2><h3 id="_7-1-多文档事务" tabindex="-1">7.1 多文档事务 <a class="header-anchor" href="#_7-1-多文档事务" aria-label="Permalink to &quot;7.1 多文档事务&quot;">​</a></h3><p>MongoDB 4.0+ 支持多文档 ACID 事务，4.2+ 支持分布式事务（跨分片）。</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Node.js 驱动中开启事务</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">MongoClient</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongodb&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">transfer</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fromId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">toId</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">amount</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">client</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MongoClient</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongodb://localhost:27017/mydb&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">session</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> client.</span><span style="color:#B392F0;">startSession</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 开启事务</span></span>
<span class="line"><span style="color:#E1E4E8;">    session.</span><span style="color:#B392F0;">startTransaction</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      readConcern: { level: </span><span style="color:#9ECBFF;">&quot;snapshot&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      writeConcern: { w: </span><span style="color:#9ECBFF;">&quot;majority&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      readPreference: </span><span style="color:#9ECBFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">accounts</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> client.</span><span style="color:#B392F0;">db</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">collection</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;accounts&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 扣除转出账户</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> accounts.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      { _id: fromId, balance: { $gte: amount } },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { $inc: { balance: </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">amount } },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { session }</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 增加转入账户</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> accounts.</span><span style="color:#B392F0;">updateOne</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      { _id: toId },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { $inc: { balance: amount } },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { session }</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 提交事务</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">commitTransaction</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;转账成功&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 回滚事务</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">abortTransaction</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;转账失败，已回滚:&quot;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    session.</span><span style="color:#B392F0;">endSession</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> client.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Node.js 驱动中开启事务</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">MongoClient</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongodb&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">transfer</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fromId</span><span style="color:#24292E;">, </span><span style="color:#E36209;">toId</span><span style="color:#24292E;">, </span><span style="color:#E36209;">amount</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">client</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MongoClient</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongodb://localhost:27017/mydb&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">session</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> client.</span><span style="color:#6F42C1;">startSession</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 开启事务</span></span>
<span class="line"><span style="color:#24292E;">    session.</span><span style="color:#6F42C1;">startTransaction</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      readConcern: { level: </span><span style="color:#032F62;">&quot;snapshot&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      writeConcern: { w: </span><span style="color:#032F62;">&quot;majority&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      readPreference: </span><span style="color:#032F62;">&quot;primary&quot;</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">accounts</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> client.</span><span style="color:#6F42C1;">db</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">collection</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;accounts&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 扣除转出账户</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> accounts.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      { _id: fromId, balance: { $gte: amount } },</span></span>
<span class="line"><span style="color:#24292E;">      { $inc: { balance: </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">amount } },</span></span>
<span class="line"><span style="color:#24292E;">      { session }</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 增加转入账户</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> accounts.</span><span style="color:#6F42C1;">updateOne</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      { _id: toId },</span></span>
<span class="line"><span style="color:#24292E;">      { $inc: { balance: amount } },</span></span>
<span class="line"><span style="color:#24292E;">      { session }</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 提交事务</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> session.</span><span style="color:#6F42C1;">commitTransaction</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;转账成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (error) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 回滚事务</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> session.</span><span style="color:#6F42C1;">abortTransaction</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;转账失败，已回滚:&quot;</span><span style="color:#24292E;">, error);</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">finally</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    session.</span><span style="color:#6F42C1;">endSession</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> client.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h3 id="_7-2-事务使用限制" tabindex="-1">7.2 事务使用限制 <a class="header-anchor" href="#_7-2-事务使用限制" aria-label="Permalink to &quot;7.2 事务使用限制&quot;">​</a></h3><table><thead><tr><th>限制</th><th>说明</th></tr></thead><tbody><tr><td><strong>超时时间</strong></td><td>默认事务最大执行时间 60 秒（可由 <code>transactionLifetimeLimitSeconds</code> 调整）</td></tr><tr><td><strong>oplog 大小</strong></td><td>事务操作记录在 oplog 中，大事务可能耗尽 oplog 空间</td></tr><tr><td><strong>锁</strong></td><td>事务在执行期间持有锁，长时间事务会影响并发</td></tr><tr><td><strong>集合数量</strong></td><td>单个事务最多操作 1000 个集合（MongoDB 5.0+）</td></tr><tr><td><strong>文档数量</strong></td><td>单个事务涉及的文档不宜过多，建议控制在 1000 以内</td></tr><tr><td><strong>DDL 操作</strong></td><td>事务中不能创建/删除集合或索引</td></tr><tr><td><strong>跨分片事务</strong></td><td>分布式事务性能开销更大，4.2+ 支持</td></tr></tbody></table><h3 id="_7-3-重试逻辑" tabindex="-1">7.3 重试逻辑 <a class="header-anchor" href="#_7-3-重试逻辑" aria-label="Permalink to &quot;7.3 重试逻辑&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">runWithRetry</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">maxRetries</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> attempt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">; attempt </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> maxRetries; attempt</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (error.</span><span style="color:#B392F0;">hasErrorLabel</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;TransientTransactionError&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> attempt </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> maxRetries) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`事务重试第 \${</span><span style="color:#E1E4E8;">attempt</span><span style="color:#9ECBFF;">} 次...\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">r</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(r, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> attempt));</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">continue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用重试包装</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">runWithRetry</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">session</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> client.</span><span style="color:#B392F0;">startSession</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    session.</span><span style="color:#B392F0;">startTransaction</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ... 事务操作 ...</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">commitTransaction</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> session.</span><span style="color:#B392F0;">abortTransaction</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> error;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">finally</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    session.</span><span style="color:#B392F0;">endSession</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">runWithRetry</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">, </span><span style="color:#E36209;">maxRetries</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> attempt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; attempt </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> maxRetries; attempt</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (error) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (error.</span><span style="color:#6F42C1;">hasErrorLabel</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;TransientTransactionError&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> attempt </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> maxRetries) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`事务重试第 \${</span><span style="color:#24292E;">attempt</span><span style="color:#032F62;">} 次...\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">(</span><span style="color:#E36209;">r</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(r, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> attempt));</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">continue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> error;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用重试包装</span></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">runWithRetry</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">session</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> client.</span><span style="color:#6F42C1;">startSession</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    session.</span><span style="color:#6F42C1;">startTransaction</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ... 事务操作 ...</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> session.</span><span style="color:#6F42C1;">commitTransaction</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (error) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> session.</span><span style="color:#6F42C1;">abortTransaction</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> error;</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">finally</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    session.</span><span style="color:#6F42C1;">endSession</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><hr><h2 id="八、安全" tabindex="-1">八、安全 <a class="header-anchor" href="#八、安全" aria-label="Permalink to &quot;八、安全&quot;">​</a></h2><h3 id="_8-1-认证与授权" tabindex="-1">8.1 认证与授权 <a class="header-anchor" href="#_8-1-认证与授权" aria-label="Permalink to &quot;8.1 认证与授权&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 创建管理员用户</span></span>
<span class="line"><span style="color:#E1E4E8;">use admin;</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">createUser</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  user: </span><span style="color:#9ECBFF;">&quot;admin&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  pwd: </span><span style="color:#9ECBFF;">&quot;secure_password&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  roles: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { role: </span><span style="color:#9ECBFF;">&quot;root&quot;</span><span style="color:#E1E4E8;">, db: </span><span style="color:#9ECBFF;">&quot;admin&quot;</span><span style="color:#E1E4E8;"> }  </span><span style="color:#6A737D;">// 超级管理员</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建应用用户（最小权限原则）</span></span>
<span class="line"><span style="color:#E1E4E8;">use mydb;</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">createUser</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  user: </span><span style="color:#9ECBFF;">&quot;app_user&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  pwd: </span><span style="color:#9ECBFF;">&quot;app_password&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  roles: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { role: </span><span style="color:#9ECBFF;">&quot;readWrite&quot;</span><span style="color:#E1E4E8;">, db: </span><span style="color:#9ECBFF;">&quot;mydb&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { role: </span><span style="color:#9ECBFF;">&quot;read&quot;</span><span style="color:#E1E4E8;">, db: </span><span style="color:#9ECBFF;">&quot;logs&quot;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 启用认证（mongod.conf）</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">security:</span></span>
<span class="line"><span style="color:#6A737D;">  authorization: enabled</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 创建管理员用户</span></span>
<span class="line"><span style="color:#24292E;">use admin;</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">createUser</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  user: </span><span style="color:#032F62;">&quot;admin&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  pwd: </span><span style="color:#032F62;">&quot;secure_password&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  roles: [</span></span>
<span class="line"><span style="color:#24292E;">    { role: </span><span style="color:#032F62;">&quot;root&quot;</span><span style="color:#24292E;">, db: </span><span style="color:#032F62;">&quot;admin&quot;</span><span style="color:#24292E;"> }  </span><span style="color:#6A737D;">// 超级管理员</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建应用用户（最小权限原则）</span></span>
<span class="line"><span style="color:#24292E;">use mydb;</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">createUser</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  user: </span><span style="color:#032F62;">&quot;app_user&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  pwd: </span><span style="color:#032F62;">&quot;app_password&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  roles: [</span></span>
<span class="line"><span style="color:#24292E;">    { role: </span><span style="color:#032F62;">&quot;readWrite&quot;</span><span style="color:#24292E;">, db: </span><span style="color:#032F62;">&quot;mydb&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { role: </span><span style="color:#032F62;">&quot;read&quot;</span><span style="color:#24292E;">, db: </span><span style="color:#032F62;">&quot;logs&quot;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 启用认证（mongod.conf）</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">security:</span></span>
<span class="line"><span style="color:#6A737D;">  authorization: enabled</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_8-2-rbac-角色管理" tabindex="-1">8.2 RBAC 角色管理 <a class="header-anchor" href="#_8-2-rbac-角色管理" aria-label="Permalink to &quot;8.2 RBAC 角色管理&quot;">​</a></h3><p><strong>内置角色：</strong></p><table><thead><tr><th>角色</th><th>权限范围</th><th>说明</th></tr></thead><tbody><tr><td><code>read</code></td><td>数据库级</td><td>对非系统集合只读</td></tr><tr><td><code>readWrite</code></td><td>数据库级</td><td>读写非系统集合</td></tr><tr><td><code>dbAdmin</code></td><td>数据库级</td><td>管理索引、schema</td></tr><tr><td><code>dbOwner</code></td><td>数据库级</td><td>数据库最高权限（readWrite + dbAdmin + userAdmin）</td></tr><tr><td><code>userAdmin</code></td><td>数据库级</td><td>管理用户和角色</td></tr><tr><td><code>clusterAdmin</code></td><td>集群级</td><td>集群最高权限</td></tr><tr><td><code>readAnyDatabase</code></td><td>集群级</td><td>所有数据库只读</td></tr><tr><td><code>root</code></td><td>集群级</td><td>超级管理员</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 自定义角色</span></span>
<span class="line"><span style="color:#E1E4E8;">use mydb;</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">createRole</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  role: </span><span style="color:#9ECBFF;">&quot;reportRole&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  privileges: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      resource: { db: </span><span style="color:#9ECBFF;">&quot;mydb&quot;</span><span style="color:#E1E4E8;">, collection: </span><span style="color:#9ECBFF;">&quot;orders&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      actions: [</span><span style="color:#9ECBFF;">&quot;find&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;aggregate&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  roles: []</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 为用户分配角色</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">grantRolesToUser</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;app_user&quot;</span><span style="color:#E1E4E8;">, [{ role: </span><span style="color:#9ECBFF;">&quot;reportRole&quot;</span><span style="color:#E1E4E8;">, db: </span><span style="color:#9ECBFF;">&quot;mydb&quot;</span><span style="color:#E1E4E8;"> }]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 自定义角色</span></span>
<span class="line"><span style="color:#24292E;">use mydb;</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">createRole</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  role: </span><span style="color:#032F62;">&quot;reportRole&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  privileges: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      resource: { db: </span><span style="color:#032F62;">&quot;mydb&quot;</span><span style="color:#24292E;">, collection: </span><span style="color:#032F62;">&quot;orders&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      actions: [</span><span style="color:#032F62;">&quot;find&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;aggregate&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  roles: []</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 为用户分配角色</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">grantRolesToUser</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;app_user&quot;</span><span style="color:#24292E;">, [{ role: </span><span style="color:#032F62;">&quot;reportRole&quot;</span><span style="color:#24292E;">, db: </span><span style="color:#032F62;">&quot;mydb&quot;</span><span style="color:#24292E;"> }]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_8-3-网络加密-tls-ssl" tabindex="-1">8.3 网络加密（TLS/SSL） <a class="header-anchor" href="#_8-3-网络加密-tls-ssl" aria-label="Permalink to &quot;8.3 网络加密（TLS/SSL）&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># mongod.conf 启用 TLS</span></span>
<span class="line"><span style="color:#85E89D;">net</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">tls</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">mode</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">requireTLS</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">certificateKeyFile</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/etc/ssl/mongodb.pem</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">CAFile</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/etc/ssl/ca.pem</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">allowConnectionsWithoutCertificates</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># mongod.conf 启用 TLS</span></span>
<span class="line"><span style="color:#22863A;">net</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">tls</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">mode</span><span style="color:#24292E;">: </span><span style="color:#032F62;">requireTLS</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">certificateKeyFile</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/etc/ssl/mongodb.pem</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">CAFile</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/etc/ssl/ca.pem</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">allowConnectionsWithoutCertificates</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 客户端连接</span></span>
<span class="line"><span style="color:#B392F0;">mongosh</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--tls</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--host</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hostname</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--tlsCertificateKeyFile</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">client.pem</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--tlsCAFile</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ca.pem</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 客户端连接</span></span>
<span class="line"><span style="color:#6F42C1;">mongosh</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--tls</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--host</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hostname</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--tlsCertificateKeyFile</span><span style="color:#24292E;"> </span><span style="color:#032F62;">client.pem</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--tlsCAFile</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ca.pem</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_8-4-审计日志" tabindex="-1">8.4 审计日志 <a class="header-anchor" href="#_8-4-审计日志" aria-label="Permalink to &quot;8.4 审计日志&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># mongod.conf 启用审计</span></span>
<span class="line"><span style="color:#85E89D;">auditLog</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">destination</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">file</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">format</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">JSON</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/var/log/mongodb/audit.log</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">filter</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;{ atype: { $in: [&quot;authenticate&quot;, &quot;createUser&quot;, &quot;dropCollection&quot;, &quot;dropDatabase&quot;] } }&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># mongod.conf 启用审计</span></span>
<span class="line"><span style="color:#22863A;">auditLog</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">destination</span><span style="color:#24292E;">: </span><span style="color:#032F62;">file</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">format</span><span style="color:#24292E;">: </span><span style="color:#032F62;">JSON</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/var/log/mongodb/audit.log</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">filter</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;{ atype: { $in: [&quot;authenticate&quot;, &quot;createUser&quot;, &quot;dropCollection&quot;, &quot;dropDatabase&quot;] } }&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 在 mongosh 中查看审计事件类别</span></span>
<span class="line"><span style="color:#6A737D;">/* 常用审计事件：</span></span>
<span class="line"><span style="color:#6A737D;"> * authenticate      —— 认证事件</span></span>
<span class="line"><span style="color:#6A737D;"> * authorize         —— 鉴权事件</span></span>
<span class="line"><span style="color:#6A737D;"> * createUser        —— 创建用户</span></span>
<span class="line"><span style="color:#6A737D;"> * dropCollection    —— 删除集合</span></span>
<span class="line"><span style="color:#6A737D;"> * dropDatabase      —— 删除数据库</span></span>
<span class="line"><span style="color:#6A737D;"> * createIndex       —— 创建索引</span></span>
<span class="line"><span style="color:#6A737D;"> * dropIndex         —— 删除索引</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 在 mongosh 中查看审计事件类别</span></span>
<span class="line"><span style="color:#6A737D;">/* 常用审计事件：</span></span>
<span class="line"><span style="color:#6A737D;"> * authenticate      —— 认证事件</span></span>
<span class="line"><span style="color:#6A737D;"> * authorize         —— 鉴权事件</span></span>
<span class="line"><span style="color:#6A737D;"> * createUser        —— 创建用户</span></span>
<span class="line"><span style="color:#6A737D;"> * dropCollection    —— 删除集合</span></span>
<span class="line"><span style="color:#6A737D;"> * dropDatabase      —— 删除数据库</span></span>
<span class="line"><span style="color:#6A737D;"> * createIndex       —— 创建索引</span></span>
<span class="line"><span style="color:#6A737D;"> * dropIndex         —— 删除索引</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><hr><h2 id="九、性能与监控" tabindex="-1">九、性能与监控 <a class="header-anchor" href="#九、性能与监控" aria-label="Permalink to &quot;九、性能与监控&quot;">​</a></h2><h3 id="_9-1-慢查询日志-profiler" tabindex="-1">9.1 慢查询日志（Profiler） <a class="header-anchor" href="#_9-1-慢查询日志-profiler" aria-label="Permalink to &quot;9.1 慢查询日志（Profiler）&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 查看当前 profiler 级别</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">getProfilingStatus</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置 profiler 级别</span></span>
<span class="line"><span style="color:#6A737D;">// 0: 关闭       —— 不记录</span></span>
<span class="line"><span style="color:#6A737D;">// 1: 慢查询记录  —— 记录超过阈值的操作</span></span>
<span class="line"><span style="color:#6A737D;">// 2: 全部记录    —— 记录所有操作（仅适用于开发环境）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">setProfilingLevel</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, { slowms: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;"> });  </span><span style="color:#6A737D;">// 记录超过 100ms 的操作</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查询慢查询日志</span></span>
<span class="line"><span style="color:#E1E4E8;">db.system.profile.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">({ ts: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }).</span><span style="color:#B392F0;">limit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">pretty</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 分析慢查询（按耗时降序）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.system.profile.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  op: { $in: [</span><span style="color:#9ECBFF;">&quot;query&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;update&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;remove&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;insert&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;command&quot;</span><span style="color:#E1E4E8;">] }</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">({ millis: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }).</span><span style="color:#B392F0;">limit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">pretty</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看全表扫描的查询</span></span>
<span class="line"><span style="color:#E1E4E8;">db.system.profile.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;planSummary&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;COLLSCAN&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">({ millis: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> }).</span><span style="color:#B392F0;">limit</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">pretty</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 清理 profiler 集合（固定大小集合，也可直接 truncate）</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">setProfilingLevel</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">db.system.profile.</span><span style="color:#B392F0;">drop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">setProfilingLevel</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, { slowms: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;"> });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 查看当前 profiler 级别</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">getProfilingStatus</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置 profiler 级别</span></span>
<span class="line"><span style="color:#6A737D;">// 0: 关闭       —— 不记录</span></span>
<span class="line"><span style="color:#6A737D;">// 1: 慢查询记录  —— 记录超过阈值的操作</span></span>
<span class="line"><span style="color:#6A737D;">// 2: 全部记录    —— 记录所有操作（仅适用于开发环境）</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">setProfilingLevel</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, { slowms: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;"> });  </span><span style="color:#6A737D;">// 记录超过 100ms 的操作</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查询慢查询日志</span></span>
<span class="line"><span style="color:#24292E;">db.system.profile.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">({ ts: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> }).</span><span style="color:#6F42C1;">limit</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">pretty</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 分析慢查询（按耗时降序）</span></span>
<span class="line"><span style="color:#24292E;">db.system.profile.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  op: { $in: [</span><span style="color:#032F62;">&quot;query&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;update&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;remove&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;insert&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;command&quot;</span><span style="color:#24292E;">] }</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">({ millis: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> }).</span><span style="color:#6F42C1;">limit</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">pretty</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看全表扫描的查询</span></span>
<span class="line"><span style="color:#24292E;">db.system.profile.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;planSummary&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;COLLSCAN&quot;</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">({ millis: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> }).</span><span style="color:#6F42C1;">limit</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">pretty</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 清理 profiler 集合（固定大小集合，也可直接 truncate）</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">setProfilingLevel</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">db.system.profile.</span><span style="color:#6F42C1;">drop</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">setProfilingLevel</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, { slowms: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;"> });</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_9-2-mongostat-与-mongotop" tabindex="-1">9.2 mongostat 与 mongotop <a class="header-anchor" href="#_9-2-mongostat-与-mongotop" aria-label="Permalink to &quot;9.2 mongostat 与 mongotop&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># mongostat：实时查看数据库操作统计（每秒输出）</span></span>
<span class="line"><span style="color:#B392F0;">mongostat</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--host</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:27017</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--authenticationDatabase</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">admin</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">admin</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">password</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 输出解读：</span></span>
<span class="line"><span style="color:#6A737D;"># insert/s, query/s, update/s, delete/s —— 每秒操作数</span></span>
<span class="line"><span style="color:#6A737D;"># getmore/s     —— 游标继续获取</span></span>
<span class="line"><span style="color:#6A737D;"># command/s     —— 命令执行</span></span>
<span class="line"><span style="color:#6A737D;"># dirty         —— WiredTiger 脏数据比例</span></span>
<span class="line"><span style="color:#6A737D;"># used          —— WiredTiger 缓存使用比例</span></span>
<span class="line"><span style="color:#6A737D;"># vsize         —— 虚拟内存</span></span>
<span class="line"><span style="color:#6A737D;"># res           —— 常驻内存</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># mongotop：查看每个集合的读写耗时</span></span>
<span class="line"><span style="color:#B392F0;">mongotop</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--host</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:27017</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--authenticationDatabase</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">admin</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">admin</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">password</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 输出每个集合每秒的读写时间（ms）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># mongostat：实时查看数据库操作统计（每秒输出）</span></span>
<span class="line"><span style="color:#6F42C1;">mongostat</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--host</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:27017</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--authenticationDatabase</span><span style="color:#24292E;"> </span><span style="color:#032F62;">admin</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#032F62;">admin</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">password</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 输出解读：</span></span>
<span class="line"><span style="color:#6A737D;"># insert/s, query/s, update/s, delete/s —— 每秒操作数</span></span>
<span class="line"><span style="color:#6A737D;"># getmore/s     —— 游标继续获取</span></span>
<span class="line"><span style="color:#6A737D;"># command/s     —— 命令执行</span></span>
<span class="line"><span style="color:#6A737D;"># dirty         —— WiredTiger 脏数据比例</span></span>
<span class="line"><span style="color:#6A737D;"># used          —— WiredTiger 缓存使用比例</span></span>
<span class="line"><span style="color:#6A737D;"># vsize         —— 虚拟内存</span></span>
<span class="line"><span style="color:#6A737D;"># res           —— 常驻内存</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># mongotop：查看每个集合的读写耗时</span></span>
<span class="line"><span style="color:#6F42C1;">mongotop</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--host</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:27017</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--authenticationDatabase</span><span style="color:#24292E;"> </span><span style="color:#032F62;">admin</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#032F62;">admin</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">password</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 输出每个集合每秒的读写时间（ms）</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_9-3-内存与存储引擎" tabindex="-1">9.3 内存与存储引擎 <a class="header-anchor" href="#_9-3-内存与存储引擎" aria-label="Permalink to &quot;9.3 内存与存储引擎&quot;">​</a></h3><p>MongoDB 默认使用 <strong>WiredTiger</strong> 存储引擎。</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 查看存储引擎状态</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">serverStatus</span><span style="color:#E1E4E8;">().wiredTiger;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看缓存配置</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">serverStatus</span><span style="color:#E1E4E8;">().wiredTiger.cache;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * WiredTiger 关键配置（mongod.conf）：</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 查看存储引擎状态</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">serverStatus</span><span style="color:#24292E;">().wiredTiger;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看缓存配置</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">serverStatus</span><span style="color:#24292E;">().wiredTiger.cache;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * WiredTiger 关键配置（mongod.conf）：</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># mongod.conf WiredTiger 配置</span></span>
<span class="line"><span style="color:#85E89D;">storage</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">dbPath</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/var/lib/mongodb</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">wiredTiger</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">engineConfig</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">cacheSizeGB</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;"># 缓存大小，建议为 RAM 的 50%-80%</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">journalCompressor</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">snappy</span><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;"># 日志压缩算法</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">collectionConfig</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">blockCompressor</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">snappy</span><span style="color:#E1E4E8;">           </span><span style="color:#6A737D;"># 集合数据压缩算法（snappy/zlib/zstd）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">indexConfig</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">prefixCompression</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">           </span><span style="color:#6A737D;"># 索引前缀压缩</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># mongod.conf WiredTiger 配置</span></span>
<span class="line"><span style="color:#22863A;">storage</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">dbPath</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/var/lib/mongodb</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">wiredTiger</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">engineConfig</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">cacheSizeGB</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">                    </span><span style="color:#6A737D;"># 缓存大小，建议为 RAM 的 50%-80%</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">journalCompressor</span><span style="color:#24292E;">: </span><span style="color:#032F62;">snappy</span><span style="color:#24292E;">         </span><span style="color:#6A737D;"># 日志压缩算法</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">collectionConfig</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">blockCompressor</span><span style="color:#24292E;">: </span><span style="color:#032F62;">snappy</span><span style="color:#24292E;">           </span><span style="color:#6A737D;"># 集合数据压缩算法（snappy/zlib/zstd）</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">indexConfig</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">prefixCompression</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">           </span><span style="color:#6A737D;"># 索引前缀压缩</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/*</span></span>
<span class="line"><span style="color:#e1e4e8;"> * WiredTiger 特点：</span></span>
<span class="line"><span style="color:#e1e4e8;"> * - 文档级并发控制（MVCC）</span></span>
<span class="line"><span style="color:#e1e4e8;"> * - 压缩（数据默认 snappy，索引默认前缀压缩）</span></span>
<span class="line"><span style="color:#e1e4e8;"> * - 检查点（Checkpoint）每 60 秒写入磁盘</span></span>
<span class="line"><span style="color:#e1e4e8;"> * - Journal（预写日志）用于崩溃恢复</span></span>
<span class="line"><span style="color:#e1e4e8;"> * - 缓存淘汰策略：LRU（最近最少使用）</span></span>
<span class="line"><span style="color:#e1e4e8;"> *</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 内存监控：</span></span>
<span class="line"><span style="color:#e1e4e8;"> * - WiredTiger 会尽量占用配置的缓存大小</span></span>
<span class="line"><span style="color:#e1e4e8;"> * - 如果 cache 的 dirty 比例持续 &gt; 20%，说明写入压力大</span></span>
<span class="line"><span style="color:#e1e4e8;"> * - cache overflow 增多说明缓存不够</span></span>
<span class="line"><span style="color:#e1e4e8;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/*</span></span>
<span class="line"><span style="color:#24292e;"> * WiredTiger 特点：</span></span>
<span class="line"><span style="color:#24292e;"> * - 文档级并发控制（MVCC）</span></span>
<span class="line"><span style="color:#24292e;"> * - 压缩（数据默认 snappy，索引默认前缀压缩）</span></span>
<span class="line"><span style="color:#24292e;"> * - 检查点（Checkpoint）每 60 秒写入磁盘</span></span>
<span class="line"><span style="color:#24292e;"> * - Journal（预写日志）用于崩溃恢复</span></span>
<span class="line"><span style="color:#24292e;"> * - 缓存淘汰策略：LRU（最近最少使用）</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> * 内存监控：</span></span>
<span class="line"><span style="color:#24292e;"> * - WiredTiger 会尽量占用配置的缓存大小</span></span>
<span class="line"><span style="color:#24292e;"> * - 如果 cache 的 dirty 比例持续 &gt; 20%，说明写入压力大</span></span>
<span class="line"><span style="color:#24292e;"> * - cache overflow 增多说明缓存不够</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_9-4-连接池配置" tabindex="-1">9.4 连接池配置 <a class="header-anchor" href="#_9-4-连接池配置" aria-label="Permalink to &quot;9.4 连接池配置&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Node.js 驱动连接池配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">MongoClient</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongodb&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">client</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MongoClient</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongodb://localhost:27017/mydb&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  maxPoolSize: </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,              </span><span style="color:#6A737D;">// 最大连接数（默认 100）</span></span>
<span class="line"><span style="color:#E1E4E8;">  minPoolSize: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,               </span><span style="color:#6A737D;">// 最小连接数</span></span>
<span class="line"><span style="color:#E1E4E8;">  maxIdleTimeMS: </span><span style="color:#79B8FF;">300000</span><span style="color:#E1E4E8;">,         </span><span style="color:#6A737D;">// 连接最大空闲时间（5 分钟）</span></span>
<span class="line"><span style="color:#E1E4E8;">  waitQueueTimeoutMS: </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">,      </span><span style="color:#6A737D;">// 等待连接超时（5 秒）</span></span>
<span class="line"><span style="color:#E1E4E8;">  serverSelectionTimeoutMS: </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 服务器选择超时（5 秒）</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Java 驱动连接池配置</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">MongoClientSettings settings = MongoClientSettings.builder()</span></span>
<span class="line"><span style="color:#6A737D;">    .applyToConnectionPoolSettings(builder -&gt;</span></span>
<span class="line"><span style="color:#6A737D;">        builder.minSize(10)</span></span>
<span class="line"><span style="color:#6A737D;">               .maxSize(100)</span></span>
<span class="line"><span style="color:#6A737D;">               .maxWaitTime(5000, TimeUnit.MILLISECONDS)</span></span>
<span class="line"><span style="color:#6A737D;">               .maxConnectionIdleTime(300000, TimeUnit.MILLISECONDS))</span></span>
<span class="line"><span style="color:#6A737D;">    .applyToClusterSettings(builder -&gt;</span></span>
<span class="line"><span style="color:#6A737D;">        builder.serverSelectionTimeout(5000, TimeUnit.MILLISECONDS))</span></span>
<span class="line"><span style="color:#6A737D;">    .build();</span></span>
<span class="line"><span style="color:#6A737D;">MongoClient client = MongoClients.create(settings);</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 连接池最佳实践：</span></span>
<span class="line"><span style="color:#6A737D;"> * - 连接数 = 最大并发请求数 × (平均响应时间 / 1000)</span></span>
<span class="line"><span style="color:#6A737D;"> * - 对大多数应用，100-200 够用</span></span>
<span class="line"><span style="color:#6A737D;"> * - 避免在请求中频繁创建和销毁 MongoClient（应作为单例）</span></span>
<span class="line"><span style="color:#6A737D;"> * - 生产环境校验：db.serverStatus().connections</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Node.js 驱动连接池配置</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">MongoClient</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongodb&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">client</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MongoClient</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongodb://localhost:27017/mydb&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  maxPoolSize: </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,              </span><span style="color:#6A737D;">// 最大连接数（默认 100）</span></span>
<span class="line"><span style="color:#24292E;">  minPoolSize: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,               </span><span style="color:#6A737D;">// 最小连接数</span></span>
<span class="line"><span style="color:#24292E;">  maxIdleTimeMS: </span><span style="color:#005CC5;">300000</span><span style="color:#24292E;">,         </span><span style="color:#6A737D;">// 连接最大空闲时间（5 分钟）</span></span>
<span class="line"><span style="color:#24292E;">  waitQueueTimeoutMS: </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">,      </span><span style="color:#6A737D;">// 等待连接超时（5 秒）</span></span>
<span class="line"><span style="color:#24292E;">  serverSelectionTimeoutMS: </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 服务器选择超时（5 秒）</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Java 驱动连接池配置</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">MongoClientSettings settings = MongoClientSettings.builder()</span></span>
<span class="line"><span style="color:#6A737D;">    .applyToConnectionPoolSettings(builder -&gt;</span></span>
<span class="line"><span style="color:#6A737D;">        builder.minSize(10)</span></span>
<span class="line"><span style="color:#6A737D;">               .maxSize(100)</span></span>
<span class="line"><span style="color:#6A737D;">               .maxWaitTime(5000, TimeUnit.MILLISECONDS)</span></span>
<span class="line"><span style="color:#6A737D;">               .maxConnectionIdleTime(300000, TimeUnit.MILLISECONDS))</span></span>
<span class="line"><span style="color:#6A737D;">    .applyToClusterSettings(builder -&gt;</span></span>
<span class="line"><span style="color:#6A737D;">        builder.serverSelectionTimeout(5000, TimeUnit.MILLISECONDS))</span></span>
<span class="line"><span style="color:#6A737D;">    .build();</span></span>
<span class="line"><span style="color:#6A737D;">MongoClient client = MongoClients.create(settings);</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;"> * 连接池最佳实践：</span></span>
<span class="line"><span style="color:#6A737D;"> * - 连接数 = 最大并发请求数 × (平均响应时间 / 1000)</span></span>
<span class="line"><span style="color:#6A737D;"> * - 对大多数应用，100-200 够用</span></span>
<span class="line"><span style="color:#6A737D;"> * - 避免在请求中频繁创建和销毁 MongoClient（应作为单例）</span></span>
<span class="line"><span style="color:#6A737D;"> * - 生产环境校验：db.serverStatus().connections</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="_9-5-常用性能诊断命令" tabindex="-1">9.5 常用性能诊断命令 <a class="header-anchor" href="#_9-5-常用性能诊断命令" aria-label="Permalink to &quot;9.5 常用性能诊断命令&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 服务器状态总览</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">serverStatus</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 当前正在执行的操作</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">currentOp</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 杀掉慢操作</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">killOp</span><span style="color:#E1E4E8;">(opid);  </span><span style="color:#6A737D;">// opid 从 currentOp() 获取</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看数据库统计</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">stats</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看集合统计</span></span>
<span class="line"><span style="color:#E1E4E8;">db.orders.</span><span style="color:#B392F0;">stats</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看锁信息</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">serverStatus</span><span style="color:#E1E4E8;">().locks;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看网络和连接</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">serverStatus</span><span style="color:#E1E4E8;">().network;</span></span>
<span class="line"><span style="color:#E1E4E8;">db.</span><span style="color:#B392F0;">serverStatus</span><span style="color:#E1E4E8;">().connections;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 服务器状态总览</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">serverStatus</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 当前正在执行的操作</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">currentOp</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 杀掉慢操作</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">killOp</span><span style="color:#24292E;">(opid);  </span><span style="color:#6A737D;">// opid 从 currentOp() 获取</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看数据库统计</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">stats</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看集合统计</span></span>
<span class="line"><span style="color:#24292E;">db.orders.</span><span style="color:#6F42C1;">stats</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看锁信息</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">serverStatus</span><span style="color:#24292E;">().locks;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 查看网络和连接</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">serverStatus</span><span style="color:#24292E;">().network;</span></span>
<span class="line"><span style="color:#24292E;">db.</span><span style="color:#6F42C1;">serverStatus</span><span style="color:#24292E;">().connections;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><hr><h2 id="十、备份与恢复" tabindex="-1">十、备份与恢复 <a class="header-anchor" href="#十、备份与恢复" aria-label="Permalink to &quot;十、备份与恢复&quot;">​</a></h2><h3 id="_10-1-mongodump-mongorestore" tabindex="-1">10.1 mongodump / mongorestore <a class="header-anchor" href="#_10-1-mongodump-mongorestore" aria-label="Permalink to &quot;10.1 mongodump / mongorestore&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 备份整个数据库</span></span>
<span class="line"><span style="color:#B392F0;">mongodump</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--host</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:27017</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--username</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">admin</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--password</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pass</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--authenticationDatabase</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">admin</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--db</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mydb</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--out</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/backup/2024-01-01/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 备份指定集合</span></span>
<span class="line"><span style="color:#B392F0;">mongodump</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--db</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mydb</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--collection</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">orders</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--out</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/backup/orders/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 备份所有数据库</span></span>
<span class="line"><span style="color:#B392F0;">mongodump</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--host</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:27017</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--out</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/backup/full/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 压缩备份</span></span>
<span class="line"><span style="color:#B392F0;">mongodump</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--db</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mydb</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--out</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/backup/mydb/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--gzip</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 带查询条件备份（备份指定数据）</span></span>
<span class="line"><span style="color:#B392F0;">mongodump</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--db</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mydb</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--collection</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">orders</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--query</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{&quot;status&quot;: &quot;completed&quot;, &quot;orderDate&quot;: {&quot;$gte&quot;: {&quot;$date&quot;: &quot;2024-01-01T00:00:00Z&quot;}}}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--out</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/backup/orders-2024/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 恢复</span></span>
<span class="line"><span style="color:#B392F0;">mongorestore</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--host</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost:27017</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--username</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">admin</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--password</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pass</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--authenticationDatabase</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">admin</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--db</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mydb</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/backup/2024-01-01/mydb/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 恢复指定集合</span></span>
<span class="line"><span style="color:#B392F0;">mongorestore</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--db</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mydb</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--collection</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">orders</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/backup/orders/mydb/orders.bson</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 恢复时覆盖已有文档</span></span>
<span class="line"><span style="color:#B392F0;">mongorestore</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--db</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mydb</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--collection</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">orders</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--drop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/backup/orders/mydb/orders.bson</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从压缩备份恢复</span></span>
<span class="line"><span style="color:#B392F0;">mongorestore</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--db</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mydb</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--gzip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/backup/mydb/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 备份整个数据库</span></span>
<span class="line"><span style="color:#6F42C1;">mongodump</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--host</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:27017</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--username</span><span style="color:#24292E;"> </span><span style="color:#032F62;">admin</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--password</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pass</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--authenticationDatabase</span><span style="color:#24292E;"> </span><span style="color:#032F62;">admin</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--db</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mydb</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--out</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/backup/2024-01-01/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 备份指定集合</span></span>
<span class="line"><span style="color:#6F42C1;">mongodump</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--db</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mydb</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--collection</span><span style="color:#24292E;"> </span><span style="color:#032F62;">orders</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--out</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/backup/orders/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 备份所有数据库</span></span>
<span class="line"><span style="color:#6F42C1;">mongodump</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--host</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:27017</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--out</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/backup/full/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 压缩备份</span></span>
<span class="line"><span style="color:#6F42C1;">mongodump</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--db</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mydb</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--out</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/backup/mydb/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--gzip</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 带查询条件备份（备份指定数据）</span></span>
<span class="line"><span style="color:#6F42C1;">mongodump</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--db</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mydb</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--collection</span><span style="color:#24292E;"> </span><span style="color:#032F62;">orders</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--query</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{&quot;status&quot;: &quot;completed&quot;, &quot;orderDate&quot;: {&quot;$gte&quot;: {&quot;$date&quot;: &quot;2024-01-01T00:00:00Z&quot;}}}&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--out</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/backup/orders-2024/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 恢复</span></span>
<span class="line"><span style="color:#6F42C1;">mongorestore</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--host</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost:27017</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--username</span><span style="color:#24292E;"> </span><span style="color:#032F62;">admin</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--password</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pass</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--authenticationDatabase</span><span style="color:#24292E;"> </span><span style="color:#032F62;">admin</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--db</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mydb</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/backup/2024-01-01/mydb/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 恢复指定集合</span></span>
<span class="line"><span style="color:#6F42C1;">mongorestore</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--db</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mydb</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--collection</span><span style="color:#24292E;"> </span><span style="color:#032F62;">orders</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/backup/orders/mydb/orders.bson</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 恢复时覆盖已有文档</span></span>
<span class="line"><span style="color:#6F42C1;">mongorestore</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--db</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mydb</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--collection</span><span style="color:#24292E;"> </span><span style="color:#032F62;">orders</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--drop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/backup/orders/mydb/orders.bson</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从压缩备份恢复</span></span>
<span class="line"><span style="color:#6F42C1;">mongorestore</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--db</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mydb</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--gzip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/backup/mydb/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_10-2-mongosh-导出" tabindex="-1">10.2 mongosh 导出 <a class="header-anchor" href="#_10-2-mongosh-导出" aria-label="Permalink to &quot;10.2 mongosh 导出&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// mongosh 导出到 JSON</span></span>
<span class="line"><span style="color:#6A737D;">// 在 mongosh 中</span></span>
<span class="line"><span style="color:#E1E4E8;">mydb.orders.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({ status: </span><span style="color:#9ECBFF;">&quot;completed&quot;</span><span style="color:#E1E4E8;"> }).</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 更常用的方法：使用 mongoexport 命令行工具</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导出为 JSON</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoexport </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">host </span><span style="color:#B392F0;">localhost</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">27017</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">db mydb </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">collection orders </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">out orders.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导出为 CSV</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoexport </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">host </span><span style="color:#B392F0;">localhost</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">27017</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">db mydb </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">collection users </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">fields name,email,age </span><span style="color:#F97583;">--type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">csv</span><span style="color:#E1E4E8;"> --out users.csv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 带查询导出</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoexport --db mydb --collection orders --query &#39;{&quot;status&quot;: &quot;completed&quot;}</span><span style="color:#9ECBFF;">&#39; --out completed_orders.jso</span><span style="color:#FDAEB7;font-style:italic;">n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导入 JSON</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoimport </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">host </span><span style="color:#B392F0;">localhost</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">27017</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">db mydb </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">collection orders </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">file orders.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导入 CSV（需要指定字段）</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoimport </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">db mydb </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">collection users </span><span style="color:#F97583;">--type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">csv</span><span style="color:#E1E4E8;"> --headerline --file users.csv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导入 JSON 时覆盖已有集合</span></span>
<span class="line"><span style="color:#E1E4E8;">mongoimport --db mydb --collection orders --drop --file orders.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// mongosh 导出到 JSON</span></span>
<span class="line"><span style="color:#6A737D;">// 在 mongosh 中</span></span>
<span class="line"><span style="color:#24292E;">mydb.orders.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({ status: </span><span style="color:#032F62;">&quot;completed&quot;</span><span style="color:#24292E;"> }).</span><span style="color:#6F42C1;">toArray</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 更常用的方法：使用 mongoexport 命令行工具</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导出为 JSON</span></span>
<span class="line"><span style="color:#24292E;">mongoexport </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">host </span><span style="color:#6F42C1;">localhost</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">27017</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">db mydb </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">collection orders </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">out orders.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导出为 CSV</span></span>
<span class="line"><span style="color:#24292E;">mongoexport </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">host </span><span style="color:#6F42C1;">localhost</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">27017</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">db mydb </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">collection users </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">fields name,email,age </span><span style="color:#D73A49;">--type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">csv</span><span style="color:#24292E;"> --out users.csv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 带查询导出</span></span>
<span class="line"><span style="color:#24292E;">mongoexport --db mydb --collection orders --query &#39;{&quot;status&quot;: &quot;completed&quot;}</span><span style="color:#032F62;">&#39; --out completed_orders.jso</span><span style="color:#B31D28;font-style:italic;">n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导入 JSON</span></span>
<span class="line"><span style="color:#24292E;">mongoimport </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">host </span><span style="color:#6F42C1;">localhost</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">27017</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">db mydb </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">collection orders </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">file orders.json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导入 CSV（需要指定字段）</span></span>
<span class="line"><span style="color:#24292E;">mongoimport </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">db mydb </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">collection users </span><span style="color:#D73A49;">--type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">csv</span><span style="color:#24292E;"> --headerline --file users.csv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导入 JSON 时覆盖已有集合</span></span>
<span class="line"><span style="color:#24292E;">mongoimport --db mydb --collection orders --drop --file orders.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="_10-3-备份策略示例" tabindex="-1">10.3 备份策略示例 <a class="header-anchor" href="#_10-3-备份策略示例" aria-label="Permalink to &quot;10.3 备份策略示例&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="color:#6A737D;"># 每日备份脚本，保留最近 7 天</span></span>
<span class="line"><span style="color:#E1E4E8;">BACKUP_DIR</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/backup/mongodb&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">DATE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">$(</span><span style="color:#B392F0;">date</span><span style="color:#9ECBFF;"> +%Y%m%d)</span></span>
<span class="line"><span style="color:#E1E4E8;">MONGO_URI</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;mongodb://admin:password@localhost:27017&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 全量备份</span></span>
<span class="line"><span style="color:#B392F0;">mongodump</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--uri=</span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">MONGO_URI</span><span style="color:#9ECBFF;">}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--out=</span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">BACKUP_DIR</span><span style="color:#9ECBFF;">}/\${</span><span style="color:#E1E4E8;">DATE</span><span style="color:#9ECBFF;">}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--gzip</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除 7 天前的备份</span></span>
<span class="line"><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;\${</span><span style="color:#E1E4E8;">BACKUP_DIR</span><span style="color:#9ECBFF;">}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-mtime</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+7</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-exec</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{}</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 上传到云存储（可选）</span></span>
<span class="line"><span style="color:#6A737D;"># aws s3 sync &quot;\${BACKUP_DIR}&quot; s3://my-bucket/mongodb-backup/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="color:#6A737D;"># 每日备份脚本，保留最近 7 天</span></span>
<span class="line"><span style="color:#24292E;">BACKUP_DIR</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/backup/mongodb&quot;</span></span>
<span class="line"><span style="color:#24292E;">DATE</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">$(</span><span style="color:#6F42C1;">date</span><span style="color:#032F62;"> +%Y%m%d)</span></span>
<span class="line"><span style="color:#24292E;">MONGO_URI</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;mongodb://admin:password@localhost:27017&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 全量备份</span></span>
<span class="line"><span style="color:#6F42C1;">mongodump</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--uri=</span><span style="color:#032F62;">&quot;\${</span><span style="color:#24292E;">MONGO_URI</span><span style="color:#032F62;">}&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--out=</span><span style="color:#032F62;">&quot;\${</span><span style="color:#24292E;">BACKUP_DIR</span><span style="color:#032F62;">}/\${</span><span style="color:#24292E;">DATE</span><span style="color:#032F62;">}&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--gzip</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除 7 天前的备份</span></span>
<span class="line"><span style="color:#6F42C1;">find</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;\${</span><span style="color:#24292E;">BACKUP_DIR</span><span style="color:#032F62;">}&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-mtime</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+7</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-exec</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{}</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 上传到云存储（可选）</span></span>
<span class="line"><span style="color:#6A737D;"># aws s3 sync &quot;\${BACKUP_DIR}&quot; s3://my-bucket/mongodb-backup/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_10-4-atlas-云服务简介" tabindex="-1">10.4 Atlas 云服务简介 <a class="header-anchor" href="#_10-4-atlas-云服务简介" aria-label="Permalink to &quot;10.4 Atlas 云服务简介&quot;">​</a></h3><p>MongoDB Atlas 是 MongoDB 官方的云托管服务。</p><table><thead><tr><th>特性</th><th>说明</th></tr></thead><tbody><tr><td><strong>自动化运维</strong></td><td>自动备份、监控、扩缩容、打补丁</td></tr><tr><td><strong>多云支持</strong></td><td>AWS、Azure、GCP，可跨区部署</td></tr><tr><td><strong>免费层</strong></td><td>512MB 存储，适合学习和小型项目</td></tr><tr><td><strong>自动备份</strong></td><td>支持时间点恢复（PITR），快照备份</td></tr><tr><td><strong>在线迁移</strong></td><td>提供 Live Migration 工具从自建迁移到 Atlas</td></tr><tr><td><strong>数据探索</strong></td><td>内置 Charts（可视化）、Data Explorer（Web 管理）</td></tr><tr><td><strong>搜索</strong></td><td>Atlas Search（基于 Lucene 的全文搜索）</td></tr><tr><td><strong>Serverless</strong></td><td>按请求计费，无需管理基础设施</td></tr></tbody></table><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// Atlas 连接字符串示例</span></span>
<span class="line"><span style="color:#e1e4e8;">mongodb+srv://&lt;username&gt;:&lt;password&gt;@cluster0.xxxxx.mongodb.net/mydb?retryWrites=true&amp;w=majority</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// Atlas 连接字符串示例</span></span>
<span class="line"><span style="color:#24292e;">mongodb+srv://&lt;username&gt;:&lt;password&gt;@cluster0.xxxxx.mongodb.net/mydb?retryWrites=true&amp;w=majority</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><h2 id="附-mongodb-快速参考" tabindex="-1">附：MongoDB 快速参考 <a class="header-anchor" href="#附-mongodb-快速参考" aria-label="Permalink to &quot;附：MongoDB 快速参考&quot;">​</a></h2><h3 id="常用命令速查" tabindex="-1">常用命令速查 <a class="header-anchor" href="#常用命令速查" aria-label="Permalink to &quot;常用命令速查&quot;">​</a></h3><table><thead><tr><th>操作</th><th>命令</th></tr></thead><tbody><tr><td>连接</td><td><code>mongosh &quot;mongodb://user:pass@host:port/db&quot;</code></td></tr><tr><td>查看数据库</td><td><code>show dbs</code></td></tr><tr><td>切换数据库</td><td><code>use mydb</code></td></tr><tr><td>查看集合</td><td><code>show collections</code></td></tr><tr><td>查看帮助</td><td><code>help</code></td></tr><tr><td>退出</td><td><code>exit</code> 或 <code>quit()</code></td></tr></tbody></table><h3 id="数据类型对照" tabindex="-1">数据类型对照 <a class="header-anchor" href="#数据类型对照" aria-label="Permalink to &quot;数据类型对照&quot;">​</a></h3><table><thead><tr><th>JSON 类型</th><th>BSON 类型</th><th>MongoDB 表示</th></tr></thead><tbody><tr><td>string</td><td>String</td><td><code>&quot;hello&quot;</code></td></tr><tr><td>number</td><td>Int32 / Int64 / Double</td><td><code>42</code> / <code>NumberLong(&quot;999&quot;)</code> / <code>12.5</code></td></tr><tr><td>boolean</td><td>Boolean</td><td><code>true</code> / <code>false</code></td></tr><tr><td>null</td><td>Null</td><td><code>null</code></td></tr><tr><td>array</td><td>Array</td><td><code>[1, 2, 3]</code></td></tr><tr><td>object</td><td>Object</td><td><code>{ key: &quot;value&quot; }</code></td></tr><tr><td>-</td><td>ObjectId</td><td><code>ObjectId(&quot;...&quot;)</code></td></tr><tr><td>-</td><td>Date</td><td><code>new Date()</code> / <code>ISODate(&quot;...&quot;)</code></td></tr><tr><td>-</td><td>Binary</td><td><code>BinData(0, &quot;...&quot;)</code></td></tr><tr><td>-</td><td>Timestamp</td><td><code>Timestamp({ t: 1, i: 0 })</code></td></tr><tr><td>-</td><td>Decimal128</td><td><code>NumberDecimal(&quot;19.99&quot;)</code></td></tr></tbody></table><h3 id="常用驱动连接示例" tabindex="-1">常用驱动连接示例 <a class="header-anchor" href="#常用驱动连接示例" aria-label="Permalink to &quot;常用驱动连接示例&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Node.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">MongoClient</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongodb&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">client</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MongoClient</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongodb://localhost:27017/mydb&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> client.</span><span style="color:#B392F0;">connect</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">db</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> client.</span><span style="color:#B392F0;">db</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> db.</span><span style="color:#B392F0;">collection</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;users&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">({}).</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> client.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Node.js</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">MongoClient</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongodb&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">client</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MongoClient</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongodb://localhost:27017/mydb&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> client.</span><span style="color:#6F42C1;">connect</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">db</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> client.</span><span style="color:#6F42C1;">db</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> db.</span><span style="color:#6F42C1;">collection</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;users&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">({}).</span><span style="color:#6F42C1;">toArray</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> client.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Python (pymongo)</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> pymongo </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MongoClient</span></span>
<span class="line"><span style="color:#E1E4E8;">client </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> MongoClient(</span><span style="color:#9ECBFF;">&quot;mongodb://localhost:27017/&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">db </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> client[</span><span style="color:#9ECBFF;">&quot;mydb&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">users </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> db[</span><span style="color:#9ECBFF;">&quot;users&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> user </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> users.find({</span><span style="color:#9ECBFF;">&quot;age&quot;</span><span style="color:#E1E4E8;">: {</span><span style="color:#9ECBFF;">&quot;$gt&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">}}):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(user)</span></span>
<span class="line"><span style="color:#E1E4E8;">client.close()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Python (pymongo)</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> pymongo </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> MongoClient</span></span>
<span class="line"><span style="color:#24292E;">client </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> MongoClient(</span><span style="color:#032F62;">&quot;mongodb://localhost:27017/&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">db </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> client[</span><span style="color:#032F62;">&quot;mydb&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">users </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> db[</span><span style="color:#032F62;">&quot;users&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> user </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> users.find({</span><span style="color:#032F62;">&quot;age&quot;</span><span style="color:#24292E;">: {</span><span style="color:#032F62;">&quot;$gt&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">}}):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(user)</span></span>
<span class="line"><span style="color:#24292E;">client.close()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Java (mongodb-driver-sync)</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> com.mongodb.client.MongoClients;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> com.mongodb.client.MongoClient;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> com.mongodb.client.MongoCollection;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> com.mongodb.client.MongoDatabase;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> org.bson.Document;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">MongoClient client </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> MongoClients.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mongodb://localhost:27017&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">MongoDatabase db </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> client.</span><span style="color:#B392F0;">getDatabase</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mydb&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">MongoCollection&lt;</span><span style="color:#F97583;">Document</span><span style="color:#E1E4E8;">&gt; coll </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> db.</span><span style="color:#B392F0;">getCollection</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;users&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">Document user </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> coll.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(Filters.</span><span style="color:#B392F0;">eq</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;张三&quot;</span><span style="color:#E1E4E8;">)).</span><span style="color:#B392F0;">first</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">client.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Java (mongodb-driver-sync)</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> com.mongodb.client.MongoClients;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> com.mongodb.client.MongoClient;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> com.mongodb.client.MongoCollection;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> com.mongodb.client.MongoDatabase;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> org.bson.Document;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">MongoClient client </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> MongoClients.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mongodb://localhost:27017&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">MongoDatabase db </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> client.</span><span style="color:#6F42C1;">getDatabase</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mydb&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">MongoCollection&lt;</span><span style="color:#D73A49;">Document</span><span style="color:#24292E;">&gt; coll </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> db.</span><span style="color:#6F42C1;">getCollection</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;users&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">Document user </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> coll.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(Filters.</span><span style="color:#6F42C1;">eq</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;张三&quot;</span><span style="color:#24292E;">)).</span><span style="color:#6F42C1;">first</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">client.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><hr><blockquote><p>参考文档：<a href="https://www.mongodb.com/docs/manual/" target="_blank" rel="noreferrer">MongoDB 官方手册</a> | <a href="https://university.mongodb.com/" target="_blank" rel="noreferrer">MongoDB University</a></p></blockquote>`,181)]))}const b=n(o,[["render",e]]);export{u as __pageData,b as default};
