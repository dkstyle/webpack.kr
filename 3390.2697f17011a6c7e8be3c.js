(self.webpackChunk=self.webpackChunk||[]).push([[3390],{3390:function(n,a,s){"use strict";s.r(a),a.default='<p>Keep chunk size above the specified limit by merging chunks that are smaller than the <code>minChunkSize</code>.</p> <pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span>MinChunkSizePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  minChunkSize<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token comment">// Minimum number of characters</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre> <h2 id="usage-via-cli">Usage via CLI<a href="#usage-via-cli" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>This plugin and it\'s options can also be invoked via the <a href="/api/cli/">CLI</a>:</p> <pre><code class="hljs language-bash">webpack --optimize-min-chunk-size <span class="token number">10000</span></code></pre> '}}]);