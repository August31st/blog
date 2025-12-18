import{o as Ya,a as Ua,i as Oa,s as $,b as Q,e as Ne}from"./lifecycle.BUKLqami.js";import{ae as Xa,aa as Ha,aS as Ka,aT as Ga,i as Ja,u as Qa,aU as Za,aV as Oe,aW as tr,q as er,aX as gt,c as rt,o as p,f as Z,a as q,p as ar,b as rr,h as o,m as E,aw as Y,g as t,aY as qe,d as vt,s as c,e as n,r as i,v as ir,t as Bt}from"./utils.C6YlWNI1.js";import{a as nr,s as K}from"./render.ekQlN2yD.js";import{i as z}from"./if.AUn_gUq8.js";import{e as sr,i as or}from"./each.BvHDNfc0.js";import{b as Ve}from"./this.C6oz2rIz.js";import{I as m}from"./Icon.CmzPY910.js";import{m as Pt}from"./config.C6HpbU8S.js";import{I as lr}from"./zh_TW.12WzXWON.js";import{i as ur}from"./translation.pwwn0x9t.js";import"./props.BdyWAK-0.js";const cr=()=>performance.now(),G={tick:u=>requestAnimationFrame(u),now:()=>cr(),tasks:new Set};function Xe(){const u=G.now();G.tasks.forEach(s=>{s.c(u)||(G.tasks.delete(s),s.f())}),G.tasks.size!==0&&G.tick(Xe)}function dr(u){let s;return G.tasks.size===0&&G.tick(Xe),{promise:new Promise(_=>{G.tasks.add(s={c:u,f:_})}),abort(){G.tasks.delete(s)}}}function jt(u,s){Oe(()=>{u.dispatchEvent(new CustomEvent(s))})}function vr(u){if(u==="float")return"cssFloat";if(u==="offset")return"cssOffset";if(u.startsWith("--"))return u;const s=u.split("-");return s.length===1?s[0]:s[0]+s.slice(1).map(_=>_[0].toUpperCase()+_.slice(1)).join("")}function Ye(u){const s={},_=u.split(";");for(const L of _){const[P,C]=L.split(":");if(!P||C===void 0)break;const v=vr(P.trim());s[v]=C.trim()}return s}const fr=u=>u;function pr(u,s,_,L){var P=(u&Za)!==0,C="both",v,w=s.inert,T=s.style.overflow,g,h;function F(){return Oe(()=>v??=_()(s,L?.()??{},{direction:C}))}var B={is_global:P,in(){s.inert=w,jt(s,"introstart"),g=re(s,F(),h,1,()=>{jt(s,"introend"),g?.abort(),g=v=void 0,s.style.overflow=T})},out(k){s.inert=!0,jt(s,"outrostart"),h=re(s,F(),g,0,()=>{jt(s,"outroend"),k?.()})},stop:()=>{g?.abort(),h?.abort()}},W=Xa;if((W.nodes.t??=[]).push(B),nr){var f=P;if(!f){for(var d=W.parent;d&&(d.f&Ha)!==0;)for(;(d=d.parent)&&(d.f&Ka)===0;);f=!d||(d.f&Ga)!==0}f&&Ja(()=>{Qa(()=>B.in())})}}function re(u,s,_,L,P){var C=L===1;if(tr(s)){var v,w=!1;return er(()=>{if(!w){var k=s({direction:C?"in":"out"});v=re(u,k,_,L,P)}}),{abort:()=>{w=!0,v?.abort()},deactivate:()=>v.deactivate(),reset:()=>v.reset(),t:()=>v.t()}}if(_?.deactivate(),!s?.duration)return P(),{abort:gt,deactivate:gt,reset:gt,t:()=>L};const{delay:T=0,css:g,tick:h,easing:F=fr}=s;var B=[];if(C&&_===void 0&&(h&&h(0,1),g)){var W=Ye(g(0,1));B.push(W,W)}var f=()=>1-L,d=u.animate(B,{duration:T,fill:"forwards"});return d.onfinish=()=>{d.cancel();var k=_?.t()??1-L;_?.abort();var S=L-k,O=s.duration*Math.abs(S),I=[];if(O>0){var x=!1;if(g)for(var A=Math.ceil(O/16.666666666666668),a=0;a<=A;a+=1){var J=k+S*F(a/A),X=Ye(g(J,1-J));I.push(X),x||=X.overflow==="hidden"}x&&(u.style.overflow="hidden"),f=()=>{var it=d.currentTime;return k+S*F(it/O)},h&&dr(()=>{if(d.playState!=="running")return!1;var it=f();return h(it,1-it),!0})}d=u.animate(I,{duration:O,fill:"forwards"}),d.onfinish=()=>{f=()=>L,h?.(L,1-L),P()}},{abort:()=>{d&&(d.cancel(),d.effect=null,d.onfinish=gt)},deactivate:()=>{P=gt},reset:()=>{L===0&&h?.(1,0)},t:()=>f()}}function Ue(u){return function(...s){var _=s[0];return _.stopPropagation(),u?.apply(this,s)}}function mr(u){const s=u-1;return s*s*s+1}function br(u,{delay:s=0,duration:_=400,easing:L=mr,axis:P="y"}={}){const C=getComputedStyle(u),v=+C.opacity,w=P==="y"?"height":"width",T=parseFloat(C[w]),g=P==="y"?["top","bottom"]:["left","right"],h=g.map(S=>`${S[0].toUpperCase()}${S.slice(1)}`),F=parseFloat(C[`padding${h[0]}`]),B=parseFloat(C[`padding${h[1]}`]),W=parseFloat(C[`margin${h[0]}`]),f=parseFloat(C[`margin${h[1]}`]),d=parseFloat(C[`border${h[0]}Width`]),k=parseFloat(C[`border${h[1]}Width`]);return{delay:s,duration:_,easing:L,css:S=>`overflow: hidden;opacity: ${Math.min(S*20,1)*v};${w}: ${S*T}px;padding-${g[0]}: ${S*F}px;padding-${g[1]}: ${S*B}px;margin-${g[0]}: ${S*W}px;margin-${g[1]}: ${S*f}px;border-${g[0]}-width: ${S*d}px;border-${g[1]}-width: ${S*k}px;min-${w}: 0`}}var gr=vt('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),hr=vt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),xr=vt('<span class="text-sm text-[var(--content-meta)]"></span>'),yr=vt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),_r=vt('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),wr=vt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div><div class="flex items-center gap-3"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden cursor-pointer" role="button" tabindex="0"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0 cursor-pointer" role="button" tabindex="0" aria-label="展开音乐播放器"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button title="播放列表"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div></div></div> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="收起播放器"><!></button></div></div> <!></div> <style>.orb-player {
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
}</style>`,1);function Pr(u,s){rr(s,!1);let _=Pt.meting_api,L=Pt.id,P=Pt.server,C=Pt.type,v=E(!1),w=E(!1),T=E(!1),g=E(!1),h=E(0),F=E(0),B=E(.7),W=E(!1),f=E(!1),d=E(!1),k=E(0),S=E(""),O=E(!1),I=E({title:"Sample Song",artist:"Sample Artist",cover:"/favicon/favicon.ico",url:"",duration:0}),x=E([]),A=E(0),a=E(),J=E(),X=E();async function it(){o(f,!0);const r=_.replace(":server",P).replace(":type",C).replace(":id",L).replace(":auth","").replace(":r",Date.now().toString());try{const D=await fetch(r);if(!D.ok)throw new Error("meting api error");const H=await D.json();o(x,H.map(N=>{let ft=N.name??N.title??"未知歌曲",kt=N.artist??N.author??"未知艺术家",R=N.duration??0;return R>1e4&&(R=Math.floor(R/1e3)),(!Number.isFinite(R)||R<=0)&&(R=0),{id:N.id,title:ft,artist:kt,cover:N.pic??"",url:N.url??"",duration:R}})),t(x).length>0&&ne(t(x)[0]),o(f,!1)}catch{$t("Meting 歌单获取失败"),o(f,!1)}}function zt(){!t(a)||!t(I).url||(t(v)?t(a).pause():t(a).play())}function ht(){o(w,!t(w)),t(w)&&(o(g,!1),o(T,!1))}function xt(){o(T,!t(T)),t(T)&&(o(w,!1),o(g,!1))}function ie(){o(g,!t(g))}function He(){o(d,!t(d)),t(d)&&o(k,0)}function Ke(){o(k,(t(k)+1)%3),t(k)!==0&&o(d,!1)}function Ge(){if(t(x).length<=1)return;const r=t(A)>0?t(A)-1:t(x).length-1;yt(r)}function It(){if(t(x).length<=1)return;let r;if(t(d))do r=Math.floor(Math.random()*t(x).length);while(r===t(A)&&t(x).length>1);else r=t(A)<t(x).length-1?t(A)+1:0;yt(r)}function yt(r){if(r<0||r>=t(x).length)return;const D=t(v);o(A,r),t(a)&&t(a).pause(),ne(t(x)[t(A)]),(D||!t(v))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function _t(r){return r.startsWith("http://")||r.startsWith("https://")||r.startsWith("/")?r:`/${r}`}function ne(r){!r||!t(a)||(o(I,{...r}),r.url?(o(f,!0),Y(a,t(a).currentTime=0),o(h,0),o(F,r.duration??0),t(a).removeEventListener("loadeddata",se),t(a).removeEventListener("error",le),t(a).removeEventListener("loadstart",ue),t(a).addEventListener("loadeddata",se,{once:!0}),t(a).addEventListener("error",le,{once:!0}),t(a).addEventListener("loadstart",ue,{once:!0}),Y(a,t(a).src=_t(r.url)),t(a).load()):o(f,!1))}let Rt=!1;function se(){if(o(f,!1),t(a)?.duration&&t(a).duration>1&&(o(F,Math.floor(t(a).duration)),t(x)[t(A)]&&Y(x,t(x)[t(A)].duration=t(F)),Y(I,t(I).duration=t(F))),t(v)){const r=t(a).play();r!==void 0&&r.catch(D=>{console.warn("自动播放被拦截，等待用户交互:",D),Rt=!0})}}function oe(){if(Rt&&t(a)&&t(v)){const r=t(a).play();r!==void 0&&r.then(()=>{Rt=!1}).catch(()=>{})}}function le(r){o(f,!1),$t(`无法播放 "${t(I).title}"，正在尝试下一首...`),t(x).length>1?setTimeout(()=>It(),1e3):$t("播放列表中没有可用的歌曲")}function ue(){}function $t(r){o(S,r),o(O,!0),setTimeout(()=>{o(O,!1)},3e3)}function Je(){o(O,!1)}function Qe(r){if(!t(a)||!t(J))return;const D=t(J).getBoundingClientRect(),N=(r.clientX-D.left)/D.width*t(F);Y(a,t(a).currentTime=N),o(h,N)}let wt=E(!1),Wt=!1,Nt=null,nt=null;function Ze(r){t(X)&&(Wt=!0,Nt=t(X).getBoundingClientRect(),ce(r.clientX))}function ta(r){Wt&&(o(wt,!0),!nt&&(nt=requestAnimationFrame(()=>{ce(r.clientX),nt=null})))}function ea(){Wt=!1,o(wt,!1),Nt=null,nt&&(cancelAnimationFrame(nt),nt=null)}function ce(r){if(!t(a)||!t(X))return;const D=Nt||t(X).getBoundingClientRect(),H=Math.max(0,Math.min(1,(r-D.left)/D.width));o(B,H),Y(a,t(a).volume=t(B)),o(W,t(B)===0)}function de(){t(a)&&(o(W,!t(W)),Y(a,t(a).muted=t(W)))}function ve(r){if(!Number.isFinite(r)||r<0)return"0:00";const D=Math.floor(r/60),H=Math.floor(r%60);return`${D}:${H.toString().padStart(2,"0")}`}function aa(){t(a)&&(t(a).addEventListener("play",()=>{o(v,!0)}),t(a).addEventListener("pause",()=>{o(v,!1)}),t(a).addEventListener("timeupdate",()=>{o(h,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(k)===1?(Y(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(k)===2||t(d)?It():o(v,!1)}),t(a).addEventListener("error",r=>{o(f,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}const fe=["click","keydown","touchstart"];Ya(()=>{o(a,new Audio),Y(a,t(a).volume=t(B)),aa(),fe.forEach(r=>{document.addEventListener(r,oe,{capture:!0})}),it()}),Ua(()=>{typeof document<"u"&&fe.forEach(r=>{document.removeEventListener(r,oe,{capture:!0})}),t(a)&&(t(a).pause(),Y(a,t(a).src=""))}),Oa();var pe=rt();p("mousemove",qe,ta),p("mouseup",qe,ea);var ra=Z(pe);{var ia=r=>{var D=wr(),H=Z(D);{var N=e=>{var b=gr(),y=n(b),M=n(y);m(M,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var j=c(M,2),l=n(j,!0);i(j);var et=c(j,2),Mt=n(et);m(Mt,{icon:"material-symbols:close",class:"text-lg"}),i(et),i(y),i(b),Bt(()=>K(l,t(S))),p("click",et,Je),q(e,b)};z(H,e=>{t(O)&&e(N)})}var ft=c(H,2);let kt;var R=n(ft);let me;var na=n(R);{var sa=e=>{m(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},oa=e=>{var b=rt(),y=Z(b);{var M=l=>{var et=hr();q(l,et)},j=l=>{m(l,{icon:"material-symbols:music-note",class:"text-white text-lg"})};z(y,l=>{t(v)?l(M):l(j,!1)},!0)}q(e,b)};z(na,e=>{t(f)?e(sa):e(oa,!1)})}i(R);var Et=c(R,2);let be;var ge=n(Et),st=n(ge),qt=n(st);let he;var xe=c(qt,2),la=n(xe);{var ua=e=>{m(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},ca=e=>{var b=rt(),y=Z(b);{var M=l=>{m(l,{icon:"material-symbols:pause",class:"text-white text-xl"})},j=l=>{m(l,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};z(y,l=>{t(v)?l(M):l(j,!1)},!0)}q(e,b)};z(la,e=>{t(f)?e(ua):e(ca,!1)})}i(xe),i(st);var pt=c(st,2),Vt=n(pt),da=n(Vt,!0);i(Vt);var ye=c(Vt,2),va=n(ye,!0);i(ye),i(pt);var _e=c(pt,2),Ft=n(_e),fa=n(Ft);m(fa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Ft);var Yt=c(Ft,2),pa=n(Yt);m(pa,{icon:"material-symbols:expand-less",class:"text-lg"}),i(Yt),i(_e),i(ge),i(Et);var At=c(Et,2);let we;var Ut=n(At),Ot=n(Ut),ke=n(Ot);let Ee;i(Ot);var Xt=c(Ot,2),Ht=n(Xt),ma=n(Ht,!0);i(Ht);var Kt=c(Ht,2),ba=n(Kt,!0);i(Kt);var Fe=c(Kt,2),ga=n(Fe);i(Fe),i(Xt);var Ae=c(Xt,2),Lt=n(Ae),ha=n(Lt);m(ha,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Lt);var Ct=c(Lt,2);let Le;var xa=n(Ct);m(xa,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Ct),i(Ae),i(Ut);var Gt=c(Ut,2),ot=n(Gt),ya=n(ot);i(ot),Ve(ot,e=>o(J,e),()=>t(J)),i(Gt);var Jt=c(Gt,2),lt=n(Jt);let Ce;var _a=n(lt);m(_a,{icon:"material-symbols:shuffle",class:"text-lg"}),i(lt);var mt=c(lt,2),wa=n(mt);m(wa,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(mt);var ut=c(mt,2);let Se;var ka=n(ut);{var Ea=e=>{m(e,{icon:"eos-icons:loading",class:"text-xl"})},Fa=e=>{var b=rt(),y=Z(b);{var M=l=>{m(l,{icon:"material-symbols:pause",class:"text-xl"})},j=l=>{m(l,{icon:"material-symbols:play-arrow",class:"text-xl"})};z(y,l=>{t(v)?l(M):l(j,!1)},!0)}q(e,b)};z(ka,e=>{t(f)?e(Ea):e(Fa,!1)})}i(ut);var bt=c(ut,2),Aa=n(bt);m(Aa,{icon:"material-symbols:skip-next",class:"text-xl"}),i(bt);var St=c(bt,2);let De;var La=n(St);{var Ca=e=>{m(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},Sa=e=>{var b=rt(),y=Z(b);{var M=l=>{m(l,{icon:"material-symbols:repeat",class:"text-lg"})},j=l=>{m(l,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};z(y,l=>{t(k)===2?l(M):l(j,!1)},!0)}q(e,b)};z(La,e=>{t(k)===1?e(Ca):e(Sa,!1)})}i(St),i(Jt);var Me=c(Jt,2),Dt=n(Me),Da=n(Dt);{var Ma=e=>{m(e,{icon:"material-symbols:volume-off",class:"text-lg"})},Ta=e=>{var b=rt(),y=Z(b);{var M=l=>{m(l,{icon:"material-symbols:volume-down",class:"text-lg"})},j=l=>{m(l,{icon:"material-symbols:volume-up",class:"text-lg"})};z(y,l=>{t(B)<.5?l(M):l(j,!1)},!0)}q(e,b)};z(Da,e=>{t(W)||t(B)===0?e(Ma):e(Ta,!1)})}i(Dt);var tt=c(Dt,2),Te=n(tt);let Be;i(tt),Ve(tt,e=>o(X,e),()=>t(X));var Qt=c(tt,2),Ba=n(Qt);m(Ba,{icon:"material-symbols:expand-more",class:"text-lg"}),i(Qt),i(Me),i(At);var Pa=c(At,2);{var ja=e=>{var b=_r(),y=n(b),M=n(y),j=n(M,!0);i(M);var l=c(M,2),et=n(l);m(et,{icon:"material-symbols:close",class:"text-lg"}),i(l),i(y);var Mt=c(y,2);sr(Mt,5,()=>t(x),or,(Zt,ct,U)=>{var at=yr();let Pe;var te=n(at),za=n(te);{var Ia=V=>{m(V,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Ra=V=>{var $e=rt(),Na=Z($e);{var qa=dt=>{m(dt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Va=dt=>{var We=xr();We.textContent=U+1,q(dt,We)};z(Na,dt=>{U===t(A)?dt(qa):dt(Va,!1)},!0)}q(V,$e)};z(za,V=>{U===t(A)&&t(v)?V(Ia):V(Ra,!1)})}i(te);var ee=c(te,2),je=n(ee);i(ee);var ze=c(ee,2),Tt=n(ze);let Ie;var $a=n(Tt,!0);i(Tt);var ae=c(Tt,2);let Re;var Wa=n(ae,!0);i(ae),i(ze),i(at),Bt(V=>{Pe=$(at,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Pe,{"bg-[var(--btn-plain-bg)]":U===t(A),"text-[var(--primary)]":U===t(A)}),Q(at,"aria-label",`播放 ${t(ct).title??""} - ${t(ct).artist??""}`),Q(je,"src",V),Q(je,"alt",t(ct).title),Ie=$(Tt,1,"font-medium truncate",null,Ie,{"text-[var(--primary)]":U===t(A),"text-90":U!==t(A)}),K($a,t(ct).title),Re=$(ae,1,"text-sm text-[var(--content-meta)] truncate",null,Re,{"text-[var(--primary)]":U===t(A)}),K(Wa,t(ct).artist)},[()=>_t(t(ct).cover)]),p("click",at,()=>yt(U)),p("keydown",at,V=>{(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),yt(U))}),q(Zt,at)}),i(Mt),i(b),Bt(Zt=>K(j,Zt),[()=>ur(lr.playlist)]),p("click",l,ie),pr(3,b,()=>br,()=>({duration:300,axis:"y"})),q(e,b)};z(Pa,e=>{t(g)&&e(ja)})}i(ft),ir(2),Bt((e,b,y,M)=>{kt=$(ft,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,kt,{expanded:t(w),"hidden-mode":t(T)}),me=$(R,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,me,{"opacity-0":!t(T),"scale-0":!t(T),"pointer-events-none":!t(T)}),be=$(Et,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,be,{"opacity-0":t(w)||t(T),"scale-95":t(w)||t(T),"pointer-events-none":t(w)||t(T)}),Q(st,"aria-label",t(v)?"暂停":"播放"),Q(qt,"src",e),he=$(qt,1,"w-full h-full object-cover transition-transform duration-300",null,he,{spinning:t(v)&&!t(f),"animate-pulse":t(f)}),K(da,t(I).title),K(va,t(I).artist),we=$(At,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,we,{"opacity-0":!t(w),"scale-95":!t(w),"pointer-events-none":!t(w)}),Q(ke,"src",b),Ee=$(ke,1,"w-full h-full object-cover transition-transform duration-300",null,Ee,{spinning:t(v)&&!t(f),"animate-pulse":t(f)}),K(ma,t(I).title),K(ba,t(I).artist),K(ga,`${y??""} / ${M??""}`),Le=$(Ct,1,"btn-plain w-8 h-8 rounded-lg flex items-center justify-center",null,Le,{"text-[var(--primary)]":t(g)}),Q(ot,"aria-valuenow",t(F)>0?t(h)/t(F)*100:0),Ne(ya,`width: ${t(F)>0?t(h)/t(F)*100:0}%`),Ce=$(lt,1,"w-10 h-10 rounded-lg",null,Ce,{"btn-regular":t(d),"btn-plain":!t(d)}),lt.disabled=t(x).length<=1,mt.disabled=t(x).length<=1,Se=$(ut,1,"btn-regular w-12 h-12 rounded-full",null,Se,{"opacity-50":t(f)}),ut.disabled=t(f),bt.disabled=t(x).length<=1,De=$(St,1,"w-10 h-10 rounded-lg",null,De,{"btn-regular":t(k)>0,"btn-plain":t(k)===0}),Q(tt,"aria-valuenow",t(B)*100),Be=$(Te,1,"h-full bg-[var(--primary)] rounded-full transition-all",null,Be,{"duration-100":!t(wt),"duration-0":t(wt)}),Ne(Te,`width: ${t(B)*100}%`)},[()=>_t(t(I).cover),()=>_t(t(I).cover),()=>ve(t(h)),()=>ve(t(F))]),p("click",R,xt),p("keydown",R,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),xt())}),p("click",st,zt),p("keydown",st,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),zt())}),p("click",pt,ht),p("keydown",pt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),ht())}),p("click",Ft,Ue(xt)),p("click",Yt,Ue(ht)),p("click",Lt,xt),p("click",Ct,ie),p("click",ot,Qe),p("keydown",ot,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(J).getBoundingClientRect();const y=.5*t(F);t(a)&&(Y(a,t(a).currentTime=y),o(h,y))}}),p("click",lt,He),p("click",mt,Ge),p("click",ut,zt),p("click",bt,It),p("click",St,Ke),p("click",Dt,de),p("mousedown",tt,Ze),p("keydown",tt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&de())}),p("click",Qt,ht),q(r,D)};z(ra,r=>{r(ia)})}q(u,pe),ar()}export{Pr as default};
