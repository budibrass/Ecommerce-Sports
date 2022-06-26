//sidebar
var body = document.querySelector('body');
var header = document.querySelector('header');
var sidebar = body.querySelector('nav');
var toggle = header.querySelector('.fa-bars');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});



// //side nav bar
// function openNav() {
//     document.getElementById("mySidenav").style.width = "450px";
//     document.getElementsByTagName("main").style.marginRight = "450px";
// }
  
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementsByTagName("main").style.marginRight= "0";
// }

// //checkbox select all
// function toggle(source) {
//     checkboxes = document.getElementsByName('foo');
//     for(let i=0, n=checkboxes.length; i<n; i++) {
//         checkboxes[i].checked = source.checked;
//     }
// }

// //uploadImage
// function loadFile(event) {
//     const image = document.getElementById('output');
//     image.src = URL.createObjectURL(event.target.files[0]);
// };