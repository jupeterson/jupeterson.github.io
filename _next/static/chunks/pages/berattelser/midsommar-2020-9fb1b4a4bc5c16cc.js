(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{4393:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/berattelser/midsommar-2020",function(){return s(6234)}])},3995:function(e,a,s){"use strict";s.d(a,{A:function(){return t}});var r=s(5893);s(7294);let t=e=>{let{children:a,extraMargins:s=!1,noBottomPadding:t=!1}=e;return(0,r.jsx)("div",{className:"",children:(0,r.jsx)("p",{className:"padding-top-500 ".concat(t?"":"padding-bottom-500"," ").concat(s?"padding-top-900":""),children:a})})}},7530:function(e,a,s){"use strict";var r=s(5893),t=s(7294),i=s(1492),n=s(9882),m=s(7445);a.Z=e=>{let{imagePath:a,title:s,subTitle:l,startUnderMenu:d=!0,date:o}=e,[c,g]=(0,t.useState)(!1),{imagesLoading:u,numberImagesLoaded:j,totalNumberOfImages:h}=(0,n.g)();return(0,t.useEffect)(()=>{(0,m.qQ)(document,a,()=>{g(!0)})},[]),(0,r.jsxs)("div",{className:"cover-image-wrapper ".concat(d?"top-menu-clearance":""),id:"cover-image",children:[c&&(0,r.jsx)("div",{className:"cover-image",style:{backgroundImage:"url(".concat(a,")")}}),(0,r.jsxs)("div",{className:"cover-title-wrapper",children:[(0,r.jsxs)("div",{className:"image-loading-info ".concat(u?null:"fadeOut"),children:[(0,r.jsx)(i.$,{size:i.E.Small})," ",h>0?(0,r.jsxs)("span",{style:{marginLeft:"1rem"},children:["Laddat ",j," av ",h," bilder"]}):null]}),!u&&(0,r.jsxs)("div",{className:"cover-title-text-fade",children:[(0,r.jsx)("h1",{className:"cover-text-title",children:s}),(0,r.jsx)("p",{className:"cover-text-subtitle",children:l}),(0,r.jsx)("p",{className:"cover-text-date",children:o})]})]})]})}},308:function(e,a,s){"use strict";s.d(a,{X:function(){return t}});var r=s(5893);s(7294);let t=e=>{let{text:a,main:s=!1}=e;return(0,r.jsx)("h1",{className:"".concat(s?"text-5xl":"text-3xl"," text-gray-600 font-light mb-8 font-mont"),children:a})}},9564:function(e,a,s){"use strict";s.d(a,{j:function(){return m}});var r=s(5893),t=s(7294);let i=(e,a)=>{let[s,r]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let s=new IntersectionObserver(e=>{let[a]=e;r(a.isIntersecting)},{rootMargin:a});return e.current&&s.observe(e.current),()=>{e.current&&s.unobserve(e.current)}},[]),s};var n=s(1492);let m=e=>{let{imagePaths:a,bottomSpace:s=!1}=e,m=(0,t.useRef)(null),l=i(m,"-50px");return 0===a.length?null:(0,r.jsx)("div",{className:"image-row ".concat(l?"slideUp":"slideUp-reset"),ref:m,children:(0,r.jsx)("div",{className:"photo-set",children:a.map((e,a)=>(0,r.jsxs)("div",{className:"photo",children:[(0,r.jsx)(n.$,{size:n.E.Regular}),(0,r.jsx)("img",{loading:"lazy",alt:"Bild",src:e})]},e))})})}},8630:function(e,a,s){"use strict";s.d(a,{r:function(){return t}});var r=s(5893);s(7294);let t=e=>{let{imagePath:a}=e;return(0,r.jsx)("div",{className:"parallax-image-container",children:(0,r.jsx)("div",{className:"photo parallax-image",style:{backgroundImage:"url(".concat(a,")")}})})}},3555:function(e,a,s){"use strict";s.d(a,{r:function(){return n}});var r=s(5893),t=s(7294),i=s(308);let n=e=>{let{title:a,bodyTexts:s,noBottomPadding:n=!1}=e;return(0,r.jsxs)("div",{className:"padding-top-800 ".concat(n?"":"padding-bottom-500",'"'),children:[(0,r.jsx)(i.X,{text:a}),s&&s.map((e,a)=>(0,r.jsx)(t.Fragment,{children:e},a))]})}},1492:function(e,a,s){"use strict";s.d(a,{$:function(){return n},E:function(){return t}});var r,t,i=s(5893);s(7294),(r=t||(t={})).Small="small",r.Regular="regular",r.Large="large";let n=e=>{let{size:a="regular"}=e;return(0,i.jsx)("div",{className:"spinner-wrapper ".concat(a),children:(0,i.jsx)("div",{className:"spinner"})})}},6002:function(e,a,s){"use strict";s.d(a,{E:function(){return d}});var r=s(5893),t=s(7294),i=s(1664),n=s.n(i),m=s(7445),l=s(1492);let d=e=>{let{image:a,title:s,ingress:i,date:d,url:o,tags:c}=e,[g,u]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{a&&(0,m.qQ)(document,a,()=>{u(!0)})},[]),(0,r.jsxs)("div",{className:"story-card",children:[a?g?(0,r.jsx)(n(),{href:o,children:(0,r.jsx)("div",{className:"story-card-image",style:{backgroundImage:"url(".concat(a,")")}})}):(0,r.jsx)("div",{className:"story-card-image skeleton",children:(0,r.jsx)(l.$,{size:l.E.Small})}):null,(0,r.jsxs)("div",{className:"padding-top-300",style:{cursor:"pointer"},children:[(0,r.jsx)(n(),{href:o,children:(0,r.jsx)("h4",{children:s})}),c&&c.length>0&&(0,r.jsx)("div",{className:"tags",children:c.map(e=>(0,r.jsx)(n(),{href:o,children:(0,r.jsx)("span",{className:"fs-200 text-uppercase",children:e})},e))}),(0,r.jsx)(n(),{href:o,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"fs-400 padding-top-200",children:i}),(0,r.jsx)("p",{className:"fs-300 padding-top-200",children:d})]})})]})]})}},7579:function(e,a,s){"use strict";s.r(a),s.d(a,{stories:function(){return l}});var r=s(5893);s(7294);var t=s(308),i=s(6002),n=s(9008),m=s.n(n);let l=[{id:7,title:"Jill & \xd6rjans br\xf6llop",url:"/berattelser/jill-orjan-brollop",imageUrl:"/images/jill-orjan-brollop/Jill-Orjan-Wedding-105.jpg",ingress:"Vi alla s\xe4ger ett stort grattis p\xe5 er br\xf6llopsdag och \xf6nskar er en framtid fylld av k\xe4rlek och v\xe4lg\xe5ng!",date:"29 JUNI 2024"},{id:6,title:"Elvis student",url:"/berattelser/elvis-student-2024",imageUrl:"/images/elvis-student-2024/Elvis-student-2024-cover.jpg",ingress:"Stort grattis till studenten Elvis!",date:"7 JUNI 2024"},{id:5,title:"Midsommar 2024",url:"/berattelser/midsommar-2024",imageUrl:"/images/midsommar-2024/midsommar-2024-52.jpg",ingress:"Bastu, sill och nubbe. Kan det bli b\xe4ttre?",date:"21 JUNI 2024"},{id:4,title:"Vandring h\xf6sten 2022",url:"/berattelser/vandring-hosten-2022",imageUrl:"/images/vandring-hosten-2022/vandring-autumn-2022-70.jpg",ingress:"Fantastiskt v\xe4der p\xe5 fina Kinnekulle",date:"9 SEPTEMBER 2022"},{id:3,title:"Vandring v\xe5ren 2022",url:"/berattelser/vandring-varen-2022",imageUrl:"/images/vandring-varen-2022/vandrin-spring-2022-27.jpg",ingress:"Fina hall\xe4ndska leder i \xc5kulla bokskogar",date:"1 APRIL 2022"},{id:2,title:"Midsommar 2020",url:"/berattelser/midsommar-2020",imageUrl:"/images/midsommar-2020/2020-06-19_Midsommar-29.jpg",ingress:"Vi firar sommarsolst\xe5ndet med v\xe4nner vid \xd6mmern",date:"19 JUNI 2020"},{id:1,title:"Peace and Love",url:"/berattelser/peaceandlove",imageUrl:"/images/peaceandlove/ark-1.jpg",ingress:"Rockfotograferingskurs i Borl\xe4nge p\xe5 festivalen Peace & Love",date:"28 JUNI 2011"}];a.default=e=>{let{}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m(),{children:(0,r.jsx)("title",{children:"Jonas Peterson - Ber\xe4ttelser"})}),(0,r.jsx)("section",{className:"padding-top-1000",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(t.X,{text:"Ber\xe4ttelser"}),(0,r.jsx)("div",{className:"story-cards padding-block-700",children:l.map(e=>(0,r.jsx)(i.E,{url:e.url,image:e.imageUrl,title:e.title,ingress:e.ingress,date:e.date},e.url))})]})})]})}},6234:function(e,a,s){"use strict";s.r(a);var r=s(5893);s(7294);var t=s(8630),i=s(9564),n=s(3995),m=s(3555),l=s(9008),d=s.n(l),o=s(7530),c=s(7579),g=s(9882);a.default=()=>{let e=c.stories.find(e=>2===e.id),{startedLoadingImages:a}=(0,g.g)();if(!e)return null;let{title:s,ingress:l,imageUrl:u,date:j}=e;return(0,r.jsxs)("main",{className:a?"started-loading":"",children:[(0,r.jsx)(d(),{children:(0,r.jsx)("title",{children:"Jonas Peterson - Ber\xe4ttelser - Midsommar 2020"})}),(0,r.jsx)(o.Z,{imagePath:u,title:s,subTitle:l,date:j,startUnderMenu:!1}),(0,r.jsx)("section",{className:"margin-top-1000 margin-bottom-900",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(n.A,{children:"Vad kan vara svenskare \xe4n midsommar? Alltid otroligt kul att tr\xe4ffa alla kompisarna under avslappnade f\xf6rh\xe5llanden med bad, sol, mat och nubbe. \xc4ven om det, som vanligt, kom en regnskur s\xe5 var den kort och dagen badade i sol. I \xe5r var det Jonte och Petra som stod f\xf6r v\xe4rdskapet i deras sommarstuga vid sj\xf6n \xd6mmern. Stort tack f\xf6r att vi fick komma och fira med er i ert lilla paradis!"}),(0,r.jsx)(i.j,{imagePaths:["/images/midsommar-2020/2020-06-19_Midsommar-21.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/midsommar-2020/2020-06-19_Midsommar-24.jpg","/images/midsommar-2020/2020-06-19_Midsommar-27.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/midsommar-2020/2020-06-19_Midsommar-46.jpg","/images/midsommar-2020/2020-06-19_Midsommar-10.jpg"]}),(0,r.jsx)(m.r,{title:"Dags f\xf6r mat och nubbe",bodyTexts:[(0,r.jsx)(n.A,{children:"Varje g\xe5ng under midsommar lunchen t\xe4nker jag att Det h\xe4r med nubbe skulle man ju ha till mat andra dagar under \xe5ret ocks\xe5. De tankarna \xe5terkommer ju oftast bara en g\xe5ng om \xe5ret, men det \xe4r trevligt varje g\xe5ng..."},1)]}),(0,r.jsx)(i.j,{imagePaths:["/images/midsommar-2020/2020-06-19_Midsommar-5.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/midsommar-2020/2020-06-19_Midsommar-16.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/midsommar-2020/2020-06-19_Midsommar-121.jpg","/images/midsommar-2020/2020-06-19_Midsommar-170.jpg"]}),(0,r.jsx)(n.A,{extraMargins:!0,children:"Efter maten var det dags f\xf6r vattenlekar, b\xe5de p\xe5 land och i sj\xf6n. Vattenrushkanan var mycket uppskattad och ett dopp i sj\xf6n var det m\xe5nga som gjorde"})]})}),(0,r.jsx)(t.r,{imagePath:"/images/midsommar-2020/2020-06-19_Midsommar-95.jpg"}),(0,r.jsx)("section",{className:"padding-block-700",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(m.r,{title:"Bad",bodyTexts:[(0,r.jsx)(n.A,{children:"Att vi var vid \xd6mmern togs det verkligen full nytta av. H\xe4rliga bad och kanotutflykter"},1)]}),(0,r.jsx)(i.j,{imagePaths:["/images/midsommar-2020/2020-06-19_Midsommar-29.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/midsommar-2020/2020-06-19_Midsommar-82.jpg","/images/midsommar-2020/2020-06-19_Midsommar-36.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/midsommar-2020/2020-06-19_Midsommar-85.jpg"]}),(0,r.jsx)(m.r,{title:"Och s\xe5 var festen ig\xe5ng...",bodyTexts:[(0,r.jsx)(n.A,{children:"Som traditionen bjuder blev det t\xe4vlingar i slangbellsskjytte, hamra spik, k\xf6ra skottk\xe4rra och mycket mer"},1)]}),(0,r.jsx)(i.j,{imagePaths:["/images/midsommar-2020/2020-06-19_Midsommar-138.jpg","/images/midsommar-2020/2020-06-19_Midsommar-144.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/midsommar-2020/2020-06-19_Midsommar-48.jpg","/images/midsommar-2020/2020-06-19_Midsommar-87.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/midsommar-2020/2020-06-19_Midsommar-168.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/midsommar-2020/2020-06-19_Midsommar-187.jpg","/images/midsommar-2020/2020-06-19_Midsommar-188.jpg"]})]})})]})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=4393)}),_N_E=e.O()}]);