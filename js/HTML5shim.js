(function(e, t) {
	function n() {
		var e = g.elements;
		return "string" == typeof e ? e.split(" ") : e
	}
	function i(e) {
		var t = f[e[h]];
		return t || (t = {}, p++, e[h] = p, f[p] = t), t
	}
	function r(e, n, r) {
		return n || (n = t), l ? n.createElement(e) : (r || (r = i(n)), n = r.cache[e] ? r.cache[e].cloneNode() : d.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), n.canHaveChildren && !u.test(e) ? r.frag.appendChild(n) : n)
	}
	function o(e, t) {
		t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
			return g.shivMethods ? r(n, e, t) : t.createElem(n)
		}, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/\w+/g, function(e) {
			return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
		}) + ");return n}")(g, t.frag)
	}
	function a(e) {
		e || (e = t);
		var n = i(e);
		if (g.shivCSS && !s && !n.hasCSS) {
			var r, a = e;
			r = a.createElement("p"), a = a.getElementsByTagName("head")[0] || a.documentElement, r.innerHTML = "x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>", r = a.insertBefore(r.lastChild, a.firstChild), n.hasCSS = !! r
		}
		return l || o(e, n), e
	}
	var s, l, c = e.html5 || {},
		u = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
		d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
		h = "_html5shiv",
		p = 0,
		f = {};
	(function() {
		try {
			var e = t.createElement("a");
			e.innerHTML = "<xyz></xyz>", s = "hidden" in e;
			var n;
			if (!(n = 1 == e.childNodes.length)) {
				t.createElement("a");
				var i = t.createDocumentFragment();
				n = i.cloneNode === void 0 || i.createDocumentFragment === void 0 || i.createElement === void 0
			}
			l = n
		} catch (r) {
			l = s = !0
		}
	})();
	var g = {
		elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
		shivCSS: !1 !== c.shivCSS,
		supportsUnknownElements: l,
		shivMethods: !1 !== c.shivMethods,
		type: "default",
		shivDocument: a,
		createElement: r,
		createDocumentFragment: function(e, r) {
			if (e || (e = t), l) return e.createDocumentFragment();
			for (var r = r || i(e), o = r.frag.cloneNode(), a = 0, s = n(), c = s.length; c > a; a++) o.createElement(s[a]);
			return o
		}
	};
	e.html5 = g, a(t)
})(this, document);