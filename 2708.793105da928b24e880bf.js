(self.webpackChunk=self.webpackChunk||[]).push([[2708],{2708:function(e,a,o){"use strict";o.r(a),a.default='<p>The <code>NormalModuleFactory</code> module is used by the <code>Compiler</code> to generate modules. Starting with entry points, it resolves each request, parses the content to find further requests, and keeps crawling through files by resolving all and parsing any new files. At last stage, each dependency becomes a Module instance.</p> <p>The <code>NormalModuleFactory</code> class extends <code>Tapable</code> and provides the following lifecycle hooks. They can be tapped the same way as compiler hooks:</p> <pre><code class="hljs language-js">NormalModuleFactory<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>someHook<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p>NormaleModuleFactory creates <code>Parser</code> and <code>Generator</code> instances which can be accessed by HookMaps. Identifier must be passed to tap into these:</p> <pre><code class="hljs language-js">NormalModuleFactory<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>someHook<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">\'identifier\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p>As with the <code>compiler</code>, <code>tapAsync</code> and <code>tapPromise</code> may also be available depending on the type of hook.</p> <h3 id="beforeresolve">beforeResolve<a href="#beforeresolve" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><code>AsyncSeriesBailHook</code></p> <p>Called when a new dependency request is encountered. A dependency can be ignored by returning <code>false</code>. Otherwise, it should return <code>undefined</code> to proceed.</p> <ul> <li>Callback Parameters: <code>ResolveData</code></li> </ul> <h3 id="factorize">factorize<a href="#factorize" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><code>AsyncSeriesBailHook</code></p> <p>Called before initiating resolve. It should return <code>undefined</code> to proceed.</p> <ul> <li>Callback Parameters: <code>resolveData</code></li> </ul> <h3 id="resolve">resolve<a href="#resolve" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><code>AsyncSeriesBailHook</code></p> <p>Called before the request is resolved. A dependency can be ignored by returning <code>false</code>. Returning a Module instance would finalize the process. Otherwise, it should return <code>undefined</code> to proceed.</p> <ul> <li>Callback Parameters: <code>resolveData</code></li> </ul> <h3 id="resolveforscheme">resolveForScheme<a href="#resolveforscheme" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><code>AsyncSeriesBailHook</code></p> <p>Called before a request with scheme (URI) is resolved.</p> <ul> <li>Callback Parameters: <code>resolveData</code></li> </ul> <h3 id="afterresolve">afterResolve<a href="#afterresolve" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><code>AsyncSeriesBailHook</code></p> <p>Called after the request is resolved.</p> <ul> <li>Callback Parameters: <code>resolveData</code></li> </ul> <h3 id="createmodule">createModule<a href="#createmodule" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><code>AsyncSeriesBailHook</code></p> <p>Called before a <code>NormalModule</code> instance is created.</p> <ul> <li>Callback Parameters: <code>createData</code> <code>resolveData</code></li> </ul> <h3 id="module">module<a href="#module" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><code>SyncWaterfallHook</code></p> <p>Called after a <code>NormalModule</code> instance is created.</p> <ul> <li>Callback Parameters: <code>module</code> <code>createData</code> <code>resolveData</code></li> </ul> <h3 id="createparser">createParser<a href="#createparser" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><code>HookMap&#x3C;SyncBailHook></code></p> <p>Called before a <code>Parser</code> instance is created. <code>parserOptions</code> is options in <a href="/configuration/module/#moduleparser">module.parser</a> for the corresponding identifier or an empty object.</p> <ul> <li> <p>Hook Parameters: <code>identifier</code></p> </li> <li> <p>Callback Parameters: <code>parserOptions</code></p> </li> </ul> <h3 id="parser">parser<a href="#parser" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><code>HookMap&#x3C;SyncHook></code></p> <p>Fired after a <code>Parser</code> instance is created.</p> <ul> <li> <p>Hook Parameters: <code>identifier</code></p> </li> <li> <p>Callback Parameters: <code>parser</code> <code>parserOptions</code></p> </li> </ul> <p>Possible default identifiers:</p> <ol> <li><code>javascript/auto</code></li> <li><code>javascript/dynamic</code></li> <li><code>javascript/esm</code></li> <li><code>json</code></li> <li><code>webassembly/sync</code></li> <li><code>webassembly/async</code></li> <li><code>asset</code></li> </ol> <h3 id="creategenerator">createGenerator<a href="#creategenerator" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><code>HookMap&#x3C;SyncBailHook></code></p> <p>Called before a <code>Generator</code> instance is created. <code>generatorOptions</code> is options in <a href="/configuration/module/#modulegenerator">module.parser</a> for the corresponding identifier or an empty object.</p> <ul> <li> <p>Hook Parameters: <code>identifier</code></p> </li> <li> <p>Callback Parameters: <code>generatorOptions</code></p> </li> </ul> <h3 id="generator">generator<a href="#generator" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h3> <p><code>HookMap&#x3C;SyncHook></code></p> <p>Called after a <code>Generator</code> instance is created.</p> <ul> <li> <p>Hook Parameters: <code>identifier</code></p> </li> <li> <p>Callback Parameters: <code>generator</code> <code>generatorOptions</code></p> </li> </ul> <p>Possible default identifiers:</p> <ol> <li><code>json</code></li> <li><code>webassembly/sync</code></li> <li><code>webassembly/async</code></li> <li><code>asset</code></li> <li><code>asset/source</code></li> <li><code>asset/resource</code></li> <li><code>asset/inline</code></li> </ol> '}}]);