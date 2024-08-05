function toggleMenu(){
    menu = document.getElementById('menu');
    console.log(menu.classList);
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    }else{
        menu.classList.add('hidden') 
    }
    

}




