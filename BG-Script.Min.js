function encryptLink(e,t){return CryptoJS.AES.encrypt(e,t).toString()}document.addEventListener("DOMContentLoaded",(function(){if(document.getElementById("blogName").innerText=BlogName,window.location.href.indexOf(BGpageL)>-1&&(document.getElementById(BGwid).style.display="none"),!window.location.href.includes(BGwedDom)){alert("Please purchase the BG-Safelink Script for your Domain, Directly from the owner, Farman Qureshi. Message on WhatsApp at [ +918445031253 ] for more information."),document.getElementById("bgWLoad").style.display="none",document.getElementById("bgWWLoad").style.display="block";var e=document.getElementById("bgLoad");e.style.fontFamily="Georgia",e.style.textAlign="center",e.innerHTML="<h4>Please purchase the BG-Safelink Script for your Domain<br/>Directly from the owner, <span style='color:red;'>Farman Qureshi</span>.<br/>Message on WhatsApp at [ <span style='color:red;'>+918445031253</span> ] for more information</h4><br/><a class='foil-image iftbtn-1 iftbtn-2' href='https://wa.link/uj57hb' style='color:#fff;' target='_blank'>Buy Now</a>";var t=document.getElementById("bgMainBTN1"),n=document.getElementById("bgMainBTN2");t.style.display="none",n.style.display="none"}async function o(){const e=location.protocol+"//"+window.location.hostname+"/feeds/posts/default?alt=rss",t=await fetch(e),n=await t.text(),o=(new DOMParser).parseFromString(n,"application/xml");return Array.from(o.querySelectorAll("item")).map((e=>e.querySelector("link").textContent))}var i=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}("go");i&&(document.getElementById(BGwid).style.display="none",function(){const e=new URL(window.location);e.searchParams.delete("go"),window.history.replaceState({},document.title,e.pathname)}(),async function(e){localStorage.setItem("parameterValue",e);const t=await o();var n=document.getElementById("bgMainBTN1");document.getElementById("bgMainBTN2"),sessionStorage.getItem("currentIndex"),function(){var e=document.getElementById("adBeforeBTN1");e.style.textAlign="center",e.innerHTML=adHBeforeBTN1;var o=document.getElementById("adAfterBTN1");o.style.textAlign="center",o.innerHTML=adHAfterBTN1,function(e,t,n,o){let i=n;e.innerHTML=`<div class='bgBtnCon'><div class='bgHomeBtn foil-image'>${t} (${i})</div></div>`;const a=setInterval((()=>{i-=1,e.innerHTML=`<div class='bgBtnCon'><div class='bgHomeBtn foil-image'>${t} (${i})</div></div>`,i<=0&&(clearInterval(a),o())}),1e3)}(n,"Please Wait...",notRobotTimer,(()=>{n.innerHTML="<div class='bgBtnCon'><div class='bgHomeBtn foil-image' id='robotBtn'>I'm not a robot</div></div>",document.getElementById("robotBtn").addEventListener("click",(()=>{!function(e){let n=sessionStorage.getItem("currentIndex")||0;n=parseInt(n),n<t.length?(sessionStorage.setItem("currentIndex",n+1),sessionStorage.setItem("step","#generate"===e?"1":"2"),window.location.href=t[n]+e):console.error("No more posts available.")}("#generate")}))}))}()}(i)),window.location.href.includes("#generate")&&(document.getElementById(BGwid).style.display="none",async function(){const e=await o();var t=document.getElementById("bgMainBTN1"),n=document.getElementById("bgMainBTN2");function i(e,t,n,o){let i=n;e.innerHTML=`<div class='bgBtnCon'><div class='bgHomeBtn foil-image'>${t} (${i})</div></div>`;const a=setInterval((()=>{i-=1,e.innerHTML=`<div class='bgBtnCon'><div class='bgHomeBtn foil-image'>${t} (${i})</div></div>`,i<=0&&(clearInterval(a),o())}),1e3)}sessionStorage.getItem("currentIndex"),function(){var o=document.getElementById("adBeforeBTN1");o.style.textAlign="center",o.innerHTML=adHBeforeBTN1;var a=document.getElementById("adAfterBTN1");a.style.textAlign="center",a.innerHTML=adHAfterBTN1,i(t,"Please Wait...",generateLinkTimer,(()=>{t.innerHTML="<div class='bgBtnCon'><div class='bgHomeBtn foil-image' id='generateLinkBtn'>Click to generate link</div></div>",document.getElementById("generateLinkBtn").addEventListener("click",(()=>{document.getElementById("bgMainBTN2").scrollIntoView({behavior:"auto"});var t=document.getElementById("adBeforeBTN2");t.style.textAlign="center",t.innerHTML=adHBeforeBTN2;var o=document.getElementById("adAfterBTN2");o.style.textAlign="center",o.innerHTML=adHAfterBTN2,i(n,"Please Wait...",getLinkTimer,(()=>{n.innerHTML="<div class='bgBtnCon'><div class='bgHomeBtn foil-image' id='getLinkBtn'>Get link</div></div>",document.getElementById("getLinkBtn").addEventListener("click",(()=>{!function(t){let n=sessionStorage.getItem("currentIndex")||0;n=parseInt(n),n<e.length?(sessionStorage.setItem("currentIndex",n+1),sessionStorage.setItem("step","#generate"===t?"1":"2"),window.location.href=e[n]+t):console.error("No more posts available.")}("#goto")}))}))}))}))}()}()),window.location.href.includes("#goto")&&(document.getElementById(BGwid).style.display="none",async function(){var e=localStorage.getItem("parameterValue"),t=atob(e),n=CryptoJS.AES.decrypt(t,"852b8e15d245c63eff0f9a53bf87325db43d0218a44948e45b89ab9ce0a43384").toString(CryptoJS.enc.Utf8);await o();var i=document.getElementById("bgMainBTN1"),a=document.getElementById("bgMainBTN2");function l(e,t,n,o){let i=n;e.innerHTML=`<div class='bgBtnCon'><div class='bgHomeBtn foil-image'>${t} (${i})</div></div>`;const a=setInterval((()=>{i-=1,e.innerHTML=`<div class='bgBtnCon'><div class='bgHomeBtn foil-image'>${t} (${i})</div></div>`,i<=0&&(clearInterval(a),o())}),1e3)}sessionStorage.getItem("currentIndex"),function(){var e=document.getElementById("adBeforeBTN1");e.style.textAlign="center",e.innerHTML=adHBeforeBTN1;var t=document.getElementById("adAfterBTN1");t.style.textAlign="center",t.innerHTML=adHAfterBTN1,l(i,"Please Wait...",verifyLinkTimer,(()=>{i.innerHTML="<div class='bgBtnCon'><div class='bgHomeBtn foil-image' id='verifyLinkBtn'>Verify link</div></div>",document.getElementById("verifyLinkBtn").addEventListener("click",(()=>{document.getElementById("bgMainBTN2").scrollIntoView({behavior:"auto"});var e=document.getElementById("adBeforeBTN2");e.style.textAlign="center",e.innerHTML=adHBeforeBTN2;var t=document.getElementById("adAfterBTN2");t.style.textAlign="center",t.innerHTML=adHAfterBTN2,l(a,"Please Wait...",goToLinkTimer,(()=>{a.innerHTML="<div class='bgBtnCon'><div class='bgHomeBtn foil-image' id='goToDownloadLinkBtn'>Go to download link</div></div>",document.getElementById("goToDownloadLinkBtn").addEventListener("click",(()=>{window.location.href=n}))}))}))}))}()}())}));var btnGenerate=document.getElementById("btngenerate");btnGenerate&&btnGenerate.addEventListener("click",(function(){var e=document.getElementById("generateloading"),t=document.getElementById("generatelink"),n=document.getElementById("generateurl").value,o=document.getElementById("resulturl"),i=document.getElementById("inval");if(i.style.display="none",!/^https?:\/\//i.test(n))return o.value="",t.style.display="none",i.style.display="block",void(i.innerHTML="Please enter a URL starting with 'http://' or 'https://'");var a=encryptLink(n,"852b8e15d245c63eff0f9a53bf87325db43d0218a44948e45b89ab9ce0a43384"),l=btoa(a),r=location.protocol+"//"+window.location.hostname+"/?go="+l;o.value="",t.style.display="none",setTimeout((function(){e.style.display="none",t.style.display="block",o.value=r}),1e3),e.style.display="block"}));var copytoclipboard=document.getElementById("copytoclipboard");copytoclipboard&&copytoclipboard.addEventListener("click",(function(){var e=document.getElementById("copytoclipboard"),t=document.getElementById("resulturl").value;navigator.clipboard.writeText("").then((function(){return navigator.clipboard.writeText(t)})).then((function(){e.innerHTML="<span class='fa fa-check'></span> Link Copied to Clipboard",setTimeout((function(){e.innerHTML="<span class='fa fa-floppy-o'></span> Copy URL"}),2e3)})).catch((function(e){console.error("Failed to copy url: ",e)}))}));var widgetClo=document.querySelector(".widget-close");widgetClo&&widgetClo.addEventListener("click",(function(){document.getElementById("bgS").style.display="none";var e=document.getElementById("generateurl"),t=document.getElementById("resulturl");e.value="",t.value="";var n=document.getElementById("generateloading"),o=document.getElementById("generatelink");document.getElementById("inval").style.display="none",n.style.display="none",o.style.display="none"}));var logo=document.getElementById("logo");logo&&logo.addEventListener("click",(function(){document.getElementById("bgS").style.display="flex"}));