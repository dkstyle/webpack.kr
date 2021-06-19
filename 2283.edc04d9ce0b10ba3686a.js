(self.webpackChunk=self.webpackChunk||[]).push([[2283],{2283:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return p}}),t(7378);var n=t(5318);function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const o={};function p({components:e,...a}){return(0,n.kt)("wrapper",s({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("p",null,"title: Loaders\nsort: 3\ncontributors:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"manekinekko"),(0,n.kt)("li",{parentName:"ul"},"evenstensberg"),(0,n.kt)("li",{parentName:"ul"},"SpaceK33z"),(0,n.kt)("li",{parentName:"ul"},"gangachris"),(0,n.kt)("li",{parentName:"ul"},"TheLarkInn"),(0,n.kt)("li",{parentName:"ul"},"simon04"),(0,n.kt)("li",{parentName:"ul"},"jhnns"),(0,n.kt)("li",{parentName:"ul"},"byzyk"),(0,n.kt)("li",{parentName:"ul"},"debs-obrien"),(0,n.kt)("li",{parentName:"ul"},"EugeneHlushko"),(0,n.kt)("li",{parentName:"ul"},"wizardofhogwarts"),(0,n.kt)("li",{parentName:"ul"},"lukasgeiter"),(0,n.kt)("li",{parentName:"ul"},"furkle"),(0,n.kt)("li",{parentName:"ul"},"jamesgeorge007"),(0,n.kt)("li",{parentName:"ul"},"textbook\ntranslators:"),(0,n.kt)("li",{parentName:"ul"},"keipark")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"로더는 모듈의 소스 코드에 변경 사항을 적용합니다. 파일을 ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," 하거나 “로드”할 때 전처리를 할 수 있습니다. 따라서 로더는 다른 빌드 도구의 “태스크”와 유사하며 프런트엔드 빌드 단계를 처리하는 강력한 방법을 제공합니다. 로더는 파일을 TypeScript와 같은 다른 언어에서 JavaScript로 변환하거나 인라인 이미지를 데이터 URL로 로드 할 수 있습니다. 로더를 사용하면 JavaScript 모듈에서 직접 CSS 파일을 ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," 하는 작업도 수행 할 수 있습니다!"),(0,n.kt)("h2",{id:"example"},"Example",(0,n.kt)("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},(0,n.kt)("span",{parentName:"a",className:"header-link"}))),(0,n.kt)("p",null,"예를 들어 로더를 사용하여 webpack에 CSS 파일을 로드하거나 TypeScript를 JavaScript로 변환할 수 있습니다. 이를 위해서 필요한 로더를 설치해봅시다."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"hljs language-bash"},(0,n.kt)("span",{parentName:"code",className:"token function"},"npm")," ",(0,n.kt)("span",{parentName:"code",className:"token function"},"install")," --save-dev css-loader ts-loader")),(0,n.kt)("p",null,"그리고 모든",(0,n.kt)("inlineCode",{parentName:"p"},".css")," 파일에 ",(0,n.kt)("a",{parentName:"p",href:"/loaders/css-loader"},(0,n.kt)("inlineCode",{parentName:"a"},"css-loader")),"를 사용하고, ",(0,n.kt)("inlineCode",{parentName:"p"},".ts")," 파일에는 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},(0,n.kt)("inlineCode",{parentName:"a"},"ts-loader")),"를 사용하도록 webpack에 지시합니다."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"hljs language-js"},"module",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"."),"exports ",(0,n.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  module",(0,n.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    rules",(0,n.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"["),"\n      ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"{")," test",(0,n.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,n.kt)("span",{parentName:"code",className:"token regex"},"/\\.css$/"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},",")," use",(0,n.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,n.kt)("span",{parentName:"code",className:"token string"},"'css-loader'")," ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n      ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"{")," test",(0,n.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,n.kt)("span",{parentName:"code",className:"token regex"},"/\\.ts$/"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},",")," use",(0,n.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,n.kt)("span",{parentName:"code",className:"token string"},"'ts-loader'")," ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n  ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},";"))),(0,n.kt)("h2",{id:"using-loaders"},"Using Loaders",(0,n.kt)("a",{parentName:"h2",href:"#using-loaders","aria-hidden":"true",tabIndex:-1},(0,n.kt)("span",{parentName:"a",className:"header-link"}))),(0,n.kt)("p",null,"애플리케이션에서 로더를 사용하는 두 가지 방법이 있습니다."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#configuration"},"설정")," (추천): ",(0,n.kt)("strong",{parentName:"li"},"webpack.config.js")," 파일에 지정합니다."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#inline"},"인라인"),": 각 ",(0,n.kt)("inlineCode",{parentName:"li"},"import")," 문에서 명확하게 지정합니다.")),(0,n.kt)("h3",{id:"configuration"},"Configuration",(0,n.kt)("a",{parentName:"h3",href:"#configuration","aria-hidden":"true",tabIndex:-1},(0,n.kt)("span",{parentName:"a",className:"header-link"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/configuration/module/#modulerules"},(0,n.kt)("inlineCode",{parentName:"a"},"module.rules")),"를 사용하면 webpack 설정 내에 여러 개의 로더를 지정할 수 있습니다.\n이것은 로더를 표시하는 간결한 방법이며, 클린 코드를 유지하는 데 도움이 됩니다. 또한 각각의 로더에 대한 전체 개요를 제공합니다."),(0,n.kt)("p",null,"로더는 오른쪽에서 왼쪽으로 (또는 아래에서 위로) 평가/실행됩니다. 아래 예제에서는 sass-loader로 실행이 시작되고, css-loader로 이어지며 마지막으로 style-loader로 끝납니다. 로더 순서에 대한 더 자세한 내용은 ",(0,n.kt)("a",{parentName:"p",href:"/concepts/loaders/#loader-features"},'"로더 기능"'),"을 참고하세요."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"hljs language-js-with-links"},"module",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"."),"exports ",(0,n.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  module",(0,n.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    rules",(0,n.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"["),"\n      ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        test",(0,n.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,n.kt)("span",{parentName:"code",className:"token regex"},"/\\.css$/"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n        use",(0,n.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"["),"\n          ",(0,n.kt)("span",{parentName:"code",className:"token comment"},"// [style-loader](/loaders/style-loader)"),"\n          ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"{")," loader",(0,n.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,n.kt)("span",{parentName:"code",className:"token string"},"'style-loader'")," ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n          ",(0,n.kt)("span",{parentName:"code",className:"token comment"},"// [css-loader](/loaders/css-loader)"),"\n          ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n            loader",(0,n.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,n.kt)("span",{parentName:"code",className:"token string"},"'css-loader'"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n            options",(0,n.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"{"),"\n              modules",(0,n.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,n.kt)("span",{parentName:"code",className:"token boolean"},"true"),"\n            ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n          ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},","),"\n          ",(0,n.kt)("span",{parentName:"code",className:"token comment"},"// [sass-loader](/loaders/sass-loader)"),"\n          ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"{")," loader",(0,n.kt)("span",{parentName:"code",className:"token operator"},":")," ",(0,n.kt)("span",{parentName:"code",className:"token string"},"'sass-loader'")," ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n        ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"]"),"\n      ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n    ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"]"),"\n  ",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"}"),"\n",(0,n.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},";"))),(0,n.kt)("h3",{id:"inline"},"Inline",(0,n.kt)("a",{parentName:"h3",href:"#inline","aria-hidden":"true",tabIndex:-1},(0,n.kt)("span",{parentName:"a",className:"header-link"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"import")," 문이나 ",(0,n.kt)("a",{parentName:"p",href:"/api/module-methods"},'그와 동등한 "importing" 메소드'),"에서 로더를 지정할 수 있습니다. 접두사 ",(0,n.kt)("inlineCode",{parentName:"p"},"!"),"로 리소스에서 로더를 분리하세요. 각 부분은 현재 디렉터리를 기준으로 해석됩니다."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"hljs language-js"},(0,n.kt)("span",{parentName:"code",className:"token keyword"},"import")," Styles ",(0,n.kt)("span",{parentName:"code",className:"token keyword"},"from")," ",(0,n.kt)("span",{parentName:"code",className:"token string"},"'style-loader!css-loader?modules!./styles.css'"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},";"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/configuration"},"configuration"),"에서 인라인 ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," 문 앞에 접두사를 붙여 모든 로더, 프리 로더 및 포스트 로더를 재정의할 수 있습니다."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"접두사 ",(0,n.kt)("inlineCode",{parentName:"p"},"!"),"는 구성된 모든 일반 로더를 비활성화합니다."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"hljs language-js"},(0,n.kt)("span",{parentName:"code",className:"token keyword"},"import")," Styles ",(0,n.kt)("span",{parentName:"code",className:"token keyword"},"from")," ",(0,n.kt)("span",{parentName:"code",className:"token string"},"'!style-loader!css-loader?modules!./styles.css'"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},";")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"접두사 ",(0,n.kt)("inlineCode",{parentName:"p"},"!!"),"는 구성된 모든 로더(프리 로더, 로더, 포스트 로더)를 비활성화합니다."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"hljs language-js"},(0,n.kt)("span",{parentName:"code",className:"token keyword"},"import")," Styles ",(0,n.kt)("span",{parentName:"code",className:"token keyword"},"from")," ",(0,n.kt)("span",{parentName:"code",className:"token string"},"'!!style-loader!css-loader?modules!./styles.css'"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},";")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"접두사 ",(0,n.kt)("inlineCode",{parentName:"p"},"-!"),"는 포스트 로더를 제외한 구성된 모든 프리 로더와 로더를 비활성화합니다."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"hljs language-js"},(0,n.kt)("span",{parentName:"code",className:"token keyword"},"import")," Styles ",(0,n.kt)("span",{parentName:"code",className:"token keyword"},"from")," ",(0,n.kt)("span",{parentName:"code",className:"token string"},"'-!style-loader!css-loader?modules!./styles.css'"),(0,n.kt)("span",{parentName:"code",className:"token punctuation"},";"))))),(0,n.kt)("p",null,"옵션은 쿼리 파라미터(예: ",(0,n.kt)("inlineCode",{parentName:"p"},"?key=value&foo=bar"),") 또는 JSON 객체(예: ",(0,n.kt)("inlineCode",{parentName:"p"},'? { "key": "value", "foo": "bar"}'),")로 전달할 수 있습니다."),(0,n.kt)("aside",{className:"tip"},(0,n.kt)("h6",{parentName:"aside",className:"tip__prefix"},"tip"),(0,n.kt)("p",{parentName:"aside"},"가능하면 항상 ",(0,n.kt)("inlineCode",{parentName:"p"},"module.rules")," 사용을 권장합니다. 소스 코드의 보일러플레이트를 줄이고 문제가 발생할 경우 더 빨리 디버깅하거나 로더를 찾을 수 있기 때문입니다.")),(0,n.kt)("h2",{id:"loader-features"},"Loader Features",(0,n.kt)("a",{parentName:"h2",href:"#loader-features","aria-hidden":"true",tabIndex:-1},(0,n.kt)("span",{parentName:"a",className:"header-link"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"로더는 연결할 수 있습니다. 체인의 각 로더는 처리된 리소스에 변환을 적용합니다. 체인은 역순으로 실행됩니다. 첫 번째 로더는 결과(변환이 적용된 리소스)를 다음 로더로 전달하며, 전달은 다음 로더로 계속됩니다. 마지막으로, webpack은 체인의 마지막 로더가 JavaScript를 반환할 것으로 예상합니다."),(0,n.kt)("li",{parentName:"ul"},"로더는 동기식 또는 비동기식일 수 있습니다."),(0,n.kt)("li",{parentName:"ul"},"로더는 Node.js에서 실행되며 Node.js에서 가능한 모든 작업을 수행 할 수 있습니다."),(0,n.kt)("li",{parentName:"ul"},"로더는 ",(0,n.kt)("inlineCode",{parentName:"li"},"options")," 객체로 구성 할 수 있습니다. (여전히 ",(0,n.kt)("inlineCode",{parentName:"li"},"query")," 파라미터를 사용하여 옵션을 설정할 수 있지만 권장하지 않음)"),(0,n.kt)("li",{parentName:"ul"},"일반 모듈은 ",(0,n.kt)("inlineCode",{parentName:"li"},"loader")," 필드가 있는 ",(0,n.kt)("inlineCode",{parentName:"li"},"package.json"),"을 통해 ",(0,n.kt)("inlineCode",{parentName:"li"},"main")," 및 로더를 내보낼 수 있습니다."),(0,n.kt)("li",{parentName:"ul"},"플러그인은 로더에 더 많은 기능을 제공 할 수 있습니다."),(0,n.kt)("li",{parentName:"ul"},"로더는 추가로 임의의 파일을 생성할 수 있습니다.")),(0,n.kt)("p",null,"로더는 전처리 기능을 통해 결과물을 커스터마이즈 할 수 있도록 합니다. 이제 사용자는 압축, 패키징, 언어 번역 뿐만 아니라 ",(0,n.kt)("a",{parentName:"p",href:"/loaders"},"더 많은")," 세밀한 로직을 유연하게 추가할 수 있습니다."),(0,n.kt)("h2",{id:"resolving-loaders"},"Resolving Loaders",(0,n.kt)("a",{parentName:"h2",href:"#resolving-loaders","aria-hidden":"true",tabIndex:-1},(0,n.kt)("span",{parentName:"a",className:"header-link"}))),(0,n.kt)("p",null,"로더는 표준 ",(0,n.kt)("a",{parentName:"p",href:"/concepts/module-resolution/"},"모듈 해석"),"을 따릅니다. 대부분의 경우 ",(0,n.kt)("a",{parentName:"p",href:"/concepts/module-resolution/#module-paths"},"모듈 경로"),"에서 로드됩니다 (",(0,n.kt)("inlineCode",{parentName:"p"},"npm install"),",",(0,n.kt)("inlineCode",{parentName:"p"},"node_modules")," 를 생각해보세요)."),(0,n.kt)("p",null,"로더 모듈은 함수를 내보내고 Node.js와 호환되는 JavaScript로 작성해야 합니다. 로더 모듈은 일반적으로 npm으로 관리하지만, 커스텀 로더를 애플리케이션 내에 파일로 포함할 수도 있습니다. 컨벤션에 따르면 로더는 일반적으로 ",(0,n.kt)("inlineCode",{parentName:"p"},"xxx-loader"),"(예 :",(0,n.kt)("inlineCode",{parentName:"p"},"json-loader"),")로 명명합니다. 더 자세한 내용은 ",(0,n.kt)("a",{parentName:"p",href:"/contribute/writing-a-loader/"},'"로더 작성하기"'),"를 참고하세요."))}p.isMDXComponent=!0}}]);