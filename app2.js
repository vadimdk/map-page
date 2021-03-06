function toggleClass(elem, className) {
    if (elem.className.indexOf(className) !== -1) {
        elem.className = elem.className.replace(className, '');
    }
    else {
        elem.className = elem.className.replace(/\s+/g, ' ') + ' ' + className;
    }

    return elem;
}

function toggleDisplay(elem) {
    const curDisplayStyle = elem.style.display;

    if (curDisplayStyle === 'none' || curDisplayStyle === '') {
        elem.style.display = 'block';
    }
    else {
        elem.style.display = 'none';
    }
}


function toggleMenuDisplaySec(e) {
    const dropdown = e.currentTarget.parentNode;
    const menu = dropdown.querySelector('.menu2');
    const icon = dropdown.querySelector( '.fa-angle-right2');

    toggleClass(menu,  'hide2');
    toggleClass(icon, 'rotate-90');
}


function handleOptionSelected(e) {
    toggleClass(e.target.parentNode, 'hide2');

    const id = e.target.id;
    const newValue = e.target.textContent + ' ';
    const titleElem = document.querySelector( '.dropdown2 .title2');
    const icon = document.querySelector('.dropdown2 .title2 .fa');


    titleElem.textContent = newValue;
    titleElem.appendChild(icon);

    //trigger custom event
    document.querySelector('.dropdown2 .title2').dispatchEvent(new Event('change'));
    //setTimeout is used so transition is properly shown
    setTimeout(() => toggleClass(icon, 'rotate-90', 0));
}

function handleTitleChange(e) {
    const result = document.getElementById('result');

    // result.innerHTML = 'The result is: ' + e.target.textContent;
}

//get elements
const dropdownTitleSec = document.querySelector('.dropdown2 .title2');
const dropdownOptionsSec = document.querySelectorAll('.dropdown2 .option2');

//bind listeners to these elements
dropdownTitleSec.addEventListener('click', toggleMenuDisplaySec);

dropdownOptionsSec.forEach(option => option.addEventListener('click', handleOptionSelected));

document.querySelector('.dropdown2 .title2').addEventListener('change', handleTitleChange);