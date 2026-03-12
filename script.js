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
let team = [];

window.story_key = "";
window.story_stage = "start";




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
    window.story_key = "1c";
});






window.submit.addEventListener('click', function() {
    option3.classList.remove('selected');
    option2.classList.remove('selected');
    option1.classList.remove('selected');
    if (window.story_stage == "start") {
        if (window.story_key == "1a") {
        plan();
        window.story_stage = "plan_selection";
    } else if (window.story_key == "1b") {
        
        story_image.src = "NEED TO ADD IMAGE";
        title.innerHTML = "Audition Scene";
        p1.innerHTML = "Four candidates show up. You were expecting professionals. You got... this.";
        p2.innerHTML = "A velociraptor in a trench coat. Captain America with a clipboard. Gru adjusting his turtleneck. And Moleman, already halfway underground.";
        p3.innerHTML = "Choose wisely for if you choose wrong and this ends before it begins.";
        option1_title.innerHTML = "";
        option1_desc.innerHTML = "";
        option2_title.innerHTML = "";
        option2_desc.innerHTML = "";
        setTimeout(function() {
        window.story_stage = "Captaion_America";
        title.innerHTML = "Choose Your Team: Velociraptor";
        story_image.src = "NEED TO ADD IMAGE";
        p1.innerHTML = "A figure bursts through the door before you even call her name. She's seven feet of muscle, claw, and barely-contained chaos in a trench coat.";
        p2.innerHTML = "She doesn't sit. She just stares at you and tilts her head like she's deciding whether you're worth her time.";
        p3.innerHTML = "Fast enough to outrun a police cruiser. Loyal enough to drag you out when everything goes wrong. Just don't expect her to carry the harp.";
        option1_title.innerHTML = "Sign her on";
        option1_desc.innerHTML = "Velociraptor will be added to your team.";
        option2_title.innerHTML = "Pass";
        option2_desc.innerHTML = "Velociraptor will not be added to your team.";}, 10000);
    } else {
        alert("Please select an option before submitting.");
    }
    window.story_key = "";
    } else if (window.story_stage == "Captain America") {
        if (window.story_key == "1a") {
        team.push("Velicraptior");
        captain_america();
        window.story_stage = "Gru";
        } else if (window.story_key == "1b") {
        window.story_stage = "Gru";
        captain_america();
    } else {
        alert("Please select an option before submitting.");
    }
    window.story_key = "";
    } else if (window.story_stage == "Gru") {
        if (window.story_key == "1a") {
        team.push("Captain America");
        gru();
        window.story_stage = "Moleman";
        } else if (window.story_key == "1b") {
        window.story_stage = "Moleman";
        gru();
        } else {
        alert("Please select an option before submitting.");
        }
        window.story_key = "";
    } else if (window.story_stage == "Moleman") {
        if (window.story_key == "1a") {
        team.push("Gru");
        moleman();
        window.story_stage = "plan";
        } else if (window.story_key == "1b") {
        window.story_stage = "plan";
        moleman();
    } else {
        alert("Please select an option before submitting.");
    }
    window.story_key = "";
    } else if (window.story_stage == "plan") {
        if (window.story_key == "1a") {
        team.push("Moleman");
        plan();
        window.story_stage = "plan_selection";
        } else if (window.story_key == "1b") {
        plan();
        } else {
        alert("Please select an option before submitting.");
        }
        window.story_key = "";
    } else if (window.story_stage == "plan_selection") {
        if (window.story_key == "1a") {
            title.innerHTML = "PLAN A — Hostage Scenes";
            story_image.src = "NEED TO ADD IMAGE";

            setTimeout(function() {
                if (team.includes("Captain America")) {
                    p1.innerHTML = "Shows up in full uniform, shield strapped to his back, firm handshake.";
                    p2.innerHTML = "Upstanding. Principled. The kind of guy who still calls his mom on Sundays";
                    p3.innerHTML = "He hasn't stopped smiling since he walked in. It's a little unsettling.";
            }
            }, 10000);
            
            
            option1_title.innerHTML = "Sign her on";
            option1_desc.innerHTML = "Captain America will be added to your team.";
            option2_title.innerHTML = "Pass";
            option2_desc.innerHTML = "Captain America will not be added to your team.";
        }
    }
});





function captain_america() {
    title.innerHTML = "Choose Your Team: Captain America";
    story_image.src = "NEED TO ADD IMAGE";
    p1.innerHTML = "Shows up in full uniform, shield strapped to his back, firm handshake.";
    p2.innerHTML = "Upstanding. Principled. The kind of guy who still calls his mom on Sundays";
    p3.innerHTML = "He hasn't stopped smiling since he walked in. It's a little unsettling.";
    option1_title.innerHTML = "Sign her on";
    option1_desc.innerHTML = "Captain America will be added to your team.";
    option2_title.innerHTML = "Pass";
    option2_desc.innerHTML = "Captain America will not be added to your team.";
}

function gru() {
    title.innerHTML = "Choose Your Team: Gru";
    story_image.src = "NEED TO ADD IMAGE";
    p1.innerHTML = "Arrived fifteen minutes early in a perfectly pressed grey turtleneck.";
    p2.innerHTML = "Slid a laminated three-page résumé across the table without making eye contact.";
    p3.innerHTML = "He has done this before. That much is obvious.";
    option1_title.innerHTML = "Sign him on";
    option1_desc.innerHTML = "Gru will be added to your team.";
    option2_title.innerHTML = "Pass";
    option2_desc.innerHTML = "Gru will not be added to your team.";
}

function moleman() {
    title.innerHTML = "Choose Your Team: Moleman";
    story_image.src = "NEED TO ADD IMAGE";
    p1.innerHTML = "Came up through the floor. Didn't knock.";
    p2.innerHTML = "Brushed the dirt off his shoulders, found a seat, and has been waiting quietly ever since.";
    p3.innerHTML = "Hasn't said a word. Doesn't seem nervous at all.";
    option1_title.innerHTML = "Sign him on";
    option1_desc.innerHTML = "Moleman will be added to your team.";
    option2_title.innerHTML = "Pass";
    option2_desc.innerHTML = "Moleman will not be added to your team.";
}

function plan() {
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
    window.story_stage = "plan_selection";
}