
const urls=['facebook.com/iasaurav','instagram.com/ia_aurav','twitter.com/ia_aurav','t.me/ia_aurav','youtube.com/@Iasaurav','pinterest.com/iasaurav','medium.com/@ia_aurav','codepen.io/ia_aurav','github.com/iasaurav',];
const u=['Facebook','Instagram','Twitter','Telegram','YouTube','Pinterest','Medium','Codepen','Github',];
$.each(urls, function(j, data) {
var ul_dat = ['<a href="https://'+urls[j]+'"target="_blank">'+u[j]+'</a> | '];
            $("#ioplsnzn").append(ul_dat);
  
     });

function yourlinksocial() {
var social = ['facebook.com/iasaurav','instagram.com/ia_aurav','twitter.com/ia_aurav','t.me/ia_aurav','youtube.com/@Iasaurav','pinterest.com/iasaurav','medium.com/@ia_aurav','codepen.io/ia_aurav','github.com/iasaurav',] 
for (let i = 0; i < social.length; i++) {window.open("https://"+social[i])}};
