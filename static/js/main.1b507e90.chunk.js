(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{27:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.87a0eb6a.png"},39:function(e,t,n){e.exports=n(70)},44:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(33),o=n.n(i),c=n(10),l=n(11),u=n(13),s=n(12),m=n(2),p=n(16),d=n(3),g=n(1);n(44);function v(){var e=Object(m.a)(["\n    border-bottom:4px solid ",";\n    height:100%;\n    display:flex;\n    align-items:center;\n    transition:border-bottom .6s ease-in-out;\n"]);return v=function(){return e},e}function f(){var e=Object(m.a)(["\n    height:52px;\n    top:0px;\n    background-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));\n    z-index:88;\n"]);return f=function(){return e},e}var h=g.c.div(f()),b=Object(g.c)(p.b)(v(),(function(e){return e.current?"#007bff":"transparent"})),E=Object(d.g)((function(e){var t=e.location.pathname;return r.a.createElement("header",{className:"col-12"},r.a.createElement(h,{className:"row w-100 shadow-lg align-items-center position-fixed"},r.a.createElement(b,{current:"/"===t,className:"col-auto",to:"/"},"Home"),r.a.createElement(b,{current:"/tv"===t,className:"col-auto",to:"/tv"},"tv"),r.a.createElement(b,{current:"/search"===t,className:"col-auto",to:"/search"},"search")))})),y=n(8),x=n.n(y),_=n(14);function j(){var e=Object(m.a)(["\n    display:grid;\n    grid-template-columns: repeat(auto-fill,125px);\n    grid-gap:24px;\n"]);return j=function(){return e},e}function O(){var e=Object(m.a)(["\n    padding:24px;\n    :last-child{\n        margin-bottom:0px !important;\n    }\n"]);return O=function(){return e},e}var w=g.c.div(O()),k=g.c.div(j()),S=function(e){var t=e.title,n=e.children;return r.a.createElement(w,{className:"mb-5"},r.a.createElement("div",{className:"text-white font-weight-bolder mb-2"},t),r.a.createElement(k,null,n))};function N(){var e=Object(m.a)(["\n    border-color:#3758e0;\n    border-right-color: transparent;\n"]);return N=function(){return e},e}function T(){var e=Object(m.a)(["\n    padding:24px;\n"]);return T=function(){return e},e}var R=g.c.div(T()),M=g.c.div(N()),C=function(){return r.a.createElement(R,null,r.a.createElement(M,{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only text-brand-blue"},"Loading...")))};function P(){var e=Object(m.a)(["\n    color:",";\n"]);return P=function(){return e},e}var z=g.c.div(P(),(function(e){return e.color})),F=function(e){var t=e.text,n=e.color;return console.log(n),r.a.createElement(z,{color:n},t)};function U(){var e=Object(m.a)(["\n    line-height:1.5;\n    \n"]);return U=function(){return e},e}function A(){var e=Object(m.a)(["\n    margin-bottom:16px;\n    position:relative;\n    &:hover{\n        ","{\n           opacity :0.3;\n        }\n        ","{\n            opacity :1;\n        }\n    }\n"]);return A=function(){return e},e}function D(){var e=Object(m.a)(["\n    position:absolute;\n    right:8px;\n    bottom:8px;\n    opacity:0;\n    transition:   0.2s ease-in-out;\n"]);return D=function(){return e},e}function I(){var e=Object(m.a)(["\n    height:180px;\n    background:url(",") center;\n    background-size:cover;\n    border-radius:4px;\n    z-index:-1;\n    transition:opacity 0.2s ease-in-out;\n"]);return I=function(){return e},e}var B=g.c.div(I(),(function(e){return e.imageurl})),V=g.c.div(D()),q=g.c.div(A(),B,V),J=g.c.div(U()),L=function(e){var t=e.id,a=e.imageurl,i=e.title,o=e.rating,c=e.year,l=e.isMovie,u=void 0!==l&&l;return r.a.createElement(p.b,{to:u?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement("div",null,r.a.createElement(q,{className:"font-12 mb-2"},r.a.createElement(B,{imageurl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(27)}),r.a.createElement(V,null,r.a.createElement("span",{className:"mr-1",rating:o,role:"img","aria-label":o},"\u2b50"),r.a.createElement("span",{className:"text-white d-inlin-block"},o,"/10"))),r.a.createElement(J,{className:"text-white font-14 mb-1"},i.length>18?"".concat(i.substring(0,18),"..."):i),r.a.createElement("div",{className:"text-gray font-12"},c)))},H=function(e){var t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error;return e.loading?r.a.createElement(C,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(S,{className:"m-2",title:"Now Playing"},t.map((function(e){return r.a.createElement(L,{key:e.id,id:e.id,imageurl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(S,{title:"Upcoming Movies"},n.map((function(e){return r.a.createElement(L,{key:e.id,id:e.id,imageurl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))),a&&a.length>0&&r.a.createElement(S,{title:"Popular"},a.map((function(e){return r.a.createElement(L,{key:e.id,id:e.id,imageurl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))),i&&r.a.createElement(F,{text:"error",color:"#f77272"}))},G=n(37),K=n.n(G).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"5a8ffe25b0883fc6400dbb93bf2a7179",language:"en-US"}}),Q=function(){return K.get("movie/now_playing")},W=function(){return K.get("movie/upcoming")},X=function(){return K.get("movie/popular")},Y=function(e){return K.get("movie/".concat(e),{params:{append_to_response:"videos"}})},Z=function(e){return K.get("search/movie",{params:{query:encodeURIComponent(e)}})},$=function(){return K.get("tv/top_rated")},ee=function(){return K.get("tv/popular")},te=function(){return K.get("tv/airing_today")},ne=function(e){return K.get("tv/".concat(e),{params:{append_to_response:"videos"}})},ae=function(e){return K.get("search/tv",{params:{query:encodeURIComponent(e)}})},re=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(_.a)(x.a.mark((function e(){var t,n,a,r,i,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q();case 3:return t=e.sent,n=t.data.results,e.next=7,W();case 7:return a=e.sent,r=a.data.results,e.next=11,X();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,o=e.loading;return r.a.createElement(H,{nowPlaying:t,upcoming:n,popular:a,error:i,loading:o})}}]),n}(r.a.Component),ie=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.error;return e.loading?r.a.createElement(C,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(S,{title:"Top Rated Shows"},t.map((function(e){return r.a.createElement(L,{key:e.id,id:e.id,imageurl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(S,{title:"Popular Shows"},n.map((function(e){return r.a.createElement(L,{key:e.id,id:e.id,imageurl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(S,{title:"Airing Today"},a.map((function(e){return r.a.createElement(L,{key:e.id,id:e.id,imageurl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),i&&r.a.createElement(F,{text:"error"}))},oe=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(_.a)(x.a.mark((function e(){var t,n,a,r,i,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$();case 3:return t=e.sent,n=t.data.results,console.log(n),e.next=8,ee();case 8:return a=e.sent,r=a.data.results,e.next=12,te();case 12:i=e.sent,o=i.data.results,this.setState({topRated:n,popular:r,airingToday:o}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),this.setState({error:"Can't find TV information"});case 20:return e.prev=20,this.setState({loading:!1}),e.finish(20);case 23:case"end":return e.stop()}}),e,this,[[0,17,20,23]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.error,o=e.loading;return console.log(t),r.a.createElement(ie,{topRated:t,popular:n,airingToday:a,error:i,loading:o})}}]),n}(r.a.Component);function ce(){var e=Object(m.a)(["\n    width:100% !important;\n    all: unset;\n    font-size:24px;\n"]);return ce=function(){return e},e}function le(){var e=Object(m.a)(["\n    width:100%;\n"]);return le=function(){return e},e}var ue=g.c.form(le()),se=g.c.input(ce()),me=function(e){var t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.error,o=e.loading,c=e.handleSubmit,l=e.updateTerm;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,{onSubmit:c,className:"p-4 mb-5"},r.a.createElement(se,{type:"text",placeholder:"Search Movies or TV Shows...",value:a,onChange:l})),o?r.a.createElement(C,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(S,{title:"Movie Results"},t.map((function(e){return r.a.createElement(L,{key:e.id,id:e.id,imageurl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(S,{title:"TV Show Results"},n.map((function(e){return r.a.createElement(L,{key:e.id,id:e.id,imageurl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),i&&r.a.createElement(F,{text:"error",color:"#f77272"}),t&&n&&0===t.length&&0===n.length&&r.a.createElement(F,{text:"Nothing found",color:"#f77272"})))},pe=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,notFound:null,loading:!1},e.handleSubmit=function(t){""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(_.a)(x.a.mark((function t(){var n,a,r,i,o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,t.prev=1,e.setState({loading:!0}),t.next=5,Z(n);case 5:return a=t.sent,r=a.data.results,t.next=9,ae(n);case 9:i=t.sent,o=i.data.results,e.setState({movieResults:r,tvResults:o}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),e.setState({error:"Can't find results "});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[1,14,17,20]])}))),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.handleSubmit()}},{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.error,o=e.loading;return r.a.createElement(me,{movieResults:t,tvResults:n,searchTerm:a,error:i,loading:o,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(r.a.Component);function de(){var e=Object(m.a)(["\n    position:absolute;\n    top:0px;\n    width:100%;\n    height: 100%;\n    background:url(",") center;\n    background-size:cover;\n    z-index:-1;\n    filter: blur(3px);\n    opacity: 0.5;\n"]);return de=function(){return e},e}function ge(){var e=Object(m.a)(["\n    width:50%;\n    line-height:1.5;\n    opacity:.6;\n"]);return ge=function(){return e},e}function ve(){var e=Object(m.a)(["\n    padding:0 4px;\n    display:inline-block;\n"]);return ve=function(){return e},e}function fe(){var e=Object(m.a)(["\n    width: 30%;\n    min-width:320px;\n    background:url(",") center;\n    border-radius:4px;\n"]);return fe=function(){return e},e}function he(){var e=Object(m.a)(["\n    padding:24px 48px;\n    display: flex;\n    align-item:center;\n    height:100%;\n"]);return he=function(){return e},e}function be(){var e=Object(m.a)(["\n   \n"]);return be=function(){return e},e}var Ee=g.c.div(be()),ye=g.c.div(he()),xe=g.c.div(fe(),(function(e){return e.poster})),_e=g.c.span(ve()),je=g.c.div(ge()),Oe=g.c.div(de(),(function(e){return e.backdrop})),we=function(e){var t=e.result,a=(e.error,e.loading);return console.log({result:t}),a?r.a.createElement(C,null):r.a.createElement(Ee,{className:"h-100 w-100"},r.a.createElement(Oe,{backdrop:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)},"\ubc30\uacbd"),r.a.createElement(ye,null,r.a.createElement(xe,{poster:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(27)}),r.a.createElement("div",{className:"text-white ml-3"},r.a.createElement("div",{class:"h2 mb-4"},t.original_title?t.original_title:t.original_name),r.a.createElement("div",{class:"font-14 mb-2"},t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4),r.a.createElement(_e,null,"\u2219"),t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))),r.a.createElement(je,{className:"font-12"},t.overview))))},ke=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;Object(c.a)(this,n),a=t.call(this,e);var r=e.location.pathname;return a.state={result:null,error:null,loading:!0,isMovie:r.includes("/movie/")},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(_.a)(x.a.mark((function e(){var t,n,a,r,i,o,c,l;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=parseInt(n),i=this.state.isMovie,isNaN(r)&&a("/"),o=null,e.prev=5,!i){e.next=13;break}return e.next=9,Y(r);case 9:c=e.sent,o=c.data,e.next=17;break;case 13:return e.next=15,ne(r);case 15:l=e.sent,o=l.data;case 17:this.setState({result:o}),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),this.setState({error:"Can't not find result"});case 23:return e.prev=23,this.setState({loading:!1,result:o}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[5,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading;return r.a.createElement(we,{result:t,error:n,loading:a})}}]),n}(r.a.Component);function Se(){var e=Object(m.a)(["\n    padding-top:52px;\n    height:calc(100%);\n"]);return Se=function(){return e},e}var Ne=g.c.div(Se()),Te=function(){return r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(d.d,null,r.a.createElement(Ne,null,r.a.createElement(d.b,{path:"/",exact:!0,component:re}),r.a.createElement(d.b,{path:"/tv",exact:!0,component:oe}),r.a.createElement(d.b,{path:"/search",component:pe}),r.a.createElement(d.b,{path:"/movie/:id",component:ke}),r.a.createElement(d.b,{path:"/show/:id",component:ke})),r.a.createElement(d.a,{from:"*",to:"/"}))))},Re=n(38);function Me(){var e=Object(m.a)(["\n    ",";\n    a{\n        text-decoration:none !important;\n    }\n    *{\n        box-sizing:border-box;\n    }\n"]);return Me=function(){return e},e}var Ce=Object(g.a)(Me(),Re.a),Pe=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Te,null),r.a.createElement(Ce,null))}}]),n}(a.Component);n(69);o.a.render(r.a.createElement(Pe,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.1b507e90.chunk.js.map