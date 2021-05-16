function newChangePosition(element) {
    element.style.setProperty("top", ((Math.random()*85) + 5).toString()+"%")
    element.style.setProperty("right", ((Math.random()*150)-60).toString()+"%")
    pain()
}   

function adjust() {
    if (window.screen.width <= 400) {
        for (let i=0; i<document.getElementsByClassName("loveButton").length; i++) {
            document.getElementsByClassName("loveButton")[i].style.setProperty("width", "70%");
            document.getElementsByClassName("loveButton")[i].style.setProperty("height", "10%");
            document.getElementsByClassName("loveButton")[i].style.setProperty("font-size", "50px");
            document.getElementsByClassName("loveButton")[i].style.setProperty("right", "15%");
        }
        document.getElementsByClassName("loveButton")[0].style.setProperty("top", "50%");
        document.getElementsByClassName("loveButton")[0].style.setProperty("left", "15%");
        document.getElementsByClassName("loveButton")[1].style.setProperty("top", "70%");
        document.getElementsByClassName("loveButton")[1].setAttribute("onmouseover", "newChangePosition(this)");

        document.getElementsByTagName("p")[0].style.setProperty("font-size", "130px");
        document.getElementsByTagName("p")[0].style.setProperty("top", "10%");
    }
}