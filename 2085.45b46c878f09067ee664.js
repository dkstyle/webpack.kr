(self.webpackChunk=self.webpackChunk||[]).push([[2085],{2085:function(n,s,a){"use strict";a.r(s),s.default='<aside class="tip"><h6 class="tip__prefix">tip</h6><p>이 가이드는 <a href="/guides/getting-started">Getting Started</a>에 제공된 예제를 기준으로 합니다. 해당 예제와 <a href="/guides/output-management/">Output Management</a> 챕터를 미리 알아두도록 합니다.</p></aside> <p>코드 스플리팅은 webpack의 가장 매력적인 기능 중 하나입니다. 이 기능을 사용하여 코드를 다양한 번들로 분할하고, 요청에 따라 로드하거나 병렬로 로드할 수 있습니다. 더 작은 번들을 만들고 리소스 우선순위를 올바르게 제어하기 위해서 사용하며, 잘 활용하면 로드 시간에 큰 영향을 끼칠 수 있습니다.</p> <p>일반적으로 코드 스플리팅은 세 가지 방식으로 접근할 수 있습니다.</p> <ul> <li><strong>Entry Points</strong>: <a href="/configuration/entry-context"><code>entry</code></a> 설정을 사용하여 코드를 수동으로 분할합니다.</li> <li><strong>Prevent Duplication</strong>: <a href="/configuration/entry-context/#dependencies">Entry dependencies</a> 또는 <a href="/plugins/split-chunks-plugin/"><code>SplitChunksPlugin</code></a>을 사용하여 중복 청크를 제거하고 청크를 분할합니다.</li> <li><strong>Dynamic Imports</strong>: 모듈 내에서 인라인 함수 호출을 통해 코드를 분할합니다.</li> </ul> <h2 id="entry-points">Entry Points<a href="#entry-points" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>코드를 분할하는 가장 쉽고 직관적인 방법입니다. 그러나 다른 방법에 비해 수동적이며, 같이 살펴볼 몇 가지 함정이 있습니다. 메인 번들에서 다른 모듈을 어떻게 분리하는지 알아보겠습니다.</p> <p><strong>project</strong></p> <pre><code class="hljs language-diff">webpack-demo\n|- package.json\n|- webpack.config.js\n|- /dist\n|- /src\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> |- index.js\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> |- another-module.js\n</span></span>|- /node_modules</code></pre> <p><strong>another-module.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">import</span> _ <span class="token keyword">from</span> <span class="token string">\'lodash\'</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'Another\'</span><span class="token punctuation">,</span> <span class="token string">\'module\'</span><span class="token punctuation">,</span> <span class="token string">\'loaded!\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">const path = require(\'path\');\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">module.exports = {\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  entry: \'./src/index.js\',\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  mode: \'development\',\n</span><span class="token prefix inserted">+</span><span class="token line">  entry: {\n</span><span class="token prefix inserted">+</span><span class="token line">    index: \'./src/index.js\',\n</span><span class="token prefix inserted">+</span><span class="token line">    another: \'./src/another-module.js\',\n</span><span class="token prefix inserted">+</span><span class="token line">  },\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">  output: {\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    filename: \'main.js\',\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    filename: \'[name].bundle.js\',\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">    path: path.resolve(__dirname, \'dist\'),\n</span><span class="token prefix unchanged"> </span><span class="token line">  },\n</span><span class="token prefix unchanged"> </span><span class="token line">};</span></span></code></pre> <p>다음과 같은 빌드 결과가 생성됩니다.</p> <pre><code class="hljs language-bash"><span class="token punctuation">..</span>.\n<span class="token punctuation">[</span>webpack-cli<span class="token punctuation">]</span> Compilation finished\nasset index.bundle.js <span class="token number">553</span> KiB <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span> <span class="token punctuation">(</span>name: index<span class="token punctuation">)</span>\nasset another.bundle.js <span class="token number">553</span> KiB <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span> <span class="token punctuation">(</span>name: another<span class="token punctuation">)</span>\nruntime modules <span class="token number">2.49</span> KiB <span class="token number">12</span> modules\ncacheable modules <span class="token number">530</span> KiB\n  ./src/index.js <span class="token number">257</span> bytes <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\n  ./src/another-module.js <span class="token number">84</span> bytes <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\n  ./node_modules/lodash/lodash.js <span class="token number">530</span> KiB <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\nwebpack <span class="token number">5.4</span>.0 compiled successfully <span class="token keyword">in</span> <span class="token number">245</span> ms</code></pre> <p>언급했듯이 이 접근 방식에는 몇 가지 함정이 있습니다.</p> <ul> <li>엔트리 청크 사이에 중복된 모듈이 있는 경우 두 번들에 모두 포함됩니다.</li> <li>코어 애플리케이션 로직을 통한 코드의 동적 분할에는 사용할 수 없으며 유연하지 않습니다.</li> </ul> <p>이 중 첫 번째 항목을 통해 지금 예제의 문제를 알 수 있습니다. 왜냐하면 <code>./src/index.js</code>에서도 <code>lodash</code>를 가져오므로 양쪽 번들에서 중복으로 포함되기 때문입니다. 다음 섹션에서 중복된 것을 제거하겠습니다.</p> <h2 id="prevent-duplication">Prevent Duplication<a href="#prevent-duplication" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <h3 id="entry-dependencies">Entry dependencies<a href="#entry-dependencies" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><a href="/configuration/entry-context/#dependencies"><code>dependOn</code> 옵션</a>을 사용하면 청크간 모듈을 공유할 수 있습니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">const path = require(\'path\');\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">module.exports = {\n</span><span class="token prefix unchanged"> </span><span class="token line">  mode: \'development\',\n</span><span class="token prefix unchanged"> </span><span class="token line">  entry: {\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    index: \'./src/index.js\',\n</span><span class="token prefix deleted">-</span><span class="token line">    another: \'./src/another-module.js\',\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    index: {\n</span><span class="token prefix inserted">+</span><span class="token line">      import: \'./src/index.js\',\n</span><span class="token prefix inserted">+</span><span class="token line">      dependOn: \'shared\',\n</span><span class="token prefix inserted">+</span><span class="token line">    },\n</span><span class="token prefix inserted">+</span><span class="token line">    another: {\n</span><span class="token prefix inserted">+</span><span class="token line">      import: \'./src/another-module.js\',\n</span><span class="token prefix inserted">+</span><span class="token line">      dependOn: \'shared\',\n</span><span class="token prefix inserted">+</span><span class="token line">    },\n</span><span class="token prefix inserted">+</span><span class="token line">    shared: \'lodash\',\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">  },\n</span><span class="token prefix unchanged"> </span><span class="token line">  output: {\n</span><span class="token prefix unchanged"> </span><span class="token line">    filename: \'[name].bundle.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">    path: path.resolve(__dirname, \'dist\'),\n</span><span class="token prefix unchanged"> </span><span class="token line">  },\n</span><span class="token prefix unchanged"> </span><span class="token line">};</span></span></code></pre> <p>단일 HTML 페이지에서 여러 엔트리 포인트를 사용하는 경우 <code>optimization.runtimeChunk: \'single\'</code>도 필요합니다. 그렇지 않으면 <a href="https://bundlers.tooling.report/">여기</a>에서 설명하는 문제가 발생할 수 있습니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">const path = require(\'path\');\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">module.exports = {\n</span><span class="token prefix unchanged"> </span><span class="token line">  mode: \'development\',\n</span><span class="token prefix unchanged"> </span><span class="token line">  entry: {\n</span><span class="token prefix unchanged"> </span><span class="token line">    index: {\n</span><span class="token prefix unchanged"> </span><span class="token line">      import: \'./src/index.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">      dependOn: \'shared\',\n</span><span class="token prefix unchanged"> </span><span class="token line">    },\n</span><span class="token prefix unchanged"> </span><span class="token line">    another: {\n</span><span class="token prefix unchanged"> </span><span class="token line">      import: \'./src/another-module.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">      dependOn: \'shared\',\n</span><span class="token prefix unchanged"> </span><span class="token line">    },\n</span><span class="token prefix unchanged"> </span><span class="token line">    shared: \'lodash\',\n</span><span class="token prefix unchanged"> </span><span class="token line">  },\n</span><span class="token prefix unchanged"> </span><span class="token line">  output: {\n</span><span class="token prefix unchanged"> </span><span class="token line">    filename: \'[name].bundle.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">    path: path.resolve(__dirname, \'dist\'),\n</span><span class="token prefix unchanged"> </span><span class="token line">  },\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  optimization: {\n</span><span class="token prefix inserted">+</span><span class="token line">    runtimeChunk: \'single\',\n</span><span class="token prefix inserted">+</span><span class="token line">  },\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">};</span></span></code></pre> <p>다음은 빌드 결과입니다.</p> <pre><code class="hljs language-bash"><span class="token punctuation">..</span>.\n<span class="token punctuation">[</span>webpack-cli<span class="token punctuation">]</span> Compilation finished\nasset shared.bundle.js <span class="token number">549</span> KiB <span class="token punctuation">[</span>compared <span class="token keyword">for</span> emit<span class="token punctuation">]</span> <span class="token punctuation">(</span>name: shared<span class="token punctuation">)</span>\nasset runtime.bundle.js <span class="token number">7.79</span> KiB <span class="token punctuation">[</span>compared <span class="token keyword">for</span> emit<span class="token punctuation">]</span> <span class="token punctuation">(</span>name: runtime<span class="token punctuation">)</span>\nasset index.bundle.js <span class="token number">1.77</span> KiB <span class="token punctuation">[</span>compared <span class="token keyword">for</span> emit<span class="token punctuation">]</span> <span class="token punctuation">(</span>name: index<span class="token punctuation">)</span>\nasset another.bundle.js <span class="token number">1.65</span> KiB <span class="token punctuation">[</span>compared <span class="token keyword">for</span> emit<span class="token punctuation">]</span> <span class="token punctuation">(</span>name: another<span class="token punctuation">)</span>\nEntrypoint index <span class="token number">1.77</span> KiB <span class="token operator">=</span> index.bundle.js\nEntrypoint another <span class="token number">1.65</span> KiB <span class="token operator">=</span> another.bundle.js\nEntrypoint shared <span class="token number">557</span> KiB <span class="token operator">=</span> runtime.bundle.js <span class="token number">7.79</span> KiB shared.bundle.js <span class="token number">549</span> KiB\nruntime modules <span class="token number">3.76</span> KiB <span class="token number">7</span> modules\ncacheable modules <span class="token number">530</span> KiB\n  ./node_modules/lodash/lodash.js <span class="token number">530</span> KiB <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\n  ./src/another-module.js <span class="token number">84</span> bytes <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\n  ./src/index.js <span class="token number">257</span> bytes <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\nwebpack <span class="token number">5.4</span>.0 compiled successfully <span class="token keyword">in</span> <span class="token number">249</span> ms</code></pre> <p>보시다시피 <code>shared.bundle.js</code>, <code>index.bundle.js</code> 및 <code>another.bundle.js</code> 외에 또 다른 <code>runtime.bundle.js</code> 파일이 생성됩니다.</p> <p>webpack은 하나의 페이지에 여러 엔트리 포인트를 허용하지만, 가능하다면 <code>entry: { page: [\'./analytics\', \'./app\'] }</code>처럼 여러 개의 import가 포함된 엔트리 포인트 사용을 피해야 합니다. 이는 <code>async</code> 스크립트 태그를 사용할 때 최적화에 용이하며 일관된 순서로 실행할 수 있도록 합니다.</p> <h3 id="splitchunksplugin"><code>SplitChunksPlugin</code><a href="#splitchunksplugin" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><a href="/plugins/split-chunks-plugin/"><code>SplitChunksPlugin</code></a>을 사용하면 기존 엔트리 청크 또는 완전히 새로운 청크로 공통 의존성을 추출할 수 있습니다. 이를 활용하여 이전 예제의 <code>lodash</code> 중복을 제거해 보겠습니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> const path = require(\'path\');\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> module.exports = {\n</span><span class="token prefix unchanged"> </span><span class="token line">   mode: \'development\',\n</span><span class="token prefix unchanged"> </span><span class="token line">   entry: {\n</span><span class="token prefix unchanged"> </span><span class="token line">     index: \'./src/index.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">     another: \'./src/another-module.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">   },\n</span><span class="token prefix unchanged"> </span><span class="token line">   output: {\n</span><span class="token prefix unchanged"> </span><span class="token line">     filename: \'[name].bundle.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">     path: path.resolve(__dirname, \'dist\'),\n</span><span class="token prefix unchanged"> </span><span class="token line">   },\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   optimization: {\n</span><span class="token prefix inserted">+</span><span class="token line">     splitChunks: {\n</span><span class="token prefix inserted">+</span><span class="token line">       chunks: \'all\',\n</span><span class="token prefix inserted">+</span><span class="token line">     },\n</span><span class="token prefix inserted">+</span><span class="token line">   },\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> };</span></span></code></pre> <p><a href="/plugins/split-chunks-plugin/#optimizationsplitchunks"><code>optimization.splitChunks</code></a> 설정 옵션을 적용하면 <code>index.bundle.js</code>와 <code>another.bundle.js</code>에서 중복 의존성이 제거된 것을 확인 할 수 있습니다. 플러그인은 <code>lodash</code>가 별도의 청크로 분리되었고 메인 번들에서도 제거된 것을 알 수 있습니다. 잘 동작하는지 확인하기 위해 <code>npm run build</code>를 실행해 보겠습니다.</p> <pre><code class="hljs language-bash"><span class="token punctuation">..</span>.\n<span class="token punctuation">[</span>webpack-cli<span class="token punctuation">]</span> Compilation finished\nasset vendors-node_modules_lodash_lodash_js.bundle.js <span class="token number">549</span> KiB <span class="token punctuation">[</span>compared <span class="token keyword">for</span> emit<span class="token punctuation">]</span> <span class="token punctuation">(</span>id hint: vendors<span class="token punctuation">)</span>\nasset index.bundle.js <span class="token number">8.92</span> KiB <span class="token punctuation">[</span>compared <span class="token keyword">for</span> emit<span class="token punctuation">]</span> <span class="token punctuation">(</span>name: index<span class="token punctuation">)</span>\nasset another.bundle.js <span class="token number">8.8</span> KiB <span class="token punctuation">[</span>compared <span class="token keyword">for</span> emit<span class="token punctuation">]</span> <span class="token punctuation">(</span>name: another<span class="token punctuation">)</span>\nEntrypoint index <span class="token number">558</span> KiB <span class="token operator">=</span> vendors-node_modules_lodash_lodash_js.bundle.js <span class="token number">549</span> KiB index.bundle.js <span class="token number">8.92</span> KiB\nEntrypoint another <span class="token number">558</span> KiB <span class="token operator">=</span> vendors-node_modules_lodash_lodash_js.bundle.js <span class="token number">549</span> KiB another.bundle.js <span class="token number">8.8</span> KiB\nruntime modules <span class="token number">7.64</span> KiB <span class="token number">14</span> modules\ncacheable modules <span class="token number">530</span> KiB\n  ./src/index.js <span class="token number">257</span> bytes <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\n  ./src/another-module.js <span class="token number">84</span> bytes <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\n  ./node_modules/lodash/lodash.js <span class="token number">530</span> KiB <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\nwebpack <span class="token number">5.4</span>.0 compiled successfully <span class="token keyword">in</span> <span class="token number">241</span> ms</code></pre> <p>다음은 코드 스플리팅을 위해 커뮤니티에서 제공하는 다른 유용한 플러그인과 로더입니다.</p> <p>-<a href="/plugins/mini-css-extract-plugin"><code>mini-css-extract-plugin</code></a> : 메인 애플리케이션에서 CSS를 분리하는데 유용합니다.</p> <h2 id="dynamic-imports">Dynamic Imports<a href="#dynamic-imports" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>webpack은 동적 코드 스플리팅에 두 가지 유사한 기술을 지원합니다. 첫 번째이자 권장하는 접근 방식은 <a href="https://github.com/tc39/proposal-dynamic-import">ECMAScript 제안을</a> 준수하는 <a href="/api/module-methods/#import-1"><code>import()</code>구문</a>을 사용하는 방식입니다. 기존의 webpack 전용 방식은 <a href="/api/module-methods/#requireensure"><code>require.ensure</code></a>를 사용하는 것입니다. 이 두 가지 중 첫 번째를 사용해 보겠습니다.</p> <aside class="warning"><h6 class="warning__prefix">warning</h6><p><code>import()</code> 호출은 내부적으로 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">promises</a>를 사용합니다. 이전 브라우저(예: IE 11)에서 <code>import()</code>를 사용하는 경우 <a href="https://github.com/stefanpenner/es6-promise">es6-promise</a>나 <a href="https://github.com/taylorhakes/promise-polyfill">promise-polyfill</a>과 같은 폴리필을 사용하여 <code>Promise</code>를 지원하도록 해야 합니다.</p></aside> <p>시작하기 전에 위 예제의 설정에서 추가 <a href="/concepts/entry-points/"><code>entry</code></a> 및 <a href="/plugins/split-chunks-plugin"><code>optimization.splitChunks</code></a>를 제거하겠습니다. 다음 데모에는 필요하지 않습니다.</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-diff"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">const path = require(\'path\');\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">module.exports = {\n</span><span class="token prefix unchanged"> </span><span class="token line">  mode: \'development\',\n</span><span class="token prefix unchanged"> </span><span class="token line">  entry: {\n</span><span class="token prefix unchanged"> </span><span class="token line">    index: \'./src/index.js\',\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">    another: \'./src/another-module.js\',\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">  },\n</span><span class="token prefix unchanged"> </span><span class="token line">  output: {\n</span><span class="token prefix unchanged"> </span><span class="token line">    filename: \'[name].bundle.js\',\n</span><span class="token prefix unchanged"> </span><span class="token line">    path: path.resolve(__dirname, \'dist\'),\n</span><span class="token prefix unchanged"> </span><span class="token line">  },\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  optimization: {\n</span><span class="token prefix deleted">-</span><span class="token line">    splitChunks: {\n</span><span class="token prefix deleted">-</span><span class="token line">      chunks: \'all\',\n</span><span class="token prefix deleted">-</span><span class="token line">    },\n</span><span class="token prefix deleted">-</span><span class="token line">  },\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">};</span></span></code></pre> <p>또한 현재 사용하지 않는 파일을 프로젝트에서 제거하겠습니다.</p> <p><strong>project</strong></p> <pre><code class="hljs language-diff">webpack-demo\n|- package.json\n|- webpack.config.js\n|- /dist\n|- /src\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> |- index.js\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> |- another-module.js\n</span></span>|- /node_modules</code></pre> <p>이제 정적으로 가져오던 <code>lodash</code>를 동적으로 가져와서 청크를 분리해보겠습니다.</p> <p><strong>src/index.js</strong></p> <pre><code class="hljs language-diff"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">import _ from \'lodash\';\n</span><span class="token prefix deleted">-</span><span class="token line">\n</span><span class="token prefix deleted">-</span><span class="token line">function component() {\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">function getComponent() {\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">  const element = document.createElement(\'div\');\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  // Lodash, now imported by this script\n</span><span class="token prefix deleted">-</span><span class="token line">  element.innerHTML = _.join([\'Hello\', \'webpack\'], \' \');\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  return import(\'lodash\')\n</span><span class="token prefix inserted">+</span><span class="token line">    .then(({ default: _ }) => {\n</span><span class="token prefix inserted">+</span><span class="token line">      const element = document.createElement(\'div\');\n</span><span class="token prefix inserted">+</span><span class="token line">\n</span><span class="token prefix inserted">+</span><span class="token line">      element.innerHTML = _.join([\'Hello\', \'webpack\'], \' \');\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  return element;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">      return element;\n</span><span class="token prefix inserted">+</span><span class="token line">    })\n</span><span class="token prefix inserted">+</span><span class="token line">    .catch((error) => \'An error occurred while loading the component\');\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">}\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">document.body.appendChild(component());\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">getComponent().then((component) => {\n</span><span class="token prefix inserted">+</span><span class="token line">  document.body.appendChild(component);\n</span><span class="token prefix inserted">+</span><span class="token line">});</span></span></code></pre> <p><code>default</code>가 필요한 이유는 webpack 4 이후로 CommonJS 모듈을 가져올 때 더 이상 <code>module.exports</code> 값 으로 해석되지 않으며 대신 CommonJS 모듈에 대한 인공 네임 스페이스 객체를 생성하기 때문입니다. 그 이유에 대한 자세한 내용은 <a href="https://medium.com/webpack/webpack-4-import-and-commonjs-d619d626b655">webpack 4: import() 및 CommonJs</a>를 참고하세요.</p> <p>webpack을 실행하여 <code>lodash</code>가 별도의 번들로 분리되어 있는지 살펴보겠습니다.</p> <pre><code class="hljs language-bash"><span class="token punctuation">..</span>.\n<span class="token punctuation">[</span>webpack-cli<span class="token punctuation">]</span> Compilation finished\nasset vendors-node_modules_lodash_lodash_js.bundle.js <span class="token number">549</span> KiB <span class="token punctuation">[</span>compared <span class="token keyword">for</span> emit<span class="token punctuation">]</span> <span class="token punctuation">(</span>id hint: vendors<span class="token punctuation">)</span>\nasset index.bundle.js <span class="token number">13.5</span> KiB <span class="token punctuation">[</span>compared <span class="token keyword">for</span> emit<span class="token punctuation">]</span> <span class="token punctuation">(</span>name: index<span class="token punctuation">)</span>\nruntime modules <span class="token number">7.37</span> KiB <span class="token number">11</span> modules\ncacheable modules <span class="token number">530</span> KiB\n  ./src/index.js <span class="token number">434</span> bytes <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\n  ./node_modules/lodash/lodash.js <span class="token number">530</span> KiB <span class="token punctuation">[</span>built<span class="token punctuation">]</span> <span class="token punctuation">[</span>code generated<span class="token punctuation">]</span>\nwebpack <span class="token number">5.4</span>.0 compiled successfully <span class="token keyword">in</span> <span class="token number">268</span> ms</code></pre> <p><code>import()</code>는 promise를 반환하므로 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"><code>async</code> 함수</a>와 함께 사용할 수 있습니다. 코드를 단순화하는 방법은 다음과 같습니다.</p> <p><strong>src/index.js</strong></p> <pre><code class="hljs language-diff"><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">function getComponent() {\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">async function getComponent() {\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">  const element = document.createElement(\'div\');\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  const { default: _ } = await import(\'lodash\');\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  return import(\'lodash\')\n</span><span class="token prefix deleted">-</span><span class="token line">    .then(({ default: _ }) => {\n</span><span class="token prefix deleted">-</span><span class="token line">      const element = document.createElement(\'div\');\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  element.innerHTML = _.join([\'Hello\', \'webpack\'], \' \');\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">      element.innerHTML = _.join([\'Hello\', \'webpack\'], \' \');\n</span><span class="token prefix deleted">-</span><span class="token line">\n</span><span class="token prefix deleted">-</span><span class="token line">      return element;\n</span><span class="token prefix deleted">-</span><span class="token line">    })\n</span><span class="token prefix deleted">-</span><span class="token line">    .catch((error) => \'An error occurred while loading the component\');\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  return element;\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">}\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">getComponent().then((component) => {\n</span><span class="token prefix unchanged"> </span><span class="token line">  document.body.appendChild(component);\n</span><span class="token prefix unchanged"> </span><span class="token line">});</span></span></code></pre> <aside class="tip"><h6 class="tip__prefix">tip</h6><p>나중에 계산된 변수를 기반으로 특정 모듈을 가져와야 할 경우 <code>import()</code>에 <a href="/api/module-methods/#dynamic-expressions-in-import">dynamic expression</a>을 사용 할 수 있습니다.</p></aside> <h2 id="prefetchingpreloading-modules">Prefetching/Preloading modules<a href="#prefetchingpreloading-modules" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>webpack 4.6.0+에서 프리페치 및 프리로드에 대한 지원이 추가되었습니다.</p> <p>모듈을 가져올 때 인라인 지시문을 사용하면 webpack이 브라우저에 아래와 같은 "리소스 힌트"를 줄 수 있습니다.</p> <ul> <li><strong>prefetch</strong> : 향후 일부 탐색에 리소스가 필요할 수 있습니다.</li> <li><strong>preload</strong> : 현재 탐색 중에 리소스도 필요합니다.</li> </ul> <p>간단한 프리페치의 예제를 들어보겠습니다. <code>HomePage</code> 컴포넌트에서 <code>LoginButton</code> 컴포넌트를 렌더링하고, 이 컴포넌트를 클릭하면 <code>LoginModal</code> 컴포넌트를 요청하여 로드하는 경우입니다.</p> <p><strong>LoginButton.js</strong></p> <pre><code class="hljs language-js"><span class="token comment">//...</span>\n<span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackPrefetch: true */</span> <span class="token string">\'./path/to/LoginModal.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p>이는 페이지 head에 <code>&#x3C;link rel="prefetch" href="login-modal-chunk.js"></code>를 추가하고 브라우저에 <code>login-modal-chunk.js</code>를 유휴 시간에 미리 가져오도록 지시합니다.</p> <aside class="tip"><h6 class="tip__prefix">tip</h6><p>webpack은 부모 청크가 로드된 후 프리페치 힌트를 추가합니다.</p></aside> <p>프리로드 지시문은 프리페치와 비교했을 때 여러 가지 차이점이 있습니다.</p> <ul> <li>프리로드 청크는 부모 청크와 병렬로 로드를 시작합니다. 프리페치 청크는 부모 청크가 로드 완료된 후에 로드를 시작합니다.</li> <li>프리로드 청크는 중간 우선순위를 가지며 즉시 다운로드됩니다. 프리페치 청크는 브라우저가 유휴 상태일 때 다운로드 됩니다.</li> <li>프리로드 청크는 부모 청크에서 즉시 요청 되어야 합니다. 프리페치 청크는 나중에 언제라도 사용할 수 있습니다.</li> <li>지원하는 브라우저에 차이가 있습니다.</li> </ul> <p>간단한 프리로드의 예로는, 별도의 청크에 있어야 하는 큰 라이브러리에 항상 의존하는 <code>Component</code>를 생각해 볼 수 있습니다.</p> <p>거대한 <code>ChartingLibrary</code>가 필요한 <code>ChartComponent</code>를 상상해 봅시다. 렌더링 될 때 <code>LoadingIndicator</code>를 표시하고 즉시 <code>ChartingLibrary</code>를 요청하여 불러옵니다.</p> <p><strong>ChartComponent.js</strong></p> <pre><code class="hljs language-js"><span class="token comment">//...</span>\n<span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackPreload: true */</span> <span class="token string">\'ChartingLibrary\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p><code>ChartComponent</code>를 사용하는 페이지를 요청할 때 <code>&#x3C;link rel="preload"></code>를 통해 charting-library-chunk도 요청됩니다. page-chunk가 더 작고 더 빨리 완료된다고 가정하면 이미 요청된 <code>charting-library-chunk</code>가 완료될 때까지 페이지에는 <code>LoadingIndicator</code>가 표시됩니다. 두 번이 아닌 한 번의 라운드 트립이 필요하므로 대기 시간이 긴 환경에서 로드 시간이 증가할 수 있습니다.</p> <aside class="tip"><h6 class="tip__prefix">tip</h6><p><code>webpackPreload</code>를 잘못 사용하면 실제로 성능이 저하 될 수 있으므로 사용 시 주의하세요.</p></aside> <h2 id="bundle-analysis">Bundle Analysis<a href="#bundle-analysis" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>코드 스플리팅을 시작하면 출력을 분석하여 어디서 모듈이 종료되었는지 확인하는 데 유용합니다. <a href="https://github.com/webpack/analyse">공식 분석 도구</a>부터 시작하는 것이 좋습니다. 커뮤니티에서 지원하는 다른 옵션도 있습니다.</p> <ul> <li><a href="https://alexkuz.github.io/webpack-chart/">webpack-chart</a>: webpack 통계를 위한 인터렉티브 원형 차트.</li> <li><a href="https://chrisbateman.github.io/webpack-visualizer/">webpack-visualizer</a>: 번들을 시각화하고 분석하여 어떤 모듈이 공간을 차지하고 있고 어떤 모듈이 중복될 수 있는지 확인합니다.</li> <li><a href="https://github.com/webpack-contrib/webpack-bundle-analyzer">webpack-bundle-analyzer</a>: 확대/축소 가능한 편리한 인터렉티브 트리 맵으로 번들 콘텐츠를 표현하는 플러그인 및 CLI 유틸리티입니다.</li> <li><a href="https://webpack.jakoblind.no/optimize">webpack bundle optimize helper</a>: 이 도구는 번들을 분석하고 번들 크기를 줄이기 위한 실용적인 개선 사항을 제공합니다.</li> <li><a href="https://github.com/bundle-stats/bundle-stats">bundle-stats</a>: 번들 보고서(번들 크기, 애셋, 모듈)를 생성하고 서로 다른 빌드 간의 결과를 비교합니다.</li> </ul> <h2 id="next-steps">Next Steps<a href="#next-steps" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>실제 애플리케이션에서 어떻게 <code>import()</code>를 사용하는지 더 구체적으로 알고 싶다면 <a href="/guides/lazy-loading/">Lazy Loading</a>의 예제를 확인하세요. 더 효율적인 코드 스플리팅 방법은 <a href="/guides/caching/">Caching</a>을 참고하세요.</p> '}}]);