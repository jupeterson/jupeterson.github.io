(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[880],{3281:function(n,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/berattelser/vandring-hosten-2022",function(){return e(4602)}])},3995:function(n,a,e){"use strict";e.d(a,{A:function(){return i}});var t=e(5893);e(7294);let i=n=>{let{children:a,extraMargins:e=!1,noBottomPadding:i=!1}=n;return(0,t.jsx)("div",{className:"",children:(0,t.jsx)("p",{className:"padding-top-500 ".concat(i?"":"padding-bottom-500"," ").concat(e?"padding-top-900":""),children:a})})}},7530:function(n,a,e){"use strict";var t=e(5893),i=e(7294),s=e(1492),g=e(9882),r=e(7445);a.Z=n=>{let{imagePath:a,title:e,subTitle:d,startUnderMenu:m=!0,date:u}=n,[v,l]=(0,i.useState)(!1),{imagesLoading:o,numberImagesLoaded:j,totalNumberOfImages:h}=(0,g.g)();return(0,i.useEffect)(()=>{(0,r.qQ)(document,a,()=>{l(!0)})},[]),(0,t.jsxs)("div",{className:"cover-image-wrapper ".concat(m?"top-menu-clearance":""),id:"cover-image",children:[v&&(0,t.jsx)("div",{className:"cover-image",style:{backgroundImage:"url(".concat(a,")")}}),(0,t.jsxs)("div",{className:"cover-title-wrapper",children:[(0,t.jsxs)("div",{className:"image-loading-info ".concat(o?null:"fadeOut"),children:[(0,t.jsx)(s.$,{size:s.E.Small})," ",h>0?(0,t.jsxs)("span",{style:{marginLeft:"1rem"},children:["Laddat ",j," av ",h," bilder"]}):null]}),!o&&(0,t.jsxs)("div",{className:"cover-title-text-fade",children:[(0,t.jsx)("h1",{className:"cover-text-title",children:e}),(0,t.jsx)("p",{className:"cover-text-subtitle",children:d}),(0,t.jsx)("p",{className:"cover-text-date",children:u})]})]})]})}},308:function(n,a,e){"use strict";e.d(a,{X:function(){return i}});var t=e(5893);e(7294);let i=n=>{let{text:a,main:e=!1}=n;return(0,t.jsx)("h1",{className:"".concat(e?"text-5xl":"text-3xl"," text-gray-600 font-light mb-8 font-mont"),children:a})}},9564:function(n,a,e){"use strict";e.d(a,{j:function(){return r}});var t=e(5893),i=e(7294);let s=(n,a)=>{let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=new IntersectionObserver(n=>{let[a]=n;t(a.isIntersecting)},{rootMargin:a});return n.current&&e.observe(n.current),()=>{n.current&&e.unobserve(n.current)}},[]),e};var g=e(1492);let r=n=>{let{imagePaths:a,bottomSpace:e=!1}=n,r=(0,i.useRef)(null),d=s(r,"-50px");return 0===a.length?null:(0,t.jsx)("div",{className:"image-row ".concat(d?"slideUp":"slideUp-reset"),ref:r,children:(0,t.jsx)("div",{className:"photo-set",children:a.map((n,a)=>(0,t.jsxs)("div",{className:"photo",children:[(0,t.jsx)(g.$,{size:g.E.Regular}),(0,t.jsx)("img",{loading:"lazy",alt:"Bild",src:n})]},n))})})}},8630:function(n,a,e){"use strict";e.d(a,{r:function(){return i}});var t=e(5893);e(7294);let i=n=>{let{imagePath:a}=n;return(0,t.jsx)("div",{className:"parallax-image-container",children:(0,t.jsx)("div",{className:"photo parallax-image",style:{backgroundImage:"url(".concat(a,")")}})})}},3555:function(n,a,e){"use strict";e.d(a,{r:function(){return g}});var t=e(5893),i=e(7294),s=e(308);let g=n=>{let{title:a,bodyTexts:e,noBottomPadding:g=!1}=n;return(0,t.jsxs)("div",{className:"padding-top-800 ".concat(g?"":"padding-bottom-500",'"'),children:[(0,t.jsx)(s.X,{text:a}),e&&e.map((n,a)=>(0,t.jsx)(i.Fragment,{children:n},a))]})}},7306:function(n,a,e){"use strict";e.d(a,{K:function(){return i}});var t=e(5893);e(7294);let i=n=>{let{extraMargins:a=!1,dividers:e=!1,children:i}=n;return(0,t.jsxs)("div",{className:a?"padding-top-800 padding-bottom-800":"",children:[e&&(0,t.jsx)("hr",{}),(0,t.jsx)("p",{className:" ".concat(a?"padding-top-300 padding-bottom-300":""),children:i}),e&&(0,t.jsx)("hr",{})]})}},1492:function(n,a,e){"use strict";e.d(a,{$:function(){return g},E:function(){return i}});var t,i,s=e(5893);e(7294),(t=i||(i={})).Small="small",t.Regular="regular",t.Large="large";let g=n=>{let{size:a="regular"}=n;return(0,s.jsx)("div",{className:"spinner-wrapper ".concat(a),children:(0,s.jsx)("div",{className:"spinner"})})}},6002:function(n,a,e){"use strict";e.d(a,{E:function(){return m}});var t=e(5893),i=e(7294),s=e(1664),g=e.n(s),r=e(7445),d=e(1492);let m=n=>{let{image:a,title:e,ingress:s,date:m,url:u,tags:v}=n,[l,o]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{a&&(0,r.qQ)(document,a,()=>{o(!0)})},[]),(0,t.jsxs)("div",{className:"story-card",children:[a?l?(0,t.jsx)(g(),{href:u,children:(0,t.jsx)("div",{className:"story-card-image",style:{backgroundImage:"url(".concat(a,")")}})}):(0,t.jsx)("div",{className:"story-card-image skeleton",children:(0,t.jsx)(d.$,{size:d.E.Small})}):null,(0,t.jsxs)("div",{className:"padding-top-300",style:{cursor:"pointer"},children:[(0,t.jsx)(g(),{href:u,children:(0,t.jsx)("h4",{children:e})}),v&&v.length>0&&(0,t.jsx)("div",{className:"tags",children:v.map(n=>(0,t.jsx)(g(),{href:u,children:(0,t.jsx)("span",{className:"fs-200 text-uppercase",children:n})},n))}),(0,t.jsx)(g(),{href:u,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{className:"fs-400 padding-top-200",children:s}),(0,t.jsx)("p",{className:"fs-300 padding-top-200",children:m})]})})]})]})}},7579:function(n,a,e){"use strict";e.r(a),e.d(a,{stories:function(){return d}});var t=e(5893);e(7294);var i=e(308),s=e(6002),g=e(9008),r=e.n(g);let d=[{id:6,title:"Elvis student",url:"/berattelser/elvis-student-2024",imageUrl:"/images/elvis-student-2024/Elvis-student-2024-cover.jpg",ingress:"Stort grattis till studenten Elvis!",date:"7 JUNI 2024"},{id:5,title:"Midsommar 2024",url:"/berattelser/midsommar-2024",imageUrl:"/images/midsommar-2024/midsommar-2024-52.jpg",ingress:"Bastu, sill och nubbe. Kan det bli b\xe4ttre?",date:"21 JUNI 2024"},{id:4,title:"Vandring h\xf6sten 2022",url:"/berattelser/vandring-hosten-2022",imageUrl:"/images/vandring-hosten-2022/vandring-autumn-2022-70.jpg",ingress:"Fantastiskt v\xe4der p\xe5 fina Kinnekulle",date:"9 SEPTEMBER 2022"},{id:3,title:"Vandring v\xe5ren 2022",url:"/berattelser/vandring-varen-2022",imageUrl:"/images/vandring-varen-2022/vandrin-spring-2022-27.jpg",ingress:"Fina hall\xe4ndska leder i \xc5kulla bokskogar",date:"1 APRIL 2022"},{id:2,title:"Midsommar 2020",url:"/berattelser/midsommar-2020",imageUrl:"/images/midsommar-2020/2020-06-19_Midsommar-29.jpg",ingress:"Vi firar sommarsolst\xe5ndet med v\xe4nner vid \xd6mmern",date:"19 JUNI 2020"},{id:1,title:"Peace and Love",url:"/berattelser/peaceandlove",imageUrl:"/images/peaceandlove/ark-1.jpg",ingress:"Rockfotograferingskurs i Borl\xe4nge p\xe5 festivalen Peace & Love",date:"28 JUNI 2011"}];a.default=n=>{let{}=n;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r(),{children:(0,t.jsx)("title",{children:"Jonas Peterson - Ber\xe4ttelser"})}),(0,t.jsx)("section",{className:"padding-top-1000",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(i.X,{text:"Ber\xe4ttelser"}),(0,t.jsx)("div",{className:"story-cards padding-block-700",children:d.map(n=>(0,t.jsx)(s.E,{url:n.url,image:n.imageUrl,title:n.title,ingress:n.ingress,date:n.date},n.url))})]})})]})}},4602:function(n,a,e){"use strict";e.r(a),e.d(a,{default:function(){return p}});var t=e(5893);e(7294);var i=e(8630),s=e(9564),g=e(3995),r=e(3555),d=e(7306),m=e(9008),u=e.n(m),v=e(7530),l=e(7579),o=e(9882);let j=n=>{let{children:a}=n;return(0,t.jsx)("blockquote",{children:a})},h=n=>{let{imagePath:a}=n;return(0,t.jsx)("div",{className:"full-width-image-container",children:(0,t.jsx)("img",{src:a,alt:"Full width image"})})};var p=()=>{let n=l.stories.find(n=>4===n.id),{startedLoadingImages:a}=(0,o.g)();if(!n)return null;let{title:e,ingress:m,imageUrl:p,date:c}=n;return(0,t.jsxs)("main",{className:a?"started-loading":"",children:[(0,t.jsx)(u(),{children:(0,t.jsx)("title",{children:"Jonas Peterson - Ber\xe4ttelser - Vandring h\xf6sten 2022"})}),(0,t.jsx)(v.Z,{imagePath:p,title:e,subTitle:m,date:c,startUnderMenu:!1}),(0,t.jsx)("section",{className:"margin-top-1000 margin-bottom-900",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(g.A,{children:"Tredje g\xe5ngen tarp och h\xe4rliga Kinnekulle var m\xe5let f\xf6r \xe5rets h\xf6stvandring. Som vanligt gav vi oss av med tv\xe5 bilar mot G\xf6tene vid 15 tiden, med ett f\xf6rsta stopp p\xe5 McDonalds. Den h\xe4r g\xe5ngen blev det ett bes\xf6k p\xe5 en av deras restauranger i Alings\xe5s."}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-1.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-3.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-4.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-2.jpg"]}),(0,t.jsx)(g.A,{extraMargins:!0,children:"Med McDonalds bes\xf6ket avklarat fortsatte vi resan norr ut, d\xe4r vi bland annat passerade Husaby (vars kyrka vi skulle bes\xf6ka igen p\xe5 s\xf6ndagen)."}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-5.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-7.jpg"]}),(0,t.jsx)(r.r,{title:"F\xf6rsta kv\xe4llens \xf6vernattning",bodyTexts:[(0,t.jsx)(g.A,{children:"Efter dragit det l\xe4ngsta str\xe5et, fick jag v\xe4lja min favoritplats att s\xe4tta upp min tarp. Jag r\xe5kade v\xe4lja en plats som n\xe4sta l\xe5g i ett k\xe4rr med grodor som s\xe4llskap."},1)]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-6.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-8.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-10.jpg"]}),(0,t.jsx)(g.A,{children:"Det regnade p\xe5 r\xe4tt bra under kv\xe4llen och natten, men p\xe5 morgonen hade det hela klarnat upp och vi kunde f\xe5 i oss en god frukost innan vi b\xf6rjade packa ihop och starta dagens vandring."}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-9.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-11.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-12.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-13.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-14.jpg"]}),(0,t.jsx)(r.r,{title:"Mot Kinnekulles topp",bodyTexts:[(0,t.jsx)(g.A,{extraMargins:!1,children:"Vi kom snabbt upp p\xe5 Kinnekulleleden som strax efter\xe5t b\xf6rjade stiga mot toppen."},1)]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-15.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-18.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-17.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-16.jpg"]}),(0,t.jsx)(g.A,{extraMargins:!0,children:"Uppe p\xe5 Kinnekulle kunde vi njuta av utsikten \xe5t \xf6ster. Tur var det, med tanke p\xe5 den ibland r\xe4tt tunga stigningen med packning direkt efter frukost."}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-19.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-20.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-21.jpg"]}),(0,t.jsx)(g.A,{extraMargins:!0,children:"V\xe4l uppe var det en liten stigning till innan vi n\xe5dde utkikstornet med caf\xe9."}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-22.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-23.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-24.jpg"],bottomSpace:!0})]})}),(0,t.jsx)(i.r,{imagePath:"/images/vandring-hosten-2022/vandring-autumn-2022-25.jpg"}),(0,t.jsx)("section",{className:"padding-block-700 margin-bottom-500",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(r.r,{title:"H\xe4rifr\xe5n gick allt utf\xf6r",bodyTexts:[(0,t.jsx)(g.A,{children:"Efter m\xe4ktiga vyer \xf6ver v\xe4nern v\xe4nde leden utf\xf6r, vi hann ocks\xe5 med att missa v\xe5r genv\xe4g, s\xe5 det blev som s\xe5 ofta en senv\xe4g."},"allt-utfar-1"),(0,t.jsx)(j,{children:"Det \xe4r oftast n\xe4r man g\xe5r vilse, som de riktiga p\xe4rlorna hittas"},"allt-utfar-2")]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-26.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-27.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-28.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-29.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-30.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-31.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-32.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-33.jpg"]}),(0,t.jsx)(r.r,{title:"Stenbrottet",noBottomPadding:!0,bodyTexts:[(0,t.jsx)(g.A,{noBottomPadding:!0,children:'En av Kinnekulles st\xf6rsta attraktioner \xe4r det stora stenbrott, i folkmun kallad "lilla Grand Canyon".'},1)]})]})}),(0,t.jsx)(h,{imagePath:"/images/vandring-hosten-2022/vandring-autumn-2022-37.jpg"}),(0,t.jsx)("section",{className:"margin-bottom-900",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(g.A,{extraMargins:!0,children:"Det mesta av stenen fr\xe5n brottet har anv\xe4nts till cementtillverkning mellan \xe5ren 1892-1979. Fun fact, det g\xe5r att fiska regnb\xe5gs\xf6ring i brottets sj\xf6."}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-34.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-35.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-36.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-38.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-39.jpg"]}),(0,t.jsx)(r.r,{title:"Gr\xf6ne skog",bodyTexts:[(0,t.jsx)(g.A,{children:"Kalkbrottet i Gr\xf6ne skog var en m\xe4ktig upplevelse, d\xe4r vi stannade f\xf6r dagens f\xf6rsta rast och fika efter 10km vandring. Kalkstensbrottet i Gr\xf6ne skog avveckaldes under 1950-talet och \xe4n idag finns en del av redskapen kvar."},1)]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-40.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-41.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-42.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-43.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-44.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-45.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-47.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-46.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-48.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-49.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-51.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-50.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-52.jpg"]}),(0,t.jsx)(r.r,{title:"Vandringen forts\xe4tter in i hagarna",bodyTexts:[(0,t.jsx)(g.A,{children:"Efter en sen fika var det dags att skynda p\xe5 lite f\xf6r att jobba upp hungern inf\xf6r vad det visade sig en ganska s\xe5 sen lunch. Men liggande i fina ekhagar och \xe4ta en efterl\xe4ngtad lunch \xe4r inte alls illa."},1)]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-54.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-55.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-56.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-58.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-60.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-61.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-63.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-64.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-65.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-66.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-67.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-68.jpg"],bottomSpace:!0})]})}),(0,t.jsx)(i.r,{imagePath:"/images/vandring-hosten-2022/vandring-autumn-2022-70.jpg"}),(0,t.jsx)("section",{className:"padding-block-700 margin-bottom-900",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-71.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-72.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-73.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-74.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-75.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-76.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-77.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-78.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-80.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-81.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-82.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-84.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-83.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-85.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-86.jpg"]}),(0,t.jsx)(r.r,{title:"Andra kv\xe4llens \xf6vernattning",bodyTexts:[(0,t.jsx)(g.A,{children:"Vi var v\xe4ldigt n\xf6jda efter 23km vandring under dagen, och hittade en fin plats i en kohage (dock utan synliga kor). Traditionsenligt blev det fiskpaket med tv\xe5 sorters fisk, musslor, havskr\xe4ftor, potatis, mor\xf6tter, f\xe4nk\xe5l, vitt vin, fond och gr\xe4dde. Det var exakt s\xe5 gott som det l\xe5ter!"},1)]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-87.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-88.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-89.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-90.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-91.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-92.jpg"]}),(0,t.jsx)(r.r,{title:"Vandringen tillbaka till bilarna",bodyTexts:[(0,t.jsx)(g.A,{children:"Pigga och fr\xe4scha vaknade vi upp p\xe5 valdagen. Efter en sk\xf6n frukost gick vi de cirka 6km l\xe4ngs Kinnekulleleden tillbaka till bilarna, genom h\xe4rliga lanndskap. Sprang p\xe5 lite tyska turister ocks\xe5, eller var de nederl\xe4ndska?"},1)]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-93.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-94.jpg"],bottomSpace:!0})]})}),(0,t.jsx)(i.r,{imagePath:"/images/vandring-hosten-2022/vandring-autumn-2022-95.jpg"}),(0,t.jsx)("section",{className:"padding-block-700",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-96.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-97.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-98.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-100.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-101.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-103.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-104.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-102.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-105.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-106.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-109.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-107.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-108.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-110.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-111.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-112.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-113.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-116.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-114.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-115.jpg"]}),(0,t.jsx)(r.r,{title:"Husaby kyrka",bodyTexts:[(0,t.jsx)(g.A,{children:"Husaby kyrka fr\xe5n 1000-talet, kan vara Sveriges f\xf6rsta domkyrka. Det skall enligt uppgift ha Olof Sk\xf6tkonungsgrav utanf\xf6r ing\xe5ngen till kyrkan, men det r\xe5der stor os\xe4kerhet kring om dessa uppgifter \xe4r \xe4kta."},1)]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-117.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-118.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-119.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-120.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-121.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-123.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-125.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-124.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-129.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-127.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-130.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-131.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-134.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-133.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-135.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-136.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-137.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-138.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-139.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-140.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-141.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-142.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-143.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-144.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-145.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-146.jpg"]}),(0,t.jsx)(r.r,{title:"Sankt Sigfrids k\xe4lla",bodyTexts:[(0,t.jsx)(g.A,{children:"H\xe4r skall enligt legenden Olof Sk\xf6tkonung, som f\xf6rste svenske kung \xe5r 1000, l\xe5tit sig d\xf6pas in i kristendomen av den engelske mission\xe4ren Sigfrid. Under 1900-talet har ett antal svenska kungligheter ristat in sina namn vid k\xe4llan."},1)]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-147.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-148.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-148.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-149.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-150.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-151.jpg"]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-154.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-152.jpg"]}),(0,t.jsx)(r.r,{title:"Den obligatoriska pizzan",bodyTexts:[(0,t.jsx)(g.A,{children:"Varje vandring b\xf6rjar med ett McDonalds bes\xf6k och avslutas med en pizza, d\xe4remellan \xe4ts det och dricks en massa onyttigheter. S\xe5 har det alltid varit och s\xe5 skall det alltid bli."},1)]}),(0,t.jsx)(s.j,{imagePaths:["/images/vandring-hosten-2022/vandring-autumn-2022-156.jpg","/images/vandring-hosten-2022/vandring-autumn-2022-157.jpg"]}),(0,t.jsx)(d.K,{extraMargins:!0,dividers:!0,children:(0,t.jsxs)(t.Fragment,{children:["Alla foton tagna med Fujifilm x100F eller iPhone 11 Pro Max ",(0,t.jsx)("br",{}),(0,t.jsx)("em",{className:"fs-200",children:"\xa9 2022 Jonas Peterson. Bilderna f\xe5r inte anv\xe4ndas utan mitt tillst\xe5nd"})]})})]})})]})}}},function(n){n.O(0,[888,774,179],function(){return n(n.s=3281)}),_N_E=n.O()}]);