let output;
let chooseCharacter = prompt("Please choose a character: Kris, Susie, or Ralsei");

switch(chooseCharacter) {
    case "Kris":
        output = "Ahh the main character I see, You'll do great with this one.";
        break;

    case "Susie":
        output = "A little reckless huh? That's alright. We all have that rebellious stage.";
        break;
        
    case "Ralsei":
        output = "Oh the Prince of Darkness?  What an ominious future you have ahead.";
        break;
    default:
        output = "Hmm... not much of a bandwagoner huh? Well your uniqueness is valued here."
}