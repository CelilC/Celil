let fabars = document.getElementById('fabars')
let navbttns = document.getElementById('navbttns')

navbttns.style.display='none';
fabars.addEventListener('click', () => {
    if(navbttns.style.display === 'none'){
        navbttns.style.display = 'flex';
        console.log(navbttns.style.display);
    }
    else if(navbttns.style.display === 'flex'){
        navbttns.style.display = 'none';
        console.log(navbttns.style.display);
    }
})