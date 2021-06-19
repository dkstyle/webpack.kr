(self.webpackChunk=self.webpackChunk||[]).push([[6456],{6456:function(e,n,s){"use strict";s.r(n),n.default='<p><code>object = { boolean activeModules = true, boolean entries = false, function (number percentage, string message, [string] ...args) handler, boolean modules = true, number modulesCount = 500, boolean profile = false }</code></p> <p><code>function (number percentage, string message, [string] ...args)</code></p> <p>The <code>ProgressPlugin</code> provides a way to customize how progress is reported during a compilation.</p> <h2 id="usage">Usage<a href="#usage" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>Create an instance of <code>ProgressPlugin</code> and provide one of the allowed params.</p> <h3 id="providing-function">Providing <code>function</code><a href="#providing-function" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>Provide a handler function which will be called when hooks report progress. <code>handler</code> function arguments:</p> <ul> <li><code>percentage</code>: a number between 0 and 1 indicating the completion percentage of the compilation</li> <li><code>message</code>: a short description of the currently-executing hook</li> <li><code>...args</code>: zero or more additional strings describing the current progress</li> </ul> <pre><code class="hljs language-js"><span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">percentage<span class="token punctuation">,</span> message<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// e.g. Output each progress message directly to the console:</span>\n  console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>percentage<span class="token punctuation">,</span> message<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProgressPlugin</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <h3 id="providing-object">Providing <code>object</code><a href="#providing-object" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p>When providing an <code>object</code> to the <code>ProgressPlugin</code>, following properties are supported:</p> <ul> <li><code>activeModules</code> (<code>boolean = false</code>): Shows active modules count and one active module in progress message.</li> <li><code>entries</code> (<code>boolean = true</code>): Shows entries count in progress message.</li> <li><code>handler</code> (See <a href="#providing-function">Providing function</a>)</li> <li><code>modules</code> (<code>boolean = true</code>): Shows modules count in progress message.</li> <li><code>modulesCount</code> (<code>number = 5000</code>): A minimum modules count to start with. Takes effect when <code>modules</code> property is enabled.</li> <li><code>profile</code> (<code>boolean = false</code>): Tells <code>ProgressPlugin</code> to collect profile data for progress steps.</li> <li><code>dependencies</code> (<code>boolean = true</code>): Shows the count of dependencies in progress message.</li> <li><code>dependenciesCount</code> (<code>number = 10000</code>): A minimum dependencies count to start with. Takes effect when <code>dependencies</code> property is enabled.</li> <li><code>percentBy</code> (<code>string = null: \'entries\' | \'dependencies\' | \'modules\' | null</code>): Tells <code>ProgressPlugin</code> how to calculate progress percentage.</li> </ul> <pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProgressPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  activeModules<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  entries<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">percentage<span class="token punctuation">,</span> message<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// custom logic</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  modules<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  modulesCount<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>\n  profile<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  dependencies<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  dependenciesCount<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>\n  percentBy<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <h2 id="percentage-calculation">Percentage calculation<a href="#percentage-calculation" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>By default, progress percentage is calculated based on built modules count and total modules count: <code>built / total</code></p> <p>The total modules count is unknown in advance and changes during the build. This may cause inaccurate progress percentage.</p> <p>To solve this problem <code>ProgressPlugin</code> caches the last known total modules count and reuses this value on the next build. The first build will warm the cache but the following builds will use and update this value.</p> <blockquote> <p>We recommend using <code>percentBy: \'entries\'</code> setting for projects with <a href="/configuration/entry-context/#entry">multiple configured entry points</a>. Percentage calculation will become more accurate because the amount of entry points is known in advance.</p> </blockquote> <h2 id="supported-hooks">Supported Hooks<a href="#supported-hooks" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>The following hooks report progress information to <code>ProgressPlugin</code>.</p> <aside class="tip"><h6 class="tip__prefix">tip</h6><p><em>Hooks marked with * allow plugins to report progress information using <code>reportProgress</code>. For more, see <a href="/api/plugins/#reporting-progress">Plugin API: Reporting Progress</a></em></p></aside> <p><strong>Compiler</strong></p> <ul> <li>compilation</li> <li>emit*</li> <li>afterEmit*</li> <li>done</li> </ul> <p><strong>Compilation</strong></p> <ul> <li>buildModule</li> <li>failedModule</li> <li>succeedModule</li> <li>finishModules*</li> <li>seal*</li> <li>optimizeDependenciesBasic*</li> <li>optimizeDependencies*</li> <li>optimizeDependenciesAdvanced*</li> <li>afterOptimizeDependencies*</li> <li>optimize*</li> <li>optimizeModulesBasic*</li> <li>optimizeModules*</li> <li>optimizeModulesAdvanced*</li> <li>afterOptimizeModules*</li> <li>optimizeChunksBasic*</li> <li>optimizeChunks*</li> <li>optimizeChunksAdvanced*</li> <li>afterOptimizeChunks*</li> <li>optimizeTree*</li> <li>afterOptimizeTree*</li> <li>optimizeChunkModulesBasic*</li> <li>optimizeChunkModules*</li> <li>optimizeChunkModulesAdvanced*</li> <li>afterOptimizeChunkModules*</li> <li>reviveModules*</li> <li>optimizeModuleOrder*</li> <li>advancedOptimizeModuleOrder*</li> <li>beforeModuleIds*</li> <li>moduleIds*</li> <li>optimizeModuleIds*</li> <li>afterOptimizeModuleIds*</li> <li>reviveChunks*</li> <li>optimizeChunkOrder*</li> <li>beforeChunkIds*</li> <li>optimizeChunkIds*</li> <li>afterOptimizeChunkIds*</li> <li>recordModules*</li> <li>recordChunks*</li> <li>beforeHash*</li> <li>afterHash*</li> <li>recordHash*</li> <li>beforeModuleAssets*</li> <li>beforeChunkAssets*</li> <li>additionalChunkAssets*</li> <li>record*</li> <li>additionalAssets*</li> <li>optimizeChunkAssets*</li> <li>afterOptimizeChunkAssets*</li> <li>optimizeAssets*</li> <li>afterOptimizeAssets*</li> <li>afterSeal*</li> </ul> <h2 id="source">Source<a href="#source" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <ul> <li><a href="https://github.com/webpack/webpack/blob/master/lib/ProgressPlugin.js"><code>ProgressPlugin</code> source</a></li> </ul> '}}]);