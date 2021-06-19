(self.webpackChunk=self.webpackChunk||[]).push([[7968],{7968:function(n,s,a){"use strict";a.r(s),s.default='<p>플러그인은 webpack 생태계의 핵심 요소이며 커뮤니티에 webpack의 컴파일 프로세스를 활용할 수 있는 강력한 방법을 제공합니다. 플러그인은 각 컴파일 과정에서 발생하는 주요 이벤트에 <a href="/api/compiler-hooks/#hooks">후킹</a> 할 수 있습니다. 모든 단계에서 플러그인은 <code>컴파일러</code>, 경우에 따라서는 현재 진행 중인 <code>컴파일</code>에 완전한 접근 권한을 가집니다.</p> <aside class="tip"><h6 class="tip__prefix">tip</h6><p>더 높은 수준의 플러그인 작성을 위해서는 <a href="/contribute/writing-a-plugin">플러그인 작성하기</a>를 참고하세요.</p></aside> <p>먼저 webpack 플러그인 인터페이스의 근간을 제공하는 <code>tapable</code> 유틸리티에 대해 살펴보겠습니다.</p> <h2 id="tapable">Tapable<a href="#tapable" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>이 작은 라이브러리는 webpack의 핵심 유틸리티이지만 유사한 플러그인 인터페이스를 제공하기 위해 다른 곳에서도 사용할 수 있습니다. webpack의 많은 객체가 <code>Tapable</code> 클래스를 확장합니다. <code>Tapable</code> 클래스가 제공하는 <code>tap</code>, <code>tapAsnyc</code>, <code>tapPromise</code> 메소드를 플러그인에서 사용하여 컴파일 과정에서 실행될 커스텀 빌드 단계를 삽입할 수 있습니다.</p> <p>자세한 내용은 <a href="https://github.com/webpack/tapable">문서</a>를 참고하세요. 세 가지 <code>tap</code> 메소드와 이를 제공하는 훅을 이해하는 것은 중요합니다. <code>Tapable</code>을 확장한 객체(예: 컴파일러), 훅, 각 훅의 타입(예: <code>SyncHook</code>)에 대해 알게 될 것입니다.</p> <h2 id="plugin-types">Plugin Types<a href="#plugin-types" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>사용된 훅과 적용된 <code>tap</code> 메소드에 따라 플러그인은 다양한 방식으로 작동할 수 있습니다. 작동 방식은 <code>Tapable</code>이 제공하는 <a href="https://github.com/webpack/tapable#tapable">훅</a>과 밀접한 관련이 있습니다. <a href="/api/compiler-hooks/#hooks">컴파일러 훅</a>은 상황에 따라 <code>Tapable</code> 훅을 통해 어떤 <code>tap</code> 메소드가 사용 가능한지 알 수 있습니다.</p> <p>따라서 어떤 이벤트에 <code>tap</code> 하느냐에 따라 플러그인은 다르게 동작할 수 있습니다. 예를 들어, <code>컴파일</code> 단계에 후킹 하는 경우 동기식 <code>tap</code> 메소드만 사용할 수 있습니다.</p> <pre><code class="hljs language-js">compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>compile<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Synchronously tapping the compile hook.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p>그러나 <code>AsyncHook</code>을 활용하는 <code>run</code>의 경우 <code>tap</code>뿐만 아니라 <code>tapAsync</code> 또는 <code>tapPromise</code>도 사용할 수 있습니다.</p> <pre><code class="hljs language-js">compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>run<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span>\n  <span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span><span class="token parameter">source<span class="token punctuation">,</span> target<span class="token punctuation">,</span> routesList<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Asynchronously tapping the run hook.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncompiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>run<span class="token punctuation">.</span><span class="token function">tapPromise</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">source<span class="token punctuation">,</span> target<span class="token punctuation">,</span> routesList</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Asynchronously tapping the run hook with a delay.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncompiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>run<span class="token punctuation">.</span><span class="token function">tapPromise</span><span class="token punctuation">(</span>\n  <span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span>\n  <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">source<span class="token punctuation">,</span> target<span class="token punctuation">,</span> routesList</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Asynchronously tapping the run hook with a delay.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p>즉, <code>컴파일러</code>에 <code>후킹</code> 하는 다양한 방법이 있으며, 각 방법은 플러그인에 적합하다면 실행될 수 있습니다.</p> <h2 id="custom-hooks">Custom Hooks<a href="#custom-hooks" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>다른 플러그인이 <code>tap</code> 할 수 있도록 컴파일에 새 훅을 추가하려면 <code>tapable</code>에서 필요한 훅 클래스를 <code>require</code> 하여 만들면 됩니다.</p> <pre><code class="hljs language-js"><span class="token keyword">const</span> SyncHook <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'tapable\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>SyncHook<span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>myCustomHook<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Already in use\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncompiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>myCustomHook <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'a\'</span><span class="token punctuation">,</span> <span class="token string">\'b\'</span><span class="token punctuation">,</span> <span class="token string">\'c\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 언제 어디서든 훅을 발생시키고 싶을 때에 작성</span>\ncompiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">myCustomHook</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p>다양한 훅 클래스와 동작 방식에 대해 자세히 알고 싶다면 <code>tapable</code> <a href="https://github.com/webpack/tapable">문서</a>를 참고하세요.</p> <h2 id="reporting-progress">Reporting Progress<a href="#reporting-progress" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>플러그인은 기본적으로 진행 상황을 stderr에 출력하는 <code>ProgressPlugin</code>을 통해 진행 상황을 확인할 수 있습니다. 진행률을 확인하려면 <a href="/api/cli/">webpack CLI</a>를 실행할 때 <code>--progress</code> 인수를 전달하세요.</p> <p><a href="/plugins/progress-plugin/"><code>ProgressPlugin</code></a>의 <code>reportProgress</code> 함수에 다른 인수를 전달하여 메시지 출력을 커스텀 할 수 있습니다.</p> <p>진행 상황을 확인하기 위해서는 <code>context: true</code> 옵션을 사용하여 훅에 <code>tap</code> 해야 합니다.</p> <pre><code class="hljs language-js">compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span>\n    context<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> compiler<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> reportProgress <span class="token operator">=</span> context <span class="token operator">&#x26;&#x26;</span> context<span class="token punctuation">.</span>reportProgress<span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>reportProgress<span class="token punctuation">)</span> <span class="token function">reportProgress</span><span class="token punctuation">(</span><span class="token number">0.95</span><span class="token punctuation">,</span> <span class="token string">\'Starting work\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>reportProgress<span class="token punctuation">)</span> <span class="token function">reportProgress</span><span class="token punctuation">(</span><span class="token number">0.95</span><span class="token punctuation">,</span> <span class="token string">\'Done work\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p><code>reportProgress</code> 함수는 다음과 같은 인수를 사용하여 호출할 수 있습니다.</p> <pre><code class="hljs language-js"><span class="token function">reportProgress</span><span class="token punctuation">(</span>percentage<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <ul> <li><code>percentage</code>: 이 인수는 사용되지 않습니다. 대신 <a href="/plugins/progress-plugin/"><code>ProgressPlugin</code></a>이 현재 훅을 기반으로 백분율을 계산합니다.</li> <li><code>...args</code>: <code>ProgressPlugin</code> 핸들러로 전달되는 임의의 수의 문자열입니다.</li> </ul> <p>컴파일러 및 컴파일 훅의 하위 집합만이 <code>reportProgress</code>를 지원합니다. 전체 목록은 <a href="/plugins/progress-plugin/#supported-hooks"><code>ProgressPlugin</code></a>를 참고하세요.</p> <h2 id="logging">Logging<a href="#logging" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>로깅 API는 webpack 4.37 릴리스부터 사용할 수 있습니다. <a href="/configuration/stats/#statslogging"><code>stats 설정</code></a>에서 <code>logging</code>이 활성화된 경우 또는 <code>infrastructure logging</code>이 활성화된 경우 플러그인은 각 로거 형식(stats, infrastructure)으로 메시지를 로깅 할 수 있습니다.</p> <ul> <li>플러그인은 로깅을 위해 <code>compilation.getLogger(\'PluginName\')</code>를 사용하는 것이 좋습니다. 로그는 형식에 따라 포매팅 되어 Stats에 저장됩니다. 로그는 사용자가 필터링하고 내보낼 수 있습니다.</li> <li>플러그인은 로깅을 위해 <code>compiler.getInfrastructureLogger(\'PluginName\')</code>를 사용할 수 있습니다. <code>infrastructure</code> 로깅은 Stats에 저장되지 않기 때문에 형식이 지정되지 않습니다. 일반적으로 콘솔 / 대시보드 / GUI에 직접 기록됩니다. 사용자가 필터링 할 수 있습니다.</li> <li>플러그인은 로깅 지원 여부를 확인하기 위해 특별한 폴백 로직 <code>compilation.getLogger ? compilation.getLogger(\'PluginName\') : console</code>을 사용하여 <code>컴파일</code> 객체에서 <code>getLogger</code> 메소드를 지원하지 않는 이전 webpack 버전이 사용되는 경우에 대한 폴백을 제공 할 수 있습니다.</li> </ul> <h2 id="next-steps">Next Steps<a href="#next-steps" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>사용 가능한 모든 <code>컴파일러</code> 훅 및 파라미터에 대한 자세한 목록은 <a href="/api/compiler-hooks/">컴파일러 훅</a> 섹션을 참고하세요.</p> '}}]);