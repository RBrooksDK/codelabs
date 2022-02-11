/* PrismJS 1.25.0
https://prismjs.com/download.html#themes=prism-coy&languages=markup+css+clike+javascript+aspnet+c+csharp+cpp+dart+diff+docker+excel-formula+fsharp+graphql+http+hpkp+hsts+java+javadoc+javadoclike+javastacktrace+json+json5+jsonp+kotlin+latex+markdown+markup-templating+matlab+mongodb+objectivec+php+phpdoc+php-extras+plsql+python+cshtml+regex+ruby+rust+sql+typescript+typoscript+uri+wasm&plugins=line-highlight+line-numbers */



var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function (u) {
        var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, n = 0, e = {}, M = {
            manual: u.Prism && u.Prism.manual,
            disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
            util: {
                encode: function e(n) {
                    return n instanceof W ? new W(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                }, type: function (e) {
                    return Object.prototype.toString.call(e).slice(8, -1)
                }, objId: function (e) {
                    return e.__id || Object.defineProperty(e, "__id", {value: ++n}), e.__id
                }, clone: function t(e, r) {
                    var a, n;
                    switch (r = r || {}, M.util.type(e)) {
                        case"Object":
                            if (n = M.util.objId(e), r[n]) return r[n];
                            for (var i in a = {}, r[n] = a, e) e.hasOwnProperty(i) && (a[i] = t(e[i], r));
                            return a;
                        case"Array":
                            return n = M.util.objId(e), r[n] ? r[n] : (a = [], r[n] = a, e.forEach(function (e, n) {
                                a[n] = t(e, r)
                            }), a);
                        default:
                            return e
                    }
                }, getLanguage: function (e) {
                    for (; e;) {
                        var n = t.exec(e.className);
                        if (n) return n[1].toLowerCase();
                        e = e.parentElement
                    }
                    return "none"
                }, setLanguage: function (e, n) {
                    e.className = e.className.replace(RegExp(t, "gi"), ""), e.classList.add("language-" + n)
                }, currentScript: function () {
                    if ("undefined" == typeof document) return null;
                    if ("currentScript" in document) return document.currentScript;
                    try {
                        throw new Error
                    } catch (e) {
                        var n = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack) || [])[1];
                        if (n) {
                            var t = document.getElementsByTagName("script");
                            for (var r in t) if (t[r].src == n) return t[r]
                        }
                        return null
                    }
                }, isActive: function (e, n, t) {
                    for (var r = "no-" + n; e;) {
                        var a = e.classList;
                        if (a.contains(n)) return !0;
                        if (a.contains(r)) return !1;
                        e = e.parentElement
                    }
                    return !!t
                }
            },
            languages: {
                plain: e, plaintext: e, text: e, txt: e, extend: function (e, n) {
                    var t = M.util.clone(M.languages[e]);
                    for (var r in n) t[r] = n[r];
                    return t
                }, insertBefore: function (t, e, n, r) {
                    var a = (r = r || M.languages)[t], i = {};
                    for (var l in a) if (a.hasOwnProperty(l)) {
                        if (l == e) for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
                        n.hasOwnProperty(l) || (i[l] = a[l])
                    }
                    var s = r[t];
                    return r[t] = i, M.languages.DFS(M.languages, function (e, n) {
                        n === s && e != t && (this[e] = i)
                    }), i
                }, DFS: function e(n, t, r, a) {
                    a = a || {};
                    var i = M.util.objId;
                    for (var l in n) if (n.hasOwnProperty(l)) {
                        t.call(n, l, n[l], r || l);
                        var o = n[l], s = M.util.type(o);
                        "Object" !== s || a[i(o)] ? "Array" !== s || a[i(o)] || (a[i(o)] = !0, e(o, t, l, a)) : (a[i(o)] = !0, e(o, t, null, a))
                    }
                }
            },
            plugins: {},
            highlightAll: function (e, n) {
                M.highlightAllUnder(document, e, n)
            },
            highlightAllUnder: function (e, n, t) {
                var r = {
                    callback: t,
                    container: e,
                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                M.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), M.hooks.run("before-all-elements-highlight", r);
                for (var a, i = 0; a = r.elements[i++];) M.highlightElement(a, !0 === n, r.callback)
            },
            highlightElement: function (e, n, t) {
                var r = M.util.getLanguage(e), a = M.languages[r];
                M.util.setLanguage(e, r);
                var i = e.parentElement;
                i && "pre" === i.nodeName.toLowerCase() && M.util.setLanguage(i, r);
                var l = {element: e, language: r, grammar: a, code: e.textContent};

                function o(e) {
                    l.highlightedCode = e, M.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, M.hooks.run("after-highlight", l), M.hooks.run("complete", l), t && t.call(l.element)
                }

                if (M.hooks.run("before-sanity-check", l), (i = l.element.parentElement) && "pre" === i.nodeName.toLowerCase() && !i.hasAttribute("tabindex") && i.setAttribute("tabindex", "0"), !l.code) return M.hooks.run("complete", l), void (t && t.call(l.element));
                if (M.hooks.run("before-highlight", l), l.grammar) if (n && u.Worker) {
                    var s = new Worker(M.filename);
                    s.onmessage = function (e) {
                        o(e.data)
                    }, s.postMessage(JSON.stringify({language: l.language, code: l.code, immediateClose: !0}))
                } else o(M.highlight(l.code, l.grammar, l.language)); else o(M.util.encode(l.code))
            },
            highlight: function (e, n, t) {
                var r = {code: e, grammar: n, language: t};
                return M.hooks.run("before-tokenize", r), r.tokens = M.tokenize(r.code, r.grammar), M.hooks.run("after-tokenize", r), W.stringify(M.util.encode(r.tokens), r.language)
            },
            tokenize: function (e, n) {
                var t = n.rest;
                if (t) {
                    for (var r in t) n[r] = t[r];
                    delete n.rest
                }
                var a = new i;
                return I(a, a.head, e), function e(n, t, r, a, i, l) {
                    for (var o in r) if (r.hasOwnProperty(o) && r[o]) {
                        var s = r[o];
                        s = Array.isArray(s) ? s : [s];
                        for (var u = 0; u < s.length; ++u) {
                            if (l && l.cause == o + "," + u) return;
                            var c = s[u], g = c.inside, f = !!c.lookbehind, h = !!c.greedy, d = c.alias;
                            if (h && !c.pattern.global) {
                                var v = c.pattern.toString().match(/[imsuy]*$/)[0];
                                c.pattern = RegExp(c.pattern.source, v + "g")
                            }
                            for (var p = c.pattern || c, m = a.next, y = i; m !== t.tail && !(l && y >= l.reach); y += m.value.length, m = m.next) {
                                var k = m.value;
                                if (t.length > n.length) return;
                                if (!(k instanceof W)) {
                                    var x, b = 1;
                                    if (h) {
                                        if (!(x = z(p, y, n, f)) || x.index >= n.length) break;
                                        var w = x.index, A = x.index + x[0].length, P = y;
                                        for (P += m.value.length; P <= w;) m = m.next, P += m.value.length;
                                        if (P -= m.value.length, y = P, m.value instanceof W) continue;
                                        for (var E = m; E !== t.tail && (P < A || "string" == typeof E.value); E = E.next) b++, P += E.value.length;
                                        b--, k = n.slice(y, P), x.index -= y
                                    } else if (!(x = z(p, 0, k, f))) continue;
                                    var w = x.index, L = x[0], S = k.slice(0, w), O = k.slice(w + L.length),
                                        j = y + k.length;
                                    l && j > l.reach && (l.reach = j);
                                    var C = m.prev;
                                    S && (C = I(t, C, S), y += S.length), q(t, C, b);
                                    var N = new W(o, g ? M.tokenize(L, g) : L, d, L);
                                    if (m = I(t, C, N), O && I(t, m, O), 1 < b) {
                                        var _ = {cause: o + "," + u, reach: j};
                                        e(n, t, r, m.prev, y, _), l && _.reach > l.reach && (l.reach = _.reach)
                                    }
                                }
                            }
                        }
                    }
                }(e, a, n, a.head, 0), function (e) {
                    var n = [], t = e.head.next;
                    for (; t !== e.tail;) n.push(t.value), t = t.next;
                    return n
                }(a)
            },
            hooks: {
                all: {}, add: function (e, n) {
                    var t = M.hooks.all;
                    t[e] = t[e] || [], t[e].push(n)
                }, run: function (e, n) {
                    var t = M.hooks.all[e];
                    if (t && t.length) for (var r, a = 0; r = t[a++];) r(n)
                }
            },
            Token: W
        };

        function W(e, n, t, r) {
            this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length
        }

        function z(e, n, t, r) {
            e.lastIndex = n;
            var a = e.exec(t);
            if (a && r && a[1]) {
                var i = a[1].length;
                a.index += i, a[0] = a[0].slice(i)
            }
            return a
        }

        function i() {
            var e = {value: null, prev: null, next: null}, n = {value: null, prev: e, next: null};
            e.next = n, this.head = e, this.tail = n, this.length = 0
        }

        function I(e, n, t) {
            var r = n.next, a = {value: t, prev: n, next: r};
            return n.next = a, r.prev = a, e.length++, a
        }

        function q(e, n, t) {
            for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
            (n.next = r).prev = n, e.length -= a
        }

        if (u.Prism = M, W.stringify = function n(e, t) {
            if ("string" == typeof e) return e;
            if (Array.isArray(e)) {
                var r = "";
                return e.forEach(function (e) {
                    r += n(e, t)
                }), r
            }
            var a = {
                type: e.type,
                content: n(e.content, t),
                tag: "span",
                classes: ["token", e.type],
                attributes: {},
                language: t
            }, i = e.alias;
            i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), M.hooks.run("wrap", a);
            var l = "";
            for (var o in a.attributes) l += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"';
            return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + l + ">" + a.content + "</" + a.tag + ">"
        }, !u.document) return u.addEventListener && (M.disableWorkerMessageHandler || u.addEventListener("message", function (e) {
            var n = JSON.parse(e.data), t = n.language, r = n.code, a = n.immediateClose;
            u.postMessage(M.highlight(r, M.languages[t], t)), a && u.close()
        }, !1)), M;
        var r = M.util.currentScript();

        function a() {
            M.manual || M.highlightAll()
        }

        if (r && (M.filename = r.src, r.hasAttribute("data-manual") && (M.manual = !0)), !M.manual) {
            var l = document.readyState;
            "loading" === l || "interactive" === l && r && r.defer ? document.addEventListener("DOMContentLoaded", a) : window.requestAnimationFrame ? window.requestAnimationFrame(a) : window.setTimeout(a, 16)
        }
        return M
    }(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
    comment: {pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0},
    prolog: {pattern: /<\?[\s\S]+?\?>/, greedy: !0},
    doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
            "internal-subset": {pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null},
            string: {pattern: /"[^"]*"|'[^']*'/, greedy: !0},
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            name: /[^\s<>'"]+/
        }
    },
    cdata: {pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0},
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
            tag: {pattern: /^<\/?[^\s>\/]+/, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}},
            "special-attr": [],
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {punctuation: [{pattern: /^=/, alias: "attr-equals"}, /"|'/]}
            },
            punctuation: /\/?>/,
            "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
        }
    },
    entity: [{pattern: /&[\da-z]{1,8};/i, alias: "named-entity"}, /&#x?[\da-f]{1,8};/i]
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function (a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function (a, e) {
        var s = {};
        s["language-" + e] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[e]
        }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var t = {"included-cdata": {pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s}};
        t["language-" + e] = {pattern: /[\s\S]+/, inside: Prism.languages[e]};
        var n = {};
        n[a] = {
            pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function () {
                return a
            }), "i"), lookbehind: !0, greedy: !0, inside: t
        }, Prism.languages.insertBefore("markup", "cdata", n)
    }
}), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
    value: function (a, e) {
        Prism.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp("(^|[\"'\\s])(?:" + a + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
            lookbehind: !0,
            inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                        value: {
                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                            lookbehind: !0,
                            alias: [e, "language-" + e],
                            inside: Prism.languages[e]
                        }, punctuation: [{pattern: /^=/, alias: "attr-equals"}, /"|'/]
                    }
                }
            }
        })
    }
}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
!function (s) {
    var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
            inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: "selector"
                },
                keyword: {pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0}
            }
        },
        url: {
            pattern: RegExp("\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
            greedy: !0,
            inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: {pattern: RegExp("^" + e.source + "$"), alias: "url"}
            }
        },
        selector: {
            pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"),
            lookbehind: !0
        },
        string: {pattern: e, greedy: !0},
        property: {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0
        },
        important: /!important\b/i,
        function: {pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0},
        punctuation: /[(){};:,]/
    }, s.languages.css.atrule.inside.rest = s.languages.css;
    var t = s.languages.markup;
    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"))
}(Prism);
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
    }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0}],
    string: {pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
    "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {punctuation: /[.\\]/}
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
    }],
    keyword: [{
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
    }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
    }],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
        pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),
        lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
            "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: "language-regex",
                inside: Prism.languages.regex
            }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/
        }
    },
    "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
    },
    parameter: [{
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
    hashbang: {pattern: /^#!.*/, greedy: !0, alias: "comment"},
    "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
            "template-punctuation": {pattern: /^`|`$/, alias: "string"},
            interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                    "interpolation-punctuation": {pattern: /^\$\{|\}$/, alias: "punctuation"},
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    },
    "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
    }
}), Prism.languages.insertBefore("javascript", "operator", {
    "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property"
    }
}), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism.languages.js = Prism.languages.javascript;
!function (s) {
    function a(e, s) {
        return e.replace(/<<(\d+)>>/g, function (e, n) {
            return "(?:" + s[+n] + ")"
        })
    }

    function t(e, n, s) {
        return RegExp(a(e, n), s || "")
    }

    function e(e, n) {
        for (var s = 0; s < n; s++) e = e.replace(/<<self>>/g, function () {
            return "(?:" + e + ")"
        });
        return e.replace(/<<self>>/g, "[^\\s\\S]")
    }

    var n = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
        r = "class enum interface record struct",
        i = "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
        o = "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";

    function l(e) {
        return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b"
    }

    var d = l(r), p = RegExp(l(n + " " + r + " " + i + " " + o)), c = l(r + " " + i + " " + o),
        u = l(n + " " + r + " " + o), g = e("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>", 2),
        b = e("\\((?:[^()]|<<self>>)*\\)", 2), h = "@?\\b[A-Za-z_]\\w*\\b", f = a("<<0>>(?:\\s*<<1>>)?", [h, g]),
        m = a("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*", [c, f]), k = "\\[\\s*(?:,\\s*)*\\]",
        y = a("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?", [m, k]),
        w = a("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?", [a("\\(<<0>>+(?:,<<0>>+)+\\)", [a("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>", [g, b, k])]), m, k]),
        v = {keyword: p, punctuation: /[<>()?,.:[\]]/}, x = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",
        $ = '"(?:\\\\.|[^\\\\"\r\n])*"';
    s.languages.csharp = s.languages.extend("clike", {
        string: [{
            pattern: t("(^|[^$\\\\])<<0>>", ['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),
            lookbehind: !0,
            greedy: !0
        }, {pattern: t("(^|[^@$\\\\])<<0>>", [$]), lookbehind: !0, greedy: !0}],
        "class-name": [{
            pattern: t("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)", [m]),
            lookbehind: !0,
            inside: v
        }, {
            pattern: t("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)", [h, w]),
            lookbehind: !0,
            inside: v
        }, {
            pattern: t("(\\busing\\s+)<<0>>(?=\\s*=)", [h]),
            lookbehind: !0
        }, {
            pattern: t("(\\b<<0>>\\s+)<<1>>", [d, f]),
            lookbehind: !0,
            inside: v
        }, {
            pattern: t("(\\bcatch\\s*\\(\\s*)<<0>>", [m]),
            lookbehind: !0,
            inside: v
        }, {
            pattern: t("(\\bwhere\\s+)<<0>>", [h]),
            lookbehind: !0
        }, {
            pattern: t("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>", [y]),
            lookbehind: !0,
            inside: v
        }, {
            pattern: t("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))", [w, u, h]),
            inside: v
        }],
        keyword: p,
        number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
        operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
        punctuation: /\?\.?|::|[{}[\];(),.:]/
    }), s.languages.insertBefore("csharp", "number", {
        range: {
            pattern: /\.\./,
            alias: "operator"
        }
    }), s.languages.insertBefore("csharp", "punctuation", {
        "named-parameter": {
            pattern: t("([(,]\\s*)<<0>>(?=\\s*:)", [h]),
            lookbehind: !0,
            alias: "punctuation"
        }
    }), s.languages.insertBefore("csharp", "class-name", {
        namespace: {
            pattern: t("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])", [h]),
            lookbehind: !0,
            inside: {punctuation: /\./}
        },
        "type-expression": {
            pattern: t("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))", [b]),
            lookbehind: !0,
            alias: "class-name",
            inside: v
        },
        "return-type": {
            pattern: t("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))", [w, m]),
            inside: v,
            alias: "class-name"
        },
        "constructor-invocation": {
            pattern: t("(\\bnew\\s+)<<0>>(?=\\s*[[({])", [w]),
            lookbehind: !0,
            inside: v,
            alias: "class-name"
        },
        "generic-method": {
            pattern: t("<<0>>\\s*<<1>>(?=\\s*\\()", [h, g]),
            inside: {function: t("^<<0>>", [h]), generic: {pattern: RegExp(g), alias: "class-name", inside: v}}
        },
        "type-list": {
            pattern: t("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))", [d, f, h, w, p.source, b, "\\bnew\\s*\\(\\s*\\)"]),
            lookbehind: !0,
            inside: {
                "record-arguments": {
                    pattern: t("(^(?!new\\s*\\()<<0>>\\s*)<<1>>", [f, b]),
                    lookbehind: !0,
                    greedy: !0,
                    inside: s.languages.csharp
                }, keyword: p, "class-name": {pattern: RegExp(w), greedy: !0, inside: v}, punctuation: /[,()]/
            }
        },
        preprocessor: {
            pattern: /(^[\t ]*)#.*/m,
            lookbehind: !0,
            alias: "property",
            inside: {
                directive: {
                    pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
                    lookbehind: !0,
                    alias: "keyword"
                }
            }
        }
    });
    var _ = $ + "|" + x, B = a("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>", [_]),
        E = e(a("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [B]), 2),
        R = "\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",
        z = a("<<0>>(?:\\s*\\(<<1>>*\\))?", [m, E]);
    s.languages.insertBefore("csharp", "class-name", {
        attribute: {
            pattern: t("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])", [R, z]),
            lookbehind: !0,
            greedy: !0,
            inside: {
                target: {pattern: t("^<<0>>(?=\\s*:)", [R]), alias: "keyword"},
                "attribute-arguments": {pattern: t("\\(<<0>>*\\)", [E]), inside: s.languages.csharp},
                "class-name": {pattern: RegExp(m), inside: {punctuation: /\./}},
                punctuation: /[:,]/
            }
        }
    });
    var S = ":[^}\r\n]+", j = e(a("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [B]), 2),
        A = a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [j, S]),
        F = e(a("[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)", [_]), 2),
        P = a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [F, S]);

    function U(e, n) {
        return {
            interpolation: {
                pattern: t("((?:^|[^{])(?:\\{\\{)*)<<0>>", [e]),
                lookbehind: !0,
                inside: {
                    "format-string": {
                        pattern: t("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)", [n, S]),
                        lookbehind: !0,
                        inside: {punctuation: /^:/}
                    },
                    punctuation: /^\{|\}$/,
                    expression: {pattern: /[\s\S]+/, alias: "language-csharp", inside: s.languages.csharp}
                }
            }, string: /[\s\S]+/
        }
    }

    s.languages.insertBefore("csharp", "string", {
        "interpolation-string": [{
            pattern: t('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"', [A]),
            lookbehind: !0,
            greedy: !0,
            inside: U(A, j)
        }, {
            pattern: t('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"', [P]),
            lookbehind: !0,
            greedy: !0,
            inside: U(P, F)
        }], char: {pattern: RegExp(x), greedy: !0}
    }), s.languages.dotnet = s.languages.cs = s.languages.csharp
}(Prism);
Prism.languages.aspnet = Prism.languages.extend("markup", {
    "page-directive": {
        pattern: /<%\s*@.*%>/,
        alias: "tag",
        inside: {
            "page-directive": {
                pattern: /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
                alias: "tag"
            }, rest: Prism.languages.markup.tag.inside
        }
    },
    directive: {
        pattern: /<%.*%>/,
        alias: "tag",
        inside: {directive: {pattern: /<%\s*?[$=%#:]{0,2}|%>/, alias: "tag"}, rest: Prism.languages.csharp}
    }
}), Prism.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/, Prism.languages.insertBefore("inside", "punctuation", {directive: Prism.languages.aspnet.directive}, Prism.languages.aspnet.tag.inside["attr-value"]), Prism.languages.insertBefore("aspnet", "comment", {
    "asp-comment": {
        pattern: /<%--[\s\S]*?--%>/,
        alias: ["asp", "comment"]
    }
}), Prism.languages.insertBefore("aspnet", Prism.languages.javascript ? "script" : "tag", {
    "asp-script": {
        pattern: /(<script(?=.*runat=['"]?server\b)[^>]*>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: !0,
        alias: ["asp", "script"],
        inside: Prism.languages.csharp || {}
    }
});
Prism.languages.c = Prism.languages.extend("clike", {
    comment: {
        pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: !0
    },
    string: {pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0},
    "class-name": {
        pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
        lookbehind: !0
    },
    keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
}), Prism.languages.insertBefore("c", "string", {
    char: {
        pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
        greedy: !0
    }
}), Prism.languages.insertBefore("c", "string", {
    macro: {
        pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
        lookbehind: !0,
        greedy: !0,
        alias: "property",
        inside: {
            string: [{pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0}, Prism.languages.c.string],
            char: Prism.languages.c.char,
            comment: Prism.languages.c.comment,
            "macro-name": [{
                pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
                lookbehind: !0
            }, {pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: "function"}],
            directive: {pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: "keyword"},
            "directive-hash": /^#/,
            punctuation: /##|\\(?=[\r\n])/,
            expression: {pattern: /\S[\s\S]*/, inside: Prism.languages.c}
        }
    }
}), Prism.languages.insertBefore("c", "function", {constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}), delete Prism.languages.c.boolean;
!function (e) {
    var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
        n = "\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g, function () {
            return t.source
        });
    e.languages.cpp = e.languages.extend("c", {
        "class-name": [{
            pattern: RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g, function () {
                return t.source
            })), lookbehind: !0
        }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
        keyword: t,
        number: {
            pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
            greedy: !0
        },
        operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        boolean: /\b(?:false|true)\b/
    }), e.languages.insertBefore("cpp", "string", {
        module: {
            pattern: RegExp('(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|' + "<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g, function () {
                return n
            }) + ")"), lookbehind: !0, greedy: !0, inside: {string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./}
        }, "raw-string": {pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: !0}
    }), e.languages.insertBefore("cpp", "keyword", {
        "generic-function": {
            pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
            inside: {function: /^\w+/, generic: {pattern: /<[\s\S]+/, alias: "class-name", inside: e.languages.cpp}}
        }
    }), e.languages.insertBefore("cpp", "operator", {
        "double-colon": {
            pattern: /::/,
            alias: "punctuation"
        }
    }), e.languages.insertBefore("cpp", "class-name", {
        "base-clause": {
            pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
            lookbehind: !0,
            greedy: !0,
            inside: e.languages.extend("cpp", {})
        }
    }), e.languages.insertBefore("inside", "double-colon", {"class-name": /\b[a-z_]\w*\b(?!\s*::)/i}, e.languages.cpp["base-clause"])
}(Prism);
!function (e) {
    var a = [/\b(?:async|sync|yield)\*/, /\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],
        n = "(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*", s = {
            pattern: RegExp(n + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),
            lookbehind: !0,
            inside: {namespace: {pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/, inside: {punctuation: /\./}}}
        };
    e.languages.dart = e.languages.extend("clike", {
        "class-name": [s, {
            pattern: RegExp(n + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])"),
            lookbehind: !0,
            inside: s.inside
        }], keyword: a, operator: /\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/
    }), e.languages.insertBefore("dart", "string", {
        "string-literal": {
            pattern: /r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,
                    lookbehind: !0,
                    inside: {punctuation: /^\$\{?|\}$/, expression: {pattern: /[\s\S]+/, inside: e.languages.dart}}
                }, string: /[\s\S]+/
            }
        }, string: void 0
    }), e.languages.insertBefore("dart", "class-name", {
        metadata: {
            pattern: /@\w+/,
            alias: "function"
        }
    }), e.languages.insertBefore("dart", "class-name", {
        generics: {
            pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
            inside: {"class-name": s, keyword: a, punctuation: /[<>(),.:]/, operator: /[?&|]/}
        }
    })
}(Prism);
!function (i) {
    i.languages.diff = {coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m]};
    var r = {
        "deleted-sign": "-",
        "deleted-arrow": "<",
        "inserted-sign": "+",
        "inserted-arrow": ">",
        unchanged: " ",
        diff: "!"
    };
    Object.keys(r).forEach(function (e) {
        var n = r[e], a = [];
        /^\w+$/.test(e) || a.push(/\w+/.exec(e)[0]), "diff" === e && a.push("bold"), i.languages.diff[e] = {
            pattern: RegExp("^(?:[" + n + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
            alias: a,
            inside: {
                line: {pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/, lookbehind: !0},
                prefix: {pattern: /[\s\S]/, alias: /\w+/.exec(e)[0]}
            }
        }
    }), Object.defineProperty(i.languages.diff, "PREFIXES", {value: r})
}(Prism);
!function (e) {
    var r = "(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)".replace(/<SP_BS>/g, function () {
            return "\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])"
        }), n = "\"(?:[^\"\\\\\r\n]|\\\\(?:\r\n|[^]))*\"|'(?:[^'\\\\\r\n]|\\\\(?:\r\n|[^]))*'",
        t = "--[\\w-]+=(?:<STR>|(?![\"'])(?:[^\\s\\\\]|\\\\.)+)".replace(/<STR>/g, function () {
            return n
        }), o = {pattern: RegExp(n), greedy: !0}, i = {pattern: /(^[ \t]*)#.*/m, lookbehind: !0, greedy: !0};

    function a(e, n) {
        return e = e.replace(/<OPT>/g, function () {
            return t
        }).replace(/<SP>/g, function () {
            return r
        }), RegExp(e, n)
    }

    e.languages.docker = {
        instruction: {
            pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
            lookbehind: !0,
            greedy: !0,
            inside: {
                options: {
                    pattern: a("(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*", "i"),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        property: {pattern: /(^|\s)--[\w-]+/, lookbehind: !0},
                        string: [o, {pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/, lookbehind: !0}],
                        operator: /\\$/m,
                        punctuation: /=/
                    }
                },
                keyword: [{
                    pattern: a("(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b", "i"),
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: a("(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\\\]+<SP>)AS", "i"),
                    lookbehind: !0,
                    greedy: !0
                }, {pattern: a("(^ONBUILD<SP>)\\w+", "i"), lookbehind: !0, greedy: !0}, {pattern: /^\w+/, greedy: !0}],
                comment: i,
                string: o,
                variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
                operator: /\\$/m
            }
        }, comment: i
    }, e.languages.dockerfile = e.languages.docker
}(Prism);
Prism.languages["excel-formula"] = {
    comment: {
        pattern: /(\bN\(\s*)"(?:[^"]|"")*"(?=\s*\))/i,
        lookbehind: !0,
        greedy: !0
    },
    string: {pattern: /"(?:[^"]|"")*"(?!")/, greedy: !0},
    reference: {
        pattern: /(?:'[^']*'|(?:[^\s()[\]{}<>*?"';,$&]*\[[^^\s()[\]{}<>*?"']+\])?\w+)!/,
        greedy: !0,
        alias: "string",
        inside: {
            operator: /!$/,
            punctuation: /'/,
            sheet: {pattern: /[^[\]]+$/, alias: "function"},
            file: {pattern: /\[[^[\]]+\]$/, inside: {punctuation: /[[\]]/}},
            path: /[\s\S]+/
        }
    },
    "function-name": {pattern: /\b[A-Z]\w*(?=\()/i, alias: "keyword"},
    range: {
        pattern: /\$?\b(?:[A-Z]+\$?\d+:\$?[A-Z]+\$?\d+|[A-Z]+:\$?[A-Z]+|\d+:\$?\d+)\b/i,
        alias: "property",
        inside: {operator: /:/, cell: /\$?[A-Z]+\$?\d+/i, column: /\$?[A-Z]+/i, row: /\$?\d+/}
    },
    cell: {pattern: /\b[A-Z]+\d+\b|\$[A-Za-z]+\$?\d+\b|\b[A-Za-z]+\$\d+\b/, alias: "property"},
    number: /(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:FALSE|TRUE)\b/i,
    operator: /[-+*/^%=&,]|<[=>]?|>=?/,
    punctuation: /[[\]();{}|]/
}, Prism.languages.xlsx = Prism.languages.xls = Prism.languages["excel-formula"];
Prism.languages.fsharp = Prism.languages.extend("clike", {
    comment: [{pattern: /(^|[^\\])\(\*(?!\))[\s\S]*?\*\)/, lookbehind: !0, greedy: !0}, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
    }],
    string: {pattern: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?/, greedy: !0},
    "class-name": {
        pattern: /(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,
        lookbehind: !0,
        inside: {operator: /->|\*/, punctuation: /\./}
    },
    keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(?:abstract|and|as|asr|assert|atomic|base|begin|break|checked|class|component|const|constraint|constructor|continue|default|delegate|do|done|downcast|downto|eager|elif|else|end|event|exception|extern|external|false|finally|fixed|for|fun|function|functor|global|if|in|include|inherit|inline|interface|internal|land|lazy|lor|lsl|lsr|lxor|match|member|method|mixin|mod|module|mutable|namespace|new|not|null|object|of|open|or|override|parallel|private|process|protected|public|pure|rec|sealed|select|sig|static|struct|tailcall|then|to|trait|true|try|type|upcast|val|virtual|void|volatile|when|while|with)\b/,
    number: [/\b0x[\da-fA-F]+(?:LF|lf|un)?\b/, /\b0b[01]+(?:uy|y)?\b/, /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i, /\b\d+(?:[IlLsy]|UL|u[lsy]?)?\b/],
    operator: /([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/
}), Prism.languages.insertBefore("fsharp", "keyword", {
    preprocessor: {
        pattern: /(^[\t ]*)#.*/m,
        lookbehind: !0,
        alias: "property",
        inside: {directive: {pattern: /(^#)\b(?:else|endif|if|light|line|nowarn)\b/, lookbehind: !0, alias: "keyword"}}
    }
}), Prism.languages.insertBefore("fsharp", "punctuation", {
    "computation-expression": {
        pattern: /\b[_a-z]\w*(?=\s*\{)/i,
        alias: "keyword"
    }
}), Prism.languages.insertBefore("fsharp", "string", {
    annotation: {
        pattern: /\[<.+?>\]/,
        greedy: !0,
        inside: {
            punctuation: /^\[<|>\]$/,
            "class-name": {pattern: /^\w+$|(^|;\s*)[A-Z]\w*(?=\()/, lookbehind: !0},
            "annotation-content": {pattern: /[\s\S]+/, inside: Prism.languages.fsharp}
        }
    }, char: {pattern: /'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/, greedy: !0}
});
Prism.languages.graphql = {
    comment: /#.*/,
    description: {
        pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
        greedy: !0,
        alias: "string",
        inside: {
            "language-markdown": {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: Prism.languages.markdown
            }
        }
    },
    string: {pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0},
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:false|true)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: {pattern: /@[a-z_]\w*/i, alias: "function"},
    "attr-name": {pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0},
    "atom-input": {pattern: /\b[A-Z]\w*Input\b/, alias: "class-name"},
    scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
    constant: /\b[A-Z][A-Z_\d]*\b/,
    "class-name": {
        pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
        lookbehind: !0
    },
    fragment: {pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: "function"},
    "definition-mutation": {pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function"},
    "definition-query": {pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function"},
    keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
    operator: /[!=|&]|\.{3}/,
    "property-query": /\w+(?=\s*\()/,
    object: /\w+(?=\s*\{)/,
    punctuation: /[!(){}\[\]:=,]/,
    property: /\w+/
}, Prism.hooks.add("after-tokenize", function (n) {
    if ("graphql" === n.language) for (var o = n.tokens.filter(function (n) {
        return "string" != typeof n && "comment" !== n.type && "scalar" !== n.type
    }), s = 0; s < o.length;) {
        var t = o[s++];
        if ("keyword" === t.type && "mutation" === t.content) {
            var e = [];
            if (c(["definition-mutation", "punctuation"]) && "(" === l(1).content) {
                s += 2;
                var a = f(/^\($/, /^\)$/);
                if (-1 === a) continue;
                for (; s < a; s++) {
                    var r = l(0);
                    "variable" === r.type && (b(r, "variable-input"), e.push(r.content))
                }
                s = a + 1
            }
            if (c(["punctuation", "property-query"]) && "{" === l(0).content && (s++, b(l(0), "property-mutation"), 0 < e.length)) {
                var i = f(/^\{$/, /^\}$/);
                if (-1 === i) continue;
                for (var u = s; u < i; u++) {
                    var p = o[u];
                    "variable" === p.type && 0 <= e.indexOf(p.content) && b(p, "variable-input")
                }
            }
        }
    }

    function l(n) {
        return o[s + n]
    }

    function c(n, t) {
        t = t || 0;
        for (var e = 0; e < n.length; e++) {
            var a = l(e + t);
            if (!a || a.type !== n[e]) return !1
        }
        return !0
    }

    function f(n, t) {
        for (var e = 1, a = s; a < o.length; a++) {
            var r = o[a], i = r.content;
            if ("punctuation" === r.type && "string" == typeof i) if (n.test(i)) e++; else if (t.test(i) && 0 === --e) return a
        }
        return -1
    }

    function b(n, t) {
        var e = n.alias;
        e ? Array.isArray(e) || (n.alias = e = [e]) : n.alias = e = [], e.push(t)
    }
});
!function (t) {
    function a(t) {
        return RegExp("(^(?:" + t + "):[ \t]*(?![ \t]))[^]+", "i")
    }

    t.languages.http = {
        "request-line": {
            pattern: /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
            inside: {
                method: {pattern: /^[A-Z]+\b/, alias: "property"},
                "request-target": {
                    pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
                    lookbehind: !0,
                    alias: "url",
                    inside: t.languages.uri
                },
                "http-version": {pattern: /^(\s)HTTP\/[\d.]+/, lookbehind: !0, alias: "property"}
            }
        },
        "response-status": {
            pattern: /^HTTP\/[\d.]+ \d+ .+/m,
            inside: {
                "http-version": {pattern: /^HTTP\/[\d.]+/, alias: "property"},
                "status-code": {pattern: /^(\s)\d+(?=\s)/, lookbehind: !0, alias: "number"},
                "reason-phrase": {pattern: /^(\s).+/, lookbehind: !0, alias: "string"}
            }
        },
        header: {
            pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
            inside: {
                "header-value": [{
                    pattern: a("Content-Security-Policy"),
                    lookbehind: !0,
                    alias: ["csp", "languages-csp"],
                    inside: t.languages.csp
                }, {
                    pattern: a("Public-Key-Pins(?:-Report-Only)?"),
                    lookbehind: !0,
                    alias: ["hpkp", "languages-hpkp"],
                    inside: t.languages.hpkp
                }, {
                    pattern: a("Strict-Transport-Security"),
                    lookbehind: !0,
                    alias: ["hsts", "languages-hsts"],
                    inside: t.languages.hsts
                }, {pattern: a("[^:]+"), lookbehind: !0}],
                "header-name": {pattern: /^[^:]+/, alias: "keyword"},
                punctuation: /^:/
            }
        }
    };
    var e, n, s, i = t.languages, p = {
        "application/javascript": i.javascript,
        "application/json": i.json || i.javascript,
        "application/xml": i.xml,
        "text/xml": i.xml,
        "text/html": i.html,
        "text/css": i.css,
        "text/plain": i.plain
    }, r = {"application/json": !0, "application/xml": !0};
    for (var l in p) if (p[l]) {
        e = e || {};
        var o = r[l] ? (void 0, s = (n = l).replace(/^[a-z]+\//, ""), "(?:" + n + "|\\w+/(?:[\\w.-]+\\+)+" + s + "(?![+\\w.-]))") : l;
        e[l.replace(/\//g, "-")] = {
            pattern: RegExp("(content-type:\\s*" + o + "(?:(?:\r\n?|\n)[\\w-].*)*(?:\r(?:\n|(?!\n))|\n))[^ \t\\w-][^]*", "i"),
            lookbehind: !0,
            inside: p[l]
        }
    }
    e && t.languages.insertBefore("http", "header", e)
}(Prism);
Prism.languages.hpkp = {
    directive: {
        pattern: /\b(?:includeSubDomains|max-age|pin-sha256|preload|report-to|report-uri|strict)(?=[\s;=]|$)/i,
        alias: "property"
    }, operator: /=/, punctuation: /;/
};
Prism.languages.hsts = {
    directive: {pattern: /\b(?:includeSubDomains|max-age|preload)(?=[\s;=]|$)/i, alias: "property"},
    operator: /=/,
    punctuation: /;/
};
!function (e) {
    var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
        n = "(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*", a = {
            pattern: RegExp(n + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),
            lookbehind: !0,
            inside: {
                namespace: {pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/, inside: {punctuation: /\./}},
                punctuation: /\./
            }
        };
    e.languages.java = e.languages.extend("clike", {
        string: {
            pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
            lookbehind: !0,
            greedy: !0
        },
        "class-name": [a, {pattern: RegExp(n + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])"), lookbehind: !0, inside: a.inside}],
        keyword: t,
        function: [e.languages.clike.function, {pattern: /(::\s*)[a-z_]\w*/, lookbehind: !0}],
        number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
        operator: {pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m, lookbehind: !0}
    }), e.languages.insertBefore("java", "string", {
        "triple-quoted-string": {
            pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
            greedy: !0,
            alias: "string"
        }, char: {pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/, greedy: !0}
    }), e.languages.insertBefore("java", "class-name", {
        annotation: {
            pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
            lookbehind: !0,
            alias: "punctuation"
        },
        generics: {
            pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
            inside: {"class-name": a, keyword: t, punctuation: /[<>(),.:]/, operator: /[?&|]/}
        },
        namespace: {
            pattern: RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g, function () {
                return t.source
            })), lookbehind: !0, inside: {punctuation: /\./}
        }
    })
}(Prism);
!function (h) {
    function v(e, n) {
        return "___" + e.toUpperCase() + n + "___"
    }

    Object.defineProperties(h.languages["markup-templating"] = {}, {
        buildPlaceholders: {
            value: function (a, r, e, o) {
                if (a.language === r) {
                    var c = a.tokenStack = [];
                    a.code = a.code.replace(e, function (e) {
                        if ("function" == typeof o && !o(e)) return e;
                        for (var n, t = c.length; -1 !== a.code.indexOf(n = v(r, t));) ++t;
                        return c[t] = e, n
                    }), a.grammar = h.languages.markup
                }
            }
        }, tokenizePlaceholders: {
            value: function (p, k) {
                if (p.language === k && p.tokenStack) {
                    p.grammar = h.languages[k];
                    var m = 0, d = Object.keys(p.tokenStack);
                    !function e(n) {
                        for (var t = 0; t < n.length && !(m >= d.length); t++) {
                            var a = n[t];
                            if ("string" == typeof a || a.content && "string" == typeof a.content) {
                                var r = d[m], o = p.tokenStack[r], c = "string" == typeof a ? a : a.content,
                                    i = v(k, r), u = c.indexOf(i);
                                if (-1 < u) {
                                    ++m;
                                    var g = c.substring(0, u),
                                        l = new h.Token(k, h.tokenize(o, p.grammar), "language-" + k, o),
                                        s = c.substring(u + i.length), f = [];
                                    g && f.push.apply(f, e([g])), f.push(l), s && f.push.apply(f, e([s])), "string" == typeof a ? n.splice.apply(n, [t, 1].concat(f)) : a.content = f
                                }
                            } else a.content && e(a.content)
                        }
                        return n
                    }(p.tokens)
                }
            }
        }
    })
}(Prism);
!function (a) {
    var e = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/, t = [{pattern: /\b(?:false|true)\b/i, alias: "boolean"}, {
            pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
            greedy: !0,
            lookbehind: !0
        }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],
        i = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        n = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
        s = /[{}\[\](),:;]/;
    a.languages.php = {
        delimiter: {pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: "important"},
        comment: e,
        variable: /\$+(?:\w+\b|(?=\{))/,
        package: {
            pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
            lookbehind: !0,
            inside: {punctuation: /\\/}
        },
        "class-name-definition": {
            pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
            lookbehind: !0,
            alias: "class-name"
        },
        "function-definition": {pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i, lookbehind: !0, alias: "function"},
        keyword: [{
            pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
            alias: "type-casting",
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
            alias: "type-hint",
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string|void)\b/i,
            alias: "return-type",
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
            alias: "type-declaration",
            greedy: !0
        }, {
            pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
            alias: "type-declaration",
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /\b(?:parent|self|static)(?=\s*::)/i,
            alias: "static-context",
            greedy: !0
        }, {
            pattern: /(\byield\s+)from\b/i,
            lookbehind: !0
        }, /\bclass\b/i, {
            pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
            lookbehind: !0
        }],
        "argument-name": {pattern: /([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i, lookbehind: !0},
        "class-name": [{
            pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
            greedy: !0,
            lookbehind: !0
        }, {pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i, greedy: !0}, {
            pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
            alias: "class-name-fully-qualified",
            greedy: !0,
            lookbehind: !0,
            inside: {punctuation: /\\/}
        }, {
            pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
            alias: "class-name-fully-qualified",
            greedy: !0,
            inside: {punctuation: /\\/}
        }, {
            pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
            alias: "class-name-fully-qualified",
            greedy: !0,
            lookbehind: !0,
            inside: {punctuation: /\\/}
        }, {
            pattern: /\b[a-z_]\w*(?=\s*\$)/i,
            alias: "type-declaration",
            greedy: !0
        }, {
            pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
            alias: ["class-name-fully-qualified", "type-declaration"],
            greedy: !0,
            inside: {punctuation: /\\/}
        }, {
            pattern: /\b[a-z_]\w*(?=\s*::)/i,
            alias: "static-context",
            greedy: !0
        }, {
            pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
            alias: ["class-name-fully-qualified", "static-context"],
            greedy: !0,
            inside: {punctuation: /\\/}
        }, {
            pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
            alias: "type-hint",
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
            alias: ["class-name-fully-qualified", "type-hint"],
            greedy: !0,
            lookbehind: !0,
            inside: {punctuation: /\\/}
        }, {
            pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
            alias: "return-type",
            greedy: !0,
            lookbehind: !0
        }, {
            pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
            alias: ["class-name-fully-qualified", "return-type"],
            greedy: !0,
            lookbehind: !0,
            inside: {punctuation: /\\/}
        }],
        constant: t,
        function: {
            pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
            lookbehind: !0,
            inside: {punctuation: /\\/}
        },
        property: {pattern: /(->\s*)\w+/, lookbehind: !0},
        number: i,
        operator: n,
        punctuation: s
    };
    var l = {
        pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
        lookbehind: !0,
        inside: a.languages.php
    }, r = [{
        pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
        alias: "nowdoc-string",
        greedy: !0,
        inside: {
            delimiter: {
                pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                alias: "symbol",
                inside: {punctuation: /^<<<'?|[';]$/}
            }
        }
    }, {
        pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
        alias: "heredoc-string",
        greedy: !0,
        inside: {
            delimiter: {
                pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                alias: "symbol",
                inside: {punctuation: /^<<<"?|[";]$/}
            }, interpolation: l
        }
    }, {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        alias: "backtick-quoted-string",
        greedy: !0
    }, {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        alias: "single-quoted-string",
        greedy: !0
    }, {pattern: /"(?:\\[\s\S]|[^\\"])*"/, alias: "double-quoted-string", greedy: !0, inside: {interpolation: l}}];
    a.languages.insertBefore("php", "variable", {
        string: r,
        attribute: {
            pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
            greedy: !0,
            inside: {
                "attribute-content": {
                    pattern: /^(#\[)[\s\S]+(?=\]$)/,
                    lookbehind: !0,
                    inside: {
                        comment: e,
                        string: r,
                        "attribute-class-name": [{
                            pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                            alias: "class-name",
                            greedy: !0,
                            lookbehind: !0
                        }, {
                            pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                            alias: ["class-name", "class-name-fully-qualified"],
                            greedy: !0,
                            lookbehind: !0,
                            inside: {punctuation: /\\/}
                        }],
                        constant: t,
                        number: i,
                        operator: n,
                        punctuation: s
                    }
                }, delimiter: {pattern: /^#\[|\]$/, alias: "punctuation"}
            }
        }
    }), a.hooks.add("before-tokenize", function (e) {
        if (/<\?/.test(e.code)) {
            a.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g)
        }
    }), a.hooks.add("after-tokenize", function (e) {
        a.languages["markup-templating"].tokenizePlaceholders(e, "php")
    })
}(Prism);
!function (p) {
    var a = p.languages.javadoclike = {
        parameter: {
            pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
            lookbehind: !0
        },
        keyword: {pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: !0},
        punctuation: /[{}]/
    };
    Object.defineProperty(a, "addSupport", {
        value: function (a, e) {
            "string" == typeof a && (a = [a]), a.forEach(function (a) {
                !function (a, e) {
                    var n = "doc-comment", t = p.languages[a];
                    if (t) {
                        var r = t[n];
                        if (!r) {
                            var o = {
                                "doc-comment": {
                                    pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                    lookbehind: !0,
                                    alias: "comment"
                                }
                            };
                            r = (t = p.languages.insertBefore(a, "comment", o))[n]
                        }
                        if (r instanceof RegExp && (r = t[n] = {pattern: r}), Array.isArray(r)) for (var i = 0, s = r.length; i < s; i++) r[i] instanceof RegExp && (r[i] = {pattern: r[i]}), e(r[i]); else e(r)
                    }
                }(a, function (a) {
                    a.inside || (a.inside = {}), a.inside.rest = e
                })
            })
        }
    }), a.addSupport(["java", "javascript", "php"], a)
}(Prism);
!function (a) {
    var e = /(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m,
        n = "(?:\\b[a-zA-Z]\\w+\\s*\\.\\s*)*\\b[A-Z]\\w*(?:\\s*<mem>)?|<mem>".replace(/<mem>/g, function () {
            return "#\\s*\\w+(?:\\s*\\([^()]*\\))?"
        });
    a.languages.javadoc = a.languages.extend("javadoclike", {}), a.languages.insertBefore("javadoc", "keyword", {
        reference: {
            pattern: RegExp("(@(?:exception|link|linkplain|see|throws|value)\\s+(?:\\*\\s*)?)(?:" + n + ")"),
            lookbehind: !0,
            inside: {
                function: {pattern: /(#\s*)\w+(?=\s*\()/, lookbehind: !0},
                field: {pattern: /(#\s*)\w+/, lookbehind: !0},
                namespace: {pattern: /\b(?:[a-z]\w*\s*\.\s*)+/, inside: {punctuation: /\./}},
                "class-name": /\b[A-Z]\w*/,
                keyword: a.languages.java.keyword,
                punctuation: /[#()[\],.]/
            }
        },
        "class-name": {pattern: /(@param\s+)<[A-Z]\w*>/, lookbehind: !0, inside: {punctuation: /[.<>]/}},
        "code-section": [{
            pattern: /(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,
            lookbehind: !0,
            inside: {code: {pattern: e, lookbehind: !0, inside: a.languages.java, alias: "language-java"}}
        }, {
            pattern: /(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,
            lookbehind: !0,
            inside: {
                line: {
                    pattern: e,
                    lookbehind: !0,
                    inside: {
                        tag: a.languages.markup.tag,
                        entity: a.languages.markup.entity,
                        code: {pattern: /.+/, inside: a.languages.java, alias: "language-java"}
                    }
                }
            }
        }],
        tag: a.languages.markup.tag,
        entity: a.languages.markup.entity
    }), a.languages.javadoclike.addSupport("java", a.languages.javadoc)
}(Prism);
Prism.languages.javastacktrace = {
    summary: {
        pattern: /^([\t ]*)(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?::.*)?$/m,
        lookbehind: !0,
        inside: {
            keyword: {pattern: /^([\t ]*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m, lookbehind: !0},
            string: {pattern: /^(\s*)"[^"]*"/, lookbehind: !0},
            exceptions: {
                pattern: /^(:?\s*)[\w$.]+(?=:|$)/,
                lookbehind: !0,
                inside: {"class-name": /[\w$]+$/, namespace: /\b[a-z]\w*\b/, punctuation: /\./}
            },
            message: {pattern: /(:\s*)\S.*/, lookbehind: !0, alias: "string"},
            punctuation: /:/
        }
    },
    "stack-frame": {
        pattern: /^([\t ]*)at (?:[\w$./]|@[\w$.+-]*\/)+(?:<init>)?\([^()]*\)/m,
        lookbehind: !0,
        inside: {
            keyword: {pattern: /^(\s*)at(?= )/, lookbehind: !0},
            source: [{
                pattern: /(\()\w+\.\w+:\d+(?=\))/,
                lookbehind: !0,
                inside: {file: /^\w+\.\w+/, punctuation: /:/, "line-number": {pattern: /\b\d+\b/, alias: "number"}}
            }, {pattern: /(\()[^()]*(?=\))/, lookbehind: !0, inside: {keyword: /^(?:Native Method|Unknown Source)$/}}],
            "class-name": /[\w$]+(?=\.(?:<init>|[\w$]+)\()/,
            function: /(?:<init>|[\w$]+)(?=\()/,
            "class-loader": {
                pattern: /(\s)[a-z]\w*(?:\.[a-z]\w*)*(?=\/[\w@$.]*\/)/,
                lookbehind: !0,
                alias: "namespace",
                inside: {punctuation: /\./}
            },
            module: {
                pattern: /([\s/])[a-z]\w*(?:\.[a-z]\w*)*(?:@[\w$.+-]*)?(?=\/)/,
                lookbehind: !0,
                inside: {version: {pattern: /(@)[\s\S]+/, lookbehind: !0, alias: "number"}, punctuation: /[@.]/}
            },
            namespace: {pattern: /(?:\b[a-z]\w*\.)+/, inside: {punctuation: /\./}},
            punctuation: /[()/.]/
        }
    },
    more: {
        pattern: /^([\t ]*)\.{3} \d+ [a-z]+(?: [a-z]+)*/m,
        lookbehind: !0,
        inside: {punctuation: /\.{3}/, number: /\d+/, keyword: /\b[a-z]+(?: [a-z]+)*\b/}
    }
};
Prism.languages.json = {
    property: {pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0},
    string: {pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0},
    comment: {pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0},
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: {pattern: /\bnull\b/, alias: "keyword"}
}, Prism.languages.webmanifest = Prism.languages.json;
!function (n) {
    var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
    n.languages.json5 = n.languages.extend("json", {
        property: [{
            pattern: RegExp(e.source + "(?=\\s*:)"),
            greedy: !0
        }, {pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/, alias: "unquoted"}],
        string: {pattern: e, greedy: !0},
        number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/
    })
}(Prism);
Prism.languages.jsonp = Prism.languages.extend("json", {punctuation: /[{}[\]();,.]/}), Prism.languages.insertBefore("jsonp", "punctuation", {function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/});
!function (n) {
    n.languages.kotlin = n.languages.extend("clike", {
        keyword: {
            pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
            lookbehind: !0
        },
        function: [{
            pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
            greedy: !0
        }, {pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/, lookbehind: !0, greedy: !0}],
        number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
        operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
    }), delete n.languages.kotlin["class-name"];
    var e = {
        "interpolation-punctuation": {pattern: /^\$\{?|\}$/, alias: "punctuation"},
        expression: {pattern: /[\s\S]+/, inside: n.languages.kotlin}
    };
    n.languages.insertBefore("kotlin", "string", {
        "string-literal": [{
            pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
            alias: "multiline",
            inside: {interpolation: {pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i, inside: e}, string: /[\s\S]+/}
        }, {
            pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
            alias: "singleline",
            inside: {
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                    lookbehind: !0,
                    inside: e
                }, string: /[\s\S]+/
            }
        }], char: {pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/, greedy: !0}
    }), delete n.languages.kotlin.string, n.languages.insertBefore("kotlin", "keyword", {
        annotation: {
            pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
            alias: "builtin"
        }
    }), n.languages.insertBefore("kotlin", "function", {
        label: {
            pattern: /\b\w+@|@\w+\b/,
            alias: "symbol"
        }
    }), n.languages.kt = n.languages.kotlin, n.languages.kts = n.languages.kotlin
}(Prism);
!function (a) {
    var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i, n = {"equation-command": {pattern: e, alias: "regex"}};
    a.languages.latex = {
        comment: /%.*/,
        cdata: {pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/, lookbehind: !0},
        equation: [{
            pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
            inside: n,
            alias: "string"
        }, {
            pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
            lookbehind: !0,
            inside: n,
            alias: "string"
        }],
        keyword: {
            pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: !0
        },
        url: {pattern: /(\\url\{)[^}]+(?=\})/, lookbehind: !0},
        headline: {
            pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: !0,
            alias: "class-name"
        },
        function: {pattern: e, alias: "selector"},
        punctuation: /[[\]{}&]/
    }, a.languages.tex = a.languages.latex, a.languages.context = a.languages.latex
}(Prism);
!function (s) {
    function n(n) {
        return n = n.replace(/<inner>/g, function () {
            return "(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?![\r\n]))"
        }), RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n + ")")
    }

    var e = "(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+",
        t = "\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))".replace(/__/g, function () {
            return e
        }), a = "\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)";
    s.languages.markdown = s.languages.extend("markup", {}), s.languages.insertBefore("markdown", "prolog", {
        "front-matter-block": {
            pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                punctuation: /^---|---$/,
                "front-matter": {pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: s.languages.yaml}
            }
        },
        blockquote: {pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation"},
        table: {
            pattern: RegExp("^" + t + a + "(?:" + t + ")*", "m"),
            inside: {
                "table-data-rows": {
                    pattern: RegExp("^(" + t + a + ")(?:" + t + ")*$"),
                    lookbehind: !0,
                    inside: {"table-data": {pattern: RegExp(e), inside: s.languages.markdown}, punctuation: /\|/}
                },
                "table-line": {
                    pattern: RegExp("^(" + t + ")" + a + "$"),
                    lookbehind: !0,
                    inside: {punctuation: /\||:?-{3,}:?/}
                },
                "table-header-row": {
                    pattern: RegExp("^" + t + "$"),
                    inside: {
                        "table-header": {pattern: RegExp(e), alias: "important", inside: s.languages.markdown},
                        punctuation: /\|/
                    }
                }
            }
        },
        code: [{
            pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: !0,
            alias: "keyword"
        }, {
            pattern: /^```[\s\S]*?^```$/m,
            greedy: !0,
            inside: {
                "code-block": {pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0},
                "code-language": {pattern: /^(```).+/, lookbehind: !0},
                punctuation: /```/
            }
        }],
        title: [{
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: "important",
            inside: {punctuation: /==+$|--+$/}
        }, {pattern: /(^\s*)#.+/m, lookbehind: !0, alias: "important", inside: {punctuation: /^#+|#+$/}}],
        hr: {pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation"},
        list: {pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation"},
        "url-reference": {
            pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
                variable: {pattern: /^(!?\[)[^\]]+/, lookbehind: !0},
                string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                punctuation: /^[\[\]!:]|[<>]/
            },
            alias: "url"
        },
        bold: {
            pattern: n("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),
            lookbehind: !0,
            greedy: !0,
            inside: {content: {pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {}}, punctuation: /\*\*|__/}
        },
        italic: {
            pattern: n("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),
            lookbehind: !0,
            greedy: !0,
            inside: {content: {pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {}}, punctuation: /[*_]/}
        },
        strike: {
            pattern: n("(~~?)(?:(?!~)<inner>)+\\2"),
            lookbehind: !0,
            greedy: !0,
            inside: {content: {pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {}}, punctuation: /~~?/}
        },
        "code-snippet": {
            pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
            lookbehind: !0,
            greedy: !0,
            alias: ["code", "keyword"]
        },
        url: {
            pattern: n('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ \t]?\\[(?:(?!\\])<inner>)+\\])'),
            lookbehind: !0,
            greedy: !0,
            inside: {
                operator: /^!/,
                content: {pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {}},
                variable: {pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0},
                url: {pattern: /(^\]\()[^\s)]+/, lookbehind: !0},
                string: {pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0}
            }
        }
    }), ["url", "bold", "italic", "strike"].forEach(function (e) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (n) {
            e !== n && (s.languages.markdown[e].inside.content.inside[n] = s.languages.markdown[n])
        })
    }), s.hooks.add("after-tokenize", function (n) {
        "markdown" !== n.language && "md" !== n.language || !function n(e) {
            if (e && "string" != typeof e) for (var t = 0, a = e.length; t < a; t++) {
                var r = e[t];
                if ("code" === r.type) {
                    var i = r.content[1], o = r.content[3];
                    if (i && o && "code-language" === i.type && "code-block" === o.type && "string" == typeof i.content) {
                        var l = i.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"),
                            s = "language-" + (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
                        o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, s] : o.alias.push(s) : o.alias = [s]
                    }
                } else n(r.content)
            }
        }(n.tokens)
    }), s.hooks.add("wrap", function (n) {
        if ("code-block" === n.type) {
            for (var e = "", t = 0, a = n.classes.length; t < a; t++) {
                var r = n.classes[t], i = /language-(.+)/.exec(r);
                if (i) {
                    e = i[1];
                    break
                }
            }
            var o = s.languages[e];
            if (o) n.content = s.highlight(function (n) {
                var e = n.replace(d, "");
                return e = e.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (n, e) {
                    var t;
                    if ("#" === (e = e.toLowerCase())[0]) return t = "x" === e[1] ? parseInt(e.slice(2), 16) : Number(e.slice(1)), u(t);
                    var a = p[e];
                    return a || n
                })
            }(n.content), o, e); else if (e && "none" !== e && s.plugins.autoloader) {
                var l = "md-" + (new Date).valueOf() + "-" + Math.floor(1e16 * Math.random());
                n.attributes.id = l, s.plugins.autoloader.loadLanguages(e, function () {
                    var n = document.getElementById(l);
                    n && (n.innerHTML = s.highlight(n.textContent, s.languages[e], e))
                })
            }
        }
    });
    var d = RegExp(s.languages.markup.tag.pattern.source, "gi"), p = {amp: "&", lt: "<", gt: ">", quot: '"'},
        u = String.fromCodePoint || String.fromCharCode;
    s.languages.md = s.languages.markdown
}(Prism);
Prism.languages.matlab = {
    comment: [/%\{[\s\S]*?\}%/, /%.+/],
    string: {pattern: /\B'(?:''|[^'\r\n])*'/, greedy: !0},
    number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
    keyword: /\b(?:NaN|break|case|catch|continue|else|elseif|end|for|function|if|inf|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
    function: /\b(?!\d)\w+(?=\s*\()/,
    operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
    punctuation: /\.{3}|[.,;\[\](){}!]/
};
!function ($) {
    var e = ["$eq", "$gt", "$gte", "$in", "$lt", "$lte", "$ne", "$nin", "$and", "$not", "$nor", "$or", "$exists", "$type", "$expr", "$jsonSchema", "$mod", "$regex", "$text", "$where", "$geoIntersects", "$geoWithin", "$near", "$nearSphere", "$all", "$elemMatch", "$size", "$bitsAllClear", "$bitsAllSet", "$bitsAnyClear", "$bitsAnySet", "$comment", "$elemMatch", "$meta", "$slice", "$currentDate", "$inc", "$min", "$max", "$mul", "$rename", "$set", "$setOnInsert", "$unset", "$addToSet", "$pop", "$pull", "$push", "$pullAll", "$each", "$position", "$slice", "$sort", "$bit", "$addFields", "$bucket", "$bucketAuto", "$collStats", "$count", "$currentOp", "$facet", "$geoNear", "$graphLookup", "$group", "$indexStats", "$limit", "$listLocalSessions", "$listSessions", "$lookup", "$match", "$merge", "$out", "$planCacheStats", "$project", "$redact", "$replaceRoot", "$replaceWith", "$sample", "$set", "$skip", "$sort", "$sortByCount", "$unionWith", "$unset", "$unwind", "$abs", "$accumulator", "$acos", "$acosh", "$add", "$addToSet", "$allElementsTrue", "$and", "$anyElementTrue", "$arrayElemAt", "$arrayToObject", "$asin", "$asinh", "$atan", "$atan2", "$atanh", "$avg", "$binarySize", "$bsonSize", "$ceil", "$cmp", "$concat", "$concatArrays", "$cond", "$convert", "$cos", "$dateFromParts", "$dateToParts", "$dateFromString", "$dateToString", "$dayOfMonth", "$dayOfWeek", "$dayOfYear", "$degreesToRadians", "$divide", "$eq", "$exp", "$filter", "$first", "$floor", "$function", "$gt", "$gte", "$hour", "$ifNull", "$in", "$indexOfArray", "$indexOfBytes", "$indexOfCP", "$isArray", "$isNumber", "$isoDayOfWeek", "$isoWeek", "$isoWeekYear", "$last", "$last", "$let", "$literal", "$ln", "$log", "$log10", "$lt", "$lte", "$ltrim", "$map", "$max", "$mergeObjects", "$meta", "$min", "$millisecond", "$minute", "$mod", "$month", "$multiply", "$ne", "$not", "$objectToArray", "$or", "$pow", "$push", "$radiansToDegrees", "$range", "$reduce", "$regexFind", "$regexFindAll", "$regexMatch", "$replaceOne", "$replaceAll", "$reverseArray", "$round", "$rtrim", "$second", "$setDifference", "$setEquals", "$setIntersection", "$setIsSubset", "$setUnion", "$size", "$sin", "$slice", "$split", "$sqrt", "$stdDevPop", "$stdDevSamp", "$strcasecmp", "$strLenBytes", "$strLenCP", "$substr", "$substrBytes", "$substrCP", "$subtract", "$sum", "$switch", "$tan", "$toBool", "$toDate", "$toDecimal", "$toDouble", "$toInt", "$toLong", "$toObjectId", "$toString", "$toLower", "$toUpper", "$trim", "$trunc", "$type", "$week", "$year", "$zip", "$comment", "$explain", "$hint", "$max", "$maxTimeMS", "$min", "$orderby", "$query", "$returnKey", "$showDiskLoc", "$natural"],
        t = "(?:" + (e = e.map(function ($) {
            return $.replace("$", "\\$")
        })).join("|") + ")\\b";
    $.languages.mongodb = $.languages.extend("javascript", {}), $.languages.insertBefore("mongodb", "string", {
        property: {
            pattern: /(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,
            greedy: !0,
            inside: {keyword: RegExp("^(['\"])?" + t + "(?:\\1)?$")}
        }
    }), $.languages.mongodb.string.inside = {
        url: {
            pattern: /https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,
            greedy: !0
        }, entity: {pattern: /\b(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d\d?|2[0-4]\d|25[0-5])\b/, greedy: !0}
    }, $.languages.insertBefore("mongodb", "constant", {
        builtin: {
            pattern: RegExp("\\b(?:" + ["ObjectId", "Code", "BinData", "DBRef", "Timestamp", "NumberLong", "NumberDecimal", "MaxKey", "MinKey", "RegExp", "ISODate", "UUID"].join("|") + ")\\b"),
            alias: "keyword"
        }
    })
}(Prism);
Prism.languages.objectivec = Prism.languages.extend("c", {
    string: {
        pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        greedy: !0
    },
    keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
}), delete Prism.languages.objectivec["class-name"], Prism.languages.objc = Prism.languages.objectivec;
!function (a) {
    var e = "(?:\\b[a-zA-Z]\\w*|[|\\\\[\\]])+";
    a.languages.phpdoc = a.languages.extend("javadoclike", {
        parameter: {
            pattern: RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:" + e + "\\s+)?)\\$\\w+"),
            lookbehind: !0
        }
    }), a.languages.insertBefore("phpdoc", "keyword", {
        "class-name": [{
            pattern: RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)" + e),
            lookbehind: !0,
            inside: {
                keyword: /\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,
                punctuation: /[|\\[\]()]/
            }
        }]
    }), a.languages.javadoclike.addSupport("php", a.languages.phpdoc)
}(Prism);
Prism.languages.insertBefore("php", "variable", {
    this: {pattern: /\$this\b/, alias: "keyword"},
    global: /\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/,
    scope: {pattern: /\b[\w\\]+::/, inside: {keyword: /\b(?:parent|self|static)\b/, punctuation: /::|\\/}}
});
Prism.languages.sql = {
    comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0},
    variable: [{pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0}, /@[\w.$]+/],
    string: {pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0},
    identifier: {
        pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
        greedy: !0,
        lookbehind: !0,
        inside: {punctuation: /^`|`$/}
    },
    function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
    keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
    boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
    number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
    operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
    punctuation: /[;[\]()`,.]/
};
Prism.languages.plsql = Prism.languages.extend("sql", {
    comment: {pattern: /\/\*[\s\S]*?\*\/|--.*/, greedy: !0},
    keyword: /\b(?:A|ACCESSIBLE|ADD|AGENT|AGGREGATE|ALL|ALTER|AND|ANY|ARRAY|AS|ASC|AT|ATTRIBUTE|AUTHID|AVG|BEGIN|BETWEEN|BFILE_BASE|BINARY|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BULK|BY|BYTE|C|CALL|CALLING|CASCADE|CASE|CHAR|CHARACTER|CHARSET|CHARSETFORM|CHARSETID|CHAR_BASE|CHECK|CLOB_BASE|CLONE|CLOSE|CLUSTER|CLUSTERS|COLAUTH|COLLECT|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPILED|COMPRESS|CONNECT|CONSTANT|CONSTRUCTOR|CONTEXT|CONTINUE|CONVERT|COUNT|CRASH|CREATE|CREDENTIAL|CURRENT|CURSOR|CUSTOMDATUM|DANGLING|DATA|DATE|DATE_BASE|DAY|DECLARE|DEFAULT|DEFINE|DELETE|DESC|DETERMINISTIC|DIRECTORY|DISTINCT|DOUBLE|DROP|DURATION|ELEMENT|ELSE|ELSIF|EMPTY|END|ESCAPE|EXCEPT|EXCEPTION|EXCEPTIONS|EXCLUSIVE|EXECUTE|EXISTS|EXIT|EXTERNAL|FETCH|FINAL|FIRST|FIXED|FLOAT|FOR|FORALL|FORCE|FROM|FUNCTION|GENERAL|GOTO|GRANT|GROUP|HASH|HAVING|HEAP|HIDDEN|HOUR|IDENTIFIED|IF|IMMEDIATE|IMMUTABLE|IN|INCLUDING|INDEX|INDEXES|INDICATOR|INDICES|INFINITE|INSERT|INSTANTIABLE|INT|INTERFACE|INTERSECT|INTERVAL|INTO|INVALIDATE|IS|ISOLATION|JAVA|LANGUAGE|LARGE|LEADING|LENGTH|LEVEL|LIBRARY|LIKE|LIKE2|LIKE4|LIKEC|LIMIT|LIMITED|LOCAL|LOCK|LONG|LOOP|MAP|MAX|MAXLEN|MEMBER|MERGE|MIN|MINUS|MINUTE|MOD|MODE|MODIFY|MONTH|MULTISET|MUTABLE|NAME|NAN|NATIONAL|NATIVE|NCHAR|NEW|NOCOMPRESS|NOCOPY|NOT|NOWAIT|NULL|NUMBER_BASE|OBJECT|OCICOLL|OCIDATE|OCIDATETIME|OCIDURATION|OCIINTERVAL|OCILOBLOCATOR|OCINUMBER|OCIRAW|OCIREF|OCIREFCURSOR|OCIROWID|OCISTRING|OCITYPE|OF|OLD|ON|ONLY|OPAQUE|OPEN|OPERATOR|OPTION|OR|ORACLE|ORADATA|ORDER|ORGANIZATION|ORLANY|ORLVARY|OTHERS|OUT|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETER|PARAMETERS|PARENT|PARTITION|PASCAL|PERSISTABLE|PIPE|PIPELINED|PLUGGABLE|POLYMORPHIC|PRAGMA|PRECISION|PRIOR|PRIVATE|PROCEDURE|PUBLIC|RAISE|RANGE|RAW|READ|RECORD|REF|REFERENCE|RELIES_ON|REM|REMAINDER|RENAME|RESOURCE|RESULT|RESULT_CACHE|RETURN|RETURNING|REVERSE|REVOKE|ROLLBACK|ROW|SAMPLE|SAVE|SAVEPOINT|SB1|SB2|SB4|SECOND|SEGMENT|SELECT|SELF|SEPARATE|SEQUENCE|SERIALIZABLE|SET|SHARE|SHORT|SIZE|SIZE_T|SOME|SPARSE|SQL|SQLCODE|SQLDATA|SQLNAME|SQLSTATE|STANDARD|START|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUM|SYNONYM|TABAUTH|TABLE|TDO|THE|THEN|TIME|TIMESTAMP|TIMEZONE_ABBR|TIMEZONE_HOUR|TIMEZONE_MINUTE|TIMEZONE_REGION|TO|TRAILING|TRANSACTION|TRANSACTIONAL|TRUSTED|TYPE|UB1|UB2|UB4|UNDER|UNION|UNIQUE|UNPLUG|UNSIGNED|UNTRUSTED|UPDATE|USE|USING|VALIST|VALUE|VALUES|VARIABLE|VARIANCE|VARRAY|VARYING|VIEW|VIEWS|VOID|WHEN|WHERE|WHILE|WITH|WORK|WRAPPED|WRITE|YEAR|ZONE)\b/i,
    operator: /:=?|=>|[<>^~!]=|\.\.|\|\||\*\*|[-+*/%<>=@]/
}), Prism.languages.insertBefore("plsql", "operator", {label: {pattern: /<<\s*\w+\s*>>/, alias: "symbol"}});
Prism.languages.python = {
    comment: {pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0},
    "string-interpolation": {
        pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                    "format-spec": {pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0},
                    "conversion-option": {pattern: /![sra](?=[:}]$)/, alias: "punctuation"},
                    rest: null
                }
            }, string: /[\s\S]+/
        }
    },
    "triple-quoted-string": {pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: !0, alias: "string"},
    string: {pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0},
    function: {pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0},
    "class-name": {pattern: /(\bclass\s+)\w+/i, lookbehind: !0},
    decorator: {
        pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
        lookbehind: !0,
        alias: ["annotation", "punctuation"],
        inside: {punctuation: /\./}
    },
    keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python;
!function (e) {
    function s(e, s) {
        for (var a = 0; a < s; a++) e = e.replace(/<self>/g, function () {
            return "(?:" + e + ")"
        });
        return e.replace(/<self>/g, "[^\\s\\S]").replace(/<str>/g, '(?:@(?!")|"(?:[^\r\n\\\\"]|\\\\.)*"|@"(?:[^\\\\"]|""|\\\\[^])*"(?!")|' + "'(?:(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'|(?=[^\\\\](?!'))))").replace(/<comment>/g, "(?:/(?![/*])|//.*[\r\n]|/\\*[^*]*(?:\\*(?!/)[^*]*)*\\*/)")
    }

    var a = s("\\((?:[^()'\"@/]|<str>|<comment>|<self>)*\\)", 2),
        r = s("\\[(?:[^\\[\\]'\"@/]|<str>|<comment>|<self>)*\\]", 2),
        t = s("\\{(?:[^{}'\"@/]|<str>|<comment>|<self>)*\\}", 2), n = s("<(?:[^<>'\"@/]|<str>|<comment>|<self>)*>", 2),
        l = "(?:\\s(?:\\s*[^\\s>/=]+(?:\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))|(?=[\\s/>])))+)?",
        i = "(?!\\d)[^\\s>/=$<%]+" + l + "\\s*/?>",
        o = "\\B@?(?:<([a-zA-Z][\\w:]*)" + l + "\\s*>(?:[^<]|</?(?!\\1\\b)" + i + "|" + s("<\\1" + l + "\\s*>(?:[^<]|</?(?!\\1\\b)" + i + "|<self>)*</\\1\\s*>", 2) + ")*</\\1\\s*>|<" + i + ")";
    e.languages.cshtml = e.languages.extend("markup", {});
    var g = {
        pattern: /\S[\s\S]*/,
        alias: "language-csharp",
        inside: e.languages.insertBefore("csharp", "string", {
            html: {
                pattern: RegExp(o),
                greedy: !0,
                inside: e.languages.cshtml
            }
        }, {csharp: e.languages.extend("csharp", {})})
    };
    e.languages.insertBefore("cshtml", "prolog", {
        "razor-comment": {
            pattern: /@\*[\s\S]*?\*@/,
            greedy: !0,
            alias: "comment"
        },
        block: {
            pattern: RegExp("(^|[^@])@(?:" + [t, "(?:code|functions)\\s*" + t, "(?:for|foreach|lock|switch|using|while)\\s*" + a + "\\s*" + t, "do\\s*" + t + "\\s*while\\s*" + a + "(?:\\s*;)?", "try\\s*" + t + "\\s*catch\\s*" + a + "\\s*" + t + "\\s*finally\\s*" + t, "if\\s*" + a + "\\s*" + t + "(?:\\s*else(?:\\s+if\\s*" + a + ")?\\s*" + t + ")*"].join("|") + ")"),
            lookbehind: !0,
            greedy: !0,
            inside: {keyword: /^@\w*/, csharp: g}
        },
        directive: {
            pattern: /^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,
            lookbehind: !0,
            greedy: !0,
            inside: {keyword: /^@\w+/, csharp: g}
        },
        value: {
            pattern: RegExp("(^|[^@])@(?:await\\b\\s*)?(?:\\w+\\b|" + a + ")(?:[?!]?\\.\\w+\\b|" + a + "|" + r + "|" + n + a + ")*"),
            lookbehind: !0,
            greedy: !0,
            alias: "variable",
            inside: {keyword: /^@/, csharp: g}
        },
        "delegate-operator": {pattern: /(^|[^@])@(?=<)/, lookbehind: !0, alias: "operator"}
    }), e.languages.razor = e.languages.cshtml
}(Prism);
!function (a) {
    var e = {pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape"},
        n = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,
        t = "(?:[^\\\\-]|" + n.source + ")", s = RegExp(t + "-" + t),
        i = {pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: !0, alias: "variable"};
    a.languages.regex = {
        "char-class": {
            pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
            lookbehind: !0,
            inside: {
                "char-class-negation": {pattern: /(^\[)\^/, lookbehind: !0, alias: "operator"},
                "char-class-punctuation": {pattern: /^\[|\]$/, alias: "punctuation"},
                range: {pattern: s, inside: {escape: n, "range-punctuation": {pattern: /-/, alias: "operator"}}},
                "special-escape": e,
                "char-set": {pattern: /\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name"},
                escape: n
            }
        },
        "special-escape": e,
        "char-set": {pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name"},
        backreference: [{pattern: /\\(?![123][0-7]{2})[1-9]/, alias: "keyword"}, {
            pattern: /\\k<[^<>']+>/,
            alias: "keyword",
            inside: {"group-name": i}
        }],
        anchor: {pattern: /[$^]|\\[ABbGZz]/, alias: "function"},
        escape: n,
        group: [{
            pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
            alias: "punctuation",
            inside: {"group-name": i}
        }, {pattern: /\)/, alias: "punctuation"}],
        quantifier: {pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: "number"},
        alternation: {pattern: /\|/, alias: "keyword"}
    }
}(Prism);
!function (e) {
    e.languages.ruby = e.languages.extend("clike", {
        comment: {pattern: /#.*|^=begin\s[\s\S]*?^=end/m, greedy: !0},
        "class-name": {
            pattern: /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
            lookbehind: !0,
            inside: {punctuation: /[.\\]/}
        },
        keyword: /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
        operator: /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
        punctuation: /[(){}[\].,;]/
    }), e.languages.insertBefore("ruby", "operator", {"double-colon": {pattern: /::/, alias: "punctuation"}});
    var n = {
        pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
        lookbehind: !0,
        inside: {
            content: {pattern: /^(#\{)[\s\S]+(?=\}$)/, lookbehind: !0, inside: e.languages.ruby},
            delimiter: {pattern: /^#\{|\}$/, alias: "punctuation"}
        }
    };
    delete e.languages.ruby.function;
    var t = "(?:" + ["([^a-zA-Z0-9\\s{(\\[<=])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "\\((?:[^()\\\\]|\\\\[^]|\\((?:[^()\\\\]|\\\\[^])*\\))*\\)", "\\{(?:[^{}\\\\]|\\\\[^]|\\{(?:[^{}\\\\]|\\\\[^])*\\})*\\}", "\\[(?:[^\\[\\]\\\\]|\\\\[^]|\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\])*\\]", "<(?:[^<>\\\\]|\\\\[^]|<(?:[^<>\\\\]|\\\\[^])*>)*>"].join("|") + ")",
        i = '(?:"(?:\\\\.|[^"\\\\\r\n])*"|(?:\\b[a-zA-Z_]\\w*|[^\\s\0-\\x7F]+)[?!]?|\\$.)';
    e.languages.insertBefore("ruby", "keyword", {
        "regex-literal": [{
            pattern: RegExp("%r" + t + "[egimnosux]{0,6}"),
            greedy: !0,
            inside: {interpolation: n, regex: /[\s\S]+/}
        }, {
            pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
            lookbehind: !0,
            greedy: !0,
            inside: {interpolation: n, regex: /[\s\S]+/}
        }],
        variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
        symbol: [{
            pattern: RegExp("(^|[^:]):" + i),
            lookbehind: !0,
            greedy: !0
        }, {pattern: RegExp("([\r\n{(,][ \t]*)" + i + "(?=:(?!:))"), lookbehind: !0, greedy: !0}],
        "method-definition": {
            pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
            lookbehind: !0,
            inside: {function: /\b\w+$/, keyword: /^self\b/, "class-name": /^\w+/, punctuation: /\./}
        }
    }), e.languages.insertBefore("ruby", "string", {
        "string-literal": [{
            pattern: RegExp("%[qQiIwWs]?" + t),
            greedy: !0,
            inside: {interpolation: n, string: /[\s\S]+/}
        }, {
            pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
            greedy: !0,
            inside: {interpolation: n, string: /[\s\S]+/}
        }, {
            pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
            alias: "heredoc-string",
            greedy: !0,
            inside: {
                delimiter: {
                    pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
                    inside: {symbol: /\b\w+/, punctuation: /^<<[-~]?/}
                }, interpolation: n, string: /[\s\S]+/
            }
        }, {
            pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
            alias: "heredoc-string",
            greedy: !0,
            inside: {
                delimiter: {
                    pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
                    inside: {symbol: /\b\w+/, punctuation: /^<<[-~]?'|'$/}
                }, string: /[\s\S]+/
            }
        }],
        "command-literal": [{
            pattern: RegExp("%x" + t),
            greedy: !0,
            inside: {interpolation: n, command: {pattern: /[\s\S]+/, alias: "string"}}
        }, {
            pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
            greedy: !0,
            inside: {interpolation: n, command: {pattern: /[\s\S]+/, alias: "string"}}
        }]
    }), delete e.languages.ruby.string, e.languages.insertBefore("ruby", "number", {
        builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
        constant: /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/
    }), e.languages.rb = e.languages.ruby
}(Prism);
!function (e) {
    for (var a = "/\\*(?:[^*/]|\\*(?!/)|/(?!\\*)|<self>)*\\*/", t = 0; t < 2; t++) a = a.replace(/<self>/g, function () {
        return a
    });
    a = a.replace(/<self>/g, function () {
        return "[^\\s\\S]"
    }), e.languages.rust = {
        comment: [{pattern: RegExp("(^|[^\\\\])" + a), lookbehind: !0, greedy: !0}, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }],
        string: {pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/, greedy: !0},
        char: {pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/, greedy: !0},
        attribute: {
            pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
            greedy: !0,
            alias: "attr-name",
            inside: {string: null}
        },
        "closure-params": {
            pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
            lookbehind: !0,
            greedy: !0,
            inside: {"closure-punctuation": {pattern: /^\||\|$/, alias: "punctuation"}, rest: null}
        },
        "lifetime-annotation": {pattern: /'\w+/, alias: "symbol"},
        "fragment-specifier": {pattern: /(\$\w+:)[a-z]+/, lookbehind: !0, alias: "punctuation"},
        variable: /\$\w+/,
        "function-definition": {pattern: /(\bfn\s+)\w+/, lookbehind: !0, alias: "function"},
        "type-definition": {pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/, lookbehind: !0, alias: "class-name"},
        "module-declaration": [{
            pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
            lookbehind: !0,
            alias: "namespace"
        }, {
            pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
            lookbehind: !0,
            alias: "namespace",
            inside: {punctuation: /::/}
        }],
        keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],
        function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
        macro: {pattern: /\b\w+!/, alias: "property"},
        constant: /\b[A-Z_][A-Z_\d]+\b/,
        "class-name": /\b[A-Z]\w*\b/,
        namespace: {pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/, inside: {punctuation: /::/}},
        number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
        boolean: /\b(?:false|true)\b/,
        punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
        operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
    }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string
}(Prism);
!function (e) {
    e.languages.typescript = e.languages.extend("javascript", {
        "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
            lookbehind: !0,
            greedy: !0,
            inside: null
        }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
    var s = e.languages.extend("typescript", {});
    delete s["class-name"], e.languages.typescript["class-name"].inside = s, e.languages.insertBefore("typescript", "function", {
        decorator: {
            pattern: /@[$\w\xA0-\uFFFF]+/,
            inside: {at: {pattern: /^@/, alias: "operator"}, function: /^[\s\S]+/}
        },
        "generic-function": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
            greedy: !0,
            inside: {
                function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                generic: {pattern: /<[\s\S]+/, alias: "class-name", inside: s}
            }
        }
    }), e.languages.ts = e.languages.typescript
}(Prism);
!function (E) {
    var n = /\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;
    E.languages.typoscript = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0
        }, {pattern: /(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/, lookbehind: !0, greedy: !0}, {
            pattern: /(^|[^"'])#.*/,
            lookbehind: !0,
            greedy: !0
        }],
        function: [{
            pattern: /<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,
            inside: {
                string: {pattern: /"[^"\r\n]*"|'[^'\r\n]*'/, inside: {keyword: n}},
                keyword: {pattern: /INCLUDE_TYPOSCRIPT/}
            }
        }, {pattern: /@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/, inside: {string: /"[^"\r\n]*"|'[^'\r\n]*'/}}],
        string: {
            pattern: /^([^=]*=[< ]?)(?:(?!\]\n).)*/,
            lookbehind: !0,
            inside: {function: /\{\$.*\}/, keyword: n, number: /^\d+$/, punctuation: /[,|:]/}
        },
        keyword: n,
        number: {pattern: /\b\d+\s*[.{=]/, inside: {operator: /[.{=]/}},
        tag: {pattern: /\.?[-\w\\]+\.?/, inside: {punctuation: /\./}},
        punctuation: /[{}[\];(),.:|]/,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/
    }, E.languages.tsconfig = E.languages.typoscript
}(Prism);
Prism.languages.uri = {
    scheme: {pattern: /^[a-z][a-z0-9+.-]*:/im, greedy: !0, inside: {"scheme-delimiter": /:$/}},
    fragment: {pattern: /#[\w\-.~!$&'()*+,;=%:@/?]*/, inside: {"fragment-delimiter": /^#/}},
    query: {
        pattern: /\?[\w\-.~!$&'()*+,;=%:@/?]*/,
        inside: {
            "query-delimiter": {pattern: /^\?/, greedy: !0},
            "pair-delimiter": /[&;]/,
            pair: {pattern: /^[^=][\s\S]*/, inside: {key: /^[^=]+/, value: {pattern: /(^=)[\s\S]+/, lookbehind: !0}}}
        }
    },
    authority: {
        pattern: RegExp("^//(?:[\\w\\-.~!$&'()*+,;=%:]*@)?(?:\\[(?:[0-9a-fA-F:.]{2,48}|v[0-9a-fA-F]+\\.[\\w\\-.~!$&'()*+,;=]+)\\]|[\\w\\-.~!$&'()*+,;=%]*)(?::\\d*)?", "m"),
        inside: {
            "authority-delimiter": /^\/\//,
            "user-info-segment": {
                pattern: /^[\w\-.~!$&'()*+,;=%:]*@/,
                inside: {"user-info-delimiter": /@$/, "user-info": /^[\w\-.~!$&'()*+,;=%:]+/}
            },
            "port-segment": {pattern: /:\d*$/, inside: {"port-delimiter": /^:/, port: /^\d+/}},
            host: {
                pattern: /[\s\S]+/,
                inside: {
                    "ip-literal": {
                        pattern: /^\[[\s\S]+\]$/,
                        inside: {
                            "ip-literal-delimiter": /^\[|\]$/,
                            "ipv-future": /^v[\s\S]+/,
                            "ipv6-address": /^[\s\S]+/
                        }
                    }, "ipv4-address": /^(?:(?:[03-9]\d?|[12]\d{0,2})\.){3}(?:[03-9]\d?|[12]\d{0,2})$/
                }
            }
        }
    },
    path: {pattern: /^[\w\-.~!$&'()*+,;=%:@/]+/m, inside: {"path-separator": /\//}}
}, Prism.languages.url = Prism.languages.uri;
Prism.languages.wasm = {
    comment: [/\(;[\s\S]*?;\)/, {pattern: /;;.*/, greedy: !0}],
    string: {pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0},
    keyword: [{
        pattern: /\b(?:align|offset)=/,
        inside: {operator: /=/}
    }, {
        pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
        inside: {punctuation: /\./}
    }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
    variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
    number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
    punctuation: /[()]/
};
!function () {
    if ("undefined" != typeof Prism && "undefined" != typeof document && document.querySelector) {
        var t, o = "line-numbers", s = "linkable-line-numbers", l = function () {
            if (void 0 === t) {
                var e = document.createElement("div");
                e.style.fontSize = "13px", e.style.lineHeight = "1.5", e.style.padding = "0", e.style.border = "0", e.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(e), t = 38 === e.offsetHeight, document.body.removeChild(e)
            }
            return t
        }, a = !0;
        Prism.plugins.lineHighlight = {
            highlightLines: function (u, e, c) {
                var t = (e = "string" == typeof e ? e : u.getAttribute("data-line") || "").replace(/\s+/g, "").split(",").filter(Boolean),
                    d = +u.getAttribute("data-line-offset") || 0,
                    h = (l() ? parseInt : parseFloat)(getComputedStyle(u).lineHeight), f = Prism.util.isActive(u, o),
                    i = u.querySelector("code"), p = f ? u : i || u, g = [], m = i && p != i ? function (e, t) {
                        var i = getComputedStyle(e), n = getComputedStyle(t);

                        function r(e) {
                            return +e.substr(0, e.length - 2)
                        }

                        return t.offsetTop + r(n.borderTopWidth) + r(n.paddingTop) - r(i.paddingTop)
                    }(u, i) : 0;
                t.forEach(function (e) {
                    var t = e.split("-"), i = +t[0], n = +t[1] || i,
                        r = u.querySelector('.line-highlight[data-range="' + e + '"]') || document.createElement("div");
                    if (g.push(function () {
                        r.setAttribute("aria-hidden", "true"), r.setAttribute("data-range", e), r.className = (c || "") + " line-highlight"
                    }), f && Prism.plugins.lineNumbers) {
                        var o = Prism.plugins.lineNumbers.getLine(u, i), s = Prism.plugins.lineNumbers.getLine(u, n);
                        if (o) {
                            var l = o.offsetTop + m + "px";
                            g.push(function () {
                                r.style.top = l
                            })
                        }
                        if (s) {
                            var a = s.offsetTop - o.offsetTop + s.offsetHeight + "px";
                            g.push(function () {
                                r.style.height = a
                            })
                        }
                    } else g.push(function () {
                        r.setAttribute("data-start", String(i)), i < n && r.setAttribute("data-end", String(n)), r.style.top = (i - d - 1) * h + m + "px", r.textContent = new Array(n - i + 2).join(" \n")
                    });
                    g.push(function () {
                        r.style.width = u.scrollWidth + "px"
                    }), g.push(function () {
                        p.appendChild(r)
                    })
                });
                var n = u.id;
                if (f && Prism.util.isActive(u, s) && n) {
                    y(u, s) || g.push(function () {
                        u.classList.add(s)
                    });
                    var r = parseInt(u.getAttribute("data-start") || "1");
                    v(".line-numbers-rows > span", u).forEach(function (e, t) {
                        var i = t + r;
                        e.onclick = function () {
                            var e = n + "." + i;
                            a = !1, location.hash = e, setTimeout(function () {
                                a = !0
                            }, 1)
                        }
                    })
                }
                return function () {
                    g.forEach(b)
                }
            }
        };
        var u = 0;
        Prism.hooks.add("before-sanity-check", function (e) {
            var t = e.element.parentElement;
            if (c(t)) {
                var i = 0;
                v(".line-highlight", t).forEach(function (e) {
                    i += e.textContent.length, e.parentNode.removeChild(e)
                }), i && /^(?: \n)+$/.test(e.code.slice(-i)) && (e.code = e.code.slice(0, -i))
            }
        }), Prism.hooks.add("complete", function e(t) {
            var i = t.element.parentElement;
            if (c(i)) {
                clearTimeout(u);
                var n = Prism.plugins.lineNumbers, r = t.plugins && t.plugins.lineNumbers;
                if (y(i, o) && n && !r) Prism.hooks.add("line-numbers", e); else Prism.plugins.lineHighlight.highlightLines(i)(), u = setTimeout(d, 1)
            }
        }), window.addEventListener("hashchange", d), window.addEventListener("resize", function () {
            v("pre").filter(c).map(function (e) {
                return Prism.plugins.lineHighlight.highlightLines(e)
            }).forEach(b)
        })
    }

    function v(e, t) {
        return Array.prototype.slice.call((t || document).querySelectorAll(e))
    }

    function y(e, t) {
        return e.classList.contains(t)
    }

    function b(e) {
        e()
    }

    function c(e) {
        return !(!e || !/pre/i.test(e.nodeName)) && (!!e.hasAttribute("data-line") || !(!e.id || !Prism.util.isActive(e, s)))
    }

    function d() {
        var e = location.hash.slice(1);
        v(".temporary.line-highlight").forEach(function (e) {
            e.parentNode.removeChild(e)
        });
        var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1];
        if (t && !document.getElementById(e)) {
            var i = e.slice(0, e.lastIndexOf(".")), n = document.getElementById(i);
            if (n) n.hasAttribute("data-line") || n.setAttribute("data-line", ""), Prism.plugins.lineHighlight.highlightLines(n, t, "temporary ")(), a && document.querySelector(".temporary.line-highlight").scrollIntoView()
        }
    }
}();
!function () {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var o = "line-numbers", a = /\n(?!$)/g, e = Prism.plugins.lineNumbers = {
            getLine: function (e, n) {
                if ("PRE" === e.tagName && e.classList.contains(o)) {
                    var t = e.querySelector(".line-numbers-rows");
                    if (t) {
                        var i = parseInt(e.getAttribute("data-start"), 10) || 1, r = i + (t.children.length - 1);
                        n < i && (n = i), r < n && (n = r);
                        var s = n - i;
                        return t.children[s]
                    }
                }
            }, resize: function (e) {
                u([e])
            }, assumeViewportIndependence: !0
        }, n = void 0;
        window.addEventListener("resize", function () {
            e.assumeViewportIndependence && n === window.innerWidth || (n = window.innerWidth, u(Array.prototype.slice.call(document.querySelectorAll("pre." + o))))
        }), Prism.hooks.add("complete", function (e) {
            if (e.code) {
                var n = e.element, t = n.parentNode;
                if (t && /pre/i.test(t.nodeName) && !n.querySelector(".line-numbers-rows") && Prism.util.isActive(n, o)) {
                    n.classList.remove(o), t.classList.add(o);
                    var i, r = e.code.match(a), s = r ? r.length + 1 : 1, l = new Array(s + 1).join("<span></span>");
                    (i = document.createElement("span")).setAttribute("aria-hidden", "true"), i.className = "line-numbers-rows", i.innerHTML = l, t.hasAttribute("data-start") && (t.style.counterReset = "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)), e.element.appendChild(i), u([t]), Prism.hooks.run("line-numbers", e)
                }
            }
        }), Prism.hooks.add("line-numbers", function (e) {
            e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
        })
    }

    function u(e) {
        if (0 != (e = e.filter(function (e) {
            var n = function (e) {
                return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
            }(e)["white-space"];
            return "pre-wrap" === n || "pre-line" === n
        })).length) {
            var n = e.map(function (e) {
                var n = e.querySelector("code"), t = e.querySelector(".line-numbers-rows");
                if (n && t) {
                    var i = e.querySelector(".line-numbers-sizer"), r = n.textContent.split(a);
                    i || ((i = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(i)), i.innerHTML = "0", i.style.display = "block";
                    var s = i.getBoundingClientRect().height;
                    return i.innerHTML = "", {element: e, lines: r, lineHeights: [], oneLinerHeight: s, sizer: i}
                }
            }).filter(Boolean);
            n.forEach(function (e) {
                var i = e.sizer, n = e.lines, r = e.lineHeights, s = e.oneLinerHeight;
                r[n.length - 1] = void 0, n.forEach(function (e, n) {
                    if (e && 1 < e.length) {
                        var t = i.appendChild(document.createElement("span"));
                        t.style.display = "block", t.textContent = e
                    } else r[n] = s
                })
            }), n.forEach(function (e) {
                for (var n = e.sizer, t = e.lineHeights, i = 0, r = 0; r < t.length; r++) void 0 === t[r] && (t[r] = n.children[i++].getBoundingClientRect().height)
            }), n.forEach(function (e) {
                var n = e.sizer, t = e.element.querySelector(".line-numbers-rows");
                n.style.display = "none", n.innerHTML = "", e.lineHeights.forEach(function (e, n) {
                    t.children[n].style.height = e + "px"
                })
            })
        }
    }
}();
