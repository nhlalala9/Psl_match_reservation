// Chiefs
import Chiefs from "./src/images/flags/chiefs.png";
// Amazulu
import Amazulu from "./src/images/flags/amazulu.png";
// Sundowns 
import Sundowns from "./src/images/flags/sundowns.png";
// Pirates
import Pirates from "./src/images/flags/pirates.png";
// Chippa
import Chippa from "./src/images/flags/chippa.png";
// Golden Arrows
import Arrows from "./src/images/flags/Lamontville_Golden_Arrows_logo.png";
// Maritzburg
import Maritzburg from "./src/images/flags/maritzburg-united.png";
// Marumo 
import Marumo from "./src/images/flags/Marumo_gallats_FC.png";
// Cape Town City
import CapeTownCity from "./src/images/flags/cape town.png";
// Swallows
import Swallows from "./src/images/flags/Moroka_Swallows_F.C.png";
// Richards Bay
import Richards from "./src/images/flags/Richards_Bay_F.C.png";
// Sekhukhune
import Sekhukhune from "./src/images/flags/sekhukhune.png";
// Stellenbosch
import Stellenbosch from "./src/images/flags/StellenboschFC.png";
// Supersport
import Supersports from "./src/images/flags/supersport.png";
// TS galaxy
import TSGalaxy from "./src/images/flags/TS_Galaxy.png";
// Royal AM
import RoyalAM from "./src/images/flags/Royal_AM_F.C.png";


export default function Flags(teams) {
    switch (teams) {
        case "Chiefs":
            return Chiefs;
        case "Amazulu":
            return Amazulu;
        case "Sundowns":
            return Sundowns;
        case "Pirates":
            return Pirates;
        case "Chippa":
            return Chippa;
        

    }

} 