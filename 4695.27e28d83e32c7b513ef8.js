(self.webpackChunk=self.webpackChunk||[]).push([[4695],{4695:function(n,s,a){"use strict";a.r(s),s.default='<blockquote> <p>이 섹션은 webpack의 내부 요소를 설명하며 플러그인 개발자에게 유용할 수 있습니다.</p> </blockquote> <p>번들링은 일부 파일을 가져오고 다른 파일은 내보내는 기능입니다.</p> <p>그러나 입력과 출력 사이에는 <a href="/concepts/modules/">모듈</a>, <a href="/concepts/entry-points/">엔트리 포인트</a>, 청크, 청크 그룹, 그 외 많은 중간 요소들이 있습니다.</p> <h2 id="the-main-parts">The main parts<a href="#the-main-parts" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>프로젝트에서 사용하는 모든 파일은 <a href="/concepts/modules/">모듈</a>입니다.</p> <p><strong>./index.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">import</span> app <span class="token keyword">from</span> <span class="token string">\'./app.js\'</span><span class="token punctuation">;</span></code></pre> <p><strong>./app.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token string">\'the app\'</span><span class="token punctuation">;</span></code></pre> <p>모듈은 서로를 사용하여 그래프(<code>ModuleGraph</code>)를 형성합니다.</p> <p>번들링 과정 중에 모듈은 청크로 결합됩니다. 청크는 청크 그룹으로 합쳐지고, 모듈을 통해 서로 연결된 그래프(<code>ChunkGraph</code>)를 형성합니다. 내부적으로 엔트리 포인트를 설명할 때는 하나의 청크로 청크 그룹을 만드는 것을 말합니다.</p> <p><strong>./webpack.config.js</strong></p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token string">\'./index.js\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p><code>main</code>이라는 이름으로 하나의 청크 그룹이 생성됩니다. (<code>main</code>은 엔트리 포인트의 기본 이름입니다.) 이 청크 그룹에는<code>./index.js</code> 모듈이 포함되어 있습니다. 파서가 <code>./index.js</code> 내부의 import 문을 처리하면서 새 모듈이 이 청크에 추가됩니다.</p> <p>다른 예제를 확인해보세요.</p> <p><strong>./webpack.config.js</strong></p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    home<span class="token operator">:</span> <span class="token string">\'./home.js\'</span><span class="token punctuation">,</span>\n    about<span class="token operator">:</span> <span class="token string">\'./about.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>이름이 <code>home</code>과 <code>about</code>인 두 개의 청크 그룹이 생성됩니다. 각각의 청크 그룹은 모듈이 있는 청크를 가지고 있습니다. <code>home</code> 은 <code>./home.js</code>를, <code>about</code> 은 <code>./about.js</code> 청크를 가지고 있습니다.</p> <blockquote> <p>청크 그룹에는 하나 이상의 청크가 있을 수 있습니다. 예를 들어 <a href="/plugins/split-chunks-plugin/">SplitChunksPlugin</a>은 청크를 하나 또는 그 이상의 청크로 분할합니다.</p> </blockquote> <h2 id="chunks">Chunks<a href="#chunks" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>청크는 두 가지 형태로 제공됩니다.</p> <ul> <li><code>초기 청크</code>는 엔트리 포인트의 메인 청크입니다. 이 청크는 엔트리 포인트에서 명시된 모든 모듈과 의존성을 포함합니다.</li> <li><code>비초기 청크</code>는 지연 로드될 수 있는 청크입니다. <a href="/guides/code-splitting/#dynamic-imports">동적 import</a> 또는 <a href="/plugins/split-chunks-plugin/">SplitChunksPlugin</a> 사용 중에 나타날 수 있습니다.</li> </ul> <p>각 청크에는 해당하는 <strong>애셋이</strong> 있습니다. 애셋은 번들링의 결과로 출력된 파일입니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token string">\'./src/index.jsx\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p><strong>./src/index.jsx</strong></p> <pre><code class="hljs language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'./app.jsx\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">App</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&#x3C;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p>이름이 <code>main</code>인 초기 청크가 생성되며, 이 청크는 다음을 포함합니다.</p> <ul> <li><code>./src/index.jsx</code></li> <li><code>react</code></li> <li><code>react-dom</code></li> </ul> <p>그리고 <code>./app.jsx</code> 를 제외한 모든 의존성도 포함합니다.</p> <p><code>./app.jsx</code> 모듈은 동적으로 가져오므로 비초기 청크가 생성됩니다.</p> <p><strong>결과:</strong></p> <ul> <li><code>/dist/main.js</code> - <code>초기</code> 청크</li> <li><code>/dist/394.js</code> - <code>비초기</code> 청크</li> </ul> <p>기본적으로 <code>비초기</code> 청크에는 이름이 없으므로 이름 대신 고유한 ID가 사용됩니다. 동적으로 가져올 때 <a href="/api/module-methods/#magic-comments">"특별한" 주석</a>을 사용하여 청크 이름을 구체적으로 지정할 수 있습니다.</p> <pre><code class="hljs language-js"><span class="token keyword">import</span><span class="token punctuation">(</span>\n  <span class="token comment">/* webpackChunkName: "app" */</span>\n  <span class="token string">\'./app.jsx\'</span>\n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">App</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&#x3C;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p><strong>결과:</strong></p> <ul> <li><code>/dist/main.js</code> - <code>초기</code> 청크</li> <li><code>/dist/app.js</code> - <code>비초기</code> 청크</li> </ul> <h2 id="output">Output<a href="#output" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>출력 파일의 이름은 설정의 두 필드에 영향을 받습니다.</p> <ul> <li><a href="/configuration/output/#outputfilename"><code>output.filename</code></a> - <code>초기</code> 청크 파일에서 사용합니다.</li> <li><a href="/configuration/output/#outputchunkfilename"><code>output.chunkFilename</code></a> - <code>비초기</code> 청크 파일에서 사용합니다.</li> <li>경우에 따라서 청크를 <code>초기</code>와 <code>비초기</code>로 사용합니다. 이 때는 <code>output.filename</code>을 사용합니다.</li> </ul> <p>이 필드에는 <a href="/configuration/output/#template-strings">몇 개의 플레이스 홀더</a>를 제공합니다. 가장 자주 사용하는 것은 아래와 같습니다.</p> <ul> <li><code>[id]</code> - 청크 ID (예: <code>[id].js</code> -> <code>485.js</code>)</li> <li><code>[name]</code> - 청크 이름 (예: <code>[name].js</code> -> <code>app.js</code>). 청크에 이름이 없는 경우 ID가 사용됩니다.</li> <li><code>[contenthash]</code> - 출력 파일 콘텐츠의 md4-hash (예: <code>[contenthash].js</code> -> <code>4ea6ff1de66c537eb9b2.js</code>)</li> </ul> '}}]);