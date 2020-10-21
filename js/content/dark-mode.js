var DMSwitch = `<li style=" text-align:center; justify-content:center;"><a class="dropdown-toggle DM"><label class="switch">
<input type="checkbox" id="DMCheckbox">
<span class="slider round"></span>
</label></a></li>`

  var style = `<style>
.switch {
position: relative;
display: inline-block;
width: 3vmin;
height: 1.5vminx;
}

/* Hide default HTML checkbox */
.switch input {
opacity: 0;
width: 0;
height: 0;
}

/* The slider */
.slider {
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
-webkit-transition: .4s;
transition: .4s;
}

.slider:before {
position: absolute;
content: "";
height: 1vmin;
width: 1vmin;
left: 4px;
bottom: 4px;
background-color: white;
-webkit-transition: .4s;
transition: .4s;
}

input:checked + .slider {
background-color: #2196F3;
}

input:focus + .slider {
box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
-webkit-transform: translateX(1.5vmin);
-ms-transform: translateX(1.5vmin);
transform: translateX(1.5vmin);
}

/* Rounded sliders */
.slider.round {
border-radius: 34px;
}

.slider.round:before {
border-radius: 50%;
}</style>`

var script = `<script>var pathname = window.location.pathname;

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var check = false;

$(document).ready(function() {
    $("#DMCheckbox").change(function() {
        check = !check;
        setCookie("Dark-Mode", check, 365);
        DM();
    });
});

function DM(){
    if(check == true){
            
        if (pathname == "/progress"){
            $(".Progress__item").css({"background-color":"#23272A", "border-color":"#23272A"});
        }else if (pathname == "/tasks"){
            $(".table").children().css({"background-color":"#23272A"});
            $(".table").children().children().hover(function(){
                $(this).css({"background-color":"#2C2F33", "border-color":"#2C2F33"});
            }, function(){
                $(this).css("background-color", "#00000000");
            });
        }else if (pathname == "/scores"){
            $(".Utility").css({"color":"#fff", "background-color":"#23272A", "border-color":"#23272A"});
            $(".Assessments__header").css({"color":"#fff", "background-color":"#23272A", "border-color":"#fff"});
            $(".Btn__simple").css({"color":"#fff", "background-color":"#23272A", "border-color":"#fff"});
        }else if (pathname == "/"){
            $(".navbar").css({"color":"white", "background-color":"#2C2F33"});
            $(".Homepage__devices").css({"color":"white", "background-color":"#2C2F33"});
            $(".Homepage__stats").css({"color":"white", "background-color":"#2C2F33"});
            $(".Homepage__features").css({"color":"white", "background-color":"#2C2F33"});
            $(".Homepage__time").css({"color":"white", "background-color":"#2C2F33"});
            $(".Homepage__curriculum").css({"color":"white", "background-color":"#2C2F33"});
            $(".Homepage__results").css({"color":"white", "background-color":"#2C2F33"});
            $(".Homepage__testimonials").css({"color":"white", "background-color":"#2C2F33"});
            $(".Homepage__press").css({"color":"white", "background-color":"#2C2F33"});
            $(".Homepage__media").css({"color":"white", "background-color":"#2C2F33"});
        }
        if(pathname != "/"){
            $(".DM").css({"background-color":"#2C2F33"});
            $(".active").css({"background-color":"#2C2F33"});
            $(".active").children().css({"background-color":"#00000000"});
            $("body").css({"color":"white", "background-color":"#2C2F33"});
            $(".White-container").css({"color":"white", "background-color":"#23272A", "border-color":"#2C2F33"});
            $(".navbar").css({"color":"white", "background-color":"#23272A", "border-color":"#2C2F33"});
            $(".search").css({"color":"white", "border-color":"#2C2F33"});
            $(".Search__input").css({"background-color":"#23272A", "color":"white"});
            $(".dropdown-toggle").css({"color":"white", "border-color":"#2C2F33"});
            $(".hidden-sm").css({"color":"white", "border-color":"#2C2F33"});
            $(".hm").css({"color":"white", "border-color":"#2C2F33"});
            $(".hm").parent().css({"color":"white", "border-color":"#2C2F33"});
            $(".dropdown-menu").css({"color":"white", "background-color":"#23272A"});

            $(".dropdown-toggle").hover(function(){
                $(this).css("background-color", "#2C2F33");
            }, function(){
                $(this).css("background-color", "#00000000");
            });

            $(".dropdown-menu > li > a").hover(function(){
                $(this).css("background-color", "#2C2F33");
            }, function(){
                $(this).css("background-color", "#00000000");
            });

            $(".hm-tasks").parent().parent().hover(function(){
                if ($(this).hasClass("active") == false){
                    $(this).children().css({"background-color":"#00000000"});
                    $(this).css("background-color", "#2C2F33");
                }
            }, function(){
                if ($(this).hasClass("active") == false){
                    $(this).css("background-color", "#00000000");
                }
            });
            $(".hm-choose-lesson").parent().parent().hover(function(){
                if ($(this).hasClass("active") == false){
                    $(this).children().css({"background-color":"#00000000"});
                    $(this).css("background-color", "#2C2F33");
                }
            }, function(){
                if ($(this).hasClass("active") == false){
                    $(this).css("background-color", "#00000000");
                }
            });
            $(".hm-scores").parent().parent().hover(function(){
                if ($(this).hasClass("active") == false){
                    $(this).children().css({"background-color":"#00000000"});
                    $(this).css("background-color", "#2C2F33");
                }
            }, function(){
                if ($(this).hasClass("active") == false){
                    $(this).css("background-color", "#00000000");
                }
            });
        }
    } else if (check == false){
        if(pathname != "/"){
            if (pathname == "/progress"){
                $(".Progress__item").css({"background-color":"#FFF", "border-color":"#333"});
            }else if (pathname == "/tasks"){
                $(".table").children().css({"background-color":"#fff"});
                $(".table").children().children().hover(function(){
                $(this).css({"background-color":"#dce0e4", "border-color":"#dce0e4"});
            }, function(){
                $(this).css("background-color", "#00000000");
            });
            } else if (pathname == "/scores"){
                $(".Utility").css({"color":"black", "background-color":"#FFF", "border-color":"#d0d0d0"});
                $(".Assessments__header").css({"color":"black", "background-color":"#FFF", "border-color":"#d0d0d0"});
                $(".Btn__simple").css({"color":"black", "background-color":"#FFF", "border-color":"#d0d0d0"});
            }
            $(".DM").css({"background-color":"#dce0e4"});
            $(".active").css({"background-color":"#dce0e4"});
            $(".active").children().css({"background-color":"#00000000"});
            $("body").css({"color":"#333", "background-color":"#FFF"});
            $(".White-container").css({"color":"#333", "background-color":"#FFF", "border-color":"#d0d0d0"});
            $(".navbar").css({"color":"#777", "background-color":"#FFF", "border-color":"#d0d0d0"});
            $(".search").css({"color":"#555", "border-color":"#d0d0d0"});
            $(".Search__input").css({"background-color":"#FFF", "color":"#555"});
            $(".dropdown-toggle").css({"color":"#777", "border-color":"#d0d0d0"});
            $(".hidden-sm").css({"color":"#777", "border-color":"#d0d0d0"});
            $(".hm").css({"color":"#333", "border-color":"#d0d0d0"});
            $(".hm").parent().css({"color":"#777", "border-color":"#d0d0d0"});
            $(".dropdown-menu").css({"color":"black", "background-color":"#FFF"});

            $(".dropdown-toggle").hover(function(){
                $(this).css("background-color", "#dce0e4");
            }, function(){
                $(this).css("background-color", "#00000000");
            });

            $(".dropdown-menu > li > a").hover(function(){
                $(this).css("background-color", "#dce0e4");
            }, function(){
                $(this).css("background-color", "#00000000");
            });

            $(".hm-tasks").parent().parent().hover(function(){
                if ($(this).hasClass("active") == false){
                $(this).css("background-color", "#dce0e4");
            }
            }, function(){
                if ($(this).hasClass("active") == false){
                    $(this).css("background-color", "#00000000");
                }
            });
            $(".hm-choose-lesson").parent().parent().hover(function(){
                if ($(this).hasClass("active") == false){
                    $(this).css("background-color", "#dce0e4");
                }
            }, function(){
                if ($(this).hasClass("active") == false){
                    $(this).css("background-color", "#00000000");
                }
            });
            $(".hm-scores").parent().parent().hover(function(){
                if ($(this).hasClass("active") == false){
                    $(this).css("background-color", "#dce0e4");
                }
            }, function(){
                if ($(this).hasClass("active") == false){
                    $(this).css("background-color", "#00000000");
                }
            });
        }
    }
}
</script>`

$(() => {
    $("body").append(script);
    $("head").append(style);
    $(".navbar-nav").append(DMSwitch);
    $(".hm").parent().css({"height":"100%"});
    $(".dropdown-toggle").css({"height":"100%"});
    var cookieIN = getCookie("Dark-Mode");
    if(cookieIN != ""){
        if(cookieIN == "true"){
            check = true;
            $("#DMCheckbox").prop('checked', true);
            setTimeout(function() {
                DM();
            },1000)
        }else if(cookieIN == "false"){
            check = false;
            $("#DMCheckbox").prop('checked', false);
            setTimeout(function() {
                DM();
            },1000)
        }
    }
})

