"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8197],{8197:function(e,a,n){n.r(a),n(7378);var t=n(2682);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function p(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",o({components:a},n),(0,t.kt)("p",null,"로깅 출력은 최종 사용자에게 메시지를 표시하는 추가적인 방법입니다."),(0,t.kt)("p",null,"webpack애서 사용자 정의 로깅 API의 이점:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{href:"/configuration/stats/#statslogging",parentName:"li"},"로깅 설정")," 표시 레벨의 공통 위치"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"stats.json"),"의 일부로 export 할 수 있는 로깅 출력입니다."),(0,t.kt)("li",{parentName:"ul"},"통계 프리셋은 로깅 출력에 영향을 줍니다."),(0,t.kt)("li",{parentName:"ul"},"플러그인이 로깅 캡처 및 표시 레벨에 영향을 줄 수 있습니다."),(0,t.kt)("li",{parentName:"ul"},"여러 플러그인 및 로더를 사용하는 경우 공통 로깅 솔루션을 사용합니다."),(0,t.kt)("li",{parentName:"ul"},"CLI, webpack용 UI 도구는 로깅을 표시하는 다른 방법을 선택할 수 있습니다."),(0,t.kt)("li",{parentName:"ul"},"webpack 코어는 로깅 출력을 내보낼 수 있습니다. 예) 타이밍 데이터")),(0,t.kt)("p",null,"webpack 로깅 API를 도입함으로써 webpack 플러그인 및 로더가 로그를 내보내는 방식을 통합하고 빌드 문제를 검사하는 더 나은 방법을 제공하기를 바랍니다. 통합 로깅 솔루션은 개발 경험을 개선하여 플러그인 및 로더 개발자를 지원합니다. 대시보드 또는 기타 UI와 같은 CLI가 아닌 wepack 솔루션을 위한 기반을 마련합니다."),(0,t.kt)("aside",{className:"warning"},(0,t.kt)("h6",{className:"warning__prefix",parentName:"aside"},"warning"),(0,t.kt)("p",{parentName:"aside"},(0,t.kt)("strong",{parentName:"p"},"로그에서 노이즈 방지!")," 여러 플러그인과 로더가 함께 사용된다는 점에 유의하세요. 로더는 일반적으로 여러 파일을 처리하고 모든 파일에 대해 호출됩니다. 로그 출력을 유용한 정보로 유지하려면 로깅 레벨을 가능한 낮게 선택하세요.")),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"examples-of-how-to-get-and-use-webpack-logger-in-loaders-and-plugins",parentName:"h2"}),"Examples of how to get and use webpack logger in loaders and plugins",(0,t.kt)("a",{href:"#examples-of-how-to-get-and-use-webpack-logger-in-loaders-and-plugins","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"my-webpack-plugin.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," ",(0,t.kt)("span",{className:"token constant",parentName:"code"},"PLUGIN_NAME")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'my-webpack-plugin'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"export")," ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"class")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"MyWebpackPlugin")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token function",parentName:"code"},"apply"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"compiler"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// 컴파일러에서 로거에 액세스 할 수 있습니다."),"\n    ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," logger ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," compiler",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"getInfrastructureLogger"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token constant",parentName:"code"},"PLUGIN_NAME"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    logger",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'log from compiler'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n    compiler",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"hooks",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"compilation",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"tap"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token constant",parentName:"code"},"PLUGIN_NAME"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"compilation"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// 컴파일에서도 로거에 액세스 할 수 있습니다."),"\n      ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," logger ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," compilation",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"getLogger"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token constant",parentName:"code"},"PLUGIN_NAME"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n      logger",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"info"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'log from compilation'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"my-webpack-loader.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function-variable function",parentName:"code"},"exports")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"function")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"source"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// webpack 로더에서 `this.getLogger`로 로거를 얻을 수 있습니다."),"\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," logger ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"this"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"getLogger"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'my-webpack-loader'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  logger",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"info"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'hello Logger'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"return")," source",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"위의 ",(0,t.kt)("inlineCode",{parentName:"p"},"my-webpack-plugin.js")," 예제에서 볼 수 있듯이, 두 가지 유형의 로깅 방법이 있습니다."),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"compilation.getLogger")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"compiler.getInfrastructureLogger"))),(0,t.kt)("p",null,"플러그인/로깅이 컴파일과 관련된 경우 ",(0,t.kt)("inlineCode",{parentName:"p"},"compilation.getLogger"),"를 사용하는 것이 좋으며 통계 안에 저장됩니다. 컴파일 주기 밖에서 발생하는 로깅의 경우에는 대신 ",(0,t.kt)("inlineCode",{parentName:"p"},"compiler.getInfrastructureLogger"),"를 사용하세요."),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"logger-methods",parentName:"h2"}),"Logger methods",(0,t.kt)("a",{href:"#logger-methods","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"logger.error(...)"),": 에러 메시지용입니다."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"logger.warn(...)"),": 경고용입니다."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"logger.info(...)"),": ",(0,t.kt)("strong",{parentName:"li"},"중요")," 정보성 메시지용입니다. 이러한 메시지는 기본적으로 표시됩니다. 사용자가 실제로 봐야하는 메시지에만 사용합니다."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"logger.log(...)"),": ",(0,t.kt)("strong",{parentName:"li"},"중요하지 않은")," 정보성 메시지용입니다. 이러한 메시지는 사용자가 볼 수 있도록 선택한 경우에만 표시됩니다."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"logger.debug(...)"),": 디버깅 정보용입니다. 이러한 메시지는 사용자가 특정 모듈에 대한 디버그 로깅을 보기로 선택한 경우에만 표시됩니다."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"logger.trace()"),": 스택 추적을 표시하기 위해 사용합니다. ",(0,t.kt)("inlineCode",{parentName:"li"},"logger.debug"),"처럼 표시됩니다."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"logger.group(...)"),": 메시지를 그룹화하기 위해 사용합니다. ",(0,t.kt)("inlineCode",{parentName:"li"},"logger.log"),"처럼 접힌 채로 표시됩니다."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"logger.groupEnd()"),": 로깅 그룹을 종료하기 위해 사용합니다."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"logger.groupCollapsed(...)"),": 메시지를 함께 그룹화하기 위해 사용합니다. ",(0,t.kt)("inlineCode",{parentName:"li"},"logger.log"),"처럼 접힌 채로 표시됩니다. 로깅 수준이 ",(0,t.kt)("inlineCode",{parentName:"li"},"'verbose'")," 나 ",(0,t.kt)("inlineCode",{parentName:"li"},"'debug'"),"로 설정된 경우 확장되어 표시됩니다."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"logger.status"),": 임시 메시지를 작성하고, 새 상태를 설정하고, 이전 메시지를 재정의합니다."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"logger.clear()"),": 수평 라인을 출력합니다. ",(0,t.kt)("inlineCode",{parentName:"li"},"logger.log"),"처럼 표시됩니다."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"logger.profile(...)"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"logger.profileEnd(...)"),": 프로파일을 캡처하기 위해 사용합니다. 지원되는 경우 ",(0,t.kt)("inlineCode",{parentName:"li"},"console.profile"),"에 위임됩니다.")),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"runtime-logger-api",parentName:"h2"}),"Runtime Logger API",(0,t.kt)("a",{href:"#runtime-logger-api","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"런타임 로거 API는 개발 도구로만 사용할 수 있고 ",(0,t.kt)("a",{href:"/configuration/mode/#mode-production",parentName:"p"},"프로덕션 모드"),"에 포함할 수 없습니다."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"const logging = require('webpack/lib/logging/runtime')"),": 런타임에서 로거를 사용하려면 webpack에서 직접 require 해야 합니다."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"logging.getLogger('name')"),": 이름으로 개별 로거를 가져오기 위해 사용합니다."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"logging.configureDefaultLogger(...)"),": 기본 로거를 재정의합니다.")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," logging ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"require"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'webpack/lib/logging/runtime'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\nlogging",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"configureDefaultLogger"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  level",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'log'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  debug",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token regex",parentName:"code"},"/something/"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"logging.hooks.log"),": 런타임 로거에 플러그인을 적용하기 위해 사용합니다.")))}p.isMDXComponent=!0,a.default=p}}]);