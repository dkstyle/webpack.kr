(self.webpackChunk=self.webpackChunk||[]).push([[6309],{6309:function(a,n,s){"use strict";s.r(n),n.default='<p>이 가이드에는 빌드/컴파일 성능을 개선하기 위한 몇 가지 유용한 팁이 포함되어 있습니다.</p> <hr> <h2 id="general">General<a href="#general" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>다음의 모범 사례는 <a href="/guides/development">development</a> 또는 <a href="/guides/production">production</a>에서 빌드 스크립트를 실행하는 경우 도움이 될 것입니다.</p> <h3 id="stay-up-to-date">Stay Up to Date<a href="#stay-up-to-date" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>최신 webpack 버전을 사용하세요. 우리는 항상 성능을 개선하고 있습니다. webpack의 권장 최신 버전은 다음과 같습니다.</p> <p><a href="https://github.com/webpack/webpack/releases"><img src="https://img.shields.io/github/package-json/v/webpack/webpack.svg?label=webpack&#x26;style=flat-square&#x26;maxAge=3600" alt="latest webpack version"></a></p> <p><strong>Node.js를</strong> 최신 상태로 유지하면 성능에 도움이 될 수 있습니다. 또한 패키지 관리자(예: <code>npm</code> 또는 <code>yarn</code>)를 최신 상태로 유지하는 것도 도움이 될 수 있습니다. 최신 버전은 더 효율적인 모듈 트리를 생성하고 해석하는 속도를 높입니다.</p> <h3 id="loaders">Loaders<a href="#loaders" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>최소한으로 필요한 모듈에만 로더를 적용하세요.</p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        loader<span class="token operator">:</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>위와 같은 방식보다는 아래처럼 <code>include</code> 필드를 사용하여 실제로 변환해야 하는 모듈에만 로더를 적용합니다.</p> <pre><code class="hljs language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token operator">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        include<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        loader<span class="token operator">:</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h3 id="bootstrap">Bootstrap<a href="#bootstrap" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>각각의 추가 로더/플러그인에는 부팅 시간이 있습니다. 가능한 한 도구를 적게 사용하세요.</p> <h3 id="resolving">Resolving<a href="#resolving" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>아래의 단계들로 해석 속도를 향상 시킬 수 있습니다.</p> <ul> <li>파일 시스템의 호출 수가 증가되기 때문에 <code>resolve.modules</code>, <code>resolve.extensions</code>, <code>resolve.mainFiles</code>, <code>resolve.descriptionFiles</code>의 항목 수를 최소화하세요.</li> <li>심볼릭 링크를 사용하지 않는 경우 <code>resolve.symlinks: false</code>를 설정하세요(예: <code>npm link</code> 또는 <code>yarn link</code>).</li> <li>컨텍스트에 특정적이지 않은 커스텀 해석 플러그인을 사용하는 경우 <code>resolve.cacheWithContext: false</code>를 설정하세요.</li> </ul> <h3 id="dlls">Dlls<a href="#dlls" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>자주 변경되지 않는 코드를 별도의 컴파일로 이동하려면 <code>DllPlugin</code>을 사용하세요. 이렇게 하면 빌드 프로세스가 복잡해 지지만 애플리케이션의 컴파일 속도가 향상됩니다.</p> <h3 id="smaller--faster">Smaller = Faster<a href="#smaller--faster" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>빌드 성능을 높이려면 컴파일의 총 크기를 줄이세요. 청크를 작게 유지하세요.</p> <ul> <li>더 적고 작은 라이브러리 사용</li> <li>다중 페이지 애플리케이션에서 <code>SplitChunksPlugin</code>을 사용</li> <li>다중 페이지 애플리케이션의 <code>async</code> 모드에서 <code>SplitChunksPlugin</code>을 사용</li> <li>사용하지 않는 코드를 제거</li> <li>현재 개발중인 코드의 일부만 컴파일</li> </ul> <h3 id="worker-pool">Worker Pool<a href="#worker-pool" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><code>thread-loader</code>는 작업량이 큰 로더를 worker 풀에 작업을 분담할 때 사용할 수 있습니다.</p> <aside class="warning"><h6 class="warning__prefix">warning</h6><p>Node.js 런타임 및 로더에 대한 부팅 오버헤드가 있음으로 너무 많은 worker를 사용하지 마세요. worker와 메인 프로세스 간의 모듈 전송을 최소화하세요. IPC는 큰 비용을 필요로 합니다.</p></aside> <h3 id="persistent-cache">Persistent cache<a href="#persistent-cache" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>webpack 설정에서 <a href="/configuration/other-options/#cache"><code>cache</code></a> 옵션을 사용하세요. <code>package.json</code>의 <code>"postinstall"</code>에서 캐시 디렉터리를 지우세요.</p> <aside class="tip"><h6 class="tip__prefix">tip</h6><p>영구 캐싱을 위해 yarn PnP 버전 3 <a href="https://yarnpkg.com/features/pnp"><code>yarn 2 berry</code></a>를 지원합니다.</p></aside> <h3 id="custom-pluginsloaders">Custom plugins/loaders<a href="#custom-pluginsloaders" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>커스텀 플러그인과 로더에서 성능 문제가 발생하지 않도록 프로파일 하세요.</p> <h3 id="progress-plugin">Progress plugin<a href="#progress-plugin" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>webpack 구성에서 <code>ProgressPlugin</code>을 제거하여 빌드 시간을 단축 할 수 있습니다. <code>ProgressPlugin</code>은 빠른 빌드에 유용하지 않을 수 있기 때문에 이점을 잘 활용하고 있는지 확인하세요.</p> <hr> <h2 id="development">Development<a href="#development" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>다음 단계는 <em>개발 단계에서</em> 특히 유용합니다.</p> <h3 id="incremental-builds">Incremental Builds<a href="#incremental-builds" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>webpack의 watch 모드를 사용하세요. 다른 도구를 사용하여 파일을 보고 webpack을 호출하지 마세요. 내장된 watch 모드는 타임 스탬프를 추적하고 캐시 무효화를 위해 이 정보를 컴파일에 전달합니다.</p> <p>일부 설정에서는 watch가 폴링 모드로 돌아갑니다. watch 되는 파일이 많으면 이로 인해 많은 CPU 로드가 발생할 수 있습니다. 이 경우 <code>watchOptions.poll</code>을 사용하여 폴링 간격을 늘릴 수 있습니다.</p> <h3 id="compile-in-memory">Compile in Memory<a href="#compile-in-memory" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>아래의 유틸리티는 디스크에 쓰는 대신 메모리에서 애셋을 컴파일하고 제공하여 성능을 향상시킵니다.</p> <ul> <li><code>webpack-dev-server</code></li> <li><code>webpack-hot-middleware</code></li> <li><code>webpack-dev-middleware</code></li> </ul> <h3 id="statstojson-speed">stats.toJson speed<a href="#statstojson-speed" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>webpack 4는 기본적으로 <code>stats.toJson()</code>을 사용하여 많은 양의 데이터를 출력합니다. 증분 단계에서 필요한 경우가 아니면 <code>stats</code> 개체의 일부를 찾지 마세요. v3.1.3 이후의 <code>webpack-dev-server</code>에는 증분 빌드 단계에서 <code>stats</code> 객체에서 검색되는 데이터의 양을 최소화하기 위한 상당한 성능 수정이 포함되었습니다.</p> <h3 id="devtool">Devtool<a href="#devtool" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>서로 다른 <code>devtool</code> 설정 간의 성능 차이에 유의하세요.</p> <ul> <li><code>"eval"</code>은 성능이 좋지만 트랜스파일 된 코드에는 도움이 되지 않습니다.</li> <li><code>cheap-source-map</code> 변형은 매핑의 질이 약간 떨어지지만, 성능이 좋습니다.</li> <li>증분 빌드에서는 <code>eval-source-map</code> 변형을 사용합니다.</li> </ul> <aside class="tip"><h6 class="tip__prefix">tip</h6><p>대부분의 경우 <code>eval-cheap-module-source-map</code>이 가장 좋은 옵션입니다.</p></aside> <h3 id="avoid-production-specific-tooling">Avoid Production Specific Tooling<a href="#avoid-production-specific-tooling" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>특정 유틸리티, 플러그인 및 로더는 production으로 빌드할 때만 의미가 있습니다. 예를 들어, 개발 중에 <code>TerserPlugin</code>을 사용하여 코드를 축소하고 조작하는 것은 일반적으로 이치에 맞지 않습니다. 이러한 도구는 일반적으로 개발 단계에서 제외되어야 합니다.</p> <ul> <li><code>TerserPlugin</code></li> <li><code>[fullhash]</code>/<code>[chunkhash]</code>/<code>[contenthash]</code></li> <li><code>AggressiveSplittingPlugin</code></li> <li><code>AggressiveMergingPlugin</code></li> <li><code>ModuleConcatenationPlugin</code></li> </ul> <h3 id="minimal-entry-chunk">Minimal Entry Chunk<a href="#minimal-entry-chunk" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>webpack은 파일 시스템에 업데이트된 청크만 내보냅니다. 일부 설정 옵션의 경우(HMR, <code>output.chunkFilename</code>,<code>[fullhash]</code> 안의 <code>[name]</code>/<code>[chunkhash]</code>/<code>[contenthash]</code>) 변경된 청크와 함께 엔트리 청크가 무효화됩니다.</p> <p>엔트리 청크를 작게 유지하여 내보내는 비용이 저렴한지 확인하세요. 아래의 설정은 런타임 코드에 대한 추가 청크를 생성하므로 생성 비용이 저렴합니다.</p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  optimization<span class="token operator">:</span> <span class="token punctuation">{</span>\n    runtimeChunk<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h3 id="avoid-extra-optimization-steps">Avoid Extra Optimization Steps<a href="#avoid-extra-optimization-steps" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>webpack은 크기 및 부하 성능에 대한 출력을 최적화하기 위해 추가 알고리즘 작업을 수행합니다. 이러한 최적화는 작은 코드 베이스에서는 성능이 좋지만 큰 코드에서는 비용이 많이들 수 있습니다.</p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  optimization<span class="token operator">:</span> <span class="token punctuation">{</span>\n    removeAvailableModules<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    removeEmptyChunks<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    splitChunks<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h3 id="output-without-path-info">Output Without Path Info<a href="#output-without-path-info" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>webpack은 출력 번들에 경로 정보를 생성하는 기능이 있습니다. 그러나 이것은 수천 개의 모듈을 번들로 묶는 프로젝트에서 가비지 컬렉션에 과부화를 줍니다. <code>options.output.pathinfo</code> 설정에서 이 기능을 끄세요.</p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  output<span class="token operator">:</span> <span class="token punctuation">{</span>\n    pathinfo<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <h3 id="nodejs-versions-8910-9111">Node.js Versions 8.9.10-9.11.1<a href="#nodejs-versions-8910-9111" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>Node.js 버전 8.9.10 - 9.11.1의 ES2015 <code>Map</code> 및 <code>Set</code> 구현에서 <a href="https://github.com/nodejs/node/issues/19769">성능 저하</a>가 있었습니다. webpack은 이러한 데이터 구조를 자유롭게 사용하므로 이 성능저하는 컴파일 시간에 영향을 줍니다.</p> <p>이전 및 이후 Node.js 버전은 영향을 받지 않습니다.</p> <h3 id="typescript-loader">TypeScript Loader<a href="#typescript-loader" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><code>ts-loader</code>를 사용할 때 빌드 시간을 개선하려면 <code>transpileOnly</code> 로더 옵션을 사용하세요. 이 옵션은 자체적으로 타입 검사를 해제합니다. 타입 검사를 다시 받으려면 <a href="https://www.npmjs.com/package/fork-ts-checker-webpack-plugin"><code>ForkTsCheckerWebpackPlugin</code></a>을 사용하세요. 이렇게 각각 별도의 프로세스로 이동시키면 TypeScript 유형 검사 및 ESLint linting 속도가 빨라집니다.</p> <pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  test<span class="token operator">:</span> <span class="token regex">/\\.tsx?$/</span><span class="token punctuation">,</span>\n  use<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token operator">:</span> <span class="token string">\'ts-loader\'</span><span class="token punctuation">,</span>\n      options<span class="token operator">:</span> <span class="token punctuation">{</span>\n        transpileOnly<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <aside class="tip"><h6 class="tip__prefix">tip</h6><p><code>ts-loader</code> GitHub 저장소에 <a href="https://github.com/TypeStrong/ts-loader/tree/master/examples/fork-ts-checker-webpack-plugin">전체 예시</a>가 있습니다.</p></aside> <hr> <h2 id="production">Production<a href="#production" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>다음 단계는 <em>production에서</em> 특히 유용합니다.</p> <aside class="warning"><h6 class="warning__prefix">warning</h6><p><strong>작은 성능 향상을 위해 애플리케이션의 품질을 희생하지 마세요!</strong> 대부분의 경우 최적화 품질이 빌드 성능보다 더 중요합니다.</p></aside> <h3 id="multiple-compilations">Multiple Compilations<a href="#multiple-compilations" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>다중 컴파일을 사용할 때 다음 도구가 도움이 될 수 있습니다.</p> <ul> <li><a href="https://github.com/trivago/parallel-webpack"><code>parallel-webpack</code></a>: worker 풀에서 컴파일 할 수 있습니다.</li> <li><code>cache-loader</code>: 캐시는 여러 컴파일 간에 공유될 수 있습니다.</li> </ul> <h3 id="source-maps">Source Maps<a href="#source-maps" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>소스맵은 비용이 많이 듭니다. 정말로 필요한가요?</p> <hr> <h2 id="specific-tooling-issues">Specific Tooling Issues<a href="#specific-tooling-issues" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>다음 도구에는 빌드 성능을 저하시킬 수 있는 특정 문제가 있습니다.</p> <h3 id="babel">Babel<a href="#babel" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <ul> <li>preset/plugins 수를 최소화하세요.</li> </ul> <h3 id="typescript">TypeScript<a href="#typescript" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <ul> <li>별도의 프로세스에서 타입 검사를 위해 <code>fork-ts-checker-webpack-plugin</code>을 사용하세요.</li> <li>타입 검사를 건너뛰도록 로더를 설정합니다.</li> <li><code>happyPackMode: true</code> / <code>transpileOnly: true</code>에서 <code>ts-loader</code>를 사용합니다.</li> </ul> <h3 id="sass">Sass<a href="#sass" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <ul> <li><code>node-sass</code>에는 Node.js 스레드 풀의 스레드를 차단하는 버그가 있습니다. <code>thread-loader</code>와 함께 사용하는 경우 <code>workerParallelJobs: 2</code>를 설정하세요.</li> </ul> '}}]);