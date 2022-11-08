(() => {
    'use strict'

    document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    });
    let serviceDropdownOpen = false;
    document.querySelector('#service-toggle a').addEventListener('mouseover', () => {
        serviceDropdownOpen = true;
        document.querySelector('#service-toggle a').classList.add('show');
        document.querySelector('#service-toggle .dropdown-menu').classList.add('show');
    })
    document.querySelector('#service-toggle .dropdown-menu').addEventListener('mouseover', () => {
        serviceDropdownOpen = true;
    })
    document.querySelector('#service-toggle').addEventListener('mouseout', () => {
        serviceDropdownOpen = false;
        setTimeout(()=>{
            if (!serviceDropdownOpen) {
                document.querySelector('#service-toggle a').classList.remove('show');
                document.querySelector('#service-toggle .dropdown-menu').classList.remove('show');
            }
        }, 1000);
    });
})()