/**
 * Wplp Cookies Option
 */
 class Wplp_Cookies{
     getCookie = (cookieName) => {
        let name = cookieName + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }
    createCookie = (cookieName, cookieValue, cookieExpireDays) => {
        let currentDate = new Date();
        currentDate.setTime(currentDate.getTime() + (cookieExpireDays*24*60*60*1000));
        let expires = "expires=" + currentDate.toGMTString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
        if(document.cookie){
        document.getElementById("wplp-cookiePopup").style.display = "none";
        }else{
          alert("Unable to set cookie. Please allow all cookies site from cookie setting of your browser");
        }
    }
    checkCookie = (cookieName=false) => {
        let check = this.getCookie(cookieName);
        if(check==""){
            document.getElementById("wplp-cookiePopup").style.display = "block";
        }else{
            document.getElementById("wplp-cookiePopup").style.display = "none";
        }
    }
}
// when users click accept button
let cookieName = "wplegalpages";
let cookieValue ="wplegalpages";
let cookieExpireDays = 30;
let cookies = new Wplp_Cookies();
cookies.checkCookie(cookieName);
let acceptCookie= document.getElementById("wplp_acceptCookie");
acceptCookie.onclick= function(){
    cookies.createCookie(cookieName, cookieValue, cookieExpireDays); 
} 