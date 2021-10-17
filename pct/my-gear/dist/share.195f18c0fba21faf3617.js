(() => {
    function t(t, n) { if (n) { const i = function(t) { let n, i, e; const a = t.r / 255,
                    o = t.g / 255,
                    s = t.b / 255; let l, r; const c = Math.max(a, o, s),
                    u = c - Math.min(a, o, s),
                    d = function(t) { return (c - t) / 6 / u + .5 }; return 0 == u ? l = r = 0 : (r = u / c, n = d(a), i = d(o), e = d(s), a === c ? l = e - i : o === c ? l = 1 / 3 + n - e : s === c && (l = 2 / 3 + i - n), l < 0 ? l += 1 : l > 1 && (l -= 1)), { h: Math.round(360 * l), s: Math.round(100 * r), v: Math.round(100 * c) } }(n); return i.s -= Math.round(i.s / 10 * (t % 10)), i.v += Math.round((100 - i.v) / 10 * (t % 10)),
                function(t) { let n, i, e, a, o, s, l, r; const c = t.h / 360,
                        u = t.s / 100,
                        d = t.v / 100; switch (a = Math.floor(6 * c), o = 6 * c - a, s = d * (1 - u), l = d * (1 - o * u), r = d * (1 - (1 - o) * u), a % 6) {
                        case 0:
                            n = d, i = r, e = s; break;
                        case 1:
                            n = l, i = d, e = s; break;
                        case 2:
                            n = s, i = d, e = r; break;
                        case 3:
                            n = s, i = l, e = d; break;
                        case 4:
                            n = r, i = s, e = d; break;
                        case 5:
                            n = d, i = s, e = l } return { r: Math.floor(255 * n), g: Math.floor(255 * i), b: Math.floor(255 * e) } }(i) } return colors = [{ r: 27, g: 119, b: 211 }, { r: 206, g: 24, b: 54 }, { r: 242, g: 208, b: 0 }, { r: 122, g: 179, b: 23 }, { r: 130, g: 33, b: 198 }, { r: 232, g: 110, b: 28 }, { r: 220, g: 242, b: 51 }, { r: 86, g: 174, b: 226 }, { r: 226, g: 86, b: 174 }, { r: 226, g: 137, b: 86 }, { r: 86, g: 226, b: 207 }], colors[t % colors.length] }
    pies = function(n) { let i, e, a, o, s, l, r, c = {}; let u, d = null,
            p = null,
            g = null;

        function h(t, n) { const i = {}; let e = 0; for (var a in i.points = {}, t) e += "object" == typeof(o = t[a]) ? h(o).total : o; for (var a in i.total = e, t) { var o; "object" == typeof(o = t[a]) ? (i.points[a] = h(o, i), i.points[a].name = a, i.points[a].visiblePoints = !1) : i.points[a] = { value: o, percent: o / e, name: a, parent: i } } return n && (i.percent = e / n.total, i.parent = n), i }

        function M(n) { let i = !1,
                e = 1,
                a = 0; const o = n.innerMinRadius,
                s = n.innerMaxRadius;
            n.startAngle && (a = n.startAngle); const r = a;
            n.angleMultiplier && (e = n.angleMultiplier), n.color && (i = n.color); let c = 0; for (const u in n.points) { const d = n.points[u];
                d.startAngle = r, d.minRadius = o, d.maxRadius = s, d.myAngle = d.percent * Math.PI * 2 * e, d.minAngle = a, d.maxAngle = a + d.myAngle, d.avgAngle = (d.minAngle + d.maxAngle) / 2, d.outsideMinPoint = { x: l.x + Math.cos(d.minAngle) * s, y: l.y + Math.sin(d.minAngle) * s }, d.outsideMaxPoint = { x: l.x + Math.cos(d.maxAngle) * s, y: l.y + Math.sin(d.maxAngle) * s }, d.insideMinPoint = { x: l.x + Math.cos(d.minAngle) * d.minRadius, y: l.y + Math.sin(d.minAngle) * d.minRadius }, d.insideMaxPoint = { x: l.x + Math.cos(d.maxAngle) * d.minRadius, y: l.y + Math.sin(d.maxAngle) * d.minRadius }, d.color || (d.color = t(c, i)), d.startAngle = a, f(d), a = d.maxAngle, c++ } }

        function f(t, n) { var i;
            n ? (a.strokeStyle = n, a.lineWidth = 2) : (a.strokeStyle = "rgb(245,245,245)", a.lineWidth = 3), a.fillStyle = `rgb(${(i = t.color).r},${i.g},${i.b})`, a.beginPath(), a.moveTo(t.outsideMinPoint.x, t.outsideMinPoint.y), a.arc(l.x, l.y, t.maxRadius, t.minAngle, t.maxAngle), a.lineTo(t.insideMaxPoint.x, t.insideMaxPoint.y), a.arc(l.x, l.y, t.minRadius, t.maxAngle, t.minAngle, !0), a.lineTo(t.outsideMinPoint.x, t.outsideMinPoint.y), a.stroke(), a.fill(), a.closePath() }

        function m() { const t = P(c),
                n = new Date; for (let i = 0; i < t.length; i++) { const e = t[i],
                    a = D(i + 1, t.length);
                e.innerMinRadius ? (e.startMinRadius = e.innerMinRadius, e.startMaxRadius = e.innerMaxRadius) : (e.startMinRadius = a[1], e.startMaxRadius = a[1]), e.startAngleMultiplier = 1, i == t.length - 1 && t.length > 1 && (e.startAngleMultiplier = e.percent, e.startMinRadius = a[1]), e.targetMinRadius = a[0], e.targetMaxRadius = a[1], e.targetAngleMultiplier = 1, e.deltaMinRadius = e.targetMinRadius - e.startMinRadius, e.deltaMaxRadius = e.targetMaxRadius - e.startMaxRadius, e.deltaAngleMultiplier = e.targetAngleMultiplier - e.startAngleMultiplier, e.startTime = n.getTime(), e.finishTime = e.startTime + 600, e.deltaTime = 600, e.angleMultiplierFunction = w, e.radiusFunction = T }
            setTimeout(x, 10) }

        function x() { const t = P(c),
                n = new Date; if (!(n.getTime() - 10 > t[0].finishTime)) { a.clearRect(0, 0, s.x, s.y); for (const i in t) { const e = t[i]; let a = (n.getTime() - e.startTime) / e.deltaTime;
                    a > 1 && (a = 1), e.innerMinRadius = e.startMinRadius + e.deltaMinRadius * e.radiusFunction(a), e.innerMaxRadius = e.startMaxRadius + e.deltaMaxRadius * e.radiusFunction(a), e.angleMultiplier = e.startAngleMultiplier + e.deltaAngleMultiplier * e.angleMultiplierFunction(a), M(e) }
                setTimeout(x, 10) } }

        function v(t) { const n = i.offset(),
                e = i.width(),
                a = i.height(),
                o = (t.pageX - n.left) * (s.x / e),
                r = (t.pageY - n.top) * (s.y / a),
                g = o - l.x,
                h = r - l.y; let M = Math.atan(h / g);
            g < 0 ? M += Math.PI : h < 0 && (M += 2 * Math.PI); const m = Math.sqrt(g * g + h * h);
            newHovered = A(c, M, m), newHovered ? (newHovered != d && (d && f(d), d = newHovered, f(d, "rgb(50,50,50)"), i.addClass("activeHover"), p && p(newHovered)), u.show().text(newHovered.name), u.css({ top: t.pageY - 10, left: t.pageX + 15 })) : (d && (f(d), p && p(newHovered)), d = 0, i.removeClass("activeHover"), u.hide()) }

        function b(t) { if (!d) return R(c, "visiblePoints", !1), c.visiblePoints = !0, a.clearRect(0, 0, s.x, s.y), void m();
            d.points && (R(d.parent, "visiblePoints", !1), d.parent.visiblePoints = !0, d.visiblePoints = !0, m(), g && g(d)) }

        function A(t, n, i) { for (const e in t.points) { const a = t.points[e]; if (a.points && a.visiblePoints) { const t = A(a, n, i); if (t) return t } let o = 0; if (void 0 !== a.parent.startAngle && (o = a.parent.startAngle), i < a.maxRadius && i > a.minRadius) { if (a.minAngle <= 2 * Math.PI && a.maxAngle > 2 * Math.PI && (n > a.minAngle || n + 2 * Math.PI < a.maxAngle)) return a; if (a.minAngle >= 2 * Math.PI && a.maxAngle > 2 * Math.PI && n + 2 * Math.PI > a.minAngle && n + 2 * Math.PI < a.maxAngle) return a; if (n > a.minAngle && n < a.maxAngle) return a } } return null }

        function R(t, n, i) { t[n] = i; for (const e in t.points) R(t.points[e], n, i) }

        function y() { c.visiblePoints = !0; const t = P(c); for (let n = 0; n < t.length; n++) { const i = t[n],
                    e = D(n + 1, t.length);
                i.innerMinRadius = e[0], i.innerMaxRadius = e[1], M(i) }
            i.off("mousemove").on("mousemove", v), i.off("click").on("click", b) }

        function P(t) { out = [t]; for (const n in t.points)
                if (t.points[n].visiblePoints) { t.points[n].points && (out = out.concat(P(t.points[n]))); break }
            return out }

        function k(t, n) { if (void 0 !== n.id)
                for (var i in t) n.id == t[i].id && (n.visiblePoints = !0); for (var i in n.points) k(t, n.points[i]); return out }

        function D(t, n) { let i = 1 / n * .3 + .7 * (t / n - .1); return 1 == n && (i *= .8), [(1 / n * .3 + (t - 1) / n * .7) * r, i * r] }

        function T(t) { return t > .5 ? 1 : (out = (1 - Math.cos(2 * t * Math.PI)) / 2, out > 1 && (out = 1), out) }

        function w(t) { return t < .5 ? 0 : (out = (1 - Math.cos(2 * (t - .5) * Math.PI)) / 2, out > 1 && (out = 1), out) } return n.container.length && (n.data || n.processedData) ? (i = n.container, i.css("position", "relative"), e = i[0], a = e.getContext("2d"), n.data ? (o = n.data, c = h(o)) : n.processedData && (c = n.processedData), s = { x: a.canvas.width, y: a.canvas.height }, l = { x: s.x / 2, y: s.y / 2 }, r = l.x < l.y ? l.x : l.y, n.clickCallback && (g = n.clickCallback), n.hoverCallback && (p = n.hoverCallback), y(), u = $("<div class='tooltip' style='position:absolute;display:none;border:1px solid #FFF;background:#444;color:#FFF;box-shadow:0 0 5px rgba(0,0,0,0.25);padding:3px;z-index:105;'></tooltip>"), $("body").append(u)) : console.warn("invalid params!!"), { update: function(t) { const n = P(c); if (t.data) c = h(t.data);
                else { if (!t.processedData) return;
                    c = t.processedData }
                k(n, c), a.clearRect(0, 0, s.x, s.y), y() }, open: function() { d && (R(d.parent, "visiblePoints", !1), d.parent.visiblePoints = !0, d.visiblePoints = !0, m()) }, close: function() { R(c, "visiblePoints", !1), c.visiblePoints = !0, a.clearRect(0, 0, s.x, s.y), m() } } } })(), listReport = function() { const t = $(".lpList"),
        n = $(".lpCategories"),
        i = $(".lpChart"),
        e = $("#lpImageDialog"),
        a = $(".lpModalOverlay"); let o = null;

    function s(t, n, i) { if (void 0 === i && (i = !1), "g" == n) return Math.round(100 * t / 1e3) / 100; if ("kg" == n) return Math.round(100 * t / 1e6, 2) / 100; if ("oz" == n) return Math.round(100 * t / 28349.5, 2) / 100; if ("lb" == n) { if (!i) return Math.round(100 * t / 453592, 2) / 100; { let n = ""; const i = t / 453592,
                    e = Math.floor(i);
                Math.round(i % 1 * 16 * 100), e && (n += "lb", e > 1 && (n += "s")) } } }
    t.on("click", ".lpUnitSelect", (function(t) { t.stopPropagation(), $(this).toggleClass("lpOpen"); const n = $(".lpUnit", this).val();
        $("ul", this).removeClass("oz lb g kg"), $("ul", this).addClass(n) })), t.on("click", ".lpUnitSelect li", (function() { const t = $(this).text(),
            n = $(this).parents(".lpUnitSelect");
        $(".lpDisplay", n).text(t), $(".lpUnit", n).val(t), $(this).parents(".lpTotalUnit").length ? ($(".lpTotalValue", $(this).parents(".lpTotal")).text(s(parseFloat($(".lpMG", n).val()), t)), function(t) { $(".lpDisplaySubtotal").each((function() { $(this).text(s(parseFloat($(this).attr("mg")), t)), $(this).next().text(t) })) }(t)) : $(".lpWeight").each((function() { const n = $(this).parent();
            $(this).text(s(parseFloat($(".lpMG", n).val()), t)), $(".lpDisplay", n).text(t) })) })), n.on("click", ".lpItemImage", (function() { const t = $(this).attr("href"),
            n = $(`<img src='${t}' />`);
        e.empty().append(n), n.load((() => { e.show(), a.show(),
                function() { const t = $(".dialog:visible");
                    t.css("margin-top", -1 * t.outerHeight() / 2 + "px") }() })) })), a.on("click", (() => { $(".lpDialog:visible").hasClass("sticky") || (a.fadeOut(), e.fadeOut()) })), $(document).on("click", (() => { $(".lpOpen").removeClass("lpOpen") })), "undefined" != typeof chartData && (chartData = JSON.parse(unescape(chartData)), function t(n, i) { i && (n.parent = i); for (const i in n.points) t(n.points[i], n) }(chartData, !1), pies({ processedData: chartData, container: i, hoverCallback: function(t) { $(".hover").removeClass("hover"), t && t.id && $(`#total_${t.id}`).addClass("hover") } })) }, $((() => { listReport() }));