pokemonList();

function pokemonList() {
    fetch("https://pokeapi.co/api/v2/pokemon/kabuto")
    .then(response => response.json())
    .then(data => {
    
    const nom = data.name;
    const nombre = nom[0].toUpperCase() + nom.slice(1);
    const habilidades = data.abilities.map(abilityInfo => abilityInfo.ability.name);
    const tipo = data.types.map(abilityInfo => abilityInfo.type.name);
    const stats = data.stats.map(abilityInfo => abilityInfo.stat.name);

    
    console.log("  -> Nombre: ",nombre,"\n");
    console.log("-> Habilidades:", habilidades,"\n");
    console.log("-> Tipo", tipo,"\n");
    console.log("-> Stats", stats);

    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}