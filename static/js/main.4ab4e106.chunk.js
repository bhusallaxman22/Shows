(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(23)},16:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),c=(a(16),a(17),a(1)),i=a(2),s=a(4),m=a(3),u=a(5),h=a(8),d=a.n(h),f=a(9),b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={rating:0},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onStarClick",value:function(e,t,a){this.setState({rating:e})}},{key:"App",value:function(){Object(f.a)(this.state.rating,"rate")}},{key:"render",value:function(){var e=this.state.rating;return r.a.createElement("div",null,r.a.createElement("h2",null,"How Did you Like this Show?"),r.a.createElement(d.a,{name:"rate1",starCount:10,value:e,onStarClick:this.onStarClick.bind(this)}),r.a.createElement("br",null),r.a.createElement("span",null," ",e," stars"))}}]),t}(r.a.Component),v=function(e){var t=e.name,a=e.id,n=e.No_Of_Current_Seasons,o=e.Status,l=e.Plot,c=e.imdb,i=e.link,s=e.tomato;return"".concat(a)%2!==0?r.a.createElement("div",{title:"".concat(t),className:"bg-green dib br4 pa3 ma2 hover bw2 shadow=8"},r.a.createElement("div",{className:"flip-container"},r.a.createElement("div",{className:"flipper"},r.a.createElement("div",{className:"front"},r.a.createElement("img",{src:"./images/".concat(a,".jpg"),alt:"shows"}),r.a.createElement("div",null,r.a.createElement("h2",{className:"name navy"},a,".",t),r.a.createElement("p",null,"No. Of Current Seasons: ",n),r.a.createElement("p",null,"Runtime Status: ",o))),r.a.createElement("div",{className:"back"},r.a.createElement("p",{className:"red"},"Plot:"),r.a.createElement("p",{className:"bg-gray near-black br3"}," ",l),r.a.createElement("p",{className:"navy"},"IMDB: ",c),r.a.createElement("span",{role:"img",className:"hover","aria-label":"tomato"},"\ud83c\udf45: ",s),r.a.createElement(b,null),r.a.createElement("a",{href:"".concat(i),className:"f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-hot-pink"},"Link"))))):r.a.createElement("div",{title:"".concat(t),className:"bg-purple dib br3 pa3 ma2 hover bw2 shadow=8"},r.a.createElement("div",{className:"flip-container"},r.a.createElement("div",{className:"flipper"},r.a.createElement("div",{className:"front"},r.a.createElement("img",{src:"./images/".concat(a,".jpg"),alt:"shows"}),r.a.createElement("div",null,r.a.createElement("h2",{className:"name navy"},a,".",t),r.a.createElement("p",null,"No. Of Current Seasons: ",n),r.a.createElement("p",null,"Runtime Status: ",o))),r.a.createElement("div",{className:"back"},r.a.createElement("p",{className:"red"},"Plot:"),r.a.createElement("p",{className:"bg-gold br3"}," ",l),r.a.createElement("p",{className:"light-yellow"},"IMDB: ",c),r.a.createElement("span",{role:"img",className:"hover","aria-label":"tomato"},"\ud83c\udf45: ",s),r.a.createElement(b,null),r.a.createElement("a",{href:"".concat(i),className:"f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-hot-pink"},"Link")))))},p=function(e){var t=e.Shows;return r.a.createElement("div",null,t.map(function(e,a){return r.a.createElement(v,{key:a,id:t[a].id,name:t[a].name,No_Of_Current_Seasons:t[a].No_Of_Current_Seasons,Plot:t[a].Plot,Status:t[a].Status,imdb:t[a].imdb,link:t[a].link,tomato:t[a].tomato})}))},g=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"tc"},r.a.createElement("input",{className:"pa3 ba b--yellow bg-lightest-blue",type:"search",placeholder:"Search Shows",onChange:t}))},w=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"2px solid black",height:"1000px"}},e.children)},E=function(){return r.a.createElement("a",{href:"https://github.com/bhusalnaresh/Shows",className:"github-ribbon hover dim red "},"View on GitHub")},S=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={Shows:[],searchfield:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/bhusallaxman22/showslistJson/master/Shows.json").then(function(e){return e.json()}).then(function(t){e.setState({Shows:t})})}},{key:"render",value:function(){var e=this.state,t=e.Shows,a=e.searchfield,n=t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement(E,null),r.a.createElement("h1",{className:"glitch orange","data-text":"SHOWSLIST"},"SHOWSLIST"),r.a.createElement("div",{className:"container"},r.a.createElement(g,{searchChange:this.onSearchChange}),r.a.createElement(w,null,r.a.createElement(p,{Shows:n})))):r.a.createElement("h1",{className:"tr bg-gray dib br3  hover bw2 shadow=8 green"},"LOADING")}}]),t}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(22);l.a.render(r.a.createElement(S,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Shows",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Shows","/service-worker.js");N?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):k(t,e)})}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.4ab4e106.chunk.js.map