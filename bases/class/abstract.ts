(() => {
    abstract class Mutant {
        constructor(
            public name: string,
            public realName: string,
        ) {

        }
    }

    class Xmen extends Mutant{

        saveWorld(){
            return "The world is save"
        }
    }
    class Villian extends Mutant{

        destroyWorld(){
            return "The word was destroyed"
        }

    }



    const wolverine: Xmen = new Xmen("Wolveryine", "Logan");
    const magneto: Villian = new Villian("Magneto", "Magnus");


    // console.log(wolverine.saveWorld());
    // console.log(magneto.destroyWorld());

    const printName=(character:Mutant)=>{

        console.log(character.realName)

    }

    printName(wolverine);
    printName(magneto);
})