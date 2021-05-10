function pain() {
    let pain = document.getElementById("pain").children;
    try {
        clearInterval(interval);
    }
    catch (e) {
        console.log(e)
    }

    // Grow the shadows
    j = 0
    interval = setInterval(function() {
        if (j >= 200) {
            clearInterval(interval);
            j = 200
            interval = setInterval(function() {
                if (j <= 0) {
                    clearInterval(interval);
                    for (let i=0; i<pain.length; i++) {
                        pain[i].style.setProperty("box-shadow", "0px 0px 0px white");
                    }
                }
                else {
                    for (let i=0; i<pain.length; i++) {
                        let c = pain[i].textContent.split(",");
                        pain[i].style.setProperty("box-shadow", (parseInt(c[0])*j).toString()+"px "+(parseInt(c[1])*j).toString()+"px 250px rgb(226, 127, 127)");
                    }
                }
                j -= 10;
            }, 10)
        }
        else {
            for (let i=0; i<pain.length; i++) {
                let c = pain[i].textContent.split(",");
                pain[i].style.setProperty("box-shadow", (parseInt(c[0])*j).toString()+"px "+(parseInt(c[1])*j).toString()+"px 250px rgb(226, 127, 127)");
            }
        }
        j += 50;
    }, 10)
}