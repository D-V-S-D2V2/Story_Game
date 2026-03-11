let story_image = document.getElementById("story_image");
let title = document.getElementById("title");

let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

let option1 = document.getElementById("option1");
let option1_title = document.getElementById("option1_title");
let option1_desc = document.getElementById("option1_desc");

let option2 = document.getElementById("option2");
let option2_title = document.getElementById("option2_title");
let option2_desc = document.getElementById("option2_desc");

let option3 = document.getElementById("option3");
let option3_title = document.getElementById("option3_title");
let option3_desc = document.getElementById("option3_desc");

let option4 = document.getElementById("option4");
let option4_title = document.getElementById("option4_title");
let option4_desc = document.getElementById("option4_desc");

let submit = document.getElementById("submit");
let back = document.getElementById("back");
let next = document.getElementById("next");

window.story_key = "";

option1.addEventListener('click', function() {
    option1.classList.add('selected');
    option2.classList.remove('selected');
    option3.classList.remove('selected');
    window.story_key = "1a";
});

option2.addEventListener('click', function() {
    option2.classList.add('selected');
    option1.classList.remove('selected');
    option3.classList.remove('selected');
    window.story_key = "1b";
});

option3.addEventListener('click', function() {
    option3.classList.add('selected');
    option2.classList.remove('selected');
    option1.classList.remove('selected');
    window.story_key = "1b";
});

submit.addEventListener('click', function() {
    
    if (window.story_key == "1a") {
        submit.id="submit1";
        story_image.src = "NEED TO ADD IMAGE";
        title.innerHTML = "Choose a Plan";
        p1.innerHTML = " Intel confirms the harp moves in 48 hours. You spread your notes across the table and stare at the options.";
        p2.innerHTML = "Three windows. Three very different risks.";
        p3.innerHTML = "Pick the wrong one and you're not just broke — you're wearing an orange jumpsuit.";
        option1_title.innerHTML = "Plan A: Hostage";
        option1_desc.innerHTML = "Walk in loud. Hold the room. Use the harp as the bargaining chip to walk out clean.";
        option2_title.innerHTML = " Plan B: En Route";
        option2_desc.innerHTML = "Hit the armored transport mid-transfer before it ever reaches the casino. Fast window, no witnesses.";
        option3_title.innerHTML = "Plan C: Casino Job";
        option3_desc.innerHTML = "Let them set it up, let them get comfortable. Then take it right out from under their noses during the gala.";
    } else if (window.story_key == "1b") {
        submit.id="submit2";
        story_image.src = "NEED TO ADD IMAGE";
        title.innerHTML = "Audition Scene";
        p1.innerHTML = "Four candidates show up. You were expecting professionals. You got... this.";
        p2.innerHTML = "A velociraptor in a trench coat. Captain America with a clipboard. Gru adjusting his turtleneck. And Moleman, already halfway underground.";
        p3.innerHTML = "You can take up to three. Choose wrong and this ends before it begins.";
    } else {
        alert("Please select an option before submitting.");
    }
    if (window.story_key == "1b") {
        alert("You will now decide which team members you want to take.");
        title.innerHTML = "Choose Your Team: Velociraptor";
        story_image.src = "NEED TO ADD IMAGE";
        p1.innerHTML = "A figure bursts through the door before you even call her name. She's seven feet of muscle, claw, and barely-contained chaos in a trench coat.";
        p2.innerHTML = "She doesn't sit. She just stares at you and tilts her head like she's deciding whether you're worth her time.";
        p3.innerHTML = "Fast enough to outrun a police cruiser. Loyal enough to drag you out when everything goes wrong. Just don't expect her to carry the harp.";
        option1_title.innerHTML = "Sign him on";
        option1_desc.innerHTML = "Velociraptor will be added to your team.";
        option2_title.innerHTML = "Pass";
        option2_desc.innerHTML = "Velociraptor will not be added to your team.";
    }
    window.story_key = "";
});

submit1.addEventListener('click', function() {

});

submit2.addEventListener('click', function() {
    if (window.story_key == "1b") {}
});
