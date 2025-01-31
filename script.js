function openTab(event, tabName) {

    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.style.display = 'none');


    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));


    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');



}


document.addEventListener('DOMContentLoaded', function() {

    openTab({ currentTarget: document.querySelector('.tab-button') }, 'Home');
});


