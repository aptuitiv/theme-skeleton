!(function (t, e) { if (typeof exports === 'object' && typeof module === 'object') module.exports = e(); else if (typeof define === 'function' && define.amd) define([], e); else { const n = e(); for (const o in n) (typeof exports === 'object' ? exports : t)[o] = n[o]; } }(self, (() => (() => {
    const t = {}; ((t) => { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }); })(t); let e; const n = 'fslightbox-'; const i = ''.concat(n, 'styles'); const s = ''.concat(n, 'full-dimension'); const r = ''.concat(n, 'flex-centered'); const a = ''.concat(n, 'open'); const c = ''.concat(n, 'absoluted'); const u = ''.concat(n, 'opacity-1'); const l = ''.concat(n, 'slide-btn'); const d = ''.concat(l, '-container'); const h = ''.concat(n, 'fade-in'); const f = ''.concat(n, 'fade-out'); const p = `${h}-strong`; const m = `${f}-strong`; const b = (''.concat(n, 'caption'), ''.concat(n, 'thumb')); const g = `${b}s`; const v = ''.concat(g, '-loader'); const x = ''.concat(g, '-cursorer'); const w = ''.concat(g, '-inner'); const y = `${b}-wrapper`; const
        C = `${b}-invalid`; /**
                             *
                             * @param t
                             */
    function L(t) { return L = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; }, L(t); } /**
                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                          * @param t
                                                                                                                                                                                                                                                                                          */
    function T(t) {
        const e = t.c; const n = t.componentsServices; const o = t.core.thumbsRenderDispatcher; const i = t.data; const s = t.ea; const r = t.la; const a = (t.stageIndexes, t.ui); const
            c = t.z; /**
                      *
                      */
        function u() { for (let t = 0; t < e; t++)r.t(t); } this.o = function () { c.r(), i.isThumbing = !0, s.uc(), a.sthc(), u(), o.renderThumbsIfNotYetAndAllTypesDetected(), i.unloadedThumbsCount && n.appendThumbsLoaderIfNotYet(); }, this.x = function () { c.r(), i.isThumbing = !1, s.dc(), a.htsc(), u(); };
    } /**
       *
       * @param t
       * @param e
       */
    function z(t, e) { const n = t.classList; n.contains(e) && n.remove(e); } /**
                                                                               *
                                                                               * @param t
                                                                               * @param e
                                                                               */
    function S(t, e) { const n = t.classList; n.contains(e) || n.add(e); } /**
                                                                            *
                                                                            * @param t
                                                                            */
    function A(t) {
        const e = t.data; const n = t.elements; const
            o = t.stageIndexes; this.runActions = function () {
            z(n.thumbsContainer, r); const t = innerWidth / 2; const s = n.thumbsWrappers[o.current]; const a = s.offsetLeft + s.offsetWidth / 2; const
                c = e.thumbsInnerWidth - a; a > t && c > t ? i(t - a) : a > t ? i(innerWidth - e.thumbsInnerWidth - 9) : c > t && i(0);
        }, this.runToThinThumbsActions = function () { S(n.thumbsContainer, r), i(0); }; var i = function (t) { e.thumbsTransform = t, n.thumbsInner.style.transform = 'translateX('.concat(t, 'px)'); };
    } /**
       *
       * @param t
       */
    function I(t) {
        const e = this; const n = t.core; const o = n.eventsDispatcher; const i = n.globalEventsController; const s = n.scrollbarRecompensor; const r = t.data; const c = t.elements; const u = t.fs; const l = t.p; const d = t.props; const h = t.qs; const f = t.ss; const p = t.t; const b = t.thumbsSwipingProps; const
            g = t.z; this.isLightboxFadingOut = !1, this.runActions = function () { e.isLightboxFadingOut = !0, c.container.classList.add(m), i.removeListeners(), f.r(), d.exitFullscreenOnClose && r.ifs && u.x(), g.r(), p((() => { e.isLightboxFadingOut = !1; for (var n = 0; n < t.ts.length; n++)clearTimeout(t.ts[n]); for (t.ts = [], n = 0; n < h.length; n++)h[n] = 0; l.i = !1, b && (b.i = !1), c.container.classList.remove(m), document.documentElement.classList.remove(a), s.removeRecompense(), document.body.removeChild(c.container), o.dispatch('onClose'); }), 270); };
    } /**
       *
       * @param t
       * @param e
       * @param n
       * @param o
       */
    function E(t, e, n, o) {
        const i = t.isl; const s = t.props.slideChangeAnimation; const r = t.saw; const a = t.smw; const c = t.st; const u = t.stageIndexes; const l = t.sws; const d = e.previous; const h = e.current; const
            p = e.next; /**
                         *
                         */
        function m() { c.i(h) ? h === u.previous ? a[h].ne() : h === u.next && a[h].p() : (a[h].h(), a[h].n()); } /**
                                                                                                                   *
                                                                                                                   * @param t
                                                                                                                   * @param e
                                                                                                                   * @param n
                                                                                                                   */
        function b(t, e, n) { t && r[e].classList.add(n); } this.runJumpReflowedActions = function () { b(n, h, f), b(o, u.current, s), l.a(), void 0 !== u.previous && u.previous !== h && a[u.previous].ne(), a[u.current].n(), void 0 !== u.next && u.next !== h && a[u.next].p(), l.b(d), l.b(p), i[h] ? setTimeout(m, 260) : m(); };
    } /**
       *
       * @param t
       */
    function F(t) {
        let e; const n = t.core.slideChangeFacade; const o = t.props; const i = t.ss; const s = t.stageIndexes; let
            r = !1; /**
                     *
                     */
        function a() { r = !1, clearTimeout(e), t.ssb.classList.remove(u), t.ssx(); } /**
                                                                                       *
                                                                                       */
        function c() { const i = t.ssb; i.style.transition = 'opacity .2s', i.style.width = '0px', i.offsetWidth, i.style.transition = 'opacity .2s, width linear '.concat(o.slideshowTime, 'ms'), i.style.width = `${innerWidth}px`, e = setTimeout((() => { n.changeToNext(), o.disableSlideshowLoop && s.current + 1 === o.sources.length ? a() : c(); }), o.slideshowTime); } i.t = function () { r ? a() : (r = !0, t.sss(), t.ssb.classList.add(u), c()); }, i.r = function () { r && a(); };
    } /**
       *
       * @param t
       */
    function N(t) {
        const e = t.p; const n = Object.keys(e); const o = e[n[0]]; const
            i = e[n[1]]; return Math.hypot(o.screenX - i.screenX, o.screenY - i.screenY);
    } /**
       *
       * @param t
       */
    function k(t) {
        t.componentsServices; const e = t.core.pointeringBucket; const n = t.elements; const o = t.p; const i = t.smw; const s = t.stageIndexes; const r = t.z; const
            a = t.zv; /**
                       *
                       * @param t
                       * @param e
                       */
        function c(t, e) { i[t].v(o.swipedX)[e](); } this.a = function (i) { e.runSwipingMoveActionsForPropsAndEvent(o, i), n.container.contains(t.h) || n.container.appendChild(t.h); }, this.p = function () {
            const t = N(o); if (o.pinchedHypot) {
                const e = t - o.pinchedHypot; let
                    n = a + e / Math.hypot(innerWidth, innerHeight) * 10; n < 0.9 && (n = 0.9), r.z(n), o.pinchedHypot = t;
            } else o.pinchedHypot = t;
        }, this.s = function () { c(s.current, 'z'), void 0 !== s.previous && o.swipedX > 0 ? c(s.previous, 'ne') : void 0 !== s.next && o.swipedX < 0 && c(s.next, 'p'); }, this.zs = function (t) { o.swipedX = (t.screenX - o.downScreenX) / a, o.swipedY = (t.screenY - o.downScreenY) / a, i[s.current].v(o.ux + o.swipedX, o.uy + o.swipedY).z(); };
    } /**
       *
       * @param t
       * @param e
       */
    function B(t, e) {
        const n = t.c; const o = t.dss; const i = t.p; const s = t.r; const r = t.zv; const
            a = s(k); if (i.isPinching) return a.a(e), void a.p(); i.pc !== 2 && (r === 1 ? n === 1 || o ? i.swipedX = 1 : (a.a(e), a.s()) : (a.a(e), a.zs(e)));
    } /**
       *
       * @param t
       */
    function W(t) {
        const e = t.core; const n = e.clickZoomer; const o = e.slideIndexChanger; const i = t.p; const s = t.smw; const r = t.stageIndexes; const a = t.sws; const
            c = t.zv; /**
                       *
                       * @param t
                       */
        function u(t) { const e = s[r.current]; e.a(), e[t](); } /**
                                                                  *
                                                                  * @param t
                                                                  * @param e
                                                                  */
        function l(t, e) { void 0 !== t && (s[t].s(), s[t][e]()); } this.p = function () { const t = r.previous; if (void 0 === t) u('z'); else { u('p'); const e = r.next; o.changeTo(t); const n = r.previous; a.d(n), a.b(e), u('z'), l(n, 'ne'); } }, this.n = function () { const t = r.next; if (void 0 === t) u('z'); else { u('ne'); const e = r.previous; o.changeTo(t); const n = r.next; a.d(n), a.b(e), u('z'), l(n, 'p'); } }, this.s = function () { const t = s[r.current]; i.ux = t.gx(), i.uy = t.gy(); }, this.d = function () { c <= 1 ? n.zoomIn() : n.zoomOut(); };
    } /**
       *
       * @param t
       * @param e
       */
    function M(t, e) { t.contains(e) && t.removeChild(e); } /**
                                                             *
                                                             * @param t
                                                             */
    function H(t) {
        t.componentsServices; const e = t.core; const n = e.lightboxCloser; const o = e.pointeringBucket; const i = t.dss; const s = t.elements; const r = t.p; const a = t.props.disableBackgroundClose; const c = t.r; const u = t.swc; const l = (t.ui, t.zv); const
            d = c(W); this.a = function () { M(s.container, t.h), r.isPinching = !1, r.pinchedHypot = 0, o.runSwipingTopActionsForPropsAndEvent(r), u.classList.remove('fslightboxswcp'); }, this.s = function () { l === 1 ? i || (r.swipedX > 0 ? d.p() : d.n()) : d.s(); }, this.n = function (t) { t.target.tagName !== 'VIDEO' && (r.sd ? d.d() : a || n.close()); };
    } /**
       *
       * @param t
       * @param e
       */
    function D(t, e) { const n = t.p; n.p[e.pointerId] = { screenX: e.screenX, screenY: e.screenY }; const o = Object.keys(n.p).length; return n.pc = o, o <= 2; } /**
                                                                                                                                                                    *
                                                                                                                                                                    * @param t
                                                                                                                                                                    */
    function O(t) {
        const e = t.core.pointeringBucket; const n = t.data; const o = t.elements; const
            i = t.thumbsSwipingProps; this.runActions = function (t) { e.runSwipingMoveActionsForPropsAndEvent(i, t), o.thumbsInner.style.transform = 'translateX('.concat(n.thumbsTransform + i.swipedX, 'px)'), o.thumbsContainer.contains(o.thumbsCursorer) || o.thumbsContainer.appendChild(o.thumbsCursorer); };
    } /**
       *
       * @param t
       */
    function P(t) {
        const e = t.data; const n = t.resolve; const o = t.thumbsSwipingProps; const i = n(O); const
            s = window.innerWidth; this.listener = function (t) { e.thumbsInnerWidth > s && o.i && i.runActions(t); };
    } /**
       *
       * @param t
       */
    function R(t) {
        const e = t.data; const n = t.core; const o = n.slideIndexChanger; const i = n.thumbsTransformTransitioner; const s = n.pointeringBucket; const r = t.elements; const a = t.thumbsSwipingProps; const
            c = r.thumbsWrappers; this.runNoSwipeActionsForEvent = function (t) { M(r.thumbsContainer, r.thumbsCursorer), a.i = !1; for (let e = 0; e < c.length; e++) if (c[e] && c[e].contains(t.target)) return void o.jumpTo(e); }, this.runActions = function () { if (M(r.thumbsContainer, r.thumbsCursorer), e.thumbsTransform += a.swipedX, s.runSwipingTopActionsForPropsAndEvent(a), e.thumbsTransform > 0) return u(0); e.thumbsTransform < innerWidth - e.thumbsInnerWidth - 9 && u(innerWidth - e.thumbsInnerWidth - 9); }; var u = function (t) { e.thumbsTransform = t, i.callActionWithTransition((() => { r.thumbsInner.style.transform = 'translateX('.concat(t, 'px)'); })); };
    } /**
       *
       * @param t
       */
    function q(t) {
        const e = t.resolve; const n = t.thumbsSwipingProps; const
            o = e(R); this.listener = function (t) { n.i && (n.swipedX ? o.runActions() : o.runNoSwipeActionsForEvent(t)); };
    } /**
       *
       * @param t
       */
    function X(t) {
        const e = t.m; const n = t.props; const o = t.r; const i = t.ui; const s = o(q); const r = o(P); const
            a = (function () { let t = !1; return function () { return !t && (t = !0, requestAnimationFrame((() => { t = !1; })), !0); }; }()); this.m = function (o) { i.qps(), t.p.i && e(B, D)(o), n.disableThumbs || r.listener(o); }, this.u = function (e) {
            !(function (t, e) {
                const n = t.p; const o = t.r; const i = t.z; const s = t.zv; const
                    r = o(H); n.p = {}, n.i && (n.isPinching || (n.swipedX ? r.s() : r.n(e)), r.a(), s < 1 && (i.z(1), i.e()));
            }(t, e)), n.disableThumbs || s.listener(e), i.qps();
        }, this.w = function (e) {
            t.p.i || (i.qps(), a() && (function (t, e) {
                const n = t.z; const
                    o = t.zv; if (o === 1) { if (e.deltaY > 0) return; n.b(); } const i = 0.1 * o; let
                    s = o; e.deltaY < 0 ? s += i : (s -= i) < 1 && (s = 1), n.z(s), s === 1 && n.e();
            }(t, e)));
        };
    } /**
       *
       * @param t
       * @param e
       */
    function Y(t, e) {
        const n = t.core; const i = n.clickZoomer; const s = n.lightboxCloser; const r = n.slideChangeFacade; const a = n.thumbsToggler; const c = t.fs; const u = (t.middleware, t.props); const
            l = t.ss; if (t.ui.qps(), e.code !== 'Space') switch (e.key) { case 'Escape': s.close(); break; case 'ArrowLeft': r.changeToPrevious(); break; case 'ArrowRight': r.changeToNext(); break; case 't': u.disableThumbs || a.toggleThumbs(); break; case '+': o.p.i || i.zoomIn(); break; case '-': o.p.i || i.zoomOut(); break; case 'F11': e.preventDefault(), c.t(); } else l.t();
    } /**
       *
       * @param t
       * @param e
       * @param o
       * @param i
       * @param s
       */
    function j(t, e, o, i, s) { const r = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); r.setAttributeNS(null, 'width', e), r.setAttributeNS(null, 'height', e), r.setAttributeNS(null, 'viewBox', i); const a = document.createElementNS('http://www.w3.org/2000/svg', 'path'); return a.setAttributeNS(null, 'class', ''.concat(n, 'svg-path')), a.setAttributeNS(null, 'd', s), r.appendChild(a), t.appendChild(r), r; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                              *
                                                                                                                                                                                                                                                                                                                                                                                                                                              * @param t
                                                                                                                                                                                                                                                                                                                                                                                                                                              * @param e
                                                                                                                                                                                                                                                                                                                                                                                                                                              */
    function V(t, e) { const o = document.createElement('div'); return o.className = ''.concat(n, 'toolbar-button ').concat(r), o.title = e, t.appendChild(o), o; } /**
                                                                                                                                                                     *
                                                                                                                                                                     * @param t
                                                                                                                                                                     * @param e
                                                                                                                                                                     * @param n
                                                                                                                                                                     */
    function U(t, e, n) { const o = V(t, e.title); o.onclick = n, j(o, e.width, e.height, e.viewBox, e.d); } /**
                                                                                                              *
                                                                                                              * @param t
                                                                                                              */
    function Z(t) {
        const e = t.props.sources; const o = t.elements; const
            i = document.createElement('div'); o.nav = i, i.className = ''.concat(n, 'nav'), o.container.appendChild(i), (function (t, e) {
            const o = t.core; const i = o.clickZoomer; const s = i.zoomIn; const r = i.zoomOut; const a = o.lightboxCloser.close; const c = o.thumbsToggler; const u = t.props; const l = u.customToolbarButtons; const d = u.disableThumbs; const h = u.toolbarButtons; const
                f = document.createElement('div'); f.className = ''.concat(n, 'toolbar'), e.appendChild(f); for (let p = function (e) { U(f, l[e], (() => l[e].onClick(t))); }, m = 0; m < l.length; m++)p(m); d || U(f, h.thumbs, c.toggleThumbs), U(f, h.zoomIn, s), U(f, h.zoomOut, r), (function (t, e) {
                const n = t.props.toolbarButtons.slideshow; const o = n.start; const i = n.pause; const s = t.ss; const
                    r = V(e, o.title); r.onclick = s.t; const a = j(r, o.width, o.height, o.viewBox, o.d); /**
                                                                                                            *
                                                                                                            * @param t
                                                                                                            */
                function c(t) { r.title = t.title, a.setAttributeNS(null, 'width', t.width), a.setAttributeNS(null, 'height', t.height), a.setAttributeNS(null, 'viewBox', t.viewBox), a.firstChild.setAttributeNS(null, 'd', t.d); } t.sss = function () { c(i); }, t.ssx = function () { c(o); };
            }(t, f)), (function (t, e) {
                const n = t.componentsServices; const o = t.data; const i = t.fs; const s = t.props.toolbarButtons.fullscreen; const r = s.enter; const a = s.exit; const c = V(e, r.title); const
                    u = j(c, r.width, r.height, r.viewBox, r.d); /**
                                                                  *
                                                                  * @param t
                                                                  */
                function l(t) { c.title = t.title, u.setAttributeNS(null, 'width', t.width), u.setAttributeNS(null, 'height', t.height), u.setAttributeNS(null, 'viewBox', t.viewBox), u.firstChild.setAttributeNS(null, 'd', t.d); } n.ofs = function () { o.ifs = !0, l(a); }, n.xfs = function () { o.ifs = !1, l(r); }, c.onclick = i.t;
            }(t, f)), U(f, h.close, a);
        }(t, i)), e.length > 1 && (function (t, e) {
            const o = t.componentsServices; const i = t.props.sources; const
                s = document.createElement('div'); s.className = ''.concat(n, 'slide-number-container'); const a = document.createElement('div'); a.className = r; const c = document.createElement('span'); o.setSlideNumber = function (t) { return c.innerHTML = t; }; const u = document.createElement('span'); u.className = ''.concat(n, 'slash'); const l = document.createElement('div'); l.innerHTML = i.length, s.appendChild(a), a.appendChild(c), a.appendChild(u), a.appendChild(l), e.appendChild(s), setTimeout((() => { a.offsetWidth > 55 && (s.style.justifyContent = 'flex-start'); }));
        }(t, i));
    } /**
       *
       * @param t
       * @param e
       */
    function _(t, e) {
        const n = t.c; const o = t.core.pointeringBucket; const i = t.elements.sources; const s = t.p; const r = t.smw; const a = t.stageIndexes; const c = t.swc; const u = t.z; const
            l = t.zv; if (e.pointerType !== 'touch' && e.target.tagName === 'IMG' && e.preventDefault(), o.runSwipingDownActionsForPropsAndEvent(s, e), s.downScreenY = e.screenY, s.pc === 2) s.isPinching = !0, s.pinchedHypot = N(s), c.classList.add('fslightboxswcp'), l === 1 && u.b(); else for (let d = 0; d < n; d++)r[d].d(); const h = i[a.current]; s.sd = h && h.contains(e.target);
    } /**
       *
       * @param t
       */
    function J(t) {
        const e = 'fslightbox-loader';
        const n = document.createElement('div'); n.className = e; for (let o = 0; o < 3; o++) { const i = document.createElement('div'); i.className = ''.concat(e, '-child'), n.appendChild(i); } return t.appendChild(n), n;
    } /**
       *
       * @param t
       * @param e
       */
    function G(t, e) {
        const n = t.smw; const o = t.st; const i = t.swc; const a = document.createElement('div'); const u = ''.concat(c, ' ').concat(s, ' ').concat(r); let l = 0; let d = 0; let
            h = 0; /**
                    *
                    * @param t
                    */
        function f(t) { l = t + d, a.style.transform = 'translate('.concat(l, 'px,').concat(h, 'px)'), d = 0; } /**
                                                                                                                 *
                                                                                                                 */
        function p() { return (1 + t.props.slideDistance) * innerWidth; } a.className = u, a.s = function () { a.style.display = 'flex'; }, a.h = function () { a.style.display = 'none'; }, a.a = function () { a.classList.add('fslightboxtt'); }, a.d = function () { a.classList.remove('fslightboxtt'); }, a.n = function () { a.style.removeProperty('transform'); }, a.v = function (t, e) { return d = t, void 0 !== e && (h = e), a; }, a.gx = function () { return l; }, a.gy = function () { return h; }, a.ne = function () { f(-p()); }, a.z = function () { f(0); }, a.p = function () { f(p()); }, i.appendChild(a), o.i(e) || a.h(), n[e] = a, (function (t, e) {
            const n = t.smw; const o = t.sew; const
                i = document.createElement('div'); n[e].appendChild(i), o[e] = i, (function (t, e) {
                const n = t.saw; const o = t.sew; const
                    i = document.createElement('div'); J(i), o[e].appendChild(i), n[e] = i;
            }(t, e));
        }(t, e));
    } /**
       *
       * @param t
       */
    function $(t) {
        const e = t.c; const n = t.elements; const o = t.m; const
            i = document.createElement('div'); i.className = 'fslightboxswc '.concat(c, ' ').concat(s), n.container.appendChild(i), i.addEventListener('pointerdown', o(_, D)), t.swc = i; for (let r = 0; r < e; r++)G(t, r);
    } /**
       *
       * @param t
       * @param e
       */
    function K(t, e) {
        const n = t.data.isThumbing; const o = t.elements; const i = o.captions; const s = o.container; const a = t.props.captions; const c = t.stageIndexes.current; const u = t.tc; const l = document.createElement('div'); const d = document.createElement('div'); let
            h = 'fslightboxc '.concat(r); (c !== e || n && !u) && (h += ' fslightboxx'), l.className = h, d.className = 'fslightboxci', d.innerHTML = a[e], l.appendChild(d), i[e] = l, s.appendChild(l);
    } /**
       *
       * @param t
       * @param e
       */
    function Q(t, e) {
        const n = t.core.slideChangeFacade; const o = t.elements; const i = t.props.slideButtons; const s = e.charAt(0).toUpperCase() + e.slice(1); const a = 'slideButton'.concat(s); const
            c = i[e]; o[a] = document.createElement('div'), o[a].className = ''.concat(d, ' ').concat(d, '-').concat(e), o[a].title = c.title, o[a].onclick = n['changeTo'.concat(s)], (function (t, e) { const n = document.createElement('div'); n.className = ''.concat(l, ' ').concat(r), j(n, e.width, e.height, e.viewBox, e.d), t.appendChild(n); }(o[a], c)), o.container.appendChild(o[a]);
    } (typeof document === 'undefined' ? 'undefined' : L(document)) === 'object' && ((e = document.createElement('style')).className = i, e.appendChild(document.createTextNode(".fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong forwards .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-absoluted{position:absolute;top:0;left:0}.fslightboxcg{cursor:grabbing!important}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightboxx{opacity:0!important;z-index:-1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightboxtt{transition:transform .3s!important}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:none;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#d1d2d2}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader-child{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader-child:nth-child(1){animation-delay:-.45s}.fslightbox-loader-child:nth-child(2){animation-delay:-.3s}.fslightbox-loader-child:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-thumbs-loader{width:54px!important;height:54px!important}.fslightbox-thumbs-loader div{border-width:4px!important;width:44px!important;height:44px!important}.fslightbox-nav{height:45px;width:100%;transition:opacity .3s}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:2;right:0;top:0;height:45px;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:2;transform:translateY(-50%);transition:opacity .3s}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightboxh{z-index:3}.fslightboxss{width:0;height:2px;z-index:3;opacity:0;background:#fff}.fslightboxin{font-size:24px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightboxyt{border:0}.fslightboxs{position:relative;z-index:3;display:block;opacity:0;margin:auto;cursor:zoom-in}.fslightboxswc{z-index:1;transition:transform .2s linear}.fslightboxswcp{transition:none!important}.fslightbox-thumbs{position:absolute;bottom:0;left:0;width:100%;z-index:2;background:linear-gradient(180deg,rgba(0,0,0,0),#1e1e1e 100%);transition:opacity .2s;padding:10px 5px 12px 5px;height:114px}@media (min-width:992px){.fslightbox-thumbs{padding-top:13px;height:120px}}@media (min-width:1600px){.fslightbox-thumbs{padding:14px 0;height:126px}}.fslightbox-thumbs-inner{display:inline-flex;justify-content:flex-start;align-items:center;height:100%}.fslightbox-thumb-wrapper{position:relative;height:100%;margin:0 4px;opacity:0;transition:opacity .3s}.fslightbox-thumb-wrapper svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);cursor:pointer;z-index:1}.fslightbox-thumb-wrapper path{fill:#fff}.fslightboxtd{position:absolute;top:2px;left:2px;width:calc(100% - 4px);height:calc(100% - 4px);background:rgba(0,0,0,.4);cursor:pointer}.fslightbox-thumb{cursor:pointer;border-radius:1px;height:100%;width:auto!important;border:2px solid transparent;max-width:unset;max-height:unset}.fslightboxta{border:2px solid #fff!important}.fslightbox-thumb-invalid{background:linear-gradient(to bottom,#0f0f0f,rgba(15,15,15,.5));display:inline-block;min-width:155px}.fslightbox-thumbs-cursorer{z-index:3;cursor:grabbing}.fslightboxc{position:absolute;bottom:0;left:50%;width:100%;transform:translateX(-50%);transition:opacity .2s,transform .3s;z-index:2;user-select:text}.fslightboxc:after{content:'';position:absolute;z-index:-1;top:0;left:0;opacity:1;transition:opacity 1s;width:100%;height:100%;background:linear-gradient(180deg,rgba(0,0,0,0),#1e1e1e 100%)}.fslightboxci{padding:20px 25px 30px 25px;max-width:1200px;color:#eee;text-align:center;font-size:14px}.fslightboxct{transform:translate(-50%,-88px)}.fslightboxct:after{opacity:0;transition:none}@media(min-width:992px){.fslightboxct{transform:translate(-50%,-93px)}}")), document.head.appendChild(e)); const tt = 'fslightbox-types'; /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * @param t
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */
    function et(t) {
        let e; const n = t.props; let o = 0; const
            i = {}; this.getSourceTypeFromLocalStorageByUrl = function (t) { return e[t] ? e[t] : s(t); }, this.handleReceivedSourceTypeForUrl = function (t, n) { if (!1 === i[n] && (o--, t !== 'invalid' ? i[n] = t : delete i[n], o === 0)) { !(function (t, e) { for (const n in e) t[n] = e[n]; }(e, i)); try { localStorage.setItem(tt, JSON.stringify(e)); } catch (t) { } } }; var s = function (t) { o++, i[t] = !1; }; if (n.disableLocalStorage) this.getSourceTypeFromLocalStorageByUrl = function () { }, this.handleReceivedSourceTypeForUrl = function () { }; else { try { e = JSON.parse(localStorage.getItem(tt)); } catch (t) { } e || (e = {}, this.getSourceTypeFromLocalStorageByUrl = s); }
    } const nt = 'image';
    const ot = 'video';
    const it = 'youtube';
    const st = 'custom';
    const rt = 'invalid'; /**
                           *
                           * @param t
                           * @param e
                           * @param n
                           * @param o
                           */
    function at(t, e, n, o) {
        const i = this; const s = (t.data, t.elements.sources); const r = n / o; let a = 0; let
            c = null; this.s = function () { const t = s[e].style; c = i.g(), t.width = ''.concat(c[0], 'px'), t.height = ''.concat(c[1], 'px'); }, this.g = function () {
            const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.mh; const
                i = t.mw; return (a = i / r) < e ? (n < i && (a = o), [a * r, a]) : [(a = o > e ? e : o) * r, a];
        }, this.d = function () { return c; };
    } /**
       *
       * @param t
       * @param e
       */
    function ct(t, e) {
        const n = this; const o = t.elements.sources; const i = t.isl; const s = t.la; const r = t.props.initialAnimation; const a = t.resolve; const c = t.saw; const l = t.sew; const
            d = t.sz; /**
                       *
                       * @param t
                       * @param n
                       */
        function h(t, n) { d[e] = a(at, [e, t, n]), d[e].s(); } this.a = function (t, a) { i[e] = !0, o[e].classList.add(u), c[e].classList.add(r), c[e].removeChild(c[e].firstChild), requestAnimationFrame((() => { requestAnimationFrame((() => { l[e].classList.add('fslightboxtt'); })); })), h(t, a), s.s(e), s.t(e), n.a = h; };
    } /**
       *
       * @param t
       * @param e
       */
    function ut(t, e) {
        let n; const o = this; const i = t.elements.sources; const s = t.props; const
            r = (0, t.resolve)(ct, [e]); this.handleImageLoad = function (t) {
            const e = t.target; const n = e.naturalWidth; const
                o = e.naturalHeight; r.a(n, o);
        }, this.handleVideoLoad = function (t) {
            const e = t.target; const o = e.videoWidth; const
                i = e.videoHeight; n = !0, r.a(o, i);
        }, this.handleNotMetaDatedVideoLoad = function () { n || o.handleYoutubeLoad(); }, this.handleYoutubeLoad = function () {
            let t = 1920; let
                e = 1080; s.maxYoutubeDimensions && (t = s.maxYoutubeDimensions.width, e = s.maxYoutubeDimensions.height), r.a(t, e);
        }, this.handleCustomLoad = function () { const t = i[e]; t.offsetWidth && t.offsetHeight ? r.a(t.offsetWidth, t.offsetHeight) : setTimeout(o.handleCustomLoad); };
    } /**
       *
       * @param t
       * @param e
       */
    function lt(t, e) {
        const n = t.elements.sources; const o = t.props.customAttributes; const
            i = n[e]; for (const s in o[e]) { const r = o[e][s]; s !== 'class' ? i.setAttribute(s, r) : i.classList.add('a'); }
    } /**
       *
       * @param t
       * @param e
       */
    function dt(t, e) {
        const n = t.collections.sourceLoadHandlers; const o = t.elements.sources; const i = t.props.sources; const s = t.saw; const
            r = document.createElement('img'); o[e] = r, r.className = 'fslightboxs', r.src = i[e], r.onload = n[e].handleImageLoad, lt(t, e), s[e].appendChild(r);
    } /**
       *
       * @param t
       * @param e
       */
    function ht(t, e) {
        const n = t.collections.sourceLoadHandlers; const o = t.elements.sources; const i = t.props.sources; const s = t.saw; const r = document.createElement('video'); const
            a = document.createElement('source'); o[e] = r, r.className = 'fslightboxs', r.src = i[e], r.onloadedmetadata = function (t) { n[e].handleVideoLoad(t); }, r.controls = !0, lt(t, e), r.appendChild(a), setTimeout(n[e].handleNotMetaDatedVideoLoad, 3e3), s[e].appendChild(r);
    } /**
       *
       * @param t
       * @param e
       */
    function ft(t, e) {
        const n = t.collections.sourceLoadHandlers; const o = t.elements; const i = o.sources; let s = o.saw; const r = t.props.sources; const a = (s = t.saw, document.createElement('iframe')); const c = r[e]; const
            u = c.split('?')[1]; i[e] = a, a.className = 'fslightboxs fslightboxyt', a.src = 'https://www.youtube.com/embed/'.concat(c.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], '?').concat(u || ''), a.allowFullscreen = !0, lt(t, e), s[e].appendChild(a), n[e].handleYoutubeLoad();
    } /**
       *
       * @param t
       * @param e
       */
    function pt(t, e) {
        const n = t.collections.sourceLoadHandlers; const o = t.elements.sources; const i = t.props.sources; const s = t.saw; const
            r = i[e]; o[e] = r, r.classList.add('fslightboxs'), lt(t, e), s[e].appendChild(r), n[e].handleCustomLoad();
    } /**
       *
       * @param t
       * @param e
       */
    function mt(t, e) {
        t.data.isSourceLoaded; let n; let o; const i = t.elements.sources; const s = t.props; const
            a = s.initialAnimation; return s.sources, n = t.saw, o = document.createElement('div'), n = n[e], o.className = 'fslightboxin '.concat(r), o.innerHTML = 'Invalid source', n.removeChild(n.firstChild), i[e] = o, n.classList.add(a), void n.appendChild(o);
    } /**
       *
       * @param t
       * @param e
       * @param n
       */
    function bt(t, e, n) { const o = t.props.thumbsIcons; if (o[n]) { e.appendChild(o[n].cloneNode(!0)); const i = document.createElement('div'); i.className = 'fslightboxtd', e.appendChild(i); } } /**
                                                                                                                                                                                                       *
                                                                                                                                                                                                       * @param t
                                                                                                                                                                                                       * @param e
                                                                                                                                                                                                       * @param n
                                                                                                                                                                                                       */
    function gt(t, e, n) {
        const o = t.elements; const i = o.thumbsWrappers; const
            s = o.thumbsInner; i[e] = document.createElement('div'), i[e].className = y, bt(t, i[e], e), (function (t, e, n, o) {
            const i = t.core.thumbLoadHandler.handleLoad; const s = t.elements.thumbs; const
                r = t.stageIndexes.current; s[n] = document.createElement('img'), s[n].src = o; let a = b; r === n && (a += ' fslightboxta'), s[n].className = a, s[n].onload = i, e.appendChild(s[n]);
        }(t, i[e], e, n)), s.appendChild(i[e]);
    } /**
       *
       * @param t
       */
    function vt(t) {
        const e = t.core.thumbsRenderDispatcher; const n = t.data; const o = t.props; const i = o.showThumbsOnMount; const s = o.sources; const
            a = o.thumbs; this.buildThumbForTypeAndIndex = function (o, c) {
            let u; u = a[c] ? function () { return gt(t, c, a[c]); } : o === nt ? function () { return gt(t, c, s[c]); } : function () {
                return (function (t, e) {
                    const n = t.elements; const o = n.thumbsWrappers; const
                        i = n.thumbsInner; o[e] = document.createElement('div'), o[e].className = ''.concat(C, ' ').concat(y), bt(t, o[e], e), (function (t, e, n) {
                        const o = t.core.thumbLoadHandler.handleLoad; const i = t.elements.thumbs; const
                            s = t.stageIndexes.current; i[n] = document.createElement('div'); let a = ''.concat(b, ' ').concat(r); s === n && (a += ' fslightboxta'), i[n].className = a, j(i[n], '22px', 0, '0 0 30 30', 'M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16.212,8l-0.2,9h-2.024l-0.2-9 H16.212z M15.003,22.189c-0.828,0-1.323-0.441-1.323-1.182c0-0.755,0.494-1.196,1.323-1.196c0.822,0,1.316,0.441,1.316,1.196 C16.319,21.748,15.825,22.189,15.003,22.189z'), e.appendChild(i[n]), setTimeout(o);
                    }(t, o[e], e)), i.appendChild(o[e]);
                }(t, c));
            }, e.addFunctionToToBeRenderedAtIndex(u, c), (i || n.isThumbing) && e.renderThumbsIfNotYetAndAllTypesDetected();
        };
    } /**
       *
       * @param t
       */
    function xt(t) {
        let e; const n = t.collections; const o = n.sourceLoadHandlers; const i = n.sourcesRenderFunctions; const s = t.core.sourceDisplayFacade; const r = t.props.disableThumbs; const
            a = t.resolve; r || (e = a(vt)), this.runActionsForSourceTypeAndIndex = function (n, c) { let u; switch (n !== rt && (o[c] = a(ut, [c])), n) { case nt: u = dt; break; case ot: u = ht; break; case it: u = ft; break; case st: u = pt; break; default: u = mt; }i[c] = function () { return u(t, c); }, s.displaySourcesWhichShouldBeDisplayed(), r || e.buildThumbForTypeAndIndex(n, c); };
    } /**
       *
       * @param t
       * @param e
       * @param n
       */
    function wt(t, e, n) {
        const o = t.props; const i = o.types; const s = o.type; const
            r = o.sources; this.getTypeSetByClientForIndex = function (t) { let e; return i && i[t] ? e = i[t] : s && (e = s), e; }, this.retrieveTypeWithXhrForIndex = function (t) {
            !(function (t, e) {
                const n = document.createElement('a'); n.href = t; const o = n.hostname; if (o === 'www.youtube.com' || o === 'youtu.be') return e(it); const i = new XMLHttpRequest(); i.onreadystatechange = function () {
                    if (i.readyState !== 4) {
                        if (i.readyState === 2) {
                            let t; const
                                n = i.getResponseHeader('content-type'); switch (n.slice(0, n.indexOf('/'))) { case 'image': t = nt; break; case 'video': t = ot; break; default: t = rt; }i.onreadystatechange = null, i.abort(), e(t);
                        }
                    } else e(rt);
                }, i.open('GET', t), i.send();
            }(r[t], ((o) => { e.handleReceivedSourceTypeForUrl(o, r[t]), n.runActionsForSourceTypeAndIndex(o, t); })));
        };
    } /**
       *
       * @param t
       */
    function yt(t) {
        const e = t.props.sources; const n = t.st; const o = t.stageIndexes; const
            i = e.length - 1; n.getPreviousSlideIndex = function () { return o.current === 0 ? i : o.current - 1; }, n.getNextSlideIndex = function () { return o.current === i ? 0 : o.current + 1; }, n.u = i === 0 ? function () { } : i === 1 ? function () { o.current === 0 ? (o.next = 1, delete o.previous) : (o.previous = 0, delete o.next); } : function () { o.previous = n.getPreviousSlideIndex(), o.next = n.getNextSlideIndex(); }, n.i = i <= 2 ? function () { return !0; } : function (t) { const e = o.current; if (e === 0 && t === i || e === i && t === 0) return !0; const n = e - t; return n === -1 || n === 0 || n === 1; };
    } /**
       *
       * @param t
       */
    function Ct(t) {
        const e = t.componentsServices; const o = t.core; const i = o.eventsDispatcher; const r = (o.lightboxOpener, o.globalEventsController); const l = o.scrollbarRecompensor; const d = o.sourceDisplayFacade; const h = t.data; const m = t.ea; const b = t.elements; const y = t.la; const C = t.smw; const L = t.st; const N = t.stageIndexes; const k = t.sws; const B = t.ui; let
            W = !1; /**
                     *
                     */
        function M() {
            let e; const o = t.props; const r = o.disableThumbs; const a = o.showThumbsOnMount; const
                l = o.sources; W = !0, (function (t) { const e = t.props; t.dss = e.disableSlideSwiping, t.dt = e.disableThumbs, t.c = e.sources.length, t.tc = e.showThumbsWithCaptions; }(t)), h.scrollbarWidth = (function () {
                const t = document.createElement('div'); const e = t.style; const
                    n = document.createElement('div'); e.visibility = 'hidden', e.width = '100px', e.msOverflowStyle = 'scrollbar', e.overflow = 'scroll', n.style.width = '100%', document.body.appendChild(t); const o = t.offsetWidth; t.appendChild(n); const i = n.offsetWidth; return document.body.removeChild(t), o - i;
            }()), h.unloadedThumbsCount = l.length, r || (h.isThumbing = a, (function (t) {
                const e = t.core; const n = t.data; const o = t.elements; const
                    i = t.props; n.isThumbing = i.showThumbsOnMount, n.thumbsInnerWidth = null, n.thumbsTransform = 0, n.thumbedSourceEnhancementWrapperScale = null, n.thumbedSourceEnhancementWrapperTranslateY = null, n.unloadedThumbsCount = i.sources.length, t.thumbsSwipingProps = { i: !1, downScreenX: null, swipedX: null }, e.thumbLoadHandler = {}, e.thumbsRenderDispatcher = {}, e.thumbsSwipingDown = {}, e.thumbsToggler = {}, e.thumbsTransformer = {}, e.thumbsTransformTransitioner = {}, o.thumbsContainer = null, o.thumbs = [], o.thumbsWrappers = [], o.thumbsComponents = [], o.thumbsInner = null, (function (t) {
                    const e = t.core.thumbLoadHandler; const n = t.componentsServices; const o = t.data; const i = t.elements.thumbsWrappers; const
                        s = t.la; e.handleLoad = function () { if (o.unloadedThumbsCount--, o.unloadedThumbsCount === 0) { for (let t = 0; t < i.length; t++)i[t].classList.add(u); s.rt(), n.hideThumbsLoader(); } };
                }(t)), (function (t) {
                    const e = t.core.thumbsRenderDispatcher; const n = t.props.sources; const o = []; let i = !1; let
                        s = 0; e.addFunctionToToBeRenderedAtIndex = function (t, e) { o[e] = t, s++; }, e.renderThumbsIfNotYetAndAllTypesDetected = function () { if (!i && s === n.length) { i = !0; for (let t = 0; t < n.length; t++)o[t](); } };
                }(t)), (function (t) {
                    const e = t.core; const n = e.thumbsSwipingDown; const o = e.pointeringBucket; const
                        i = t.thumbsSwipingProps; n.listener = function (t) { t.preventDefault(), o.runSwipingDownActionsForPropsAndEvent(i, t); };
                }(t)), (function (t) {
                    const e = t.core.thumbsToggler; const n = t.data; const
                        o = (0, t.resolve)(T); e.toggleThumbs = function () { n.isThumbing ? o.x() : o.o(); };
                }(t)), (function (t) {
                    const e = t.core; const n = e.thumbsTransformer; const o = e.thumbsTransformTransitioner; const i = t.data; const
                        s = (0, t.resolve)(A); n.transformToCurrent = function () { i.thumbsInnerWidth > innerWidth ? s.runActions() : s.runToThinThumbsActions(); }, n.transformToCurrentWithTransition = function () { i.thumbsInnerWidth > innerWidth && o.callActionWithTransition(s.runActions); };
                }(t)), (function (t) {
                    const e = t.core.thumbsTransformTransitioner; const n = t.elements; const
                        o = (0, t.q)((() => { n.thumbsInner.classList.remove('fslightboxtt'); }), 300); e.callActionWithTransition = function (t) { n.thumbsInner.classList.add('fslightboxtt'), t(), o(); };
                }(t));
            }(t))), (function (t) {
                !(function (t) {
                    const e = t.core; const n = e.classFacade; const o = e.st; const
                        i = t.elements; n.removeFromEachElementClassIfContains = function (t, e) { for (let n = 0; n < i[t].length; n++)z(i[t][n], e); }, n.stagedRemovalAndOutstagedAddingOfClassIfContains = function (t, e) { for (let n = 0; n < i[t].length; n++)o.i(n) ? z(i[t][n], e) : S(i[t][n], e); };
                }(t)), (function (t) {
                    const e = t.core.clickZoomer; const n = (t.elements, t.props.zoomIncrement); const o = t.q; const i = t.z; const
                        s = o((() => { z(t.swc, 'fslightboxtt'); }), 300); e.zoomIn = function () { r(), a(t.zv + n); }, e.zoomOut = function () { t.zv - n <= 1 ? t.zv !== 1 && (a(1), i.e()) : (r(), a(t.zv - n), t.zv === 1 && i.e()); }; var r = function () { t.zv === 1 && i.b(); }; var
                        a = function (e) { S(t.swc, 'fslightboxtt'), i.z(e), s(); };
                }(t)), (function (t) {
                    const e = t.ea; const n = t.data; const o = t.elements; const i = o.captions; const s = o.thumbs; const r = (t.stageIndexes, t.tc); const
                        a = t.ui; /**
                                   *
                                   * @param t
                                   */
                    function c(t) { if (r) for (let e = 0; e < i.length; e++) { const n = i[e]; n && n.classList[t]('fslightboxct'); } } e.c = function (e, o) { (r || !n.isThumbing || t.xu) && (a.hc(e), a.sc(o)); }, e.dc = function () { c('remove'); }, e.uc = function () { c('add'); }, e.t = function (t, e) { s && s[e] && (s[t].classList.remove('fslightboxta'), s[e].classList.add('fslightboxta')); };
                }(t)), (function (t) {
                    const e = t.core.eventsDispatcher; const
                        n = t.props; e.dispatch = function (e) { n[e] && n[e](t); };
                }(t)), (function (t) {
                    const e = t.componentsServices; const n = t.data; const o = t.fs; const
                        i = ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange']; /**
                                                                                                                          *
                                                                                                                          * @param t
                                                                                                                          */
                    function s(t) { for (let e = 0; e < i.length; e++)document[t](i[e], r); } /**
                                                                                               *
                                                                                               */
                    function r() { document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement ? e.ofs() : e.xfs(); } o.o = function () { e.ofs(); const t = document.documentElement; t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen(); }, o.x = function () { e.xfs(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen(); }, o.t = function () { n.ifs ? o.x() : o.o(); }, o.l = function () { s('addEventListener'); }, o.q = function () { s('removeEventListener'); };
                }(t)), (function (t) {
                    let e; const n = t.core.globalEventsController; const o = t.fs; const i = t.la; const s = t.r; const
                        r = (t.ui, s(X)); n.addListeners = function () { document.addEventListener('pointermove', r.m), document.addEventListener('pointerup', r.u), addEventListener('resize', i.r), e = function (e) { Y(t, e); }, document.addEventListener('keydown', e), document.addEventListener('wheel', r.w), o.l(); }, n.removeListeners = function () { document.removeEventListener('pointermove', r.m), document.removeEventListener('pointerup', r.u), removeEventListener('resize', i.r), document.removeEventListener('keydown', e), document.removeEventListener('wheel', r.w), o.q(); };
                }(t)), (function (t) {
                    t.c; const e = t.data; const n = t.ea; const o = t.elements; const i = t.f; const s = t.la; const r = t.props.UIFadeOutTime; const a = t.q; const c = t.stageIndexes; const u = t.tc; const l = t.ui; const d = o.captions; const
                        h = a((() => { t.xu = !0, f(y), t.zv === 1 && e.isThumbing && (s.ut(), u ? n.dc() : l.sc(c.current)); }), r); /**
                                                                                                                                       *
                                                                                                                                       * @param t
                                                                                                                                       */
                    function f(t) { p(t), m(t), e.isThumbing && w(t); } /**
                                                                         *
                                                                         * @param t
                                                                         */
                    function p(t) { t(o.nav); } /**
                                                 *
                                                 * @param t
                                                 */
                    function m(t) { o.slideButtonPrevious && (t(o.slideButtonPrevious), t(o.slideButtonNext)); } /**
                                                                                                                  *
                                                                                                                  * @param t
                                                                                                                  * @param e
                                                                                                                  */
                    function b(t, e) { x(t, e); } /**
                                                   *
                                                   * @param t
                                                   */
                    function g(t) { m(t), e.isThumbing ? (w(t), u && v(t)) : v(t); } /**
                                                                                      *
                                                                                      * @param t
                                                                                      */
                    function v(t) { x(t, c.current); } /**
                                                        *
                                                        * @param t
                                                        * @param e
                                                        */
                    function x(t, e) { const n = d[e]; n && t(n); } /**
                                                                     *
                                                                     * @param t
                                                                     */
                    function w(t) { t(o.thumbsContainer); } /**
                                                             *
                                                             * @param t
                                                             */
                    function y(t) { t.classList.add('fslightboxx'); } /**
                                                                       *
                                                                       * @param t
                                                                       */
                    function C(t) { t.classList.remove('fslightboxx'); } r ? (l.qps = function () { h(), t.xu && (t.xu = !1, t.zv === 1 ? f(C) : p(C)), t.zv === 1 && e.isThumbing && (i(((t) => { s.t(t); })), u ? n.uc() : l.hc(c.current)); }, l.q = function () { h(); }) : (l.qps = function () { }, l.q = function () { }), l.sc = function (t) { b(C, t); }, l.hc = function (t) { b(y, t); }, l.zh = function () { g(y); }, l.zs = function () { g(C); }, l.sthc = function () { w(C), u || v(y); }, l.htsc = function () { w(y), u || v(C); };
                }(t)), (function (t) {
                    const e = t.core.lightboxCloser; const
                        n = (0, t.resolve)(I); e.close = function () { n.isLightboxFadingOut || n.runActions(); };
                }(t)), (function (t) { const e = t.core.pointeringBucket; t.elements, e.runSwipingDownActionsForPropsAndEvent = function (t, e) { t.i = !0, t.downScreenX = e.screenX, t.swipedX = 0; }, e.runSwipingMoveActionsForPropsAndEvent = function (e, n) { S(t.h, 'fslightboxcg'), e.swipedX = n.screenX - e.downScreenX; }, e.runSwipingTopActionsForPropsAndEvent = function (e) { z(t.h, 'fslightboxcg'), e.i = !1; }; }(t)), (function (t) {
                    const e = t.data; const
                        n = t.core.scrollbarRecompensor; n.addRecompense = function () { document.readyState === 'complete' ? o() : window.addEventListener('load', (() => { o(), n.addRecompense = o; })); }; var o = function () { document.body.offsetHeight > window.innerHeight && (document.body.style.marginRight = `${e.scrollbarWidth}px`); }; n.removeRecompense = function () { document.body.style.removeProperty('margin-right'); };
                }(t)), (function (t) {
                    const e = t.c; const n = t.core.thumbsTransformer; const o = t.data; const i = t.dt; const s = t.elements; const r = t.f; const a = t.isl; const c = t.la; const u = t.props.sourceMargin; const l = t.sew; const d = t.smw; const h = t.sz; const f = t.stageIndexes; const p = t.tc; const m = s.captions; const b = s.thumbs; const g = 1 - 2 * u; const v = 1 - u; const x = []; const w = []; const y = []; const C = []; const L = []; let
                        T = 0; /**
                                *
                                */
                    function z() {
                        const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; const
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1; l[arguments.length > 2 ? arguments[2] : void 0].style.transform = 'translateY('.concat(t, 'px) scale(').concat(e, ')');
                    } c.r = function () {
                        innerWidth > 992 ? t.mw = g * innerWidth : t.mw = innerWidth, t.mh = g * innerHeight, o.unloadedThumbsCount === 0 && c.rt(), void 0 !== f.previous && d[f.previous].ne(), void 0 !== f.next && d[f.next].p(), r(((t) => {
                            const e = h[t]; const
                                n = m[t]; e && e.s(), n && (x[t] = n.offsetHeight), i || (T = s.thumbsContainer.offsetHeight), c.s(t), d[t].d(), c.t(t);
                        }));
                    }, c.s = function (t) {
                        const e = h[t]; if (e) {
                            const n = e.d(); const
                                o = n[0] + n[1]; if (x[t]) { const s = e.g(innerHeight * v - x[t]); w[t] = (s[0] + s[1]) / o, L[t] = -(x[t] - innerHeight / 2 + s[1] / 2), L[t] > 0 && (L[t] = 0); } if (!i) { if (p && x[t]) { const r = T + x[t]; a = e.g((innerHeight - r) * (1 - 1.4 * u) + 34), y[t] = (a[0] + a[1]) / o, C[t] = -(r - 34 - innerHeight / 2 + a[1] / 2); } else { var a = e.g(innerHeight * v - T); y[t] = (a[0] + a[1]) / o, C[t] = -(T - innerHeight / 2 + a[1] / 2); } C[t] > 0 && (C[t] = 0); }
                        }
                    }, c.t = function (e) { a[e] && (t.zv !== 1 ? z(0, 1, e) : o.isThumbing ? z(C[e], y[e], e) : z(L[e], w[e], e)); }, c.ut = function () { r(((t) => { a[t] && z(L[t], w[t], t); })); }, c.rt = function () { o.thumbsInnerWidth = 0; for (let t = 0; t < e; t++)o.thumbsInnerWidth += b[t].offsetWidth + 8; n.transformToCurrent(); };
                }(t)), F(t), (function (t) {
                    const e = t.core; const n = e.slideChangeFacade; const o = e.slideIndexChanger; const i = t.props.sources; const
                        s = t.st; i.length > 1 ? (n.changeToPrevious = function () { o.jumpTo(s.getPreviousSlideIndex()); }, n.changeToNext = function () { o.jumpTo(s.getNextSlideIndex()); }) : (n.changeToPrevious = function () { }, n.changeToNext = function () { });
                }(t)), (function (t) {
                    const e = t.componentsServices; const n = t.core; const o = n.eventsDispatcher; const i = n.slideIndexChanger; const s = n.sourceDisplayFacade; const r = n.thumbsTransformer; const a = t.ea; const c = t.isl; const u = t.props.disableThumbs; const l = t.resolve; const d = t.smw; const h = t.st; const f = t.stageIndexes; const p = t.sws; const
                        m = t.z; i.changeTo = function (t) { const n = f.current; m.r(), a.c(n, t), f.current = t, h.u(), e.setSlideNumber(t + 1), u || (a.t(n, t), r.transformToCurrentWithTransition()), s.displaySourcesWhichShouldBeDisplayed(), o.dispatch('onSlideChange'); }, i.jumpTo = function (t) { const e = f.current; if (e !== t) { const n = l(E, [{ previous: f.previous, current: e, next: f.next }, c[e], c[t]]); i.changeTo(t); for (let o = 0; o < d.length; o++)d[o].d(); p.d(e), p.c(), requestAnimationFrame((() => { requestAnimationFrame(n.runJumpReflowedActions); })); } };
                }(t)), (function (t) {
                    const e = t.collections.sourcesRenderFunctions; const n = t.core.sourceDisplayFacade; const o = t.props.loadOnlyCurrentSource; const
                        i = t.stageIndexes; /**
                                             *
                                             * @param t
                                             */
                    function s(t) { e[t] && (e[t](), delete e[t]); } n.displaySourcesWhichShouldBeDisplayed = function () { if (o) s(i.current); else for (const t in i) s(i[t]); };
                }(t)), (function (t) {
                    const e = t.isl; const n = t.props; const o = n.initialAnimation; const i = n.slideChangeAnimation; const s = t.stageIndexes; const r = t.saw; const a = t.smw; const c = t.st; const
                        u = t.sws; u.a = function () { for (const t in s) a[s[t]].s(); }, u.b = function (t) { void 0 === t || c.i(t) || (a[t].h(), a[t].n()); }, u.c = function () { for (const t in s) u.d(s[t]); }, u.d = function (t) { if (e[t]) { const n = r[t]; z(n, o), z(n, i), z(n, f); } };
                }(t)), (function (t) {
                    const e = t.elements; const n = e.sources; let o = e.smw; const i = t.la; const s = t.p; const r = (o = t.smw, t.stageIndexes); const a = t.ui; const
                        c = t.z; /**
                                  *
                                  * @param t
                                  */
                    function u(t) { const e = n[r.current]; e && (e.style.cursor = t); } c.z = function (e) { t.zv = parseFloat(e.toPrecision(12)), t.swc.style.transform = 'scale('.concat(t.zv, ')'); }, c.r = function () { t.zv !== 1 && (c.z(1), c.e()); }, c.b = function () { u('grab'), a.zh(), i.t(); }, c.e = function () { u('zoom-in'), a.zs(), o[r.current].a(), o[r.current].v(0, 0).z(), s.ux = 0, s.uy = 0; };
                }(t));
            }(t)), (function (t) {
                const e = t.elements; const
                    o = document.createElement('div'); o.className = ''.concat(n, 'container ').concat(s, ' ').concat(p), e.container = o;
            }(t)), (function (t) { t.h = document.createElement('div'), t.h.className = 'fslightboxth '.concat(s).concat(c); }(t)), Z(t), (function (t) { t.ssb = document.createElement('div'), t.ssb.className = 'fslightboxss '.concat(c), t.elements.container.appendChild(t.ssb); }(t)), $(t), (function (t) { for (let e = t.props.captions, n = 0; n < e.length; n++)e[n] && K(t, n); }(t)), l.length > 1 && (Q(e = t, 'previous'), Q(e, 'next')), r || (function (t) {
                const e = t.componentsServices; const n = t.elements; const
                    o = t.data; n.thumbsContainer = document.createElement('div'); let i; let r; let
                    a = g; /**
                            *
                            */
                function u() { r = !0, (i = J(n.thumbsContainer)).classList.add(v); } o.isThumbing ? u() : a += ' fslightboxx', e.appendThumbsLoaderIfNotYet = function () { r || u(); }, e.hideThumbsLoader = function () { n.thumbsContainer.removeChild(i); }, n.thumbsContainer.className = a, n.container.appendChild(n.thumbsContainer), (function (t) { const e = t.elements; e.thumbsCursorer = document.createElement('div'), e.thumbsCursorer.className = ''.concat(x, ' ').concat(s, ' ').concat(c); }(t)), (function (t) {
                    const e = t.core.thumbsSwipingDown.listener; const
                        n = t.elements; n.thumbsInner = document.createElement('div'), n.thumbsInner.className = w, n.thumbsInner.addEventListener('pointerdown', e), n.thumbsContainer.appendChild(n.thumbsInner);
                }(t));
            }(t)), (function (t) { for (let e = t.props.sources, n = t.resolve, o = n(et), i = n(xt), s = n(wt, [o, i]), r = 0; r < e.length; r++) if (typeof e[r] === 'string') { const a = s.getTypeSetByClientForIndex(r); if (a) i.runActionsForSourceTypeAndIndex(a, r); else { const c = o.getSourceTypeFromLocalStorageByUrl(e[r]); c ? i.runActionsForSourceTypeAndIndex(c, r) : s.retrieveTypeWithXhrForIndex(r); } } else i.runActionsForSourceTypeAndIndex(st, r); }(t)), i.dispatch('onInit');
        } t.open = function () {
            const n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; const o = N.previous; const s = N.current; const
                c = N.next; N.current = n, W || yt(t), L.u(), W ? (k.c(), k.a(), k.b(o), k.b(s), k.b(c), m.c(s, N.current), m.t(s, N.current), i.dispatch('onShow')) : M(), d.displaySourcesWhichShouldBeDisplayed(), e.setSlideNumber(n + 1), document.body.appendChild(b.container), document.documentElement.classList.add(a), l.addRecompense(), r.addListeners(), y.r(), C[N.current].n(), B.q(), i.dispatch('onOpen');
        };
    } /**
       *
       * @param t
       * @param e
       * @param n
       */
    function Lt(t, e, n) { return Lt = Tt() ? Reflect.construct.bind() : function (t, e, n) { const o = [null]; o.push.apply(o, e); const i = new (Function.bind.apply(t, o))(); return n && zt(i, n.prototype), i; }, Lt.apply(null, arguments); } /**
                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                     */
    function Tt() { if (typeof Reflect === 'undefined' || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if (typeof Proxy === 'function') return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => { }))), !0; } catch (t) { return !1; } } /**
                                                                                                                                                                                                                                                                                                        *
                                                                                                                                                                                                                                                                                                        * @param t
                                                                                                                                                                                                                                                                                                        * @param e
                                                                                                                                                                                                                                                                                                        */
    function zt(t, e) { return zt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, zt(t, e); } /**
                                                                                                                                                        *
                                                                                                                                                        * @param t
                                                                                                                                                        */
    function St(t) { return (function (t) { if (Array.isArray(t)) return At(t); }(t)) || (function (t) { if (typeof Symbol !== 'undefined' && t[Symbol.iterator] != null || t['@@iterator'] != null) return Array.from(t); }(t)) || (function (t, e) { if (t) { if (typeof t === 'string') return At(t, e); let n = Object.prototype.toString.call(t).slice(8, -1); return n === 'Object' && t.constructor && (n = t.constructor.name), n === 'Map' || n === 'Set' ? Array.from(t) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? At(t, e) : void 0; } }(t)) || (function () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }()); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param t
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */
    function At(t, e) { (e == null || e > t.length) && (e = t.length); for (var n = 0, o = new Array(e); n < e; n++)o[n] = t[n]; return o; } /**
                                                                                                                                              *
                                                                                                                                              */
    function It() {
        for (var t = document.getElementsByTagName('a'), e = function (e) {
                if (!t[e].hasAttribute('data-fslightbox')) return 'continue'; const n = t[e].getAttribute('href'); if (!n) return console.warn('The "data-fslightbox" attribute was set without the "href" attribute.'), 'continue'; const o = t[e].getAttribute('data-fslightbox'); fsLightboxInstances[o] || (fsLightboxInstances[o] = new FsLightbox()); let i = null; n.charAt(0) === '#' ? (i = document.getElementById(n.substring(1)).cloneNode(!0)).removeAttribute('id') : i = n, fsLightboxInstances[o].props.sources.push(i), fsLightboxInstances[o].elements.a.push(t[e]); const s = fsLightboxInstances[o].props.sources.length - 1; t[e].onclick = function (t) { t.preventDefault(), fsLightboxInstances[o].open(s); }, d('captions', 'data-caption'), d('types', 'data-type'), d('thumbs', 'data-thumb'); for (let r = ['href', 'data-fslightbox', 'data-caption', 'data-type', 'data-thumb'], a = t[e].attributes, c = fsLightboxInstances[o].props.customAttributes, u = 0; u < a.length; u++) if (r.indexOf(a[u].name) === -1 && a[u].name.substr(0, 5) === 'data-') { c[s] || (c[s] = {}); const l = a[u].name.substr(5); c[s][l] = a[u].value; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @param n
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @param i
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */
                function d(n, i) { t[e].hasAttribute(i) && (fsLightboxInstances[o].props[n][s] = t[e].getAttribute(i)); }
            }, n = 0; n < t.length; n++)e(n); const o = Object.keys(fsLightboxInstances); window.fsLightbox = fsLightboxInstances[o[o.length - 1]];
    } return window.FsLightbox = function () {
        const t = this; this.props = {
            sources: [],
            maxYoutubeDimensions: null,
            customAttributes: [],
            customClasses: [],
            types: [],
            type: null,
            thumbs: [],
            thumbsIcons: [],
            captions: [],
            videosPosters: [],
            customToolbarButtons: [],
            initialAnimation: p,
            slideChangeAnimation: h,
            sourceMargin: 0.05,
            slideDistance: 0.3,
            slideshowTime: 8e3,
            UIFadeOutTime: 8e3,
            zoomIncrement: 0.25,
            toolbarButtons: {
                thumbs: {
                    width: '17px', height: '17px', viewBox: '0 0 22 22', d: 'M 3 2 C 2.448 2 2 2.448 2 3 L 2 6 C 2 6.552 2.448 7 3 7 L 6 7 C 6.552 7 7 6.552 7 6 L 7 3 C 7 2.448 6.552 2 6 2 L 3 2 z M 10 2 C 9.448 2 9 2.448 9 3 L 9 6 C 9 6.552 9.448 7 10 7 L 13 7 C 13.552 7 14 6.552 14 6 L 14 3 C 14 2.448 13.552 2 13 2 L 10 2 z M 17 2 C 16.448 2 16 2.448 16 3 L 16 6 C 16 6.552 16.448 7 17 7 L 20 7 C 20.552 7 21 6.552 21 6 L 21 3 C 21 2.448 20.552 2 20 2 L 17 2 z M 3 9 C 2.448 9 2 9.448 2 10 L 2 13 C 2 13.552 2.448 14 3 14 L 6 14 C 6.552 14 7 13.552 7 13 L 7 10 C 7 9.448 6.552 9 6 9 L 3 9 z M 10 9 C 9.448 9 9 9.448 9 10 L 9 13 C 9 13.552 9.448 14 10 14 L 13 14 C 13.552 14 14 13.552 14 13 L 14 10 C 14 9.448 13.552 9 13 9 L 10 9 z M 17 9 C 16.448 9 16 9.448 16 10 L 16 13 C 16 13.552 16.448 14 17 14 L 20 14 C 20.552 14 21 13.552 21 13 L 21 10 C 21 9.448 20.552 9 20 9 L 17 9 z M 3 16 C 2.448 16 2 16.448 2 17 L 2 20 C 2 20.552 2.448 21 3 21 L 6 21 C 6.552 21 7 20.552 7 20 L 7 17 C 7 16.448 6.552 16 6 16 L 3 16 z M 10 16 C 9.448 16 9 16.448 9 17 L 9 20 C 9 20.552 9.448 21 10 21 L 13 21 C 13.552 21 14 20.552 14 20 L 14 17 C 14 16.448 13.552 16 13 16 L 10 16 z M 17 16 C 16.448 16 16 16.448 16 17 L 16 20 C 16 20.552 16.448 21 17 21 L 20 21 C 20.552 21 21 20.552 21 20 L 21 17 C 21 16.448 20.552 16 20 16 L 17 16 z', title: 'Thumbnails',
                },
                zoomIn: {
                    width: '20px', height: '20px', viewBox: '0 0 30 30', d: 'M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z M 12.984375 7.9863281 A 1.0001 1.0001 0 0 0 12 9 L 12 12 L 9 12 A 1.0001 1.0001 0 1 0 9 14 L 12 14 L 12 17 A 1.0001 1.0001 0 1 0 14 17 L 14 14 L 17 14 A 1.0001 1.0001 0 1 0 17 12 L 14 12 L 14 9 A 1.0001 1.0001 0 0 0 12.984375 7.9863281 z', title: 'Zoom In',
                },
                zoomOut: {
                    width: '20px', height: '20px', viewBox: '0 0 30 30', d: 'M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z M 9 12 A 1.0001 1.0001 0 1 0 9 14 L 17 14 A 1.0001 1.0001 0 1 0 17 12 L 9 12 z', title: 'Zoom Out',
                },
                slideshow: {
                    start: {
                        width: '16px', height: '16px', viewBox: '0 0 30 30', d: 'M 6 3 A 1 1 0 0 0 5 4 A 1 1 0 0 0 5 4.0039062 L 5 15 L 5 25.996094 A 1 1 0 0 0 5 26 A 1 1 0 0 0 6 27 A 1 1 0 0 0 6.5800781 26.8125 L 6.5820312 26.814453 L 26.416016 15.908203 A 1 1 0 0 0 27 15 A 1 1 0 0 0 26.388672 14.078125 L 6.5820312 3.1855469 L 6.5800781 3.1855469 A 1 1 0 0 0 6 3 z', title: 'Turn on slideshow',
                    },
                    pause: {
                        width: '14px', height: '14px', viewBox: '0 0 356.19 356.19', d: 'M121,0c18,0,33,15,33,33v372c0,18-15,33-33,33s-32-15-32-33V33C89,15,103,0,121,0zM317,0c18,0,32,15,32,33v372c0,18-14,33-32,33s-33-15-33-33V33C284,15,299,0,317,0z', title: 'Turn off slideshow',
                    },
                },
                fullscreen: {
                    enter: {
                        width: '20px', height: '20px', viewBox: '0 0 18 18', d: 'M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z', title: 'Enter fullscreen',
                    },
                    exit: {
                        width: '24px', height: '24px', viewBox: '0 0 950 1024', d: 'M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z', title: 'Exit fullscreen',
                    },
                },
                close: {
                    width: '20px', height: '20px', viewBox: '0 0 24 24', d: 'M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z', title: 'Close',
                },
            },
            slideButtons: {
                previous: {
                    width: '20px', height: '20px', viewBox: '0 0 20 20', d: 'M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z', title: 'Previous',
                },
                next: {
                    width: '20px', height: '20px', viewBox: '0 0 20 20', d: 'M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z', title: 'Next',
                },
            },
        }, this.data = { isThumbing: !1, scrollbarWidth: 0 }, this.ifs = !1, this.isl = [], this.qs = [], this.ts = [], this.zv = 1, this.p = { p: {}, ux: 0, uy: 0 }, this.stageIndexes = {}, this.elements = {
            a: [], captions: [], container: null, nav: null, slideButtonPrevious: null, slideButtonNext: null, sources: [],
        }, this.saw = [], this.sew = [], this.smw = [], this.componentsServices = { setSlideNumber() { } }, this.f = function (e) { for (let n = 0; n < t.c; n++)e(n); }, this.m = function (e, n) { return function () { for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++)i[s] = arguments[s]; i.unshift(t), n.apply(void 0, i) && e.apply(void 0, i); }; }, this.resolve = function (e) { const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []; return n.unshift(t), Lt(e, St(n)); }, this.r = this.resolve, this.collections = { sourceLoadHandlers: [], sourcesRenderFunctions: [] }, this.sz = [], this.core = {
            classFacade: {}, clickZoomer: {}, eventsDispatcher: {}, globalEventsController: {}, lightboxCloser: {}, lightboxUpdater: {}, pointeringBucket: {}, scrollbarRecompensor: {}, slideChangeFacade: {}, slideIndexChanger: {}, sourceDisplayFacade: {}, swipingActioner: {},
        }, this.ea = {}, this.fs = {}, this.la = {}, this.ss = {}, this.st = {}, this.sws = {}, this.ui = {}, this.z = {}, this.t = function (e, n) { var o = t.ts.push(setTimeout((() => { delete t.ts[o - 1], e(); }), n)); }, this.q = function (e, n) { const o = t.qs.push(0) - 1; return function () { t.qs[o]++, t.t((() => { t.qs[o]--, t.qs[o] || e(); }), n); }; }, Ct(this), this.close = function () { return t.core.lightboxCloser.close(); };
    }, window.fsLightboxInstances = {}, It(), window.refreshFsLightbox = function () { for (const t in fsLightboxInstances) { const e = fsLightboxInstances[t].props; fsLightboxInstances[t] = new FsLightbox(), fsLightboxInstances[t].props = e, fsLightboxInstances[t].props.sources = [], fsLightboxInstances[t].elements.a = []; } It(); }, t;
})())));
