/* 
 * hexo theme meow
 * mouse event scripts
 */

const initMouse = () => {
  ! function (e, t, a) {
    function r() {
      for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[
        e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x +
        "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e]
          .scale + ");z-index:99999");
      requestAnimationFrame(r)
    }

    function n() {
      var t = "function" == typeof e.onclick && e.onclick;
      e.onclick = function (e) {
        t && t(), o(e)
      }
    }

    function o(e) {
      var a = t.createElement("div");
      a.className = "heart", a.textContent = "💗", s.push({
        el: a,
        x: e.clientX - 9,
        y: e.clientY - 9,
        scale: 1,
        alpha: 1
      }), t.body.appendChild(a)
    }

    function i(e) {
      var a = t.createElement("style");
      a.type = "text/css";
      try {
        a.appendChild(t.createTextNode(e))
      } catch (t) {
        a.styleSheet.cssText = e
      }
      t.getElementsByTagName("head")[0].appendChild(a)
    }

    function c() {
      return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math
        .random()) + ")"
    }
    var s = [];
    e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e
      .mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
        setTimeout(e, 1e3 / 60)
      }, i(
        ".heart{position: fixed;width: auto;height: auto;font-size: 18px;line-height: 1;background: none;pointer-events: none;user-select: none;-webkit-user-select: none;}"
      ), n(), r()
  }(window, document);

};

export default initMouse;