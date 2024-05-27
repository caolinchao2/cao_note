import{_ as a,o as e,c as t,Q as i}from"./chunks/framework.b5309610.js";const M=JSON.parse('{"title":"Vue面试题","description":"","frontmatter":{},"headers":[],"relativePath":"前端/Vue/vue面试题.md","filePath":"前端/Vue/vue面试题.md","lastUpdated":1715053679000}'),l={name:"前端/Vue/vue面试题.md"},r=i('<h1 id="vue面试题" tabindex="-1">Vue面试题 <a class="header-anchor" href="#vue面试题" aria-label="Permalink to &quot;Vue面试题&quot;">​</a></h1><h2 id="mvvm" tabindex="-1">MVVM <a class="header-anchor" href="#mvvm" aria-label="Permalink to &quot;MVVM&quot;">​</a></h2><ol><li>MVC是后端的分层开发概念，单线控</li></ol><p>传统的MVC架构通常是使用控制器更新模型，视图从模型中获取数据去渲染，当用户有输入时，会通过控制器去更新模型，并且通知视图进行更新；MVC有一个巨大的缺陷就是：<strong>控制器承担的责任</strong>太大了；</p><p>MVC框架的主要问题：</p><ul><li>对DOM操作的代价非常高</li><li>程序运行缓慢且效率低下</li><li>内存浪费严重</li><li>由于循环依赖性，组件模型需要围绕models和views进行创建；</li></ul><ol start="2"><li><p>MVVM是前端视图层的分层开发思想，MVVM把前端的视图层分为了三部分：Model、View、VM ViewModel，VM是MVVM思想的核心，因为VM是M和V之间的调度者，每当V想要获取保存后的数据的时候，都由VM做中间处理；</p></li><li><p>MVVM提供了双向数据绑定，数据的双向绑定是由VM提供的；</p></li></ol><p>View是用户看到的视图，Model一般是本地数据和数据库中的数据；</p><p>ViewModel只关心数据和业务的处理， 不关心View如何处理数据；</p><p>对于MVVM来说，其实最重要的并不是通过双向绑定或者其他的方式将View与ViewModel绑定起来，而是<strong>通过ViewModel将视图中的状态和用户的行为分离出一个抽象，这才是MVVM的精髓；</strong></p><h2 id="virtual-dom" tabindex="-1">Virtual DOM <a class="header-anchor" href="#virtual-dom" aria-label="Permalink to &quot;Virtual DOM&quot;">​</a></h2><h3 id="为什么操作dom慢" tabindex="-1">为什么操作DOM慢 <a class="header-anchor" href="#为什么操作dom慢" aria-label="Permalink to &quot;为什么操作DOM慢&quot;">​</a></h3><p>因为DOM是属于渲染引擎中的东西，而JS又是JS引擎中的东西，当我们通过JS操作DOM的时候，其实这个操作涉及到了两个线程之间的通信，那么势必会带来一些性能上的损耗。操作DOM次数一多，也就等同于一直在进行线程之间的通信，并且操作DOM可能还会带来重绘回流的情况，所以也就导致了性能上的问题；</p><h3 id="插入几万个dom如何实现页面不卡顿" tabindex="-1">插入几万个DOM如何实现页面不卡顿 <a class="header-anchor" href="#插入几万个dom如何实现页面不卡顿" aria-label="Permalink to &quot;插入几万个DOM如何实现页面不卡顿&quot;">​</a></h3><p>使用虚拟滚动的技术，原理是只渲染可视区域内的内容，非可见区域的那就完全不渲染了，当用户在滚动的时候就实时去替换渲染的内容；</p><h3 id="什么是virtual-dom" tabindex="-1">什么是Virtual DOM <a class="header-anchor" href="#什么是virtual-dom" aria-label="Permalink to &quot;什么是Virtual DOM&quot;">​</a></h3><p>也就是虚拟节点，它通过JS对象来描述DOM的节点，然后再通过特定的render方法将其渲染成真实DOM节点，通过这种方法，我们能精准知道哪些真实DOM改变了，从而尽量减少DOM操作的性能开销，Virtual DOM通过对比两棵树的差异，通过差异去局部更新DOM，实现性能的最优化；</p><p>Vue的diff位于patch.js文件中，复杂度为O(n)；</p><h3 id="virtual-dom最大的优势" tabindex="-1">Virtual DOM最大的优势 <a class="header-anchor" href="#virtual-dom最大的优势" aria-label="Permalink to &quot;Virtual DOM最大的优势&quot;">​</a></h3><ul><li>将Virtual DOM作为一个兼容层，让我们还能对接非web端的系统，实现跨端开发；</li><li>同样的，通过Virtual DOM我们可以渲染到其他的平台，比如实现SSR、同构渲染等等；</li><li>实现组件的高度抽象化；</li></ul><h3 id="设置key和不设置key的区别" tabindex="-1">设置key和不设置key的区别 <a class="header-anchor" href="#设置key和不设置key的区别" aria-label="Permalink to &quot;设置key和不设置key的区别&quot;">​</a></h3><ul><li>不设key，新对象和旧对象只会进行头尾两端的相互比较</li><li>设key后，除了头尾两端的比较外，还会从 用key生成的对象index中查找匹配的节点，所以为节点设置key可以更高效的利用dom；</li></ul><h2 id="diff算法" tabindex="-1">diff算法 <a class="header-anchor" href="#diff算法" aria-label="Permalink to &quot;diff算法&quot;">​</a></h2><p>把树形结构按照层级分解，只比较同级元素</p><p>给列表结构的每个单元添加唯一的key属性，方便比较</p><p>React只会匹配相同class的component(这里面的class指的是组件的名字)</p><p>合并操作，调用component的setState方法的时候，React将其标记为dirty到每一个事件循环结束，React检查所有标记dirty的component重新绘制</p><p>选择性子树渲染，开发人员可以重写shouldComponentUpdate提高diff的性能；</p><h2 id="进程线程" tabindex="-1">进程线程 <a class="header-anchor" href="#进程线程" aria-label="Permalink to &quot;进程线程&quot;">​</a></h2><p>进程和线程简单来说都是CPU工作时间片的一个描述；</p><p>进程描述了CPU在运行指令及加载和保存上下文所需的时间，放在应用上来说就代表了一个程序，线程是进程中的更小单位，描述了执行一段指令所需的时间；</p><p>一个进程中可以有多个线程，比如渲染线程、JS引擎线程、HTTP请求线程等等，当发起一个请求时，其实就是创建了一个线程，当请求结束后，该线程可能就会被销毁；</p><h2 id="路由原理" tabindex="-1">路由原理 <a class="header-anchor" href="#路由原理" aria-label="Permalink to &quot;路由原理&quot;">​</a></h2><p>前端路由实现：**本质是监听URL的变化，然后匹配路由规则，显示相应的页面，并且无须刷新页面；**目前前端使用的路由就只有两种实现方式</p><h3 id="hash模式" tabindex="-1">hash模式 <a class="header-anchor" href="#hash模式" aria-label="Permalink to &quot;hash模式&quot;">​</a></h3><p>www.test.com/#/就是Hash URL，当#后面的哈希值发生变化时，可以通过hashchange事件监听到URL的变化，从而进行跳转页面，并且无论哈希值如何变化，服务端收到的URL请求永远都是www.test.com</p><h3 id="history模式" tabindex="-1">History模式 <a class="header-anchor" href="#history模式" aria-label="Permalink to &quot;History模式&quot;">​</a></h3><p><strong>history模式是HTML5新推出的功能</strong>，主要使用history.pushState和history.replaceState改变URL，通过History模式改变URL同样不会引起页面的刷新，只会更新浏览器的历史记录；</p><h3 id="hash和history的对比" tabindex="-1">hash和history的对比 <a class="header-anchor" href="#hash和history的对比" aria-label="Permalink to &quot;hash和history的对比&quot;">​</a></h3><p>hash模式无需后端配置，而且兼容性好，history模式在用户拖动输入地址或者刷新页面的时候会发起URL模式，后端需要配置index.html页面用于匹配不到静态资源的时候；</p><h2 id="vue和react之间的区别" tabindex="-1">Vue和React之间的区别 <a class="header-anchor" href="#vue和react之间的区别" aria-label="Permalink to &quot;Vue和React之间的区别&quot;">​</a></h2><ol><li>Vue的表单可以使用v-model支持双向绑定，相比react开发上更加方便；</li><li>Vue修改状态比react更加简单，react需要使用setState来改变状态；</li><li>react需要使用jsx，并且需要一整套工具链支持，但是完全可以通过js来控制页面，更加灵活，vue使用模板语法，相比于jsx来说没有那么灵活，但是完全可以脱离工具链，通过直接编写render函数就能在浏览器中运行；</li><li>生态上react的用户是远远高于vue的；</li><li>上手成本上，vue是尽可能的降低前端开发的门槛，而react更多的是去改变用户去接受它的概念和思想，相较于vue上手成本略高；</li></ol>',42),o=[r];function h(s,d,n,u,c,p){return e(),t("div",null,o)}const m=a(l,[["render",h]]);export{M as __pageData,m as default};
