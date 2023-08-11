(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ) {
            console.log("Constructor Avenger llamado")
        }

        //when a method has protected that means you can access from a class that extends from their parent.
        //but if it has private you CAN NOT ACCESS
        //that is the diference
        protected getFullName() {
            return `${this.name} ${this.realName}`
        }



    }

    class Xmedn extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super(name, realName)
            console.log("Constructor xmen llamado")
        }
        //here
        getFullNameDesdeXmen() {
            console.log(super.getFullName())
        }


        //a get always has return something.
        get fullnameWithOneGet() {
            return `${this.name} - ${this.realName}`;
        }
        //also does not retunr anything.
        //
        set fullNameWithOneSet(name: string) {
            if(name.length < 3 ){
                throw new Error("the name must be 3 or more letters")
            }
            this.name = name;
        }

    }


    const wolverine = new Xmedn("Wolveryone", "Logan", true);

    // console.log(wolverine);
    // wolverine.getFullNameDesdeXmen;
    //the gets looks like a property BUT IT IS NOT!
    // console.log(wolverine.fullnameWithOneGet)
    // wolverine.fullNameWithOneSet= "Patricio";
    // console.log(wolverine.getFullNameDesdeXmen);
})