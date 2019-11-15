(function(context) {
    context.switcher = {
        init(target) {
            let c = document.querySelector(target);

            c.onclick = function() {
                if (!animation) {
                    if (status == "on") {
                        status = "off";
                        drawOff();
                    } else {
                        status = "on";
                        drawOn();
                    }
                    c.setAttribute("status", status);
                }
            }
    
            let ctx = c.getContext("2d");
    
            const WIDTH = c.width;
            const HEIGHT = c.height;
    
            const ON_COLOR = c.getAttribute("on");
            const OFF_COLOR = c.getAttribute("off");
            const CIRCLE_COLOR = c.getAttribute("circle");
    
            let status = c.getAttribute("status");
    
            // 是否正在动画
            let animation = false;
    
            if (status == "on") {
                drawOn();
            } else {
                drawOff();
            }
    
            function drawOn() {
                animation = true;
    
                let x = HEIGHT / 2;
    
                // 滑块的x位置
                let pos = x;
    
                let handle = setInterval(function() {
                    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    
                    ctx.beginPath();
                    ctx.fillStyle = ON_COLOR;
                    ctx.arc(x, x, x, 0, Math.PI * 2);
                    ctx.arc(WIDTH - x, x, x, 0, Math.PI * 2);
                    ctx.rect(x, 0, HEIGHT, HEIGHT);
                    ctx.fill();
                    ctx.closePath();
    
                    ctx.beginPath();
                    ctx.fillStyle = CIRCLE_COLOR;
                    ctx.arc(pos, x, x - 2, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.closePath();
    
                    if (pos == WIDTH - x) {
                        animation = false;
                        clearInterval(handle);
                    }
                    
                    pos++;
                }, 50);
            }
    
            function drawOff() {
                animation = true;
    
                let x = HEIGHT / 2;
    
                // 滑块的x位置
                let pos = WIDTH - x;
    
                let handle = setInterval(function() {
                    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    
                    ctx.beginPath();
                    ctx.fillStyle = OFF_COLOR;
                    ctx.arc(x, x, x, 0, Math.PI * 2);
                    ctx.arc(WIDTH - x, x, x, 0, Math.PI * 2);
                    ctx.rect(x, 0, HEIGHT, HEIGHT);
                    ctx.fill();
                    ctx.closePath();
    
                    ctx.beginPath();
                    ctx.fillStyle = CIRCLE_COLOR;
                    ctx.arc(pos, x, x - 2, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.closePath();
    
                    if (pos == x) {
                        animation = false;
                        clearInterval(handle);
                    }
                    
                    pos--;
                }, 50);
    
            }
    
        }
    };
})(this);