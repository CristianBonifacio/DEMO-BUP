export default `<!doctype html>
<html lang="en">
<head><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <meta charset="utf-8">
  <title>Demo</title>
  <base href="/DEMO-BUP/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <style>@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v142/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');}.material-icons{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased;}</style>

<link rel="stylesheet" href="./styles-TJUWFZCM.css"></head>
<body><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script>
  <app-root></app-root>

  <script type="text/javascript">
    window.addEventListener('load', function () {
      var script = document.createElement('script');
      script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      script.type = "text/javascript";
  
      script.onload = function () {
        if (window.voiceflow) {
          window.voiceflow.chat.load({
            verify: { projectID: '67477e69d7ac81d695d394f6' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            user: {
              variables: {
                currentURL: window.location.href // Pasa la URL actual al flujo
              }
            }
          });
        } else {
          console.error("Voiceflow script not loaded");
        }
      };
  
      document.body.appendChild(script);
    });
  </script>
  
<link rel="modulepreload" href="./chunk-6MDQTQU3.js"><script src="./polyfills-FFHMD2TL.js" type="module"></script><script src="./main-YAUMHN27.js" type="module"></script></body>
</html>
`;