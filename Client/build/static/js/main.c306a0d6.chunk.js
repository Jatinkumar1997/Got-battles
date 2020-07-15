(this["webpackJsonpgot-battles"]=this["webpackJsonpgot-battles"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(17),r=a.n(c),o=(a(23),a(2)),s=a(3),i=a(5),m=a(4),u=a(6),d=a.n(u);function p(){return l.a.createElement("div",{className:"card-panel teal lighten-2"},l.a.createElement("h1",null,"Game Of Thrones - Battlegroud"))}function h(){return l.a.createElement("footer",{className:"page-footer"},"Developed By Jatin Kumar")}a(16);var v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e){e.battless.length!==this.props.battless&&this.render()}},{key:"render",value:function(){var e=this.props.battless.map((function(e){return l.a.createElement("div",{key:e._id,className:"row"},l.a.createElement("div",{className:"col s12 m12"},l.a.createElement("table",{className:"centered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name: ",e.name),l.a.createElement("th",null,"Location: ",e.location),l.a.createElement("th",null,"Battle Type: ",e.battle_type))))),l.a.createElement("div",{className:"col s12 m6"},l.a.createElement("div",{className:"card "+("win"===e.attacker_outcome?"green":"red")+" darken-0"},l.a.createElement("div",{className:"card-content white-text"},l.a.createElement("span",{className:"card-title"},e.attacker_king)))),l.a.createElement("div",{className:"col s12 m6"},l.a.createElement("div",{className:"card "+("loss"===e.attacker_outcome?"green":"red")+" darken-0"},l.a.createElement("div",{className:"card-content white-text"},l.a.createElement("span",{className:"card-title"},e.defender_king)))),l.a.createElement("div",{className:"col s12 m12"},""!==e.note?l.a.createElement("div",{className:"card-panel teal lighten-2"},e.note):""))}));return l.a.createElement("div",null,e)}}]),a}(l.a.Component),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).sendStates=function(e){e.preventDefault(),n.props.onSubmit(n.state)},n.state={king:"",location:"",type:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12"},l.a.createElement("div",{className:"row"},l.a.createElement("h5",null,"Filter Results By:"),l.a.createElement("div",{className:"input-field col s3"},l.a.createElement("input",{type:"text",value:this.state.king,id:"king",onChange:function(t){e.setState({king:t.target.value})},className:"autocomplete"}),l.a.createElement("label",{htmlFor:"autocomplete-input"},"King")),l.a.createElement("div",{className:"input-field col s3"},l.a.createElement("input",{type:"text",value:this.state.location,id:"location",onChange:function(t){e.setState({location:t.target.value})},className:"autocomplete"}),l.a.createElement("label",{htmlFor:"autocomplete-input"},"Location")),l.a.createElement("div",{className:"input-field col s3"},l.a.createElement("input",{type:"text",value:this.state.type,id:"type",onChange:function(t){e.setState({type:t.target.value})},className:"autocomplete"}),l.a.createElement("label",{htmlFor:"autocomplete-input"},"Type of Battle")),l.a.createElement("div",{className:"input-field col s3"},l.a.createElement("button",{onClick:this.sendStates,className:"btn waves-effect waves-light",type:"submit",name:"action"},"Find Battles")))))}}]),a}(n.Component);function f(e){return l.a.createElement("div",{className:"col s6"},l.a.createElement("h3",null,"Total Battles Fought: ",e.battlesCount))}var b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).submitHandler=function(e){var t={};""!==e.king&&(t.king=e.king.trim()),""!==e.location&&(t.location=e.location.trim()),""!==e.type&&(t.type=e.type.trim()),d.a.get("/search",{params:t}).then((function(e){return n.setState({battles:e.data})})).catch((function(e){return console.error(e)}))},n.state={battles:[],battlesCount:0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/list").then((function(t){return e.setState({battles:t.data})})).catch((function(e){return console.error(e)})),d.a.get("/count").then((function(t){return e.setState({battlesCount:t.data.battlesCount})})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(f,{battlesCount:this.state.battlesCount}),l.a.createElement(E,{onSubmit:this.submitHandler}),l.a.createElement(v,{battless:this.state.battles}),l.a.createElement(h,null))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.c306a0d6.chunk.js.map