import{S as m,i as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function d(t){const s="https://pixabay.com/api/",r=new URLSearchParams({key:"44446201-9b14f5dc8dce792ad0a579f9d",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${s}?${r}`;return fetch(i).then(e=>e.json())}const h="/vanilla-app-template/assets/bi_x-octagon-06de2d57.svg";function p(t){return`<li class="gallery-item">
      <a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}" class="gallery-item-image"></a>
        <ul class="image-info-list">
          <li class="list-item">
            <h3>Likes</h3>
            <p class="likes-js">${t.likes}</p>
          </li>
          <li class="list-item">
            <h3>Views</h3>
            <p class="views-js">${t.views}</p>
          </li>
          <li class="list-item">
            <h3>Comments</h3>
            <p class="comments-js">${t.comments}</p>
          </li>
          <li class="list-item">
            <h3>Downloads</h3>
            <p class="downloads-js">${t.downloads}</p>
          </li>
        </ul>
    </li>`}function f(t){return t.map(s=>p(s)).join("")}const a=document.querySelector(".loader");function g(){a.classList.remove("visually-hidden")}function y(){a.classList.add("visually-hidden")}const L={message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#EF4040",iconUrl:h,position:"topRight",maxWidth:"360px",theme:"dark"},c=document.querySelector(".search-form"),n=document.querySelector(".gallery"),w=new m(".gallery a",{captionsData:"alt",captionsDelay:250});c.addEventListener("submit",v);function v(t){t.preventDefault(),n.innerHTML="",g(),d(c.elements.search.value.trim()).then(s=>{s.hits.length==0&&u.show(L);const r=f(s.hits);n.innerHTML=r,w.refresh()}).catch(s=>console.log(s)).finally(()=>{y()})}
//# sourceMappingURL=commonHelpers.js.map
