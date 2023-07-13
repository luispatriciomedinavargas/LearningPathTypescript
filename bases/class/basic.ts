(() => {

    class Avenger {

        // private name: string;
        // team: string; //by default is public 
        // public team2: string; //also you can define like that
        // public realName?:string; //with ? you make opcional the property 
        static avgAge: number = 35;
        static getAvgAge(){
            return this.name;
        }

        //this is a long way to assing
        //         constructor(name:string,team:string,realName?:string) {
        //so you recibe the value that comes in the arguments and
        //assing it to the property
        //  your properties  || you arguments
        //             this.name = name;
        //             this.team = team;
        //         this.realName = realName;
        //this is a short way to assing
        //with the modificador private also you create the property and make the assing in one way
        constructor(
            private name: string,
            public team: string,
            public realName?: string,
            avgAge: number = 100

        ) {

            Avenger.avgAge = avgAge
        }


        //by defaul this method is public and return a string
        bio() {
            return `${this.name} (${this.team})`;
        }
        //is the same that we had
        public bio2() {
            return `${this.name} (${this.team})`;
        }

                //with private method you can not acces outside the class
                private bio3() {
                    return `${this.name} (${this.team})`;
                }
    }



    const antman: Avenger = new Avenger("Atman", "Capitan", "scoot Lang");

    console.log(antman);

    //for acces static properties you need to MAKE REFERENCE TO CLASS, DOESNT VARIABLE 
    // console.log(Avenger.avgAge)
    // console.log(Avenger.getAvgAge())

    // console.log(antman.bio())
    // console.log(antman.bio3()) here we have an error
})  