"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7057],{7057:function(e,a,n){n.r(a),n(3696);var t=n(1445);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l.apply(this,arguments)}function r(e){let{components:a,...n}=e;return(0,t.yg)("wrapper",l({components:a},n),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"ContextModuleFactory")," 모듈은 webpack의 ",(0,t.yg)("a",{href:"/api/module-methods/#requirecontext",parentName:"p"},"require.context")," API에서 디펜던시를 생성하기 위해 ",(0,t.yg)("inlineCode",{parentName:"p"},"컴파일러"),"에서 사용됩니다. 요청된 디렉터리를 확인하고, 각 파일에 대한 요청을 생성하며 전달된 정규 표현식으로 필터링합니다. 이 과정을 거쳐 일치하는 디펜던시만 ",(0,t.yg)("a",{href:"/api/normalmodulefactory-hooks",parentName:"p"},"NormalModuleFactory"),"를 통과합니다."),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"ContextModuleFactory")," 클래스는 ",(0,t.yg)("inlineCode",{parentName:"p"},"Tapable"),"을 확장하고 다음과 같은 수명 주기 훅을 제공합니다.\n아래와 같이 컴파일러 훅과 같은 방식으로 탭할 수 있습니다."),(0,t.yg)("pre",null,(0,t.yg)("code",{className:"hljs language-js",parentName:"pre"},"ContextModuleFactory",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"hooks",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),"someHook",(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.yg)("span",{className:"token function",parentName:"code"},"tap"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.yg)("span",{className:"token comment",parentName:"code"},"/* ... */"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.yg)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"compiler"),"와 마찬가지로 ",(0,t.yg)("inlineCode",{parentName:"p"},"tapAsync"),"와 ",(0,t.yg)("inlineCode",{parentName:"p"},"tapPromise"),"도 훅 유형에 따라 사용할 수 있습니다."),(0,t.yg)("h3",null,(0,t.yg)("span",{id:"beforeresolve",parentName:"h3"}),"beforeResolve",(0,t.yg)("a",{href:"#beforeresolve","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"AsyncSeriesWaterfallHook")),(0,t.yg)("p",null,"요청된 디렉터리를 확인하기 전에 호출됩니다. ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"를 반환하여 요청을 무시할 수 있습니다."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"콜백 파라미터: ",(0,t.yg)("inlineCode",{parentName:"li"},"data"))),(0,t.yg)("h3",null,(0,t.yg)("span",{id:"afterresolve",parentName:"h3"}),"afterResolve",(0,t.yg)("a",{href:"#afterresolve","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"AsyncSeriesWaterfallHook")),(0,t.yg)("p",null,"요청된 디렉터리가 확인된 후 호출됩니다."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"콜백 파라미터: ",(0,t.yg)("inlineCode",{parentName:"li"},"data"))),(0,t.yg)("h3",null,(0,t.yg)("span",{id:"contextmodulefiles",parentName:"h3"}),"contextModuleFiles",(0,t.yg)("a",{href:"#contextmodulefiles","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"SyncWaterfallHook")),(0,t.yg)("p",null,"디렉터리 내용을 읽은 후 호출됩니다. 재귀 모드에서는 각 하위 디렉터리도 호출합니다. 콜백 파라미터는 각 디렉터리에 있는 모든 파일 및 폴더 이름의 배열입니다."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"콜백 파라미터: ",(0,t.yg)("inlineCode",{parentName:"li"},"fileNames"))),(0,t.yg)("h3",null,(0,t.yg)("span",{id:"alternativerequests",parentName:"h3"}),"alternativeRequests",(0,t.yg)("a",{href:"#alternativerequests","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.yg)("span",{className:"header-link",parentName:"a"}))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"AsyncSeriesWaterfallHook")),(0,t.yg)("p",null,"요청이 생성된 후 정규 표현식으로 필터링하기 전에 각 파일에 대해 호출됩니다."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"콜백 파라미터: ",(0,t.yg)("inlineCode",{parentName:"li"},"request")," ",(0,t.yg)("inlineCode",{parentName:"li"},"options"))))}r.isMDXComponent=!0,a.default=r}}]);