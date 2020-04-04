export  function contactUsClick() {
  let modal = document.querySelector('.contactUsModal');
  let close = document.querySelector('.close');
  modal.style.display='flex';
  document.documentElement.style.overflow='hidden';
  close.addEventListener('click',()=>{
    modal.style.display='none';
    document.documentElement.style.overflow='';
  },
  {once:true});
  
  
}