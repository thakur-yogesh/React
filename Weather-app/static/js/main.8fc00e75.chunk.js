(this.webpackJsonpweather_detector=this.webpackJsonpweather_detector||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),o=n(5),s=n(6),c=n(0),i=n.n(c),l=n(4),u=n.n(l),m=(n(12),{summer:{text:"let's hit the beach",iconName:"sun"},winter:{text:"Get some coffee",iconName:"snowflake"}}),h=function(e,t){return t>2&&t<9?e>0?"summer":"winter":e>0?"winter":"summer"},d=function(e){var t=h(e.Lat,(new Date).getMonth()),n=m[t],a=(n.text,n.iconName);return i.a.createElement("div",{className:"season-display ".concat(t)},i.a.createElement("i",{className:"icon-left ".concat(a," icon massive")}),i.a.createElement("h1",null,"winter"===t?"Wow!! it's winter\n":"Yuck it's Summer\n"),i.a.createElement("br",null),i.a.createElement("h1",null,"winter"===t?"\nGet some coffee":"\nLet's hit the beach"),i.a.createElement("i",{className:"icon-right ".concat(a," icon massive")}))},f=function(e){return i.a.createElement("div",{className:"ui active dimmer"},i.a.createElement("div",{className:"ui big text loader"},e.message))};f.defaultProps={message:"loading!!! "};var g=f,v=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={Lat:null,errorMsg:""},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("my component get rendered"),window.navigator.geolocation.getCurrentPosition((function(t){return e.setState({Lat:t.coords.latitude})}),(function(t){return e.setState({errorMsg:t.message})}))}},{key:"renderContent",value:function(){return this.state.errorMsg&&!this.state.Lat?i.a.createElement("div",null,"Error:",this.state.errorMsg):!this.state.errorMsg&&this.state.Lat?i.a.createElement(d,{lat:this.state.Lat}):i.a.createElement(g,{message:"Please allow the location"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"border red"},this.renderContent())}}]),n}(i.a.Component);u.a.render(i.a.createElement(v,null),document.querySelector("#root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.8fc00e75.chunk.js.map