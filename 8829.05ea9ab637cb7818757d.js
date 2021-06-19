(self.webpackChunk=self.webpackChunk||[]).push([[8829],{8829:function(e,n,a){"use strict";a.r(n),n.default='<p>Resolvers are created using the <code>enhanced-resolve</code> package. The <code>Resolver</code> class extends the <code>tapable</code> class and uses <code>tapable</code> to provide a few hooks. The <code>enhanced-resolve</code> package can be used directly to create new resolvers, however any <a href="/api/node/#compiler-instance"><code>compiler</code> instance</a> has a few resolver instances that can be tapped into.</p> <p>Before reading on, make sure to have a look at the <a href="https://github.com/webpack/enhanced-resolve"><code>enhanced-resolve</code></a> and <a href="/api/plugins/#tapable"><code>tapable</code></a> documentation.</p> <h2 id="types">Types<a href="#types" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>There are three types of built-in resolvers available on the <code>compiler</code> class:</p> <ul> <li><code>normal</code>: Resolves a module via an absolute or relative path.</li> <li><code>context</code>: Resolves a module within a given context.</li> <li><code>loader</code>: Resolves a webpack <a href="/loaders">loader</a>.</li> </ul> <p>Depending on need, any one of these built-in resolvers, that are used by the <code>compiler</code>, can be customized via plugins:</p> <pre><code class="hljs language-js">compiler<span class="token punctuation">.</span>resolverFactory<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>resolver\n  <span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">\'[type]\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'name\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">resolver</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// you can tap into resolver.hooks now</span>\n    resolver<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>result<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <p>Where <code>[type]</code> is one of the three resolvers mentioned above.</p> <p>See the <a href="https://github.com/webpack/enhanced-resolve"><code>enhanced-resolve</code> documentation</a> for a full list of hooks and their description.</p> <h2 id="configuration-options">Configuration Options<a href="#configuration-options" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>The resolvers mentioned above can also be customized via a configuration file with the <a href="/configuration/resolve/"><code>resolve</code></a> or <a href="/configuration/resolve/#resolveloader"><code>resolveLoader</code></a> options. These options allow users to change the resolving behavior through a variety of options including through resolve <code>plugins</code>.</p> <p>The resolver plugins, e.g. <a href="https://github.com/shaketbaby/directory-named-webpack-plugin"><code>DirectoryNamedPlugin</code></a>, can be included directly in <code>resolve.plugins</code> rather than using directly in <a href="/configuration/plugins/#plugins"><code>plugins</code> configuration option</a>.</p> <aside class="tip"><h6 class="tip__prefix">tip</h6><p>Note that the <code>resolve</code> configuration affects the <code>normal</code> and <code>context</code> resolvers while <code>resolveLoader</code> is used to modify the <code>loader</code> resolver.</p></aside> '}}]);