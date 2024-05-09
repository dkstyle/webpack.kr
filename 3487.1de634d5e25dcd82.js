"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3487],{3487:function(e,a,n){n.r(a),n(3696);var t=n(1445);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},p.apply(this,arguments)}function s(e){let{components:a,...n}=e;return(0,t.yg)("wrapper",p({components:a},n),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"publicPath")," 설정은 다양한 경우에서 유용하게 사용될 수 있습니다. 애플리케이션의 모든 애셋에 대한 기본 경로를 지정할 수 있습니다."),(0,t.yg)("h2",null,(0,t.yg)("span",{id:"use-cases",parentName:"h2"}),"Use Cases",(0,t.yg)("a",{href:"#use-cases","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"이 기능이 특히 유용한 실제 애플리케이션에서의 몇 가지 사용 사례가 있습니다. 기본적으로 ",(0,t.yg)("inlineCode",{parentName:"p"},"output.path")," 디렉터리로 내보내는 모든 파일은 ",(0,t.yg)("inlineCode",{parentName:"p"},"output.publicPath"),"에서 참조됩니다. 여기에는 하위 청크 (",(0,t.yg)("a",{href:"/guides/code-splitting/",parentName:"p"},"코드 스플리팅"),"을 통해 생성됨) 및 디펜던시 그래프의 일부 애셋(예: 이미지, 글꼴 등)이 포함됩니다."),(0,t.yg)("h3",null,(0,t.yg)("span",{id:"environment-based",parentName:"h3"}),"Environment Based",(0,t.yg)("a",{href:"#environment-based","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"예를 들어 개발 과정에서 index 페이지와 동일한 수준에 있는 ",(0,t.yg)("inlineCode",{parentName:"p"},"assets/")," 폴더가 있을 수 있습니다. 프로덕션 환경에서 정적 애셋을 CDN에 호스팅하려면 어떻게 해야할까요?"),(0,t.yg)("p",null,"이 문제를 해결하기 위해 오랫동안 사용 중인 환경 변수를 사용해봅시다. ",(0,t.yg)("inlineCode",{parentName:"p"},"ASSET_PATH")," 변수가 있다고 가정해 보겠습니다."),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-js",parentName:"pre"},(0,t.yg)("span",{className:"token keyword",parentName:"code"},"import")," webpack ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"from")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'webpack'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,t.yg)("span",{className:"token comment",parentName:"code"},"// 환경 변수를 사용하고 존재하지 않는다면 루트를 사용하세요."),"\n",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"const")," ",(0,t.yg)("span",{className:"token constant",parentName:"code"},"ASSET_PATH")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," process",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"env",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token constant",parentName:"code"},"ASSET_PATH")," ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"||")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'/'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"export")," ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"default")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  output",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    publicPath",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token constant",parentName:"code"},"ASSET_PATH"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n\n  plugins",(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"["),"\n    ",(0,t.yg)("span",{className:"token comment",parentName:"code"},"// 코드에서 환경 변수를 안전하게 사용할 수 있습니다."),"\n    ",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.yg)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.yg)("span",{className:"token punctuation",parentName:"span"},"."),"DefinePlugin"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'process.env.ASSET_PATH'"),(0,t.yg)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.yg)("span",{className:"token constant",parentName:"code"},"JSON"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"stringify"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token constant",parentName:"code"},"ASSET_PATH"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("h3",null,(0,t.yg)("span",{id:"on-the-fly",parentName:"h3"}),"On The Fly",(0,t.yg)("a",{href:"#on-the-fly","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,"또 다른 사용 사례는 ",(0,t.yg)("inlineCode",{parentName:"p"},"publicPath"),"를 직접 설정하는 것입니다. Webpack은 이를 가능하게 하는 ",(0,t.yg)("inlineCode",{parentName:"p"},"__webpack_public_path라는__")," 전역 변수를 노출합니다. 따라서 애플리케이션의 엔트리 포인트에서 간단하게 처리할 수 있습니다."),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-js",parentName:"pre"},"__webpack_public_path__ ",(0,t.yg)("span",{className:"token operator",parentName:"code"},"=")," process",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"env",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token constant",parentName:"code"},"ASSET_PATH"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("p",null,"이게 전부입니다. 이미 설정에서 ",(0,t.yg)("inlineCode",{parentName:"p"},"DefinePlugin"),"을 사용하고 있으므로 ",(0,t.yg)("inlineCode",{parentName:"p"},"process.env.ASSET_PATH"),"는 항상 정의되어 안전하게 사용할 수 있습니다."),(0,t.yg)("aside",{className:"warning"},(0,t.yg)("h6",{className:"warning__prefix",parentName:"aside"},"warning"),(0,t.yg)("p",{parentName:"aside"},"엔트리 파일에서 ES6 모듈 가져오기를 사용하는 경우 가져오기 후에 ",(0,t.yg)("inlineCode",{parentName:"p"},"__webpack_public_path__")," 할당이 수행됩니다. 이러한 경우 공용 경로 할당을 전용 모듈로 이동 한 다음 entry.js 위에서 가져와야 합니다.")),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-js",parentName:"pre"},(0,t.yg)("span",{className:"token comment",parentName:"code"},"// entry.js"),"\n",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"import")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'./public-path'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.yg)("span",{className:"token keyword",parentName:"code"},"import")," ",(0,t.yg)("span",{className:"token string",parentName:"code"},"'./app'"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("aside",{className:"tip"},(0,t.yg)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,t.yg)("p",{parentName:"aside"},(0,t.yg)("inlineCode",{parentName:"p"},"web")," 또는 ",(0,t.yg)("inlineCode",{parentName:"p"},"web-worker"),"를 대상으로 사용하는 경우, ",(0,t.yg)("inlineCode",{parentName:"p"},"publicPath"),"는 ",(0,t.yg)("inlineCode",{parentName:"p"},"'auto'"),"로 기본 설정되어 ",(0,t.yg)("inlineCode",{parentName:"p"},"import.meta.url"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"document.currentScript"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"<script />"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"self.location")," 중 하나를 공개 경로로 자동으로 결정합니다.")))}s.isMDXComponent=!0,a.default=s}}]);