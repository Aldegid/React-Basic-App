(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t(38)},19:function(e,a,t){},22:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),l=t.n(c),i=(t(19),t(1)),s=t.n(i),o=t(2),m=t(7),u=t(8),d=t(11),f=t(9),p=t(12),h=(t(22),function(){var e=Object(o.a)(s.a.mark(function e(a){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()),v=t(10),E=function(e){return r.a.createElement(v.Spring,{from:{transform:"scale(0)"},to:{transform:"scale(1)"},enter:{opacity:0},leave:{opacity:1},config:{duration:200,delay:200}},function(a){return r.a.createElement("div",{key:e.id,className:"user",style:a},r.a.createElement("div",{className:"card__main"},r.a.createElement("img",{className:"card-img-top",src:e.image,alt:e.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card__header"},e.name),r.a.createElement("p",{className:"list-item"},e.gender),r.a.createElement("p",{className:"list-item"},e.species))))})},N=t(4),b=(t(37),function(e){var a=e.handleSort,t=e.handleSearch,n=e.handleFilter;return r.a.createElement("form",{className:"form__main",onChange:function(e){var t=e.target;t.checked&&"sortOrder"===t.name&&a(Object(N.a)({},t.name,t.value)),t.checked&&"filterSpecies"===t.name&&n(Object(N.a)({},t.name,t.value))}},r.a.createElement("div",{className:"radio-buttons"},r.a.createElement("div",{className:"sort-asc-desc"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"sortOrder",id:"inlineRadio1",value:"asc"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inlineRadio1"},"Sort by Asc")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"sortOrder",id:"inlineRadio2",value:"desc"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inlineRadio2"},"Sort by Desc"))),r.a.createElement("div",{className:"sort-asc-desc"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"filterSpecies",id:"inlineRadio3",value:"Human"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inlineRadio3"},"Filter by Human")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"filterSpecies",id:"inlineRadio4",value:"Alien"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"inlineRadio4"},"Filter by Alien")))),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"change",placeholder:"search by name... ","aria-label":"Recipient's username","aria-describedby":"button-addon2",onChange:function(e){var a=e.target,n="change"===a.name?a.value:"";t({searchInputValue:n})}})))}),g=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={list:null,filterSpecies:null,sortOrder:null,isLoaded:!1,searchInputValue:null,notFound:null,currentPageUrl:"https://rickandmortyapi.com/api/character",nextPageUrl:"",prevPageUrl:""},t.handleClickNext=function(){h(t.state.nextPageUrl).then(function(e){t.setState({list:e.results,nextPageUrl:e.info.next,prevPageUrl:e.info.prev})})},t.handleClickPrev=function(){h(t.state.prevPageUrl).then(function(e){t.setState({list:e.results,nextPageUrl:e.info.next,prevPageUrl:e.info.prev})})},t.performSearch=function(e){var a=e.searchInputValue;t.setState({searchInputValue:a})},t.performSort=function(e){var a=e.sortOrder;t.setState({sortOrder:a})},t.performFilter=function(e){var a=e.filterSpecies;t.setState({filterSpecies:a})},t.sortPersons=function(e,a){return"desc"===a?e.sort(function(e,a){return e.name<a.name?1:-1}):e.sort(function(e,a){return e.name<a.name?-1:1})},t.filterByName=function(e,a){return e.filter(function(e){return e.name.includes(a)})},t.filterBySpecies=function(e,a){return e.filter(function(e){return e.species===a})},t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(this.state.currentPageUrl);case 2:a=e.sent,this.setState({list:a.results,data:a,nextPageUrl:a.info.next,isLoaded:!0});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.list,t=e.isLoaded,n=e.notFound,c=e.searchInputValue,l=e.sortOrder,i=e.filterSpecies,s=e.prevPageUrl,o=e.nextPageUrl,m=a;return l&&(m=this.sortPersons(a,l)),i&&(m=this.filterBySpecies(a,i)),c&&(m=this.filterByName(a,c)),t?n?r.a.createElement("div",{className:"preloader"},r.a.createElement("div",{className:"pulse"})):r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"main-section"},r.a.createElement("aside",{className:"filter"},r.a.createElement("div",{className:"buttons-group"},r.a.createElement("button",{className:"button",onClick:this.handleClickPrev,disabled:!s},"\u2190 Prev Page"),r.a.createElement("button",{className:"button",onClick:this.handleClickNext,disabled:!o},"Next Page \u2192")),r.a.createElement(b,{handleSearch:this.performSearch,handleSort:this.performSort,handleFilter:this.performFilter})),r.a.createElement("div",{className:"users-wrap"},r.a.createElement("div",{className:"users"},m.map(function(e){return r.a.createElement(E,Object.assign({key:e.id},e))})),0===m.length?r.a.createElement("div",{className:"not-found"},"Oops, Nothing found"," ",r.a.createElement("span",{role:"img","aria-label":"img"},"\ud83d\ude31")):null))):r.a.createElement("div",{className:"preloader"},r.a.createElement("div",{className:"pulse"}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.3fb357c7.chunk.js.map