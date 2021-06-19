(self.webpackChunk=self.webpackChunk||[]).push([[2721],{2721:function(n,s,a){"use strict";a.r(s),s.default='<p><a href="/guides/getting-started/#using-a-configuration">시작하기</a>에서 언급한 바와 같이, webpack 설정에서 <code>entry</code> 속성을 정의하는 방법은 여러 가지가 있습니다. <code>entry</code> 속성을 설정 <strong>할 수 있는</strong> 방법과 유용한 이유를 설명하겠습니다.</p> <h2 id="single-entry-shorthand-syntax">Single Entry (Shorthand) Syntax<a href="#single-entry-shorthand-syntax" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>Usage: <code>entry: string | [string]</code></p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token string">\'./path/to/my/entry/file.js\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p><code>entry</code> 속성에 대한 단일 엔트리 구문은 다음 내용의 축약된 표현입니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    main<span class="token operator">:</span> <span class="token string">\'./path/to/my/entry/file.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p><strong>"다중-메인 엔트리"로</strong> 알려진 것을 생성하기 위해 <code>entry</code> 속성에 파일 경로를 배열로 전달할 수 있습니다. 이는 여러 의존성 파일을 한 번에 주입하고 해당 의존성을 하나의 "청크"에 그래프로 표시하려는 경우에 유용합니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./src/file_1.js\'</span><span class="token punctuation">,</span> <span class="token string">\'./src/file_2.js\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  output<span class="token operator">:</span> <span class="token punctuation">{</span>\n    filename<span class="token operator">:</span> <span class="token string">\'bundle.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>단일 엔트리 구문은 라이브러리같이 하나의 엔트리 포인트가 있는 애플리케이션 또는 도구에 대한 webpack 설정을 빠르게 설정하려는 경우 훌륭한 선택입니다. 그러나, 이 구문을 사용하면 설정을 확장할 수 있는 유연성이 떨어지게 됩니다.</p> <h2 id="object-syntax">Object Syntax<a href="#object-syntax" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>Usage: <code>entry: { &#x3C;entryChunkName> string | [string] } | {}</code></p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    app<span class="token operator">:</span> <span class="token string">\'./src/app.js\'</span><span class="token punctuation">,</span>\n    adminApp<span class="token operator">:</span> <span class="token string">\'./src/adminApp.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>객체 구문은 더 장황합니다. 그러나, 이것은 애플리케이션에서 엔트리를 정의하는 가장 확장 가능한 방법입니다.</p> <aside class="tip"><h6 class="tip__prefix">tip</h6><p><strong>"확장 가능한 webpack 설정"은</strong> 재사용 가능하고 설정의 다른 부분과 결합할 수 있는 것입니다. 이것은 환경, 빌드 대상, 런타임 별로 관심사를 구분하는데 사용되는 인기 있는 기술입니다. 그런 다음 <a href="https://github.com/survivejs/webpack-merge">webpack-merge</a>와 같은 특수 도구를 사용하여 병합됩니다.</p></aside> <aside class="tip"><h6 class="tip__prefix">tip</h6><p>플러그인에 의해 생성된 엔트리 포인트만 있는 경우 빈 객체 <code>{}</code>를 <code>entry</code>에 전달할 수 있습니다.</p></aside> <h3 id="entrydescription-object">EntryDescription object<a href="#entrydescription-object" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>엔트리 포인트 설명이 있는 객체입니다. 다음 속성을 지정할 수 있습니다.</p> <ul> <li><code>dependOn</code>: 현재 엔트리 포인트가 의존하는 엔트리 포인트. 이 엔트리 포인트를 로드하기 전에 로드해야 합니다.</li> <li><code>filename</code>: 디스크에 있는 각 출력 파일의 이름을 지정합니다.</li> <li><code>import</code>: 시작 시 로드되는 모듈입니다.</li> <li><code>library</code>: 현재 엔트리에서 라이브러리를 번들링하려면 <a href="/configuration/output/#outputlibrary">라이브러리 옵션</a>을 지정합니다.</li> <li><code>runtime</code>: 런타임 청크의 이름입니다. 설정되면 이 이름의 런타임 청크가 생성되고 그렇지 않으면 기존 엔트리 포인트의 이름이 사용됩니다.</li> <li><code>publicPath</code>: 브라우저에서 참조할 때 이 엔트리의 출력 파일에 대한 공용 URL 주소를 지정하세요. 또한 <a href="/configuration/output/#outputpublicpath">output.publicPath</a>도 참고하세요.</li> </ul> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    a2<span class="token operator">:</span> <span class="token string">\'dependingfile.js\'</span><span class="token punctuation">,</span>\n    b2<span class="token operator">:</span> <span class="token punctuation">{</span>\n      dependOn<span class="token operator">:</span> <span class="token string">\'a2\'</span><span class="token punctuation">,</span>\n      <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">\'./src/app.js\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p><code>runtime</code>과 <code>dependOn</code>은 단일 엔트리에 함께 사용해서는 안되므로, 다음 설정은 유효하지 않으며 오류가 발생합니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    a2<span class="token operator">:</span> <span class="token string">\'./a\'</span><span class="token punctuation">,</span>\n    b2<span class="token operator">:</span> <span class="token punctuation">{</span>\n      runtime<span class="token operator">:</span> <span class="token string">\'x2\'</span><span class="token punctuation">,</span>\n      dependOn<span class="token operator">:</span> <span class="token string">\'a2\'</span><span class="token punctuation">,</span>\n      <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">\'./b\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p><code>runtime</code>이 기존의 엔트리 포인트 이름을 가리키지 않아야 합니다. 예를 들어 아래 설정에서는 오류가 발생합니다.</p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    a1<span class="token operator">:</span> <span class="token string">\'./a\'</span><span class="token punctuation">,</span>\n    b1<span class="token operator">:</span> <span class="token punctuation">{</span>\n      runtime<span class="token operator">:</span> <span class="token string">\'a1\'</span><span class="token punctuation">,</span>\n      <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">\'./b\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>또한 <code>dependOn</code>은 순환이 아니어야 하며, 다음 예제에서는 다시 오류가 발생합니다.</p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    a3<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">\'./a\'</span><span class="token punctuation">,</span>\n      dependOn<span class="token operator">:</span> <span class="token string">\'b3\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    b3<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">\'./b\'</span><span class="token punctuation">,</span>\n      dependOn<span class="token operator">:</span> <span class="token string">\'a3\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h2 id="scenarios">Scenarios<a href="#scenarios" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>다음은 엔트리 설정 및 실제 사용 사례 목록입니다.</p> <h3 id="separate-app-and-vendor-entries">Separate App and Vendor Entries<a href="#separate-app-and-vendor-entries" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    main<span class="token operator">:</span> <span class="token string">\'./src/app.js\'</span><span class="token punctuation">,</span>\n    vendor<span class="token operator">:</span> <span class="token string">\'./src/vendor.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p><strong>webpack.prod.js</strong></p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  output<span class="token operator">:</span> <span class="token punctuation">{</span>\n    filename<span class="token operator">:</span> <span class="token string">\'[name].[contenthash].bundle.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p><strong>webpack.dev.js</strong></p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  output<span class="token operator">:</span> <span class="token punctuation">{</span>\n    filename<span class="token operator">:</span> <span class="token string">\'[name].bundle.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p><strong>이것은 무엇을 하나요?</strong> 위의 예와 같이 2개의 개별 엔트리 포인트를 원한다고 webpack에게 알려줍니다.</p> <p><strong>왜?</strong> 이를 통해 <code>vendor.js</code> 내에서 수정되지 않은 필수 라이브러리 또는 파일(예. Bootstrap, jQuery, images, 등)을 가져올 수 있으며, 이들은 자체 청크로 함께 번들 제공됩니다. 콘텐츠 해시는 동일하게 유지되므로, 브라우저가 별도로 캐시하여 로드 시간을 줄일 수 있습니다.</p> <aside class="tip"><h6 class="tip__prefix">tip</h6><p>webpack 버전 4 미만에서는 <code>CommonsChunkPlugin과</code> 함께 vendor를 개별 엔트리 포인트로 추가하여 개별 파일로 컴파일하는 것이 일반적이었습니다. <br><br> webpack 4에서는 이를 권장하지 않습니다. 대신, <a href="/configuration/optimization/#optimizationsplitchunks"><code>optimization.splitChunks</code></a> 옵션은 vendor와 앱 모듈을 분리하고 별도의 파일을 생성합니다. 실행의 시작점이 아닌 vendor나 기타 항목에 대한 엔트리를 생성하지 <strong>마세요</strong>.</p></aside> <h3 id="multi-page-application">Multi Page Application<a href="#multi-page-application" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n    pageOne<span class="token operator">:</span> <span class="token string">\'./src/pageOne/index.js\'</span><span class="token punctuation">,</span>\n    pageTwo<span class="token operator">:</span> <span class="token string">\'./src/pageTwo/index.js\'</span><span class="token punctuation">,</span>\n    pageThree<span class="token operator">:</span> <span class="token string">\'./src/pageThree/index.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p><strong>이것은 무엇을 하나요?</strong> 위의 예와 같이 3개의 개별 디펜던시 그래프를 원한다고 webpack에게 알려줍니다.</p> <p><strong>왜?</strong> 멀티 페이지 애플리케이션에서 서버가 새 HTML 문서를 가져옵니다. 페이지가 새 문서를 다시 로드하고 애셋이 다시 다운로드됩니다. 그러나, 이것은 <a href="/configuration/optimization/#optimizationsplitchunks"><code>optimization.splitChunks</code></a>를 사용하여 각 페이지 간에 공유되는 애플리케이션 코드 번들을 만드는 것과 같은 작업을 수행할 특별한 기회를 제공합니다. 엔트리 포인트들 사이에 코드/모듈을 많이 재사용하는 멀티 페이지 애플리케이션은 엔트리 포인트 수가 증가함에 따라 이런 기법의 혜택을 크게 얻을 수 있습니다.</p> <aside class="tip"><h6 class="tip__prefix">tip</h6><p>경험상 각 HTML의 문서에 정확히 하나의 엔트리 포인트를 사용합니다. 자세한 내용은 <a href="https://bundlers.tooling.report/code-splitting/multi-entry/#webpack">이곳에서 설명한</a> 이슈를 참고하세요.</p></aside> '}}]);