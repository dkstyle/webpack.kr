(self.webpackChunk=self.webpackChunk||[]).push([[5565],{5565:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return r}}),a(7378);var t=a(5318);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}const p=("Badge",function(e){return console.warn("Component Badge was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",e)});const l={};function r({components:e,...n}){return(0,t.kt)("wrapper",i({},l,n,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("hr",null),(0,t.kt)("p",null,"title: Internal webpack plugins\ncontributors:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"iAziz786"),(0,t.kt)("li",{parentName:"ul"},"EugeneHlushko"),(0,t.kt)("li",{parentName:"ul"},"ooflorent"),(0,t.kt)("li",{parentName:"ul"},"Legends"),(0,t.kt)("li",{parentName:"ul"},"chenxsan")),(0,t.kt)("hr",null),(0,t.kt)("p",null,"This is a list of plugins which are used by webpack internally."),(0,t.kt)("aside",{className:"warning"},(0,t.kt)("h6",{parentName:"aside",className:"warning__prefix"},"warning"),(0,t.kt)("p",{parentName:"aside"},"You should only care about them if you are building your own compiler based on webpack, or introspect the internals.")),(0,t.kt)("p",null,"Categories of internal plugins:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#environment"},"environment")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#compiler"},"compiler")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#entry"},"entry")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#output"},"output")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#source"},"source")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#optimize"},"optimize"))),(0,t.kt)("h2",{id:"environment"},"environment",(0,t.kt)("a",{parentName:"h2",href:"#environment","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,"Plugins affecting the environment of the compiler."),(0,t.kt)("h3",{id:"nodeenvironmentplugin"},"NodeEnvironmentPlugin",(0,t.kt)("a",{parentName:"h3",href:"#nodeenvironmentplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"webpack.node.NodeEnvironmentPlugin()")),(0,t.kt)("p",null,"Applies Node.js style filesystem to the compiler."),(0,t.kt)("h2",{id:"compiler"},"compiler",(0,t.kt)("a",{parentName:"h2",href:"#compiler","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,"Plugins affecting the compiler"),(0,t.kt)("h3",{id:"memorycacheplugin"},"MemoryCachePlugin",(0,t.kt)("a",{parentName:"h3",href:"#memorycacheplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"MemoryCachePlugin()")),(0,t.kt)("p",null,"Adds a cache to the compiler, where modules are cached in memory."),(0,t.kt)("h3",{id:"progressplugin"},"ProgressPlugin",(0,t.kt)("a",{parentName:"h3",href:"#progressplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"ProgressPlugin(handler)")),(0,t.kt)("p",null,"Hook into the compiler to extract progress information. The ",(0,t.kt)("inlineCode",{parentName:"p"},"handler")," must have the signature ",(0,t.kt)("inlineCode",{parentName:"p"},"function(percentage, message)"),". Percentage is called with a value between 0 and 1, where 0 indicates the start and 1 the end."),(0,t.kt)("h3",{id:"recordidsplugin"},"RecordIdsPlugin",(0,t.kt)("a",{parentName:"h3",href:"#recordidsplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"RecordIdsPlugin()")),(0,t.kt)("p",null,"Saves and restores module and chunk ids from records."),(0,t.kt)("h2",{id:"entry"},"entry",(0,t.kt)("a",{parentName:"h2",href:"#entry","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,"Plugins, which add entry chunks to the compilation."),(0,t.kt)("h3",{id:"entryplugin"},"EntryPlugin",(0,t.kt)("a",{parentName:"h3",href:"#entryplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"EntryPlugin(context, request, chunkName)")),(0,t.kt)("p",null,"Adds an entry chunk on compilation. The chunk is named ",(0,t.kt)("inlineCode",{parentName:"p"},"chunkName")," and contains only one module (plus dependencies). The module is resolved from ",(0,t.kt)("inlineCode",{parentName:"p"},"request")," in ",(0,t.kt)("inlineCode",{parentName:"p"},"context")," (absolute path)."),(0,t.kt)("h3",{id:"prefetchplugin"},"PrefetchPlugin",(0,t.kt)("a",{parentName:"h3",href:"#prefetchplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"PrefetchPlugin(context, request)")),(0,t.kt)("p",null,"Prefetches ",(0,t.kt)("inlineCode",{parentName:"p"},"request")," and dependencies to enable a more parallel compilation. It doesn't create any chunk. The module is resolved from ",(0,t.kt)("inlineCode",{parentName:"p"},"request")," in ",(0,t.kt)("inlineCode",{parentName:"p"},"context")," (absolute path)."),(0,t.kt)("h2",{id:"output"},"output",(0,t.kt)("a",{parentName:"h2",href:"#output","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("h3",{id:"jsonptemplateplugin"},"JsonpTemplatePlugin",(0,t.kt)("a",{parentName:"h3",href:"#jsonptemplateplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"JsonpTemplatePlugin(options)")),(0,t.kt)("p",null,"Chunks are wrapped into JSONP-calls. A loading algorithm is included in entry chunks. It loads chunks by adding a ",(0,t.kt)("inlineCode",{parentName:"p"},"<script>")," tag."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"options")," are the output options."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"options.jsonpFunction")," is the JSONP function."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"options.publicPath")," is used as path for loading the chunks."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"options.chunkFilename")," is the filename under that chunks are expected."),(0,t.kt)("h3",{id:"nodetemplateplugin"},"NodeTemplatePlugin",(0,t.kt)("a",{parentName:"h3",href:"#nodetemplateplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"node/NodeTemplatePlugin(options)")),(0,t.kt)("p",null,"Chunks are wrapped into Node.js modules exporting the bundled modules. The entry chunks loads chunks by requiring them."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"options")," are the output options."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"options.chunkFilename")," is the filename under that chunks are expected."),(0,t.kt)("h3",{id:"librarytemplateplugin"},"LibraryTemplatePlugin",(0,t.kt)("a",{parentName:"h3",href:"#librarytemplateplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"LibraryTemplatePlugin(name, target)")),(0,t.kt)("p",null,"The entries chunks are decorated to form a library ",(0,t.kt)("inlineCode",{parentName:"p"},"name")," of type ",(0,t.kt)("inlineCode",{parentName:"p"},"type"),"."),(0,t.kt)("h3",{id:"webworkertemplateplugin"},"WebWorkerTemplatePlugin",(0,t.kt)("a",{parentName:"h3",href:"#webworkertemplateplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"webworker/WebWorkerTemplatePlugin(options)")),(0,t.kt)("p",null,"Chunks are loaded by ",(0,t.kt)("inlineCode",{parentName:"p"},"importScripts"),". Else it's similar to ",(0,t.kt)("a",{parentName:"p",href:"#jsonptemplateplugin"},(0,t.kt)("inlineCode",{parentName:"a"},"JsonpTemplatePlugin")),"."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"options")," are the output options."),(0,t.kt)("h3",{id:"evaldevtoolmoduleplugin"},"EvalDevToolModulePlugin",(0,t.kt)("a",{parentName:"h3",href:"#evaldevtoolmoduleplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,"Decorates the module template by wrapping each module in a ",(0,t.kt)("inlineCode",{parentName:"p"},"eval")," annotated with ",(0,t.kt)("inlineCode",{parentName:"p"},"// @sourceURL"),"."),(0,t.kt)("h3",{id:"sourcemapdevtoolplugin"},"SourceMapDevToolPlugin",(0,t.kt)("a",{parentName:"h3",href:"#sourcemapdevtoolplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"SourceMapDevToolPlugin(sourceMapFilename, sourceMappingURLComment, moduleFilenameTemplate, fallbackModuleFilenameTemplate)")),(0,t.kt)("p",null,"Decorates the templates by generating a SourceMap for each chunk."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"sourceMapFilename")," the filename template of the SourceMap. ",(0,t.kt)("inlineCode",{parentName:"p"},"[hash]"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"[name]"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"[id]"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"[file]")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"[filebase]")," are replaced. If this argument is missing, the SourceMap will be inlined as DataUrl."),(0,t.kt)("h3",{id:"hotmodulereplacementplugin"},"HotModuleReplacementPlugin",(0,t.kt)("a",{parentName:"h3",href:"#hotmodulereplacementplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"HotModuleReplacementPlugin(options)")),(0,t.kt)("p",null,"Add support for hot module replacement. Decorates the templates to add runtime code. Adds ",(0,t.kt)("inlineCode",{parentName:"p"},"module.hot")," API."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"options.hotUpdateChunkFilename")," the filename for hot update chunks."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"options.hotUpdateMainFilename")," the filename for the hot update manifest."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"options.hotUpdateFunction")," JSON function name for the hot update."),(0,t.kt)("h2",{id:"source"},"source",(0,t.kt)("a",{parentName:"h2",href:"#source","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,"Plugins affecting the source code of modules."),(0,t.kt)("h3",{id:"apiplugin"},"APIPlugin",(0,t.kt)("a",{parentName:"h3",href:"#apiplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,"Make webpack_public_path, webpack_require, webpack_modules and webpack_chunk_load accessible. Ensures that ",(0,t.kt)("inlineCode",{parentName:"p"},"require.valueOf")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"require.onError")," are not processed by other plugins."),(0,t.kt)("h3",{id:"compatibilityplugin"},"CompatibilityPlugin",(0,t.kt)("a",{parentName:"h3",href:"#compatibilityplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,"Currently useless. Ensures compatibility with other module loaders."),(0,t.kt)("h3",{id:"constplugin"},"ConstPlugin",(0,t.kt)("a",{parentName:"h3",href:"#constplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,"Tries to evaluate expressions in ",(0,t.kt)("inlineCode",{parentName:"p"},"if (...)")," statements and ternaries to replace them with ",(0,t.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,t.kt)("inlineCode",{parentName:"p"},"false")," for further possible dead branch elimination using hooks fired by the parser."),(0,t.kt)("p",null,"There are multiple optimizations in production mode regarding dead branches:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"The ones performed by ",(0,t.kt)("a",{parentName:"li",href:"https://github.com/fabiosantoscode/terser"},"Terser")),(0,t.kt)("li",{parentName:"ul"},"The ones performed by webpack")),(0,t.kt)("p",null,"webpack will try to evaluate conditional statements. If it succeeds then the dead branch is removed. webpack can't do constant folding unless the compiler knows it. For example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"hljs language-javascript"},(0,t.kt)("span",{parentName:"code",className:"token keyword"},"import")," ",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"{")," calculateTax ",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"}")," ",(0,t.kt)("span",{parentName:"code",className:"token keyword"},"from")," ",(0,t.kt)("span",{parentName:"code",className:"token string"},"'./tax'"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n",(0,t.kt)("span",{parentName:"code",className:"token keyword"},"const")," ",(0,t.kt)("span",{parentName:"code",className:"token constant"},"FOO")," ",(0,t.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,t.kt)("span",{parentName:"code",className:"token number"},"1"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,t.kt)("span",{parentName:"code",className:"token keyword"},"if")," ",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,t.kt)("span",{parentName:"code",className:"token constant"},"FOO")," ",(0,t.kt)("span",{parentName:"code",className:"token operator"},"===")," ",(0,t.kt)("span",{parentName:"code",className:"token number"},"0"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,t.kt)("span",{parentName:"code",className:"token comment"},"// dead branch"),"\n  ",(0,t.kt)("span",{parentName:"code",className:"token function"},"calculateTax"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"}"))),(0,t.kt)("p",null,"In the above example, webpack is unable to prune the branch, but Terser does. However, if ",(0,t.kt)("inlineCode",{parentName:"p"},"FOO")," is defined using ",(0,t.kt)("a",{parentName:"p",href:"/plugins/define-plugin/"},"DefinePlugin"),", webpack will succeed."),(0,t.kt)("p",null,"It is important to mention that ",(0,t.kt)("inlineCode",{parentName:"p"},"import { calculateTax } from './tax';")," will also get pruned because ",(0,t.kt)("inlineCode",{parentName:"p"},"calculateTax()")," call was in the dead branch and got eliminated."),(0,t.kt)("h3",{id:"provideplugin"},"ProvidePlugin",(0,t.kt)("a",{parentName:"h3",href:"#provideplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"ProvidePlugin(name, request)")),(0,t.kt)("p",null,"If ",(0,t.kt)("inlineCode",{parentName:"p"},"name")," is used in a module it is filled by a module loaded by ",(0,t.kt)("inlineCode",{parentName:"p"},"require(<request>)"),"."),(0,t.kt)("h3",{id:"nodestuffplugin"},"NodeStuffPlugin",(0,t.kt)("a",{parentName:"h3",href:"#nodestuffplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"NodeStuffPlugin(options, context)")),(0,t.kt)("p",null,"Provide stuff that is normally available in Node.js modules."),(0,t.kt)("p",null,"It also ensures that ",(0,t.kt)("inlineCode",{parentName:"p"},"module")," is filled with some Node.js stuff if you use it."),(0,t.kt)("h3",{id:"requirejsstuffplugin"},"RequireJsStuffPlugin",(0,t.kt)("a",{parentName:"h3",href:"#requirejsstuffplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,"Provide stuff that is normally available in require.js."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"require[js].config")," is removed. ",(0,t.kt)("inlineCode",{parentName:"p"},"require.version")," is ",(0,t.kt)("inlineCode",{parentName:"p"},"0.0.0"),". ",(0,t.kt)("inlineCode",{parentName:"p"},"requirejs.onError")," is mapped to ",(0,t.kt)("inlineCode",{parentName:"p"},"require.onError"),"."),(0,t.kt)("h3",{id:"nodesourceplugin"},"NodeSourcePlugin",(0,t.kt)("a",{parentName:"h3",href:"#nodesourceplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"node/NodeSourcePlugin(options)")),(0,t.kt)("p",null,"This module adds stuff from Node.js that is not available in non Node.js environments."),(0,t.kt)("p",null,"It adds polyfills for ",(0,t.kt)("inlineCode",{parentName:"p"},"process"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"console"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"Buffer")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"global")," if used. It also binds the built in Node.js replacement modules."),(0,t.kt)("h3",{id:"nodetargetplugin"},"NodeTargetPlugin",(0,t.kt)("a",{parentName:"h3",href:"#nodetargetplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"node/NodeTargetPlugin()")),(0,t.kt)("p",null,"The plugins should be used if you run the bundle in a Node.js environment."),(0,t.kt)("p",null,"If ensures that native modules are loaded correctly even if bundled."),(0,t.kt)("h3",{id:"amdplugin"},"AMDPlugin",(0,t.kt)("a",{parentName:"h3",href:"#amdplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"dependencies/AMDPlugin(options)")),(0,t.kt)("p",null,"Provides AMD-style ",(0,t.kt)("inlineCode",{parentName:"p"},"define")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"require")," to modules. Also bind ",(0,t.kt)("inlineCode",{parentName:"p"},"require.amd"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"define.amd")," and webpack_amd_options## to the ",(0,t.kt)("inlineCode",{parentName:"p"},"options")," passed as parameter."),(0,t.kt)("h3",{id:"commonjsplugin"},"CommonJsPlugin",(0,t.kt)("a",{parentName:"h3",href:"#commonjsplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"dependencies/CommonJsPlugin")),(0,t.kt)("p",null,"Provides CommonJs-style ",(0,t.kt)("inlineCode",{parentName:"p"},"require")," to modules."),(0,t.kt)("h3",{id:"requirecontextplugin"},"RequireContextPlugin",(0,t.kt)("a",{parentName:"h3",href:"#requirecontextplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"dependencies/RequireContextPlugin(modulesDirectories, extensions)")),(0,t.kt)("p",null,"Provides ",(0,t.kt)("inlineCode",{parentName:"p"},"require.context"),". The parameter ",(0,t.kt)("inlineCode",{parentName:"p"},"modulesDirectories")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"extensions")," are used to find alternative requests for files. It's useful to provide the same arrays as you provide to the resolver."),(0,t.kt)("h3",{id:"requireensureplugin"},"RequireEnsurePlugin",(0,t.kt)("a",{parentName:"h3",href:"#requireensureplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"dependencies/RequireEnsurePlugin()")),(0,t.kt)("p",null,"Provides ",(0,t.kt)("inlineCode",{parentName:"p"},"require.ensure"),"."),(0,t.kt)("h3",{id:"requireincludeplugin"},"RequireIncludePlugin",(0,t.kt)("a",{parentName:"h3",href:"#requireincludeplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"dependencies/RequireIncludePlugin()")),(0,t.kt)("p",null,"Provides ",(0,t.kt)("inlineCode",{parentName:"p"},"require.include"),"."),(0,t.kt)("h3",{id:"defineplugin"},"DefinePlugin",(0,t.kt)("a",{parentName:"h3",href:"#defineplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"DefinePlugin(definitions)")),(0,t.kt)("p",null,"Define constants for identifier."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"definitions")," is an object."),(0,t.kt)("h2",{id:"optimize"},"optimize",(0,t.kt)("a",{parentName:"h2",href:"#optimize","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,"Note that all plugins under ",(0,t.kt)("inlineCode",{parentName:"p"},"webpack.optimize")," namespace should only be used when ",(0,t.kt)("a",{parentName:"p",href:"/configuration/mode/#mode-none"},(0,t.kt)("inlineCode",{parentName:"a"},"mode"))," set to ",(0,t.kt)("inlineCode",{parentName:"p"},"'none'"),". Otherwise you might get into trouble where plugins are applied twice."),(0,t.kt)("h3",{id:"limitchunkcountplugin"},"LimitChunkCountPlugin",(0,t.kt)("a",{parentName:"h3",href:"#limitchunkcountplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"optimize/LimitChunkCountPlugin(options)")),(0,t.kt)("p",null,"Merge chunks limit chunk count is lower than ",(0,t.kt)("inlineCode",{parentName:"p"},"options.maxChunks"),"."),(0,t.kt)("p",null,"The overhead for each chunks is provided by ",(0,t.kt)("inlineCode",{parentName:"p"},"options.chunkOverhead")," or defaults to 10000. Entry chunks sizes are multiplied by ",(0,t.kt)("inlineCode",{parentName:"p"},"options.entryChunkMultiplicator")," (or 10)."),(0,t.kt)("p",null,"Chunks that reduce the total size the most are merged first. If multiple combinations are equal the minimal merged size wins."),(0,t.kt)("h3",{id:"mergeduplicatechunksplugin"},"MergeDuplicateChunksPlugin",(0,t.kt)("a",{parentName:"h3",href:"#mergeduplicatechunksplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"optimize/MergeDuplicateChunksPlugin()")),(0,t.kt)("p",null,"Chunks with the same modules are merged."),(0,t.kt)("h3",{id:"removeemptychunksplugin"},"RemoveEmptyChunksPlugin",(0,t.kt)("a",{parentName:"h3",href:"#removeemptychunksplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"optimize/RemoveEmptyChunksPlugin()")),(0,t.kt)("p",null,"Modules that are included in every parent chunk are removed from the chunk."),(0,t.kt)("h3",{id:"minchunksizeplugin"},"MinChunkSizePlugin",(0,t.kt)("a",{parentName:"h3",href:"#minchunksizeplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"optimize/MinChunkSizePlugin(minChunkSize)")),(0,t.kt)("p",null,"Merges chunks until each chunk has the minimum size of ",(0,t.kt)("inlineCode",{parentName:"p"},"minChunkSize"),"."),(0,t.kt)("h3",{id:"moduleconcatenationplugin"},"ModuleConcatenationPlugin",(0,t.kt)("a",{parentName:"h3",href:"#moduleconcatenationplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,"See the ",(0,t.kt)("a",{parentName:"p",href:"/plugins/module-concatenation-plugin/"},"ModuleConcatenationPlugin page")," for details."),(0,t.kt)("h3",{id:"flagincludedchunksplugin"},"FlagIncludedChunksPlugin",(0,t.kt)("a",{parentName:"h3",href:"#flagincludedchunksplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"optimize/FlagIncludedChunksPlugin()")),(0,t.kt)("p",null,"Adds chunk ids of chunks which are included in the chunk. This eliminates unnecessary chunk loads."),(0,t.kt)("h3",{id:"realcontenthashplugin"},"RealContentHashPlugin",(0,t.kt)("a",{parentName:"h3",href:"#realcontenthashplugin","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"optimize/RealContentHashPlugin()")),(0,t.kt)("p",null,"When ",(0,t.kt)("a",{parentName:"p",href:"/configuration/optimization/#optimizationrealcontenthash"},(0,t.kt)("inlineCode",{parentName:"a"},"optimization.realContentHash"))," option is enabled, webpack will apply ",(0,t.kt)("inlineCode",{parentName:"p"},"RealContentHashPlugin")," to compiler internally."),(0,t.kt)("h4",{id:"hook"},"Hook",(0,t.kt)("a",{parentName:"h4",href:"#hook","aria-hidden":"true",tabIndex:-1},(0,t.kt)("span",{parentName:"a",className:"header-link"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"RealContentHashPlugin")," provides a ",(0,t.kt)("inlineCode",{parentName:"p"},"updateHash")," ",(0,t.kt)(p,{text:"5.8.0+",mdxType:"Badge"})," hook for customizing hash updating:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"hljs language-js"},(0,t.kt)("span",{parentName:"code",className:"token keyword"},"const")," webpack ",(0,t.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,t.kt)("span",{parentName:"code",className:"token function"},"require"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,t.kt)("span",{parentName:"code",className:"token string"},"'webpack'"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,t.kt)("span",{parentName:"code",className:"token keyword"},"const")," RealContentHashPlugin ",(0,t.kt)("span",{parentName:"code",className:"token operator"},"=")," webpack",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"."),"optimize",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"."),"RealContentHashPlugin",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,t.kt)("span",{parentName:"code",className:"token comment"},"// ..."),"\ncompiler",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"."),"hooks",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"."),"compilation",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,t.kt)("span",{parentName:"code",className:"token function"},"tap"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,t.kt)("span",{parentName:"code",className:"token string"},"'MyPlugin'"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,t.kt)("span",{parentName:"code",className:"token parameter"},"compilation"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,t.kt)("span",{parentName:"code",className:"token operator"},"=>")," ",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,t.kt)("span",{parentName:"code",className:"token keyword"},"const")," hooks ",(0,t.kt)("span",{parentName:"code",className:"token operator"},"=")," RealContentHashPlugin",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,t.kt)("span",{parentName:"code",className:"token function"},"getCompilationHooks"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"("),"compilation",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n  hooks",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"."),"updateHash",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,t.kt)("span",{parentName:"code",className:"token function"},"tap"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,t.kt)("span",{parentName:"code",className:"token string"},"'MyPlugin'"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,t.kt)("span",{parentName:"code",className:"token parameter"},"content",(0,t.kt)("span",{parentName:"span",className:"token punctuation"},",")," oldHash"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,t.kt)("span",{parentName:"code",className:"token operator"},"=>")," ",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",(0,t.kt)("span",{parentName:"code",className:"token comment"},"// you can calculate the hash here as you wish"),"\n  ",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},";"),"\n",(0,t.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,t.kt)("span",{parentName:"code",className:"token punctuation"},";"))))}r.isMDXComponent=!0}}]);