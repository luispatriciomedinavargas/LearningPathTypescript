(()=>{
    

    type Avenger= {
        name:string,
        weapon:string,
    }


    const iroman: Avenger={
        name: "Tony Startk",
        weapon: "Amorsuit"
    }


    const captainAmerica: Avenger={
        name: "Captain America",
        weapon: "Shield"
    }

    const thor: Avenger={
        name: "Thor",
        weapon: "Mjorlnir"
    }


    const avengers=[iroman,thor,captainAmerica];


    
    for (const avenger of avengers) {
        
        console.log(avenger);
    }



})