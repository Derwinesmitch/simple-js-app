let pokemonRepository = (function(){
    let modalContainer = document.querySelector('#modal-container');
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';




   function getAll() {
       return pokemonList;
   }

   function showDetails(item){
       loadDetails(item).then(function(){
           showModal(item);
       });
   }

   function add (pokemon) {
       if(
           typeof pokemon === "object" &&
            "name" in pokemon && 
           "detailsUrl" in pokemon
       ) {
           pokemonList.push(pokemon);
       } else {
           console.log("pokemon is not correct");
       }
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




   
   function showModal(pokemon){
    //    let modalContainer = document.querySelector('#modal-container');
       modalContainer.innerHTML = '';

       let modal = document.createElement('div');
       modal.classList.add('modal');

       let closeButtonElement = document.createElement('button');
       closeButtonElement.classList.add('modal-close');
       closeButtonElement.innerText = 'Close';
       closeButtonElement.addEventListener('click', hideModal);

       let titleElement = document.createElement ('h1');
       titleElement.innerText = pokemon.name;

       let contentElement = document.createElement('p');
        contentElement.innerText = "Height: " + pokemon.height;

       let imageElement = document.createElement('img');
       imageElement.classList.add('image-class');
       imageElement.setAttribute('src', pokemon.imageUrl);
       

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
   }


    function hideModal(){
    //    let modalContainer = document.querySelector('#modal-container');
       modalContainer.classList.remove('is-visible');

       if (dialogPromiseReject) {
           dialogPromiseReject();
           dialogPromiseReject = null;
       }
   }


   function showDialog(title, text){
       showModal(title, text);
    //    let modalContainer = document.querySelector('#modal-container');
       let modal = modalContainer.querySelector('.modal');

       let confirmButton = document.createElement('button');
       confirmButton.classList.add('modal-cancel');
       cancelButton.innerText = 'Cancel';

       modal.appendChild(confirmButton);
       modal.appendChild(cancelButton);

       confirmButton.focus();

       return new Promise((resolve, reject) => {
           cancelButton.addEventListener('click', hideModal);
           confirmButton.addEventListener('click', () => {
               dialogPromiseReject = null;
               hideModal();
               resolve();
           });
           dialogPromiseReject = reject;
       });
   }    
   let dialogPromiseReject;


   let closeButtonElement = document.createElement('button');
   closeButtonElement.classList.add('modal-close');
   closeButtonElement.innerText = 'Close';
   closeButtonElement.addEventListener('click', hideModal);

   window.addEventListener('keydown', (e) => {
    //    let modalContainer = document.querySelector('#modal-container');
       if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
           hideModal();
       }
   });

   
//    let modalContainer = document.querySelector('#modal-container');
   
   modalContainer.addEventListener('click', (e) =>{
       let target = e.target;
       if (target === modalContainer) {
           hideModal();
       }
   });
   document.querySelector('#show-dialog').addEventListener('click', () => {
       showDialog('Confrm action', 'Are you sure you want to do this?').then(function(){
           alert('confirmed!');
       }, () => {
           alert('not confirmed');
       });
   });
 
   document.querySelector('#show-modal').addEventListener('click', () => {
      showModal('Modal title', 'This is the modal content!');
   });

    return{

        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
   };
})();


    pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon)   {
    pokemonRepository.addListItem(pokemon)
    });
    });


//console.log(pokemonRepository.getAll());



// });
// });


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
    //    function validateEmail(){
//        let value = emailInput.value;
//     //    let hasAtSign = value.indexOf('@') > -1;
//     //    let hasDot = value.indexOf('.') > -1;
//     //    return value && hasAtSign && hasDot;
//         if (!value){
//             showErrorMessage(emailInput, 'Email is a required field.');
//             return false;
//         }
//         if (value.indexOf('@') === -1){
//             showErrorMessage(emailInput, 'You must enter a valid email address');
//             return false;
//         }
//         showErrorMessage(emailInput, null);
//         return true;
//    }

//    function validatePassword(){
//        let value = passwordInput.value;
//     //    return value && value.length >= 8;
//         if (!value){
//             showErrorMessage(passwordInput, 'Password is a require field')
//             return false;
//         }
//         if (value.length < 8) {
//             showErrorMessage(passwordInput, 'The password needs to be at least 8 characters long');
//             return false;
//         }
//         showErrorMessage(passwordInput, null);
//         return true;
//    }

//    function showErrorMessage (input, message) {
//        let container = input.parentElement;
//        let error = container.querySelector('.error-message');
//        if (error) {
//            container.removeChild(error);
//        }
//        if (message) {
//            let error = document.createElement('div');
//            error.classList.add('error-message');
//            error.innerText = message;
//            container.appendChild(error);
//        }
//    }

//    function validateForm(){
//         let isValidEmail = validateEmail();
//         let isValidPassword = validatePassword();
//         // return validateEmail() && validatePassword();
//         return isValidEmail && isValidPassword;
//    } 
//    emailInput.addEventListener('input', validateEmail);
//    passwordInput.addEventListener('input', validatePassword);
