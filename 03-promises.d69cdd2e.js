function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},l={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){l[e]=t},t.parcelRequired7c6=n);var r=n("7Y9D8");const a=document.querySelector("form"),u=document.querySelector('input[name="delay"]'),i=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]'),c=document.querySelector("button");c.disabled=!0,a.addEventListener("input",(e=>{localStorage.setItem("position",u.value),localStorage.setItem("delay",i.value),localStorage.setItem("amount",d.value),""===i.value||""==i.value||""==d.value?c.disabled=!0:c.disabled=!1})),c.addEventListener("click",(function(t){t.preventDefault();let o=localStorage.getItem("position"),l=localStorage.getItem("delay"),n=localStorage.getItem("amount"),u=0;setTimeout((()=>{setInterval((()=>{u+=1,u<=n&&function(t,o){return new Promise(((l,n)=>{Math.random()>.3?l(e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)):n(e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`))}))}(o,l).then(((e,t)=>{})).catch(((e,t)=>{}))}),l)}),o-l),c.disabled=!0,localStorage.clear(),a.reset()}));
//# sourceMappingURL=03-promises.d69cdd2e.js.map