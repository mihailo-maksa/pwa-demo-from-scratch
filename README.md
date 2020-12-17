# Building a PWA From Scratch

### **You'll Need:**

1.) **service-worker.js file** (performs caching, background sync and listens to push notifications, etc.)

2.) **manifest.json file** (contains metadata)

3.) **SSL encryption** on your site (in production environment)

4.) **[Lighthouse Chrome Extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en)**

5.) **Logo image** (.png or .jpg file)

### **PWA Step by Step:**

1.) Install **workbox-cli** and **pwa-asset-generator** CLI tools by running `npm i -g workbox-cli pwa-asset-generator`

2.) Create **index.html file** and these tags to it:

<!-- inside the <head> tag, if you have favicon -->
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> <!-- inside the <head> tag -->
<link rel="manifest" href="manifest.json" /> 
<!-- just before te closing <body> tag -->
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
  }
</script>

3.) Create the **manifest.json file** (icons array is autogenerated by pwa-asset-generator, by running **`npx pwa-asset-generator logo.jpg icons`**)

4.) Create **service-worker.js file**

5.) Serve the app by running **`npx serve`**

6.) Go to **http://localhost:5000** and generate audit in the Lighthouse tab inside Chrome WebTools

7.) **See how your app scores** and analyze what you can improve upon to fully optimize your PWA
