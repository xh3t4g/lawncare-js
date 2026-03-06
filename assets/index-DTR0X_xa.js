const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DsUyOPzs.css","assets/gallery-CYQmyuUg.css"])))=>i.map(i=>d[i]);
(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const _ of n.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&i(_)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const P="modulepreload",j=function(t){return"/lawncare-js/"+t},m={},g=function(r,o,i){let e=Promise.resolve();if(o&&o.length>0){let f=function(a){return Promise.all(a.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};var _=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),s=l?.nonce||l?.getAttribute("nonce");e=f(o.map(a=>{if(a=j(a),a in m)return;m[a]=!0;const d=a.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":P,d||(c.as="script"),c.crossOrigin="",c.href=a,s&&c.setAttribute("nonce",s),document.head.appendChild(c),d)return new Promise((y,b)=>{c.addEventListener("load",y),c.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${a}`)))})}))}function n(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return e.then(l=>{for(const s of l||[])s.status==="rejected"&&n(s.reason);return r().catch(n)})};function E(){const t=document.querySelector("#goHome"),r=document.querySelector("#goGallery");t&&t.addEventListener("click",()=>v("home")),r&&r.addEventListener("click",()=>v("gallery"))}function O(){return`
        
    <header>
        <div class="header_container">
            <div class="header_text_container">
                <h3>Kavro</h3>

                <span>⋆⋆ все наши работы ⋆⋆</span>
            </div>

            <div class="header_link_kover">
                <nav>  
                    <a href="#" id="goHome">‹ Главное</a>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <section>
            <div id="gallery_list">
            </div>
        </section>
    </main>

    <div class="footer_gradient"></div>
    
    
    <footer>
        <div class="footer_contetnt">
            <span>Kavro © 2026 - Делаем просто</span>
        </div>
        <div class="fog"></div>
    </footer>

    `}function L(){return`

    <header>
        <div class="header_container">
            <div class="header_text_container">
                <div class="Kavro_title_header">
                    <span><h3>K</h3></span>

                    <h3>avro</h3>
                </div>

                <span>Услуги в твоем районе</span>
            </div>

            <div class="header_link_gallery">
                <nav>  
                    <a href="#" id="goGallery">Галерея ›</a>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <section class="section_Our_services">
            <div class="card_container">
                <div class="card_trova">
                    <div class="card_container_title_trova">
                    <h3>🌱 Покос травы</h3></div>

                    <div class="card_container_text_trova">
                        <span>Косим траву</span>
                        <span>Убираем траву</span>
                    </div>

                    <div class="card_container_text_trova">
                        <span>Вывозим мусор</span>
                        <span>Чистим участок</span>
                    </div>

                    <div class="card_container_text_trova">
                        <span>Подравниваение</span>
                        <span>Удаление сорняков</span>
                    </div>
                </div>

                <div class="card_bild">
                    <div class="card_container_title_bild">
                        <h3>🛠 Разнорабочие</h3>
                    </div>
                    
                        <div class="card_container_text_bild">
                          <span>Вывоз хлама</span>  
                          <span>Демонтаж</span>
                        </div>
                        
                        <div class="card_container_text_bild">
                          <span>Сборка и ремонт</span>  
                          <span>Уборка после работ</span>
                        </div>

                        <div class="card_container_text_bild">
                          <span>Перенос и погрузка</span>  
                          <span>Мелкий ремонт</span>
                        </div>
                </div>
            </div>

            <div class="news">
                <a href="https://t.me/cnskfho" class="Telegram" target="_blank" rel="noopener">Написать в Telegram</a>

                <a href="https://wa.me/79931849236" class="WhatsApp" target="_blank" rel="noopener">Написать в WhatsApp</a>
            </div>
        </section>
    </main>

    <div class="footer_gradient"></div>
    
    <footer>
        <div class="footer_contetnt">
            <span>Kavro © 2026 - Делаем просто</span>
        </div>
        <div class="fog"></div>
    </footer>

    `}function S(t){const r=document.querySelector("#gallery_list");r.innerHTML="",t.forEach(o=>{let i=document.createElement("a");i.href=o.img,i.rel="noopener";let e=document.createElement("img");e.src=o.img,e.alt="",i.appendChild(e),r.appendChild(i)})}const p={currentPage:"home"},w="/lawncare-js/assets/1-ubfdrqOD.jpg",T=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),M="/lawncare-js/assets/2-CrAP1hrV.jpg",k=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),q="/lawncare-js/assets/3-NfXDj49L.jpg",x=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),A=Object.entries(Object.assign({"../assets/images/1.jpg":T,"../assets/images/2.jpg":k,"../assets/images/3.jpg":x})).map(([t,r])=>({img:r.default}));function h(){const t=document.querySelector("#app");t.innerHTML="",p.currentPage==="home"&&(t.innerHTML=L(),g(()=>Promise.resolve({}),__vite__mapDeps([0]))),p.currentPage==="gallery"&&(t.innerHTML=O(),g(()=>Promise.resolve({}),__vite__mapDeps([1])),S(A)),E()}function v(t){p.currentPage=t,h()}function H(){v("home"),h()}H();
