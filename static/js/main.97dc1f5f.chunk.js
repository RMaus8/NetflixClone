(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){e.exports={Layout:"Layout_Layout__XSHvJ",Main:"Layout_Main__1CLzd"}},29:function(e,t,a){e.exports=a.p+"static/media/Capture.a5ef440c.JPG"},30:function(e,t,a){e.exports={Logo:"Logo_Logo__3u_ga"}},31:function(e,t,a){},36:function(e,t,a){e.exports=a(73)},46:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"SET_CONTENT",function(){return w}),a.d(n,"FETCH_DATA_FAILED",function(){return _}),a.d(n,"UPDATE_SEARCH",function(){return j});var r=a(0),l=a.n(r),c=a(24),o=a.n(c),i=a(74),s=a(11),u=a(12),m=a(27),d=(a(46),a(6)),p=a(7),f=a(9),h=a(8),g=a(10),E=a(75),v=a(17),y=a.n(v),b=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:y.a.Layout},l.a.createElement("main",{className:y.a.Main},this.props.children))}}]),t}(r.Component),O="268cd6b30005c8d8f6ed0b33d60ec16c",k=a(28),N=a.n(k).a.create({baseURL:"https://api.themoviedb.org/3/"}),w="SET_CONTENT",_="FETCH_DATA_FAILED",j="UPDATE_SEARCH",T=function(e){return function(t){N.get(e.url+"&api_key="+O).then(function(a){var n,r;t((n=a.data.results,r=e.mounted,{type:w,contentData:n,mounted:r}))}).catch(function(e){t(function(e){return{type:_,error:e}}(e))})}},C=function(){return l.a.createElement("div",{id:"navigation",className:"Navigation"},l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,"Browse"),l.a.createElement("li",null,"My list"),l.a.createElement("li",null,"Top picks"),l.a.createElement("li",null,"Recent"))))},S=a(29),L=a.n(S),U=a(30),R=a.n(U),A=function(e){return l.a.createElement("div",{className:R.a.Logo},l.a.createElement("img",{src:L.a,alt:"Logo"}))},D=function(e){return l.a.createElement("div",{className:"UserProfile"},l.a.createElement("div",{className:"User"},l.a.createElement("div",{className:"name"},"Jack Oliver"),l.a.createElement(A,null)))},z=function(e){return l.a.createElement("a",{href:"/",className:"Button","data-primary":e.primary},e.text)},I=function(e){return l.a.createElement("div",{id:"hero",className:"Hero",style:{backgroundImage:"url(https://images.alphacoders.com/633/633643.jpg)"}},l.a.createElement("div",{className:"content"},l.a.createElement("img",{className:"logo",src:"http://www.returndates.com/backgrounds/narcos.logo.png",alt:"narcos background"}),l.a.createElement("h2",null,"Season 2 now available"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod."),l.a.createElement("div",{className:"button-wrapper"},l.a.createElement(z,{primary:!0,text:"Watch now"}),l.a.createElement(z,{primary:!1,text:"+ My list"}))),l.a.createElement("div",{className:"overlay"}))},M=a(31),x=a.n(M),H=function(e){return l.a.createElement("div",{onClick:e.toggle,"data-toggled":e.toggleStatus,className:x.a.ListToggle},l.a.createElement("div",null,l.a.createElement("i",{className:"fa fa-fw fa-plus"}),l.a.createElement("i",{className:"fa fa-fw fa-check"})))},J=function(e){return l.a.createElement("div",{className:"Item",style:{backgroundImage:"url("+e.backdrop+")"}},l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"title"},e.title),l.a.createElement("div",{className:"rating"},e.score," / 10"),l.a.createElement("div",{className:"plot"},e.overview),l.a.createElement(H,{toggle:e.toggle,toggleStatus:e.toggleStatus})))},q=(a(14),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={toggled:!1,data:[],mounted:!1},a.loadContent=function(){var e="https://api.themoviedb.org/3/"+a.props.url+"&api_key="+O;N.get(e).then(function(e){a.setState({data:e.data})}).catch(function(e){console.log(e)})},a.componentWillReceiveProps=function(e){e.url!==a.props.url&&""!==e.url&&a.setState({mounted:!0,url:e.url},function(){a.loadContent()})},a.componentDidMount=function(){""!==a.props.url&&(a.loadContent(),a.setState({mounted:!0}))},a.handleClick=function(){a.setState({toggled:!a.state.toggled})},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t="";return this.state.data.results&&(t=this.state.data.results.map(function(t,a){if(a<5){var n="",r="http://image.tmdb.org/t/p/original"+t.backdrop_path;return n=t.name?t.name:t.original_title,l.a.createElement(J,{key:t.id,title:n,score:t.vote_average,toggle:e.handleClick,toggleStatus:e.state.toggled,overview:t.overview,backdrop:r})}return l.a.createElement("div",{key:t.id})})),l.a.createElement("div",{ref:"titlecategory",className:"TitleList","data-loaded":this.state.mounted},l.a.createElement("div",{className:"Title"},l.a.createElement("h1",null,this.props.title),l.a.createElement("div",{className:"titles-wrapper"},t)))}}]),t}(r.Component)),F=Object(s.b)(function(e){return{error:e.error,mounted:e.mounted,data:e.contentData}},function(e){return{loadContent:function(t){return e(T(t))}}})(q),P=function(e){return l.a.createElement("div",{id:"logo",className:"Logo"},l.a.createElement("svg",{version:"1.1",width:"300",height:"81.386726",id:"svg3262"},l.a.createElement("g",{transform:"translate(-384.28572,-428.81172)",id:"layer1"},l.a.createElement("g",{transform:"matrix(2.5445375,0,0,2.5445375,1157.1714,-1457.8678)",id:"g3235"},l.a.createElement("path",{d:"m -203.09972,771.41415 c 1.6425,0.15875 3.2825,0.33 4.92,0.5075 l 3.615,-8.92625 3.43625,9.74875 c 1.76375,0.22125 3.525,0.4525 5.2825,0.695 l -6.02375,-17.09625 6.02625,-14.88 -5.10375,0 -0.0525,0.0725 -3.255,8.03875 -2.8575,-8.11125 -5.03875,0 5.2025,14.7625 -6.15125,15.18875 z",id:"path3015",style:{fill:"#b81d24",fillOpacity:1,fillRule:"nonzero",stroke:"none"}}),l.a.createElement("path",{d:"m -206.91147,771.06478 0,-29.60125 -5.0375,0 0,29.18625 c 1.68125,0.12875 3.36125,0.26875 5.0375,0.415",id:"path3019",style:{fill:"#b81d24",fillOpacity:1,fillRule:"nonzero",stroke:"none"}}),l.a.createElement("path",{d:"m -244.7486,769.4089 c 1.36,0 2.7175,0.01 4.07375,0.0213 l 0,-10.875 6.05125,0 0,-4.63125 -6.05125,0 0,-7.825 6.96875,0 0,-4.63625 -12.02625,0 0,27.95 c 0.3275,0 0.655,-0.004 0.98375,-0.004",id:"path3023",style:{fill:"#b81d24",fillOpacity:1,fillRule:"nonzero",stroke:"none"}}),l.a.createElement("path",{d:"m -260.3881,769.69191 c 1.6775,-0.06 3.3575,-0.11 5.04,-0.15125 l 0,-23.44125 4.7075,0 0,-4.63625 -14.45625,0 0,4.63625 4.70875,0 0,23.5925 z",id:"path3035",style:{fill:"#b81d24",fillOpacity:1,fillRule:"nonzero",stroke:"none"}}),l.a.createElement("path",{d:"m -298.91059,772.81378 0,-17.63625 5.96375,16.92375 c 1.83375,-0.20625 3.67125,-0.4 5.5125,-0.5825 l 0,-30.055 -4.8325,0 0,18.2675 -6.43625,-18.2675 -0.2075,0 -4.8325,0 0,31.98375 0.03,0 c 1.5975,-0.22125 3.19875,-0.43125 4.8025,-0.63375",id:"path3039",style:{fill:"#b81d24",fillOpacity:1,fillRule:"nonzero",stroke:"none"}}),l.a.createElement("path",{d:"m -269.95297,746.09903 0,-4.63625 -12.0275,0 0,24.9125 0,4.6375 0,0.004 c 3.99125,-0.345 7.99625,-0.63375 12.0175,-0.86875 l 0,-0.004 0,-1.33625 0,-3.3 c -2.325,0.135 -4.645,0.29125 -6.96,0.46375 l 0,-7.415 6.05125,0 0,-4.63375 -6.05125,0 0,-7.82375 6.97,0 z",id:"path3051",style:{fill:"#b81d24",fillOpacity:1,fillRule:"nonzero",stroke:"none"}}),l.a.createElement("path",{d:"m -223.72272,765.2864 0,-23.82375 -5.05875,0 0,23.605 0,4.63625 0,0.005 c 4.02375,0.1475 8.0325,0.35375 12.0275,0.6125 l 0,-0.006 0,-1.4975 0,-3.13875 c -2.31875,-0.15 -4.64125,-0.28 -6.96875,-0.3925",id:"path3055",style:{fill:"#b81d24",fillOpacity:1,fillRule:"nonzero",stroke:"none"}})))))},B=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:""},a.handleKeyUp=function(e){if("Enter"===e.key&&""!==a.props.searchTerm){var t="search/multi?query="+a.state.searchTerm+"&api_key="+O;a.props.updateSearch(t)}},a.handleChange=function(e){a.setState({searchTerm:e.target.value})},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",{className:"Header"},l.a.createElement(P,null),l.a.createElement(C,null),l.a.createElement("div",{className:"Search"},l.a.createElement("input",{onKeyUp:this.handleKeyUp,onChange:this.handleChange,type:"search",placeholder:"Search for a title...",value:this.state.searchTerm})),l.a.createElement(D,null)),l.a.createElement(I,null),l.a.createElement(F,{title:"Search Results",url:this.props.searchUrl}),l.a.createElement(F,{title:"Top TV picks for Jack",url:"discover/tv?sort_by=popularity.desc&page=1"}),l.a.createElement(F,{title:"Trending now",url:"discover/movie?sort_by=popularity.desc&page=1"}),l.a.createElement(F,{title:"Most watched in Horror",url:"genre/27/movies?sort_by=popularity.desc&page=1"}),l.a.createElement(F,{title:"Sci-Fi greats",url:"genre/878/movies?sort_by=popularity.desc&page=1"}),l.a.createElement(F,{title:"Comedy magic",url:"genre/35/movies?sort_by=popularity.desc&page=1"}))}}]),t}(r.Component),W=Object(s.b)(function(e){return{searchUrl:e.searchUrl}},function(e){return{onInitMovies:function(){return e({type:"INIT_MOVIES"})},updateSearch:function(t){return e(function(e){return{type:n,searchUrl:e}}(t))}}})(B),K=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,null,l.a.createElement(W,null)))}}]),t}(r.Component),V=Object(E.a)(K);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(34),X={searchUrl:"",contentData:null,mounted:!1,error:!1},$=function(e,t){return Object(G.a)({},e,t)},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return function(e,t){return $(e,{contentData:t.contentData,mounted:t.mounted})}(e,t);case _:return function(e,t){return $(e,{error:t.error})}(e,t);case j:return function(e,t){return $(e,{searchUrl:t.searchUrl})}(e,t);default:return e}},Y=u.c,Z=Object(u.d)(Q,Y(Object(u.a)(m.a))),ee=l.a.createElement(s.a,{store:Z},l.a.createElement(i.a,{basename:"/RMaus8/NetflixClone"},l.a.createElement(V,null)));o.a.render(ee,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,2,1]]]);
//# sourceMappingURL=main.97dc1f5f.chunk.js.map