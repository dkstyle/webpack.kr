(self.webpackChunk=self.webpackChunk||[]).push([[950],{950:function(n,s,e){"use strict";e.r(s),s.default='<aside class="tip"><h6 class="tip__prefix">tip</h6><p>이 가이드는 <a href="/guides/code-splitting">코드 스플리팅</a>에 대한 작은 후속 작업입니다. 해당 가이드를 아직 읽지 않았다면, 지금 읽어보세요.</p></aside> <p>지연 로딩 또는 "온 디맨드" 로딩은 사이트나 애플리케이션을 최적화하는 좋은 방법입니다. 이 방법은 기본적으로 논리적인 중단점에서 코드를 분할한 다음 유저가 새로운 코드 블록을 요구하거나 필요로 하는 작업을 수행한 후 코드를 로딩하는 것입니다. 이렇게 하면 애플리케이션의 초기 로드 속도가 빨라지고 일부 블록이 로드되지 않을 수도 있어서 전체 무게가 줄어 듭니다.</p> <h2 id="example">Example<a href="#example" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p><a href="/guides/code-splitting/#dynamic-imports">코드 스플리팅</a>의 예제를 가져와 이 개념을 더욱 잘 보여주기 위해 약간 수정해 보겠습니다. 이 코드는 별도의 청크인 <code>lodash.bundle.js</code>를 생성하고 스크립트가 실행되자마자 기술적으로 "지연 로드"됩니다. 문제는 번들을 로드하는데 유저 상호 작용이 필요하지 않다는 것입니다. 즉, 페이지가 로드 될 때마다 요청이 실행됩니다. 이것은 우리에게 큰 도움이 되지 않고 성능에 부정적인 영향을 미치게 됩니다.</p> <p>다른 것을 시도해 봅시다. 유저가 버튼을 클릭 할 때 일부 텍스트를 콘솔에 기록하는 상호 작용을 추가합니다. 그러나 (<code>print.js</code>)를 로드하는 동안 처음 상호작용이 발생하기까지 기다려보겠습니다. 이를 위해 다시 돌아가서 <em>코드 스플리팅의</em> <a href="/guides/code-splitting/#dynamic-imports">final <em>Dynamic Imports</em> 예제를</a> 다시 작업하고 메인 청크에 <code>lodash</code>를 남겨 둡니다.</p> <p><strong>프로젝트</strong></p> <pre><code class="hljs language-diff">webpack-demo\n|- package.json\n|- webpack.config.js\n|- /dist\n|- /src\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> |- index.js\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> |- print.js\n</span></span>|- /node_modules</code></pre> <p><strong>src/print.js</strong></p> <pre><code class="hljs language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\n  <span class="token string">\'The print.js module has loaded! See the network tab in dev tools...\'</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Button Clicked: Here\\\'s "some text"!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p><strong>src/index.js</strong></p> <pre><code class="hljs language-diff"><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import _ from \'lodash\';\n</span><span class="token prefix inserted">+</span><span class="token line">\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> async function getComponent() {\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> function component() {\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   const element = document.createElement(\'div\');\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   const _ = await import(/* webpackChunkName: "lodash" */ \'lodash\');\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   const button = document.createElement(\'button\');\n</span><span class="token prefix inserted">+</span><span class="token line">   const br = document.createElement(\'br\');\n</span></span>\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   button.innerHTML = \'Click me and look at the console!\';\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   element.innerHTML = _.join([\'Hello\', \'webpack\'], \' \');\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   element.appendChild(br);\n</span><span class="token prefix inserted">+</span><span class="token line">   element.appendChild(button);\n</span><span class="token prefix inserted">+</span><span class="token line">\n</span><span class="token prefix inserted">+</span><span class="token line">   // Note that because a network request is involved, some indication\n</span><span class="token prefix inserted">+</span><span class="token line">   // of loading would need to be shown in a production-level site/app.\n</span><span class="token prefix inserted">+</span><span class="token line">   button.onclick = e => import(/* webpackChunkName: "print" */ \'./print\').then(module => {\n</span><span class="token prefix inserted">+</span><span class="token line">     const print = module.default;\n</span><span class="token prefix inserted">+</span><span class="token line">\n</span><span class="token prefix inserted">+</span><span class="token line">     print();\n</span><span class="token prefix inserted">+</span><span class="token line">   });\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   return element;\n</span><span class="token prefix unchanged"> </span><span class="token line"> }\n</span></span>\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> getComponent().then(component => {\n</span><span class="token prefix deleted">-</span><span class="token line">   document.body.appendChild(component);\n</span><span class="token prefix deleted">-</span><span class="token line"> });\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> document.body.appendChild(component());</span></span></code></pre> <aside class="warning"><h6 class="warning__prefix">warning</h6><p>ES6 모듈에서 <code>import()</code> 를 사용할 때 promise가 해결 될 때 반환되는 실제 <code>module</code> 객체이므로 <code>.default</code> 속성을 참조해야 합니다.</p></aside> <p>이제 webpack을 실행하고 새로운 지연 로딩 기능을 확인해 보겠습니다.</p> <pre><code class="hljs language-bash"><span class="token punctuation">..</span>.\n          Asset       Size  Chunks                    Chunk Names\nprint.bundle.js  <span class="token number">417</span> bytes       <span class="token number">0</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>         print\nindex.bundle.js     <span class="token number">548</span> kB       <span class="token number">1</span>  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  <span class="token punctuation">[</span>big<span class="token punctuation">]</span>  index\n     index.html  <span class="token number">189</span> bytes          <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>\n<span class="token punctuation">..</span>.</code></pre> <h2 id="frameworks">Frameworks<a href="#frameworks" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>많은 프레임워크와 라이브러리에는 방법론 안에서 구현하는 방법에 대한 자체 권고안이 있습니다. 다음은 몇 가지 예시입니다.</p> <ul> <li>React: <a href="https://reacttraining.com/react-router/web/guides/code-splitting">Code Splitting and Lazy Loading</a></li> <li>Vue: <a href="https://vuedose.tips/tips/dynamic-imports-in-vue-js-for-better-performance/">Dynamic Imports in Vue.js for better performance</a></li> <li>Angular: <a href="https://angular.io/guide/router#milestone-6-asynchronous-routing">Lazy Loading route configuration</a> 그리고 <a href="https://medium.com/@var_bin/angularjs-webpack-lazyload-bb7977f390dd">AngularJS + webpack = lazyLoad</a></li> </ul> '}}]);