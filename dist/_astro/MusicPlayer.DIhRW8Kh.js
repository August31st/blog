import{o as Ya,a as Oa,i as Xa,s as B,b as Q,e as Ne}from"./lifecycle.BUKLqami.js";import{ae as Ha,aa as Ka,aS as Ga,aT as Ja,i as Qa,u as Za,aU as tr,aV as Oe,aW as er,q as ar,aX as bt,c as rt,o as p,f as Z,a as U,p as rr,b as ir,h as o,m as L,aw as Y,g as t,aY as Ue,d as ut,s as d,e as n,r as i,v as nr,t as Ct}from"./utils.C6YlWNI1.js";import{a as sr,s as K}from"./render.ekQlN2yD.js";import{i as z}from"./if.AUn_gUq8.js";import{e as or,i as lr}from"./each.BvHDNfc0.js";import{b as qe}from"./this.C6oz2rIz.js";import{I as m}from"./Icon.CmzPY910.js";import{m as At}from"./config.C8He3-R0.js";import{I as cr}from"./zh_TW.12WzXWON.js";import{i as dr}from"./translation.8cqKpdKR.js";import"./props.BdyWAK-0.js";const ur=()=>performance.now(),G={tick:c=>requestAnimationFrame(c),now:()=>ur(),tasks:new Set};function Xe(){const c=G.now();G.tasks.forEach(s=>{s.c(c)||(G.tasks.delete(s),s.f())}),G.tasks.size!==0&&G.tick(Xe)}function vr(c){let s;return G.tasks.size===0&&G.tick(Xe),{promise:new Promise(_=>{G.tasks.add(s={c,f:_})}),abort(){G.tasks.delete(s)}}}function Dt(c,s){Oe(()=>{c.dispatchEvent(new CustomEvent(s))})}function fr(c){if(c==="float")return"cssFloat";if(c==="offset")return"cssOffset";if(c.startsWith("--"))return c;const s=c.split("-");return s.length===1?s[0]:s[0]+s.slice(1).map(_=>_[0].toUpperCase()+_.slice(1)).join("")}function Ve(c){const s={},_=c.split(";");for(const M of _){const[D,T]=M.split(":");if(!D||T===void 0)break;const v=fr(D.trim());s[v]=T.trim()}return s}const pr=c=>c;function mr(c,s,_,M){var D=(c&tr)!==0,T="both",v,w=s.inert,C=s.style.overflow,g,h;function S(){return Oe(()=>v??=_()(s,M?.()??{},{direction:T}))}var A={is_global:D,in(){s.inert=w,Dt(s,"introstart"),g=re(s,S(),h,1,()=>{Dt(s,"introend"),g?.abort(),g=v=void 0,s.style.overflow=C})},out(k){s.inert=!0,Dt(s,"outrostart"),h=re(s,S(),g,0,()=>{Dt(s,"outroend"),k?.()})},stop:()=>{g?.abort(),h?.abort()}},W=Ha;if((W.nodes.t??=[]).push(A),sr){var f=D;if(!f){for(var u=W.parent;u&&(u.f&Ka)!==0;)for(;(u=u.parent)&&(u.f&Ga)===0;);f=!u||(u.f&Ja)!==0}f&&Qa(()=>{Za(()=>A.in())})}}function re(c,s,_,M,D){var T=M===1;if(er(s)){var v,w=!1;return ar(()=>{if(!w){var k=s({direction:T?"in":"out"});v=re(c,k,_,M,D)}}),{abort:()=>{w=!0,v?.abort()},deactivate:()=>v.deactivate(),reset:()=>v.reset(),t:()=>v.t()}}if(_?.deactivate(),!s?.duration)return D(),{abort:bt,deactivate:bt,reset:bt,t:()=>M};const{delay:C=0,css:g,tick:h,easing:S=pr}=s;var A=[];if(T&&_===void 0&&(h&&h(0,1),g)){var W=Ve(g(0,1));A.push(W,W)}var f=()=>1-M,u=c.animate(A,{duration:C,fill:"forwards"});return u.onfinish=()=>{u.cancel();var k=_?.t()??1-M;_?.abort();var F=M-k,X=s.duration*Math.abs(F),$t=[];if(X>0){var I=!1;if(g)for(var x=Math.ceil(X/16.666666666666668),E=0;E<=x;E+=1){var a=k+F*S(E/x),J=Ve(g(a,1-a));$t.push(J),I||=J.overflow==="hidden"}I&&(c.style.overflow="hidden"),f=()=>{var V=u.currentTime;return k+F*S(V/X)},h&&vr(()=>{if(u.playState!=="running")return!1;var V=f();return h(V,1-V),!0})}u=c.animate($t,{duration:X,fill:"forwards"}),u.onfinish=()=>{f=()=>M,h?.(M,1-M),D()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=bt)},deactivate:()=>{D=bt},reset:()=>{M===0&&h?.(1,0)},t:()=>f()}}function Ye(c){return function(...s){var _=s[0];return _.stopPropagation(),c?.apply(this,s)}}function br(c){const s=c-1;return s*s*s+1}function gr(c,{delay:s=0,duration:_=400,easing:M=br,axis:D="y"}={}){const T=getComputedStyle(c),v=+T.opacity,w=D==="y"?"height":"width",C=parseFloat(T[w]),g=D==="y"?["top","bottom"]:["left","right"],h=g.map(F=>`${F[0].toUpperCase()}${F.slice(1)}`),S=parseFloat(T[`padding${h[0]}`]),A=parseFloat(T[`padding${h[1]}`]),W=parseFloat(T[`margin${h[0]}`]),f=parseFloat(T[`margin${h[1]}`]),u=parseFloat(T[`border${h[0]}Width`]),k=parseFloat(T[`border${h[1]}Width`]);return{delay:s,duration:_,easing:M,css:F=>`overflow: hidden;opacity: ${Math.min(F*20,1)*v};${w}: ${F*C}px;padding-${g[0]}: ${F*S}px;padding-${g[1]}: ${F*A}px;margin-${g[0]}: ${F*W}px;margin-${g[1]}: ${F*f}px;border-${g[0]}-width: ${F*u}px;border-${g[1]}-width: ${F*k}px;min-${w}: 0`}}var hr=ut('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),xr=ut('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),yr=ut('<span class="text-sm text-[var(--content-meta)]"></span>'),_r=ut('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),wr=ut('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),kr=ut(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div><div class="flex items-center gap-3"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden cursor-pointer" role="button" tabindex="0"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0 cursor-pointer" role="button" tabindex="0" aria-label="展开音乐播放器"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button title="播放列表"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div></div></div> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="收起播放器"><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function $r(c,s){ir(s,!1);let _=At.meting_api,M=At.id,D=At.server,T=At.type,v=L(!1),w=L(!1),C=L(!1),g=L(!1),h=L(0),S=L(0),A=L(.7),W=L(!1),f=L(!1),u=L(!1),k=L(0),F=L(""),X=L(!1),I=L({title:"Sample Song",artist:"Sample Artist",cover:"/blog/favicon/favicon.ico",url:"",duration:0}),x=L([]),E=L(0),a=L(),J=L(),V=L();async function He(){o(f,!0);const r=_.replace(":server",D).replace(":type",T).replace(":id",M).replace(":auth","").replace(":r",Date.now().toString());try{const P=await fetch(r);if(!P.ok)throw new Error("meting api error");const H=await P.json();o(x,H.map(N=>{let vt=N.name??N.title??"未知歌曲",wt=N.artist??N.author??"未知艺术家",R=N.duration??0;return R>1e4&&(R=Math.floor(R/1e3)),(!Number.isFinite(R)||R<=0)&&(R=0),{id:N.id,title:vt,artist:wt,cover:N.pic??"",url:N.url??"",duration:R}})),t(x).length>0&&ne(t(x)[0]),o(f,!1)}catch{Bt("Meting 歌单获取失败"),o(f,!1)}}function zt(){!t(a)||!t(I).url||(t(v)?t(a).pause():t(a).play())}function gt(){o(w,!t(w)),t(w)&&(o(g,!1),o(C,!1))}function ht(){o(C,!t(C)),t(C)&&(o(w,!1),o(g,!1))}function ie(){o(g,!t(g))}function Ke(){o(u,!t(u)),t(u)&&o(k,0)}function Ge(){o(k,(t(k)+1)%3),t(k)!==0&&o(u,!1)}function Je(){if(t(x).length<=1)return;const r=t(E)>0?t(E)-1:t(x).length-1;xt(r)}function It(){if(t(x).length<=1)return;let r;if(t(u))do r=Math.floor(Math.random()*t(x).length);while(r===t(E)&&t(x).length>1);else r=t(E)<t(x).length-1?t(E)+1:0;xt(r)}function xt(r){if(r<0||r>=t(x).length)return;const P=t(v);o(E,r),t(a)&&t(a).pause(),ne(t(x)[t(E)]),(P||!t(v))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function yt(r){return r.startsWith("http://")||r.startsWith("https://")||r.startsWith("/")?r:`/${r}`}function ne(r){!r||!t(a)||(o(I,{...r}),r.url?(o(f,!0),Y(a,t(a).currentTime=0),o(h,0),o(S,r.duration??0),t(a).removeEventListener("loadeddata",se),t(a).removeEventListener("error",le),t(a).removeEventListener("loadstart",ce),t(a).addEventListener("loadeddata",se,{once:!0}),t(a).addEventListener("error",le,{once:!0}),t(a).addEventListener("loadstart",ce,{once:!0}),Y(a,t(a).src=yt(r.url)),t(a).load()):o(f,!1))}let Rt=!1;function se(){if(o(f,!1),t(a)?.duration&&t(a).duration>1&&(o(S,Math.floor(t(a).duration)),t(x)[t(E)]&&Y(x,t(x)[t(E)].duration=t(S)),Y(I,t(I).duration=t(S))),t(v)){const r=t(a).play();r!==void 0&&r.catch(P=>{console.warn("自动播放被拦截，等待用户交互:",P),Rt=!0})}}function oe(){if(Rt&&t(a)&&t(v)){const r=t(a).play();r!==void 0&&r.then(()=>{Rt=!1}).catch(()=>{})}}function le(r){o(f,!1),Bt(`无法播放 "${t(I).title}"，正在尝试下一首...`),t(x).length>1?setTimeout(()=>It(),1e3):Bt("播放列表中没有可用的歌曲")}function ce(){}function Bt(r){o(F,r),o(X,!0),setTimeout(()=>{o(X,!1)},3e3)}function Qe(){o(X,!1)}function Ze(r){if(!t(a)||!t(J))return;const P=t(J).getBoundingClientRect(),N=(r.clientX-P.left)/P.width*t(S);Y(a,t(a).currentTime=N),o(h,N)}let _t=L(!1),Wt=!1,Nt=null,it=null;function ta(r){t(V)&&(Wt=!0,Nt=t(V).getBoundingClientRect(),de(r.clientX))}function ea(r){Wt&&(o(_t,!0),!it&&(it=requestAnimationFrame(()=>{de(r.clientX),it=null})))}function aa(){Wt=!1,o(_t,!1),Nt=null,it&&(cancelAnimationFrame(it),it=null)}function de(r){if(!t(a)||!t(V))return;const P=Nt||t(V).getBoundingClientRect(),H=Math.max(0,Math.min(1,(r-P.left)/P.width));o(A,H),Y(a,t(a).volume=t(A)),o(W,t(A)===0)}function ue(){t(a)&&(o(W,!t(W)),Y(a,t(a).muted=t(W)))}function ve(r){if(!Number.isFinite(r)||r<0)return"0:00";const P=Math.floor(r/60),H=Math.floor(r%60);return`${P}:${H.toString().padStart(2,"0")}`}function ra(){t(a)&&(t(a).addEventListener("play",()=>{o(v,!0)}),t(a).addEventListener("pause",()=>{o(v,!1)}),t(a).addEventListener("timeupdate",()=>{o(h,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(k)===1?(Y(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(k)===2||t(u)?It():o(v,!1)}),t(a).addEventListener("error",r=>{o(f,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}const fe=["click","keydown","touchstart"];Ya(()=>{o(a,new Audio),Y(a,t(a).volume=t(A)),ra(),fe.forEach(r=>{document.addEventListener(r,oe,{capture:!0})}),He()}),Oa(()=>{typeof document<"u"&&fe.forEach(r=>{document.removeEventListener(r,oe,{capture:!0})}),t(a)&&(t(a).pause(),Y(a,t(a).src=""))}),Xa();var pe=rt();p("mousemove",Ue,ea),p("mouseup",Ue,aa);var ia=Z(pe);{var na=r=>{var P=kr(),H=Z(P);{var N=e=>{var b=hr(),y=n(b),j=n(y);m(j,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var $=d(j,2),l=n($,!0);i($);var et=d($,2),Pt=n(et);m(Pt,{icon:"material-symbols:close",class:"text-lg"}),i(et),i(y),i(b),Ct(()=>K(l,t(F))),p("click",et,Qe),U(e,b)};z(H,e=>{t(X)&&e(N)})}var vt=d(H,2);let wt;var R=n(vt);let me;var sa=n(R);{var oa=e=>{m(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},la=e=>{var b=rt(),y=Z(b);{var j=l=>{var et=xr();U(l,et)},$=l=>{m(l,{icon:"material-symbols:music-note",class:"text-white text-lg"})};z(y,l=>{t(v)?l(j):l($,!1)},!0)}U(e,b)};z(sa,e=>{t(f)?e(oa):e(la,!1)})}i(R);var kt=d(R,2);let be;var ge=n(kt),nt=n(ge),Ut=n(nt);let he;var xe=d(Ut,2),ca=n(xe);{var da=e=>{m(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},ua=e=>{var b=rt(),y=Z(b);{var j=l=>{m(l,{icon:"material-symbols:pause",class:"text-white text-xl"})},$=l=>{m(l,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};z(y,l=>{t(v)?l(j):l($,!1)},!0)}U(e,b)};z(ca,e=>{t(f)?e(da):e(ua,!1)})}i(xe),i(nt);var ft=d(nt,2),qt=n(ft),va=n(qt,!0);i(qt);var ye=d(qt,2),fa=n(ye,!0);i(ye),i(ft);var _e=d(ft,2),Et=n(_e),pa=n(Et);m(pa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Et);var Vt=d(Et,2),ma=n(Vt);m(ma,{icon:"material-symbols:expand-less",class:"text-lg"}),i(Vt),i(_e),i(ge),i(kt);var Lt=d(kt,2);let we;var Yt=n(Lt),Ot=n(Yt),ke=n(Ot);let Ee;i(Ot);var Xt=d(Ot,2),Ht=n(Xt),ba=n(Ht,!0);i(Ht);var Kt=d(Ht,2),ga=n(Kt,!0);i(Kt);var Le=d(Kt,2),ha=n(Le);i(Le),i(Xt);var Se=d(Xt,2),St=n(Se),xa=n(St);m(xa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(St);var Mt=d(St,2);let Me;var ya=n(Mt);m(ya,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Mt),i(Se),i(Yt);var Gt=d(Yt,2),st=n(Gt),_a=n(st);i(st),qe(st,e=>o(J,e),()=>t(J)),i(Gt);var Jt=d(Gt,2),ot=n(Jt);let Te;var wa=n(ot);m(wa,{icon:"material-symbols:shuffle",class:"text-lg"}),i(ot);var pt=d(ot,2),ka=n(pt);m(ka,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(pt);var lt=d(pt,2);let Fe;var Ea=n(lt);{var La=e=>{m(e,{icon:"eos-icons:loading",class:"text-xl"})},Sa=e=>{var b=rt(),y=Z(b);{var j=l=>{m(l,{icon:"material-symbols:pause",class:"text-xl"})},$=l=>{m(l,{icon:"material-symbols:play-arrow",class:"text-xl"})};z(y,l=>{t(v)?l(j):l($,!1)},!0)}U(e,b)};z(Ea,e=>{t(f)?e(La):e(Sa,!1)})}i(lt);var mt=d(lt,2),Ma=n(mt);m(Ma,{icon:"material-symbols:skip-next",class:"text-xl"}),i(mt);var Tt=d(mt,2);let Pe;var Ta=n(Tt);{var Fa=e=>{m(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},Pa=e=>{var b=rt(),y=Z(b);{var j=l=>{m(l,{icon:"material-symbols:repeat",class:"text-lg"})},$=l=>{m(l,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};z(y,l=>{t(k)===2?l(j):l($,!1)},!0)}U(e,b)};z(Ta,e=>{t(k)===1?e(Fa):e(Pa,!1)})}i(Tt),i(Jt);var je=d(Jt,2),Ft=n(je),ja=n(Ft);{var Ca=e=>{m(e,{icon:"material-symbols:volume-off",class:"text-lg"})},Aa=e=>{var b=rt(),y=Z(b);{var j=l=>{m(l,{icon:"material-symbols:volume-down",class:"text-lg"})},$=l=>{m(l,{icon:"material-symbols:volume-up",class:"text-lg"})};z(y,l=>{t(A)<.5?l(j):l($,!1)},!0)}U(e,b)};z(ja,e=>{t(W)||t(A)===0?e(Ca):e(Aa,!1)})}i(Ft);var tt=d(Ft,2),Ce=n(tt);let Ae;i(tt),qe(tt,e=>o(V,e),()=>t(V));var Qt=d(tt,2),Da=n(Qt);m(Da,{icon:"material-symbols:expand-more",class:"text-lg"}),i(Qt),i(je),i(Lt);var $a=d(Lt,2);{var za=e=>{var b=wr(),y=n(b),j=n(y),$=n(j,!0);i(j);var l=d(j,2),et=n(l);m(et,{icon:"material-symbols:close",class:"text-lg"}),i(l),i(y);var Pt=d(y,2);or(Pt,5,()=>t(x),lr,(Zt,ct,O)=>{var at=_r();let De;var te=n(at),Ia=n(te);{var Ra=q=>{m(q,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Ba=q=>{var Be=rt(),Ua=Z(Be);{var qa=dt=>{m(dt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Va=dt=>{var We=yr();We.textContent=O+1,U(dt,We)};z(Ua,dt=>{O===t(E)?dt(qa):dt(Va,!1)},!0)}U(q,Be)};z(Ia,q=>{O===t(E)&&t(v)?q(Ra):q(Ba,!1)})}i(te);var ee=d(te,2),$e=n(ee);i(ee);var ze=d(ee,2),jt=n(ze);let Ie;var Wa=n(jt,!0);i(jt);var ae=d(jt,2);let Re;var Na=n(ae,!0);i(ae),i(ze),i(at),Ct(q=>{De=B(at,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,De,{"bg-[var(--btn-plain-bg)]":O===t(E),"text-[var(--primary)]":O===t(E)}),Q(at,"aria-label",`播放 ${t(ct).title??""} - ${t(ct).artist??""}`),Q($e,"src",q),Q($e,"alt",t(ct).title),Ie=B(jt,1,"font-medium truncate",null,Ie,{"text-[var(--primary)]":O===t(E),"text-90":O!==t(E)}),K(Wa,t(ct).title),Re=B(ae,1,"text-sm text-[var(--content-meta)] truncate",null,Re,{"text-[var(--primary)]":O===t(E)}),K(Na,t(ct).artist)},[()=>yt(t(ct).cover)]),p("click",at,()=>xt(O)),p("keydown",at,q=>{(q.key==="Enter"||q.key===" ")&&(q.preventDefault(),xt(O))}),U(Zt,at)}),i(Pt),i(b),Ct(Zt=>K($,Zt),[()=>dr(cr.playlist)]),p("click",l,ie),mr(3,b,()=>gr,()=>({duration:300,axis:"y"})),U(e,b)};z($a,e=>{t(g)&&e(za)})}i(vt),nr(2),Ct((e,b,y,j)=>{wt=B(vt,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,wt,{expanded:t(w),"hidden-mode":t(C)}),me=B(R,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,me,{"opacity-0":!t(C),"scale-0":!t(C),"pointer-events-none":!t(C)}),be=B(kt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,be,{"opacity-0":t(w)||t(C),"scale-95":t(w)||t(C),"pointer-events-none":t(w)||t(C)}),Q(nt,"aria-label",t(v)?"暂停":"播放"),Q(Ut,"src",e),he=B(Ut,1,"w-full h-full object-cover transition-transform duration-300",null,he,{spinning:t(v)&&!t(f),"animate-pulse":t(f)}),K(va,t(I).title),K(fa,t(I).artist),we=B(Lt,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,we,{"opacity-0":!t(w),"scale-95":!t(w),"pointer-events-none":!t(w)}),Q(ke,"src",b),Ee=B(ke,1,"w-full h-full object-cover transition-transform duration-300",null,Ee,{spinning:t(v)&&!t(f),"animate-pulse":t(f)}),K(ba,t(I).title),K(ga,t(I).artist),K(ha,`${y??""} / ${j??""}`),Me=B(Mt,1,"btn-plain w-8 h-8 rounded-lg flex items-center justify-center",null,Me,{"text-[var(--primary)]":t(g)}),Q(st,"aria-valuenow",t(S)>0?t(h)/t(S)*100:0),Ne(_a,`width: ${t(S)>0?t(h)/t(S)*100:0}%`),Te=B(ot,1,"w-10 h-10 rounded-lg",null,Te,{"btn-regular":t(u),"btn-plain":!t(u)}),ot.disabled=t(x).length<=1,pt.disabled=t(x).length<=1,Fe=B(lt,1,"btn-regular w-12 h-12 rounded-full",null,Fe,{"opacity-50":t(f)}),lt.disabled=t(f),mt.disabled=t(x).length<=1,Pe=B(Tt,1,"w-10 h-10 rounded-lg",null,Pe,{"btn-regular":t(k)>0,"btn-plain":t(k)===0}),Q(tt,"aria-valuenow",t(A)*100),Ae=B(Ce,1,"h-full bg-[var(--primary)] rounded-full transition-all",null,Ae,{"duration-100":!t(_t),"duration-0":t(_t)}),Ne(Ce,`width: ${t(A)*100}%`)},[()=>yt(t(I).cover),()=>yt(t(I).cover),()=>ve(t(h)),()=>ve(t(S))]),p("click",R,ht),p("keydown",R,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),ht())}),p("click",nt,zt),p("keydown",nt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),zt())}),p("click",ft,gt),p("keydown",ft,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),gt())}),p("click",Et,Ye(ht)),p("click",Vt,Ye(gt)),p("click",St,ht),p("click",Mt,ie),p("click",st,Ze),p("keydown",st,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(J).getBoundingClientRect();const y=.5*t(S);t(a)&&(Y(a,t(a).currentTime=y),o(h,y))}}),p("click",ot,Ke),p("click",pt,Je),p("click",lt,zt),p("click",mt,It),p("click",Tt,Ge),p("click",Ft,ue),p("mousedown",tt,ta),p("keydown",tt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&ue())}),p("click",Qt,gt),U(r,P)};z(ia,r=>{r(na)})}U(c,pe),rr()}export{$r as default};
