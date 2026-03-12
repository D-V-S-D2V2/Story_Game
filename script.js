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
        blank_text();
        setTimeout(function() {
        window.story_stage = "Captain America";
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
        blank_text();
        if (window.story_key == "1a") {
            title.innerHTML = "PLAN A — Hostage Scenes";
            story_image.src = "NEED TO ADD IMAGE";
            p1.innerHTML = "You breach the lobby at midnight. Earpiece in, hood up, heart doing something uncomfortable in your chest.";
            console.log('stmh')
            p2.innerHTML = "The team fans out without a word. Every guard in the room freezes. For a moment, the whole building holds its breath.";
            p3.innerHTML = "You tell everyone to get down, and if they don't they will be made an example of. The silence is deafening.";
            setTimeout(function() {
                if (team.includes("Captain America")) {
                    p1.innerHTML = "Then your earpiece crackles. The frequency is wrong. That's not your channel.";
                    p2.innerHTML = "'This is Rogers. I have their exact location. Sending coordinates now.' Your stomach drops through the floor.";
                    p3.innerHTML = " You look across the room. Steve won't meet your eyes. He already made the call before you even got through the door.";
            }
            }, 10000);
            console.log('stmh1')
            p1.innerHTML = "The doors burst open. Security floods in from every angle, weapons drawn, moving fast and coordinated.";
            p2.innerHTML = "Shots ring out. Glass shatters. The room becomes a blur of shouting and muzzle flash.";
            p3.innerHTML = "You're pinned behind an overturned display case with nowhere to go and the exits closing fast.";
            setTimeout(function() {
                p1.innerHTML = "A red dot appears on the wall beside your head. Then it moves. Slowly. Deliberately.";
                p2.innerHTML = "Someone outside has a bead on you through the skylight. You have maybe three seconds before they stop being patient.";
                p3.innerHTML = "You have no cover left. Whatever happens next happens right now.";
                if (team.includes("Moleman")) {
                    p1.innerHTML = "All of a sudden the gun fires. You close you eyes andhear the bullet break the glass and hit flesh. You look down to see where you have been hit. But you don't see any blood. You see a pair of eyes staring back at you from the floor.";
                    p2.innerHTML = "It is Moleman. He looks at you, tears in his eyes and says, 'Go Home'";
                    p3.innerHTML = "You ask why but it too late, he's gone.";
                    setTimeout(function() {
                        if (team.includes("Gru")) {
                            p1.innerHTML = "Gru looks at you and yells in his earpiece, 'I got this! Stay down!' He then presses a button on his turtleneck.";
                            p2.innerHTML = "Hundreds of minions pour through every opening in the building, a chaotic yellow flood that swallows the room whole. Security doesn't know where to look.";
                            p3.innerHTML = " You follow Gru into the herd and disappear inside it. You emerge three blocks away, winded, harpless, but free.";
                        } else if (team.includes("Velociraptor")) {
                            p1.innerHTML = "Velociraptor appears out of nowhere, low to the ground, moving at a speed that shouldn't be legal.";
                            p2.innerHTML = "She doesn't slow down. You grab on and she carries you through a side corridor, through a window, and out before anyone can react.";
                            p3.innerHTML = "You land in an alley two streets over, breathing hard. No harp. But you're out.";
                        }
                    }, 10000);
                }
                else {
                    p1.innerHTML = "The gun fires. You close your eyes and wait for the bullet to hit.";
                    p2.innerHTML = "It hits you square in the chest. You feel the impact, and fall to the ground. The marble cold on your face. You open your eyes and see the harp glistining in the sunlight. You reach out to grab it, but your arms won't move. You try to scream, but no sound comes out. You are frozen in place, helpless as the world moves on without you.";
                    p3.innerHTML = "We all wish for a good ending in our stories. But sometimes, it doesn't. And yours I am afraid, ends here.";
                }
    
                }, 10000);
            } else if (window.story_key == "1b") {
            title.innerHTML = "PLAN B — En Route";
            p1.innerHTML = "3 AM. The armored truck rolls out of the loading bay right on schedule, heavy and slow at first, then picking up speed.";
            p2.innerHTML = "You're already in position. Engines cut. Lights off. The whole team is silent."
            p3.innerHTML = "The truck passes under the overpass. This is it.";
           
            setTimeout(function() {
                if (team.includes("Captain America")) {
                    p1.innerHTML = "Your radio crackles on a frequency you didn't set. Steve's voice comes through calm and clear, like he's placing a takeout order.";
                    p2.innerHTML = "'This is Rogers. Intercepting party is at the overpass on Route 9. Move in.' You look at him. He's already lowering the radio.";
                    p3.innerHTML = "He meets your eyes for exactly one second, then looks away. That's all you get.";
                }
            }, 10000);
            p1.innerHTML = "Roadblock ahead. You hit the brakes. Another one appears in the rearview. Then a third from the side street.";
            p2.innerHTML = "Blue and red everywhere. They knew exactly where you'd be and exactly when.";
            p3.innerHTML = "You clock the motorcycle in an attempt to escape.";
            }
        }
            
        
        }
    
);


function blank_text() {
    option1_title.innerHTML = "";
    option1_desc.innerHTML = "";
    option2_title.innerHTML = "";
    option2_desc.innerHTML = "";
    option3_title.innerHTML = "";
    option3_desc.innerHTML = "";
}


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