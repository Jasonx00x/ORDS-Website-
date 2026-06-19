
const menu=document.querySelector('.menu-btn');
const links=document.querySelector('.links');
if(menu){menu.addEventListener('click',()=>{links.classList.toggle('open');menu.setAttribute('aria-expanded',links.classList.contains('open')?'true':'false')})}
const reveal=()=>{document.querySelectorAll('.reveal').forEach((el,i)=>{const r=el.getBoundingClientRect();if(r.top<window.innerHeight-85){setTimeout(()=>el.classList.add('visible'),Math.min(i*36,260))}})};
reveal();window.addEventListener('scroll',reveal,{passive:true});
const audioVideos=[...document.querySelectorAll('.video-audio')];
document.querySelectorAll('.unmute-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const wrap=btn.closest('.video-embed,.phone-video,.clean-phone-video');
    const video=wrap?.querySelector('video');
    if(!video)return;
    const turningOn=video.muted || video.volume===0;
    audioVideos.forEach(item=>{
      if(item!==video){
        item.muted=true;
        item.volume=0;
        item.controls=true;
        item.closest('.video-embed,.phone-video,.clean-phone-video')?.querySelector('.unmute-btn')?.classList.remove('sound-on');
        const otherBtn=item.closest('.video-embed,.phone-video,.clean-phone-video')?.querySelector('.unmute-btn');
        if(otherBtn)otherBtn.textContent='Tap sound';
      }
    });
    video.muted=!turningOn;
    video.volume=turningOn?1:0;
    video.controls=true;
    if(turningOn){
      video.play().catch(()=>{});
      setTimeout(()=>video.paused&&video.play().catch(()=>{}),80);
    }
    btn.classList.toggle('sound-on',turningOn);
    btn.textContent=turningOn?'Sound on':'Tap sound';
  });
});
const checkoutBtns=document.querySelectorAll('[data-add]');
const merchCards=[...document.querySelectorAll('.merch-card')];
const itemSelect=document.querySelector('#merchItemSelect');
const sizeSelect=document.querySelector('#merchSizeSelect');
const preferenceInput=document.querySelector('#merchPreferenceInput');
const quantityInput=document.querySelector('#merchQuantity');
const checkoutItem=document.querySelector('#checkout-item');
const checkoutPrice=document.querySelector('#checkout-price');
const checkoutItemInput=document.querySelector('#checkoutItemInput');
const checkoutColorInput=document.querySelector('#checkoutColorInput');
const checkoutTotalInput=document.querySelector('#checkoutTotalInput');
const checkoutItemsInput=document.querySelector('#checkoutItemsInput');
const requestList=document.querySelector('#requestList');
const addLineBtn=document.querySelector('.merch-add-line');
const customSelects=[...document.querySelectorAll('.custom-select')];
const merchProducts=merchCards.map(card=>({
  id:card.dataset.productId,
  name:card.dataset.productName,
  price:Number(card.dataset.productPrice||0),
  priceLabel:card.dataset.productPriceLabel||'Request price',
  sizes:(card.dataset.productSizes||'').split('|').filter(Boolean),
  variants:JSON.parse(card.dataset.productVariants||'[]')
}));
const requestItems=[];
function customSelectByTarget(id){return customSelects.find(select=>select.dataset.target===id)}
function setCustomSelectValue(id,value,label=value){
  const input=document.querySelector(`#${id}`);
  const select=customSelectByTarget(id);
  if(input)input.value=value||'';
  if(select){
    const text=select.querySelector('.custom-select-trigger span');
    if(text)text.textContent=label||select.dataset.placeholder||'Choose option';
    select.querySelectorAll('.custom-option').forEach(option=>option.classList.toggle('selected',option.dataset.value===value));
    select.classList.toggle('invalid',false);
  }
}
function setSizeOptions(product,current=''){
  const sizeControl=document.querySelector('#merchSizeControl .custom-options');
  if(!sizeControl)return;
  sizeControl.innerHTML=product.sizes.map(size=>`<button type="button" class="custom-option" data-value="${size}"><span>${size}</span></button>`).join('');
  const next=product.sizes.includes(current)?current:'';
  setCustomSelectValue('merchSizeSelect',next,next||'Choose size');
}
function mediaMarkup(product,media){
  if(media?.type==='video')return `<video class="merch-main-media" autoplay loop muted defaultMuted playsinline preload="none" poster="${media.poster||product.variants?.[0]?.media?.[0]?.src||''}"><source src="${media.src}" type="video/mp4"></video>`;
  return `<img class="merch-main-media gallery-main" src="${media?.src||''}" alt="${product.name}" loading="lazy" decoding="async">`;
}
function silenceMerchVideo(video){
  if(!video)return;
  video.defaultMuted=true;
  video.muted=true;
  video.volume=0;
  video.removeAttribute('controls');
}
function renderMediaRail(card,product,variant,activeIndex=0){
  const rail=card.querySelector('.media-rail');
  if(!rail)return;
  rail.innerHTML=(variant.media||[]).map((media,index)=>`<button class="media-thumb${media.type==='video'?' video-thumb':''}${index===activeIndex?' active':''}" type="button" data-media-index="${index}" aria-label="${media.type==='video'?'View product video':`View product photo ${index+1}`}">${media.type==='video'?'<span class="media-play">Video</span>':`<img src="${media.src}" alt="" loading="lazy" decoding="async">`}</button>`).join('');
}
function setCardVariant(card,variantName,mediaIndex=0){
  const product=merchProducts.find(item=>item.id===card.dataset.productId);
  if(!product)return;
  const variant=product.variants.find(item=>item.name===variantName)||product.variants[0];
  const media=variant.media?.[mediaIndex]||variant.media?.[0];
  const frame=card.querySelector('.gallery-frame');
  const stock=frame?.querySelector('.stock-pill');
  if(frame){
    frame.innerHTML=mediaMarkup(product,media);
    silenceMerchVideo(frame.querySelector('video'));
    if(stock)frame.appendChild(stock);
  }
  card.dataset.selectedVariant=variant.name;
  card.querySelectorAll('.variant-swatch').forEach(btn=>btn.classList.toggle('active',btn.dataset.variant===variant.name));
  renderMediaRail(card,product,variant,mediaIndex);
}
function setMerchProduct(product){
  if(!product)return;
  const card=merchCards.find(item=>item.dataset.productId===product.id);
  const rawVariant=card?.dataset.selectedVariant || product.variants?.[0]?.name || '';
  const variantName=rawVariant&&rawVariant!=='Default'?rawVariant:'';
  const qty=Math.max(1,Number(quantityInput?.value||1));
  const hasPrice=product.price>0;
  const total=product.price*qty;
  if(checkoutItem)checkoutItem.textContent=variantName?`${product.name} / ${variantName}`:product.name;
  if(checkoutPrice)checkoutPrice.textContent=hasPrice?`$${total}`:'Request';
  if(checkoutItemInput)checkoutItemInput.value=`${product.name}${variantName?` - ${variantName}`:''} - ${product.priceLabel}`;
  if(checkoutColorInput)checkoutColorInput.value=variantName;
  if(checkoutTotalInput)checkoutTotalInput.value=hasPrice?`$${total}`:'Request price with ORDS';
  setCustomSelectValue('merchItemSelect',`${product.name} - ${product.priceLabel}`,product.name);
  setSizeOptions(product,sizeSelect?.value||product.sizes[0]||'');
  merchCards.forEach(card=>card.classList.toggle('selected',card.dataset.productId===product.id));
}
function formatRequestItem(item){
  const color=item.variant?` / ${item.variant}`:'';
  const size=item.size?` / ${item.size}`:'';
  return `${item.name}${color}${size} x${item.quantity} - ${item.totalLabel}`;
}
function syncRequestItems(){
  if(checkoutItemsInput)checkoutItemsInput.value=requestItems.map(formatRequestItem).join('\n');
  const priced=requestItems.filter(item=>item.price>0);
  const total=priced.reduce((sum,item)=>sum+(item.price*item.quantity),0);
  const hasRequest=requestItems.some(item=>!item.price);
  if(checkoutPrice)checkoutPrice.textContent=requestItems.length?(hasRequest?'Request':`$${total}`):'$0';
  if(checkoutTotalInput)checkoutTotalInput.value=requestItems.length?(hasRequest?`Request price with ORDS${priced.length?` / $${total} known items`:''}`:`$${total}`):'';
  if(!requestList)return;
  if(!requestItems.length){
    requestList.innerHTML='<span>No items added yet.</span>';
    return;
  }
  requestList.innerHTML=requestItems.map((item,index)=>`<div class="request-item"><div><strong>${item.name}</strong><span>${[item.variant,item.size,`Qty ${item.quantity}`].filter(Boolean).join(' / ')}</span></div><b>${item.totalLabel}</b><button type="button" data-remove-item="${index}" aria-label="Remove ${item.name}">Remove</button></div>`).join('');
}
function addCurrentRequestItem(){
  const product=merchProducts.find(item=>`${item.name} - ${item.priceLabel}`===itemSelect?.value);
  if(!product){
    customSelectByTarget('merchItemSelect')?.classList.add('invalid');
    return false;
  }
  const card=merchCards.find(item=>item.dataset.productId===product.id);
  const rawVariant=card?.dataset.selectedVariant || product.variants?.[0]?.name || '';
  const variant=rawVariant&&rawVariant!=='Default'?rawVariant:'';
  const size=sizeSelect?.value || product.sizes[0] || '';
  const quantity=Math.max(1,Number(quantityInput?.value||1));
  const price=product.price||0;
  const totalLabel=price?`$${price*quantity}`:'Request price';
  const existing=requestItems.find(item=>item.id===product.id&&item.variant===variant&&item.size===size);
  if(existing){
    existing.quantity+=quantity;
    existing.totalLabel=existing.price?`$${existing.price*existing.quantity}`:'Request price';
  }else{
    requestItems.push({id:product.id,name:product.name,variant,size,quantity,price,totalLabel});
  }
  syncRequestItems();
  return true;
}
document.querySelectorAll('.merch-card video').forEach(silenceMerchVideo);
checkoutBtns.forEach(btn=>btn.addEventListener('click',()=>{
  const id=btn.dataset.productId;
  const product=merchProducts.find(item=>item.id===id) || merchProducts.find(item=>`${item.name} - ${item.priceLabel}`===btn.getAttribute('data-add'));
  setMerchProduct(product);
  document.querySelector('#checkout')?.scrollIntoView({behavior:'smooth',block:'start'});
}));
itemSelect?.addEventListener('change',()=>{
  const product=merchProducts.find(item=>`${item.name} - ${item.priceLabel}`===itemSelect.value);
  setMerchProduct(product);
});
quantityInput?.addEventListener('input',()=>{
  const product=merchProducts.find(item=>`${item.name} - ${item.priceLabel}`===itemSelect?.value) || merchProducts.find(item=>item.name===checkoutItem?.textContent);
  setMerchProduct(product);
});
addLineBtn?.addEventListener('click',()=>{
  if(addCurrentRequestItem())addLineBtn.textContent='Added';
  setTimeout(()=>{if(addLineBtn)addLineBtn.textContent='Add Item To Request'},900);
});
requestList?.addEventListener('click',event=>{
  const remove=event.target.closest('[data-remove-item]');
  if(!remove)return;
  requestItems.splice(Number(remove.dataset.removeItem),1);
  syncRequestItems();
});
customSelects.forEach(select=>{
  const trigger=select.querySelector('.custom-select-trigger');
  trigger?.addEventListener('click',()=>{
    customSelects.forEach(other=>{if(other!==select)other.classList.remove('open')});
    select.classList.toggle('open');
  });
  select.addEventListener('click',event=>{
    const option=event.target.closest('.custom-option');
    if(!option)return;
    const value=option.dataset.value;
    const label=option.querySelector('span')?.textContent||value;
    setCustomSelectValue(select.dataset.target,value,label);
    select.classList.remove('open');
    if(select.dataset.target==='merchItemSelect'){
      const product=merchProducts.find(item=>`${item.name} - ${item.priceLabel}`===value);
      setMerchProduct(product);
    }
  });
});
merchCards.forEach(card=>{
  const product=merchProducts.find(item=>item.id===card.dataset.productId);
  if(product?.variants?.length)setCardVariant(card,product.variants[0].name,0);
  card.addEventListener('click',event=>{
    const swatch=event.target.closest('.variant-swatch');
    const thumb=event.target.closest('.media-thumb');
    if(swatch){
      setCardVariant(card,swatch.dataset.variant,0);
      if(card.classList.contains('selected'))setMerchProduct(product);
    }
    if(thumb){
      const variantName=card.dataset.selectedVariant||product.variants[0].name;
      setCardVariant(card,variantName,Number(thumb.dataset.mediaIndex||0));
    }
  });
});
document.addEventListener('click',event=>{
  if(!event.target.closest('.custom-select'))customSelects.forEach(select=>select.classList.remove('open'));
});
document.querySelector('form[name="merch-request"]')?.addEventListener('submit',event=>{
  if(!requestItems.length&&itemSelect?.value)addCurrentRequestItem();
  const required=['checkoutItemsInput','merchPreferenceInput'];
  const missing=required.filter(id=>!document.querySelector(`#${id}`)?.value);
  customSelects.forEach(select=>select.classList.toggle('invalid',missing.includes(select.dataset.target)));
  if(missing.includes('checkoutItemsInput'))requestList?.classList.add('invalid');
  else requestList?.classList.remove('invalid');
  if(missing.length){
    event.preventDefault();
    (customSelectByTarget(missing[0])||requestList)?.scrollIntoView({behavior:'smooth',block:'center'});
  }
});

document.querySelector('form[name="consultation"]')?.addEventListener('submit',event=>{
  const timeInput=document.querySelector('#consultationTimeInput');
  const timeSelect=customSelectByTarget('consultationTimeInput');
  if(!timeInput?.value){
    event.preventDefault();
    timeSelect?.classList.add('invalid');
    timeSelect?.scrollIntoView({behavior:'smooth',block:'center'});
  }
});


// v8 consultation flow
const flowState={instrument:'',level:'',goal:''};
const flowSteps=[...document.querySelectorAll('.flow-step')];
const progressSteps=[...document.querySelectorAll('.progress-step')];
function setFlowStep(n){
  flowSteps.forEach(s=>s.classList.toggle('active',Number(s.dataset.step)===n));
  progressSteps.forEach(s=>s.classList.toggle('active',Number(s.dataset.step)===n));
  const top=document.querySelector('.consult-flow'); if(top) top.scrollIntoView({behavior:'smooth',block:'start'});
}
document.querySelectorAll('[data-flow-choice]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const group=btn.dataset.group; flowState[group]=btn.dataset.value;
    const hidden=document.querySelector(`#flow${group.charAt(0).toUpperCase()+group.slice(1)}`);
    if(hidden) hidden.value=btn.dataset.value;
    document.querySelectorAll(`[data-group="${group}"]`).forEach(b=>b.classList.remove('selected'));
    btn.classList.add('selected');
    const next=Number(btn.closest('.flow-step')?.dataset.step||1)+1;
    setFlowStep(next);
    const sum=document.querySelector('#flowSummary');
    if(sum) sum.textContent=`Interest: ${flowState.instrument||'Not selected'} • Level: ${flowState.level||'Not selected'} • Goal: ${flowState.goal||'Not selected'}`;
  });
});
document.querySelectorAll('[data-flow-next]').forEach(btn=>btn.addEventListener('click',()=>setFlowStep(Number(btn.dataset.flowNext))));
document.querySelectorAll('[data-flow-back]').forEach(btn=>btn.addEventListener('click',()=>setFlowStep(Number(btn.dataset.flowBack))));

// v11 hoodie gallery controls
(function(){
  document.querySelectorAll('.product-gallery').forEach(card=>{
    const main=card.querySelector('.gallery-main');
    const thumbs=[...card.querySelectorAll('.thumb')];
    const rotate=card.querySelector('.gallery-arrow');
    let index=0;
    const show=(i)=>{index=i; const src=thumbs[index].dataset.img; main.style.opacity=.35; setTimeout(()=>{main.src=src; main.style.opacity=1;},120); thumbs.forEach((t,n)=>t.classList.toggle('active',n===index));};
    thumbs.forEach((btn,i)=>btn.addEventListener('click',()=>show(i)));
    rotate?.addEventListener('click',()=>show((index+1)%thumbs.length));
    main?.addEventListener('click',()=>show((index+1)%thumbs.length));
  });
})();
