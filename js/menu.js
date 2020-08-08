/*function openSideMenu(){
    document.getElementById('side-menu').style.width = '250px';
   
}
function closeSideMenu(){
   document.getElementById('side-menu').style.width = '0';
   event.preventDefault();
}*/

let showMenu = false;
let navicon = document.querySelector('.nav-icon');
const close = document.querySelector('.btn-close');

   


navicon.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
      document.getElementById('side-menu').style.width = '250px';
      
        //Set Menu state
        showMenu = true;
    }else{
      document.getElementById('side-menu').style.width = '0px';
      
        //Set Menu State
        showMenu = false;

    }
}

close.addEventListener("click", () => {
  document.getElementById('side-menu').style.width = '0px';
  
});