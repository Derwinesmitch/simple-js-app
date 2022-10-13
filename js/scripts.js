let pokemonRepository = (function () {
    // let modalContainer = document.querySelector('#modal-container');
    let pokemonList = [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
  
    
      function getAll() {
      return pokemonList;
    };
    
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "detailsUrl" in pokemon
      ) {
        pokemonList.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
    }
  

  
    function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listPokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("btn", "btn-lg", "list-group-item", "list-group-item-action");
      button.setAttribute("data-toggle", "modal");
      button.setAttribute("data-target", "#exampleModal");
      listPokemon.classList.add('pokemon-list-item')
      listPokemon.appendChild(button);
      pokemonList.appendChild(listPokemon);
      button.addEventListener("click", function (event) {
        showDetails(pokemon);
      });
    }
  

  
    function loadList() {
      return fetch(apiUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          json.results.forEach(function (item) {
            const pokemon = {
              name: item.name,
              detailsUrl: item.url,
            };
            add(pokemon);
            console.log(pokemon);
          });
        })
        .catch(function (e) {
          console.error(e);
        })
    };


    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (details) {
          item.imageUrl = details.sprites.front_default;
          item.imageUrlFront = details.sprites.front_default;
          item.imageUrlBack = details.sprites.back_default;
          item.height = details.height;
          item.types = details.types;
          item.weight = details.weight;
        })
        .catch(function (e) {
          console.error(e);
        });
    };

    //   function showDetails(item) {
    //   pokemonRepository.loadDetails(item).then(function () {
    //     console.log(item);
    //     showModal(item);
    //   });
    // }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
        showModal(pokemon)
      });
    }

  
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails,
      showModal: showModal,
    };
  })();
  
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });
    