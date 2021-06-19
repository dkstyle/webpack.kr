(self.webpackChunk=self.webpackChunk||[]).push([[1342],{1342:function(s,n,a){"use strict";a.r(n),n.default='<p>webpack은 여러 프로그래밍과 데이터 언어로 작성된 설정 파일을 사용할 수 있습니다. 지원되는 파일 확장자 목록은 <a href="https://github.com/gulpjs/interpret">node-interpret</a> 패키지에서 확인할 수 있습니다. webpack은 <a href="https://github.com/gulpjs/interpret">node-interpret</a>를 사용하여, 다양한 유형의 설정 파일을 처리할 수 있습니다.</p> <h2 id="typescript">TypeScript<a href="#typescript" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p><a href="http://www.typescriptlang.org/">TypeScript</a>에서 webpack 설정을 하기 위해서는, 먼저 필요한 디펜던시, 예를들면 TypeScript와 <a href="https://definitelytyped.org/">DefinitelyTyped</a>에서 관련있는 타입 정의를 설치해야 합니다.</p> <pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev typescript ts-node @types/node @types/webpack\n<span class="token comment"># and, if using webpack-dev-server</span>\n<span class="token function">npm</span> <span class="token function">install</span> --save-dev @types/webpack-dev-server</code></pre> <p>설치를 마쳤으면, 다음 설정을 작성하세요.</p> <p><strong>webpack.config.ts</strong></p> <pre><code class="hljs language-typescript"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">\'path\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> webpack <span class="token keyword">from</span> <span class="token string">\'webpack\'</span><span class="token punctuation">;</span>\n<span class="token comment">// just in case you run into any typescript error when configuring `devServer`</span>\n<span class="token keyword">import</span> <span class="token string">\'webpack-dev-server\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> config<span class="token operator">:</span> webpack<span class="token punctuation">.</span>Configuration <span class="token operator">=</span> <span class="token punctuation">{</span>\n  mode<span class="token operator">:</span> <span class="token string">\'production\'</span><span class="token punctuation">,</span>\n  entry<span class="token operator">:</span> <span class="token string">\'./foo.js\'</span><span class="token punctuation">,</span>\n  output<span class="token operator">:</span> <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'dist\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    filename<span class="token operator">:</span> <span class="token string">\'foo.bundle.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span></code></pre> <p>위 예시는 TypeScript 2.7 이상 버전의 <code>tsconfig.json</code> 파일에서 새로운 <code>esModuleInterop</code> 및 <code>allowSyntheticDefaultImports</code> 컴파일러 옵션과 함께 사용된다고 가정합니다.</p> <p><code>tsconfig.json</code> 파일도 확인해야 합니다. 만약 <code>tsconfig.json</code>에서 <code>compilerOptions</code>의 <code>모듈</code>이 <code>commonjs</code>라면 설정이 완료되지만, 그렇지 않으면 webpack이 에러와 함께 실패하게 됩니다. 이는 <code>ts-node</code>가 <code>commonjs</code> 이외의 다른 모듈 구문은 지원하지 않기 때문입니다.</p> <p>이 문제는 두 가지 해결 방법이 있습니다.</p> <ul> <li><code>tsconfig.json</code>을 수정합니다.</li> <li><code>tsconfig-paths</code>를 설치합니다.</li> </ul> <p><strong>첫번째 방법은</strong> <code>tsconfig.json</code> 파일을 열고 <code>compilerOptions</code>를 찾는것입니다. <code>target</code>을 <code>"ES5"</code>로 하고 <code>module</code>을 <code>"CommonJS"</code>로 설정합니다.(또는 <code>module</code> 옵션을 완전히 제거합니다)</p> <p><strong>두번째 방법은</strong> <code>tsconfig-paths</code> 패키지를 설치합니다.</p> <pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev tsconfig-paths</code></pre> <p>webpack 설정에 맞게 별도의 TypeScript 설정을 만듭니다.</p> <p><strong>tsconfig-for-webpack-config.json</strong></p> <pre><code class="hljs language-json"><span class="token punctuation">{</span>\n  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"commonjs"</span><span class="token punctuation">,</span>\n    <span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"es5"</span><span class="token punctuation">,</span>\n    <span class="token property">"esModuleInterop"</span><span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <aside class="tip"><h6 class="tip__prefix">tip</h6><p><code>ts-node</code>는 <code>tsconfig-paths</code>에서 제공하는 환경 변수를 사용하여 <code>tsconfig.json</code> 파일을 해석할 수 있습니다.</p></aside> <p>그런 다음 <code>tsconfig-paths</code>에서 제공하는 환경 변수 <code>process.env.TS_NODE_PROJECT</code>를 다음과 같이 설정합니다.</p> <p><strong>package.json</strong></p> <pre><code class="hljs language-json"><span class="token punctuation">{</span>\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"cross-env TS_NODE_PROJECT=\\"tsconfig-for-webpack-config.json\\" webpack"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre> <aside class="warning"><h6 class="warning__prefix">warning</h6><p><code>TS_NODE_PROJECT</code>가 <code>"TS_NODE_PROJECT" unrecognized command</code> 에러와 함께 작동하지 않을 수 있다는 제보를 받았습니다. <code>cross-env</code>로 실행하면 문제를 해결할 수 있습니다. 자세한 내용은 <a href="https://github.com/webpack/webpack.js.org/issues/2733">해당 이슈를</a> 참고하세요.</p></aside> <h2 id="coffeescript">CoffeeScript<a href="#coffeescript" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>마찬가지로, <a href="https://coffeescript.org/">CoffeeScript</a>를 사용하려면 먼저 필요한 디펜던시를 설치해야 합니다.</p> <pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev coffeescript</code></pre> <p>그리고 다음 설정을 작성하세요.</p> <p><strong>webpack.config.coffee</strong></p> <pre><code class="hljs language-js">HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'html-webpack-plugin\'</span><span class="token punctuation">)</span>\nwebpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'webpack\'</span><span class="token punctuation">)</span>\npath <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span>\n\nconfig <span class="token operator">=</span>\n  mode<span class="token operator">:</span> <span class="token string">\'production\'</span>\n  entry<span class="token operator">:</span> <span class="token string">\'./path/to/my/entry/file.js\'</span>\n  output<span class="token operator">:</span>\n    path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'dist\'</span><span class="token punctuation">)</span>\n    filename<span class="token operator">:</span> <span class="token string">\'my-first-webpack.bundle.js\'</span>\n  module<span class="token operator">:</span> rules<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span>\n    test<span class="token operator">:</span> <span class="token regex">/\\.(js|jsx)$/</span>\n    use<span class="token operator">:</span> <span class="token string">\'babel-loader\'</span>\n  <span class="token punctuation">}</span> <span class="token punctuation">]</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span>template<span class="token operator">:</span> <span class="token string">\'./src/index.html\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> config</code></pre> <h2 id="babel-and-jsx">Babel and JSX<a href="#babel-and-jsx" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>아래 예제에서 JSX (React JavaScript Markup) 및 Babel은 webpack이 이해할 수 있는 JSON 설정을 만드는 데 사용됩니다.</p> <blockquote> <p><a href="https://twitter.com/_developit">Jason Miller</a> 제공</p> </blockquote> <p>먼저 필요한 디펜던시를 설치하세요.</p> <pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-register jsxobj babel-preset-es2015</code></pre> <p><strong>.babelrc</strong></p> <pre><code class="hljs language-json"><span class="token punctuation">{</span>\n  <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"es2015"</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre> <p><strong>webpack.config.babel.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">import</span> jsxobj <span class="token keyword">from</span> <span class="token string">\'jsxobj\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// import된 plugin의 예시</span>\n<span class="token keyword">const</span> <span class="token function-variable function">CustomPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token operator">...</span>config<span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">\'custom-plugin\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>\n  <span class="token operator">&#x3C;</span>webpack target<span class="token operator">=</span><span class="token string">"web"</span> watch mode<span class="token operator">=</span><span class="token string">"production"</span><span class="token operator">></span>\n    <span class="token operator">&#x3C;</span>entry path<span class="token operator">=</span><span class="token string">"src/index.js"</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&#x3C;</span>resolve<span class="token operator">></span>\n      <span class="token operator">&#x3C;</span>alias\n        <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">{</span>\n          react<span class="token operator">:</span> <span class="token string">\'preact-compat\'</span><span class="token punctuation">,</span>\n          <span class="token string">\'react-dom\'</span><span class="token operator">:</span> <span class="token string">\'preact-compat\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&#x3C;</span><span class="token operator">/</span>resolve<span class="token operator">></span>\n    <span class="token operator">&#x3C;</span>plugins<span class="token operator">></span>\n      <span class="token operator">&#x3C;</span>CustomPlugin foo<span class="token operator">=</span><span class="token string">"bar"</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&#x3C;</span><span class="token operator">/</span>plugins<span class="token operator">></span>\n  <span class="token operator">&#x3C;</span><span class="token operator">/</span>webpack<span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <aside class="warning"><h6 class="warning__prefix">warning</h6><p>다른 곳에서 Babel을 사용하고 <code>modules</code>를 <code>false</code>로 설정 한 경우, 두개의 별도 <code>.babelrc</code>파일을 유지하거나 새로운 <code>import</code> 와 <code>export</code> 구문 대신 <code>const jsxobj = require(\'jsxobj\');</code> 와 <code>module.exports</code>를 반드시 사용해야 합니다. 이는 Node가 새로운 ES6 기능을 다양하게 지원하지만, 아직 ES6 모듈 구문은 지원하지 않기 때문입니다.</p></aside> '}}]);