function whosPaying(names){
    let result = Math.floor(Math.random() * names.length);
    const selectedName = names[result];
    console.log(`${selectedName} bezahlt heute das Mittagessen!`);
    }

const nameListe = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(nameListe);
