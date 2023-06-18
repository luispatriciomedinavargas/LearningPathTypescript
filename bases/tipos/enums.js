"use strict";
(() => {
    //the idea of enums is that you can have a sense semantic to set values
    // enum AudioLeve{
    //     min,     // here we have value 0
    //     medium,  // here we have value 1
    //     max,     // here we have value 2
    // }
    let AudioLeve;
    (function (AudioLeve) {
        AudioLeve[AudioLeve["min"] = 1] = "min";
        AudioLeve[AudioLeve["medium"] = 2] = "medium";
        AudioLeve[AudioLeve["max"] = 10] = "max";
    })(AudioLeve || (AudioLeve = {}));
    let currentAudio = AudioLeve.medium;
    console.log(currentAudio);
})();
