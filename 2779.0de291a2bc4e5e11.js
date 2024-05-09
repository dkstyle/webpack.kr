"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2779],{2779:function(e,a,n){n.r(a),n(3696);var t=n(1445);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},p.apply(this,arguments)}function l(e){let{components:a,...n}=e;return(0,t.yg)("wrapper",p({components:a},n),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"DllPlugin"),"과 ",(0,t.yg)("inlineCode",{parentName:"p"},"DllReferencePlugin"),'은 빌드 시간 성능을 크게 향상시키는 방식으로 번들을 분할하는 수단을 제공합니다. "DLL"이라는 용어는 원래 Microsoft에서 도입한 동적 링크 라이브러리를 나타냅니다.'),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"dllplugin",parentName:"h2"}),"DllPlugin",(0,t.yg)("a",{href:"#dllplugin","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"이 플러그인은 dll 전용 번들을 생성하기 위해 단독으로 별도의 webpack 설정에서 사용됩니다. 의존성을 매핑하기 위해 ",(0,t.yg)("a",{href:"#dllreferenceplugin",parentName:"p"},(0,t.yg)("inlineCode",{parentName:"a"},"DllReferencePlugin")),"에서 사용하는 ",(0,t.yg)("inlineCode",{parentName:"p"},"manifest.json"),"파일을 생성합니다."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"context")," (선택): 매니페스트 파일의 요청 컨텍스트 (기본값은 webpack 컨텍스트)"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"format")," (boolean = false): ",(0,t.yg)("inlineCode",{parentName:"li"},"true"),"인 경우 매니페스트 json 파일(출력)이 형식화됩니다."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name"),": 노출된 dll 함수의 이름 (",(0,t.yg)("a",{href:"https://github.com/webpack/webpack/blob/main/lib/TemplatedPathPlugin.js",parentName:"li"},"TemplatePaths"),": ",(0,t.yg)("inlineCode",{parentName:"li"},"[fullhash]"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"[chunkhash]"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"[contenthash]"),", & ",(0,t.yg)("inlineCode",{parentName:"li"},"[name]")," )"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"path"),": 매니페스트 json 파일의 ",(0,t.yg)("strong",{parentName:"li"},"절대 경로")," (출력)"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"entryOnly")," (boolean = true): ",(0,t.yg)("inlineCode",{parentName:"li"},"true"),"인 경우 엔트리 포인트만 노출됩니다."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"type"),": dll 번들의 유형")),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.yg)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.yg)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.yg)("span",{className:"token punctuation",parentName:"span"},"."),"DllPlugin"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"options",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("aside",{className:"warning"},(0,t.yg)("h6",{className:"warning__prefix",parentName:"aside"},"warning"),(0,t.yg)("p",{parentName:"aside"},"Webpack 출력에서 ",(0,t.yg)("a",{href:"/guides/code-splitting",parentName:"p"},"코드 분할"),"을 사용하는 경우 webpack이 여러 매니페스트 파일을 생성하도록 ",(0,t.yg)("inlineCode",{parentName:"p"},"path"),"에서 ",(0,t.yg)("a",{href:"/configuration/output/#template-strings",parentName:"p"},"템플릿 문자열"),"을 사용해야 합니다.")),(0,t.yg)("aside",{className:"warning"},(0,t.yg)("h6",{className:"warning__prefix",parentName:"aside"},"warning"),(0,t.yg)("p",{parentName:"aside"},"DllPlugin을 ",(0,t.yg)("inlineCode",{parentName:"p"},"entryOnly: true"),"와 함께 사용하는 것을 권장합니다. 그렇지 않으면 모든 export가 사용될 수 있으므로 DLL에서 트리 쉐이킹이 작동하지 않습니다.")),(0,t.yg)("p",null,"주어진 ",(0,t.yg)("inlineCode",{parentName:"p"},"경로"),"에 기록되는 ",(0,t.yg)("inlineCode",{parentName:"p"},"manifest.json"),"을 생성합니다. 여기에는 require와 import 요청에서 모듈 id로의 매핑이 포함됩니다. 이는 ",(0,t.yg)("inlineCode",{parentName:"p"},"DllReferencePlugin")," 에서 사용됩니다."),(0,t.yg)("p",null,"이 플러그인을 ",(0,t.yg)("a",{href:"/configuration/output/#outputlibrary",parentName:"p"},(0,t.yg)("inlineCode",{parentName:"a"},"output.library")),"옵션과 결합하여 dll 함수를 노출(전역 범위로 확대)합니다."),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"dllreferenceplugin",parentName:"h2"}),"DllReferencePlugin",(0,t.yg)("a",{href:"#dllreferenceplugin","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"이 플러그인은 기본 webpack 설정에서 사용되며, 사전 빌드된 의존성을 require 하기 위해 dll 전용 번들을 참조합니다."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"context"),": 매니페스트(또는 콘텐츠 프로퍼티)에 있는 요청의 (",(0,t.yg)("strong",{parentName:"li"},"절대 경로"),") 컨텍스트"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"extensions"),": dll 번들의 모듈을 해결하는데 사용되는 확장입니다(‘유효범위’를 사용할 때만 사용)."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"manifest")," : ",(0,t.yg)("inlineCode",{parentName:"li"},"content")," 및 ",(0,t.yg)("inlineCode",{parentName:"li"},"name"),"을 포함하는 객체 또는 컴파일 시 로드될 JSON 매니페스트의 절대 경로에 대한 문자열"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"content")," (선택): 요청에서 모듈 id 로의 매핑(기본값은 ",(0,t.yg)("inlineCode",{parentName:"li"},"manifest.content"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name")," (선택): dll이 노출되는 식별자(기본값은 ",(0,t.yg)("inlineCode",{parentName:"li"},"manifest.name"),")(",(0,t.yg)("a",{href:"/configuration/externals/",parentName:"li"},(0,t.yg)("inlineCode",{parentName:"a"},"externals"))," 참조)"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"scope")," (선택): dll의 콘텐츠에 접근하는데 사용되는 접두사"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"sourceType")," (선택): dll이 노출되는 방법(",(0,t.yg)("a",{href:"/configuration/output/#outputlibrarytarget",parentName:"li"},"libraryTarget"),")")),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.yg)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.yg)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.yg)("span",{className:"token punctuation",parentName:"span"},"."),"DllReferencePlugin"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"options",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("p",null,"dll 매니페스트 파일을 참조하여 의존성 이름을 모듈 id에 매핑한 다음, 내부 ",(0,t.yg)("inlineCode",{parentName:"p"},"__webpack_require__"),"함수를 사용하여 필요에 따라 요청합니다."),(0,t.yg)("aside",{className:"warning"},(0,t.yg)("h6",{className:"warning__prefix",parentName:"aside"},"warning"),(0,t.yg)("p",{parentName:"aside"},(0,t.yg)("inlineCode",{parentName:"p"},"name"),"을 ",(0,t.yg)("a",{href:"/configuration/output/#outputlibrary",parentName:"p"},(0,t.yg)("inlineCode",{parentName:"a"},"output.library")),"와 일관되게 유지합니다.")),(0,t.yg)("h3",null,(0,t.yg)("span",{id:"modes",parentName:"h3"}),"Modes",(0,t.yg)("a",{href:"#modes","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"이 플러그인은 ",(0,t.yg)("em",{parentName:"p"},"scoped")," 와 ",(0,t.yg)("em",{parentName:"p"},"mapped")," 두 가지 모드에서 사용할 수 있습니다."),(0,t.yg)("h4",null,(0,t.yg)("span",{id:"scoped-mode",parentName:"h4"}),"Scoped Mode",(0,t.yg)("a",{href:"#scoped-mode","aria-hidden":"true",tabIndex:"-1",parentName:"h4"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"dll의 콘텐츠는 모듈 접두사 아래에서 접근 가능합니다. 즉, ",(0,t.yg)("inlineCode",{parentName:"p"},"scope = 'xyz'"),"로 dll의 파일 ",(0,t.yg)("inlineCode",{parentName:"p"},"abc")," 는 ",(0,t.yg)("inlineCode",{parentName:"p"},"require('xyz/abc')"),"를 통해 접근할 수 있습니다."),(0,t.yg)("aside",{className:"tip"},(0,t.yg)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,t.yg)("p",{parentName:"aside"},(0,t.yg)("a",{href:"https://github.com/webpack/webpack/tree/master/examples/dll-user",parentName:"p"},"유효범위 사용의 예제를 살펴보세요."))),(0,t.yg)("h4",null,(0,t.yg)("span",{id:"mapped-mode",parentName:"h4"}),"Mapped Mode",(0,t.yg)("a",{href:"#mapped-mode","aria-hidden":"true",tabIndex:"-1",parentName:"h4"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"dll의 콘텐츠는 현재 디렉터리에 매핑됩니다. 필요한 파일이 dll의 파일과 확인 후 일치하는 경우, dll의 파일이 대신 사용됩니다."),(0,t.yg)("p",null,"이것은 dll 번들의 모든 파일을 해석한 후 발생하기 때문에 dll 번들의 사용자에 대해 동일한 경로를 사용할 수 있어야 합니다. 즉, dll에 ",(0,t.yg)("inlineCode",{parentName:"p"},"lodash")," 가 포함되어 있고 ",(0,t.yg)("inlineCode",{parentName:"p"},"abc")," 파일이 있으면 ",(0,t.yg)("inlineCode",{parentName:"p"},"require('lodash')")," 및",(0,t.yg)("inlineCode",{parentName:"p"},"require('./abc')")," 가 메인 번들로 빌드되지 않고 dll에서 사용됩니다."),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"usage",parentName:"h2"}),"Usage",(0,t.yg)("a",{href:"#usage","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("aside",{className:"warning"},(0,t.yg)("h6",{className:"warning__prefix",parentName:"aside"},"warning"),(0,t.yg)("p",{parentName:"aside"},(0,t.yg)("inlineCode",{parentName:"p"},"DllReferencePlugin"),"과 ",(0,t.yg)("inlineCode",{parentName:"p"},"DllPlugin"),"은 ",(0,t.yg)("em",{parentName:"p"},"별도의")," wepback 설정에서 사용됩니다.")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"webpack.vendor.config.js")),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.yg)("span",{className:"token keyword",parentName:"code"},"const")," path ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.yg)("span",{className:"token function",parentName:"code"},"require"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token string",parentName:"code"},"'path'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.yg)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.yg)("span",{className:"token punctuation",parentName:"span"},"."),"DllPlugin"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  context",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," __dirname",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  name",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'[name]_[fullhash]'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  path",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," path",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"join"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),"__dirname",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'manifest.json'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"webpack.app.config.js")),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.yg)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.yg)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.yg)("span",{className:"token punctuation",parentName:"span"},"."),"DllReferencePlugin"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  context",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," __dirname",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  manifest",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token function",parentName:"code"},"require"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token string",parentName:"code"},"'./manifest.json'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  scope",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'xyz'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  sourceType",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'commonjs2'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"examples",parentName:"h2"}),"Examples",(0,t.yg)("a",{href:"#examples","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,(0,t.yg)("a",{href:"https://github.com/webpack/webpack/tree/master/examples/dll",parentName:"p"},"Vendor")," 와 ",(0,t.yg)("a",{href:"https://github.com/webpack/webpack/tree/master/examples/dll-user",parentName:"p"},"User")),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"두 개의 개별 예제 폴더로, 유효범위와 컨텍스트를 보여줍니다.")),(0,t.yg)("aside",{className:"tip"},(0,t.yg)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,t.yg)("p",{parentName:"aside"},"다중 ",(0,t.yg)("inlineCode",{parentName:"p"},"DllPlugins"),"과 다중 ",(0,t.yg)("inlineCode",{parentName:"p"},"DllReferencePlugins"))),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"references",parentName:"h2"}),"References",(0,t.yg)("a",{href:"#references","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("h3",null,(0,t.yg)("span",{id:"source",parentName:"h3"}),"Source",(0,t.yg)("a",{href:"#source","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"https://github.com/webpack/webpack/blob/main/lib/DllPlugin.js",parentName:"li"},"DllPlugin source")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"https://github.com/webpack/webpack/blob/main/lib/DllReferencePlugin.js",parentName:"li"},"DllReferencePlugin source")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"https://github.com/webpack/webpack/blob/main/lib/DllEntryPlugin.js",parentName:"li"},"DllEntryPlugin source")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"https://github.com/webpack/webpack/blob/main/lib/DllModuleFactory.js",parentName:"li"},"DllModuleFactory source")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"https://github.com/webpack/webpack/blob/main/lib/LibManifestPlugin.js",parentName:"li"},"ManifestPlugin source"))),(0,t.yg)("h3",null,(0,t.yg)("span",{id:"tests",parentName:"h3"}),"Tests",(0,t.yg)("a",{href:"#tests","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"https://github.com/webpack/webpack/blob/main/test/configCases/dll-plugin/0-create-dll/webpack.config.js",parentName:"li"},"DllPlugin creation test")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"https://github.com/webpack/webpack/blob/main/test/configCases/dll-plugin/2-use-dll-without-scope/webpack.config.js",parentName:"li"},"DllPlugin without scope test")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{href:"https://github.com/webpack/webpack/tree/master/test/configCases/dll-plugin",parentName:"li"},"DllReferencePlugin use Dll test"))))}l.isMDXComponent=!0,a.default=l}}]);