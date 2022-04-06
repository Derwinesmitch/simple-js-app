let pokemonRepository = (function(){
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

   


   


   function add (pokemon) {
       if(
           typeof pokemon === "object" &&
            "name" in pokemon //&& 
        //    "detailsUrl" in pokemon
       ) {
           pokemonList.push(pokemon);
       } else {
           console.log("pokemon is not correct");
       }
   }


   function getAll() {
       return pokemonList;
   }


    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener("click", function(event){
            showDetails(pokemon);
        });
    }  

    function loadList() {
        return fetch(apiUrl).then(function(response){
            return response.json();
        }).then(function(json){
            json.results.forEach(function(item){
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function(e){
            console.error(e);
        })
    }
        function loadDetails(item){
        let url = item.detailsUrl;
        return fetch(url).then(function(response){
            return response.json();
        }).then(function(details){
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function(e){
            console.error(e);
        });
    }


   function showDetails(pokemon){
       loadDetails(pokemon).then(function(){
           console.log(pokemon);
       });
   }


    return{

        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
   };
})();

//console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function(){
pokemonRepository.getAll().forEach(function(pokemon)   {
    pokemonRepository.addListItem(pokemon);
});
});


    //document.write("Name: " + pokemon.name + " (Height: " + pokemon.height + ". Types: " + pokemon.types + ".)");




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

// function showDetails(pokemon){
    //     console.log(pokemon.name);
    // }

    // function addListener (button, pokemon){
    //     button.addEventListener('click', function(){
    //         showDetails(pokemon)
    //     })
    // }    
    
    // in return
    // add: function(pokemon){
        //  repository.push(pokemon);
        // },
    
        // getAll: function(){
        //     return repository;
        //  },
       // addListItem:addListItem,
       // showDetails:showDetails, 
       
       
    // let repository = [
    //     {
    //         name: "Charmander",
    //         height: 0.6,
    //         types: ["Fire"],
    //     },
    //     {
    //         name: "Bulbasaur",
    //         height: 0.7,
    //         types: ["Grass", "Poison"],
    //     },
    //     {
    //         name: "Squirtle",
    //         height: 0.5,
    //         types: ["Water"],
    //     },
    //    ];