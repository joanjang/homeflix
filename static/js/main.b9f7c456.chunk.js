(this.webpackJsonphomeflix=this.webpackJsonphomeflix||[]).push([[0],{112:function(e,n,t){"use strict";t.r(n);var r,i,a,c,o,s,d,l,b,u,j,m,h,f,g=t(0),O=t(63),p=t.n(O),x=t(12),v=t(10),w=t(5),y=t(4),k=t(8),_=t(15),S=t(16),z=t(1),C=y.d.form(r||(r=Object(w.a)(["\n  display: flex;\n  font-size: 1.2rem;\n  align-items: center;\n  margin-left: 0.5rem;\n"]))),T=y.d.div(i||(i=Object(w.a)(["\n  cursor: pointer;\n"]))),M=y.d.div(a||(a=Object(w.a)(["\n  width: 0;\n  padding: 0.5rem 0;\n  margin-right: 0.3rem;\n  transition: all 0.5s linear;\n\n  &:focus-within {\n    border-bottom: 1px solid white;\n  }\n"]))),E=y.d.input(c||(c=Object(w.a)(["\n  all: unset;\n  width: 100%;\n  text-align: left;\n  font-size: smaller;\n"]))),N=function(){var e=Object(g.useState)(!1),n=Object(k.a)(e,2),t=n[0],r=n[1],i=Object(g.useState)(""),a=Object(k.a)(i,2),c=a[0],o=a[1],s=Object(g.useRef)(),d=Object(v.g)();return Object(z.jsxs)(C,{onSubmit:function(e){if(e.preventDefault(),!c.trim())return alert("\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694!");d.push({pathname:"/search",state:{searchTerm:c}})},children:[Object(z.jsx)(M,{ref:s,children:Object(z.jsx)(E,{type:"text",placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694",value:c,onChange:function(e){var n=e.target.value;o(n)}})}),Object(z.jsx)(T,{onClick:function(){var e=s.current,n=e.style,i=e.firstChild;t?(n.width="15rem",i.focus(),n.paddingLeft=n.paddingRight="1rem"):(o(""),n.width=n.paddingLeft=n.paddingRight=""),i.value=c,r(!t)},children:Object(z.jsx)(_.a,{icon:S.e,className:"search"})})]})},U=y.d.header(o||(o=Object(w.a)(["\n  position: fixed;\n  display: flex;\n  align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 3.75rem;\n  padding: 0 1.1rem;\n  font-size: 0.9rem;\n  color: white;\n  background-color: rgba(20, 20, 20, 0.8);\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n  z-index: 5;\n\n  @media "," {\n    padding: 0 1.2rem;\n\n    li {\n      padding: 0 0.7rem;\n    }\n  }\n"])),(function(e){return e.theme.mobile})),R=y.d.div(s||(s=Object(w.a)(["\n  div {\n    width: 8rem;\n    height: 3rem;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n\n    @media "," {\n      background-image: url(",");\n      width: 3rem;\n      height: 2.4rem;\n    }\n  }\n"])),"logo_default.png",(function(e){return e.theme.mobile}),"logo_mobile.png"),F=y.d.ul(d||(d=Object(w.a)(["\n  display: inherit;\n  position: relative;\n  width: 100%;\n  margin-left: 1rem;\n  white-space: pre;\n  overflow-x: scroll;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n\n  &::-webkit-scrollbar {\n    display: none; /* Chrome, Safari, Opera*/\n  }\n"]))),I=y.d.li(l||(l=Object(w.a)(["\n  padding: 0 1.25rem;\n  height: 3.75rem;\n  text-align: center;\n  font-weight: ",";\n  transition: 0.4s ease-out;\n\n  & > * {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n  }\n\n  &:hover {\n    opacity: ",";\n  }\n"])),(function(e){return e.isCurrent?600:100}),(function(e){return e.isCurrent?"inherit":.6})),V=Object(v.k)((function(e){var n=e.location.pathname;return Object(z.jsxs)(U,{children:[Object(z.jsx)(R,{children:Object(z.jsx)(x.b,{to:"/",children:Object(z.jsx)("div",{})})}),Object(z.jsxs)(F,{children:[Object(z.jsx)(I,{isCurrent:"/"===n,children:Object(z.jsx)(x.b,{to:"/",children:" \ud648"})}),Object(z.jsx)(I,{isCurrent:"/tv"===n,children:Object(z.jsx)(x.b,{to:"/tv",children:"TV \ud504\ub85c\uadf8\ub7a8"})}),Object(z.jsx)(I,{isCurrent:"/movie"===n,children:Object(z.jsx)(x.b,{to:"/movie",children:"\uc601\ud654"})}),Object(z.jsx)(I,{isCurrent:"/trending"===n,children:Object(z.jsx)(x.b,{to:"/trending",children:"NEW! \uc694\uc998 \ub300\uc138 \ucf58\ud150\uce20"})})]}),Object(z.jsx)(N,{})]})})),H=t(23),P=t(13),W=t.n(P),L=t(27),D=t(70),G=t.n(D).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9bbaa74d076c46799b7b1e527458fe42",language:"ko-KR"}}),A=function(){return G.get("tv/top_rated")},q=function(){return G.get("tv/popular")},B=function(){return G.get("tv/airing_today")},J=function(){return G.get("genre/tv/list")},X=function(e){return G.get("tv/".concat(e),{params:{append_to_response:"images",include_image_language:"null,en"}})},K=function(e){return G.get("tv/".concat(e,"/videos"))},Y=function(e){return G.get("tv/".concat(e,"/similar"))},Q=function(e){return G.get("search/tv",{params:{query:encodeURIComponent(e)}})},Z=function(){return G.get("movie/now_playing")},$=function(){return G.get("movie/upcoming")},ee=function(){return G.get("movie/popular")},ne=function(){return G.get("genre/movie/list")},te=function(e){return G.get("movie/".concat(e),{params:{append_to_response:"images",include_image_language:"null,en"}})},re=function(e){return G.get("movie/".concat(e,"/videos"))},ie=function(e){return G.get("movie/".concat(e,"/similar"))},ae=function(e){return G.get("search/movie",{params:{query:encodeURIComponent(e)}})},ce=function(){return G.get("trending/all/week")},oe=function(){return G.get("trending/tv/week")},se=function(){return G.get("trending/movie/week")},de=function(e){return e.filter((function(e){return!!e.backdrop_path}))},le=function(e){return e.slice(0,10)},be=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"original";return"https://image.tmdb.org/t/p/".concat(n,"/").concat(e)},ue=function(e,n){if(!["video","thumnail"].includes(e))throw new Error("'param' must be a TheEnum value");return"video"===e?"https://www.youtube.com/watch?v=".concat(n):"https://img.youtube.com/vi/".concat(n,"/0.jpg")},je=y.d.div(b||(b=Object(w.a)(["\n  width: 100%;\n  height: calc(100vh - 64px);\n  display: flex;\n  overflow-x: hidden;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]))),me=y.d.div(u||(u=Object(w.a)(["\n  margin-bottom: 0.5rem;\n\n  h4 {\n    color: #ddd;\n    font-weight: 200;\n  }\n"]))),he=y.d.div(m||(m=Object(w.a)(["\n  display: flex;\n  padding: 2rem;\n  height: fit-content;\n  margin-bottom: 1rem;\n  animation: "," 10s linear 1s\n    forwards alternate infinite;\n  place-self: flex-start;\n"])),(function(e){var n,t=e.totalWidth;return n=t,Object(y.e)(j||(j=Object(w.a)(["\n  from {\n    transform: translateX(0%);\n  }\n  to {\n    transform: translateX(calc(100vw - ","px));\n  }\n"])),n)})),fe=y.d.div(h||(h=Object(w.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  width: 15rem;\n  height: 22rem;\n\n  &:not(:last-child) {\n    margin-right: 1rem;\n  }\n\n  @media "," {\n    width: 11rem;\n    height: 16.1rem;\n  }\n"])),(function(e){return e.posterUrl}),(function(e){return e.theme.mobile})),ge=Object(y.d)(x.b)(f||(f=Object(w.a)(["\n  background-color: ",";\n  border-radius: 3px;\n  padding: 0.7rem 5rem;\n  font-weight: 100;\n  cursor: pointer;\n  color: white;\n\n  &:hover {\n    opacity: 0.7;\n  }\n"])),(function(e){return e.theme.accentColor}));var Oe,pe,xe,ve,we,ye,ke,_e,Se,ze,Ce=function(){var e=Object(g.useRef)(),n=Object(g.useState)([]),t=Object(k.a)(n,2),r=t[0],i=t[1],a=Object(g.useState)(10),c=Object(k.a)(a,2),o=c[0],s=c[1],d=function(){var n=e.current.offsetWidth;s(n)};return Object(g.useEffect)((function(){Object(H.a)(W.a.mark((function e(){var n,t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:n=e.sent,t=n.data.results,i(le(de(t))),d();case 6:case"end":return e.stop()}}),e)})))()}),[]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(L.a,{children:Object(z.jsx)("title",{children:"Home - Homeflix"})}),Object(z.jsxs)(je,{children:[Object(z.jsx)(me,{children:Object(z.jsx)("h1",{children:"\ubcf4\uace0 \uc2f6\uc740 \ucf58\ud150\uce20\ub97c \uc9c0\uae08 \ub9cc\ub098\ubcf4\uc138\uc694!"})}),Object(z.jsx)(me,{children:Object(z.jsx)("h4",{children:"Homeflix\uc5d0\uc11c \ucd5c\uc2e0 \uc778\uae30 TV \ud504\ub85c\uadf8\ub7a8, \uc601\ud654, \ud574\uc678 \uc2dc\ub9ac\uc988\uae4c\uc9c0!"})}),r&&Object(z.jsx)(he,{ref:e,totalWidth:o,children:r.map((function(e,n){var t=e.poster_path;return Object(z.jsx)(fe,{posterUrl:be(t,"w500")},n)}))}),Object(z.jsx)(ge,{to:"/movie",children:"\uc790\uc138\ud788 \ubcf4\uae30"})]})]})},Te=t(14),Me=y.d.div(Oe||(Oe=Object(w.a)(["\n  width: 100%;\n  height: calc(100vh - 64px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Ee=y.d.div(pe||(pe=Object(w.a)(["\n  height: 12rem;\n"]))),Ne=Object(y.e)(xe||(xe=Object(w.a)(["\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n"]))),Ue=Object(y.e)(ve||(ve=Object(w.a)(["\n  from {\n    transform: translate(0, 0);\n  }\n  to {\n    transform: translate(24px, 0);\n  }\n"]))),Re=Object(y.e)(we||(we=Object(w.a)(["\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(0);\n  }\n"]))),Fe=y.d.div(ye||(ye=Object(w.a)(['\n  display: inline-block;\n  position: relative;\n  width: 5rem;\n\n  &::before {\n    content: "LOADING";\n    position: absolute;\n    left: -1.9rem;\n    bottom: -1.2rem;\n    font-size: 1.56rem;\n    letter-spacing: 3px;\n  }\n\n  div {\n    position: absolute;\n    top: 1.833rem;\n    width: 0.722rem;\n    height: 0.722rem;\n    border-radius: 50%;\n    background: #df5458;\n    font-family: impact;\n    font-size: 1.8rem;\n\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n\n    &:nth-child(1) {\n      left: 0.5rem;\n      animation: '," 0.6s infinite;\n    }\n\n    &:nth-child(2) {\n      left: 0.5rem;\n      animation: "," 0.6s infinite;\n    }\n\n    &:nth-child(3) {\n      left: 1.777rem;\n      animation: "," 0.6s infinite;\n    }\n\n    &:nth-child(4) {\n      left: 3.111rem;\n      animation: "," 0.6s infinite;\n    }\n  }\n"])),Ne,Ue,Ue,Re),Ie=function(){return Object(z.jsx)(Me,{children:Object(z.jsx)(Ee,{children:Object(z.jsx)(Fe,{children:Array(4).fill().map((function(e,n){return Object(z.jsx)("div",{},n)}))})})})},Ve=y.d.div(ke||(ke=Object(w.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  height: ",";\n  flex-direction: column;\n  border-radius: 4px;\n  background-image: ","\n    url(",");\n  background-size: cover;\n  background-position: center top;\n\n  & > * {\n    position: absolute;\n  }\n"])),(function(e){return e.similar?"8.5rem":"75vh"}),(function(e){return e.similar?null:"linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),"}),(function(e){return e.bgUrl})),He=y.d.div(_e||(_e=Object(w.a)(["\n  ",";\n\n  background-size: contain;\n  background-repeat: no-repeat;\n  right: 2rem;\n  bottom: 2rem;\n"])),(function(e){return e.logo?Object(y.c)(Se||(Se=Object(w.a)(["\n          background-image: url(",");\n          width: 20rem;\n          height: ",";\n        "])),(function(e){var n=e.logo;return be(n.file_path,"w500")}),(function(e){var n=e.logo,t=n.height,r=n.width;return"".concat(t/r*20.83,"rem")})):Object(y.c)(ze||(ze=Object(w.a)(["\n          font-size: 3rem;\n          font-weight: bolder;\n        "])))}));function Pe(e){var n=e.bgUrl,t=e.logos,r=e.title,i=e.similar,a=void 0!==i&&i,c=e.children;return Object(z.jsxs)(Ve,{similar:a,bgUrl:be(n),children:[!a&&Object(z.jsx)(He,{logo:t[t.length-1],children:t.length>0?"":r}),c]})}var We,Le,De,Ge,Ae,qe=t(116),Be=t(117),Je=Object(y.d)(qe.a.div)(We||(We=Object(w.a)(["\n  background-color: #181818;\n  display: block;\n  position: absolute;\n  bottom: -5.6rem;\n  width: 100%;\n  height: 6rem;\n  padding: 1rem;\n  opacity: 0;\n  border-radius: 0 0 4px 4px;\n"]))),Xe=y.d.div(Le||(Le=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 0.05rem;\n"]))),Ke=y.d.div(De||(De=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2rem;\n  min-height: 2rem;\n  margin-left: auto;\n  padding-top: 0.1rem;\n  background-color: #303030;\n  border-radius: 99px;\n  border: 1.5px solid #595959;\n  font-size: 1.1rem;\n  cursor: pointer;\n\n  &:hover {\n    border: 1.5px solid white;\n  }\n"]))),Ye=y.d.div(Ge||(Ge=Object(w.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 0.75rem;\n  font-weight: 100;\n  margin-top: 0.2rem;\n"]))),Qe=y.d.div(Ae||(Ae=Object(w.a)(['\n  &:not(:last-child) {\n    margin-right: 0.2rem;\n\n    &::after {\n      content: "\xb7";\n      margin-left: 0.2rem;\n      font-weight: 800;\n    }\n  }\n']))),Ze={hover:{opacity:1,zIndex:5,transition:{delay:.5,duaration:.1,type:"tween"}}};var $e,en,nn,tn,rn,an,cn,on,sn,dn,ln,bn,un,jn,mn,hn,fn,gn,On,pn,xn,vn=function(e){var n=e.title,t=e.genres;return Object(z.jsxs)(Je,{variants:Ze,children:[Object(z.jsxs)(Xe,{children:[n,Object(z.jsx)(Ke,{children:Object(z.jsx)(_.a,{icon:S.a,className:"fa-angle-down"})})]}),Object(z.jsx)(Ye,{children:t&&t.map((function(e,n){return Object(z.jsx)(Qe,{children:e},n)}))})]})},wn=Object(y.d)(qe.a.div)($e||($e=Object(w.a)(["\n  height: 8.5rem;\n  display: flex;\n  position: relative;\n  :not(:last-child) {\n    margin-bottom: 5rem;\n  }\n"]))),yn=y.d.span(en||(en=Object(w.a)(["\n  font-weight: 600;\n  font-size: 1.12rem;\n"]))),kn=Object(y.d)(qe.a.div)(nn||(nn=Object(w.a)(["\n  top: 1.8rem;\n  width: 100%;\n  position: absolute;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 0.625rem;\n"]))),_n=y.d.div(tn||(tn=Object(w.a)(["\n  position: absolute;\n  top: 50%;\n  cursor: pointer;\n  font-size: 3rem;\n  font-weight: 900;\n  z-index: 3;\n\n  "," {\n    right: -1rem;\n  }\n\n  "," {\n    left: -1rem;\n  }\n\n  &.hidden {\n    opacity: 0;\n    cursor: default;\n  }\n\n  &:hover:not(.hidden) {\n    opacity: 0.6;\n    font-size: 4rem;\n    margin: -0.3rem -0.24rem 0;\n  }\n"])),(function(e){return"left"===e.position}),(function(e){return"right"===e.position})),Sn=Object(y.d)(qe.a.div)(rn||(rn=Object(w.a)(["\n  position: relative;\n  background-image: url(",");\n  height: 8.5rem;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  cursor: pointer;\n\n  ","\n\n  &:first-child {\n    transform-origin: center left;\n  }\n\n  &:last-child {\n    transform-origin: center right;\n  }\n"])),(function(e){return e.bgUrl}),(function(e){return e.isPopular&&Object(y.c)(an||(an=Object(w.a)(['\n      &::before {\n        content: "','";\n        font-size: 9rem;\n        font-weight: 900;\n        color: transparent;\n        -webkit-text-stroke: 3px #f9f9f9;\n        display: flex;\n        justify-content: end;\n        line-height: normal;\n        position: absolute;\n      }\n    '])),(function(e){return e.rank}))})),zn={init:function(e){return{x:e?-window.outerWidth-10:window.outerWidth+10}},visible:{x:0},exit:function(e){return{x:e?window.outerWidth+10:-window.outerWidth-10}}},Cn={normal:{scale:1},hover:{scale:1.3,y:-20,zIndex:5,transition:{delay:.5,duaration:.1,type:"tween"}}},Tn=function(e){var n=e.title,t=e.keyword,r=e.cards,i=e.isMovie,a=Math.ceil(r.length/5)-1,c={left:"left",right:"right",both:"both",none:"none"},o=Object(v.g)(),s=Object(v.j)(),d=Object(v.j)("/movie"),l=Object(v.j)("/trending"),b=Object(g.useState)(0),u=Object(k.a)(b,2),j=u[0],m=u[1],h=Object(g.useState)(!1),f=Object(k.a)(h,2),O=f[0],p=f[1],x=Object(g.useState)(!1),w=Object(k.a)(x,2),y=w[0],C=w[1],T=Object(g.useState)(c.none),M=Object(k.a)(T,2),E=M[0],N=M[1];Object(g.useEffect)((function(){r.length>5&&N(c.left)}),[r.length,c.left]);var U=function(e){O||(R(),m((function(n){return n+e})),N(j+e===0?c.left:j+e===a?c.right:c.both))},R=function(){return p((function(e){return!e}))};return Object(z.jsxs)(wn,{children:[Object(z.jsx)(yn,{children:n}),Object(z.jsx)(_n,{position:"left",onClick:function(){r&&j>0&&(C(!0),U(-1))},className:[c.left,c.none].includes(E)?"hidden":"",children:Object(z.jsx)(_.a,{icon:S.b,className:"fa-chevron-left"})}),Object(z.jsx)(Be.a,{custom:y,initial:!1,onExitComplete:R,children:Object(z.jsx)(kn,{custom:y,variants:zn,initial:"init",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:r.slice(5*j,5*j+5).map((function(e){return Object(z.jsx)(Sn,{layoutId:"".concat(t,"-").concat(String(e.id)),bgUrl:be(e.backdrop_path,"w300"),variants:Cn,whileHover:"hover",initial:"normal",transition:{type:"tween"},onClick:function(){return function(e,n){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"").searchTerm;o.push({pathname:s.path+"/".concat(n),state:{keyword:t,isMovie:e,searchTerm:r}})}(i||(l?"movie"===e.media_type:null!==d),e.id,o.location.state)},children:Object(z.jsx)(vn,{title:i||(l?"movie"===e.media_type:null!==d)?e.original_title:e.original_name,genres:e.genres})},e.id)}))},j)}),Object(z.jsx)(_n,{position:"right",onClick:function(){r&&j<a&&(C(!1),U(1))},className:[c.right,c.none].includes(E)?"hidden":"",children:Object(z.jsx)(_.a,{icon:S.c,className:"fa-chevron-right"})})]})},Mn=t(50),En=t(118),Nn=y.d.div(cn||(cn=Object(w.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]))),Un=y.d.span(on||(on=Object(w.a)(["\n  color: ",";\n"])),(function(e){return"404"===e.type?"#95a5a6":"#e74c3c"})),Rn=function(e){var n=e.type,t=e.text;return Object(z.jsx)(Nn,{children:Object(z.jsx)(Un,{type:n,children:t})})},Fn=Object(y.d)(qe.a.div)(sn||(sn=Object(w.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n  opacity: 0;\n  z-index: 10;\n"]))),In=Object(y.d)(qe.a.div)(dn||(dn=Object(w.a)(["\n  position: absolute;\n  width: 50rem;\n  height: calc(100vh - 25px);\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  border-radius: 4px;\n  background-color: #181818;\n  letter-spacing: 0.1rem;\n  z-index: 99;\n  scroll-behavior: smooth;\n  overscroll-behavior: contain;\n  overflow: auto;\n"]))),Vn=y.d.div(ln||(ln=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 1rem;\n  right: 1rem;\n  min-width: 2rem;\n  min-height: 2rem;\n  padding-left: 0.065rem;\n  background-color: #303030;\n  border-radius: 99px;\n  border: 1.5px solid #595959;\n  font-size: 1.1rem;\n  cursor: pointer;\n\n  &:hover {\n    color: rgba(255, 255, 255, 0.5);\n  }\n"]))),Hn=y.d.div(bn||(bn=Object(w.a)(["\n  background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n  padding: 1rem 2rem;\n  font-weight: 100;\n"]))),Pn=y.d.div(un||(un=Object(w.a)(['\n  display: flex;\n  font-size: 0.9rem;\n\n  & div:nth-child(2) {\n    margin-left: 0.3rem;\n\n    &::before {\n      content: "~";\n      margin-right: 0.3rem;\n    }\n  }\n']))),Wn=y.d.div(jn||(jn=Object(w.a)(["\n  margin-top: 0.5rem;\n  ","\n"])),(function(e){return e.similar?"\n    font-size: 0.9rem;\n    font-weight: inherit;\n  ":"\n    font-size: 3rem;\n    font-weight: 800;\n  "})),Ln=y.d.div(mn||(mn=Object(w.a)(["\n  display: flex;\n  margin-top: 1.3rem;\n  flex-wrap: wrap;\n  font-weight: 100;\n"]))),Dn=y.d.div(hn||(hn=Object(w.a)(['\n  &:not(:last-child) {\n    margin-right: 0.2rem;\n\n    &::after {\n      content: "\xb7";\n      margin-left: 0.2rem;\n      font-weight: 800;\n    }\n  }\n']))),Gn=y.d.div(fn||(fn=Object(w.a)(["\n  margin-top: 1.2rem;\n  font-weight: 400;\n  line-height: 1.2;\n  ",'\n\n  &::before {\n    content: "','";\n    ',";\n  }\n\n  &.similars {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: auto;\n  }\n"])),(function(e){return e.similar&&"\n    font-size: 0.7rem;\n    margin-top: 0;\n    color: #f5f5f5;\n\n    &::before {\n      background-color: black;\n      border: 0 !important;\n      color: white;\n    }"}),(function(e){return e.before}),"\n  display: flex;\n  width: fit-content;\n  align-items: center;\n  height: 2em;\n  margin-left: -0.2rem;\n  padding: 0.1rem 0.5rem;\n  border: 1px solid #595959;\n  border-radius: 9px;\n  font-size: 0.7em;\n  font-weight: 300;\n  margin-bottom: 0.8rem;\n"),An=y.d.div(gn||(gn=Object(w.a)(["\n  border: 1px solid #585858;\n  border-radius: 10px;\n  display: flex;\n  position: relative;\n  padding: 1rem;\n  cursor: pointer;\n\n  &:not(:last-child) {\n    margin-bottom: 0.5rem;\n  }\n"]))),qn=y.d.div(On||(On=Object(w.a)(["\n  min-width: 35%;\n  overflow: hidden;\n  margin-right: 0.8rem;\n\n  & > div {\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: cover;\n    border: none;\n    height: 11rem;\n    margin: -1.5rem 0;\n  }\n"])),(function(e){return e.url})),Bn=y.d.p(pn||(pn=Object(w.a)(['\n  &:last-child {\n    position: absolute;\n    bottom: 0.4rem;\n    right: 0.6rem;\n    font-weight: 200;\n    font-size: 0.7rem;\n    color: #a9a9a9;\n\n    &::before {\n      content: "published at: ";\n    }\n  }\n']))),Jn=y.d.div(xn||(xn=Object(w.a)(["\n  position: relative;\n  background-color: #2f2f2f;\n  padding-bottom: 1rem;\n  border-radius: 10px;\n  cursor: pointer;\n\n  &:first-child {\n    grid-column: 1 / 2;\n  }\n\n  & :not(:first-child) {\n    padding: 0.5rem 1rem;\n  }\n"])));var Xn=function(){var e=Object(v.i)(),n=Object(v.j)(),t=Object(v.g)(),r=e.id,i="",a=!1,c=Object(En.a)().scrollY,o=Object(g.useRef)(),s=Object(g.useState)(!0),d=Object(k.a)(s,2),l=d[0],b=d[1],u=Object(g.useState)(""),j=Object(k.a)(u,2),m=j[0],h=j[1],f=Object(g.useState)({}),O=Object(k.a)(f,2),p=O[0],x=O[1],w=Object(g.useState)([]),y=Object(k.a)(w,2),C=y[0],T=y[1],M=Object(g.useState)([]),E=Object(k.a)(M,2),N=E[0],U=E[1],R=Object(g.useState)(""),F=Object(k.a)(R,2),I=F[0],V=F[1];if(t.location.state){var P=t.location.state;i=P.keyword,a=P.isMovie}else a=t.location.pathname.includes("movie");Object(g.useEffect)((function(){var e=null,n=null,t=null;return Object(H.a)(W.a.mark((function i(){var c,o,s,d,l,u;return W.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(i.prev=0,!isNaN(+r)){i.next=3;break}return i.abrupt("return",null);case 3:if(a){i.next=18;break}return i.next=6,X(+r);case 6:return c=i.sent,e=c.data,i.next=10,K(+r);case 10:return o=i.sent,n=o.data.results,i.next=14,Y(+r);case 14:s=i.sent,t=s.data.results,i.next=30;break;case 18:return i.next=20,te(+r);case 20:return d=i.sent,e=d.data,i.next=24,re(+r);case 24:return l=i.sent,n=l.data.results,i.next=28,ie(+r);case 28:u=i.sent,t=u.data.results;case 30:x(e),V(a?e.original_title:e.original_name),T(n.slice(0,5)),U(de(t).slice(0,6)),b(!(e&&n&&t)),i.next=40;break;case 37:i.prev=37,i.t0=i.catch(0),h("[".concat(r,"] \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."));case 40:case"end":return i.stop()}}),i,null,[[0,37]])})))(),function(){V(""),x({}),T([]),U([]),b(!0)}}),[a,r]);var L=function(){t.goBack()};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Fn,{onClick:L,exit:{opacity:0},animate:{opacity:1}}),Object(z.jsxs)(In,{layoutId:"".concat(i,"-").concat(r),style:{top:c.get()+25},ref:o,children:[l?Object(z.jsx)(Ie,{}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Pe,{bgUrl:p.backdrop_path,logos:p.images.logos,title:I,children:Object(z.jsx)(Vn,{onClick:L,children:Object(z.jsx)(_.a,{icon:S.f,className:"fa-times"})})}),Object(z.jsxs)(Hn,{children:[Object(z.jsx)(Pn,{children:a?Object(z.jsx)("div",{children:p.release_date}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("div",{children:p.first_air_date}),Object(z.jsx)("div",{children:p.last_air_date})]})}),Object(z.jsx)(Wn,{children:I}),Object(z.jsx)(Ln,{children:p.genres.map((function(e,n){e._;var t=e.name;return Object(z.jsx)(Dn,{children:t},n)}))}),Object(z.jsx)(Gn,{before:"Description",children:p.overview.length>0?p.overview:"-"}),Object(z.jsx)(Gn,{before:"Trailers & More",children:C.length>0?C.map((function(e){var n=e.key,t=e.name,r=e.published_at;return Object(z.jsxs)(An,{title:t,onClick:function(){return window.open(ue("video",n))},children:[Object(z.jsx)(qn,{url:ue("thumnail",n),children:Object(z.jsx)("div",{})}),[t,r.split(" ")[0]].map((function(e,n){return Object(z.jsx)(Bn,{children:e},n)}))]},n)})):"-"}),Object(z.jsx)(Gn,{className:"similars",before:"More Like This",children:N.length>0?N.map((function(e,r){return Object(z.jsxs)(Jn,{title:a?e.original_title:e.original_name,onClick:function(){return function(e){o.current.scrollTop=0,t.replace({pathname:n.path.replace(/:id/,e),state:t.location.state})}(e.id)},children:[Object(z.jsx)(Pe,{similar:!0,bgUrl:e.backdrop_path}),Object(z.jsx)(Wn,{similar:!0,children:a?e.original_title:e.original_name}),Object(z.jsx)(Gn,{similar:!0,before:"Description",children:e.overview.length>0?e.overview:"-"})]},r)})):"-"})]})]}),m&&Object(z.jsx)(Rn,{type:"error",text:m})]})]})};var Kn,Yn,Qn,Zn,$n=function(){var e=Object(v.j)(["/tv/:id","/movie/:id","/trending/:id","/search/:id"]);return e?Object(Mn.a)(document.body):Object(Mn.b)(document.body),Object(z.jsx)(Be.a,{children:e&&Object(z.jsx)(Xn,{})})},et=y.d.div(Kn||(Kn=Object(w.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n"]))),nt=y.d.div(Yn||(Yn=Object(w.a)(["\n  position: absolute;\n  left: 3.5rem;\n  bottom: 13%;\n  font-weight: 200;\n  width: 18rem;\n  line-height: 1.2;\n"]))),tt=y.d.div(Qn||(Qn=Object(w.a)(['\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 9.5rem;\n  height: 2.5rem;\n  border-radius: 6px;\n  background-color: rgba(255, 255, 255, 0.6);\n  font-size: 0.1rem 0.2rem 0;\n  cursor: pointer;\n\n  &::after {\n    content: "\uc0c1\uc138 \uc815\ubcf4";\n    font-weight: 600;\n    padding: 0 0.2rem;\n  }\n']))),rt=y.d.div(Zn||(Zn=Object(w.a)(["\n  padding: 0 1.2rem;\n"])));var it,at,ct,ot,st=function(){var e=Object(g.useState)({}),n=Object(k.a)(e,2),t=n[0],r=n[1],i=Object(g.useState)(),a=Object(k.a)(i,2),c=a[0],o=a[1],s=Object(g.useState)(!0),d=Object(k.a)(s,2),l=d[0],b=d[1],u=Object(g.useState)(""),j=Object(k.a)(u,2),m=j[0],h=j[1],f=Object(g.useState)([]),O=Object(k.a)(f,2),p=O[0],x=O[1],w=Object(g.useState)([]),y=Object(k.a)(w,2),C=y[0],T=y[1],M=Object(g.useState)([]),E=Object(k.a)(M,2),N=E[0],U=E[1],R=Object(v.g)();Object(g.useEffect)((function(){o(Math.floor(5*Math.random()))}),[]),Object(g.useEffect)((function(){Object(H.a)(W.a.mark((function e(){var n,t,i,a,o,s,d,l,u,j,m;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J();case 3:return n=e.sent,t=n.data.genres,e.next=7,q();case 7:return i=e.sent,a=i.data.results,e.next=11,A();case 11:return o=e.sent,s=o.data.results,e.next=15,B();case 15:return d=e.sent,l=d.data.results,e.next=19,X(+a[c].id);case 19:u=e.sent,j=u.data,m=function(e){return e.map((function(e){var n=e.genre_ids;return Object(Te.a)(Object(Te.a)({},e),{},{genres:n.map((function(e){return t.find((function(n){var t=n.id;n._;return t===e})).name}))})}))},r(j),x(m(le(de(a)))),T(m(de(s))),U(m(de(l))),b(!(j&&a&&s&&l)),h(""),e.next=34;break;case 30:e.prev=30,e.t0=e.catch(0),console.log(e.t0),h("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4! TV \ud504\ub85c\uadf8\ub7a8 \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");case 34:case"end":return e.stop()}}),e,null,[[0,30]])})))()}),[c]);var F=function(e){var n=e.overview;return n.length>100?n.indexOf(".",100):100};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(L.a,{children:Object(z.jsx)("title",{children:"TV - Homeflix"})}),l?Object(z.jsx)(Ie,{}):Object(z.jsxs)(et,{children:[t&&Object(z.jsx)(Pe,{bgUrl:t.backdrop_path,logos:t.images.logos,title:t.original_name,children:Object(z.jsxs)(nt,{children:[Object(z.jsx)(tt,{onClick:function(){return e=t.id,void R.push({pathname:"/tv/".concat(e),state:{isMovie:!1}});var e},children:Object(z.jsx)(_.a,{icon:S.d,className:"fa-info-circle"})}),t.overview.length>F(t)?t.overview.slice(0,F(t))+"...":t.overview]})}),Object(z.jsxs)(rt,{children:[p&&p.length>0&&Object(z.jsx)(Tn,{title:"\uc624\ub298 TOP 10 TV \ud504\ub85c\uadf8\ub7a8",keyword:"popular",cards:p,isPopular:!0}),C&&C.length>0&&Object(z.jsx)(Tn,{title:"\uafb8\uc900\ud788 \uc778\uae30 \ub9ce\uc740 TV \ud504\ub85c\uadf8\ub7a8",keyword:"topRated",cards:C}),N&&N.length>0&&Object(z.jsx)(Tn,{title:"\ud604\uc7ac \ubc29\uc601 \uc911\uc778 TV \ud504\ub85c\uadf8\ub7a8",keyword:"airingToday",cards:N}),Object(z.jsx)($n,{}),m&&Object(z.jsx)(Rn,{type:"error",text:m})]})]})]})},dt=y.d.div(it||(it=Object(w.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n"]))),lt=y.d.div(at||(at=Object(w.a)(["\n  position: absolute;\n  left: 3.5rem;\n  bottom: 15%;\n  font-weight: 200;\n  width: 18rem;\n  line-height: 1.2;\n"]))),bt=y.d.div(ct||(ct=Object(w.a)(['\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 9.5rem;\n  height: 2.5rem;\n  border-radius: 6px;\n  background-color: rgba(255, 255, 255, 0.6);\n  font-size: 1.2rem;\n  cursor: pointer;\n\n  &::after {\n    content: "\uc0c1\uc138 \uc815\ubcf4";\n    font-weight: 600;\n    padding: 0.1rem 0.2rem 0;\n  }\n']))),ut=y.d.div(ot||(ot=Object(w.a)(["\n  padding: 0 1.2rem;\n"])));var jt,mt,ht,ft,gt,Ot,pt=function(){var e=Object(g.useState)({}),n=Object(k.a)(e,2),t=n[0],r=n[1],i=Object(g.useState)(),a=Object(k.a)(i,2),c=a[0],o=a[1],s=Object(g.useState)([]),d=Object(k.a)(s,2),l=d[0],b=d[1],u=Object(g.useState)([]),j=Object(k.a)(u,2),m=j[0],h=j[1],f=Object(g.useState)([]),O=Object(k.a)(f,2),p=O[0],x=O[1],w=Object(g.useState)(!0),y=Object(k.a)(w,2),C=y[0],T=y[1],M=Object(g.useState)(""),E=Object(k.a)(M,2),N=E[0],U=E[1],R=Object(v.g)(),F=function(e){var n=e.overview;return n.length>100?n.indexOf(".",100):100};return Object(g.useEffect)((function(){o(Math.floor(5*Math.random()))}),[]),Object(g.useEffect)((function(){Object(H.a)(W.a.mark((function e(){var n,t,i,a,o,s,d,l,u,j,m;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne();case 3:return n=e.sent,t=n.data.genres,e.next=7,ee();case 7:return i=e.sent,a=i.data.results,e.next=11,Z();case 11:return o=e.sent,s=o.data.results,e.next=15,$();case 15:return d=e.sent,l=d.data.results,e.next=19,te(+a[c].id);case 19:u=e.sent,j=u.data,m=function(e){return e.map((function(e){var n=e.genre_ids;return Object(Te.a)(Object(Te.a)({},e),{},{genres:n.map((function(e){return t.find((function(n){var t=n.id;n._;return t===e})).name}))})}))},r(j),b(m(le(de(a)))),h(m(de(s))),x(m(de(l))),T(!(j&&a&&s&&l)),U(""),e.next=34;break;case 30:e.prev=30,e.t0=e.catch(0),console.log(e.t0),U("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4! \uc601\ud654 \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");case 34:case"end":return e.stop()}}),e,null,[[0,30]])})))()}),[c]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(L.a,{children:Object(z.jsx)("title",{children:"Movie - Homeflix"})}),C?Object(z.jsx)(Ie,{}):Object(z.jsxs)(dt,{children:[t&&Object(z.jsx)(Pe,{bgUrl:t.backdrop_path,logos:t.images.logos,title:t.original_title,children:Object(z.jsxs)(lt,{children:[Object(z.jsx)(bt,{onClick:function(){return e=t.id,void R.push({pathname:"/movie/".concat(e),state:{isMovie:!0}});var e},children:Object(z.jsx)(_.a,{icon:S.d,className:"fa-info-circle"})}),t.overview.length>F(t)?t.overview.slice(0,F(t))+"...":t.overview]})}),Object(z.jsxs)(ut,{children:[l&&l.length>0&&Object(z.jsx)(Tn,{title:"\uc624\ub298 TOP 10 \uc601\ud654",keyword:"popular",cards:l,isPopular:!0}),m&&m.length>0&&Object(z.jsx)(Tn,{title:"\uc9c0\uae08 \uc0c1\uc601 \uc911\uc778 \uc601\ud654",keyword:"nowPlaying",cards:m}),p&&p.length>0&&Object(z.jsx)(Tn,{title:"\ucd5c\uadfc\uc5d0 \uac1c\ubd09\ud55c \uc601\ud654",keyword:"upcoming",cards:p}),Object(z.jsx)($n,{}),N&&Object(z.jsx)(Rn,{type:"error",text:N})]})]})]})},xt=y.d.div(jt||(jt=Object(w.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n"]))),vt=y.d.div(mt||(mt=Object(w.a)(["\n  position: absolute;\n  left: 3.5rem;\n  bottom: 13%;\n  font-weight: 200;\n  width: 18rem;\n  line-height: 1.2;\n"]))),wt=y.d.div(ht||(ht=Object(w.a)(['\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 9.5rem;\n  height: 2.5rem;\n  border-radius: 6px;\n  background-color: rgba(255, 255, 255, 0.6);\n  font-size: 0.1rem 0.2rem 0;\n  cursor: pointer;\n\n  &::after {\n    content: "\uc0c1\uc138 \uc815\ubcf4";\n    font-weight: 600;\n    padding: 0 0.2rem;\n  }\n']))),yt=y.d.div(ft||(ft=Object(w.a)(["\n  padding: 0 1.2rem;\n"])));function kt(){var e=Object(g.useState)({}),n=Object(k.a)(e,2),t=n[0],r=n[1],i=Object(g.useState)(),a=Object(k.a)(i,2),c=a[0],o=a[1],s=Object(v.g)(),d=Object(g.useState)(!0),l=Object(k.a)(d,2),b=l[0],u=l[1],j=Object(g.useState)(""),m=Object(k.a)(j,2),h=m[0],f=m[1],O=Object(g.useState)([]),p=Object(k.a)(O,2),x=p[0],w=p[1],y=Object(g.useState)([]),C=Object(k.a)(y,2),T=C[0],M=C[1],E=Object(g.useState)([]),N=Object(k.a)(E,2),U=N[0],R=N[1],F=function(e){return"movie"===e.media_type};Object(g.useEffect)((function(){o(Math.floor(10*Math.random()))}),[]),Object(g.useEffect)((function(){var e=null;Object(H.a)(W.a.mark((function n(){var t,i,a,o,s,d,l,b,j,m,h,g,O;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,J();case 3:return t=n.sent,i=t.data.genres,n.next=7,ne();case 7:return a=n.sent,o=a.data.genres,n.next=11,ce();case 11:return s=n.sent,d=s.data.results,n.next=15,oe();case 15:return l=n.sent,b=l.data.results,n.next=19,se();case 19:if(j=n.sent,m=j.data.results,F(d[c])){n.next=29;break}return n.next=24,X(+d[c].id);case 24:h=n.sent,e=h.data,e=Object(Te.a)(Object(Te.a)({},e),{media_type:"tv"}),n.next=34;break;case 29:return n.next=31,te(+d[c].id);case 31:g=n.sent,e=g.data,e=Object(Te.a)(Object(Te.a)({},e),{media_type:"movie"});case 34:O=function(e){return e.map((function(e){var n=e.genre_ids;return Object(Te.a)(Object(Te.a)({},e),{},{genres:n.map((function(n){var t=F(e)?o.find((function(e){var t=e.id;e._;return t===n})):i.find((function(e){var t=e.id;e._;return t===n}));return t?t.name:""})).filter((function(e){return""!==e}))})}))},r(e),w(O(le(de(d)))),M(O(de(b))),R(O(de(m))),u(!(e&&d&&b&&m)),f(""),n.next=46;break;case 43:n.prev=43,n.t0=n.catch(0),f("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4! \ub300\uc138 \ucf58\ud150\uce20 \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");case 46:case"end":return n.stop()}}),n,null,[[0,43]])})))()}),[c]);var I=function(e){var n=e.overview;return n.length>100?n.indexOf(".",100):100};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(L.a,{children:Object(z.jsx)("title",{children:"Trending - Homeflix"})}),b?Object(z.jsx)(Ie,{}):Object(z.jsxs)(xt,{children:[t&&Object(z.jsx)(Pe,{bgUrl:t.backdrop_path,logos:t.images.logos,title:F(t)?t.original_title:t.original_name,children:Object(z.jsxs)(vt,{children:[Object(z.jsx)(wt,{onClick:function(){return function(e,n){s.push({pathname:"/trending/".concat(e),state:{isMovie:n}})}(t.id,F(t))},children:Object(z.jsx)(_.a,{icon:S.d,className:"fa-info-circle"})}),t.overview.length>I(t)?t.overview.slice(0,I(t))+"...":t.overview]})}),Object(z.jsxs)(yt,{children:[x&&x.length>0&&Object(z.jsx)(Tn,{title:"\uc774\ubc88 \uc8fc TOP 10 \ud56b\ud55c \ucf58\ud150\uce20",keyword:"trendyAll",cards:x,isPopular:!0}),T&&T.length>0&&Object(z.jsx)(Tn,{isMovie:!1,title:"\uc774\ubc88 \uc8fc \ud56b\ud55c TV \ud504\ub85c\uadf8\ub7a8",keyword:"trendyTvShows",cards:T}),U&&U.length>0&&Object(z.jsx)(Tn,{isMovie:!0,title:"\uc774\ubc88 \uc8fc \ud56b\ud55c \uc601\ud654",keyword:"trendyMovies",cards:U}),Object(z.jsx)($n,{}),h&&Object(z.jsx)(Rn,{type:"error",text:h})]})]})]})}var _t=y.d.div(gt||(gt=Object(w.a)(["\n  padding: 1.2rem;\n"]))),St=y.d.div(Ot||(Ot=Object(w.a)(['\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin: 1rem 0;\n  font-weight: 100;\n  .term {\n    display: flex;\n    align-items: center;\n    width: fit-content;\n    padding: 0.3rem 0.6rem 0.1rem;\n    margin-bottom: 0.2rem;\n    background-color: #e42414;\n    border-radius: 12px;\n\n    &::before {\n      content: "#";\n    }\n  }\n'])));var zt=function(){var e=Object(v.h)().state.searchTerm,n=Object(g.useState)(""),t=Object(k.a)(n,2),r=t[0],i=t[1],a=Object(g.useState)(!0),c=Object(k.a)(a,2),o=c[0],s=c[1],d=Object(g.useState)([]),l=Object(k.a)(d,2),b=l[0],u=l[1],j=Object(g.useState)([]),m=Object(k.a)(j,2),h=m[0],f=m[1];return Object(g.useEffect)((function(){return Object(H.a)(W.a.mark((function n(){var t,r,a,c,o,d,l,b,j;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,J();case 3:return t=n.sent,r=t.data.genres,n.next=7,Q(e);case 7:return a=n.sent,c=a.data.results,n.next=11,ne();case 11:return o=n.sent,d=o.data.genres,n.next=15,ae(e);case 15:l=n.sent,b=l.data.results,u((j=function(e,n){return e.map((function(e){var t=e.genre_ids;return Object(Te.a)(Object(Te.a)({},e),{},{genres:t.map((function(e){var t=n?d.find((function(n){var t=n.id;n._;return t===e})):r.find((function(n){var t=n.id;n._;return t===e}));return t?t.name:""})).filter((function(e){return""!==e}))})}))})(de(c),!1)),f(j(de(b),!0)),s(!c||!b),i(""),n.next=27;break;case 24:n.prev=24,n.t0=n.catch(0),i("\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4! \uc785\ub825\ud55c \uac80\uc0c9\uc5b4\uc5d0 \ub300\ud55c \uacb0\uacfc\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");case 27:case"end":return n.stop()}}),n,null,[[0,24]])})))(),function(){s(!0),u([]),f([])}}),[e]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(L.a,{children:"Homeflix"}),o?Object(z.jsx)(Ie,{}):Object(z.jsxs)(_t,{children:[Object(z.jsxs)(St,{children:["\uac80\uc0c9\uc5b4 \xa0",Object(z.jsx)("p",{className:"term",children:e}),"\xa0\uc5d0 \ub300\ud55c \uac80\uc0c9 \uacb0\uacfc\uc785\ub2c8\ub2e4."]}),o?Object(z.jsx)(Ie,{}):Object(z.jsxs)(z.Fragment,{children:[b&&b.length>0&&Object(z.jsx)(Tn,{isMovie:!1,title:"TV Resultes",keyword:"tvResults",cards:b}),h&&h.length>0&&Object(z.jsx)(Tn,{isMovie:!0,title:"Movie Resultes",keyword:"movieResults",cards:h}),Object(z.jsx)($n,{}),r&&Object(z.jsx)(Rn,{type:"error",text:r}),b&&h&&0===b.length&&0===h.length&&Object(z.jsx)(Rn,{type:"404",text:"Nothing Found"})]}),Object(z.jsx)($n,{})]})]})};function Ct(){return Object(z.jsxs)(x.a,{basename:"/homeflix",children:[Object(z.jsx)(V,{}),Object(z.jsxs)(v.d,{children:[Object(z.jsx)(v.b,{exact:!0,path:"/",component:Ce}),Object(z.jsx)(v.b,{exact:!0,path:["/tv","/tv/:id"],component:st}),Object(z.jsx)(v.b,{exact:!0,path:["/movie","/movie/:id"],component:pt}),Object(z.jsx)(v.b,{exact:!0,path:["/trending","/trending/:id"],component:kt}),Object(z.jsx)(v.b,{exact:!0,path:["/search","/search/:id"],component:zt}),Object(z.jsx)(v.a,{from:"*",to:"/"})]})]})}var Tt,Mt=t(71),Et=Object(y.b)(Tt||(Tt=Object(w.a)(["\n    ",";\n    * {\n        box-sizing: border-box;\n    }\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n    body {\n        font-family: sans-serif;\n        font-size: 16px;\n        background-color: black;\n        color: white;\n        padding-top: 60px;\n        word-break: keep-all;\n        height: 100%;\n    }\n    h1 {\n        font-size: 1.7rem;\n        font-weight: bolder;\n        letter-spacing: 0.1rem;\n    }\n\n    @media "," {\n        h1 {\n            font-size: 1.1rem;\n        }\n        h4 {\n            font-size: 0.8rem;\n        }\n    }\n"])),Mt.a,(function(e){return e.theme.mobile})),Nt="768px",Ut="1024px",Rt={accentColor:"rgb(228, 36, 20)",darkerGreyColor:"rgb(24,24,24)",darkGreyColor:"rgb(48,48,48)",lightGreyColor:"rgb(89,89,89)",mobile:"(max-width: ".concat(Nt,")"),tablet:"(min-width: ".concat(Nt,") and (max-width: ").concat(Ut-1,")")};var Ft=function(){return Object(z.jsxs)(y.a,{theme:Rt,children:[Object(z.jsx)(Ct,{}),Object(z.jsx)(Et,{})]})};p.a.render(Object(z.jsx)(Ft,{}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.b9f7c456.chunk.js.map