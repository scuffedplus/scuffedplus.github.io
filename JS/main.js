var themeint = sessionStorage.getItem("themeint")
var root = document.querySelector(':root');
if(themeint == null){
    var themeint = Math.floor(Math.random()*5);
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
        "primary-color": "#ee8de6",
        "backdrop-color": "#0f0f0f",
        "secondary-color": "#000000",
        "primary-double": "#5bebf5",
        "tertiary-color": "#ffa7ff93"
    },
    2:{
        "primary-color": "#e7723c",
        "backdrop-color": "#0f0f0f",
        "secondary-color": "#ffffff",
        "primary-double": "#f5a55b",
        "tertiary-color": "#e7723c"
    },
    3:{
        "primary-color": "#fff3e8",
        "backdrop-color": "#3c2f2f",
        "secondary-color": "#be9b7b",
        "primary-double": "#f7d3d2",
        "tertiary-color": "#fffaf5"
        
    },
    4:{
        "primary-color": "#ffffff",
        "backdrop-color": "#F5A9B8",
        "secondary-color": "#F5A9B8",
        "primary-double": "#5BCEFA",
        "tertiary-color": "#fffaf5"
        
    }
}


var theme = colors[themeint];


root.style.setProperty('--primary-color', theme["primary-color"]);
root.style.setProperty('--backdrop-color', theme["backdrop-color"]);
root.style.setProperty('--secondary-color', theme["secondary-color"]);
root.style.setProperty('--primary-double', theme["primary-double"]);
root.style.setProperty('--tertiary-color', theme["tertiary-color"]);

