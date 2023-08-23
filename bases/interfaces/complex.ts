(() => {


    interface Client {
        name: string;
        age: number,
        //this is a interface with 1 level because it has another object insade.
        // address?:{
        //     id:number,
        //     zip:string,
        //     city:string
        // }
        address: Address,
        getFullAddress(id: string): void;
    }
    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const cliente: Client = {
        name: "Patricio",
        age: 25,
        address: {
            id: 125,
            zip: "KY2 SUD",
            city: "Ottawa"
        },
        getFullAddress(id:string){
            return this.address.zip
        }
    }


    const client2: Client = {
        name: "Melisa",
        age: 30,
        address: {
            id: 40,
            zip: "none",
            city: "test"
        },
        getFullAddress(id:string){
            return this.address.city
        }

    }
})