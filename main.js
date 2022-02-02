window.addEventListener('load', () =>{
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext("2d")
    var dots = 0
    var oneo = 0
    function dot() {
        x = Math.floor(Math.random()*350)
        y = Math.floor(Math.random()*350)
        ctx.fillStyle=("#"+String(Math.floor(Math.random()*16777215).toString(16)))
        ctx.fillRect(x, y, 3, 3)
        dots = dots + 1
        document.getElementById("dots").innerHTML=(dots)
        if (x==1) {
            if (y==1) {
                oneo = oneo + 1
                document.getElementById('one').innerHTML=(oneo)
            }
        }
        setTimeout(() => {
            dot()
        }, 5);
    }
    dot()
})