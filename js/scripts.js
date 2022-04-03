let pokemonRepository = (function(){
    let repository = [
        {
            name: "Charmander",
            height: 0.6,
            types: ["Fire"],
        },
        {
            name: "Bulbasaur",
            height: 0.7,
            types: ["Grass", "Poison"],
        },
        {
            name: "Squirtle",
            height: 0.5,
            types: ["Water"],
        },
    ];
   
    function showDetails(pokemon){
        console.log(pokemon.name);
    }

    function addListener (button, pokemon){
        button.addEventListener('click', function(){
            showDetails(pokemon)
        })
    }

    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        addListener (button, pokemon);
    }   

    return{
        add: function(pokemon){
         repository.push(pokemon);
        },
    
        getAll: function(){
            return repository;
         },
        addListItem:addListItem,
        showDetails:showDetails
   };
})();

pokemonRepository.getAll().forEach(function(pokemon)   {
    //document.write("Name: " + pokemon.name + " (Height: " + pokemon.height + ". Types: " + pokemon.types + ".)");
    pokemonRepository.addListItem(pokemon);
});






//for (let i = 0; i < pokemonList.length; i++){
   
//console.log(pokemonList[i].name)

//if(pokemonList[i].height >= 0.6){
 //   document.write(pokemonList[i].name + " Height " + pokemonList[i].height + "" + "Wow its a big Pokemon!")
//} else {
//    document.write(pokemonList[i].name + " Height " + pokemonList[i].height)
//}

//document.write("Name: " + pokemonList[i].name + " Height: " + pokemonList[i].height) 
//}
    




//function divide(dividend,divisor){
   // if(divisor === 0)
    //    return "You´re trying to divide by zero."
//}else{
  //  let result = dividend / divisor;
    //return result;
//}
//}