document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("calendar-button"),t=document.getElementById("calendar-modal"),n=t.querySelector(".close");e.addEventListener("click",function(){e.classList.add("act"),t.classList.add("visible")}),n.addEventListener("click",function(){t.classList.remove("visible"),e.classList.remove("act")}),document.body.addEventListener("mouseup",function(e){null==(e=e||window.event).target.closest("#calendar-modal")&&t.classList.contains("visible")&&n.click()}),document.body.addEventListener("keyup",function(e){27==((e=e||window.event).keyCode||e.which)&&null==e.target.closest("#calendar-modal")&&t.classList.contains("visible")&&n.click()});var a=document.getElementById("countdown"),o=a.querySelector(".days"),l=a.querySelector(".hours"),c=a.querySelector(".minutes");if(a.getAttribute("data-date"))var d=parseInt(1e3*a.getAttribute("data-date"));else d=new Date;var i=new Date(2021,10,10,20),s=null;function r(){var e=i-d;e<=0&&(clearInterval(s),window.location.reload(!0));var t=0<e?Math.floor(e/1e3/60/60/24):0,n=0<e?Math.floor(e/1e3/60/60)%24:0,a=0<e?Math.floor(e/1e3/60)%60:0;o.textContent=t<10?"0"+t:t,l.textContent=n<10?"0"+n:n,c.textContent=a<10?"0"+a:a}0<i-new Date?(r(),s=setInterval(r,1e3)):setTimeout(function(){window.location.reload(!0)},6e4)});