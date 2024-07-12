import{_ as p,o as a,c as e,Q as t}from"./chunks/framework.b5309610.js";const T=JSON.parse('{"title":"HTTP状态码","description":"","frontmatter":{},"headers":[],"relativePath":"leadingEnd/node/HTTP状态码.md","filePath":"leadingEnd/node/HTTP状态码.md","lastUpdated":1720175145000}'),o={name:"leadingEnd/node/HTTP状态码.md"},r=t('<h1 id="http状态码" tabindex="-1">HTTP状态码 <a class="header-anchor" href="#http状态码" aria-label="Permalink to &quot;HTTP状态码&quot;">​</a></h1><h2 id="_100开头-继续" tabindex="-1">100开头 继续 <a class="header-anchor" href="#_100开头-继续" aria-label="Permalink to &quot;100开头 继续&quot;">​</a></h2><p>101 切换协议</p><h2 id="_2-开头" tabindex="-1">2**开头 <a class="header-anchor" href="#_2-开头" aria-label="Permalink to &quot;2**开头&quot;">​</a></h2><blockquote><p>（请求成功）表示成功处理了请求的状态代码。</p></blockquote><p>200 （成功） 服务器已成功处理了请求。 通常，这表示服务器提供了请求的网页。</p><p>201 （已创建） 请求成功并且服务器创建了新的资源。</p><p>202 （已接受） 服务器已接受请求，但尚未处理。</p><p>203 （非授权信息） 服务器已成功处理了请求，但返回的信息可能来自另一来源。</p><p>204 （无内容） 服务器成功处理了请求，但没有返回任何内容。</p><p>205 （重置内容） 服务器成功处理了请求，但没有返回任何内容。</p><p>206 （部分内容） 服务器成功处理了部分 GET 请求。</p><h2 id="_3-开头" tabindex="-1">3** 开头 <a class="header-anchor" href="#_3-开头" aria-label="Permalink to &quot;3** 开头&quot;">​</a></h2><blockquote><p>（请求被重定向）表示要完成请求，需要进一步操作。 通常，这些状态代码用来重定向。</p></blockquote><p>300 （多种选择） 针对请求，服务器可执行多种操作。 服务器可根据请求者 (user agent) 选择一项操作，或提供操作列表供请求者选择。</p><p>301 （永久移动） 请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。</p><p>302 （临时移动） 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。</p><p>303 （查看其他位置） 请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码。</p><p>304 （未修改） 自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容。</p><p>305 （使用代理） 请求者只能使用代理访问请求的网页。 如果服务器返回此响应，还表示请求者应使用代理。</p><p>306 暂时没有这个，已经废弃的</p><p>307 （临时重定向） 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。</p><h2 id="_4-开头" tabindex="-1">4**开头 <a class="header-anchor" href="#_4-开头" aria-label="Permalink to &quot;4**开头&quot;">​</a></h2><blockquote><p>（请求错误）这些状态代码表示请求可能出错，妨碍了服务器的处理。</p></blockquote><p>400 （语法错误） 服务器不理解请求的语法。</p><p>401 （未授权） 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。</p><p>402 （保留）没有这个，留着将来使用这个错误代码；</p><p>403 （禁止） 服务器拒绝请求。</p><p>404 （未找到） 服务器找不到请求的网页。</p><p>405 （方法禁用） 禁用请求中指定的方法。</p><p>406 （不接受） 无法使用请求的内容特性响应请求的网页。</p><p>407 （需要代理授权） 此状态代码与 401（未授权）类似，但指定请求者应当授权使用代理。</p><p>408 （请求超时） 服务器等候请求时发生超时。</p><p>409 （冲突） 服务器在完成请求时发生冲突。 服务器必须在响应中包含有关冲突的信息。</p><p>410 （已删除） 如果请求的资源已永久删除，服务器就会返回此响应。</p><p>411 （需要有效长度） 服务器不接受不含有效内容长度标头字段的请求。</p><p>412 （未满足前提条件） 服务器未满足请求者在请求中设置的其中一个前提条件。</p><p>413 （请求实体过大） 服务器无法处理请求，因为请求实体过大，超出服务器的处理能力。</p><p>414 （请求的 URI 过长） 请求的 URI（通常为网址）过长，服务器无法处理。</p><p>415 （不支持的媒体类型） 请求的格式不受请求页面的支持。</p><p>416 （请求范围不符合要求） 如果页面无法提供请求的范围，则服务器会返回此状态代码。</p><p>417 （未满足期望值） 服务器未满足&quot;期望&quot;请求标头字段的要求。</p><h2 id="_5-开头" tabindex="-1">5**开头 <a class="header-anchor" href="#_5-开头" aria-label="Permalink to &quot;5**开头&quot;">​</a></h2><blockquote><p>（服务器错误）这些状态代码表示服务器在尝试处理请求时发生内部错误。 这些错误可能是服务器本身的错误，而不是请求出错。</p></blockquote><p>500 （服务器内部错误） 服务器遇到错误，无法完成请求。</p><p>501 （尚未实施请求） 服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码。</p><p>502 （错误网关） 服务器作为网关或代理，从上游服务器收到无效响应。</p><p>503 （服务不可用） 服务器目前无法使用（由于超载或停机维护）。 通常，这只是暂时状态。</p><p>504 （网关超时） 服务器作为网关或代理，但是没有及时从上游服务器收到请求。</p><p>505 （HTTP 版本不受支持） 服务器不支持请求中所用的 HTTP 协议版本。</p><p>作者：饥人谷_Leonardo</p><p>链接：<a href="https://www.jianshu.com/p/369db1ba04ea" target="_blank" rel="noreferrer">https://www.jianshu.com/p/369db1ba04ea</a></p><p>来源：简书</p><p>简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。</p><p>“100”:“继续”,</p><p>“101”:“交换协议”,</p><p>“102”:“处理”,</p><p>“103”:“早期提示”,</p><p>“200”:“OK”,</p><p>“201”:“创造”,</p><p>“202”:“接受”,</p><p>“203”:“那些信息”,</p><p>“204”:“没有内容”,</p><p>“205”:“重置内容”,</p><p>“206”:“部分内容”,</p><p>“207”:“Multi-Status”,</p><p>“208”:“已经报道”,</p><p>“226”:“我用”,</p><p>“300”:“多个选择”,</p><p>“301”:“永久移动”,</p><p>“302”:“临时移动”,</p><p>“303”:“其他位置”,</p><p>“304”:不修改,</p><p>“305”:“使用代理”,</p><p>“307”:“临时重定向”,</p><p>“308”:“永久重定向”,</p><p>“400”:“错误请求”,</p><p>“401”:“未经授权的”,</p><p>“402”:“付款要求”,</p><p>“403”:“禁止”,</p><p>“404”:“没有找到”,</p><p>&#39;405&#39;: &#39;方法不允许&#39;，</p><p>“406”:“不能接受的”,</p><p>“407”:“需要代理身份验证”，</p><p>“408”:“请求超时”,</p><p>“409”:“冲突”,</p><p>“410”:“消失”,</p><p>“411”:“长度要求”,</p><p>“412”:“失败的前提”,</p><p>“413”:“有效载荷太大”，</p><p>&#39;414&#39;: &#39;URI太长&#39;，</p><p>“415”:“不支持的媒体类型”，</p><p>“416”:“范围不可满足”，</p><p>“417”:“期望失败”,</p><p>&#39;418&#39;: &#39;我是茶壶&#39;，</p><p>“421”:“误导请求”,</p><p>“422”:“Unprocessable实体”,</p><p>“423”:“锁”,</p><p>“424”:“失败的依赖”,</p><p>“425”:“无序集合”,</p><p>“426”:“升级要求”,</p><p>“428”:“先决条件要求”,</p><p>&#39;429&#39;: &#39;要求太多&#39;，</p><p>&#39;431&#39;: &#39;请求头字段太大&#39;，</p><p>“451”:“因法律原因无法使用”，</p><p>&#39;500&#39;: &#39;内部服务器错误&#39;，</p><p>“501”:“未实现”,</p><p>“502”:“错误网关”,</p><p>“503”:“服务不可用”,</p><p>“504”:“网关超时”,</p><p>&#39;505&#39;: &#39;不支持HTTP版本&#39;，</p><p>&#39;506&#39;: &#39;变种也谈判&#39;，</p><p>“507”:“存储不足”,</p><p>“508”:“循环检测”,</p><p>“509”:“带宽超出限制”，</p><p>“510”:“不长”,</p><p>“511”:“需要网络认证”</p>',117),n=[r];function l(d,h,i,c,s,_){return a(),e("div",null,n)}const b=p(o,[["render",l]]);export{T as __pageData,b as default};
