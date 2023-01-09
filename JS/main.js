var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        //this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
var themeint = sessionStorage.getItem("themeint")
var root = document.querySelector(':root');
if(themeint == null){
    var themeint = Math.floor(Math.random() * 4);
    sessionStorage.setItem("themeint", themeint);
}

var colors = {
    0:{
        "primary-color": "#ffc996",
        "backdrop-color": "#583D72",
        "secondary-color": "#583D72",
        "primary-double": "#ffeae2",
        "tertiary-color": "#271b35"
    },
    1:{
        "primary-color": "#e7723c",
        "backdrop-color": "#383737",
        "secondary-color": "#ffffff",
        "primary-double": "#f5a55b",
        "tertiary-color": "#411e0fb4"
    },
    2:{
        "primary-color": "#ee8de6",
        "backdrop-color": "#0f0f0f",
        "secondary-color": "#000000",
        "primary-double": "#5bebf5",
        "tertiary-color": "#ffa7ff93"
    },
    3:{
        "primary-color": "#4d3ce7",
        "backdrop-color": "#ffffff",
        "secondary-color": "#ffffff",
        "primary-double": "#5369e9",
        "tertiary-color": "#5d4de9b4"
    }
}

var theme = colors[themeint];

root.style.setProperty('--primary-color', theme["primary-color"]);
root.style.setProperty('--backdrop-color', theme["backdrop-color"]);
root.style.setProperty('--secondary-color', theme["secondary-color"]);
root.style.setProperty('--primary-double', theme["primary-double"]);
root.style.setProperty('--tertiary-color', theme["tertiary-color"]);

