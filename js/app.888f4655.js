(function(e){function t(t){for(var u,s,i=t[0],r=t[1],l=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(u in r)Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u]);a&&a(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],u=!0,i=1;i<n.length;i++){var r=n[i];0!==o[r]&&(u=!1)}u&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var u={},o={app:0},c=[];function s(t){if(u[t])return u[t].exports;var n=u[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=u,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)s.d(n,u,function(t){return e[t]}.bind(null,u));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/test-task-vue-simon/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var a=r;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a7c":function(e,t,n){e.exports=n.p+"media/sounds_1.d2c4a2c4.mp3"},"4f78":function(e,t,n){"use strict";n("bf9c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var u=n("7a23"),o={class:"app"},c=Object(u["d"])("h1",{class:"app__main-title"},"Саймон говорит",-1),s={class:"app__menu"},i=Object(u["d"])("h2",null,"Уровень сложности",-1),r=Object(u["d"])("span",null,"Легкий",-1),l=Object(u["d"])("span",null,"Средний",-1),a=Object(u["d"])("span",null,"Сложный",-1);function d(e,t,n,d,p,f){return Object(u["e"])(),Object(u["c"])("div",o,[c,Object(u["d"])("fieldset",{disabled:p.isButtonsDisabled,class:"app__game"},[(Object(u["e"])(!0),Object(u["c"])(u["a"],null,Object(u["f"])(p.arrayOfButtons,(function(e,t){return Object(u["e"])(),Object(u["c"])("button",{key:e,onClick:function(e){return f.checkButton(t+1)},class:["app__btn","app__btn_color_"+e,p.activeBtn===t+1?"app__btn_active":""]},null,10,["onClick"])})),128))],8,["disabled"]),Object(u["d"])("div",s,[Object(u["d"])("div",null,[Object(u["d"])("h2",null,"Раунд "+Object(u["g"])(p.sequenceOfButtons.length),1),Object(u["d"])("button",{onClick:t[1]||(t[1]=function(){return f.start&&f.start.apply(f,arguments)}),class:"app__start"},"Старт"),Object(u["j"])(Object(u["d"])("p",null," Извини, ты проиграл(а) на "+Object(u["g"])(p.sequenceOfButtons.length)+" раунде ",513),[[u["i"],p.isLose]])]),Object(u["d"])("div",null,[i,Object(u["d"])("div",null,[Object(u["j"])(Object(u["d"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return p.currentLevel=e}),value:"easy",type:"radio",name:"complexity",checked:""},null,512),[[u["h"],p.currentLevel]]),r]),Object(u["d"])("div",null,[Object(u["j"])(Object(u["d"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return p.currentLevel=e}),value:"middle",type:"radio",name:"complexity"},null,512),[[u["h"],p.currentLevel]]),l]),Object(u["d"])("div",null,[Object(u["j"])(Object(u["d"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return p.currentLevel=e}),value:"complicated",type:"radio",name:"complexity"},null,512),[[u["h"],p.currentLevel]]),a])])])])}var p=new Audio(n("0a7c")),f=new Audio(n("7504")),h=new Audio(n("80bd")),b=new Audio(n("eb63")),O={name:"App",data:function(){return{arrayOfButtons:["blue","red","yellow","green"],sequenceOfButtons:[],currentLevel:"easy",activeBtn:0,checkedButton:0,isLose:!1,isButtonsDisabled:!0,milliseconds:{easy:1500,middle:1e3,complicated:400},sounds:{1:p,2:f,3:h,4:b}}},methods:{start:function(){this.isLose=!1,this.sequenceOfButtons=[],this.goToNextRound()},goToNextRound:function(){this.checkedButton=0,this.sequenceOfButtons.push(this.getRandomBtnNumber());var e=0;this.playTheWholeSequence(e)},playTheWholeSequence:function(e){var t=this;e<this.sequenceOfButtons.length?setTimeout((function(){var n=t.sequenceOfButtons[e];e++,t.activateButton(n),t.playTheWholeSequence(e)}),this.milliseconds[this.currentLevel]):this.isButtonsDisabled=!1},checkButton:function(e){var t=this,n=this.sequenceOfButtons[this.checkedButton];this.activateButton(n),this.sequenceOfButtons[this.checkedButton]===e?(this.checkedButton++,this.checkedButton===this.sequenceOfButtons.length&&(this.isButtonsDisabled=!0,setTimeout((function(){return t.goToNextRound()}),1e3))):(this.isLose=!0,this.isButtonsDisabled=!0)},activateButton:function(e){var t=this;this.stopTheSound(e),this.activeBtn=e,this.sounds[e].play(),setTimeout((function(){t.activeBtn=0}),.8*this.milliseconds[this.currentLevel])},stopTheSound:function(e){this.sounds[e].pause(),this.sounds[e].currentTime=0},getRandomBtnNumber:function(){return Math.floor(1+4*Math.random())}}};n("4f78");O.render=d;var v=O,m=Object(u["b"])(v);m.config.devtools=!0,m.mount("#app")},7504:function(e,t,n){e.exports=n.p+"media/sounds_2.99e50f7d.mp3"},"80bd":function(e,t,n){e.exports=n.p+"media/sounds_3.c1c96b44.mp3"},bf9c:function(e,t,n){},eb63:function(e,t,n){e.exports=n.p+"media/sounds_4.36d5a722.mp3"}});
//# sourceMappingURL=app.888f4655.js.map