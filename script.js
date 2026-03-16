// Get all HTML elements
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

let submit = document.getElementById("submit");
let back = document.getElementById("back");
let next = document.getElementById("next");
let logo = document.querySelector(".logo");

// Set up game tracking variables
let team = []; 
window.story_key = ""; 
window.story_stage = "start"; 

// 1. Log to console when page loads
window.addEventListener('load', function() {
    console.log("Game loaded!");
});

// 2. Click logic for Card 1
option1.addEventListener('click', function() {
    option1.classList.add('selected');
    option2.classList.remove('selected');
    window.story_key = "1a";
});

// 3. Click logic for Card 2
option2.addEventListener('click', function() {
    option2.classList.add('selected');
    option1.classList.remove('selected');
    window.story_key = "1b";
});

// 4 & 5. Hover effects for Submit button
submit.addEventListener('mouseover', function() {
    submit.style.backgroundColor = "rgba(236, 91, 19, 0.88)";
    submit.style.transform = "translateY(-1px)";
});
submit.addEventListener('mouseout', function() {
    submit.style.backgroundColor = "";
    submit.style.transform = "";
});

// 6 & 7. Hover effects for Back button
back.addEventListener('mouseover', function() {
    back.style.backgroundColor = "rgba(236, 91, 19, 0.08)";
});
back.addEventListener('mouseout', function() {
    back.style.backgroundColor = "";
});

// 8 & 9. Hover effects for Next button
next.addEventListener('mouseover', function() {
    next.style.backgroundColor = "rgba(236, 91, 19, 0.28)";
});
next.addEventListener('mouseout', function() {
    next.style.backgroundColor = "";
});

// 10. Back button reloads page
back.addEventListener('click', function() {
    location.reload(); 
});

// 11. Next button clicks submit
next.addEventListener('click', function() {
    submit.click(); 
});

// 12. Pressing enter clicks submit
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submit.click();
    }
});

// 13 & 14. Hover effects for Logo
logo.addEventListener('mouseover', function() {
    logo.style.transform = "scale(1.05)";
});
logo.addEventListener('mouseout', function() {
    logo.style.transform = "scale(1)";
});

// 15. Easter egg when Logo is clicked
logo.addEventListener('click', function() {
    // Try/catch just for the audio to handle browser restrictions
    try {
        let audio = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');
        audio.play();
    } catch (error) {
        console.log("Audio blocked by browser.");
    }

    // Loop requirement: Adds 3 diamonds to the title
    let secretLoot = "";
    for (let i = 0; i < 3; i++) {
        secretLoot += "💎 ";
    }
    title.innerHTML = "SECRET STASH FOUND: " + secretLoot;
});

// 16. Main Game Logic when Submit is clicked
submit.addEventListener('click', function() {
    // Clear card selections visually
    option2.classList.remove('selected');
    option1.classList.remove('selected');

    if (window.story_stage == "start") {
        if (window.story_key == "1a") {
            plan(); 
            window.story_stage = "plan_selection";
        } else if (window.story_key == "1b") {
            story_image.src = "./images/audition.png";
            title.innerHTML = "Audition Scene";
            p1.innerHTML = "Four candidates show up. You were expecting professionals. You got... this.";
            p2.innerHTML = "A velociraptor in a trench coat. Captain America with a clipboard. Gru adjusting his turtleneck. And Moleman, already halfway underground.";
            p3.innerHTML = "Choose wisely for if you choose wrong and this ends before it begins.";
            blank_text();
            
            setTimeout(function() {
                window.story_stage = "Captain America";
                title.innerHTML = "Choose Your Team: Velociraptor";
                story_image.src = "./images/velociraptor.png";
                p1.innerHTML = "A figure bursts through the door before you even call her name. She's seven feet of muscle, claw, and barely-contained chaos in a trench coat.";
                p2.innerHTML = "She doesn't sit. She just stares at you and tilts her head like she's deciding whether you're worth her time.";
                p3.innerHTML = "Fast enough to outrun a police cruiser. Loyal enough to drag you out when everything goes wrong. Just don't expect her to carry the harp.";
                option1_title.innerHTML = "Sign her on";
                option1_desc.innerHTML = "Velociraptor will be added to your team.";
                option2_title.innerHTML = "Pass";
                option2_desc.innerHTML = "Velociraptor will not be added to your team.";
            }, 10000);
        } else {
            // The else acts as the fallback if no option is selected
            alert("Please select an option before submitting.");
        }
        window.story_key = "";

    } else if (window.story_stage == "Captain America") {
        if (window.story_key == "1a") {
            team.push("Velociraptor"); 
            captain_america();
            window.story_stage = "Gru";
        } else if (window.story_key == "1b") {
            window.story_stage = "Gru";
            captain_america();
        } else {
            alert("Please select an option before submitting.");
        }
        window.story_key = "";
        story_image.src= "./images/captain_america.png";

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
        story_image.src = "./images/gru.png";

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
        story_image.src= "./images/moleman.png";

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
        story_image.src= "./images/planning.png";
        window.story_key = "";

    } else if (window.story_stage == "plan_selection") {
        blank_text();
        if (window.story_key == "1a") {
            title.innerHTML = "PLAN A — Hostage Scenes";
            story_image.src = "./images/hostage.png";
            p1.innerHTML = "You breach the lobby at midnight. Earpiece in, hood up, heart doing something uncomfortable in your chest.";
            p2.innerHTML = "The team fans out without a word. Every guard in the room freezes. For a moment, the whole building holds its breath.";
            p3.innerHTML = "You tell everyone to get down, and if they don't they will be made an example of. The silence is deafening.";
            
            setTimeout(function() {
                if (team.includes("Captain America")) {
                    p1.innerHTML = "Then your earpiece crackles. The frequency is wrong. That's not your channel.";
                    p2.innerHTML = "'This is Rogers. I have their exact location. Sending coordinates now.' Your stomach drops through the floor.";
                    p3.innerHTML = "You look across the room. Steve won't meet your eyes. He already made the call before you even got through the door.";
                }
            }, 10000);

            setTimeout(function() {
                if (team.length === 0) {
                    p1.innerHTML = "A red dot appears on the wall beside your head. You realize too late you are completely surrounded.";
                    p2.innerHTML = "You throw a smoke grenade, banking on the confusion to slip out the back doors alone.";
                    p3.innerHTML = "You make it to the alley, but a patrol car is already waiting. Without a lookout, you walked right into a trap. The solo mission ends in an orange jumpsuit.";
                } else {
                    p1.innerHTML = "A red dot appears on the wall beside your head. Then it moves. Slowly. Deliberately.";
                    p2.innerHTML = "Someone outside has a bead on you through the skylight. You have maybe three seconds before they stop being patient.";
                    p3.innerHTML = "You have no cover left. Whatever happens next happens right now.";
                    
                    if (team.includes("Moleman")) {
                        p1.innerHTML = "All of a sudden the gun fires. You close your eyes and hear the bullet break the glass and hit flesh. You look down to see where you have been hit. But you don't see any blood. You see a pair of eyes staring back at you from the floor.";
                        p2.innerHTML = "It is Moleman. He looks at you, tears in his eyes and says, 'Go Home'";
                        p3.innerHTML = "You ask why but it's too late, he's gone.";
                        
                        setTimeout(function() {
                            if (team.includes("Gru")) {
                                p1.innerHTML = "Gru looks at you and yells in his earpiece, 'I got this! Stay down!' He then presses a button on his turtleneck.";
                                p2.innerHTML = "Hundreds of minions pour through every opening in the building, a chaotic yellow flood that swallows the room whole. Security doesn't know where to look.";
                                p3.innerHTML = " You follow Gru into the herd and disappear inside it. You emerge three blocks away, winded, harpless, but free.";
                            } else if (team.includes("Velociraptor")) {
                                p1.innerHTML = "Velociraptor appears out of nowhere, low to the ground, moving at a speed that shouldn't be legal.";
                                p2.innerHTML = "She doesn't slow down. You grab on and she carries you through a side corridor, through a window, and out before anyone can react.";
                                p3.innerHTML = "You land in an alley two streets over, breathing hard. No harp. But you're out.";
                            } else {
                                p1.innerHTML = "With Moleman gone and no backup left, the security forces breach the room.";
                                p2.innerHTML = "You raise your hands in surrender. You survived the sniper, but you didn't survive the heist.";
                                p3.innerHTML = "Game Over.";
                            }
                        }, 10000);
                    } else {
                        p1.innerHTML = "The gun fires. You close your eyes and wait for the bullet to hit.";
                        p2.innerHTML = "It hits you square in the chest. You feel the impact, and fall to the ground. The marble cold on your face. You open your eyes and see the harp glistening in the sunlight. You reach out to grab it, but your arms won't move.";
                        p3.innerHTML = "We all wish for a good ending in our stories. But sometimes, it doesn't. And yours I am afraid, ends here.";
                    }
                }
            }, 10000);

        } else if (window.story_key == "1b") {
            story_image.src = "./images/intercept.png"
            title.innerHTML = "PLAN B — En Route";
            p1.innerHTML = "3 AM. The armored truck rolls out of the loading bay right on schedule, heavy and slow at first, then picking up speed.";
            p2.innerHTML = "You're already in position. Engines cut. Lights off. The whole team is silent.";
            p3.innerHTML = "The truck passes under the overpass. This is it.";
           
            setTimeout(function() {
                if (team.includes("Captain America")) {
                    p1.innerHTML = "Your radio crackles on a frequency you didn't set. Steve's voice comes through calm and clear, like he's placing a takeout order.";
                    p2.innerHTML = "'This is Rogers. Intercepting party is at the overpass on Route 9. Move in.' You look at him. He's already lowering the radio.";
                    p3.innerHTML = "He meets your eyes for exactly one second, then looks away. That's all you get.";
                    
                    setTimeout(function() {
                        p1.innerHTML = "Roadblock ahead. You hit the brakes. Another one appears in the rearview. Then a third from the side street.";
                        p2.innerHTML = "Blue and red everywhere. They knew exactly where you'd be and exactly when.";
                        p3.innerHTML = "You clock the motorcycle in an attempt to escape.";
                    }, 10000);
                    
                    setTimeout(function() {
                        p1.innerHTML = "A helicopter starts flying beside you and a red dot appears on you.";
                        p2.innerHTML = "You are in the open on the bridge. You have maybe three seconds before they stop being patient.";
                        p3.innerHTML = "You have no cover left. Whatever happens next happens right now.";
                        
                        setTimeout(function() {
                            if (team.includes("Moleman")) {
                                p1.innerHTML = "All of a sudden the gun fires. You close you eyes and hear the bullet fire. But all of a sudden you hear the ground break and hit flesh. You look to your right to see where you have been hit. But you don't see any blood. You see a pair of eyes staring back at you.";
                                p2.innerHTML = "It is Moleman. He looks at you, tears in his eyes and says, 'Go Home'";
                                p3.innerHTML = "You ask why but it too late, he's gone.";
                                setTimeout(function() {
                                    p1.innerHTML = "Debris from Moleman's hole knocks you off your bike and causes you to lose balance.";
                                    p2.innerHTML = "Soon you will be surrounded by cops and taken to jail. They make you put on the orange and you sit in your cell.";
                                    p3.innerHTML = "You stare through the barred window, looking at the sky, dreaming to be free. But for now your journey ends here.";
                                }, 10000);
                            } else {
                                p1.innerHTML = "The bullet fires and you hear it whistle through the air as it hits you.";
                                p2.innerHTML = "The force knocks you off your motorcycle and you tumble on the asphalt. As you tumble the sky gets dimmer and dimmer until it's gone.";
                                p3.innerHTML = "We all wish for a good ending in our stories. But sometimes, it doesn't. And yours I am afraid, ends here.";
                            }
                        }, 10000);
                    }, 10000);

                } else if (team.includes("Moleman")) {
                    setTimeout(function() {
                        p1.innerHTML = "Moleman comes up from the ground intercepting the armored vehicle.";
                        p2.innerHTML = "You go down the hole and break the doors open and see the harp in all of its glory.";
                        p3.innerHTML = "You and your crew go into hiding, each never needing to work ever again.";
                    }, 10000);
                } else if (team.includes("Velociraptor")) {
                    setTimeout(function() {
                        window.story_stage = "velociraptor_chase";
                        title.innerHTML = "High Speed Chase!";
                        story_image.src = "./images/chase.png";
                        p1.innerHTML = "Velociraptor catches up to the armored car at blazing speed! You are riding on her back.";
                        p2.innerHTML = "As she pulls up right behind the speeding transport, you have a split second to make your jump.";
                        p3.innerHTML = "Where do you jump?";
                        
                        blank_text();
                        option1_title.innerHTML = "Jump to Roof";
                        option1_desc.innerHTML = "Higher risk, but direct access to the top hatch.";
                        option2_title.innerHTML = "Jump to Bumper";
                        option2_desc.innerHTML = "Lower jump, grab the back handles.";
                    }, 10000);
                } else if (team.length === 0) {
                    setTimeout(function() {
                        title.innerHTML = "Solo Takedown";
                        p1.innerHTML = "You trigger the remote spike strips. The armored truck's tires blow, and it grinds to a sparking halt.";
                        p2.innerHTML = "You blow the back doors with C4. No team to watch your back, just you, your adrenaline, and a ticking clock.";
                        p3.innerHTML = "You grab the $47 million harp and speed off on your motorcycle just as the sirens wail in the distance. You pulled it off. All by yourself.";
                    }, 10000);
                }
            }, 10000);
        }
    
    } else if (window.story_stage == "velociraptor_chase") {
        if (window.story_key == "1a") {
            story_image.src = "./images/harp_in.png"; 
            title.innerHTML = "The Payload";
            p1.innerHTML = "You leap from the raptor's back, sailing through the air and landing hard on the roof.";
            p2.innerHTML = "You pry open the top hatch and drop in. The guards are too stunned to react.";
            p3.innerHTML = "You secure the diamond encrusted harp and slip away into the night. You are rich!";
            blank_text();
        } else if (window.story_key == "1b") {
            story_image.src = "./images/door_exploding.png"; 
            title.innerHTML = "Rigged!";
            p1.innerHTML = "You jump for the bumper, grabbing the heavy metal handles.";
            p2.innerHTML = "Suddenly, a defense mechanism triggers! A concussive explosive detonates!";
            if (team.includes("Gru")) {
                p3.innerHTML = "You are blown into the air! But suddenly, Gru swoops down in his ship and catches you mid-air! You survive and go home, but the harp is lost.";
            } else {
                p3.innerHTML = "The blast throws you off onto the asphalt at 80mph. Your heist ends here on the highway. Game Over.";
            }
            blank_text();
        } else {
            // The else acts as the fallback if no option is selected
            alert("Please select an option before submitting.");
        }
        window.story_key = "";
    }
});

// Function to wipe out choice text
function blank_text() {
    option1_title.innerHTML = "";
    option1_desc.innerHTML = "";
    option2_title.innerHTML = "";
    option2_desc.innerHTML = "";
}

// Function to load Captain America text
function captain_america() {
    title.innerHTML = "Choose Your Team: Captain America";
    story_image.src = "./images/captain_america.png";
    p1.innerHTML = "Shows up in full uniform, shield strapped to his back, firm handshake.";
    p2.innerHTML = "Upstanding. Principled. The kind of guy who still calls his mom on Sundays";
    p3.innerHTML = "He hasn't stopped smiling since he walked in. It's a little unsettling.";
    option1_title.innerHTML = "Sign him on";
    option1_desc.innerHTML = "Captain America will be added to your team.";
    option2_title.innerHTML = "Pass";
    option2_desc.innerHTML = "Captain America will not be added to your team.";
}

// Function to load Gru text
function gru() {
    title.innerHTML = "Choose Your Team: Gru";
    story_image.src = "./images/gru.png";
    p1.innerHTML = "Arrived fifteen minutes early in a perfectly pressed grey turtleneck.";
    p2.innerHTML = "Slid a laminated three-page résumé across the table without making eye contact.";
    p3.innerHTML = "He has done this before. That much is obvious.";
    option1_title.innerHTML = "Sign him on";
    option1_desc.innerHTML = "Gru will be added to your team.";
    option2_title.innerHTML = "Pass";
    option2_desc.innerHTML = "Gru will not be added to your team.";
}

// Function to load Moleman text
function moleman() {
    title.innerHTML = "Choose Your Team: Moleman";
    story_image.src = "./images/moleman.png";
    p1.innerHTML = "Came up through the floor. Didn't knock.";
    p2.innerHTML = "Brushed the dirt off his shoulders, found a seat, and has been waiting quietly ever since.";
    p3.innerHTML = "Hasn't said a word. Doesn't seem nervous at all.";
    option1_title.innerHTML = "Sign him on";
    option1_desc.innerHTML = "Moleman will be added to your team.";
    option2_title.innerHTML = "Pass";
    option2_desc.innerHTML = "Moleman will not be added to your team.";
}

// Function to load Plan text
function plan() {
    story_image.src = "./images/planning.png";
    title.innerHTML = "Choose a Plan";
    p1.innerHTML = " Intel confirms the harp moves in 48 hours. You spread your notes across the table and stare at the options.";
    p2.innerHTML = "Three windows. Three very different risks.";
    p3.innerHTML = "Pick the wrong one and you're not just broke — you're wearing an orange jumpsuit.";
    option1_title.innerHTML = "Plan A: Hostage";
    option1_desc.innerHTML = "Walk in loud. Hold the room. Use the harp as the bargaining chip to walk out clean.";
    option2_title.innerHTML = " Plan B: En Route";
    option2_desc.innerHTML = "Hit the armored transport mid-transfer before it ever reaches the casino. Fast window, no witnesses.";
    window.story_stage = "plan_selection";
}