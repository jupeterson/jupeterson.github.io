(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{8446:function(n,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/berattelser/vandring-varen-2022",function(){return e(2629)}])},3995:function(n,a,e){"use strict";e.d(a,{A:function(){return s}});var r=e(5893);e(7294);let s=n=>{let{children:a,extraMargins:e=!1,noBottomPadding:s=!1}=n;return(0,r.jsx)("div",{className:"",children:(0,r.jsx)("p",{className:"padding-top-500 ".concat(s?"":"padding-bottom-500"," ").concat(e?"padding-top-900":""),children:a})})}},7530:function(n,a,e){"use strict";var r=e(5893),s=e(7294),i=e(1492),t=e(9882),g=e(7445);a.Z=n=>{let{imagePath:a,title:e,subTitle:d,startUnderMenu:l=!0,date:v}=n,[m,c]=(0,s.useState)(!1),{imagesLoading:o,numberImagesLoaded:j,totalNumberOfImages:p}=(0,t.g)();return(0,s.useEffect)(()=>{(0,g.qQ)(document,a,()=>{c(!0)})},[]),(0,r.jsxs)("div",{className:"cover-image-wrapper ".concat(l?"top-menu-clearance":""),id:"cover-image",children:[m&&(0,r.jsx)("div",{className:"cover-image",style:{backgroundImage:"url(".concat(a,")")}}),(0,r.jsxs)("div",{className:"cover-title-wrapper",children:[(0,r.jsxs)("div",{className:"image-loading-info ".concat(o?null:"fadeOut"),children:[(0,r.jsx)(i.$,{size:i.E.Small})," ",p>0?(0,r.jsxs)("span",{style:{marginLeft:"1rem"},children:["Laddat ",j," av ",p," bilder"]}):null]}),!o&&(0,r.jsxs)("div",{className:"cover-title-text-fade",children:[(0,r.jsx)("h1",{className:"cover-text-title",children:e}),(0,r.jsx)("p",{className:"cover-text-subtitle",children:d}),(0,r.jsx)("p",{className:"cover-text-date",children:v})]})]})]})}},308:function(n,a,e){"use strict";e.d(a,{X:function(){return s}});var r=e(5893);e(7294);let s=n=>{let{text:a,main:e=!1}=n;return(0,r.jsx)("h1",{className:"".concat(e?"text-5xl":"text-3xl"," text-gray-600 font-light mb-8 font-mont"),children:a})}},9564:function(n,a,e){"use strict";e.d(a,{j:function(){return g}});var r=e(5893),s=e(7294);let i=(n,a)=>{let[e,r]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=new IntersectionObserver(n=>{let[a]=n;r(a.isIntersecting)},{rootMargin:a});return n.current&&e.observe(n.current),()=>{n.current&&e.unobserve(n.current)}},[]),e};var t=e(1492);let g=n=>{let{imagePaths:a,bottomSpace:e=!1}=n,g=(0,s.useRef)(null),d=i(g,"-50px");return 0===a.length?null:(0,r.jsx)("div",{className:"image-row ".concat(d?"slideUp":"slideUp-reset"),ref:g,children:(0,r.jsx)("div",{className:"photo-set",children:a.map((n,a)=>(0,r.jsxs)("div",{className:"photo",children:[(0,r.jsx)(t.$,{size:t.E.Regular}),(0,r.jsx)("img",{loading:"lazy",alt:"Bild",src:n})]},n))})})}},8630:function(n,a,e){"use strict";e.d(a,{r:function(){return s}});var r=e(5893);e(7294);let s=n=>{let{imagePath:a}=n;return(0,r.jsx)("div",{className:"parallax-image-container",children:(0,r.jsx)("div",{className:"photo parallax-image",style:{backgroundImage:"url(".concat(a,")")}})})}},7306:function(n,a,e){"use strict";e.d(a,{K:function(){return s}});var r=e(5893);e(7294);let s=n=>{let{extraMargins:a=!1,dividers:e=!1,children:s}=n;return(0,r.jsxs)("div",{className:a?"padding-top-800 padding-bottom-800":"",children:[e&&(0,r.jsx)("hr",{}),(0,r.jsx)("p",{className:" ".concat(a?"padding-top-300 padding-bottom-300":""),children:s}),e&&(0,r.jsx)("hr",{})]})}},1492:function(n,a,e){"use strict";e.d(a,{$:function(){return t},E:function(){return s}});var r,s,i=e(5893);e(7294),(r=s||(s={})).Small="small",r.Regular="regular",r.Large="large";let t=n=>{let{size:a="regular"}=n;return(0,i.jsx)("div",{className:"spinner-wrapper ".concat(a),children:(0,i.jsx)("div",{className:"spinner"})})}},6002:function(n,a,e){"use strict";e.d(a,{E:function(){return l}});var r=e(5893),s=e(7294),i=e(1664),t=e.n(i),g=e(7445),d=e(1492);let l=n=>{let{image:a,title:e,ingress:i,date:l,url:v,tags:m}=n,[c,o]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{a&&(0,g.qQ)(document,a,()=>{o(!0)})},[]),(0,r.jsxs)("div",{className:"story-card",children:[a?c?(0,r.jsx)(t(),{href:v,children:(0,r.jsx)("div",{className:"story-card-image",style:{backgroundImage:"url(".concat(a,")")}})}):(0,r.jsx)("div",{className:"story-card-image skeleton",children:(0,r.jsx)(d.$,{size:d.E.Small})}):null,(0,r.jsxs)("div",{className:"padding-top-300",style:{cursor:"pointer"},children:[(0,r.jsx)(t(),{href:v,children:(0,r.jsx)("h4",{children:e})}),m&&m.length>0&&(0,r.jsx)("div",{className:"tags",children:m.map(n=>(0,r.jsx)(t(),{href:v,children:(0,r.jsx)("span",{className:"fs-200 text-uppercase",children:n})},n))}),(0,r.jsx)(t(),{href:v,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"fs-400 padding-top-200",children:i}),(0,r.jsx)("p",{className:"fs-300 padding-top-200",children:l})]})})]})]})}},7579:function(n,a,e){"use strict";e.r(a),e.d(a,{stories:function(){return d}});var r=e(5893);e(7294);var s=e(308),i=e(6002),t=e(9008),g=e.n(t);let d=[{id:5,title:"Midsommar 2024",url:"/berattelser/midsommar-2024",imageUrl:"/images/vmidsommar-2024/midsommar-2024-52.jpg",ingress:"Bast, sill och nubbe. Kan det bli b\xe4ttre?",date:"21 JUNI 2024"},{id:4,title:"Vandring h\xf6sten 2022",url:"/berattelser/vandring-hosten-2022",imageUrl:"/images/vandring-hosten-2022/vandring-autumn-2022-70.jpg",ingress:"Fantastiskt v\xe4der p\xe5 fina Kinnekulle",date:"9 SEPTEMBER 2022"},{id:3,title:"Vandring v\xe5ren 2022",url:"/berattelser/vandring-varen-2022",imageUrl:"/images/vandring-varen-2022/vandrin-spring-2022-27.jpg",ingress:"Fina hall\xe4ndska leder i \xc5kulla bokskogar",date:"1 APRIL 2022"},{id:2,title:"Midsommar 2020",url:"/berattelser/midsommar-2020",imageUrl:"/images/midsommar-2020/2020-06-19_Midsommar-29.jpg",ingress:"Vi firar sommarsolst\xe5ndet med v\xe4nner vid \xd6mmern",date:"19 JUNI 2020"},{id:1,title:"Peace and Love",url:"/berattelser/peaceandlove",imageUrl:"/images/peaceandlove/ark-1.jpg",ingress:"Rockfotograferingskurs i Borl\xe4nge p\xe5 festivalen Peace & Love",date:"28 JUNI 2011"}];a.default=n=>{let{}=n;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g(),{children:(0,r.jsx)("title",{children:"Jonas Peterson - Ber\xe4ttelser"})}),(0,r.jsx)("section",{className:"padding-top-1000",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(s.X,{text:"Ber\xe4ttelser"}),(0,r.jsx)("div",{className:"story-cards padding-block-700",children:d.map(n=>(0,r.jsx)(i.E,{url:n.url,image:n.imageUrl,title:n.title,ingress:n.ingress,date:n.date},n.url))})]})})]})}},2629:function(n,a,e){"use strict";e.r(a);var r=e(5893);e(7294);var s=e(8630),i=e(9564),t=e(3995),g=e(7306),d=e(9008),l=e.n(d),v=e(7530),m=e(7579),c=e(9882);a.default=()=>{let n=m.stories.find(n=>3===n.id),{startedLoadingImages:a}=(0,c.g)();if(!n)return null;let{title:e,ingress:d,imageUrl:o,date:j}=n;return(0,r.jsxs)("main",{className:a?"started-loading":"",children:[(0,r.jsx)(l(),{children:(0,r.jsx)("title",{children:"Jonas Peterson - Ber\xe4ttelser - Vandring v\xe5ren 2022"})}),(0,r.jsx)(v.Z,{imagePath:o,title:e,subTitle:d,date:j}),(0,r.jsx)("section",{className:"margin-top-1000 margin-bottom-900",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)(t.A,{children:["V\xe5rens kalla vandring f\xf6rde oss till Halland och \xc5kullas bokskogar, mer allm\xe4nt k\xe4nd som genomfartsled till g\xe5tan Ullared. ",(0,r.jsx)("br",{}),"F\xf6r andra g\xe5ngen i ordningen var det dags att k\xf6ra tarp, f\xf6r mig var det f\xf6rsta g\xe5ngen. Det skulle visa sig bli ganska kalla \xf6vernattningar. Men jag g\xe5r h\xe4ndelserna i f\xf6rv\xe4g nu.",(0,r.jsx)("br",{}),"Vi b\xf6rjade som vanligt p\xe5 McDonalds, den h\xe4r g\xe5ngen i \xc5by."]}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-2.jpg","/images/vandring-varen-2022/vandrin-spring-2022-3.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-4.jpg","/images/vandring-varen-2022/vandrin-spring-2022-5.jpg"]}),(0,r.jsx)(t.A,{extraMargins:!0,children:"Med McDonalds bes\xf6ket avklarat fortsatte vi resan s\xf6der ut, d\xe4r vi efter att ha \xe5kt genom Varberg sv\xe4ngde \xf6sterut mot \xc5kulla."}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-6.jpg","/images/vandring-varen-2022/vandrin-spring-2022-7.jpg"]}),(0,r.jsx)(t.A,{extraMargins:!0,children:"V\xe4l framme hittade vi ganska s\xe5 omg\xe5ende en udde d\xe4r vi kunde sl\xe5 upp v\xe5ra tarpar och b\xf6rja f\xf6rbereda kv\xe4llens brasa och korvgrillning. Lika mysigt som vanligt"}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-8.jpg","/images/vandring-varen-2022/vandrin-spring-2022-9.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-12.jpg","/images/vandring-varen-2022/vandrin-spring-2022-11.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-13.jpg","/images/vandring-varen-2022/vandrin-spring-2022-15.jpg"]}),(0,r.jsx)(t.A,{extraMargins:!0,children:"Det var riktigt friskt f\xf6rsta natten. Termometern bottnade p\xe5 -4 grader, s\xe5 det var ganska s\xe5 gott att b\xf6rja dagen med lite varm frukost innan det var dags att ge sig av f\xf6r en h\xe4rlig vandring genom de hall\xe4ndska bokskogarna."}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-16.jpg","/images/vandring-varen-2022/vandrin-spring-2022-14.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-17.jpg","/images/vandring-varen-2022/vandrin-spring-2022-19.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-20.jpg","/images/vandring-varen-2022/vandrin-spring-2022-18.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-22.jpg","/images/vandring-varen-2022/vandrin-spring-2022-21.jpg"]})]})}),(0,r.jsx)(s.r,{imagePath:"/images/vandring-varen-2022/vandrin-spring-2022-23.jpg"}),(0,r.jsx)("section",{className:"padding-block-700",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-24.jpg","/images/vandring-varen-2022/vandrin-spring-2022-25.jpg"]}),(0,r.jsx)(t.A,{extraMargins:!0,children:"Efter n\xe5gra timmars vandring blev det en fika paus i en bokskogs backe."}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-26.jpg","/images/vandring-varen-2022/vandrin-spring-2022-27.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-28.jpg","/images/vandring-varen-2022/vandrin-spring-2022-29.jpg"]}),(0,r.jsx)(t.A,{extraMargins:!0,children:"Lunch och \xf6l avnj\xf6ts i solskenet d\xe4r jag \xe4ven gl\xf6mde mina handskar som jag fick springa tillbaka och leta efter. Tur nog s\xe5 hittade jag dem."}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-30.jpg","/images/vandring-varen-2022/vandrin-spring-2022-31.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-32.jpg","/images/vandring-varen-2022/vandrin-spring-2022-34.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-35.jpg","/images/vandring-varen-2022/vandrin-spring-2022-36.jpg","/images/vandring-varen-2022/vandrin-spring-2022-37.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-38.jpg","/images/vandring-varen-2022/vandrin-spring-2022-39.jpg"]}),(0,r.jsx)(t.A,{extraMargins:!0,children:"L\xf6rdagskv\xe4llen var inte riktigt lika kall som fredagskv\xe4llen, och dessutom bj\xf6d den p\xe5 den numer legendariska fisk-och skaldjurspaketet. Jag lyckades \xf6ven l\xf6sa fredagskv\xe4llens kalla f\xf6tter genom att tr\xe4 p\xe5 skaljackan \xf6ver sovs\xe4cken. Kan rekommenderas!"}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-40.jpg","/images/vandring-varen-2022/vandrin-spring-2022-41.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-42.jpg","/images/vandring-varen-2022/vandrin-spring-2022-43.jpg"]}),(0,r.jsx)(i.j,{imagePaths:["/images/vandring-varen-2022/vandrin-spring-2022-44.jpg","/images/vandring-varen-2022/vandrin-spring-2022-45.jpg"]}),(0,r.jsx)(g.K,{extraMargins:!0,dividers:!0,children:(0,r.jsxs)(r.Fragment,{children:["Alla foton tagna med Fujifilm XT-3 med XF 23 mm",(0,r.jsx)("br",{}),(0,r.jsx)("em",{className:"text-sm",children:"\xa9 2022 Jonas Peterson. Bilderna f\xe5r inte anv\xe4ndas utan mitt tillst\xe5nd"})]})})]})})]})}}},function(n){n.O(0,[888,774,179],function(){return n(n.s=8446)}),_N_E=n.O()}]);