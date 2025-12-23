
const $ = (sel, root=document)=>root.querySelector(sel);
const $$ = (sel, root=document)=>Array.from(root.querySelectorAll(sel));

function formatTRY(val){
  try{
    return new Intl.NumberFormat('tr-TR', {style:'currency', currency:'TRY'}).format(val);
  }catch(e){
    return val + " TL";
  }
}

async function loadJSON(path){
  const res = await fetch(path, {cache:'no-store'});
  if(!res.ok) throw new Error("JSON yüklenemedi: " + path);
  return await res.json();
}

function setYear(){
  const el = $("#year");
  if(el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", setYear);
