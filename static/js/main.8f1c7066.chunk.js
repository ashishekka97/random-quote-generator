(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,o){e.exports=o(27)},23:function(e,t,o){},24:function(e,t,o){},27:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o.n(a),r=o(14),c=o.n(r),i=(o(22),o(23),o(7)),l=o(8),u=o(11),s=o(9),h=o(10),m=(o(24),o(6)),d=o(29),f=o(30),g=o(31),p=o(32),E=o(33),O=o(34),w=o(35),b=o(37),y=o(36),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).END_POINT="https://quota.glitch.me/random",e.COLORS=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],e.state={quote:{text:"",author:""},hasQuote:!1,color:"white"},e.getRandomQuote=e.getRandomQuote.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getRandomQuote()}},{key:"getRandomQuote",value:function(e){var t=this;fetch(this.END_POINT).then(function(e){return e.json()}).then(function(e){if(console.log(e),e.quoteText){var o=t.state.quote;o.text=e.quoteText,o.author=e.quoteAuthor,t.setState({quote:o,color:Math.floor(Math.random()*t.COLORS.length)},function(){!1===t.state.hasQuote&&t.setState({hasQuote:!0})}),console.log(t.state.color)}else console.log("Error 404! Quote not found")})}},{key:"renderQuote",value:function(){var e=this.state.quote,t=e.text,o=e.author;return n.a.createElement(a.Fragment,null,n.a.createElement("h1",{style:{color:"white",paddingTop:"30vh"}},"Random Quote Generator"),n.a.createElement(d.a,{style:{paddimg:0,margin:0}},n.a.createElement(f.a,{sm:"4"}),n.a.createElement(f.a,{sm:"4"},n.a.createElement(g.a,{id:"quote-box"},n.a.createElement(p.a,null,n.a.createElement(E.a,{id:"text",style:{fontSize:25,color:this.COLORS[this.state.color]}},t),n.a.createElement(O.a,{id:"author",style:{color:this.COLORS[this.state.color]}},"- ",o)),n.a.createElement(w.a,null,n.a.createElement(b.a,{outline:!0,color:"primary",onClick:this.getRandomQuote,id:"new-quote",style:{marginRight:5}},"New Quote!"),n.a.createElement("a",{href:"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"'+this.state.quote.text+'" -'+this.state.quote.author),id:"tweet-quote"},n.a.createElement(b.a,{outline:!0,style:{marginLeft:5}},"Tweet This!"))))),n.a.createElement(f.a,{sm:"4"})))}},{key:"render",value:function(){return n.a.createElement("div",{style:{backgroundColor:this.COLORS[this.state.color],height:"100vh"}},!0===this.state.hasQuote?this.renderQuote():n.a.createElement(y.a,{type:"grow",color:"primary",style:{width:"3rem",height:"3rem",position:"fixed",top:"50%",left:"50%"}}))}}]),t}(a.Component),q=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(v,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.8f1c7066.chunk.js.map