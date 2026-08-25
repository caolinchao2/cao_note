import{_ as n,o as a,c as l,O as p}from"./chunks/framework.db831a78.js";const u=JSON.parse('{"title":"CI/CD 实践","description":"","frontmatter":{},"headers":[],"relativePath":"backend/Java/CICD.md","filePath":"backend/Java/CICD.md","lastUpdated":1779523228000}'),e={name:"backend/Java/CICD.md"};function o(c,s,r,t,E,y){return a(),l("div",null,s[0]||(s[0]=[p(`<h1 id="ci-cd-实践" tabindex="-1">CI/CD 实践 <a class="header-anchor" href="#ci-cd-实践" aria-label="Permalink to &quot;CI/CD 实践&quot;">​</a></h1><blockquote><p>Java 项目的持续集成与持续部署。</p></blockquote><hr><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ol><li><a href="#cicd-基础">CI/CD 基础</a></li><li><a href="#github-actions">GitHub Actions</a></li><li><a href="#docker-多阶段构建">Docker 多阶段构建</a></li><li><a href="#环境管理">环境管理</a></li><li><a href="#部署方式">部署方式</a></li></ol><hr><h2 id="ci-cd-基础" tabindex="-1">CI/CD 基础 <a class="header-anchor" href="#ci-cd-基础" aria-label="Permalink to &quot;CI/CD 基础&quot;">​</a></h2><h3 id="什么是-ci-cd" tabindex="-1">什么是 CI/CD <a class="header-anchor" href="#什么是-ci-cd" aria-label="Permalink to &quot;什么是 CI/CD&quot;">​</a></h3><p>CI/CD 是持续集成（Continuous Integration）、持续交付（Continuous Delivery）和持续部署（Continuous Deployment）的合称，是现代软件开发中最重要的工程实践之一。</p><p><strong>持续集成（CI）</strong> 指开发人员频繁地将代码变更合并到主干分支，每次合并都会触发自动化构建和测试流程。其核心理念是让问题尽早暴露，避免&quot;集成地狱&quot;。</p><p><strong>持续交付（CD）</strong> 在 CI 的基础上，确保代码随时可以部署到生产环境。每次通过 CI 的代码变更都会自动部署到类生产环境，经过验收测试后，可以一键发布到生产。</p><p><strong>持续部署（CD）</strong> 是持续交付的延伸，将通过自动化测试的代码变更自动部署到生产环境，无需人工干预。</p><h3 id="ci-cd-的核心价值" tabindex="-1">CI/CD 的核心价值 <a class="header-anchor" href="#ci-cd-的核心价值" aria-label="Permalink to &quot;CI/CD 的核心价值&quot;">​</a></h3><ul><li><strong>快速反馈</strong>：提交代码后几分钟内就能知道是否引入了问题</li><li><strong>降低风险</strong>：小批量变更频繁集成，问题定位范围小</li><li><strong>减少手工操作</strong>：自动化构建、测试、部署，减少人为失误</li><li><strong>提高交付频率</strong>：从数月一次发布到一天多次发布</li><li><strong>可重复的构建过程</strong>：构建环境标准化，消除&quot;在我机器上能运行&quot;的问题</li></ul><h3 id="java-项目-ci-cd-全流程" tabindex="-1">Java 项目 CI/CD 全流程 <a class="header-anchor" href="#java-项目-ci-cd-全流程" aria-label="Permalink to &quot;Java 项目 CI/CD 全流程&quot;">​</a></h3><p>一个典型的 Java 项目 CI/CD 流程包含以下阶段：</p><div class="language-mermaid vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">flowchart</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">LR</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">A</span><span style="color:#F97583;">[</span><span style="color:#9ECBFF;">代码提交</span><span style="color:#F97583;">]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">--&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">B</span><span style="color:#F97583;">[</span><span style="color:#9ECBFF;">代码检查</span><span style="color:#F97583;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">B </span><span style="color:#F97583;">--&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">C</span><span style="color:#F97583;">[</span><span style="color:#9ECBFF;">单元测试</span><span style="color:#F97583;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">C </span><span style="color:#F97583;">--&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">D</span><span style="color:#F97583;">[</span><span style="color:#9ECBFF;">编译打包</span><span style="color:#F97583;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">D </span><span style="color:#F97583;">--&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">E</span><span style="color:#F97583;">[</span><span style="color:#9ECBFF;">构建镜像</span><span style="color:#F97583;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">E </span><span style="color:#F97583;">--&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">F</span><span style="color:#F97583;">[</span><span style="color:#9ECBFF;">部署测试环境</span><span style="color:#F97583;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">F </span><span style="color:#F97583;">--&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">G</span><span style="color:#F97583;">[</span><span style="color:#9ECBFF;">集成测试</span><span style="color:#F97583;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">G </span><span style="color:#F97583;">--&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">H</span><span style="color:#F97583;">[</span><span style="color:#9ECBFF;">部署生产环境</span><span style="color:#F97583;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">flowchart</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">LR</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">A</span><span style="color:#D73A49;">[</span><span style="color:#032F62;">代码提交</span><span style="color:#D73A49;">]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">--&gt;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">B</span><span style="color:#D73A49;">[</span><span style="color:#032F62;">代码检查</span><span style="color:#D73A49;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">B </span><span style="color:#D73A49;">--&gt;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">C</span><span style="color:#D73A49;">[</span><span style="color:#032F62;">单元测试</span><span style="color:#D73A49;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">C </span><span style="color:#D73A49;">--&gt;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">D</span><span style="color:#D73A49;">[</span><span style="color:#032F62;">编译打包</span><span style="color:#D73A49;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">D </span><span style="color:#D73A49;">--&gt;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">E</span><span style="color:#D73A49;">[</span><span style="color:#032F62;">构建镜像</span><span style="color:#D73A49;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">E </span><span style="color:#D73A49;">--&gt;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">F</span><span style="color:#D73A49;">[</span><span style="color:#032F62;">部署测试环境</span><span style="color:#D73A49;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">F </span><span style="color:#D73A49;">--&gt;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">G</span><span style="color:#D73A49;">[</span><span style="color:#032F62;">集成测试</span><span style="color:#D73A49;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">G </span><span style="color:#D73A49;">--&gt;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">H</span><span style="color:#D73A49;">[</span><span style="color:#032F62;">部署生产环境</span><span style="color:#D73A49;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>阶段详解：</strong></p><table><thead><tr><th>阶段</th><th>工具/技术</th><th>说明</th></tr></thead><tbody><tr><td>代码提交</td><td>Git</td><td>开发者推送代码到远程仓库</td></tr><tr><td>代码检查</td><td>SonarQube / Checkstyle / PMD</td><td>静态代码分析，检查代码质量和规范</td></tr><tr><td>单元测试</td><td>JUnit / TestNG / Mockito</td><td>运行单元测试，验证代码逻辑</td></tr><tr><td>编译打包</td><td>Maven / Gradle</td><td>编译源码并打包为 JAR/WAR</td></tr><tr><td>构建镜像</td><td>Docker / Jib</td><td>将应用打包为 Docker 镜像</td></tr><tr><td>部署测试环境</td><td>kubectl / Helm / Ansible</td><td>部署到测试或预发布环境</td></tr><tr><td>集成测试</td><td>REST Assured / Selenium / Testcontainers</td><td>运行集成测试和端到端测试</td></tr><tr><td>部署生产</td><td>Spinnaker / ArgoCD / Jenkins</td><td>发布到生产环境</td></tr></tbody></table><h3 id="ci-cd-工具生态" tabindex="-1">CI/CD 工具生态 <a class="header-anchor" href="#ci-cd-工具生态" aria-label="Permalink to &quot;CI/CD 工具生态&quot;">​</a></h3><p><strong>CI/CD 平台：</strong></p><ul><li><strong>Jenkins</strong>：老牌 CI/CD 工具，插件丰富，Pipeline as Code</li><li><strong>GitHub Actions</strong>：与 GitHub 深度集成，YAML 配置，生态活跃</li><li><strong>GitLab CI</strong>：与 GitLab 深度集成，功能强大</li><li><strong>CircleCI</strong>：云端 CI 服务，速度较快</li><li><strong>Azure DevOps</strong>：微软提供的 DevOps 全流程工具</li><li><strong>Drone</strong>：轻量级容器化 CI/CD 工具</li></ul><p><strong>构建工具：</strong></p><ul><li><strong>Maven</strong>：约定优于配置，XML 配置，生态成熟</li><li><strong>Gradle</strong>：灵活性高，Groovy/Kotlin DSL，性能优于 Maven</li></ul><p><strong>质量工具：</strong></p><ul><li><strong>SonarQube</strong>：代码质量与安全分析</li><li><strong>JaCoCo</strong>：代码覆盖率统计</li><li><strong>Checkstyle</strong>：代码风格检查</li><li><strong>PMD</strong>：潜在缺陷检测</li><li><strong>SpotBugs</strong>：字节码级别缺陷检测</li></ul><hr><h2 id="github-actions" tabindex="-1">GitHub Actions <a class="header-anchor" href="#github-actions" aria-label="Permalink to &quot;GitHub Actions&quot;">​</a></h2><h3 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h3><p>GitHub Actions 是 GitHub 内置的 CI/CD 引擎，使用 YAML 文件定义工作流。</p><p><strong>核心概念：</strong></p><table><thead><tr><th>概念</th><th>说明</th></tr></thead><tbody><tr><td><strong>Workflow</strong></td><td>一个完整的自动化流程，定义在 <code>.github/workflows/</code> 目录下的 YAML 文件中</td></tr><tr><td><strong>Event</strong></td><td>触发 Workflow 的事件，如 <code>push</code>、<code>pull_request</code>、<code>schedule</code></td></tr><tr><td><strong>Job</strong></td><td>Workflow 中的一个任务单元，包含多个 Step，默认并行执行</td></tr><tr><td><strong>Step</strong></td><td>Job 中的一个步骤，可以是运行命令或使用 Action</td></tr><tr><td><strong>Action</strong></td><td>可复用的工作单元，可以从 Marketplace 获取或自定义</td></tr><tr><td><strong>Runner</strong></td><td>运行 Workflow 的服务器，GitHub 托管或自托管</td></tr></tbody></table><h3 id="workflow-基本结构" tabindex="-1">Workflow 基本结构 <a class="header-anchor" href="#workflow-基本结构" aria-label="Permalink to &quot;Workflow 基本结构&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Java CI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 触发条件</span></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">develop</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">pull_request</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 环境变量</span></span>
<span class="line"><span style="color:#85E89D;">env</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">JAVA_VERSION</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;17&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 任务定义</span></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 运行环境</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 步骤</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Set up JDK</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">java-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ env.JAVA_VERSION }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">distribution</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;temurin&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build with Maven</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mvn clean verify</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Java CI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 触发条件</span></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">main</span><span style="color:#24292E;">, </span><span style="color:#032F62;">develop</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">pull_request</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">main</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 环境变量</span></span>
<span class="line"><span style="color:#22863A;">env</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">JAVA_VERSION</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;17&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 任务定义</span></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">build</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 运行环境</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 步骤</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Set up JDK</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">java-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ env.JAVA_VERSION }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">distribution</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;temurin&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build with Maven</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mvn clean verify</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="maven-构建工作流" tabindex="-1">Maven 构建工作流 <a class="header-anchor" href="#maven-构建工作流" aria-label="Permalink to &quot;Maven 构建工作流&quot;">​</a></h3><p>一个完整的 Maven 项目 CI 工作流示例：</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Maven CI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">develop</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">feature/**</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">pull_request</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Checkout code</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Set up JDK 17</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">java-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;17&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">distribution</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;temurin&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">cache</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">maven</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build and test</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mvn clean verify -B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Upload test reports</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">always()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/upload-artifact@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">test-reports</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;**/target/surefire-reports/*.xml&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Upload JAR artifact</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/upload-artifact@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">application-jar</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">target/*.jar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Maven CI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">main</span><span style="color:#24292E;">, </span><span style="color:#032F62;">develop</span><span style="color:#24292E;">, </span><span style="color:#032F62;">feature/**</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">pull_request</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">main</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">build</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Checkout code</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Set up JDK 17</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">java-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;17&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">distribution</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;temurin&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">cache</span><span style="color:#24292E;">: </span><span style="color:#032F62;">maven</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build and test</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mvn clean verify -B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Upload test reports</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">if</span><span style="color:#24292E;">: </span><span style="color:#032F62;">always()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/upload-artifact@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">test-reports</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;**/target/surefire-reports/*.xml&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Upload JAR artifact</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/upload-artifact@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">application-jar</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">target/*.jar</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p><strong>Maven 缓存优化：</strong></p><p>GitHub Actions 的内置 <code>setup-java</code> Action 已经支持 Maven 依赖缓存。设置 <code>cache: maven</code> 后会自动缓存 <code>~/.m2/repository</code> 目录，将后续构建的时间从几分钟缩短到几十秒。</p><p>缓存策略说明：</p><ul><li>缓存键基于 <code>pom.xml</code> 的哈希值生成</li><li>如果 <code>pom.xml</code> 发生变化，缓存会失效并重建</li><li>命中缓存时跳过依赖下载，大幅加速构建</li></ul><h3 id="gradle-构建工作流" tabindex="-1">Gradle 构建工作流 <a class="header-anchor" href="#gradle-构建工作流" aria-label="Permalink to &quot;Gradle 构建工作流&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Gradle CI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">pull_request</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Set up JDK 21</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">java-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;21&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">distribution</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;temurin&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">cache</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">gradle</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Grant execute permission for Gradle wrapper</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">chmod +x gradlew</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build with Gradle</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">./gradlew clean build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Run tests</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">./gradlew test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Publish Test Report</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">always()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/upload-artifact@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">test-results</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">build/reports/tests/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Gradle CI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">main</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">pull_request</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">main</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">build</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Set up JDK 21</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">java-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;21&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">distribution</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;temurin&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">cache</span><span style="color:#24292E;">: </span><span style="color:#032F62;">gradle</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Grant execute permission for Gradle wrapper</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">chmod +x gradlew</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build with Gradle</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">./gradlew clean build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Run tests</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">./gradlew test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Publish Test Report</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">if</span><span style="color:#24292E;">: </span><span style="color:#032F62;">always()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/upload-artifact@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">test-results</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">build/reports/tests/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p><strong>Gradle Wrapper 最佳实践：</strong></p><ul><li>将 <code>gradle-wrapper.jar</code> 和 <code>gradlew</code> 提交到代码仓库</li><li>这样 CI 环境无需预先安装 Gradle</li><li>确保所有开发者使用相同的 Gradle 版本</li><li>GitHub Actions 中通过 <code>cache: gradle</code> 缓存 <code>~/.gradle/caches</code> 目录</li></ul><h3 id="多-jdk-版本矩阵测试" tabindex="-1">多 JDK 版本矩阵测试 <a class="header-anchor" href="#多-jdk-版本矩阵测试" aria-label="Permalink to &quot;多 JDK 版本矩阵测试&quot;">​</a></h3><p>为了确保应用在不同 JDK 版本上的兼容性，可以使用矩阵策略并行测试：</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Multi-JDK Test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">pull_request</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">test</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">strategy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">matrix</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">java</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">17</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">21</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">distribution</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">temurin</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">zulu</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Set up JDK \${{ matrix.java }} (\${{ matrix.distribution }})</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">java-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ matrix.java }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">distribution</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ matrix.distribution }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">cache</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">maven</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Run tests</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mvn clean test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Check Java version</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">java -version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Multi-JDK Test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">main</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">pull_request</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">main</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">test</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">strategy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">matrix</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">java</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">11</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">17</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">21</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">distribution</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">temurin</span><span style="color:#24292E;">, </span><span style="color:#032F62;">zulu</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Set up JDK \${{ matrix.java }} (\${{ matrix.distribution }})</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">java-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ matrix.java }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">distribution</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ matrix.distribution }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">cache</span><span style="color:#24292E;">: </span><span style="color:#032F62;">maven</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Run tests</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mvn clean test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Check Java version</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">java -version</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p><strong>矩阵策略高级用法：</strong></p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">test</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">strategy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">matrix</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">java</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">17</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">21</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">spring-boot</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">3.1.x</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">3.2.x</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">3.3.x</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">exclude</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;"># 排除不需要的组合</span></span>
<span class="line"><span style="color:#E1E4E8;">          - </span><span style="color:#85E89D;">java</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">17</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">spring-boot</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">3.3.x</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Set up JDK \${{ matrix.java }}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">java-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ matrix.java }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">distribution</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;temurin&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">cache</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">maven</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Test with Spring Boot \${{ matrix.spring-boot }}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mvn test -Dspring-boot.version=\${{ matrix.spring-boot }}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">test</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">strategy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">matrix</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">java</span><span style="color:#24292E;">: [</span><span style="color:#005CC5;">17</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">21</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">spring-boot</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">3.1.x</span><span style="color:#24292E;">, </span><span style="color:#032F62;">3.2.x</span><span style="color:#24292E;">, </span><span style="color:#032F62;">3.3.x</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">exclude</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;"># 排除不需要的组合</span></span>
<span class="line"><span style="color:#24292E;">          - </span><span style="color:#22863A;">java</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">17</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">spring-boot</span><span style="color:#24292E;">: </span><span style="color:#032F62;">3.3.x</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Set up JDK \${{ matrix.java }}</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">java-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ matrix.java }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">distribution</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;temurin&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">cache</span><span style="color:#24292E;">: </span><span style="color:#032F62;">maven</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Test with Spring Boot \${{ matrix.spring-boot }}</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mvn test -Dspring-boot.version=\${{ matrix.spring-boot }}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="sonarqube-代码分析" tabindex="-1">SonarQube 代码分析 <a class="header-anchor" href="#sonarqube-代码分析" aria-label="Permalink to &quot;SonarQube 代码分析&quot;">​</a></h3><p>集成 SonarQube 进行代码质量和安全分析：</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">SonarQube Analysis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">pull_request</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">sonar</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">fetch-depth</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># SonarQube 需要完整 git 历史</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Set up JDK 17</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">java-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;17&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">distribution</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;temurin&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">cache</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">maven</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Cache SonarQube packages</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/cache@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">~/.sonar/cache</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">key</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ runner.os }}-sonar</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">restore-keys</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ runner.os }}-sonar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">SonarQube Analysis</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">env</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">SONAR_TOKEN</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.SONAR_TOKEN }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">SONAR_HOST_URL</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.SONAR_HOST_URL }}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mvn verify sonar:sonar \\</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">-Dsonar.token=\${{ secrets.SONAR_TOKEN }} \\</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">-Dsonar.host.url=\${{ secrets.SONAR_HOST_URL }} \\</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">-Dsonar.qualitygate.wait=true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">SonarQube Analysis</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">main</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">pull_request</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">main</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">sonar</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">fetch-depth</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># SonarQube 需要完整 git 历史</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Set up JDK 17</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">java-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;17&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">distribution</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;temurin&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">cache</span><span style="color:#24292E;">: </span><span style="color:#032F62;">maven</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Cache SonarQube packages</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/cache@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">~/.sonar/cache</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">key</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ runner.os }}-sonar</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">restore-keys</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ runner.os }}-sonar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">SonarQube Analysis</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">env</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">SONAR_TOKEN</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.SONAR_TOKEN }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">SONAR_HOST_URL</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.SONAR_HOST_URL }}</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mvn verify sonar:sonar \\</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">-Dsonar.token=\${{ secrets.SONAR_TOKEN }} \\</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">-Dsonar.host.url=\${{ secrets.SONAR_HOST_URL }} \\</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">-Dsonar.qualitygate.wait=true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p><strong>SonarQube 质量门禁：</strong></p><p>质量门禁（Quality Gate）是 SonarQube 的核心功能，在 CI 管道中用于判断代码质量是否达标。常见门禁指标：</p><table><thead><tr><th>指标</th><th>阈值</th><th>说明</th></tr></thead><tbody><tr><td>可靠性评级</td><td>A</td><td>没有 Bug</td></tr><tr><td>安全评级</td><td>A</td><td>没有安全漏洞</td></tr><tr><td>可维护性评级</td><td>A</td><td>代码异味在可接受范围</td></tr><tr><td>覆盖率</td><td>&gt;= 80%</td><td>单元测试覆盖率</td></tr><tr><td>重复率</td><td>&lt;= 3%</td><td>代码重复率</td></tr></tbody></table><p>设置 <code>sonar.qualitygate.wait=true</code> 会让构建等待 SonarQube 质量门禁结果，未通过则构建失败。</p><h3 id="docker-构建与推送" tabindex="-1">Docker 构建与推送 <a class="header-anchor" href="#docker-构建与推送" aria-label="Permalink to &quot;Docker 构建与推送&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build and Push Docker Image</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;v*&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">docker</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Set up JDK 17</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">java-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;17&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">distribution</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;temurin&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">cache</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">maven</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build JAR</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mvn clean package -DskipTests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Set up Docker Buildx</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">docker/setup-buildx-action@v3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Log in to Docker Hub</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">docker/login-action@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">username</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.DOCKER_USERNAME }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">password</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.DOCKER_PASSWORD }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Extract metadata</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">meta</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">docker/metadata-action@v5</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">images</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">your-dockerhub-user/app-name</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">            type=semver,pattern={{version}}</span></span>
<span class="line"><span style="color:#9ECBFF;">            type=semver,pattern={{major}}.{{minor}}</span></span>
<span class="line"><span style="color:#9ECBFF;">            type=ref,event=branch</span></span>
<span class="line"><span style="color:#9ECBFF;">            type=sha,format=long</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build and push</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">docker/build-push-action@v5</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">context</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ steps.meta.outputs.tags }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">labels</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ steps.meta.outputs.labels }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">cache-from</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">type=gha</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">cache-to</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">type=gha,mode=max</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build and Push Docker Image</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">main</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">tags</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;v*&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">docker</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Set up JDK 17</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">java-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;17&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">distribution</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;temurin&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">cache</span><span style="color:#24292E;">: </span><span style="color:#032F62;">maven</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build JAR</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mvn clean package -DskipTests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Set up Docker Buildx</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">docker/setup-buildx-action@v3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Log in to Docker Hub</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">docker/login-action@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">username</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.DOCKER_USERNAME }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">password</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.DOCKER_PASSWORD }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Extract metadata</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">meta</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">docker/metadata-action@v5</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">images</span><span style="color:#24292E;">: </span><span style="color:#032F62;">your-dockerhub-user/app-name</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">tags</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">            type=semver,pattern={{version}}</span></span>
<span class="line"><span style="color:#032F62;">            type=semver,pattern={{major}}.{{minor}}</span></span>
<span class="line"><span style="color:#032F62;">            type=ref,event=branch</span></span>
<span class="line"><span style="color:#032F62;">            type=sha,format=long</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build and push</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">docker/build-push-action@v5</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">context</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">.</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">push</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">tags</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ steps.meta.outputs.tags }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">labels</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ steps.meta.outputs.labels }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">cache-from</span><span style="color:#24292E;">: </span><span style="color:#032F62;">type=gha</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">cache-to</span><span style="color:#24292E;">: </span><span style="color:#032F62;">type=gha,mode=max</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p><strong>镜像标签策略最佳实践：</strong></p><ul><li><code>v1.2.3</code> — 语义化版本标签，用于正式发布</li><li><code>v1.2</code> — 次要版本标签，指向最新补丁版本</li><li><code>main</code> — 分支标签，用于开发环境</li><li><code>sha-xxxxxx</code> — 唯一标识，用于回滚定位</li><li><code>latest</code> — 谨慎使用，容易造成混淆</li></ul><h3 id="部署到服务器" tabindex="-1">部署到服务器 <a class="header-anchor" href="#部署到服务器" aria-label="Permalink to &quot;部署到服务器&quot;">​</a></h3><p>通过 SSH 将应用部署到远程服务器：</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy to Server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">workflow_run</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">workflows</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;Build and Push Docker Image&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">types</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">completed</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">workflow_dispatch</span><span style="color:#E1E4E8;">:  </span><span style="color:#6A737D;"># 支持手动触发</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">deploy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ github.event.workflow_run.conclusion == &#39;success&#39; }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy via SSH</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">appleboy/ssh-action@v1.0.3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">host</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.DEPLOY_HOST }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">port</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.DEPLOY_PORT }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">username</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.DEPLOY_USER }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">key</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.DEPLOY_SSH_KEY }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">            cd /opt/app</span></span>
<span class="line"><span style="color:#9ECBFF;">            docker-compose pull</span></span>
<span class="line"><span style="color:#9ECBFF;">            docker-compose up -d --remove-orphans</span></span>
<span class="line"><span style="color:#9ECBFF;">            docker system prune -f</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Health check</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">          sleep 10</span></span>
<span class="line"><span style="color:#9ECBFF;">          curl -f http://\${{ secrets.DEPLOY_HOST }}:8080/actuator/health</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy to Server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">workflow_run</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">workflows</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;Build and Push Docker Image&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">types</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">completed</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">workflow_dispatch</span><span style="color:#24292E;">:  </span><span style="color:#6A737D;"># 支持手动触发</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">deploy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">if</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ github.event.workflow_run.conclusion == &#39;success&#39; }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy via SSH</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">appleboy/ssh-action@v1.0.3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">host</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.DEPLOY_HOST }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">port</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.DEPLOY_PORT }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">username</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.DEPLOY_USER }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">key</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.DEPLOY_SSH_KEY }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">script</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">            cd /opt/app</span></span>
<span class="line"><span style="color:#032F62;">            docker-compose pull</span></span>
<span class="line"><span style="color:#032F62;">            docker-compose up -d --remove-orphans</span></span>
<span class="line"><span style="color:#032F62;">            docker system prune -f</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Health check</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">          sleep 10</span></span>
<span class="line"><span style="color:#032F62;">          curl -f http://\${{ secrets.DEPLOY_HOST }}:8080/actuator/health</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p><strong>SSH 部署安全注意事项：</strong></p><ul><li>使用 SSH 私钥认证，而非密码</li><li>私钥存储为 GitHub Secrets</li><li>使用专用的部署用户，权限最小化</li><li>配置 SSH 免密 sudo 执行特定命令</li><li>考虑使用 Bastion 主机作为跳板机</li></ul><h3 id="github-actions-进阶技巧" tabindex="-1">GitHub Actions 进阶技巧 <a class="header-anchor" href="#github-actions-进阶技巧" aria-label="Permalink to &quot;GitHub Actions 进阶技巧&quot;">​</a></h3><p><strong>工作流复用：</strong></p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># .github/workflows/maven-build.yml (可复用的工作流)</span></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">workflow_call</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">inputs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">java-version</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">required</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">secrets</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">SONAR_TOKEN</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">required</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Set up JDK</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">java-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ inputs.java-version }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">distribution</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;temurin&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mvn clean verify</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># .github/workflows/maven-build.yml (可复用的工作流)</span></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">workflow_call</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">inputs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">java-version</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">required</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">string</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">secrets</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">SONAR_TOKEN</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">required</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">build</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v4</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Set up JDK</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">java-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ inputs.java-version }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">distribution</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;temurin&#39;</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mvn clean verify</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 在另一个工作流中调用</span></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">call-build</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">./.github/workflows/maven-build.yml</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">java-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;17&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">secrets</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">SONAR_TOKEN</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.SONAR_TOKEN }}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 在另一个工作流中调用</span></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">call-build</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">./.github/workflows/maven-build.yml</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">java-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;17&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">secrets</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">SONAR_TOKEN</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.SONAR_TOKEN }}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>条件执行：</strong></p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Run on main branch only</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">github.ref == &#39;refs/heads/main&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">echo &quot;Deploying to production&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Run on PRs</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">github.event_name == &#39;pull_request&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">echo &quot;Running PR checks&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Run on tag push</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">startsWith(github.ref, &#39;refs/tags/v&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">echo &quot;Releasing version&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Always run, even if previous steps fail</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">always()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">echo &quot;Cleanup&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Run only on failure</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">failure()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">echo &quot;Send notification&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Run on main branch only</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">if</span><span style="color:#24292E;">: </span><span style="color:#032F62;">github.ref == &#39;refs/heads/main&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">echo &quot;Deploying to production&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Run on PRs</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">if</span><span style="color:#24292E;">: </span><span style="color:#032F62;">github.event_name == &#39;pull_request&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">echo &quot;Running PR checks&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Run on tag push</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">if</span><span style="color:#24292E;">: </span><span style="color:#032F62;">startsWith(github.ref, &#39;refs/tags/v&#39;)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">echo &quot;Releasing version&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Always run, even if previous steps fail</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">if</span><span style="color:#24292E;">: </span><span style="color:#032F62;">always()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">echo &quot;Cleanup&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Run only on failure</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">if</span><span style="color:#24292E;">: </span><span style="color:#032F62;">failure()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">echo &quot;Send notification&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><strong>手动审批环境：</strong></p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">deploy-staging</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">staging</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">echo &quot;Deploy to staging&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">deploy-prod</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">needs</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">deploy-staging</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">production</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://your-app.com</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">echo &quot;Deploy to production&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">deploy-staging</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">staging</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">echo &quot;Deploy to staging&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">deploy-prod</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">needs</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">deploy-staging</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">production</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://your-app.com</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">echo &quot;Deploy to production&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>通过在 GitHub 仓库 Settings &gt; Environments 中配置 <code>production</code> 环境的 Required reviewers，可以在部署生产前添加人工审批环节。</p><hr><h2 id="docker-多阶段构建" tabindex="-1">Docker 多阶段构建 <a class="header-anchor" href="#docker-多阶段构建" aria-label="Permalink to &quot;Docker 多阶段构建&quot;">​</a></h2><h3 id="为什么需要多阶段构建" tabindex="-1">为什么需要多阶段构建 <a class="header-anchor" href="#为什么需要多阶段构建" aria-label="Permalink to &quot;为什么需要多阶段构建&quot;">​</a></h3><p>传统的 Java 应用 Docker 构建面临两个问题：</p><ol><li><strong>镜像体积过大</strong>：Maven 镜像通常超过 200MB，JDK 镜像超过 300MB，构建产物中包含了编译工具和依赖，这些在生产运行时完全不需要</li><li><strong>构建产物不一致</strong>：本地环境和 CI 环境使用不同版本的构建工具，可能导致构建结果不同</li></ol><p>多阶段构建（Multi-stage Build）通过在 Dockerfile 中使用多个 <code>FROM</code> 语句，将构建环境和运行环境分离，有效解决以上问题。</p><h3 id="基础多阶段构建" tabindex="-1">基础多阶段构建 <a class="header-anchor" href="#基础多阶段构建" aria-label="Permalink to &quot;基础多阶段构建&quot;">​</a></h3><div class="language-dockerfile vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Stage 1: 构建阶段</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> maven:3.9-eclipse-temurin-17 </span><span style="color:#F97583;">AS</span><span style="color:#E1E4E8;"> builder</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /app</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> pom.xml .</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> mvn dependency:go-offline -B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> src ./src</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> mvn clean package -DskipTests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Stage 2: 运行阶段</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> eclipse-temurin:17-jre-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> addgroup -S appgroup &amp;&amp; adduser -S appuser -G appgroup</span></span>
<span class="line"><span style="color:#F97583;">USER</span><span style="color:#E1E4E8;"> appuser</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /app</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> --from=builder /app/target/*.jar app.jar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">EXPOSE</span><span style="color:#E1E4E8;"> 8080</span></span>
<span class="line"><span style="color:#F97583;">ENTRYPOINT</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;java&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;-jar&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;app.jar&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Stage 1: 构建阶段</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> maven:3.9-eclipse-temurin-17 </span><span style="color:#D73A49;">AS</span><span style="color:#24292E;"> builder</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">WORKDIR</span><span style="color:#24292E;"> /app</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> pom.xml .</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> mvn dependency:go-offline -B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> src ./src</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> mvn clean package -DskipTests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Stage 2: 运行阶段</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> eclipse-temurin:17-jre-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> addgroup -S appgroup &amp;&amp; adduser -S appuser -G appgroup</span></span>
<span class="line"><span style="color:#D73A49;">USER</span><span style="color:#24292E;"> appuser</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">WORKDIR</span><span style="color:#24292E;"> /app</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> --from=builder /app/target/*.jar app.jar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">EXPOSE</span><span style="color:#24292E;"> 8080</span></span>
<span class="line"><span style="color:#D73A49;">ENTRYPOINT</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;java&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;-jar&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;app.jar&quot;</span><span style="color:#24292E;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><strong>构建结果对比：</strong></p><table><thead><tr><th>方案</th><th>镜像大小</th><th>包含内容</th></tr></thead><tbody><tr><td>单阶段构建（Maven）</td><td>~700MB</td><td>JDK + Maven + 依赖 + 源码 + 编译产物</td></tr><tr><td>多阶段构建（JRE）</td><td>~180MB</td><td>JRE + 编译产物</td></tr><tr><td>多阶段 + Alpine</td><td>~120MB</td><td>JRE 精简版 + 编译产物</td></tr><tr><td>多阶段 + Distroless</td><td>~100MB</td><td>运行时所需的最小文件</td></tr></tbody></table><h3 id="瘦-jar-外部依赖层" tabindex="-1">瘦 JAR + 外部依赖层 <a class="header-anchor" href="#瘦-jar-外部依赖层" aria-label="Permalink to &quot;瘦 JAR + 外部依赖层&quot;">​</a></h3><p>Spring Boot 打包的 fat JAR 包含所有依赖，导致每次代码变更都需要重新下载层缓存。可以将依赖分层，利用 Docker 的层缓存加速构建：</p><div class="language-dockerfile vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Stage 1: 依赖下载阶段</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> maven:3.9-eclipse-temurin-17 </span><span style="color:#F97583;">AS</span><span style="color:#E1E4E8;"> deps</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /app</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> pom.xml .</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> mvn dependency:go-offline -B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Stage 2: 构建阶段</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> maven:3.9-eclipse-temurin-17 </span><span style="color:#F97583;">AS</span><span style="color:#E1E4E8;"> builder</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /app</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> --from=deps /root/.m2 /root/.m2</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> pom.xml .</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> src ./src</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> mvn clean package -DskipTests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Stage 3: 运行阶段 - 利用 Spring Boot 分层</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> eclipse-temurin:17-jre-alpine </span><span style="color:#F97583;">AS</span><span style="color:#E1E4E8;"> extractor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /app</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> --from=builder /app/target/*.jar app.jar</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> java -Djarmode=layertools -jar app.jar extract</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Stage 4: 最终运行镜像</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> eclipse-temurin:17-jre-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> addgroup -S appgroup &amp;&amp; adduser -S appuser -G appgroup</span></span>
<span class="line"><span style="color:#F97583;">USER</span><span style="color:#E1E4E8;"> appuser</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /app</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> --from=extractor /app/dependencies/ ./</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> --from=extractor /app/spring-boot-loader/ ./</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> --from=extractor /app/snapshot-dependencies/ ./</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> --from=extractor /app/application/ ./</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">EXPOSE</span><span style="color:#E1E4E8;"> 8080</span></span>
<span class="line"><span style="color:#F97583;">ENTRYPOINT</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;java&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;org.springframework.boot.loader.launch.JarLauncher&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Stage 1: 依赖下载阶段</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> maven:3.9-eclipse-temurin-17 </span><span style="color:#D73A49;">AS</span><span style="color:#24292E;"> deps</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">WORKDIR</span><span style="color:#24292E;"> /app</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> pom.xml .</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> mvn dependency:go-offline -B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Stage 2: 构建阶段</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> maven:3.9-eclipse-temurin-17 </span><span style="color:#D73A49;">AS</span><span style="color:#24292E;"> builder</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">WORKDIR</span><span style="color:#24292E;"> /app</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> --from=deps /root/.m2 /root/.m2</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> pom.xml .</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> src ./src</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> mvn clean package -DskipTests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Stage 3: 运行阶段 - 利用 Spring Boot 分层</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> eclipse-temurin:17-jre-alpine </span><span style="color:#D73A49;">AS</span><span style="color:#24292E;"> extractor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">WORKDIR</span><span style="color:#24292E;"> /app</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> --from=builder /app/target/*.jar app.jar</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> java -Djarmode=layertools -jar app.jar extract</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Stage 4: 最终运行镜像</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> eclipse-temurin:17-jre-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> addgroup -S appgroup &amp;&amp; adduser -S appuser -G appgroup</span></span>
<span class="line"><span style="color:#D73A49;">USER</span><span style="color:#24292E;"> appuser</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">WORKDIR</span><span style="color:#24292E;"> /app</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> --from=extractor /app/dependencies/ ./</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> --from=extractor /app/spring-boot-loader/ ./</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> --from=extractor /app/snapshot-dependencies/ ./</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> --from=extractor /app/application/ ./</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">EXPOSE</span><span style="color:#24292E;"> 8080</span></span>
<span class="line"><span style="color:#D73A49;">ENTRYPOINT</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;java&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;org.springframework.boot.loader.launch.JarLauncher&quot;</span><span style="color:#24292E;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p><strong>Spring Boot 分层说明：</strong></p><p>Spring Boot 2.3+ 支持 JAR 分层（jarmode=layertools），将 JAR 包解压为四层：</p><table><thead><tr><th>层</th><th>内容</th><th>变化频率</th><th>缓存策略</th></tr></thead><tbody><tr><td><code>dependencies</code></td><td>项目依赖的第三方 JAR</td><td>低（修改 pom.xml 时）</td><td>长期缓存</td></tr><tr><td><code>spring-boot-loader</code></td><td>Spring Boot 加载器类</td><td>极低（升级 Boot 版本时）</td><td>几乎不变</td></tr><tr><td><code>snapshot-dependencies</code></td><td>SNAPSHOT 版本的依赖</td><td>中</td><td>按需缓存</td></tr><tr><td><code>application</code></td><td>应用代码和资源</td><td>高（每次代码变更）</td><td>频繁更新</td></tr></tbody></table><p>利用分层后，大部分时候只需要重新构建 <code>application</code> 层，前面三层可以直接使用缓存，极大加速 CI 构建。</p><h3 id="jib-构建" tabindex="-1">Jib 构建 <a class="header-anchor" href="#jib-构建" aria-label="Permalink to &quot;Jib 构建&quot;">​</a></h3><p>Google 的 Jib 工具无需 Dockerfile，直接通过 Maven/Gradle 插件构建优化过的 Docker 镜像：</p><p><strong>Maven 配置：</strong></p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">plugin</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;com.google.cloud.tools&lt;/</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;jib-maven-plugin&lt;/</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">&gt;3.4.0&lt;/</span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">configuration</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">from</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">&gt;eclipse-temurin:17-jre-alpine&lt;/</span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">from</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">to</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">&gt;your-registry/app-name&lt;/</span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">tag</span><span style="color:#E1E4E8;">&gt;\${project.version}&lt;/</span><span style="color:#85E89D;">tag</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">tag</span><span style="color:#E1E4E8;">&gt;latest&lt;/</span><span style="color:#85E89D;">tag</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">to</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">container</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">jvmFlags</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">jvmFlag</span><span style="color:#E1E4E8;">&gt;-Xms512m&lt;/</span><span style="color:#85E89D;">jvmFlag</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">jvmFlag</span><span style="color:#E1E4E8;">&gt;-Xmx512m&lt;/</span><span style="color:#85E89D;">jvmFlag</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">jvmFlags</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">                &lt;</span><span style="color:#85E89D;">port</span><span style="color:#E1E4E8;">&gt;8080&lt;/</span><span style="color:#85E89D;">port</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;/</span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">container</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">configuration</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">plugin</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">plugin</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;com.google.cloud.tools&lt;/</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;jib-maven-plugin&lt;/</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;3.4.0&lt;/</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">configuration</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">from</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">image</span><span style="color:#24292E;">&gt;eclipse-temurin:17-jre-alpine&lt;/</span><span style="color:#22863A;">image</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">from</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">to</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">image</span><span style="color:#24292E;">&gt;your-registry/app-name&lt;/</span><span style="color:#22863A;">image</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">tags</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">tag</span><span style="color:#24292E;">&gt;\${project.version}&lt;/</span><span style="color:#22863A;">tag</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">tag</span><span style="color:#24292E;">&gt;latest&lt;/</span><span style="color:#22863A;">tag</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">tags</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">to</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">container</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">jvmFlags</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">jvmFlag</span><span style="color:#24292E;">&gt;-Xms512m&lt;/</span><span style="color:#22863A;">jvmFlag</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">jvmFlag</span><span style="color:#24292E;">&gt;-Xmx512m&lt;/</span><span style="color:#22863A;">jvmFlag</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">jvmFlags</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">ports</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">                &lt;</span><span style="color:#22863A;">port</span><span style="color:#24292E;">&gt;8080&lt;/</span><span style="color:#22863A;">port</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;/</span><span style="color:#22863A;">ports</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">container</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">configuration</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">plugin</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><strong>构建命令：</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 构建并推送到镜像仓库</span></span>
<span class="line"><span style="color:#B392F0;">mvn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jib:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 仅构建到 Docker daemon（本地使用）</span></span>
<span class="line"><span style="color:#B392F0;">mvn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jib:dockerBuild</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 构建到指定 tar 文件（离线分发）</span></span>
<span class="line"><span style="color:#B392F0;">mvn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jib:buildTar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 构建并推送到镜像仓库</span></span>
<span class="line"><span style="color:#6F42C1;">mvn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jib:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 仅构建到 Docker daemon（本地使用）</span></span>
<span class="line"><span style="color:#6F42C1;">mvn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jib:dockerBuild</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 构建到指定 tar 文件（离线分发）</span></span>
<span class="line"><span style="color:#6F42C1;">mvn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jib:buildTar</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>Jib 优势：</strong></p><ul><li>无需 Docker daemon，可在任何环境中构建</li><li>自动分层，优化缓存</li><li>与 Maven/Gradle 无缝集成</li><li>支持多种镜像仓库认证方式</li></ul><h3 id="镜像优化技巧" tabindex="-1">镜像优化技巧 <a class="header-anchor" href="#镜像优化技巧" aria-label="Permalink to &quot;镜像优化技巧&quot;">​</a></h3><p><strong>选择更小的基础镜像：</strong></p><div class="language-dockerfile vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 标准 JDK 镜像 (~300MB)</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> eclipse-temurin:17-jdk</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># JRE 镜像 (~180MB)</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> eclipse-temurin:17-jre</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Alpine + JRE (~120MB)</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> eclipse-temurin:17-jre-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Distroless (~100MB)</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> gcr.io/distroless/java17-debian12</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 标准 JDK 镜像 (~300MB)</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> eclipse-temurin:17-jdk</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># JRE 镜像 (~180MB)</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> eclipse-temurin:17-jre</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Alpine + JRE (~120MB)</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> eclipse-temurin:17-jre-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Distroless (~100MB)</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> gcr.io/distroless/java17-debian12</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>Distroless 镜像特点：</strong></p><ul><li>仅包含应用程序及其运行时依赖</li><li>不包含包管理器、shell、或其他非必要工具</li><li>攻击面最小化</li><li>需要额外处理调试和健康检查</li></ul><div class="language-dockerfile vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 使用 Distroless 镜像</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> maven:3.9-eclipse-temurin-17 </span><span style="color:#F97583;">AS</span><span style="color:#E1E4E8;"> builder</span></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /app</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> pom.xml .</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> mvn dependency:go-offline</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> src ./src</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> mvn clean package -DskipTests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> gcr.io/distroless/java17-debian12</span></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /app</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> --from=builder /app/target/*.jar app.jar</span></span>
<span class="line"><span style="color:#F97583;">EXPOSE</span><span style="color:#E1E4E8;"> 8080</span></span>
<span class="line"><span style="color:#F97583;">ENTRYPOINT</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;java&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;-jar&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;app.jar&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 使用 Distroless 镜像</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> maven:3.9-eclipse-temurin-17 </span><span style="color:#D73A49;">AS</span><span style="color:#24292E;"> builder</span></span>
<span class="line"><span style="color:#D73A49;">WORKDIR</span><span style="color:#24292E;"> /app</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> pom.xml .</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> mvn dependency:go-offline</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> src ./src</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> mvn clean package -DskipTests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> gcr.io/distroless/java17-debian12</span></span>
<span class="line"><span style="color:#D73A49;">WORKDIR</span><span style="color:#24292E;"> /app</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> --from=builder /app/target/*.jar app.jar</span></span>
<span class="line"><span style="color:#D73A49;">EXPOSE</span><span style="color:#24292E;"> 8080</span></span>
<span class="line"><span style="color:#D73A49;">ENTRYPOINT</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;java&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;-jar&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;app.jar&quot;</span><span style="color:#24292E;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>调试 Distroless 容器：</strong></p><p>由于 Distroless 镜像没有 shell，调试需要使用：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 使用 debug 镜像</span></span>
<span class="line"><span style="color:#B392F0;">FROM</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gcr.io/distroless/java17-debian12:debug</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 或者在运行时附加调试容器</span></span>
<span class="line"><span style="color:#B392F0;">kubectl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">debug</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pod-name</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--image=busybox</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--target=app-container</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 使用 debug 镜像</span></span>
<span class="line"><span style="color:#6F42C1;">FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gcr.io/distroless/java17-debian12:debug</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 或者在运行时附加调试容器</span></span>
<span class="line"><span style="color:#6F42C1;">kubectl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">debug</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pod-name</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--image=busybox</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--target=app-container</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>使用 Spring Boot 的 AOT 编译优化：</strong></p><p>Spring Boot 3.0+ 支持 AOT（Ahead-of-Time）编译，配合 GraalVM Native Image 可以显著减小镜像大小和启动时间：</p><div class="language-dockerfile vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> ghcr.io/graalvm/jdk:ol8-java17 </span><span style="color:#F97583;">AS</span><span style="color:#E1E4E8;"> builder</span></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /app</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> . .</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> ./mvnw native:compile -Pnative</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> gcr.io/distroless/java-base-debian12:latest</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> --from=builder /app/target/app /app/app</span></span>
<span class="line"><span style="color:#F97583;">EXPOSE</span><span style="color:#E1E4E8;"> 8080</span></span>
<span class="line"><span style="color:#F97583;">ENTRYPOINT</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;/app/app&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> ghcr.io/graalvm/jdk:ol8-java17 </span><span style="color:#D73A49;">AS</span><span style="color:#24292E;"> builder</span></span>
<span class="line"><span style="color:#D73A49;">WORKDIR</span><span style="color:#24292E;"> /app</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> . .</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> ./mvnw native:compile -Pnative</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> gcr.io/distroless/java-base-debian12:latest</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> --from=builder /app/target/app /app/app</span></span>
<span class="line"><span style="color:#D73A49;">EXPOSE</span><span style="color:#24292E;"> 8080</span></span>
<span class="line"><span style="color:#D73A49;">ENTRYPOINT</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;/app/app&quot;</span><span style="color:#24292E;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Native Image 的优势：</p><ul><li>启动时间从秒级降到毫秒级</li><li>内存占用降低 50-80%</li><li>镜像大小可以压缩到 50MB 以内</li><li>无需 JVM，直接作为系统可执行文件运行</li></ul><hr><h2 id="环境管理" tabindex="-1">环境管理 <a class="header-anchor" href="#环境管理" aria-label="Permalink to &quot;环境管理&quot;">​</a></h2><h3 id="多环境配置" tabindex="-1">多环境配置 <a class="header-anchor" href="#多环境配置" aria-label="Permalink to &quot;多环境配置&quot;">​</a></h3><p>Java 项目通常需要管理多套环境配置，常用的方案：</p><p><strong>方案一：Spring Profile</strong></p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># application.yml</span></span>
<span class="line"><span style="color:#85E89D;">spring</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">profiles</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">active</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${SPRING_PROFILES_ACTIVE:dev}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#6A737D;"># application-dev.yml</span></span>
<span class="line"><span style="color:#85E89D;">spring</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">datasource</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">jdbc:mysql://localhost:3306/dev_db</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">username</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">dev_user</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">password</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">dev_pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#6A737D;"># application-prod.yml</span></span>
<span class="line"><span style="color:#85E89D;">spring</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">datasource</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">jdbc:mysql://prod-db-host:3306/prod_db</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">username</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${DB_USERNAME}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">password</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${DB_PASSWORD}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># application.yml</span></span>
<span class="line"><span style="color:#22863A;">spring</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">profiles</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">active</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${SPRING_PROFILES_ACTIVE:dev}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#6A737D;"># application-dev.yml</span></span>
<span class="line"><span style="color:#22863A;">spring</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">datasource</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">jdbc:mysql://localhost:3306/dev_db</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">username</span><span style="color:#24292E;">: </span><span style="color:#032F62;">dev_user</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">password</span><span style="color:#24292E;">: </span><span style="color:#032F62;">dev_pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#6A737D;"># application-prod.yml</span></span>
<span class="line"><span style="color:#22863A;">spring</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">datasource</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">jdbc:mysql://prod-db-host:3306/prod_db</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">username</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${DB_USERNAME}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">password</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${DB_PASSWORD}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>启动时通过环境变量指定 Profile：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">java</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-jar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app.jar</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--spring.profiles.active=prod</span></span>
<span class="line"><span style="color:#6A737D;"># 或</span></span>
<span class="line"><span style="color:#E1E4E8;">SPRING_PROFILES_ACTIVE</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">prod</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">java</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-jar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app.jar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">java</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-jar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app.jar</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--spring.profiles.active=prod</span></span>
<span class="line"><span style="color:#6A737D;"># 或</span></span>
<span class="line"><span style="color:#24292E;">SPRING_PROFILES_ACTIVE</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">prod</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">java</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-jar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app.jar</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>方案二：Maven Profile + 资源过滤</strong></p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">profiles</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">profile</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">&gt;dev&lt;/</span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">activation</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">activeByDefault</span><span style="color:#E1E4E8;">&gt;true&lt;/</span><span style="color:#85E89D;">activeByDefault</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">activation</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">properties</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">build.profile.id</span><span style="color:#E1E4E8;">&gt;dev&lt;/</span><span style="color:#85E89D;">build.profile.id</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">properties</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">profile</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">profile</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">&gt;prod&lt;/</span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">properties</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">build.profile.id</span><span style="color:#E1E4E8;">&gt;prod&lt;/</span><span style="color:#85E89D;">build.profile.id</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">properties</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">profile</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">profiles</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">profiles</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">profile</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">id</span><span style="color:#24292E;">&gt;dev&lt;/</span><span style="color:#22863A;">id</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">activation</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">activeByDefault</span><span style="color:#24292E;">&gt;true&lt;/</span><span style="color:#22863A;">activeByDefault</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">activation</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">properties</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">build.profile.id</span><span style="color:#24292E;">&gt;dev&lt;/</span><span style="color:#22863A;">build.profile.id</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">properties</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">profile</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">profile</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">id</span><span style="color:#24292E;">&gt;prod&lt;/</span><span style="color:#22863A;">id</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">properties</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">build.profile.id</span><span style="color:#24292E;">&gt;prod&lt;/</span><span style="color:#22863A;">build.profile.id</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">properties</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">profile</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">profiles</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>配合 Maven 资源过滤，在构建时替换占位符：</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># application.yml (模板)</span></span>
<span class="line"><span style="color:#85E89D;">database</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">jdbc:mysql://\${db.host}:3306/app_db</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">username</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${db.username}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># application.yml (模板)</span></span>
<span class="line"><span style="color:#22863A;">database</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">jdbc:mysql://\${db.host}:3306/app_db</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">username</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${db.username}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 构建不同环境的包</span></span>
<span class="line"><span style="color:#B392F0;">mvn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clean</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-Pdev</span></span>
<span class="line"><span style="color:#B392F0;">mvn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clean</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-Pprod</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 构建不同环境的包</span></span>
<span class="line"><span style="color:#6F42C1;">mvn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clean</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-Pdev</span></span>
<span class="line"><span style="color:#6F42C1;">mvn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clean</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-Pprod</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>方案三：外部配置中心</strong></p><p>生产环境推荐使用配置中心统一管理配置：</p><table><thead><tr><th>配置中心</th><th>说明</th></tr></thead><tbody><tr><td>Spring Cloud Config</td><td>基于 Git 的配置中心</td></tr><tr><td>Alibaba Nacos</td><td>配置注册一体化</td></tr><tr><td>HashiCorp Consul</td><td>服务发现 + 配置管理</td></tr><tr><td>Apache Apollo</td><td>携程开源的配置中心</td></tr></tbody></table><h3 id="ci-cd-中的配置管理" tabindex="-1">CI/CD 中的配置管理 <a class="header-anchor" href="#ci-cd-中的配置管理" aria-label="Permalink to &quot;CI/CD 中的配置管理&quot;">​</a></h3><p><strong>GitHub Secrets 安全管理：</strong></p><p>敏感信息不应硬编码在代码中，应通过 CI/CD 平台提供的 Secrets 功能注入：</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build with secrets</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">env</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">DB_PASSWORD</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.DB_PASSWORD }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">API_KEY</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.API_KEY }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">MAVEN_SETTINGS</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.MAVEN_SETTINGS_XML }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">      # 将 Maven settings 写入文件</span></span>
<span class="line"><span style="color:#9ECBFF;">      echo &quot;$MAVEN_SETTINGS&quot; &gt; ~/.m2/settings.xml</span></span>
<span class="line"><span style="color:#9ECBFF;">      mvn clean package</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build with secrets</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">env</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">DB_PASSWORD</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.DB_PASSWORD }}</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">API_KEY</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.API_KEY }}</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">MAVEN_SETTINGS</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.MAVEN_SETTINGS_XML }}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">      # 将 Maven settings 写入文件</span></span>
<span class="line"><span style="color:#032F62;">      echo &quot;$MAVEN_SETTINGS&quot; &gt; ~/.m2/settings.xml</span></span>
<span class="line"><span style="color:#032F62;">      mvn clean package</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>常见需要保密的配置：</strong></p><ul><li>数据库连接串和密码</li><li>API 密钥和 Token</li><li>JWT 签名密钥</li><li>TLS/SSL 证书私钥</li><li>第三方服务的认证凭据</li></ul><p><strong>环境变量管理策略：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">开发环境 （dev）</span></span>
<span class="line"><span style="color:#e1e4e8;">  ├─ 默认配置写在 application-dev.yml 中</span></span>
<span class="line"><span style="color:#e1e4e8;">  ├─ 敏感信息使用本地 .env 文件（不提交到 Git）</span></span>
<span class="line"><span style="color:#e1e4e8;">  └─ CI 中通过组织级别的 Secrets 注入</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">测试环境 （staging）</span></span>
<span class="line"><span style="color:#e1e4e8;">  ├─ 使用与生产环境尽可能一致的配置</span></span>
<span class="line"><span style="color:#e1e4e8;">  ├─ 数据使用脱敏后的生产数据副本</span></span>
<span class="line"><span style="color:#e1e4e8;">  └─ 所有秘密通过 GitHub Environments Secrets 管理</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">生产环境 （prod）</span></span>
<span class="line"><span style="color:#e1e4e8;">  ├─ 所有配置通过环境变量或配置中心注入</span></span>
<span class="line"><span style="color:#e1e4e8;">  ├─ 不同实例使用不同的密钥</span></span>
<span class="line"><span style="color:#e1e4e8;">  └─ 开启自动轮转机制</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">开发环境 （dev）</span></span>
<span class="line"><span style="color:#24292e;">  ├─ 默认配置写在 application-dev.yml 中</span></span>
<span class="line"><span style="color:#24292e;">  ├─ 敏感信息使用本地 .env 文件（不提交到 Git）</span></span>
<span class="line"><span style="color:#24292e;">  └─ CI 中通过组织级别的 Secrets 注入</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">测试环境 （staging）</span></span>
<span class="line"><span style="color:#24292e;">  ├─ 使用与生产环境尽可能一致的配置</span></span>
<span class="line"><span style="color:#24292e;">  ├─ 数据使用脱敏后的生产数据副本</span></span>
<span class="line"><span style="color:#24292e;">  └─ 所有秘密通过 GitHub Environments Secrets 管理</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">生产环境 （prod）</span></span>
<span class="line"><span style="color:#24292e;">  ├─ 所有配置通过环境变量或配置中心注入</span></span>
<span class="line"><span style="color:#24292e;">  ├─ 不同实例使用不同的密钥</span></span>
<span class="line"><span style="color:#24292e;">  └─ 开启自动轮转机制</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="数据库迁移的-ci-cd-处理" tabindex="-1">数据库迁移的 CI/CD 处理 <a class="header-anchor" href="#数据库迁移的-ci-cd-处理" aria-label="Permalink to &quot;数据库迁移的 CI/CD 处理&quot;">​</a></h3><p>Flyway 是 Java 生态中最流行的数据库迁移工具，它使用版本化的 SQL 脚本管理数据库 schema 变更。</p><p><strong>Flyway 集成 Maven：</strong></p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">plugin</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;org.flywaydb&lt;/</span><span style="color:#85E89D;">groupId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;flyway-maven-plugin&lt;/</span><span style="color:#85E89D;">artifactId</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">&gt;9.22.0&lt;/</span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">configuration</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">url</span><span style="color:#E1E4E8;">&gt;\${flyway.url}&lt;/</span><span style="color:#85E89D;">url</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">user</span><span style="color:#E1E4E8;">&gt;\${flyway.user}&lt;/</span><span style="color:#85E89D;">user</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">password</span><span style="color:#E1E4E8;">&gt;\${flyway.password}&lt;/</span><span style="color:#85E89D;">password</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">configuration</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">plugin</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">plugin</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;org.flywaydb&lt;/</span><span style="color:#22863A;">groupId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;flyway-maven-plugin&lt;/</span><span style="color:#22863A;">artifactId</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;9.22.0&lt;/</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">configuration</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">url</span><span style="color:#24292E;">&gt;\${flyway.url}&lt;/</span><span style="color:#22863A;">url</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">user</span><span style="color:#24292E;">&gt;\${flyway.user}&lt;/</span><span style="color:#22863A;">user</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">password</span><span style="color:#24292E;">&gt;\${flyway.password}&lt;/</span><span style="color:#22863A;">password</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">configuration</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">plugin</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>迁移脚本命名规范：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">src/main/resources/db/migration/</span></span>
<span class="line"><span style="color:#e1e4e8;">├── V1__create_user_table.sql</span></span>
<span class="line"><span style="color:#e1e4e8;">├── V1.1__add_email_to_user.sql</span></span>
<span class="line"><span style="color:#e1e4e8;">├── V2__create_order_table.sql</span></span>
<span class="line"><span style="color:#e1e4e8;">├── V2.1__add_index_to_order.sql</span></span>
<span class="line"><span style="color:#e1e4e8;">├── V3__add_order_status.sql</span></span>
<span class="line"><span style="color:#e1e4e8;">└── R__daily_cleanup.sql  -- 可重复执行的脚本</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">src/main/resources/db/migration/</span></span>
<span class="line"><span style="color:#24292e;">├── V1__create_user_table.sql</span></span>
<span class="line"><span style="color:#24292e;">├── V1.1__add_email_to_user.sql</span></span>
<span class="line"><span style="color:#24292e;">├── V2__create_order_table.sql</span></span>
<span class="line"><span style="color:#24292e;">├── V2.1__add_index_to_order.sql</span></span>
<span class="line"><span style="color:#24292e;">├── V3__add_order_status.sql</span></span>
<span class="line"><span style="color:#24292e;">└── R__daily_cleanup.sql  -- 可重复执行的脚本</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>CI 中的数据库迁移流程：</strong></p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Database Migration CI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">paths</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&#39;src/main/resources/db/migration/**&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">validate-migration</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">mysql</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mysql:8.0</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">env</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">MYSQL_ROOT_PASSWORD</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">testpass</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">MYSQL_DATABASE</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">testdb</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          - </span><span style="color:#9ECBFF;">3306:3306</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">options</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">&gt;-</span></span>
<span class="line"><span style="color:#9ECBFF;">          --health-cmd=&quot;mysqladmin ping&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">          --health-interval=10s</span></span>
<span class="line"><span style="color:#9ECBFF;">          --health-timeout=5s</span></span>
<span class="line"><span style="color:#9ECBFF;">          --health-retries=5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Set up JDK 17</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">java-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;17&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">distribution</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;temurin&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">cache</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">maven</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Validate migrations</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mvn flyway:validate flyway:migrate</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">env</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">flyway.url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">jdbc:mysql://localhost:3306/testdb</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">flyway.user</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">root</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">flyway.password</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">testpass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Run integration tests</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mvn test -Pintegration-test</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">env</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">SPRING_DATASOURCE_URL</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">jdbc:mysql://localhost:3306/testdb</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">SPRING_DATASOURCE_USERNAME</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">root</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">SPRING_DATASOURCE_PASSWORD</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">testpass</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Database Migration CI</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">main</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">paths</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&#39;src/main/resources/db/migration/**&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">validate-migration</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">mysql</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mysql:8.0</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">env</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">MYSQL_ROOT_PASSWORD</span><span style="color:#24292E;">: </span><span style="color:#032F62;">testpass</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">MYSQL_DATABASE</span><span style="color:#24292E;">: </span><span style="color:#032F62;">testdb</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          - </span><span style="color:#032F62;">3306:3306</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">options</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">&gt;-</span></span>
<span class="line"><span style="color:#032F62;">          --health-cmd=&quot;mysqladmin ping&quot;</span></span>
<span class="line"><span style="color:#032F62;">          --health-interval=10s</span></span>
<span class="line"><span style="color:#032F62;">          --health-timeout=5s</span></span>
<span class="line"><span style="color:#032F62;">          --health-retries=5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Set up JDK 17</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">java-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;17&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">distribution</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;temurin&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">cache</span><span style="color:#24292E;">: </span><span style="color:#032F62;">maven</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Validate migrations</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mvn flyway:validate flyway:migrate</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">env</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">flyway.url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">jdbc:mysql://localhost:3306/testdb</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">flyway.user</span><span style="color:#24292E;">: </span><span style="color:#032F62;">root</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">flyway.password</span><span style="color:#24292E;">: </span><span style="color:#032F62;">testpass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Run integration tests</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mvn test -Pintegration-test</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">env</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">SPRING_DATASOURCE_URL</span><span style="color:#24292E;">: </span><span style="color:#032F62;">jdbc:mysql://localhost:3306/testdb</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">SPRING_DATASOURCE_USERNAME</span><span style="color:#24292E;">: </span><span style="color:#032F62;">root</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">SPRING_DATASOURCE_PASSWORD</span><span style="color:#24292E;">: </span><span style="color:#032F62;">testpass</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p><strong>CI/CD 中数据库迁移的最佳实践：</strong></p><ol><li><strong>迁移脚本向前兼容</strong>：新的迁移不应破坏正在运行的旧版本应用，确保零停机部署</li><li><strong>不可逆迁移需谨慎</strong>：破坏性变更（如删除列）应分多个版本逐步进行</li><li><strong>在 CI 中验证迁移</strong>：每次提交都使用独立的数据库实例验证迁移脚本</li><li><strong>迁移即代码</strong>：所有数据库变更都通过迁移脚本管理，禁止手动修改数据库</li><li><strong>回滚策略</strong>：虽然 Flyway 不支持自动回滚，但应准备逆向迁移脚本</li><li><strong>PR 审核</strong>：数据库迁移脚本应和代码一起经过 Code Review</li></ol><h3 id="ci-cd-安全最佳实践" tabindex="-1">CI/CD 安全最佳实践 <a class="header-anchor" href="#ci-cd-安全最佳实践" aria-label="Permalink to &quot;CI/CD 安全最佳实践&quot;">​</a></h3><p><strong>Secrets 管理：</strong></p><ul><li>使用 CI/CD 平台提供的 Secrets 管理功能</li><li>定期轮换密钥</li><li>不要将 Secrets 输出到构建日志中</li><li>使用专门的 CI/CD 服务账号，权限最小化</li></ul><p><strong>依赖安全扫描：</strong></p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Check for vulnerable dependencies</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mvn org.owasp:dependency-check-maven:check</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Run Trivy scan on Docker image</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">aquasecurity/trivy-action@master</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">image-ref</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;your-app:latest&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">format</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;sarif&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">output</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;trivy-results.sarif&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Check for vulnerable dependencies</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mvn org.owasp:dependency-check-maven:check</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Run Trivy scan on Docker image</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">aquasecurity/trivy-action@master</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">image-ref</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;your-app:latest&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">format</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;sarif&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">output</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;trivy-results.sarif&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>供应链安全：</strong></p><ul><li>锁定依赖版本，使用 Maven Enforcer 插件禁止 SNAPSHOT 依赖</li><li>验证依赖的签名和校验和</li><li>定期扫描已知漏洞</li><li>使用 SBOM（Software Bill of Materials）追踪依赖</li></ul><hr><h2 id="部署方式" tabindex="-1">部署方式 <a class="header-anchor" href="#部署方式" aria-label="Permalink to &quot;部署方式&quot;">​</a></h2><h3 id="部署到虚拟机-scp-ssh" tabindex="-1">部署到虚拟机（SCP + SSH） <a class="header-anchor" href="#部署到虚拟机-scp-ssh" aria-label="Permalink to &quot;部署到虚拟机（SCP + SSH）&quot;">​</a></h3><p>传统的部署方式，将打包好的应用通过 SCP 传输到服务器，然后通过 SSH 启动：</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy to VM</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;v*&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">deploy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Set up JDK 17</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">java-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;17&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">distribution</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;temurin&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">cache</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">maven</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build application</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mvn clean package -DskipTests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">SCP to server</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">appleboy/scp-action@v0.1.7</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">host</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.DEPLOY_HOST }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">username</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.DEPLOY_USER }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">key</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.DEPLOY_SSH_KEY }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">source</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;target/app.jar&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">target</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/opt/app/tmp/&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">strip_components</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">SSH restart application</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">appleboy/ssh-action@v1.0.3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">host</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.DEPLOY_HOST }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">username</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.DEPLOY_USER }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">key</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.DEPLOY_SSH_KEY }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">            # 备份旧版本</span></span>
<span class="line"><span style="color:#9ECBFF;">            TIMESTAMP=$(date +%Y%m%d%H%M%S)</span></span>
<span class="line"><span style="color:#9ECBFF;">            cp /opt/app/app.jar /opt/app/backups/app-$TIMESTAMP.jar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">            # 替换新版本</span></span>
<span class="line"><span style="color:#9ECBFF;">            mv /opt/app/tmp/app.jar /opt/app/app.jar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">            # 重启应用</span></span>
<span class="line"><span style="color:#9ECBFF;">            sudo systemctl restart myapp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">            # 健康检查</span></span>
<span class="line"><span style="color:#9ECBFF;">            sleep 15</span></span>
<span class="line"><span style="color:#9ECBFF;">            STATUS=$(curl -s -o /dev/null -w &quot;%{http_code}&quot; http://localhost:8080/actuator/health)</span></span>
<span class="line"><span style="color:#9ECBFF;">            if [ &quot;$STATUS&quot; != &quot;200&quot; ]; then</span></span>
<span class="line"><span style="color:#9ECBFF;">              echo &quot;Health check failed!&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">              exit 1</span></span>
<span class="line"><span style="color:#9ECBFF;">            fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">            # 清理</span></span>
<span class="line"><span style="color:#9ECBFF;">            find /opt/app/backups -name &quot;*.jar&quot; -mtime +30 -delete</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy to VM</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">tags</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;v*&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">deploy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Set up JDK 17</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-java@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">java-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;17&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">distribution</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;temurin&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">cache</span><span style="color:#24292E;">: </span><span style="color:#032F62;">maven</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build application</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mvn clean package -DskipTests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">SCP to server</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">appleboy/scp-action@v0.1.7</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">host</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.DEPLOY_HOST }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">username</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.DEPLOY_USER }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">key</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.DEPLOY_SSH_KEY }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">source</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;target/app.jar&quot;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">target</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/opt/app/tmp/&quot;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">strip_components</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">SSH restart application</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">appleboy/ssh-action@v1.0.3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">host</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.DEPLOY_HOST }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">username</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.DEPLOY_USER }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">key</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.DEPLOY_SSH_KEY }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">script</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">            # 备份旧版本</span></span>
<span class="line"><span style="color:#032F62;">            TIMESTAMP=$(date +%Y%m%d%H%M%S)</span></span>
<span class="line"><span style="color:#032F62;">            cp /opt/app/app.jar /opt/app/backups/app-$TIMESTAMP.jar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">            # 替换新版本</span></span>
<span class="line"><span style="color:#032F62;">            mv /opt/app/tmp/app.jar /opt/app/app.jar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">            # 重启应用</span></span>
<span class="line"><span style="color:#032F62;">            sudo systemctl restart myapp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">            # 健康检查</span></span>
<span class="line"><span style="color:#032F62;">            sleep 15</span></span>
<span class="line"><span style="color:#032F62;">            STATUS=$(curl -s -o /dev/null -w &quot;%{http_code}&quot; http://localhost:8080/actuator/health)</span></span>
<span class="line"><span style="color:#032F62;">            if [ &quot;$STATUS&quot; != &quot;200&quot; ]; then</span></span>
<span class="line"><span style="color:#032F62;">              echo &quot;Health check failed!&quot;</span></span>
<span class="line"><span style="color:#032F62;">              exit 1</span></span>
<span class="line"><span style="color:#032F62;">            fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">            # 清理</span></span>
<span class="line"><span style="color:#032F62;">            find /opt/app/backups -name &quot;*.jar&quot; -mtime +30 -delete</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><p><strong>使用 systemd 管理 Java 应用：</strong></p><div class="language-ini vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">[Unit]</span></span>
<span class="line"><span style="color:#F97583;">Description</span><span style="color:#E1E4E8;">=My Java Application</span></span>
<span class="line"><span style="color:#F97583;">After</span><span style="color:#E1E4E8;">=network.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">[Service]</span></span>
<span class="line"><span style="color:#F97583;">Type</span><span style="color:#E1E4E8;">=simple</span></span>
<span class="line"><span style="color:#F97583;">User</span><span style="color:#E1E4E8;">=appuser</span></span>
<span class="line"><span style="color:#F97583;">WorkingDirectory</span><span style="color:#E1E4E8;">=/opt/app</span></span>
<span class="line"><span style="color:#F97583;">ExecStart</span><span style="color:#E1E4E8;">=/usr/bin/java \\</span></span>
<span class="line"><span style="color:#E1E4E8;">  -Xms512m -Xmx1024m \\</span></span>
<span class="line"><span style="color:#E1E4E8;">  -jar /opt/app/app.jar \\</span></span>
<span class="line"><span style="color:#E1E4E8;">  --</span><span style="color:#F97583;">spring.profiles.active</span><span style="color:#E1E4E8;">=prod</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">Restart</span><span style="color:#E1E4E8;">=always</span></span>
<span class="line"><span style="color:#F97583;">RestartSec</span><span style="color:#E1E4E8;">=10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">Environment</span><span style="color:#E1E4E8;">=</span><span style="color:#F97583;">DB_URL</span><span style="color:#E1E4E8;">=jdbc:mysql://localhost:3306/prod_db</span></span>
<span class="line"><span style="color:#F97583;">Environment</span><span style="color:#E1E4E8;">=</span><span style="color:#F97583;">SPRING_PROFILES_ACTIVE</span><span style="color:#E1E4E8;">=prod</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">[Install]</span></span>
<span class="line"><span style="color:#F97583;">WantedBy</span><span style="color:#E1E4E8;">=multi-user.target</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">[Unit]</span></span>
<span class="line"><span style="color:#D73A49;">Description</span><span style="color:#24292E;">=My Java Application</span></span>
<span class="line"><span style="color:#D73A49;">After</span><span style="color:#24292E;">=network.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">[Service]</span></span>
<span class="line"><span style="color:#D73A49;">Type</span><span style="color:#24292E;">=simple</span></span>
<span class="line"><span style="color:#D73A49;">User</span><span style="color:#24292E;">=appuser</span></span>
<span class="line"><span style="color:#D73A49;">WorkingDirectory</span><span style="color:#24292E;">=/opt/app</span></span>
<span class="line"><span style="color:#D73A49;">ExecStart</span><span style="color:#24292E;">=/usr/bin/java \\</span></span>
<span class="line"><span style="color:#24292E;">  -Xms512m -Xmx1024m \\</span></span>
<span class="line"><span style="color:#24292E;">  -jar /opt/app/app.jar \\</span></span>
<span class="line"><span style="color:#24292E;">  --</span><span style="color:#D73A49;">spring.profiles.active</span><span style="color:#24292E;">=prod</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">Restart</span><span style="color:#24292E;">=always</span></span>
<span class="line"><span style="color:#D73A49;">RestartSec</span><span style="color:#24292E;">=10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">Environment</span><span style="color:#24292E;">=</span><span style="color:#D73A49;">DB_URL</span><span style="color:#24292E;">=jdbc:mysql://localhost:3306/prod_db</span></span>
<span class="line"><span style="color:#D73A49;">Environment</span><span style="color:#24292E;">=</span><span style="color:#D73A49;">SPRING_PROFILES_ACTIVE</span><span style="color:#24292E;">=prod</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">[Install]</span></span>
<span class="line"><span style="color:#D73A49;">WantedBy</span><span style="color:#24292E;">=multi-user.target</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="部署到-kubernetes" tabindex="-1">部署到 Kubernetes <a class="header-anchor" href="#部署到-kubernetes" aria-label="Permalink to &quot;部署到 Kubernetes&quot;">​</a></h3><p><strong>使用 kubectl 直接部署：</strong></p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy to Kubernetes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">workflow_run</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">workflows</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;Docker Build&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">types</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">completed</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">deploy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Set up kubectl</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">azure/setup-kubectl@v4</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;latest&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Configure K8s context</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">          mkdir -p $HOME/.kube</span></span>
<span class="line"><span style="color:#9ECBFF;">          echo &quot;\${{ secrets.KUBE_CONFIG }}&quot; | base64 -d &gt; $HOME/.kube/config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy to Kubernetes</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">          # 使用环境变量替换模板中的占位符</span></span>
<span class="line"><span style="color:#9ECBFF;">          export IMAGE_TAG=\${{ github.sha }}</span></span>
<span class="line"><span style="color:#9ECBFF;">          envsubst &lt; k8s/deployment.yaml | kubectl apply -f -</span></span>
<span class="line"><span style="color:#9ECBFF;">          kubectl apply -f k8s/service.yaml</span></span>
<span class="line"><span style="color:#9ECBFF;">          kubectl rollout status deployment/myapp --timeout=300s</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy to Kubernetes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">workflow_run</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">workflows</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;Docker Build&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">types</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">completed</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">deploy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Set up kubectl</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">azure/setup-kubectl@v4</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;latest&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Configure K8s context</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">          mkdir -p $HOME/.kube</span></span>
<span class="line"><span style="color:#032F62;">          echo &quot;\${{ secrets.KUBE_CONFIG }}&quot; | base64 -d &gt; $HOME/.kube/config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy to Kubernetes</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">          # 使用环境变量替换模板中的占位符</span></span>
<span class="line"><span style="color:#032F62;">          export IMAGE_TAG=\${{ github.sha }}</span></span>
<span class="line"><span style="color:#032F62;">          envsubst &lt; k8s/deployment.yaml | kubectl apply -f -</span></span>
<span class="line"><span style="color:#032F62;">          kubectl apply -f k8s/service.yaml</span></span>
<span class="line"><span style="color:#032F62;">          kubectl rollout status deployment/myapp --timeout=300s</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p><strong>Kubernetes 部署清单示例：</strong></p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># k8s/deployment.yaml</span></span>
<span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">apps/v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deployment</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">myapp</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">namespace</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">production</span></span>
<span class="line"><span style="color:#85E89D;">spec</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">replicas</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">strategy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">RollingUpdate</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">rollingUpdate</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">maxSurge</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">maxUnavailable</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">selector</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">matchLabels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">myapp</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">labels</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">app</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">myapp</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">spec</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">containers</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">myapp</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">your-registry/myapp:\${IMAGE_TAG}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#85E89D;">containerPort</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8080</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">env</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">SPRING_PROFILES_ACTIVE</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">value</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;prod&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">DB_URL</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">valueFrom</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">secretKeyRef</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">db-secret</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#85E89D;">key</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">url</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">readinessProbe</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">httpGet</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/actuator/health/readiness</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">port</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8080</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">initialDelaySeconds</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">periodSeconds</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">livenessProbe</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">httpGet</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/actuator/health/liveness</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">port</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8080</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">initialDelaySeconds</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">60</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">periodSeconds</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">resources</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">requests</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">memory</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;512Mi&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">cpu</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;250m&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">limits</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">memory</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1Gi&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">cpu</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;500m&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># k8s/deployment.yaml</span></span>
<span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">apps/v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deployment</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">myapp</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">namespace</span><span style="color:#24292E;">: </span><span style="color:#032F62;">production</span></span>
<span class="line"><span style="color:#22863A;">spec</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">replicas</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">strategy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">RollingUpdate</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">rollingUpdate</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">maxSurge</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">maxUnavailable</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">selector</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">matchLabels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">myapp</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">template</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">labels</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">app</span><span style="color:#24292E;">: </span><span style="color:#032F62;">myapp</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">spec</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">containers</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">myapp</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">your-registry/myapp:\${IMAGE_TAG}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#22863A;">containerPort</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">8080</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">env</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">SPRING_PROFILES_ACTIVE</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">value</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;prod&quot;</span></span>
<span class="line"><span style="color:#24292E;">            - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">DB_URL</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">valueFrom</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">secretKeyRef</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">db-secret</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#22863A;">key</span><span style="color:#24292E;">: </span><span style="color:#032F62;">url</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">readinessProbe</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">httpGet</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/actuator/health/readiness</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">port</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">8080</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">initialDelaySeconds</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">periodSeconds</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">livenessProbe</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">httpGet</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/actuator/health/liveness</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">port</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">8080</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">initialDelaySeconds</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">60</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">periodSeconds</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">resources</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">requests</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">memory</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;512Mi&quot;</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">cpu</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;250m&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">limits</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">memory</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1Gi&quot;</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">cpu</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;500m&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p><strong>使用 Helm 部署：</strong></p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy with Helm</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">    helm upgrade --install myapp ./charts/myapp \\</span></span>
<span class="line"><span style="color:#9ECBFF;">      --namespace production \\</span></span>
<span class="line"><span style="color:#9ECBFF;">      --set image.tag=\${{ github.sha }} \\</span></span>
<span class="line"><span style="color:#9ECBFF;">      --set replicaCount=3 \\</span></span>
<span class="line"><span style="color:#9ECBFF;">      --set resources.requests.memory=512Mi \\</span></span>
<span class="line"><span style="color:#9ECBFF;">      --wait --timeout 5m</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy with Helm</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">    helm upgrade --install myapp ./charts/myapp \\</span></span>
<span class="line"><span style="color:#032F62;">      --namespace production \\</span></span>
<span class="line"><span style="color:#032F62;">      --set image.tag=\${{ github.sha }} \\</span></span>
<span class="line"><span style="color:#032F62;">      --set replicaCount=3 \\</span></span>
<span class="line"><span style="color:#032F62;">      --set resources.requests.memory=512Mi \\</span></span>
<span class="line"><span style="color:#032F62;">      --wait --timeout 5m</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Helm 的 Chart 结构示例：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">charts/myapp/</span></span>
<span class="line"><span style="color:#e1e4e8;">├── Chart.yaml          # Chart 元数据</span></span>
<span class="line"><span style="color:#e1e4e8;">├── values.yaml         # 默认配置值</span></span>
<span class="line"><span style="color:#e1e4e8;">├── values-prod.yaml    # 生产环境覆盖配置</span></span>
<span class="line"><span style="color:#e1e4e8;">└── templates/</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── deployment.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── service.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── ingress.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── configmap.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">    └── _helpers.tpl     # 模板辅助函数</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">charts/myapp/</span></span>
<span class="line"><span style="color:#24292e;">├── Chart.yaml          # Chart 元数据</span></span>
<span class="line"><span style="color:#24292e;">├── values.yaml         # 默认配置值</span></span>
<span class="line"><span style="color:#24292e;">├── values-prod.yaml    # 生产环境覆盖配置</span></span>
<span class="line"><span style="color:#24292e;">└── templates/</span></span>
<span class="line"><span style="color:#24292e;">    ├── deployment.yaml</span></span>
<span class="line"><span style="color:#24292e;">    ├── service.yaml</span></span>
<span class="line"><span style="color:#24292e;">    ├── ingress.yaml</span></span>
<span class="line"><span style="color:#24292e;">    ├── configmap.yaml</span></span>
<span class="line"><span style="color:#24292e;">    └── _helpers.tpl     # 模板辅助函数</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="蓝绿部署" tabindex="-1">蓝绿部署 <a class="header-anchor" href="#蓝绿部署" aria-label="Permalink to &quot;蓝绿部署&quot;">​</a></h3><p>蓝绿部署（Blue-Green Deployment）维护两套完全相同的生产环境（蓝环境和绿环境），通过切换流量来实现零停机部署。</p><p><strong>蓝绿部署流程：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">用户流量 → 负载均衡器</span></span>
<span class="line"><span style="color:#e1e4e8;">                 ↓</span></span>
<span class="line"><span style="color:#e1e4e8;">         ┌───────┴───────┐</span></span>
<span class="line"><span style="color:#e1e4e8;">         ↓               ↓</span></span>
<span class="line"><span style="color:#e1e4e8;">     蓝环境(v2)      绿环境(v1)</span></span>
<span class="line"><span style="color:#e1e4e8;">     [新版本]        [旧版本]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">用户流量 → 负载均衡器</span></span>
<span class="line"><span style="color:#24292e;">                 ↓</span></span>
<span class="line"><span style="color:#24292e;">         ┌───────┴───────┐</span></span>
<span class="line"><span style="color:#24292e;">         ↓               ↓</span></span>
<span class="line"><span style="color:#24292e;">     蓝环境(v2)      绿环境(v1)</span></span>
<span class="line"><span style="color:#24292e;">     [新版本]        [旧版本]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>部署步骤：</strong></p><ol><li>所有流量当前指向绿环境（旧版本）</li><li>在蓝环境部署新版本应用</li><li>对蓝环境进行健康检查和集成测试</li><li>将负载均衡器从绿环境切换到蓝环境</li><li>观察一段时间，如果出现问题则立即切回绿环境</li><li>确认无误后，释放绿环境资源</li></ol><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Blue-Green Deployment</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">workflow_dispatch</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">inputs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">required</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Version to deploy&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">deploy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Determine target environment</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">env</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">          # 检查当前活跃环境</span></span>
<span class="line"><span style="color:#9ECBFF;">          ACTIVE=$(kubectl get svc myapp -n production -o jsonpath=&#39;{.spec.selector.env}&#39;)</span></span>
<span class="line"><span style="color:#9ECBFF;">          if [ &quot;$ACTIVE&quot; == &quot;blue&quot; ]; then</span></span>
<span class="line"><span style="color:#9ECBFF;">            echo &quot;target=green&quot; &gt;&gt; $GITHUB_OUTPUT</span></span>
<span class="line"><span style="color:#9ECBFF;">            echo &quot;inactive=green&quot; &gt;&gt; $GITHUB_OUTPUT</span></span>
<span class="line"><span style="color:#9ECBFF;">          else</span></span>
<span class="line"><span style="color:#9ECBFF;">            echo &quot;target=blue&quot; &gt;&gt; $GITHUB_OUTPUT</span></span>
<span class="line"><span style="color:#9ECBFF;">            echo &quot;inactive=blue&quot; &gt;&gt; $GITHUB_OUTPUT</span></span>
<span class="line"><span style="color:#9ECBFF;">          fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy to \${{ steps.env.outputs.target }}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">          kubectl apply -f k8s/deployment-\${{ steps.env.outputs.target }}.yaml</span></span>
<span class="line"><span style="color:#9ECBFF;">          kubectl rollout status deployment/myapp-\${{ steps.env.outputs.target }} \\</span></span>
<span class="line"><span style="color:#9ECBFF;">            --namespace production --timeout=300s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Run smoke tests</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">          TARGET_URL=&quot;http://\${{ steps.env.outputs.target }}.myapp.internal/actuator/health&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">          curl -f --retry 3 --retry-delay 5 $TARGET_URL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Switch traffic</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">          kubectl patch svc myapp -n production \\</span></span>
<span class="line"><span style="color:#9ECBFF;">            -p &quot;{\\&quot;spec\\&quot;:{\\&quot;selector\\&quot;:{\\&quot;env\\&quot;:\\&quot;\${{ steps.env.outputs.target }}\\&quot;}}}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Verify all traffic healthy</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">          sleep 10</span></span>
<span class="line"><span style="color:#9ECBFF;">          curl -f https://myapp.com/actuator/health --retry 5 --retry-delay 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Scale down old environment</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">success()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">          kubectl scale deployment myapp-\${{ steps.env.outputs.inactive }} \\</span></span>
<span class="line"><span style="color:#9ECBFF;">            --namespace production --replicas=0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Blue-Green Deployment</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">workflow_dispatch</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">inputs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">version</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">required</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Version to deploy&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">deploy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Determine target environment</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">env</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">          # 检查当前活跃环境</span></span>
<span class="line"><span style="color:#032F62;">          ACTIVE=$(kubectl get svc myapp -n production -o jsonpath=&#39;{.spec.selector.env}&#39;)</span></span>
<span class="line"><span style="color:#032F62;">          if [ &quot;$ACTIVE&quot; == &quot;blue&quot; ]; then</span></span>
<span class="line"><span style="color:#032F62;">            echo &quot;target=green&quot; &gt;&gt; $GITHUB_OUTPUT</span></span>
<span class="line"><span style="color:#032F62;">            echo &quot;inactive=green&quot; &gt;&gt; $GITHUB_OUTPUT</span></span>
<span class="line"><span style="color:#032F62;">          else</span></span>
<span class="line"><span style="color:#032F62;">            echo &quot;target=blue&quot; &gt;&gt; $GITHUB_OUTPUT</span></span>
<span class="line"><span style="color:#032F62;">            echo &quot;inactive=blue&quot; &gt;&gt; $GITHUB_OUTPUT</span></span>
<span class="line"><span style="color:#032F62;">          fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy to \${{ steps.env.outputs.target }}</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">          kubectl apply -f k8s/deployment-\${{ steps.env.outputs.target }}.yaml</span></span>
<span class="line"><span style="color:#032F62;">          kubectl rollout status deployment/myapp-\${{ steps.env.outputs.target }} \\</span></span>
<span class="line"><span style="color:#032F62;">            --namespace production --timeout=300s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Run smoke tests</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">          TARGET_URL=&quot;http://\${{ steps.env.outputs.target }}.myapp.internal/actuator/health&quot;</span></span>
<span class="line"><span style="color:#032F62;">          curl -f --retry 3 --retry-delay 5 $TARGET_URL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Switch traffic</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">          kubectl patch svc myapp -n production \\</span></span>
<span class="line"><span style="color:#032F62;">            -p &quot;{\\&quot;spec\\&quot;:{\\&quot;selector\\&quot;:{\\&quot;env\\&quot;:\\&quot;\${{ steps.env.outputs.target }}\\&quot;}}}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Verify all traffic healthy</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">          sleep 10</span></span>
<span class="line"><span style="color:#032F62;">          curl -f https://myapp.com/actuator/health --retry 5 --retry-delay 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Scale down old environment</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">if</span><span style="color:#24292E;">: </span><span style="color:#032F62;">success()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">          kubectl scale deployment myapp-\${{ steps.env.outputs.inactive }} \\</span></span>
<span class="line"><span style="color:#032F62;">            --namespace production --replicas=0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h3 id="滚动升级" tabindex="-1">滚动升级 <a class="header-anchor" href="#滚动升级" aria-label="Permalink to &quot;滚动升级&quot;">​</a></h3><p>滚动升级（Rolling Update）是 Kubernetes 默认的部署策略，逐步用新版本 Pod 替换旧版本 Pod，过程中保持服务可用。</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">apps/v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deployment</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">myapp</span></span>
<span class="line"><span style="color:#85E89D;">spec</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">replicas</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">strategy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">RollingUpdate</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">rollingUpdate</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">maxSurge</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 最多超出期望副本数 1 个</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">maxUnavailable</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 部署期间必须保持所有 Pod 可用</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">minReadySeconds</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># Pod 就绪后等待 30 秒再继续</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">apps/v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deployment</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">myapp</span></span>
<span class="line"><span style="color:#22863A;">spec</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">replicas</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">strategy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">RollingUpdate</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">rollingUpdate</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">maxSurge</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 最多超出期望副本数 1 个</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">maxUnavailable</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 部署期间必须保持所有 Pod 可用</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">minReadySeconds</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">    </span><span style="color:#6A737D;"># Pod 就绪后等待 30 秒再继续</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>滚动升级过程：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">初始状态: 5 个旧版本 Pod</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Step 1: 创建 1 个新 Pod，总数变为 6（maxSurge=1）</span></span>
<span class="line"><span style="color:#e1e4e8;">  旧旧旧旧旧 新</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Step 2: 新 Pod 就绪后，终止 1 个旧 Pod</span></span>
<span class="line"><span style="color:#e1e4e8;">  旧旧旧旧 新</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Step 3: 创建下一个新 Pod</span></span>
<span class="line"><span style="color:#e1e4e8;">  旧旧旧旧 新新</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Step 4: 新 Pod 就绪后，终止下一个旧 Pod</span></span>
<span class="line"><span style="color:#e1e4e8;">  旧旧旧 新新</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">...重复直到所有 Pod 都替换为新版本...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">初始状态: 5 个旧版本 Pod</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Step 1: 创建 1 个新 Pod，总数变为 6（maxSurge=1）</span></span>
<span class="line"><span style="color:#24292e;">  旧旧旧旧旧 新</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Step 2: 新 Pod 就绪后，终止 1 个旧 Pod</span></span>
<span class="line"><span style="color:#24292e;">  旧旧旧旧 新</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Step 3: 创建下一个新 Pod</span></span>
<span class="line"><span style="color:#24292e;">  旧旧旧旧 新新</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Step 4: 新 Pod 就绪后，终止下一个旧 Pod</span></span>
<span class="line"><span style="color:#24292e;">  旧旧旧 新新</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">...重复直到所有 Pod 都替换为新版本...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="部署策略对比" tabindex="-1">部署策略对比 <a class="header-anchor" href="#部署策略对比" aria-label="Permalink to &quot;部署策略对比&quot;">​</a></h3><table><thead><tr><th>策略</th><th>优点</th><th>缺点</th><th>适用场景</th></tr></thead><tbody><tr><td><strong>滚动升级</strong></td><td>渐进式替换，资源消耗低</td><td>回滚速度慢，兼容性要求高</td><td>常规发布</td></tr><tr><td><strong>蓝绿部署</strong></td><td>即时切换，回滚快</td><td>需要双倍资源</td><td>关键业务系统</td></tr><tr><td><strong>金丝雀发布</strong></td><td>风险可控，逐步放量</td><td>流量管理复杂</td><td>大版本变更</td></tr><tr><td><strong>A/B 测试</strong></td><td>支持业务验证</td><td>需要业务指标配合</td><td>功能验证</td></tr><tr><td><strong>重建部署</strong></td><td>简单直接</td><td>有停机时间</td><td>开发/测试环境</td></tr></tbody></table><h3 id="金丝雀发布" tabindex="-1">金丝雀发布 <a class="header-anchor" href="#金丝雀发布" aria-label="Permalink to &quot;金丝雀发布&quot;">​</a></h3><p>金丝雀发布（Canary Release）是逐步将新版本流量从小比例增加到全量的策略：</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">apiVersion</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">networking.k8s.io/v1</span></span>
<span class="line"><span style="color:#85E89D;">kind</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Ingress</span></span>
<span class="line"><span style="color:#85E89D;">metadata</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">myapp-canary</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">annotations</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">nginx.ingress.kubernetes.io/canary</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">nginx.ingress.kubernetes.io/canary-weight</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;10&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 10% 流量</span></span>
<span class="line"><span style="color:#85E89D;">spec</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">rules</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">host</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">myapp.com</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">http</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">paths</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          - </span><span style="color:#85E89D;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">pathType</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Prefix</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#85E89D;">backend</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#85E89D;">service</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">myapp-canary</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#85E89D;">port</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#85E89D;">number</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8080</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">apiVersion</span><span style="color:#24292E;">: </span><span style="color:#032F62;">networking.k8s.io/v1</span></span>
<span class="line"><span style="color:#22863A;">kind</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Ingress</span></span>
<span class="line"><span style="color:#22863A;">metadata</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">myapp-canary</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">annotations</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">nginx.ingress.kubernetes.io/canary</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">nginx.ingress.kubernetes.io/canary-weight</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;10&quot;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 10% 流量</span></span>
<span class="line"><span style="color:#22863A;">spec</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">rules</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">host</span><span style="color:#24292E;">: </span><span style="color:#032F62;">myapp.com</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">http</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">paths</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          - </span><span style="color:#22863A;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">pathType</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Prefix</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#22863A;">backend</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#22863A;">service</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">myapp-canary</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#22863A;">port</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#22863A;">number</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">8080</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>金丝雀发布的 CI/CD 集成：</strong></p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy canary</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">    kubectl apply -f k8s/deployment-canary.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Monitor canary metrics</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">    # 监控错误率和延迟</span></span>
<span class="line"><span style="color:#9ECBFF;">    ERROR_RATE=$(curl -s http://prometheus:9090/api/v1/query \\</span></span>
<span class="line"><span style="color:#9ECBFF;">      --data &quot;query=rate(http_requests_total{app=&#39;myapp-canary&#39;,status=~&#39;5..&#39;}[5m])&quot;)</span></span>
<span class="line"><span style="color:#9ECBFF;">    echo &quot;Canary error rate: $ERROR_RATE&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">    # 如果错误率低于阈值，逐步增加流量</span></span>
<span class="line"><span style="color:#9ECBFF;">    if [ &quot;$ERROR_RATE&quot; -lt &quot;0.01&quot; ]; then</span></span>
<span class="line"><span style="color:#9ECBFF;">      echo &quot;Canary healthy, increasing traffic to 50%&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">      kubectl annotate ingress myapp-canary \\</span></span>
<span class="line"><span style="color:#9ECBFF;">        nginx.ingress.kubernetes.io/canary-weight=&quot;50&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">    fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Promote canary to full release</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">if</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">success()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">    # 将所有流量切换到新版本</span></span>
<span class="line"><span style="color:#9ECBFF;">    kubectl patch ingress myapp-canary \\</span></span>
<span class="line"><span style="color:#9ECBFF;">      --type=json \\</span></span>
<span class="line"><span style="color:#9ECBFF;">      -p=&#39;[{&quot;op&quot;: &quot;remove&quot;, &quot;path&quot;: &quot;/metadata/annotations/nginx.ingress.kubernetes.io/canary&quot;}]&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">    kubectl scale deployment myapp-stable --replicas=0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy canary</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">    kubectl apply -f k8s/deployment-canary.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Monitor canary metrics</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">    # 监控错误率和延迟</span></span>
<span class="line"><span style="color:#032F62;">    ERROR_RATE=$(curl -s http://prometheus:9090/api/v1/query \\</span></span>
<span class="line"><span style="color:#032F62;">      --data &quot;query=rate(http_requests_total{app=&#39;myapp-canary&#39;,status=~&#39;5..&#39;}[5m])&quot;)</span></span>
<span class="line"><span style="color:#032F62;">    echo &quot;Canary error rate: $ERROR_RATE&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">    # 如果错误率低于阈值，逐步增加流量</span></span>
<span class="line"><span style="color:#032F62;">    if [ &quot;$ERROR_RATE&quot; -lt &quot;0.01&quot; ]; then</span></span>
<span class="line"><span style="color:#032F62;">      echo &quot;Canary healthy, increasing traffic to 50%&quot;</span></span>
<span class="line"><span style="color:#032F62;">      kubectl annotate ingress myapp-canary \\</span></span>
<span class="line"><span style="color:#032F62;">        nginx.ingress.kubernetes.io/canary-weight=&quot;50&quot;</span></span>
<span class="line"><span style="color:#032F62;">    fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Promote canary to full release</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">if</span><span style="color:#24292E;">: </span><span style="color:#032F62;">success()</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">    # 将所有流量切换到新版本</span></span>
<span class="line"><span style="color:#032F62;">    kubectl patch ingress myapp-canary \\</span></span>
<span class="line"><span style="color:#032F62;">      --type=json \\</span></span>
<span class="line"><span style="color:#032F62;">      -p=&#39;[{&quot;op&quot;: &quot;remove&quot;, &quot;path&quot;: &quot;/metadata/annotations/nginx.ingress.kubernetes.io/canary&quot;}]&#39;</span></span>
<span class="line"><span style="color:#032F62;">    kubectl scale deployment myapp-stable --replicas=0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="部署后的监控与回滚" tabindex="-1">部署后的监控与回滚 <a class="header-anchor" href="#部署后的监控与回滚" aria-label="Permalink to &quot;部署后的监控与回滚&quot;">​</a></h3><p><strong>健康检查：</strong></p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Post-deployment health check</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">    # 多维度健康检查</span></span>
<span class="line"><span style="color:#9ECBFF;">    ENDPOINTS=(</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;https://myapp.com/actuator/health&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;https://myapp.com/actuator/info&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">      &quot;https://myapp.com/api/ping&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">    for endpoint in &quot;\${ENDPOINTS[@]}&quot;; do</span></span>
<span class="line"><span style="color:#9ECBFF;">      STATUS=$(curl -s -o /dev/null -w &quot;%{http_code}&quot; --connect-timeout 5 $endpoint)</span></span>
<span class="line"><span style="color:#9ECBFF;">      if [ &quot;$STATUS&quot; != &quot;200&quot; ]; then</span></span>
<span class="line"><span style="color:#9ECBFF;">        echo &quot;Health check failed: $endpoint returned $STATUS&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">        exit 1</span></span>
<span class="line"><span style="color:#9ECBFF;">      fi</span></span>
<span class="line"><span style="color:#9ECBFF;">    done</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Post-deployment health check</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">    # 多维度健康检查</span></span>
<span class="line"><span style="color:#032F62;">    ENDPOINTS=(</span></span>
<span class="line"><span style="color:#032F62;">      &quot;https://myapp.com/actuator/health&quot;</span></span>
<span class="line"><span style="color:#032F62;">      &quot;https://myapp.com/actuator/info&quot;</span></span>
<span class="line"><span style="color:#032F62;">      &quot;https://myapp.com/api/ping&quot;</span></span>
<span class="line"><span style="color:#032F62;">    )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">    for endpoint in &quot;\${ENDPOINTS[@]}&quot;; do</span></span>
<span class="line"><span style="color:#032F62;">      STATUS=$(curl -s -o /dev/null -w &quot;%{http_code}&quot; --connect-timeout 5 $endpoint)</span></span>
<span class="line"><span style="color:#032F62;">      if [ &quot;$STATUS&quot; != &quot;200&quot; ]; then</span></span>
<span class="line"><span style="color:#032F62;">        echo &quot;Health check failed: $endpoint returned $STATUS&quot;</span></span>
<span class="line"><span style="color:#032F62;">        exit 1</span></span>
<span class="line"><span style="color:#032F62;">      fi</span></span>
<span class="line"><span style="color:#032F62;">    done</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>自动回滚策略：</strong></p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">- </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Monitor and rollback if needed</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">    # 部署后监控 5 分钟</span></span>
<span class="line"><span style="color:#9ECBFF;">    for i in $(seq 1 10); do</span></span>
<span class="line"><span style="color:#9ECBFF;">      ERROR_RATE=$(curl -s &quot;http://prometheus:9090/api/v1/query&quot; \\</span></span>
<span class="line"><span style="color:#9ECBFF;">        --data &quot;query=sum(rate(http_requests_total{status=~&#39;5..&#39;}[1m]))/sum(rate(http_requests_total[1m]))&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">      if (( $(echo &quot;$ERROR_RATE &gt; 0.01&quot; | bc -l) )); then</span></span>
<span class="line"><span style="color:#9ECBFF;">        echo &quot;Error rate $ERROR_RATE exceeds threshold, triggering rollback...&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">        kubectl rollout undo deployment/myapp</span></span>
<span class="line"><span style="color:#9ECBFF;">        exit 1</span></span>
<span class="line"><span style="color:#9ECBFF;">      fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">      sleep 30</span></span>
<span class="line"><span style="color:#9ECBFF;">    done</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">- </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Monitor and rollback if needed</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">    # 部署后监控 5 分钟</span></span>
<span class="line"><span style="color:#032F62;">    for i in $(seq 1 10); do</span></span>
<span class="line"><span style="color:#032F62;">      ERROR_RATE=$(curl -s &quot;http://prometheus:9090/api/v1/query&quot; \\</span></span>
<span class="line"><span style="color:#032F62;">        --data &quot;query=sum(rate(http_requests_total{status=~&#39;5..&#39;}[1m]))/sum(rate(http_requests_total[1m]))&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">      if (( $(echo &quot;$ERROR_RATE &gt; 0.01&quot; | bc -l) )); then</span></span>
<span class="line"><span style="color:#032F62;">        echo &quot;Error rate $ERROR_RATE exceeds threshold, triggering rollback...&quot;</span></span>
<span class="line"><span style="color:#032F62;">        kubectl rollout undo deployment/myapp</span></span>
<span class="line"><span style="color:#032F62;">        exit 1</span></span>
<span class="line"><span style="color:#032F62;">      fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">      sleep 30</span></span>
<span class="line"><span style="color:#032F62;">    done</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><strong>Kubernetes 回滚操作：</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 回滚到上一个版本</span></span>
<span class="line"><span style="color:#B392F0;">kubectl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rollout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">undo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deployment/myapp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 回滚到指定版本</span></span>
<span class="line"><span style="color:#B392F0;">kubectl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rollout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">undo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deployment/myapp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--to-revision=3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看部署历史</span></span>
<span class="line"><span style="color:#B392F0;">kubectl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rollout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">history</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deployment/myapp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看回滚状态</span></span>
<span class="line"><span style="color:#B392F0;">kubectl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rollout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deployment/myapp</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 回滚到上一个版本</span></span>
<span class="line"><span style="color:#6F42C1;">kubectl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rollout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">undo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deployment/myapp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 回滚到指定版本</span></span>
<span class="line"><span style="color:#6F42C1;">kubectl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rollout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">undo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deployment/myapp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--to-revision=3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看部署历史</span></span>
<span class="line"><span style="color:#6F42C1;">kubectl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rollout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">history</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deployment/myapp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看回滚状态</span></span>
<span class="line"><span style="color:#6F42C1;">kubectl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rollout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deployment/myapp</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><hr><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>CI/CD 是 Java 项目 DevOps 实践的核心，本文涵盖了从基础概念到具体实现的全流程：</p><ol><li><strong>CI/CD 基础</strong>：理解了持续集成、持续交付和持续部署的概念与价值</li><li><strong>GitHub Actions</strong>：掌握了工作流定义、Maven/Gradle 构建、矩阵测试、SonarQube 分析和 Docker 构建推送</li><li><strong>Docker 多阶段构建</strong>：学会了分层构建、镜像优化、Spring Boot 分层打包和 Jib 工具</li><li><strong>环境管理</strong>：了解了多环境配置方案、Secrets 安全管理和数据库迁移处理</li><li><strong>部署方式</strong>：覆盖了虚拟机部署、K8s 部署、蓝绿部署、滚动升级和金丝雀发布等策略</li></ol><p><strong>推荐实践路线：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">入门阶段：GitHub Actions + Maven + 单阶段 Docker 构建 + 虚拟机部署</span></span>
<span class="line"><span style="color:#e1e4e8;">进阶阶段：增加 SonarQube + 多阶段构建 + Docker 镜像优化</span></span>
<span class="line"><span style="color:#e1e4e8;">高级阶段：引入 K8s + Helm + 蓝绿/金丝雀部署 + 自动化监控回滚</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">入门阶段：GitHub Actions + Maven + 单阶段 Docker 构建 + 虚拟机部署</span></span>
<span class="line"><span style="color:#24292e;">进阶阶段：增加 SonarQube + 多阶段构建 + Docker 镜像优化</span></span>
<span class="line"><span style="color:#24292e;">高级阶段：引入 K8s + Helm + 蓝绿/金丝雀部署 + 自动化监控回滚</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>CI/CD 的核心目标是让软件交付更快、更安全、更可靠。选择合适的技术栈和策略，根据团队成熟度和业务需求逐步演进，是实施 CI/CD 的关键。</p>`,204)]))}const b=n(e,[["render",o]]);export{u as __pageData,b as default};
