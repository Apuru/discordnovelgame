var Discord = require("discord.js");
var bot = new Discord.Client();

const fs = require("fs");
var images = JSON.parse(fs.readFileSync('archive.json'));
var imgDirectory = "./images";
var soundDirectory = "./sound";
const static_nameDirectory = JSON.parse(fs.readFileSync("static_names.json"));

const gngb = require("./gng_baron.js");
const gngos13 = require("./gng_os13.js");
// Don't forget to install the node, sleep-ms package
const sleep = require('system-sleep');

// Sound dispatcher variable, this is required because we need the variable outside the loops
var dispatcher = {};

// Not sure what this is used for
var botUserID = '275689637513789440';

// this is for the voting feature
var selectedOption = "";

// vote test
bot.on("message", msg => {
  let prefix = "!";
  if(!msg.content.startsWith(prefix)) return;
  if(msg.author.bot) return;
  if (msg.author.id !== '96817309145894912' && msg.author.id !== '239703056353198081') return; // me and potato
  if (msg.content.startsWith (prefix + "xd")) {
    // var deleteall = collection.findAll('id', '275689637513789440');
    msg.member.voiceChannel.join().then(connection => {
      true_end_f_cont3(channel, sound);
    });
    }
});

bot.on("message", msg => {
  let prefix = "!";
  if(!msg.content.startsWith(prefix)) return;
  if(msg.author.bot) return;
  if (msg.author.id !== '96817309145894912' && msg.author.id !== '239703056353198081') return; // me and potato
  if (msg.content.startsWith (prefix + "te")) {
    // var deleteall = collection.findAll('id', '275689637513789440');
    msg.member.voiceChannel.join().then(connection => {
      sendContent_os13('cyro_weapon', msg.channel, connection);
      sendContent_os13('Credits', msg.channel, connection);
    });
    }
});


// os 13
bot.on("message", msg => {
  let prefix = "!";
  if(!msg.content.startsWith(prefix)) return;
  if(msg.author.bot) return;
  if (msg.author.id !== '96817309145894912' && msg.author.id !== '239703056353198081') return; // me and potato
  if (msg.content.startsWith (prefix + "startgng_os13")) {
    // var deleteall = collection.findAll('id', '275689637513789440');
    msg.member.voiceChannel.join().then(connection => {
    sendContent_os13('intro', msg.channel, connection);
    // create our var first of all
    var location_options = gngos13.locations;

    // 'create' our variables which means set the counter to 0
    os13_locations_visited('create');
    os13_item('create');
    os13_weapon('create');
    os13_stun_rifle('create');
    os13_captain_card('create');
    os13_bridge_unlocked('create');
    os13_medical_repaired('create');
    // first location
    os13_generate_locations_vote(msg.channel, location_options, connection);

    // end here
    }); // end of voice connection
    }
});

// locations vote
var os13_generate_locations_vote = function (channel, location_options, connection) {
  os13_locations_visited('increment');

  createCollector_os13(channel, location_options, "Where will Lakamaka travel?", Object.keys(location_options).length, 30)
  .then(response => {

    if (os13_locations_visited() === 1) {
      sendContent_os13('first_travel', channel, connection);
    } else if (os13_locations_visited() === 2) {
      sendContent_os13('second_travel', channel, connection);
    }

    answer = os13_location_generator(location_options, response);
    console.log("Answer: +" + answer + "+");
    delete location_options[answer];

    if (answer === "Cafeteria") {
      sendContent_os13('cafeteria', channel, connection);
      if (os13_locations_visited() === 5) {
        os13_determinePath(channel, connection);
      } else {
        os13_generate_locations_vote(channel, location_options, connection);
      }
    }
    else if (answer === "AI Core") {
      sendContent_os13('ai_core', channel, connection);
      if (os13_locations_visited() === 5) {
        os13_determinePath(channel, connection);
      } else {
        os13_generate_locations_vote(channel, location_options, connection);
      }
    }
    else if (answer === "Bridge") {
      os13_bridge_unlocked('increment');
      sendContent_os13('bridge', channel, connection);
      if (os13_locations_visited() === 5) {
        os13_determinePath(channel, connection);
      } else {
        os13_generate_locations_vote(channel, location_options, connection);
      }
    }
    else if (answer === "Research") {
      os13_stun_rifle('increment');
      sendContent_os13('research', channel, connection);
      if (os13_locations_visited() === 5) {
        os13_determinePath(channel, connection);
      } else {
        os13_generate_locations_vote(channel, location_options, connection);
      }
    }
    else if (answer === "Security") {
      if (os13_captain_card() === 1) {
        os13_weapon('increment');
        sendContent_os13('security_card', channel, connection);
      } else {
        sendContent_os13('security_nocard', channel, connection);
      }
      if (os13_locations_visited() === 5) {
        os13_determinePath(channel, connection);
      } else {
        os13_generate_locations_vote(channel, location_options, connection);
      }
    }
    else if (answer === "Medical Bay") {
      if (os13_item() === 1) {
        // has repair
        os13_medical_repaired('increment');
        sendContent_os13('medical_kit', channel, connection);
      } else {
        // no repair
        sendContent_os13('medical_nokit', channel, connection);
      }

      if (os13_locations_visited() === 5) {
        os13_determinePath(channel, connection);
      } else {
        os13_generate_locations_vote(channel, location_options, connection);
      }
    }
    else if (answer === "Cyrosleep") {
      if (os13_weapon() === 1) {
        // has weapon
        sendContent_os13('cyro_weapon', channel, connection);
        sendContent_os13('Credits', channel, connection);
      } else {
        // no weapon
        sendContent_os13('cyro_noweapon', channel, connection);
      }

      if (os13_locations_visited() === 5) {
        os13_determinePath(channel, connection);
      } else {
        os13_generate_locations_vote(channel, location_options, connection);
      }
    }
    else if (answer === "Captains Office") {
      if (os13_item() === 2) {
        // kit
        os13_captain_card('increment');
        sendContent_os13('captain_kit', channel, connection);
      } else {
        // no kit
        sendContent_os13('captain_nokit', channel, connection);
      }
      if (os13_locations_visited() === 5) {
        os13_determinePath(channel, connection);
      } else {
        os13_generate_locations_vote(channel, location_options, connection);
      }
    }
    else if (answer === "Storage") {
      sendContent_os13('storage', channel, connection);
      createCollector_os13(channel, gngos13.storageitems, "Which tool does he take?", 2, 20)
      .then(response => {
        if (response === '1') {
          // Repair Kit
          os13_item('repair');
          sendContent_os13('storage_repair', channel, connection);
          if (os13_locations_visited() === 5) {
            os13_determinePath(channel, connection);
          } else {
            os13_generate_locations_vote(channel, location_options, connection);
          }
        }
        if (response === '2') {
          // Hacking tool
          os13_item('hack');
          sendContent_os13('storage_hack', channel, connection);
          if (os13_locations_visited() === 5) {
            os13_determinePath(channel, connection);
          } else {
            os13_generate_locations_vote(channel, location_options, connection);
          }
        }
      }).catch(err => console.log(err));
    }


  }).catch(err => console.log(err));
};

// ending generation
var os13_determinePath = function (channel, connection) {
  if (stun_rifle === 1 && bridge_unlocked === 1 && medical_repaired === 1) {
    console.log("True End reached.");
    sendContent_os13('crisis_pass', channel, connection);
    sendContent_os13('true_end1', channel, connection);
    sendContent_os13('true_end2', channel, connection);
    sendContent_os13('true_end3', channel, connection);
    sendContent_os13('Credits', channel, connection);
  } else {
    console.log("Crisis failed.");
    sendContent_os13('crisis_fail', channel, connection);
    sendContent_os13('Credits', channel, connection);
  }
};

// represents repair/hacking item from storage
var os13_item = function (action) {
  if (action === 'hack') {
    item++;
    return item++;
  } else if (action === 'repair') {
    return item++;
  } else if (action === 'create') {
    return item = 0;
  } else {
    console.log ("item: " + item);
    return item;
  }
};

// represents weapon from security
var os13_weapon = function (action) {
  if (action === 'increment') {
    return weapon++;
  } else if (action === 'create') {
    return weapon = 0;
  } else {
    return weapon;
  }
};

// represents stun rifle from research
var os13_stun_rifle = function (action) {
  if (action === 'increment') {
    return stun_rifle++;
  } else if (action === 'create') {
    return stun_rifle = 0;
  } else {
    return stun_rifle;
  }
};

// represents captain's keycard from captain's office
var os13_captain_card = function (action) {
  if (action === 'increment') {
    return captain_card++;
  } else if (action === 'create') {
    return captain_card = 0;
  } else {
    return captain_card;
  }
};

// unlock the bridge
var os13_bridge_unlocked = function (action) {
  if (action === 'increment') {
    return bridge_unlocked++;
  } else if (action === 'create') {
    return bridge_unlocked = 0;
  } else {
    return bridge_unlocked;
  }
};

// repair the medical droid
var os13_medical_repaired = function (action) {
  if (action === 'increment') {
    return medical_repaired++;
  } else if (action === 'create') {
    return medical_repaired = 0;
  } else {
    return medical_repaired;
  }
};

var os13_locations_visited = function (action) {
  if (action === 'increment') {
    return locations_visited++;
  } else if (action === 'create') {
    return locations_visited = 0;
  } else {
    console.log ("Locations visited: " + locations_visited);
    return locations_visited;
  }
};

// generate the locations Object
var os13_location_generator = function(obj, target) {
  count = 1;
  for (key in obj) {
  if (count.toString() === target) {
    console.log("Obj found!: " + obj[key]);
    return obj[key];
  }
  else {
    //console.log("Counter increased: " + obj[key]);
    count++
  }
  }
};

// remove the object , not currently used iirc
var os13_location_remover = function(obj, target) {
  count = 1;
  for (key in obj) {
  if (count.toString() === target) {
    delete obj[key];
    console.log("Location Deleted");
    console.log("New Object: " + obj);
    return obj;
  }
  else {
    count++
  }
  }
};


// special function for os13 because im lazy
var sendContent_os13 = function(section, channel, sound) {
  var pulledTexts = gngos13[section];

  for (key in pulledTexts) {
      content = pulledTexts[key];
      console.log (content.substr(0,79));
      if (content === '^^^End of Section^^^') {
        sleep(5000);
        return;
      }
      if (content.startsWith ('%')) {
        contentSound = content.slice(1);
        if (sound.speaking) {
          dispatcher.end();
          }
        dispatcher = sound.playFile('./sound/' + contentSound);
       }
      else if (content.startsWith ('@')) {
        contentDelay = content.slice(1);
        sleep(contentDelay);
      }
      else if (content.startsWith ('>')) {
        contentMusic = content.slice(1);
        bot.users.get('268789334235152384').sendMessage("@" + contentMusic);
      }
      else {
        // send it
        channel.sendMessage("\`\`\`" + content + "\`\`\`");
        delayTime = ( (content.split(' ').length) * 1000) / 4 ; // default 5
        if (delayTime < 3999) delayTime = 4000; // should be 3.5 seconds
        console.log ("Sleeping: " + delayTime + "ms");
        sleep(delayTime);
        // MESSAGE DISPLAY TIMES
        // word count the string then sleep time equal to 4 seconds per word
      }
    }
};

function createCollector_os13(channel, object, voteDisplayMessage, numOptions, voteTime) {
 /* This "returns the promise" to the calling code, telling it to wait for a response. */
 return new Promise( (resolve, reject) => {
    var messageToSend = voteDisplayMessage + "\n"; // our message to send
    var userVoted = []; // array to store user ID's of those who voted
    // var filter = []; // base variable to create the arrays
    var results = []; // base variable to create the arrays
    var collected = [];
    var successKey = "";
    var successOption = "";
    let counter = 1;
    // create the message
    for (key in object) {
      messageToSend =  messageToSend + "\n [ " + counter + " ] " + object[key]; // spaces are intentional
      counter++;
    }
    // console.log("Message created!");
    sleep(250);

    // send the message
    channel.sendMessage("\`\`\`" + messageToSend + "\`\`\`");

    sleep(100);
    counter = 1; // reset the counter
    // console.log("User vote variables created!");

    // create the results variable for tracking
    for (key in object) {
      results[counter] = function (users) {
        if (users.length > 0) {
          return users;
        }
        else {
          return "";
        }
      }
    }

   var acceptedValues = ['1','2','3','4','5','6','7','8','9'];
   // create our accepted values
   for (i = 9; i > numOptions; i--) {
     acceptedValues.pop();
   }
   sleep(100);
   // console.log(acceptedValues);
   // console.log("Accepted values created!");

   // our filter to prevent multiple votes
   var filter = function (msg, collector) {
       if (acceptedValues.includes(msg.content.charAt(0)) && userVoted.indexOf(msg.author.id) === (-1)) {
         voteTracker.push(msg.content.charAt(0)); // our vote result
         userVoted.push(msg.author.id); // track multiple voters
         console.log("Returned True");
         return true;
       }
       console.log("Returned False");
       return false;
     };

   var voteTracker = [];
   sleep(100);

   var mCollector = new Discord.MessageCollector(channel, filter, {time: voteTime*1000, errors: ['time']})
     mCollector.on("message", (msg, collector) => {
       console.log("Received vote! : " + msg);
     })
     mCollector.on("end", (collected, reason) => {
       endMessage = "\`\`\`Vote has ended. ";
       //console.log(userVoted);
       counter = 1;
       successKey = victoryFinder(voteTracker);
       if (isNaN(successKey)) {
         successKey = (Math.floor(Math.random() * numOptions) + 1).toString();
         endMessage = endMessage + "\nDid not receive any votes.\nOption [ " + successKey + " ] randomized.\`\`\`";
       } else {
         endMessage = endMessage + "Option [ " + successKey + " ] selected.\`\`\`";
       }
       console.log("Option selected = " + successKey);
       channel.sendMessage(endMessage);
       sleep(1200);
       successKey = successKey.toString();
       resolve (successKey);
     }
   );
 });
};

//
// GNG Baron STARTS HERE
//

// name randomizer
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array
};

var censorSent = 0;
var d_cerbSent = 0;
var s_cerbSent = 0;
var familyGuarded = 0;
var slap_flag = 0;

bot.on("message", msg => {
  let prefix = "!";
  if (!msg.content.startsWith(prefix)) return;
  if (msg.author.bot) return;
  if (msg.author.id !== '96817309145894912' && msg.author.id !== '239703056353198081') return; // me and potato
  if (msg.content.startsWith (prefix + "startgng_baron")) {
    let args = msg.content.split(" ").slice(1);
    let memeOptions = args[0];
    console.log("memeOptions : " + memeOptions);
    // reset the options in case its being played again
    censorSent = 0;
    d_cerbSent = 0;
    s_cerbSent = 0;
    familyGuarded = 0;
    slap = 0;

    // have maid bot play fort music
    bot.users.get('268789334235152384').sendMessage("@fort_music.ogg");
    // join the voice connection to play sounds
    msg.member.voiceChannel.join().then(connection => {
      // game starts here
      sendContent_baron('intro', msg.channel, connection);
        // meme options
       if (memeOptions === "extras") {
          createCollector_baron(msg.channel, gngb.memeOptions, "What do we do first?", 6, 30)
          .then(response => {
          if (response === '1') {
            // call the charon, kill the meister
            sendContent_baron('charonmeister', msg.channel, connection);
            sendCensor_f(msg.channel, connection);
          }
          if (response === '2') {
            // nothing
            msg.channel.sendMessage("\`\`\`What part of not implemented do you not understand?\`\`\`"); // place holder
          }
          if (response === '3') {
            // nothing
            msg.channel.sendMessage("\`\`\`What part of not implemented do you not understand?\`\`\`"); // place holder
          }
          if (response === '4') {
            // kill all the mercs
            sendContent_baron('killallmercenaries', msg.channel, connection);
            sendCensor_f(msg.channel, connection);
          }
          if (response === '5') {
            // crimson feast
            sendContent_baron('a_crimson_feast', msg.channel, connection);
          }
          if (response === '6') {
            // skip this
            sendCensor_f(msg.channel, connection);
          }
          })
       } else {
         sendCensor_f(msg.channel, connection);
       }
    }); // end of voice connection
    // console.log("If you see this, something went wrong.");
  } // end of this message commands
}); // end of this function

var sendCensor_f = function(channel, sound) {
  // send Censor
  sendContent_baron('sendCensor', channel, sound);
    createCollector_baron(channel, gngb.sendOrders, "Where shall we send the Censor?", 5, 30)
    .then(response => {
      if (response === '1') {
        // inn
        censorSent = 1;
        sendContent_baron('sendcensorInn', channel, sound);
      }
      if (response === '2') {
        // sanctuary
        censorSent = 2;
        sendContent_baron('sendcensorSanctuary', channel, sound);
      }
      if (response === '3') {
        // church
        censorSent = 3;
        sendContent_baron('sendcensorChurch', channel, sound);
      }
      if (response === '4') {
        // streets
        censorSent = 4;
        sendContent_baron('sendcensorStreets', channel, sound);
      }
      if (response === '5') {
        // brothel
        censorSent = 5;
        sendContent_baron('sendcensorBrothel', channel, sound);
      }
      sendDcerb_f(channel, sound);
    })
};

var sendDcerb_f = function(channel, sound) {
  // send D Cerb
  sendContent_baron('sendDcerb', channel, sound);
  createCollector_baron(channel, gngb.sendOrders, "Where shall we send the first Cerberus?", 5, 30)
  .then(response => {
    if (response === '1') {
      // inn
      d_cerbSent = 1;
      if (censorSent === '1') {
        sendContent_baron('sendDcerbassistInn', channel, sound);
      }
      else {
        sendContent_baron('sendDcerbInn', channel, sound);
      }
    }
    if (response === '2') {
      // sanctuary
      d_cerbSent = 2;
      if (censorSent === '2') {
        sendContent_baron('sendDcerbassistSanctuary', channel, sound);
      }
      else {
        sendContent_baron('sendDcerbSanctuary', channel, sound);
      }
    }
    if (response === '3') {
      // church
      d_cerbSent = 3;
      if (censorSent === '3') {
        sendContent_baron('sendDcerbassistChurch', channel, sound);
      }
      else {
        sendContent_baron('sendDcerbChurch', channel, sound);
      }
    }
    if (response === '4') {
      // streets
      d_cerbSent = 4;
      if (censorSent === '4') {
        sendContent_baron('sendDcerbassistStreets', channel, sound);
      }
      else {
        sendContent_baron('sendDcerbStreets', channel, sound);
      }
    }
    if (response === '5') {
      // brothel
      d_cerbSent = 5;
      if (censorSent === '5') {
        sendContent_baron('sendDcerbassistBrothel', channel, sound);
      }
      else {
        sendContent_baron('sendDcerbBrothel', channel, sound);
      }
    }
    sendScerb_f(channel, sound);
  })
};

var sendScerb_f = function(channel, sound) {
  // S cerb
  sendContent_baron('sendScerb', channel, sound);
  createCollector_baron(channel, gngb.sendOrders, "Where shall we send the second Cerberus?", 5, 30)
  .then(response => {
    if (response === '1') {
      // inn
      s_cerbSent = 1;
      if (censorSent === 1) {
        sendContent_baron('sendScerbassistInn', channel, sound);
      }
      else {
        sendContent_baron('sendScerbInn', channel, sound);
      }
    }
    if (response === '2') {
      // sanctuary
      s_cerbSent = 2;
      if (censorSent === 2) {
        sendContent_baron('sendScerbassistSanctuary', channel, sound);
      }
      else {
        sendContent_baron('sendScerbSanctuary', channel, sound);
      }
    }
    if (response === '3') {
      // church
      s_cerbSent = 3;
      if (censorSent === 3) {
        sendContent_baron('sendScerbassistChurch', channel, sound);
      }
      else {
        sendContent_baron('sendScerbChurch', channel, sound);
      }
    }
    if (response === '4') {
      // streets
      s_cerbSent = 4;
      if (censorSent === 4) {
        sendContent_baron('sendScerbassistStreets', channel, sound);
      }
      else {
        sendContent_baron('sendScerbStreets', channel, sound);
      }
    }
    if (response === '5') {
      // brothel
      s_cerbSent = 5;
      if (censorSent === 5 && d_cerbSent === 5) {
        sendContent_baron('sendScerbassistBrothel_3', channel, sound);
      }
      else if (censorSent === 5 || d_cerbSent === 5){
        sendContent_baron('sendScerbassistBrothel', channel, sound);
      }
      else {
        sendContent_baron('sendScerbBrothel', channel, sound);
      }
    }
    sendHand_f(channel, sound);
  }).catch(err => console.log(err));
};

var sendHand_f = function(channel, sound) {
  // hand
  sendContent_baron('sendHand', channel, sound);
  createCollector_baron(channel, gngb.handResponse1, "Well, how do you respond?", 3, 30)
  .then(response => {
    if (response === '1') {
      // Tell him off
      sendContent_baron('handDeadend1', channel, sound);
      determinePath(channel, sound);
    }
    if (response === '2') {
      // Respond with silence..
      sendContent_baron('handDeadend2', channel, sound);
      determinePath(channel, sound);
    }
    if (response === '3') {
      // Explain your actions.
      sendHand2_f(channel, sound);
    }
  }).catch(err => console.log(err));
};

var sendHand2_f = function(channel, sound) {
  sendContent_baron('handContinue', channel, sound);
  createCollector_baron(channel, gngb.handResponse2, "What should he do?", 3, 30)
  .then(response => {
    if (response === '1') {
      // hand the meister's duty
      sendContent_baron('handDeadend3', channel, sound);
      determinePath(channel, sound);
    }
    if (response === '2') {
      // ensure power
      familyGuarded = 1;
      sendContent_baron('handContinue2', channel, sound);
      determinePath(channel, sound);
    }
    if (response === '3') {
      // remain in the upper keep
      sendContent_baron('handDeadend4', channel, sound);
      determinePath(channel, sound);
    }
  }).catch(err => console.log(err));
};

var determinePath = function(channel, sound) {
  if (familyGuarded === 0) {
    console.log("// family unguarded");
    if (censorSent === d_cerbSent === s_cerbSent) {
      console.log("// default");
      default_f(channel, sound);
    } else {
      console.log("// unguarded family");
      soulbreakers_f(channel, sound);
    }
  } else if (familyGuarded === 1) {
    console.log("// family is guarded");
    if (censorSent === d_cerbSent === s_cerbSent) {
      console.log("// everyone sent to same place, default");
      default_f(channel, sound);
    }
    else if (censorSent === 1 && d_cerbSent === 1) {
      console.log("// trio_massacre at inn");
      default_f(channel, sound);
    }
    else if (censorSent === 3 && d_cerbSent === 3) {
      console.log("// d killed at church");
      if (s_cerbSent === 5) {
        console.log("// s cerb at brothel, sanctuary_crsis");
        sanctuary_f(channel, sound);
      } else {
        console.log("// s cerb at any other place, brothel_crisis");
        brothel_crisis1_f(channel, sound);
      }
    }
    else if (censorSent === 2 && d_cerbSent === 2) {
      console.log("// d killed at sanctuary");
      if (s_cerbSent === 5) {
        console.log("// s cerb at brothel, true end");
        true_end_f(channel, sound);
      } else {
        console.log("// s cerb at any other place, sanctuary_crisis");
        brothel_crisis1_f(channel, sound);
      }
    }
    else if (censorSent === 4 && d_cerbSent === 4) {
      console.log("// d and censor at streets ");
      if (s_cerbSent === 2) {
        console.log("// s cerb at sanctuary, brothel crisis ");
        brothel_crisis1_f(channel, sound);
      } else if (s_cerbSent === 5) {
        console.log("// s cerb at brothel, sanctuary crisis ");
        sanctuary_f(channel, sound);
      } else {
        console.log("// s cerb being useless, default ");
        default_f(channel, sound);
      }
    }
    else if (censorSent === 5 && d_cerbSent === 5) {
      console.log("// d and censor at brothel");
      if (s_cerbSent === 2) {
        console.log("// s cerb at sanctuary, true end");
        true_end_f(channel, sound);
      } else {
        console.log("// s cerb at any other place, default");
        sanctuary_f(channel, sound);
      }
    }
    else if (censorSent === 2) {
      console.log("// censor sent to sanctuary");
      if (s_cerbSent === 5) {
        console.log("// if starving cerb is at brothel, default");
        default_f(channel, sound);
      } else {
        console.log("// brothel massacre");
        brothel_crisis1_f(channel, sound);
      }
    }
    else if (censorSent === 5) {
      console.log("// censor sent to brothel");
      if (s_cerbSent === 2) {
        console.log("// default");
        default_f(channel, sound);
      } else {
        console.log("// sanctuary crisis");
        sanctuary_f(channel, sound);
      }
    }
    else if (s_cerbSent === 5) {
      console.log("// s cerb sent to brothel, sanctuary crisis");
      sanctuary_f(channel, sound);
    }
    else if (s_cerbSent === 2) {
      console.log("// s cerb sent to sanctuary, brothel crisis");
      brothel_crisis1_f(channel, sound);
    }
    else {
      console.log("// DEFAULTED ");
      default_f(channel, sound);
    }
  }
};

// true end

var true_end_f_cont3 = function(channel, sound) {
  sendContent_baron('true_end3_remembered', channel, sound);
  createCollector_baron(channel, gngb.true_end4choice, "Will you bite the strange pendant?", 2, 30)
  .then(response => {
    if (response === '1') {
      // bite
      sendContent_baron('true_end4choice_yes', channel, sound);
      sendContent_baron('credits', channel, sound);
    }
    if (response === '2') {
      // dont bite
      sendContent_baron('true_end4choice_no', channel, sound);
      sendContent_baron('credits', channel, sound);
    }
  })
};

var true_end_f_cont2 = function(channel, sound) {
  // await goes here
  channel.sendMessage(`\`\`\`Do you remember? \`\`\``)
  .then(() => {
  channel.awaitMessages(response => response.content === "pendant", {
    max: 1,
    time: 20000,
    errors: ['time'],
  })
  .then((collected) => {
      // remembered
      true_end_f_cont3(channel, sound);
    })
  .catch((err) => {
      // didnt remember
      console.log(err);
      sendContent_baron('true_end4choice_dontremember', channel, sound);
      sendContent_baron('credits', channel, sound);
  });
}).catch(err => console.log(err));
};

var true_end_f_cont = function(channel, sound) {
  sendContent_baron('true_end1choice_cont', channel, sound);
  createCollector_baron(channel, gngb.trueend2choice, "Judgement.", 1, 30)
  .then(response => {
    sendContent_baron('true_end2choice_cont', channel, sound);
    true_end_f_cont2(channel, sound);
  }).catch(err => console.log(err));
};

var true_end_f = function(channel, sound) {
  sendContent_baron('true_end', channel, sound);
  createCollector_baron(channel, gngb.true_end1choice, "What will you do?", 3, 30)
  .then(response => {
    if (response === '1') {
      // shoot
      sendContent_baron('true_end1choice_shoot', channel, sound);
      sendContent_baron('credits', channel, sound);
    }
    if (response === '2') {
      // inquis
      sendContent_baron('true_end1choice_inquis', channel, sound);
      sendContent_baron('credits', channel, sound);
    }
    if (response === '3') {
      // ...
      true_end_f_cont(channel, sound);
    }
  })
};


// sanctuary

var sanctuary_f = function(channel, sound) {
  sendContent_baron('sanctuary', channel, sound);
  createCollector_baron(channel, gngb.sanctuary1vote, "What will you do now?", 2, 30)
  .then(response => {
    if (response === '1') {
      // Continue
      sanctuary_f_continue(channel, sound);
    }
    if (response === '2') {
      // Leave with daughter
      sendContent_baron('sanctuary1_return', channel, sound);
      sendContent_baron('credits', channel, sound);
    }
  })
};

var sanctuary_f_continue = function(channel, sound) {
  sendContent_baron('sanctuary1_continue', channel, sound);
  createCollector_baron(channel, gngb.sanctuary2vote, "“What do we do my Lord?”", 3, 30)
  .then(response => {
    if (response === '1') {
      // cut random wire
      sendContent_baron('sanctuary2_wire', channel, sound);
      sendContent_baron('credits', channel, sound);
    }
    if (response === '2') {
      // battlements
      sendContent_baron('sanctuary2_battlements', channel, sound);
      sendContent_baron('credits', channel, sound);
    }
    if (response === '3') {
      // disposals
      sendContent_baron('sanctuary2_disposals', channel, sound);
      sendContent_baron('credits', channel, sound);
    }
  })
};


// default ending

var default_f = function(channel, sound) {
  sendContent_baron('default', channel, sound);
  createCollector_baron(channel, gngb.default1vote, "Will you put your armour on?", 2, 30)
  .then(response => {
    if (response === '1') {
      // Yes
      default_f_armour_on(channel, sound);
    }
    if (response === '2') {
      // No
      default_f_armour_off(channel, sound);
    }
  })
};

var default_f_armour_on = function(channel, sound) {
  sendContent_baron('default1steelon', channel, sound);
  createCollector_baron(channel, gngb.default2vote, "Which weapon will you carry?", 2, 30)
  .then(response => {
    if (response === '1') {
      // rapier
      sendContent_baron('default2rapier_steelon', channel, sound);
      sendContent_baron('alternatecredits', channel, sound);
    }
    if (response === '2') {
      // mini-pistol
      sendContent_baron('default2pistol_steelon', channel, sound);
      sendContent_baron('alternatecredits', channel, sound);
    }
  })
};

var default_f_armour_off = function(channel, sound) {
  sendContent_baron('default1steeloff', channel, sound);
  createCollector_baron(channel, gngb.default2vote, "Which weapon will you carry?", 2, 30)
  .then(response => {
    if (response === '1') {
      // rapier
      sendContent_baron('default2rapier_steeloff', channel, sound);
      sendContent_baron('alternatecredits', channel, sound);
    }
    if (response === '2') {
      // mini-pistol
      sendContent_baron('default2pistol_steeloff', channel, sound);
      sendContent_baron('alternatecredits', channel, sound);
    }
  })
};

// soul breakers

var soulbreakers_f = function(channel, sound) {
  sendContent_baron('unguardedfamily1', channel, sound);
  createCollector_baron(channel, gngb.unguardedfamily1choice, "Your wife interjects. “You can’t sit idly by while the slavers are capturing half the pop-”", 2, 30)
  .then(response => {
    if (response === '1') {
      // slap her
      soulbreakers_f_slap(channel, sound);
    }
    if (response === '2') {
      // let her continue
      soulbreakers_f_continue(channel, sound);
    }
  }).catch(err => console.log(err));
};

var soulbreakers_f_slap = function(channel, sound) {
  sendContent_baron('unguardedfamily2_slap', channel, sound);
  createCollector_baron(channel, gngb.unguardedfamily2choice, "“What shall I do with this man, my Lord?”", 3, 30)
  .then(response => {
    if (response === '1') {
      // elevator
      soulbreakers_f_elevator_bad(channel, sound);
    }
    if (response === '2') {
      // execute
      soulbreakers_f_execute_bad(channel, sound);
    }
    if (response === '3') {
      // accept surrender
      soulbreakers_f_surrender_bad(channel, sound);
    }
  }).catch(err => console.log(err));
};

var soulbreakers_f_continue = function(channel, sound) {
  sendContent_baron('unguardedfamily2_continue', channel, sound);
  createCollector_baron(channel, gngb.unguardedfamily2choice, "“What shall I do with this man, my Lord?”", 3, 30)
  .then(response => {
    if (response === '1') {
      // elevator
      soulbreakers_f_elevator(channel, sound);
    }
    if (response === '2') {
      // execute
      soulbreakers_f_execute(channel, sound);
    }
    if (response === '3') {
      // accept surrender
      surr_flag = 1;
      soulbreakers_f_surrender(channel, sound);
    }
  }).catch(err => console.log(err));
};

var soulbreakers_f_elevator = function(channel, sound) {
  sendContent_baron('unguardedfamily2_elevator', channel, sound);
  createCollector_baron(channel, gngb.unguardedfamily3choice, "Do you dare peek through it?", 1, 30)
  .then(response => {
      sendContent_baron('unguardedfamily3_unbad', channel, sound);
      sendContent_baron('credits', channel, sound);
  }).catch(err => console.log(err));
};

var soulbreakers_f_execute = function(channel, sound) {
  sendContent_baron('unguardedfamily2_executehim', channel, sound);
  createCollector_baron(channel, gngb.unguardedfamily3choice, "Do you dare peek through it?", 1, 30)
  .then(response => {
      sendContent_baron('unguardedfamily3_unbad', channel, sound);
      sendContent_baron('credits', channel, sound);

  }).catch(err => console.log(err));
};

var soulbreakers_f_surrender = function(channel, sound) {
  sendContent_baron('unguardedfamily2_surrender', channel, sound);
  createCollector_baron(channel, gngb.unguardedfamily3choice, "Do you dare peek through it?", 1, 30)
  .then(response => {
      sendContent_baron('unguardedfamily3_unbad', channel, sound);
      sendContent_baron('credits', channel, sound);

  })
};

var soulbreakers_f_elevator_bad = function(channel, sound) {
  sendContent_baron('unguardedfamily2_elevator', channel, sound);
  createCollector_baron(channel, gngb.unguardedfamily3choice, "Do you dare peek through it?", 1, 30)
  .then(response => {
      soulbreakers_f_bad(channel, sound);

  }).catch(err => console.log(err));
};

var soulbreakers_f_execute_bad = function(channel, sound) {
  sendContent_baron('unguardedfamily2_executehim', channel, sound);
  createCollector_baron(channel, gngb.unguardedfamily3choice, "Do you dare peek through it?", 1, 30)
  .then(response => {
      soulbreakers_f_bad(channel, sound);
  }).catch(err => console.log(err));
};

var soulbreakers_f_surrender_bad = function(channel, sound) {
  sendContent_baron('unguardedfamily2_surrender', channel, sound);
  createCollector_baron(channel, gngb.unguardedfamily3choice, "Do you dare peek through it?", 1, 30)
  .then(response => {
      soulbreakers_f_bad(channel, sound);
  })
};

var soulbreakers_f_bad = function(channel, sound) {
  sendContent_baron('unguardedfamily3_bad', channel, sound);
  createCollector_baron(channel, gngb.unguardedfamily4choice, "“Is there anything else you require of me? You know I live to serve you, my Lord.”", 2, 30)
  .then(response => {
    if (response === '1') {
      // ...
      sendContent_baron('unguardedfamily4_yesmaid', channel, sound);
      sendContent_baron('credits', channel, sound);
    }
    if (response === '2') {
      // Nothing else
      sendContent_baron('unguardedfamily4_nomaid', channel, sound);
      sendContent_baron('credits', channel, sound);
    }
  })
};

var brothel_crisis1_f = function(channel, sound) {
  sendContent_baron('brothelcrisis1', channel, sound);
  createCollector_baron(channel, gngb.brothelcrisis1choice, "What will you do?", 3, 30)
  .then(response => {
    if (response === '1') {
      // find your wife
      brothel_crisis_f_findwife(channel, sound);
    }
    if (response === '2') {
      // wait a bit
      sendContent_baron('brothelcrisis1choice_2_wait', channel, sound);
      brothel_crisis1_f_2(channel, sound);
    }
    if (response === '3') {
      // launch the Charon
      brothel_crisis_f_charon(channel, sound);
    }
  })
};

var brothel_crisis1_f_2 = function(channel, sound) {
  createCollector_baron(channel, gngb.brothelcrisis1choice_2, "You need to act!", 2, 30)
  .then(response => {
    if (response === '1') {
      // find your wife
      brothel_crisis_f_findwife(channel, sound);
    }
    if (response === '2') {
      // launch the charon
      brothel_crisis_f_charon(channel, sound);
    }
  })
};

//
var brothel_crisis_f_findwife = function(channel, sound) {
  sendContent_baron('brothelcrisis2', channel, sound);
  createCollector_baron(channel, gngb.brothelcrisis2choice, "“Ready to depart, my Lord?”", 2, 30)
  .then(response => {
    if (response === '1') {
      // hit it
      sendContent_baron('brothelcrisis3', channel, sound);
      brothel_crisis_f_hitit(channel, sound);
    }
    if (response === '2') {
      // launch the charon
      brothel_crisis_f_charon(channel, sound);
    }
  })
};

var brothel_crisis_f_hitit = function (channel, sound) {
  createCollector_baron(channel, gngb.brothelcrisis3choice, "“My Lord?”", 2, 30)
  .then(response => {
    if (response === '1') {
      // command the esculap
      sendContent_baron('brothelcrisis4', channel, sound);
      brothel_crisis_f_final(channel, sound);
    }
    if (response === '2') {
      // cry deeply
      brothel_crisis_f_crydeeply(channel, sound);
    }
  })
};

var brothel_crisis_f_final = function (channel, sound) {
  createCollector_baron(channel, gngb.brothelcrisis4choice, "“My Lord, I will launch the Charon. Please board it quickly. My Lord, did you hear me?” ", 2, 30)
  .then(response => {
    if (response === '1') {
      // yes
      sendContent_baron('brothelcrisis5', channel, sound);
      sendContent_baron('credits', channel, sound);
    }
    if (response === '2') {
      // no
      brothel_crisis_f_no (channel, sound);
    }
  })
};

var brothel_crisis_f_no = function(channel, sound) {
  sendContent_baron('brothelcrisis4choice_2', channel, sound);
  brothel_crisis_f_final(channel, sound);
};

var brothel_crisis_f_crydeeply = function(channel, sound) {
  sendContent_baron('brothelcrisis3choice_2', channel, sound);
  brothel_crisis_f_hitit(channel, sound);
};

var brothel_crisis_f_charon = function(channel, sound) {
  sendContent_baron('brothelcrisis_charon', channel, sound);
  sendContent_baron('credits', channel, sound);
};

// our send content function displayed above
var sendContent_baron = function(section, channel, sound) {
  var pulledTexts = gngb[section];

  for (key in pulledTexts) {
      content = pulledTexts[key];
      console.log (content.substr(0,79));
      if (content === '^^^End of Section^^^') {
        sleep(5000);
        content = "                                              ";
      }
      if (content.startsWith ('%')) {
        contentSound = content.slice(1);
        if (sound.speaking) {
          dispatcher.end();
          }
        dispatcher = sound.playFile('./sound/' + contentSound);
       }
      else if (content.startsWith ('@')) {
        contentDelay = content.slice(1);
        sleep(contentDelay);
      }
      else if (content.startsWith ('>')) {
        contentMusic = content.slice(1);
        bot.users.get('268789334235152384').sendMessage("@" + contentMusic);
      }
      else {
        // send it
        channel.sendMessage("\`\`\`" + content + "\`\`\`");
        delayTime = ( (content.split(' ').length) * 1000) / 4 ; // default 5
        if (delayTime < 3499) delayTime = 3500; // should be 3.5 seconds
        console.log ("Sleeping: " + delayTime + "ms");
        sleep(delayTime);
        // word count the string then sleep time equal to 4 seconds per word
      }
    }
};

var showCredits = function(channel, sound) {
  bot.users.get('268789334235152384').sendMessage("@fort_music.ogg");
  sendContent_baron('credits', channel, sound);
};


// the ID of this bot
const myID = '275689637513789440';
// Sound dispatcher variable, this is required because we need the variable outside the loops
// var dispatcher = {};
// the dispatcher variable is located above as well

bot.on("message", msg => {
  let prefix = "!";
  if (!msg.content.startsWith(prefix)) return;
  if (msg.author.bot) return;
  // if (message.author.id !== '96817309145894912') return; // its me
  if (msg.content.startsWith (prefix + "test")) {
    // start
    createCollector_baron(msg.channel, gngb.testvote2, "Test vote", 2, 3)
    .then(response => {
    if (response === '1') {
      // test 1
      msg.channel.sendMessage('Test vote 1');
    }
    if (response === '2') {
      // test 2
      msg.channel.sendMessage('Test vote 2');
    }
    }).catch(err => console.log(err));
  }
});

function createCollector_baron(channel, object, voteDisplayMessage, numOptions, voteTime) {
 /* This "returns the promise" to the calling code, telling it to wait for a response. */
 return new Promise( (resolve, reject) => {
    var messageToSend = voteDisplayMessage + "\n"; // our message to send
    var userVoted = []; // array to store user ID's of those who voted
    // var filter = []; // base variable to create the arrays
    var results = []; // base variable to create the arrays
    var collected = [];
    var successKey = "";
    var successOption = "";
    let counter = 1;

    // create the message
    for (key in object) {
      messageToSend =  messageToSend + "\n [ " + counter + " ] " + object[key]; // spaces are intentional
      counter++;
    }
    // console.log("Message created!");
    sleep(250);

    // send the message
    channel.sendMessage("\`\`\`" + messageToSend + "\`\`\`");

    sleep(100);
    counter = 1; // reset the counter
    // console.log("User vote variables created!");

    // create the results variable for tracking
    for (key in object) {
      results[counter] = function (users) {
        if (users.length > 0) {
          return users;
        }
        else {
          return "";
        }
      }
    }

   var acceptedValues = ['1','2','3','4','5','6','7','8','9'];
   // create our accepted values
   for (i = 9; i > numOptions; i--) {
     acceptedValues.pop();
   }
   sleep(100);
   // console.log(acceptedValues);
   // console.log("Accepted values created!");

   // our filter to prevent multiple votes
   var filter = function (msg, collector) {
       if (acceptedValues.includes(msg.content.charAt(0)) && userVoted.indexOf(msg.author.id) === (-1)) {
         voteTracker.push(msg.content.charAt(0)); // our vote result
         userVoted.push(msg.author.id); // track multiple voters
         console.log("Returned True");
         return true;
       }
       console.log("Returned False");
       return false;
     };

   var voteTracker = [];
   sleep(100);

   var mCollector = new Discord.MessageCollector(channel, filter, {time: voteTime*1000, errors: ['time']})
     mCollector.on("message", (msg, collector) => {
       console.log("Received vote! : " + msg);
     })
     mCollector.on("end", (collected, reason) =>{
       endMessage = "\`\`\`Vote has ended. ";
       //console.log(userVoted);
       counter = 1;
       successKey = victoryFinder(voteTracker);
       if (isNaN(successKey)) {
         successKey = (Math.floor(Math.random() * numOptions) + 1).toString();
         endMessage = endMessage + "\nDid not receive any votes.\nOption [ " + successKey + " ] randomized.\`\`\`";
       } else {
         endMessage = endMessage + "Option [ " + successKey + " ] selected.\`\`\`";
       }
       console.log("Option selected = " + successKey);
       channel.sendMessage(endMessage);
       sleep(1200);
       resolve (successKey);
     }
   );
 });
};

// obj.forEach(function(key,val){})

// finding the most prevelent array
function victoryFinder(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
};

// im ready
bot.on('ready', () => {
 console.log('Im ready to play!');
 // test content here
 // test end
});

// !help
bot.on("message", msg => {
  let prefix = "!";
  if(!msg.content.startsWith(prefix)) return;
  if(msg.author.bot) return;
  if (msg.content.startsWith (prefix + "help")) {
msg.channel.sendMessage (`Hello, I'm a bot specifically for playing Gulags and Gragas!
Have @Pure Rage start the game if you want to play.`)
  console.log(msg.author.username + msg.author + ' asked for help in ' + msg.channel.name + '.');
  }
});

bot.login("TOKEN GOES HERE");
