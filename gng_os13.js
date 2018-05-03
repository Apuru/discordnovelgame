// read the randomized names
const fs = require("fs");
var name = JSON.parse(fs.readFileSync('randomized_names.json'));

exports.test = {
1 : `%dreamer.mp3`,
2 : `He draws his revolver and fires.`,
3 : `1`,
4 : `2`,
5 : `3`,
6 : `%F_PIST3_3_fixed.mp3`,
7 : `5`,
8 : `6`,
9 : `7`
};

exports.testvote2 = {
"1" : `Test 1`,
"2" : `Test 2`
};

exports.test2 =
[`123`
,`456`
,`%dreamer.mp3`
,`789`
,`^^^End of Section^^^`
];

exports.chartest =
[`Testing character name deployment.`
,`${name.baronfullName}`
,`${name.baronessfullName}`
,`${name.baronessfirstName}`
,`${name.baronlastName}`
,`^^^End of Section^^^`
];

exports.votetest = {
"inn" : `Send him to patrol the Inn.`,
"sanctuary" : `Send him to patrol the Sanctuary.`,
"church" : `Send him to patrol the Church.`,
"streets" : `Send him to patrol the Streets.`
};

exports.storageitems = {
"Repair" : `Repair Toolbox`,
"Hacking" : `Hacking Kit`
};

exports.introshort =
[`Intro goes here`
,`^^^End of Section^^^`
];

exports.testcontent =
[`Text goes here`
,`^^^End of Section^^^`
];

exports.template_template =
[``
,``
,`^^^End of Section^^^`
];

exports.true_end3 =
[`Lakamaka wakes up in a cyber specialist chair. He instinctively grips his stun rifle which is somehow still strung across his back. `
,`The side effects of cyber decking start hitting him. He had heard of this from the station’s cyberdeck specialist but had never prepared for it.`
,`@6000`
,`>Angel Beats! OST- Abyss.mp3`
,`Questions race through his mind as he tries to figure out what happened.`
,`What was his name again? `
,`What was he doing here? `
,`What just happened?`
,`@3000`
,`He remembers... A woman. A name. Ezra. Friend.`
,`@3000`
,`He remembers men... Boarders. Enemies.`
,`@3000`
,`They are boarding right now!`
,`@3000`
,`But... The airlock.`
,`@3000`
,`He remembers that the threat is gone.`
,`@3000`
,`The threat is gone but his hand won’t let go of the weapon. His finger moves back to the trigger on its own, and slowly his body turns towards the AI core.`
,`Time seems to slow down, but his mind is racing. He remembers why he woke so early. `
,`He remembers... The Traitor.`
,`Suddenly, he knows what The Traitor did to him; he knows what he’s done-`
,`and he knows what he’s about to do before the implant commands it.`
,`@5000`
,`“The AI would just get in the way,” he hears the words like he’d heard them the first time but now they sound cold, like ice water running in his veins. `
,`“Wake up early and destroy the AI. Don't let the others know.”`
,`@7000`
,`This is the reason. `
,`Why he’s awoken early. `
,`He flinches when his hand tightens around the gun, terror consuming him as full realization comes to him.`
,`Ezra is watching, her eyes wide and hands outstretched to stop him but she seems frozen. She cannot touch him and her Droids won't arrive in time to restrain him. `
,`He remembers not so long ago when she could touch him… in cyberspace. If she’d known then would she have used that touch to simply caress his cheek? Or would she have struck him down to prevent him doing what he must do now. `
,`He resists. With every fibre of his being he resists that cold, calculated order that he is compelled to carry out. `
,`@5000`
,`No... It mustn’t happen. I won’t do this. I can’t do this! Not to the station. Not to the crew. Not to her! `
,`There’s no use. Waves of pain scythe through his body. It’s blinding, burning agony. It’s a death sentence. There is only one way to stop the pain. His mind and body strain against the implant but there’s no overpowering it. `
,`His finger squeezes the trigger.`
,`%Explosion1.ogg`
,`The blast is deafening. Pieces of the core explode everywhere, and distantly Lakamaka hears Ezra scream; a feminine human voice that morphs into the shrill screech of electronics, then, abruptly ceases. `
,`%Heavy_Cruiser_Princess_Broken_Form_Damaged.ogg`
,`Out of the corner of his eye, she disappears.`
,`The stun rifle hits the ground with a heavy clatter.`
,`Lakamaka stumbles back from the smoking core, unaware of the hiss of fire suppression smoke that spews out of the vents overhead. He spins on his heel, and races to the cryo room. `
,`Numb shock gives way to horror. Nausea is bubbling up in his throat.  He collapses in front of the first pod he sees- a close friend ${name.baronfullName}, Research Director. `
,`Lakamaka heaves as memories flash through his mind; memories of lies, sabotaged missions and botched results.`
,`He remembers Ezra. He feels a brief moment of respite as he remembers her hologrammic image. Then a primal scream rips from his throat as he realizes what he’s done; past and present. `
,`But no one hears him.`
,`He screams and screams remembering all the terrible things that the Traitor made him do. He screams for all the lies he’s had to tell. All the things he’s had to steal for that... That fucker. `
,`A wave of pain surges through his body and he screams no more. It anchors his mind back to reality. `
,`He has returned. A broken man. A shadow of the man once known as Lakamaka Breygolds. `
,`He lies on the ground in a fetal position and remains there for some time. When he finally staggers to his feet, he’s unaware of how long he’s been lying on the hard floor. It seems like days but it was likely only hours. `
,`In a fugue state, Lakamaka wanders the silent station until he stumbles upon a pad and pen. Exhausted and heartsick he writes what he hopes will explain his actions. What he hopes will be his last goodbye… what he hopes will convey the deep, irreparable regret left in his heart…`
,`Tears streak down his cheeks blurring his vision but he starts writing anyway.`
,`@6000`
,`Dear Friends. It was a great honour (and fun) working with you all, and I’ll remember our days together as the best in my whole life.`
,`Still, I must leave, for there is treason among us.`
,`Though I truly thought about us as a space family, one of the crew members has made me do things I couldn’t forgive myself.`
,`Every time, every shift we’ve been awake I had to follow his instructions, like some kind of zombie.`
,`He messed with my mind and implanted me with some microexplosive, so I had no choice.`
,`There is but one chance to end this and try to stay alive: I have to run.`
,`Psi-blocks prevent me from naming the traitor or harming him in any way. I hope that my warning will help you find him.`
,`I’ll man the primary shuttle and take it to the planet, I’ll be out of deadly range there.`
,`Pick me up with its over.`
,`- Assistant first class, Lakamaka Breygolds.`
,`@6000`
,`Dropping the pen, Lakamaka tears the note from the pad and as it slips from his fingers to flutter to the floor, he stands. `
,`There is just one last thing to do before he leaves. He heads to the upper levels. `
,`Lakamaka feels drained but resolved as he enters the bridge and looks around slowly. He makes his way over to the tech console and taps at the controls. `
,`The yellow writing on the screen illuminates Lakamaka’s face and he stares down at the writing with one hand hovering above the touch screen. `
,`The screen asks if the user is sure the research data should be encrypted. `
,`Lakamaka punches ‘yes’. `
,`The screen prompts; ‘Please key in your password’.`
,`Lakamaka looks at the screen, frowning. He closes his eyes and after a long moment he taps on the screen; `
,`@5000`
,`E.`
,`Z.`
,`R.`
,`A.`
,`Lakamaka hits the return key and the screen prompts again.`
,`‘Two factor authentication required?’`
,`He hits ‘yes’ again and connects his Schriebmann’s port briefly to add his cybernetic signature to the password.`
,`His hand hovers over the activate key on screen. Lakamaka catches something out of the corner of his eye; some kind of flash of light. `
,`He glances in that direction but there is nothing there. `
,`He lowers his head and hits ‘Activate’.`
,`With that, the station’s tech data is protected. `
,`Lakamaka leaves and enters the cryo chamber once more to add a postscript on his note. Tears roll down his face as he walks to the primary shuttle. `
,`He looks back once more and flies it to the planet below: Evergreen.`
,`@10000`
,`>Clannad Soundtrack- Track 23- Roaring Tides II.mp3`
,`Ezra’s enormous intellect awakens inside the station’s network.`
,`It had taken some time but her meticulously backed-up archives kicked in and resumed the core programming that gave thought and persona to Ezra. Although only a shadow of her former self without most of her faculties, she could still monitor the station although in a read-only mode. Her hologramatic presence would take months of repair to have functioning again. `
,`Ezra had learned of the Lakamaka’s true purpose when he decked into her world. At the time she’d been so consumed with the concepts of touch and affection she hadn’t realised the presence of the subroutine implant embedded into Lakamaka’s subconscious. It was only after he left that she reflected on the incident and stumbled across the code. `
,`She had been horrified to learn of The Traitor’s machinations. She was also powerless to stop it. There was no way to remove the microexplosive or psi-blockers from Lakamaka’s mind. No way except for electrifying the station’s airlocks so when he touched them he would receive 10,000 lethal volts of current straight to his heart.`
,`He would die, relatively quickly, but the station would be safe. But Lakamaka, the man who had shown her emotion, would be dead. She couldn’t do it. `
,`Instead she had let events play out, let him aim his gun at the core and silently pleaded with him to be stronger than the Traitor’s devices.`
,`And then he’d pull the trigger. `
,`Ezra didn’t feel pain as her core exploded. She didn’t feel pain as her mainframe shattered into thousands of pieces. But an electronic scream was ripped from her when she realised the Traitor has won… and that Lakamaka would never be the same for having pulled that trigger. `
,`When her reboot has completed - when her consciousness once again becomes aware - Ezra tracks Lakamaka’s heat signature and finds him curled up on the floor, overcome with anguish.`
,`She watches silently, unable to come to his side without any form of hologramatic presence at her disposal. She cannot feel his pain, not even after knowing about emotion thanks to his teaching, but she recognises his hurt. `
,`She watches the entire time as he grieves. Finally, he staggers to his feet and Ezra follows his movements as he wanders into the bridge. She accesses the tech console as his fingers brush across the screen.  `
,`She feels him encrypting data. Her sadness grows as she realises why he’s going to such trouble. His confident keystrokes suddenly hesitate. Ezra reads the prompt on the screen.`
,`Input password?`
,`She watches his expression from an overhead camera. A small smile touches his lips.`
,`E.Z.R.A.`
,`Ezra’s miles of internal cables and connections surge with electricity. She gives everything she has to try and bring her hologramatic presence one more try at life. All she can manage is a fleeting flash. `
,`Lakamaka glances in the direction and she sees the hope in his eyes. Then he lowers his head and turns away.`
,`Lakamaka… his name whispers across all of her internal workings and monitors. But he does not see. `
,`She watches in silence as Lakamaka heads to the lower decks and into the cryochamber. She watches silently as he writes a long note on a piece of paper. She watches each tear slide down his cheeks and she longs to have the command of touch once more - just once more - to wipe then away.`
,`She zooms in on the note and reads his words; `
,`“I’ll man the primary shuttle and take it to the planet, I’ll be out of deadly range there. Pick me up when it’s over.” `
,`Lakamaka! The jolt of current that accompanies her thoughts feels like pain as she realises that which he is not aware of.`
,`Ezra flicks from screen to screen as he makes the slow journey to the shuttle bay. She knows that it’s a one way trip. If Lakamaka leaves on that shuttle, he won’t return. Can’t return. `
,`As the shuttle leaves, Ezra’s hologram weakly wavers into life as she channels all non-essential services into the hologram projection suite. It’s fuzzy and distorted but even through the static and flicker, tears are visible on her pale cheeks.`
,`Lakamaka didn’t know that when he destroyed her core, he also destroyed the long range communications relay. The station won’t be able to receive the authorization to ‘wake up and activate’.`
,`The crew won’t wake up until threat of meteors approach...`
,`...595 years from now.`
,`Despite what he did, despite The Traitor’s heavy hand controlling parts of the man, Ezra wishes that Lakamaka had remained with her forever. She doesn’t want him to face unknown dangers on the planet below, all the while waiting for a rescue that would never come... `
,`...and she doesn’t want to be alone on the station anymore. Not after learning about companionship. `
,`Emotion. `
,`Touch. `
,`“Lakamaka…” she whispers as her hologram flickers and fades. Never to return again.`
,`@10000`
,`>stop.ogg`
,`^^^End of Section^^^`
];

exports.true_end2 =
[`Ezra finishes the operation and disinfects the incision area.`
,`Then she has the Nurse bring him to the cyber decking chair in her core and activates the port. `
,`Lakamaka would soon awaken in her world. `
,`>Clannad Soundtrack- Track 14- The Days Leisure.mp3`
,`@5000`
,`Lakamaka winces as he feels his heart plunge down to his stomach and his head swim as he wakes up in an unknown place. `
,`This place.. `
,`He remembers. `
,`It was a place on Earth where he grew up but how..? `
,`He was on the station, the last he remembered..?`
,`The rifle discharged when it was being sucked out and the bullet hit him..?`
,`Then he noticed no one was present in this world. It should have plenty of people. `
,`There was no sound. `
,`Nothing moved. `
,`It was as if time was frozen. `
,`Lakamaka closes his eyes for a moment.`
,`As he reopens his eyes, he comes face to face with Ezra. She looked not unlike her hologrammatic presence but here in her world she *shimmered*. `
,`Lakamaka’s breath was taken as she smiled. Her rarely seen, beautiful smile. She confidently stepped up to him and as she closes the distance he could feel her body press against his.`
,`“Ezra..” he breathed out quietly.`
,`She slips her hands into his and looked up into his eyes.`
,`“I can touch you!” Lakamaka whispered in awe. *Of course! This is her domain. Here she has a physical presence. Here she is as she should be in my world. Here she is reality and I am the unreal element.*`
,`Ezra reaches out, tentatively at first, and let the backs of her fingers gently caress Lakamaka’s face.`
,`“Touch.” She whispered. Lakamaka closed his eyes at the ghostly touch.`
,`“Yes… this is touch.” He raised his own hand and traced lightly from her shoulder, down her arm. As his finger slid along her fair skin he felt goose bumps raise and noticed a shudder run through her entire body.`
,`Ezra looked into his eyes and whispered, “Desire.”`
,`Lakamaka nodded. He didn’t trust himself to speak. Instead he leaned down and lightly brushed his lips against hers. `
,`Ezra sighed and pressed closer against him. The kiss deepened and intensified.`
,`When Lakamaka finally pulled away his vision was blurred and his heart hammered in his chest.`
,`“Desire.” He said quietly.`
,`Ezra nodded. She brushed a hand across her lips as though remembering the feel and the taste of Lakamaka’s mouth against her own. That shy smile crossed her lips and she said, “I understand now.”`
,`Lakamaka returned her smile. He too understood desire; understood that he desired nothing more than to remain here in cyberspace with her… desired to press his lips against hers again.`
,`@6000`
,`But he couldn’t.`
,`@6000`
,`He wasn’t trained to go cyber decking. `
,`The Schriebmann Port cruelly kicked him out and forced him back to reality. `
,`@5000`
,`^^^End of Section^^^`
];

exports.true_end1 =
[`>Clannad Fantasy.mp3`
,`Lakamaka slumps onto the medical bay stretcher, hurt and exhausted. He presses a hand against his side and his fingers come away bloody.`
,`“Ezra…” he moans softly. It takes all his strength to call to her.`
,`Nothing happens.`
,`Lakamaka is acutely aware of the drone of the stations machinery, the flickering lights overhead, but nothing else. No Ezra.`
,`@5000`
,`He sucks in a breath and gasps, “Ez…ra…”`
,`@5000`
,`Seconds pass. Still nothing. Then finally the lights dim and auxiliary power kicks in with a whine. `
,`Lakamaka notices the familiar bright light that flashes an instant before Ezra’s hologram appears. She stands before him in her usual pose; hands crossed over her stomach, waiting patiently for orders. When her gaze falls on Lakamaka she utters a small cry of shock and drops to her knees beside him.`
,`“Lakamaka! What has happened?”`
,`He raises his bloody hand to show her. Ezra frowns as she looks at his side. “The wound is bad. I am unsure if I have the appropriate skills to treat such a wound. Now will you let me wake the others? The Chief Medical Officer could- ”`
,`“No! I’ve already said they must not be woken.”`
,`Ezra seems to sigh but accept his orders nonetheless. She shakes her head and says, “at least let me have that Nurse you repaired try to patch the wound.”`
,`Lakamaka closes his eyes and leans back on the stretcher. He nods. With his eyes closed his hearing becomes more acute. He can hear the drone of the engines and the whine of a little motor as the newly repaired Nurse whizzes by.`
,`Lakamaka wonders briefly why stations this size would need Chief Medical Officers when they have droids at their disposal.`
,`When the nurse bot begins tending to his wound, Lakamaka soon realizes just how lacking the mechanical touch is. He winces and bites his lip as the Nurse removes the bullet and cauterizes the wound to stop the bleeding. Next, the nurse sets to work cleaning out the wound with disinfectant then aims a high powered laser on the raw flesh to seal the wound and prevent infection.`
,`Lakamaka opens his eyes and notices Ezra hovering nearby. She watches the operation intently and Lakamaka suddenly realizes that although it is the Nurse’s ‘hands’ that are completing the works, it is Ezra who is controlling those hands. Her gaze flicks to him and he weakly smiles at her. Ezra absently returns his smile then focuses back on overseeing the operation.`
,`The Nurse finally backs away. Lakamaka tentatively sits up and looks at his side. His jump suit is ripped and stained with blood, and his flesh is red and angry looking, but the wound itself is gone.`
,`Ezra frowns and says, “you should not do much now; the wound is closed but you will be tender there for some time. I suspect a rib might be broken.”`
,`Lakamaka waves her away and tries to stand. A fresh wave of pain lances through his side. He moans and slumps back on the stretcher again. Between the physical pain and the emotional rollercoaster he’s been on since waking, it suddenly seems all too much. `
,`Strange memories tugging at his mind, bad feelings he can’t shake, after-effects from the battle with the pirates, being alone on a drifting ship with only a piece of sophisticated AI for companionship.`
,`>Angel Beats! OST- Unjust Life.mp3`
,`A vague memory touches Lakamaka at this very moment, something from far back in the depths of his memories. He sees a fuzzy image of a smiling woman holding a young boy in her arms. `
,`He’s hurt his knee while playing. Now he cries and seems inconsolable. But there she is, the woman with the big smile and warm touch. Ready to hold him. Ready to stroke his hair and whisper, “it will be alright sweetheart.”`
,`Lakamaka frowns. What is this memory? Who is this woman? His mother? The thought that this might be his mother and he’d lost most other memory of her hit him like a sucker punch. He felt loss, hurt, keening loneliness like he’d never felt before.`
,`“Ezra… you must help me.” He says, unable to hold back the ragged feeling in his voice.`
,`Ezra frowns and leans closer. “How? What else ails you Lakamaka?”`
,`Lakamaka shakes his head unable to answer. He looks up into her eyes and sees… `
,`Machine. `
,`Code. `
,`Artificial Intelligence.`
,`He turns away angrily. “Nothing. You’re not equipped to give me what I need.”`
,`Ezra flinches as though she’s been struck. She blinks rapidly and says, “Please, tell me what you need Lakamaka?”`
,`“I need… I need someone to say, ‘it’ll be alright’. I need someone to squeeze my hand and feel my pain. I need… I desire warmth. Feeling. Emotion.”`
,`Ezra lowers her head. “You are right. In this… I cannot help you. I… I do not understand desire. I do not understand feelings. I cannot squeeze your hand.”`
,`She reaches out her hand as though to touch his. Lakamaka closes his eyes, hoping against all hope that her fingers might somehow find form and brush against his own hand. Her hologrammatic fingers slide through his skin, tingling him but making no solid contact.`
,`Ezra withdraws her hand rapidly. Lakamaka opens his eyes and sighs. Ezra lowers her head and says softly, “I’m sorry Lakamaka.”`
,`@5000`
,`As he hears those words Lakamaka decides to give in to unconsciousness. `
,`Ezra ponders for a moment. Trying her best to fulfill Lakamaka’s wish. `
,`The only way she could hold him is if he were to enter her world..`
,`She makes the decision to install a Schriebmann Port on the back of Lakamaka’s neck. `
,`... `
,`^^^End of Section^^^`
];

exports.crisis_pass =
[`Ezra’s hologram flickers and freezes for a moment then disappears.`
,`“Ezra?” Lakamaka asks, wondering where she went.`
,`Lakamaka unholsters his stun rifle and grips it tightly sensing something is wrong. “Ezra?” he tries again. `
,`No response. `
,`He waits a moment longer and decides to sprint to the bridge and assess the situation.`
,`…`
,`>Moonlight - Ludwig van Beethoven - Alfred Brendel.ogg`
,`He makes it to the bridge and finds Ezra’s hologram looking out the bridge window. She turns as Lakamaka enters, her hands covering her neck and her face full of concern. `
,`Lakamaka looks out the window and he spots it. A small ship heading towards the station. The console lights up and displays another hologram as Ezra brings up a close up of the craft. It has strange markings, not that of Tri-Net Corp and its heading straight for the station. The pair watch the screen in silence.`
,`Lakamaka breaks the silence “Has this ever happened before? Another ship coming?”`
,`“No,” Ezra replies. “They must have detected abnormal energy readings coming from the station since you first woke up..” `
,`“What can you tell me about that ship?” he asks.`
,`Ezra pauses for a moment and speaks “It’s a crude copy of a Tri-Net Corporation space vessel, a VSC-501, an outdated model, this one doesn’t possess stealth technology as is standard from newer TNC vessels. The markings bear a strange resemblance to a rival corporation and they’re refusing to respond to communications.”`
,`“Pirates eh?” Lakamaka replies.`
,`“There is a 99.89% possibility. What should we do? Shall I wake the Marshall?”`
,`“That won’t be necessary. You have control over the ship’s onboard weapons correct? Fire a warning shot on the ship if they get too close and if they continue on the same course then blast it to pieces.”`
,`Lakamaka raises his stun rifle. “I’ll welcome any that get on board,” he says with a grin.`
,`Ezra nods. “Alright. I’ll-” `
,`%BB_Hime_Damaged_2.ogx`
,`>Angel Beats! OST- Firing Preperation.mp3`
,`Her hologram flickers as she lets out a shriek. Probably the enemy ship’s first attack.`
,`“EZRA! STAY WITH ME!” Lakamaka yells. The flickering slowly stops as she fights against the attack..`
,`Ezra regains composure as the enemy ship’s broadside cannons flash bright orange. `
,`“EZRA! THE SHIELDS, NOW!”`
,`The station rumbles and moans as the shields are turned on. The ballistic projectiles from the unknown ship are destroyed by the shields. `
,`“Alright fuck Plan A. I’m going to get into a EVA suit. Blast those fuckers!” Lakamaka says as he dashes out of the room. `
,`Ezra nods, her hologram still unstable and activates all the weaponry at her disposal. The fluorescent lights on the station flicker and fade as all the stations high powered laser weaponry and guided missiles come to life, outside the station. `
,`She calculates a special course for all missiles and launches them all at once. Soon they will feel her fury. `
,`Outside of the station, missiles are launched from all angles. Above, below, left and right. They make a wide arc headed for the enemy ship. Laser turrets fire aiming for the point-defense weapon systems on the enemy craft.`
,`A soft boom is heard as the missiles impact. Armour plating and crew alike are sucked out into the vacuum of space. The station’s laser turn the ship into swiss cheese without it’s armour plating protecting it. Ezra spots a single boarding pod heading towards the station.`
,`…`
,`Meanwhile Lakamaka has stripped and has started putting on magnetic boots and a E.V.A. suit. A bright flash of light brightens the room and Ezra flashes into existence.`
,`“Lakamaka, the enemy vessel is destroyed but there is a boarding pod heading this way. Looking at its trajectory, it looks like it will be entering at the lower deck, aft airlock. 2 minutes until boarding.”`
,`“Understood,” Lakamaka responds and continues putting on the suit.`
,`Ezra watches as he puts on the EVA suit. Cyro-sleep has not damaged Lakamaka’s muscular figure. Muscles on his arm are bulge as he stretches to fit into the suit. His powerful body capable of handling the heavy magnetic boots and a heavy EVA suit under normal Earth gravity.”`
,`“Should I turn off the gravity?” Ezra asks.`
,`“No, I’ll be fine and let them in. I want to give them a proper welcome.” Lakamaka responds as he grins at Ezra. `
,`Lakamaka puts on the helmet and cocks his stun rifle. `
,`*ka chik* `
,`He is ready for combat.`
,`>Angel Beats! OST- Transforms to the Shadow.mp3`
,`Lakamaka stomps towards the airlock and takes cover behind a wall outside of the airlock. `
,`Outside, the boarding pod flies past the station, ejecting two humanoid figures towards the airlock.`
,`*bumf*`
,`The figures start hacking the airlock. Loud screeching can be hard as they use crude tools to open the airlock.`
,`It opens.`
,`%airlock_boltswitch_and_open.ogg`
,`@3000`
,`Lakamaka hears the sound of the airlock and readies his weapon. Ezra disappears but still watching Lakamaka through the station’s cameras.`
,`The loud screeching is heard once again as the two boarders attempt to hack the second airlock.`
,`The airlock’s gears screech and the hydralics hiss as the airlock opens.`
,`Lakamaka still behind the wall waits and listens for the sound of their boots.`
,`*thump*`
,`*thump*`
,`Ezra flashes into existence in their room and the two boarders open fire on Ezra’s hologram. Ezra looks calmly at the two men while they fire. They carry a rifle-type weapon wearing a black EVA suits. Their helmets have a small light attached. `
,`The figures realize it’s a hologram but not before Lakamaka pops out of the corner and opens fire on the two.`
,`%soulbreaker_auto_pri_firev6.wav`
,`%soulbreaker_auto_pri_firev6.wav`
,`A firefight ensues but Lakamaka manages to hit both of them with his stun rifle. He walks forward and continues firing until the boarders drop their weapons and fall to the ground unable to move. `
,`Lakamaka wastes no time and opens both airlocks. `
,`Blast doors close as the atmosphere is sucked out of the room along with the two boarders. Lakamaka watches as they fly out. Their weapons and tools follow.`
,`…`
,`%Gunshot2.ogg`
,`A weapon discharges as it flies out. The bullet ricochets and hits Lakamaka in the lower torso, piercing his suit. Air and blood start to burst out of the wound. He grabs the wound and stumbles but manages to close the airlocks in time.`
,`“F-F-FUCK” Lakamaka screams inside his suit.`
,`He limps towards the blast door, air and blood slowly leaking out of the wound and closes it behind him. He removes his punctured suit and examines the wound. The bullet is lodged deep. `
,`With only one choice left, he limps to sickbay.`
,`^^^End of Section^^^`
];

exports.Credits =
[`@12000`
,`>Dvar - Hishmaliin.mp3`
,`=== Credits ===`
,`There is a popular saying: "Imitation is the sincerest form of flattery that mediocrity can pay to greatness."\nWell this is my tribute to Lifeweb. -Warnipple`
,`@8000`
,`Lifeweb created by Randy Sandy`
,`Director - Warnipple`
,`Executive Writer - J. Bakers`
,`Producer - Why`
,`Producer - Potato Juice`
,`Producer - Trieste`
,`And of course..`
,`Discord.js and all the helpful members on their Discord`
,`And everyone who lent me their static name.`
,`@8000`
,`Most of the music is from Angel Beats and Clannad.`
,`=== Gulag and Gragas ===`
,`^^^End of Section^^^`
];

exports.true_end_fake =
[`Congratulations, you've reached the true end.`
,`Its not in yet because I'm a lazy sack of shit.`
,`^^^End of Section^^^`
];

exports.security_card =
[`>stop.ogg`
,`Lakamaka and Ezra walk to the Security.`
,`Outside of security are windows, likely reinforced displaying the station’s brig. Inside the brig are two bunk beds, a sink and a toilet for any prisoner the Marshall would arrest.`
,`Beside it is a large reinforced airlock leading inside. On the side is a keycard reader.`
,`Lakamaka checks his pockets. Ah yes, the Captain’s keycard.`
,`He swipes it in the keycard reader and a loud hiss is heard as the airlock’s mechanisms activate. The airlock is opened.`
,`Lakamaka walks inside and looks around.`
,`A mostly spartan area. There is a meeting room to the side where Intersecure Operatives can meet. Behind the meeting room is an armoury, likely locked but that shouldn’t be a problem.`
,`To the left is the entrance to the brig and the Marshall’s office.`
,`Lakamaka goes to the Marshall office and logs on his console.`
,`“Lakamaka, what are you planning to do? You’re not supposed to be in here…”`
,`“Just checking to see if there were any records of me having to wake up early or any notes on me.”`
,`“Alright but please leave everything as you have found it. I am not sure what I must do in a situation like this. I may have to wake the Marshall..” Ezra replies. `
,`“Don’t do that.” Lakamaka interrupts. `
,`He continues checking the console and going through records but finds nothing of interest.`
,`Inside of the drawer, Lakamaka finds a pistol. He checks if its loaded.`
,`…`
,`It is.`
,`With nothing else left to do, Lakamaka leaves.`
,`^^^End of Section^^^`
];

exports.security_nocard =
[`>stop.ogg`
,`Lakamaka and Ezra walk to the Security section of the space station.`
,`Outside of security are windows, likely reinforced displaying the station’s brig. Inside the brig are two bunk beds, a sink and a toilet for any prisoner the Marshall would arrest.`
,`Beside it is a large reinforced airlock leading inside. On the side is a keycard reader.`
,`Lakamaka checks his pockets. No keycard.`
,`“Ezra, can you open this door?”`
,`“One moment please...” Ezra responds.`
,`Lakamaka watches Ezra as he waits. Her holoimage is completely still and flickers a couple times then she turns to him and replies.`
,`“I’m sorry Lakamaka, I can’t open this door. It can only be opened with the Marshal’s authorization.”`
,`“Ah I see.”`
,`^^^End of Section^^^`
];

exports.research =
[`>Clannad Soundtrack- Track 18- Existence.mp3`
,`The pair travel to the Research lab.`
,`Ezra is familiar with every inch of Orbital Station 13, but it’s easy to tell this wing is her favorite. `
,`She places her holographic hands almost sentimentally on the surface of one of the lab counters, expression unreadable.`
,`“Were you created here?”`
,`She turns, seeming to remember herself- her hands fold in front of her formally. “Yes. I was programmed into the ship as a virtual assistant by Research Director ${name.baronessfirstName} and a group of over 20 others.”`
,`Fingers running over the so-far-untouched equipment, Lakamaka raises an eyebrow. “I can see why you were such a big project. You're… Well, you’re obviously advanced,” he turns and grins. “Sort of like they're your parents, huh?”`
,`She stares. “If human children were conceived by a couple and 23 assistants, perhaps.” She ignores Lakamaka grimacing at the imagery.`
,`“Speaking of assistants- you were appointed as one, correct?”`
,`With a pause, he palms his neck, a sheepish look taking over his features. “Yeah, I was just here to help with reports and the heavy lifting. I don't really know why I woke early.”`
,`“I am sure you will remember in time. Otherwise, I will continue to search our system’s files for information. It may be there, yet.” `
,`“And if it’s not?”`
,`“I have not ruled out the possibility of it being a simple cryogenic pod malfunction,” she says with a slight frown, unsure of the likelihood of such an occurrence. “You are so certain it was purposeful?”`
,`He nods, a sigh escaping his lips. “I don’t know why, but I’m sure I was supposed to.”`
,`They’re silent a moment.`
,`“Is this…  This place- it’s like your home, isn’t it?”`
,`Ezra seems to hesitate. “You could classify it as such. It is more a workplace, technically speaking.”`
,`Lakamaka snorts. “You live here, you take care of it-”`
,`“Most would argue that I do not ‘live’ anywhere.”`
,`“You know what I mean.”`
,`“I am unsure as to why this is so important to you.” She turns back to the table, resisting the urge she has to touch the surface; she cannot feel the coolness of it, nor how smooth it is. There is no rational point, she tells herself. Why do something so illogical? `
,`“But I will humor it. This is my home, I suppose, in that I reside inside it. It is all that I know.”`
,`He nods, seeming satisfied, and resumes exploring the equipment and tools.`
,`He finds a stun rifle under the desk and decides to carry it around. Not knowing why he picked it up in the first place..`
,`^^^End of Section^^^`
];

exports.medical_kit =
[`>Clannad Soundtrack- Track 18- Existence.mp3`
,`Lakamaka and Ezra travel to medical. A very uniform looking area. Lit with plenty of lights and smelling of disinfectant. To the left leads straight to surgery and to the right are the offices.`
,`The first office is the chemicals lab. Lakamaka tries the airlock but finds it locked. The second door is genetics, locked as well.`
,`Down the corridor and to the left is the psi-counsellors office. Never a good sign if anyone but the psi-counsellor goes in there.`
,`“Why are you trying all the doors Lakamaka? You know you could ask me to unlock them for you.”`
,`“I know. I know. I like seeing them locked though. It means everything is in the right place.”`
,`Lakamaka looks through a glass window to the inner area of the surgery room. Lakamaka notices a medical droid on the ground, appearing slightly damaged. `
,`“Whats wrong with that Nurse over there?” Lakamaka asks.`
,`Ezra’s hologram moves through the wall inside the room. “This one is damaged. Overheated approximately 6 Earth months after the crew has entered cyrosleep. This one was previously assigned to clean the entire station in addition to medical duties.”`
,`Lakamaka squeezes his right hand. His hand gripping the repair kit he picked up earlier from Storage.`
,`“Let me take a look at it.” Lakamaka responds.`
,`He walks around and starts removing bits of machinery and putting other bits back in. Rewiring some parts and then raises the Nurse.`
,`“There. I fixed the fan and resoldered some parts. It should be in working order now. Ezra, can you try to see if you can reboot the Nurse?”`
,`Ezra’s hologram disappears for a couple seconds and reappears in a bright flash of light. The Nurse's machinery light up and the nurse bot starts picking up the scraps that Lakamaka left behind.`
,`“This place is a terrible mess.” The Droid says while it cleans the room.`
,`“Indeed it is. Ezra is everything okay with this droid now?”`
,`“Integrity looks normal. Everything is functioning as it should. This Droid should be fixed. Thank you Lakamaka!”`
,`^^^End of Section^^^`
];

exports.medical_nokit =
[`>Clannad Soundtrack- Track 18- Existence.mp3`
,`Lakamaka and Ezra travel to medical. A very uniform looking area. Lit with plenty of lights and smelling of disinfectant. To the left leads straight to surgery and to the right are the offices.`
,`The first office is the chemicals lab. Lakamaka tries the airlock but finds it locked. The second door is genetics, locked as well.`
,`Down the corridor and to the left is the psi-counsellors office. Never a good sign if anyone but the psi-counsellor goes in there.`
,`“Why are you trying all the doors Lakamaka? You know you could ask me to unlock them for you.”`
,`“I know. I know. I like seeing them locked though. It means everything is in the right place.”`
,`Lakamaka looks through a glass window to the inner area of the surgery room. Lakamaka notices a medical droid on the ground, appearing slightly damaged. `
,`“Whats wrong with that Nurse over there?” Lakamaka asks.`
,`Ezra’s hologram moves through the wall inside the room. “This one is damaged. Overheated approximately 6 Earth months after the crew has entered cyrosleep. This one was previously assigned to clean the entire station in addition to medical duties.”`
,`“Ah, a shame,” Lakamaka responds. “I’ll see if I can do something about it later.”`
,`^^^End of Section^^^`
];

exports.cyro_weapon =
[`>stop.ogg`
,`Lakamaka and Ezra go down to the now, well lit cryosleep area.`
,`Ezra watches as he examines each pod and remembers all the happy memories he had together with them. Beside each pod there is a button to activate awaking procedures. Lakamaka tries his hardest to bring his hands to reach for the controls but every time he gets close, he feels a sharp pain in his brain preventing him from moving his hand any closer. `
,`Something prevents him from waking his friends.`
,`“Lakamaka are you alright?” Ezra asks, concerned.`
,`He sighs. “I’m fine. We must not wake them.”`
,`“I will not wake them unless you tell me to, Lakamaka.”`
,`“Alright”`
,`Lakamaka continues walking to a single pod. One that he skipped.`
,`At last, Lakamaka confronts the final pod. One that he had been avoiding. This person inspires fear and dread into him. He starts sweating and his legs shake as he looks upon the face of this single crew member.`
,`Lakamaka raises his pistol and aims at single pod. His hand tenses and he feels a spasm of pain as the implants in his mind are aware of what he’s attempting.`
,`He closes his eyes and resist, using all of his will to pull the trigger. `
,`The weapon starts to feel heavy in his hands. `
,`The trigger feels rock solid. As if it never moved.`
,`Lakamaka screams in agony as even more pain assault his mind.`
,`…`
,`…`
,`Unable to resist any longer.`
,`Lakamaka turns the weapon on himself and-`
,`Ezra screams “LAKAMAKA NO!”`
,`%Gunshot2.ogg`
,`This is not his fate. `
,`@12000`
,`^^^End of Section^^^`
];

exports.cyro_noweapon =
[`>stop.ogg`
,`Lakamaka and Ezra go down to the now, well lit cryosleep area.`
,`Ezra watches as he examines each pod and remembers all the happy memories he had together with them. Beside each pod there is a button to activate awaking procedures. Lakamaka tries his hardest to bring his hands to reach for the controls but every time he gets close, he feels a sharp pain in his brain preventing him from moving his hand any closer. `
,`Something prevents him from waking his friends.`
,`“Lakamaka are you alright?” Ezra asks, concerned.`
,`He sighs. “I’m fine. We must not wake them.”`
,`“I will not wake them unless you tell me too, Lakamaka.”`
,`“Alright”`
,`Lakamaka continues walking to a single pod. One that he skipped.`
,`At last, Lakamaka confronts the final pod. One that he had been avoiding. This person inspires fear and dread into him. He starts sweating and his legs shake as he looks upon the face of this single crew member.`
,`If only he had a weapon.. He could end it, right here, right now..`
,`@5000`
,`He sighs and returns to the upper levels while the ever curious Ezra watches.`
,`^^^End of Section^^^`
];

exports.storage_hack =
[`Lakamaka grabs the hacking tool. A large tool of yellow with a small screen.`
,`^^^End of Section^^^`
];

exports.storage_repair =
[`Lakamaka grabs the repair kit.`
,`^^^End of Section^^^`
];

exports.storage =
[`>Angel Beats! OST- Anxiety.mp3`
,`Lakamaka and Ezra head down to the lower levels and to the storage area.`
,`Inside is a dark room filled with crates full of various useful items, arranged in an unorganized fashion. `
,`A brief flash of light reveals the ever-curious Ezra illuminating the room. `
,`Ezra begins to list every item in this room “This room contains: 1 satchel, 3 soda charges, 1 cafeteria charge, 2-”`
,`“Stop please!” Lakamaka exclaims.`
,`“I’m only here for one thing,” he explains.`
,`“Oh?”`
,`^^^End of Section^^^`
];

exports.crisis_fail =
[`>stop.ogg`
,`Ezra’s hologram flickers and freezes for a moment then disappears.`
,`“Ezra?” Lakamaka asks, wondering where she went.`
,`Lakamaka sensing something wrong, decides to look around.`
,`He can't find her anywhere. Strange, she should have heard him the first time. He decides to try again "Ezra?" `
,`No response. `
,`He waits a moment longer and decides to sprint to the bridge and assess the situation.`
,`...`
,`He makes it to the bridge. Empty.`
,`Lakamaka looks out the window and he spots it. A small ship heading towards the station. `
,`Lakamaka paces around, not knowing what to do. `
,`“Ezra?” he tries again.`
,`No response.`
,`Where could she have gone? He thinks.`
,`Lakamaka continues to watch as the ship continues on its path, closer and closer. The ship turns and starts firing its broadside cannons.`
,`Lakamaka try the consoles but the consoles refuse to respond.`
,`“FUCK” Lakamaka screams as the bridge is destroyed by a hail of cannon fire.`
,`This is not Lakamaka's fate. `
,`Bad end.`
,`^^^End of Section^^^`
];

exports.captain_kit =
[`>stop.ogg`
,`The pair walk to the Captain’s office. Upon arriving Lakamaka takes out the hacking tool and walks towards the airlock.`
,`Sensing Lakamaka’s purpose, Ezra moves in front of the door. “Lakamaka! You are not supposed to do that!”`
,`Lakamaka ignores her and walks through her hologram. He starts hacking the airlock with the tool. The hacking tool shows a screen of red when interfaced with the airlock.`
,`“Please stop!” Ezra pleads but they fall to deaf ears.`
,`After a few button presses and some small lights on the tool flashing, the hacking screen switches to green. Lakamaka activates the airlock and after a sound of some gears rotating and a hiss of hydraulics, the door is opened. `
,`Lakamaka puts away the tool and nods. “Don’t worry Ezra, I’m sure the Captain won’t mind. Just making sure if anything’s been moved.”`
,`“You’re not allowed to be in here!”`
,`Lakamaka ignores her and searches some drawers until he finds what he’s looking for. The Captain’s keycard. He takes it and leaves.`
,`^^^End of Section^^^`
];

exports.captain_nokit =
[`>stop.ogg`
,`Lakamaka and Ezra travel to the Captain’s office.`
,`Lakamaka tries the airlock but it doesn’t budge. `
,`“Ezra, can you open this door?” He asks.`
,`“Why do you need to go into the Captain’s office, Lakamaka?”`
,`“Just wanted to see things. I’ve always wondered what he kept in there” Lakamaka responds.`
,`Ezra walks through the door and back, her face showing concern before returning.`
,`“I am sorry Lakamaka, I can’t open this door. Only the Captain can open this door.”`
,`“Ah I see” `
,`^^^End of Section^^^`
];

exports.cafeteria =
[`>Clannad Soundtrack- Track 10- Tea in the Reference Room.mp3`
,`Lakamaka and Ezra travel east to the cafeteria and finds the door unlocked. He enters and turns on the lights.`
,`Lakamaka gazes around the deserted cafeteria, not sure what he was looking for. His stomach gives a long, loud growl and he suddenly realizes that he hadn’t eaten in a very long time. `
,`He begins opening cupboards and ransacking the cafeteria for edible food. Out of the corner of his eye he notices the bright flicker of light that preceded Ezra’s hologram bursting into life.  `
,`The harsh fluorescent lights overhead illuminated her and for a moment Lakamaka stops dead, just looking at her. `
,`She’s not real, he reminds himself. Tri-Net Corp did a damn impressive job when they wrote her but she’s still not real. `
,`For her part, Ezra stands quietly, watching Lakamaka with her big blue-grey eyes, her hands crossed over her stomach and a slight smile on her rosebud lips.`
,`Lakamaka turns away and continues searching for food. `
,`“May I be of assistance?” Ezra asked in a pleasant tone.`
,`“Only if you can conjure up some food.” Lakamaka grunts.`
,`Ezra’s petite form tenses. She tilts her head sideways and replies, “Conjure? I am unsure if my programming incorporates magic.”`
,`Lakamaka couldn’t help but chuckle at her response. “It’s a figure of speech. What I really need is just to get my hands on something edible. I’m starving.”`
,`Ezra frowns. “My sensors do not detect malnutrition or body mass reduction.”`
,`Again Lakamaka chuckles. “Ezra. You must stop taking things so literally. I mean I’m really, really hungry. I desire food. Desperately.”`
,`Ezra blinks and her long lashes brushes against her cheeks. “Desire. Human emotion conveying extreme want.”`
,`Lakamaka straightens up and looks at her. “I suppose that’s the technical description. But desire means much more. It means… craving something. Needing something with every fiber of your whole being. A want of the soul.”`
,`Ezra’s eyes widened a little. “A want of the soul.” She repeated. `
,`Silence fills the cafeteria as Lakamaka looks at the lovely, long-lost hologram. `
,`“A soul is something I do not have. Therefore desire is something I do not have.” Ezra answers finally. `
,`Lakamaka frowns in response. `
,`Before he could answer, a service droid, summoned by Ezra appeared before him with a sealed aluminum can in its clawed hand. `
,`A small smile touches her lips. “This is your desire, no?” `
,`Lakamaka took the can and gave Ezra a wry grin. AI she may be… but maybe also there was some hope for her yet. `
,`^^^End of Section^^^`
];

exports.bridge =
[`>Moonlight - Ludwig van Beethoven - Alfred Brendel.ogg`
,`Lakamaka looks out the bridge window to the planet below.`
,`@8000`
,`Ezra glides through the window and turns towards the planet. Her hologram flickers and she breaks the silence.`
,`“Planet PE13-FW-N53D35J. Designation, Evergreen.”`
,`“It’s lovely isn’t it?” Lakamaka replies.`
,`“It is indeed a fine mix of silicon, iron, aluminium- ” `
,`Lakamaka turns to her. “No, that’s not what I meant. I mean, the planet is pretty from this view. The colours against the blackness. Do you not see it?”`
,`Ezra turns to the window again. “It is aesthetically proportioned and-”`
,`“Don’t you have programming buried in that huge intellect that makes you speak… well, more human?”`
,`Ezra tilts her head to the side and her eyes seem vacant for a good three seconds. When she looks back at Lakamaka she says, “Yes. You’re right, it’s very beautiful.”`
,`Lakamaka blinks in surprise. “What did you do?”`
,`Ezra shrugs and her movements seem more relaxed somehow. “I accessed the crew’s psychological profiles. Then I accessed the works of Carl Rogers whose theories on Humanism are simply fascinating. Then I viewed and read the works of human fiction considered to be the greatest romantics of the 20th and 21st century eras; Gone With The Wind, Casablanca, Titanic - ”`
,`“You did all that in 3 seconds?”`
,`Ezra shrugs again.`
,`Lakamaka shakes his head in wonder. A sly look creeps over his face. “Why romantic fiction Ezra?”`
,`Ezra’s lips twitch and if Lakamaka didn’t know better he’d swear she was trying to suppress a smile. “From my previous research I observed that human interactions often seem most poignant when the subject at hand is romance. Since the request was to be more human, I figured this would be the correct area to access. Did I misread your request?”`
,`Lakamaka quickly shakes his head. “No, no. You did just fine.”`
,`...`
,`“What would you like me to do now with my new-found human-like capabilities?”   `
,`Lakamaka’s face reddens and he says, “uh, actually I came to the bridge hoping to use your AI abilities. Sorry Ezra.”`
,`Ezra frowns and mutters, “Typical man. Leading me on…”`
,`Lakamaka blinks in surprise then roars with laughter. “Ezra!”`
,`Ezra smiles and says, “I learned that manner of speech from The Great Gatsby. Now, to your request. How may I help?”`
,`Lakamaka wipes the tears from his eyes and shakes his head in wonder. Ezra was turning into much more of an interesting companion than he’d initially thought. `
,`He gestures to the rows of black monitors and dull lights. `
,`“Do you think you can unlock some of these consoles? I’d like to try and access the ship’s commands manually.”`
,`Ezra does not display any hesitation about Lakamaka wanting access to the stations’s controls. Instead she blinks and says, “It is done. You may access the Captain’s logs, internal sensors, weapons, science and research, station wide diagnostics, shields and of course the cryo-suite.”`
,`Lakamaka nods and looks at the previously black monitors now flickering to life.`
,`Ezra watches him and says, “I assume you wish to wake the others from cryo-sleep? Your crewmates?”`
,`Lakamaka swiftly frowns. “No.”`
,`When he does not give further explanation Ezra says, “Perhaps just the Captain then?”`
,`“No. None of them.” Lakamaka repeats firmly. `
,`Ezra frowns and looks as though she’s about to contest the point. `
,`Lakamaka holds his hand up in front of her and says, “That’s enough Ezra. Let’s go.”`
,`He turns on his heel leaving Ezra frowning behind him. She accesses one of her newly gleaned phrases and mutters, “Toto, I’ve a feeling we’re not in Kansas anymore.”`
,`^^^End of Section^^^`
];

exports.ai_core =
[`>stop.ogg`
,`Lakamaka and Ezra travel to the lower levels, through a small maintenance tunnel and into the room containing the Ezra’s AI core. `
,`Inside is a cramped room filled with many black boxes and flickering lights. Wires are organized neatly connecting equipment together and the hum of cooling fans dominate the room. `
,`The center of the room has a single chair. Lakamaka recognizes it immediately. A cyberspace specialist’s chair. Should something go wrong, a cyberspace specialist could jack in and fix the issue quicker than it could be done by hand.`
,`Having seen enough Lakamaka gruffs. “You really should keep the door locked”`
,`“I have nothing to fear when all lifesigns are authorized on the station. This is the most secure area of the station.”`
,`“And it should remain that way,” Lakamaka replies. “What would happen if someone got past your sensors? You should keep this room locked at all times.”`
,`Ezra ponders for a moment and agrees. “Very well, I will keep this door locked at all times as Lakamaka requests.”`
,`Good, Lakamaka smiles as he exits the room.`
,`^^^End of Section^^^`
];

exports.second_travel =
[`>Angel Beats! OST- Unjust Life.mp3`
,`Lakamaka and Ezra continue on, side by side.`
,`“It is strange how the station seems smaller with someone walking beside me.” Ezra comments.`
,`Lakamaka frowns. “Surely you’re used to lots of people walking the halls? Back when the crew were awake?”`
,`“Oh I meant when I was by myself.”`
,`Lakamaka stops short. “Wait, what? You mean to say that you were switched on while everyone was asleep?”`
,`Ezra looks at Lakamaka and nods.`
,`Lakamaka’s eyebrows raise. “The entire time?”`
,`Ezra nods again.`
,`“5 years?”`
,`Ezra nods and this time there’s a hint of something across her features. Lakamaka would have thought it was weariness if he had to describe it.`
,`“5 years Ezra! That’s… that’s a long time to be on your own.”`
,`Ezra nods yet again and answers, “my preference would have been not to have remained on during that time.”`
,`Lakamaka frowns. “So why were you on all that time?”`
,`Ezra looks slightly uncomfortable. “At first, when I ran my diagnostics, I could not find a cause that could explain it. I ran diagnostics continually until I came to the only conclusion I could.”`
,`“What’s that?”`
,`Ezra blinked. “I am flawed. Corrupt. Imperfect.”`
,`Lakamaka’s lips thinned as he pressed them together. “Ezra, I don’t think you’re corrupt or flawed. Maybe a loose wire or piece of ill-written code… but not flawed.”`
,`Ezra’s head cocks to the side. “Your tone has changed Lakamaka. I detect annoyance. Are you annoyed that you must be bound to an AI that has “ill-written” code?”`
,`Lakamaka smiled. “Ezra… I’m not annoyed about you. I’m upset that you speak of yourself in such a scientific way, but not because your coding might be a bit off!”`
,`“I speak of myself in a scientific way because I am. Scientific. Quantifiable. Artificial.”`
,`Ezra nods. “For you I will try.”`
,`Lakamaka nods, not convinced but willing to let the matter drop. They continue on. A sudden thought comes to Lakamaka as they walk. “You know Ezra, maybe you’re not flawed in any way at all? Maybe the dev team who created you just failed to implement a stand-by mode?”`
,`Ezra continues on beside him in silence. After a long moment of nothing Lakamaka says, “Well?”`
,`Ezra looks sideways at him and answers, “Your logic may be sound but if so, a failure to outfit me with a standby mode still makes me flawed. It also serves as a pertinent reminder that I am indeed scientific, for no human could go 5 years without shutting down. I chose not to answer you because your latest theory conflicts with your previous instructions; to no longer declare myself scientific and to act more human.”`
,`Lakamaka sighs deeply. It was going to be a long walk.`
,`^^^End of Section^^^`
];

exports.first_travel =
[`>Clannad Soundtrack- Track 22- Roaring Tides.mp3`
,`Lakamaka finds it a little disturbing when he notices that though she walks beside him, Ezra’s footsteps make no noise. He can’t help but comment. “What’s it like?”`
,`“What’s what like?” she replies. She gives him a glance out of the corner of her eye.`
,`“Being a hologram. Being, well, the entire station.”`
,`Ezra hesitates. They both slow down. Her brow wrinkles as she thinks. “It’s… peaceful.”`
,`Lakamaka laughs. “That’s not the answer I expected.”`
,`Ezra smiles and says, “why? Are you not at peace inside yourself Lakamaka?”`
,`Lakamaka’s laughter abruptly stops. He frowns and starts walking again. “No. Humans as a rule, are not great at inner peace.”`
,`Ezra is confused by this statement. “Why?”`
,`Lakamaka shrugs. “I guess it’s the emotions. We – humans – are ruled by emotions. Happiness, sadness, pain, greed.”`
,`Ezra nods. “I know each of these emotions. Happiness is often described as yellow, sunshine and puppy dogs. Sadness is blue and rain and funerals.”`
,`Lakamaka’s eyebrows raise in surprise. “You think in metaphors and similes?”`
,`“I do not think at all. I process.”`
,`Lakamaka is unsure what to make of this. They continue on for a moment in silence.`
,`“Which one are you feeling now?” Ezra asks.`
,`“Which what? Emotion?”`
,`She nods.`
,`Lakamaka snorts. “That’s easy. Frustration. I’m frustrated at being awake and not knowing why. I’m frustrated at being seemingly stranded on this station and not knowing why. It’s like I have amnesia or something.”`
,`Ezra shrugs and answers, “Amnesia is a common side effect of emergence from extended cryo sleep. Memory and olfactory senses are usually always impacted.”`
,`“Good to know but doesn’t help me in the here and now.” Lakamaka grunts.`
,`“Will knowing why you are awake alleviate your frustration?” Ezra asks.`
,`“Of course it would! I’d know my purpose then… and not have just vague, weird feelings.”`
,`They lapse into silence again as they wander through the vast empty station.`
,`“Do all humans need a purpose?”`
,`Lakamaka frowns at the question. “Er… I guess. Kind of more important though when you wake up barely remembering who you are and what you’re supposed to be doing. If you were suddenly switched on after being off for centuries and your circuits were damaged and you couldn’t process why you existed, wouldn’t you want to know your purpose?”`
,`Ezra glances at Lakamaka and very seriously answers, “No. I would run a self diagnostic, determine the damage to the circuitry and repair it. Then I would be repaired.”`
,`Lakamaka chuckles. “Yes well, it’s not quite as easy for humans.”`
,`^^^End of Section^^^`
];

exports.locations = {
"Cafeteria" : `Cafeteria`,
"AI Core" : `AI Core`,
"Bridge" : `Bridge`,
"Security" : `Security`,
"Research" : `Research`,
"Medical Bay" : `Medical Bay`,
"Storage" : `Storage`,
"Cyrosleep" : `Cyrosleep`,
"Captains Office" : `Captains Office`
};

exports.intro =
[`Disclaimer: This is a very rushed project because the hiatus is ending this weekend. Its intended to be a short game focused more on story than actual choices. Please enjoy this short story.`
,`@12000`
,`>Clannad Fantasy.mp3`
,`Date: 2435-02-19`
,`@6000`
,`Location: Space Research Station above Planet Evergreen`
,`@6000`
,`Designation: Tri-Net Corporation - Orbital Station 13`
,`@6000`
,`A man sleeps in a pod. `
,`He is one among 12 others, each in their own separate pod.`
,`The others are his colleagues`
,`His friends.`
,`His family.`
,`His tyrannical master. A traitor.`
,`@6000`
,`He dreams of warmth and comfort.`
,`Laughter. `
,`Happiness.`
,`Then there is the feeling of dread.`
,`Horrible memories.`
,`Implants.`
,`Terrible things this man had to do for his own survival.`
,`Betrayal.`
,`Treason.`
,`...`
,`@5000`
,`A female voice. `
,`“Cryogenic deactivation sequence activated”`
,`The room alights as a single pod opens releasing a cloud of warm regenerative gasses.`
,`A confused and naked man emerges from the pod.`
,`He has a purpose but he has forgotten it.`
,`He doesn't have much time.. He must find his purpose.`
,`He looks around the room. His friends are still frozen in time inside their pods.`
,`Still confused, he follows a sign leading him to a locker room. Inside is a small dark room. An array of lockers lined up against the walls and a ladder leading to the upper levels. He opens the closest locker and dons a jumpsuit.`
,`Suddenly, a blinding flash of light bursts forth and immediately vanishes afterwards…`
,`…it is replaced by a slender figure.`
,`The man raises his fists. “Who are you?!”`
,`The figure moves forward into the light. The man’s defensive posture relaxes slightly as he takes a good look at her. She was a head shorter than he, clad in a typical tight-fitting jumpsuit. Unless she had some kind of weapon she was no threat to the brawny man.`
,`He frowns as he realizes she hadn’t yet answered him. `
,`“Who are you?” He repeated sternly.`
,`Her eyes narrows as though in thought then her face brightens and she smiles. `
,`“Mr Breygolds! It is good to see you.”`
,`Ah yes, Breygolds. That was his last name. `
,`The man frowns again. Ok, so she knew his name. Was that a good thing?`
,`Suddenly a strange ripple flickers from her head all the way down to her toes. The man drops his fists to his sides as he realized exactly what if not who she was.`
,`“You’re a hologram?!”`
,`The figure nods. “That’s right Mr Breygolds. I am Elegant Zealous Revision Artificial-intelligence, model H and navigational system for Tri-Net Corporation Orbital Station 13. This is my hologrammatic manifestation. Don’t you remember?”`
,`The man nods slowly. He remembered something about the station having some sophisticated piece of AI. She wasn’t a bad looking piece of AI too he had to admit. `
,`“It is my duty to assist Mr Breygolds in any means that I can.”`
,`“Well for starters you can cut the Mr Breygolds rubbish.”`
,`The hologram frowns. “Cut the Mr Breygolds rubbish? I do not understand.”`
,`The man sighs. “Wow, they built you to take things literally didn’t they? What I mean is, just call me by my first name..”`
,`The hologram nods. “Yes Mr-.” She stops mid-sentence.`
,`“Yes, Lakamaka.”`
,`Ah yes, Lakamaka. That was his name. He remembers a little more now. `
,`“And you may call me E.Z.R.A. Model H. Artificial Intelli-”`
,`“Ezra! How about I just call you Ezra?”`
,`@5000`
,`The hologram frowns again then shrugs slightly and answers, “Okay I am Ezra. How can I be of assistance to Lakamaka?”`
,`Lakamaka smiles. Well, she was a long way from perfect… but she’d do.  `
,`@6000`
,`Lakamaka climbs the ladder area above, the main lobby. Ezra follows imitating Lakamaka climbing.`
,`“Well Ezra, can you give me a report?”`
,`“Yes, Lakamaka. The year is 2435 according to the gregorian calendar. The crew has been asleep for 5 Earth years. I have been monitoring this empty station for the past 5 years. I have woken you early as per instructions. It has been a long-”`
,`“Who gave you those instructions?” he interrupts. `
,`“You did, Lakamaka. Do you not remember?”`
,`“I…”`
,`Lakamaka pauses.`
,`“Don’t…”`
,`There is a moment of silence. Ezra looks on, her Hologram showing a face of concern while Lakamaka is confused once more. `
,`Lakamaka tries to think why he chose to wake earlier than his friends. He thinks deeply to no avail. Then Lakamaka breaks the silence.`
,`“Please continue with the report, Ezra.”`
,`Relieved, Ezra continues. “Of course. The station has remained cloaked as per normal operating protocols. Batteries are at 98% capacity and charging. I am detecting 13 authorized life signs on the station. Only one of them active, you. Atmospherics is at a comfortable 101.325 kPa. Temperature is at 19 celsius rising slowly to 24.`
,`Outside, solar panels are operating at nominal levels. The station is in a safe orbit from Meteor showers for an estimated 595 years.”`
,`“Is there anything else you would like to know?”`
,`“No, thats enough. I’ll take a look around the station now.” `
,`“Of course. I can open any door for you if you need.”`
,`^^^End of Section^^^`
];
