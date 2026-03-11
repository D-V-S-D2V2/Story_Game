let story_image = document.getElementById("story_image");
let title = document.getElementById("title");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");


option1.addEventListener('click', function() {
    option1.classList.add('selected');
    option2.classList.remove('selected');
    option3.classList.remove('selected');
});

option2.addEventListener('click', function() {
    option2.classList.add('selected');
    option1.classList.remove('selected');
    option3.classList.remove('selected');
});

option3.addEventListener('click', function() {
    option3.classList.add('selected');
    option2.classList.remove('selected');
    option1.classList.remove('selected');
});