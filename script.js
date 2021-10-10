const MAIN_COLOR = "#f8ff8d";
const TESTIMONIALS_CONTAINER= [...$(".testimonials-container").children()];
const valRegEx = /[0-9]+/;
let currentSlide = 0;
var elem;


const menu_icon = document.getElementsByClassName('menu-icon')[0];
const menu_section = document.getElementsByClassName("menu-section")[0];
const menu_list = document.getElementsByClassName("menu-list")[0];
const lower_half = document.getElementsByClassName("lower-half")[0];
const container = document.getElementsByClassName("testimonials-container")[0].children[0];
let isClicked =false;


function detectPosition(){
    
        let currentHeight = window.innerHeight;
        let currentWidth = window.innerWidth;
        let elementHeight=window.getComputedStyle(menu_icon).getPropertyValue("height");
        let elementWidth=window.getComputedStyle(menu_icon).getPropertyValue("width");
        let elementHeightValue =elementHeight.match(valRegEx)[0];
        let elementWidthValue = elementWidth.match(valRegEx)[0];
        // console.log(elementHeightValue);
        menu_icon.style.top=((currentHeight/100) * 90)-(elementHeightValue/2)+"px";
        menu_icon.style.left=((currentWidth/100) * 95)-(elementWidthValue)+"px";
        container.style.transform="translateX("+(((currentWidth/2)-160))+"px)";
   
}
window.addEventListener("load",function(){
detectPosition();

});


window.addEventListener("resize",function(){
    detectPosition();
})
$(window).scroll(function(){
if(window.scrollY>=100){
    $('.navbar').css("background-color",MAIN_COLOR)
}else{
    $('.navbar').css("background-color","transparent")
}
});


$(".nav_button.left-button").on("click",function(){
    if(currentSlide>=0 && currentSlide<4){
        let val = window.getComputedStyle(TESTIMONIALS_CONTAINER[0]).getPropertyValue("transform");
        var numericValue = new WebKitCSSMatrix(val);
        $(TESTIMONIALS_CONTAINER[0]).css("transform",'matrix(1, 0, 0, 1,'+ (numericValue.e - 332)+', 0)');
        // console.log(numericValue);
        currentSlide++;
    }
})



$(".nav_button.right-button").on("click",function(){
    if(currentSlide>0 && currentSlide<=4){
        let val = window.getComputedStyle(TESTIMONIALS_CONTAINER[0]).getPropertyValue("transform");
        var numericValue = new WebKitCSSMatrix(val);
        $(TESTIMONIALS_CONTAINER[0]).css("transform",'matrix(1, 0, 0, 1,'+ (numericValue.e + 332)+', 0)');
        // console.log(numericValue);
        currentSlide--;
    }

  
    });




menu_icon.addEventListener("click",function(){
    isClicked = !isClicked;
    isClicked ? 
    menu_icon.children[0].setAttribute("src","./assets/icons/cancel.png")
    :
    menu_icon.children[0].setAttribute("src","./assets/icons/menu.png");
    clickListener();
});

function clickListener(){
    if(isClicked){
        menu_section.style.height = "100vh";
        menu_section.style.width = "100vw";
        menu_section.style.padding="var(--gap-max)";
        setTimeout(()=>{
            menu_list.style.opacity = 1;
            lower_half.style.opacity = 1;
        },500);
      
    }
    else{
        menu_list.style.opacity = 0;
        lower_half.style.opacity = 0;
        setTimeout(()=>{
            menu_section.style.padding="0";
            menu_section.style.height = "0vh";
            menu_section.style.width = "0vw";
        },500);
    }
}