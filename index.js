const shareBtn = document.getElementById('share-btn');
const shareBtnDark = document.getElementById('share-btn-dark');
const profile = document.querySelector('.author-info');
const shareContainer = document.querySelector('.share-container');
const tooltip = document.querySelector('.tooltip');

shareBtn.addEventListener('click',()=>{
    shareBtn.classList.toggle('active-btn');
    tooltip.classList.toggle('active');
    shareContainer.classList.toggle('active'); 
    profile.classList.add('hidden');  
});
 shareBtnDark.addEventListener('click',()=>{
    shareContainer.classList.remove('active');
    profile.classList.remove('hidden');
 })