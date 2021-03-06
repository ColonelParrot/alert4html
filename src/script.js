/*! alert4HTML | (c) alert4HTML authors | https://github.com/ColonelParrot/alert4html/ */
var l = document.createElement("style");
l.innerHTML = '.alert4html.alert4html-container{position:fixed;width:450px;height:auto;left:calc((100% - 450px) / 2);border-radius:3px;box-shadow:0 0 2px black;border-bottom:1px solid;font-family:system-ui;user-select:none;opacity:0;top:-10px;transition:0.5s;z-index:2147483647;background-color:white;}.alert4html.alert4html-container .alert4html-controls button{min-width:69px;height:32px;}.alert4html.alert4html-container .alert4html-controls button:not(:first-child){margin-left:5px;}.alert4html.alert4html-container .alert4html-controls .alert4html-proceed{background-color:#3e86e8;color:white;border-radius:5px;font-family:system-ui;font-size:0.75em;border:1px solid #bad3f7;outline:none;}.alert4html.alert4html-container .alert4html-controls .alert4html-cancel{background-color:#ffffff;color:#3e86e8;border:none;border-radius:5px;font-size:0.75em;border:1px solid #dadce0;outline:none;}.alert4html.alert4html-container .alert4html-title{margin:20px 15px;font-size:0.9em;margin-bottom:10px;}.alert4html.alert4html-container .alert4html-content{font-size:0.8em;margin-left:15px;margin-right:15px;}.alert4html.alert4html-container .alert4html-controls{height:45px;margin-top:10px;margin-left:15px;margin-right:15px;text-align:right;}';
document.head.appendChild(l);
class HTMLAlert {
    constructor(title, innerHTML, buttons, onsubmit) {
        if (buttons == null) {
            buttons = {
                z: {
                    content: "OK",
                    type: "proceed"
                }
            };
        }
        if (onsubmit == null) {
            var y = this;
            onsubmit = function() {
                y.destroy();
            }
        }
        var a = document.createElement("div");
        a.setAttribute("class", "alert4html alert4html-container");
        var b = document.createElement("p");
        b.setAttribute("class", "alert4html-title");
        b.innerText = title;
        var c = document.createElement("div");
        c.setAttribute("class", "alert4html-content");
        c.innerHTML = innerHTML;
        var d = document.createElement("div");
        d.setAttribute("class", "alert4html-controls");

        function addListener(g, h, i) {
            g.addEventListener("click", function() {
                onsubmit(h, i)
            })
        }
        for (var button in buttons) {
            var f = buttons[button];
            var e = document.createElement("button");
            var j = f.content;
            var k = f.type;
            e.setAttribute("class", "alert4html-" + k);
            e.innerHTML = j;
            d.appendChild(e);
            addListener(e, j, k)
        }
        a.appendChild(b);
        a.appendChild(c);
        a.appendChild(d);
        document.body.appendChild(a);
        this.a = a;
        setTimeout(function() {
            a.style.opacity = "1";
            a.style.top = "5px";
        }, 1);
    }
    destroy() {
        this.a.style.top = "-10px";
        this.a.style.opacity = "0";
    }
}
