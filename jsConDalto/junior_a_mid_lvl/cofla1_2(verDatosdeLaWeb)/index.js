let href = window.location.href;
let pathname = window.location.pathname;
let protocol = window.location.protocol;
let hostname = window.location.hostname;

let html = `protocolo= ${protocol}<br>`;
html += `pathname= ${pathname}<br>`;
html += `hostname= ${hostname}<br>`;
html += `href= ${href}<br>`;

document.write(html);