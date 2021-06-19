(self.webpackChunk=self.webpackChunk||[]).push([[2169],{2169:function(n,a,s){"use strict";s.r(a),a.default='<p><code>output</code> 옵션을 설정하여 컴파일된 파일을 디스크에 쓰는 방법을 webpack에 알려줍니다. 여러 <code>진입</code>점이 있을 수 있지만 하나의 <code>출력</code> 설정만 지정된다는 점에 주의하세요.</p> <h2 id="usage">Usage<a href="#usage" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>webpack 설정의 <code>output</code> 프로퍼티는 최소한 객체로 값을 설정해야 하며, 출력 파일에 사용할 <a href="/configuration/output/#outputfilename"><code>output.filename</code></a>이 제공되어야 합니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  output<span class="token operator">:</span> <span class="token punctuation">{</span>\n    filename<span class="token operator">:</span> <span class="token string">\'bundle.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>이 설정은 단일 <code>bundle.js</code> 파일을 <code>dist</code> 디렉터리에 출력합니다.</p> <h2 id="multiple-entry-points">Multiple Entry Points<a href="#multiple-entry-points" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>설정에서 하나 이상의 "청크"를 생성하면(다중 엔트리 포인트나 CommonsChunkPlugin과 같은 플러그인을 사용하는 경우) <a href="/configuration/output/#outputfilename">substitution</a>을 사용하여 파일이 고유한 이름을 갖도록 해야 합니다.</p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    app<span class="token operator">:</span> <span class="token string">\'./src/app.js\'</span><span class="token punctuation">,</span>\n    search<span class="token operator">:</span> <span class="token string">\'./src/search.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  output<span class="token operator">:</span> <span class="token punctuation">{</span>\n    filename<span class="token operator">:</span> <span class="token string">\'[name].js\'</span><span class="token punctuation">,</span>\n    path<span class="token operator">:</span> __dirname <span class="token operator">+</span> <span class="token string">\'/dist\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// writes to disk: ./dist/app.js, ./dist/search.js</span></code></pre> <h2 id="advanced">Advanced<a href="#advanced" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>다음은 애셋에서 CDN과 해시를 사용한 조금 더 복잡한 예제입니다.</p> <p><strong>config.js</strong></p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  output<span class="token operator">:</span> <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">\'/home/proj/cdn/assets/[fullhash]\'</span><span class="token punctuation">,</span>\n    publicPath<span class="token operator">:</span> <span class="token string">\'https://cdn.example.com/assets/[fullhash]/\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>출력 파일의 최종 <code>publicPath</code>를 컴파일 시점에 알 수 없는 경우, 공백으로 남겨두고 런타임에 엔트리 포인트 파일의 <code>__webpack_public_path__</code>를 통해 동적으로 설정할 수 있습니다.</p> <pre><code class="hljs language-javascript">__webpack_public_path__ <span class="token operator">=</span> myRuntimePublicPath<span class="token punctuation">;</span>\n\n<span class="token comment">// rest of your application entry</span></code></pre> '}}]);