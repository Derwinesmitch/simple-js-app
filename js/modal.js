function showModal(pokemon) {
    const modalBody = $(".modal-body");
    const modalTitle = $(".modal-title");

    modalTitle.empty();
    modalBody.empty();

    const nameElement = $("<h1>" + pokemon.name + "</h1>");
    const imageElementFront = $('<img class="modal-img"style="width:50%">');
    imageElementFront.attr("src", pokemon.imageUrlFront);
    const imageElementBack = $('<img class="modal-img"style="width:50%">');
    imageElementBack.attr("src", pokemon.imageUrlBack);
    const heightElement = $("<p>" + "Height : " + pokemon.height + "</p>");
    const weightElement = $("<p>" + "Weight : " + pokemon.weight + "</p>");
    const typesElement = $("<p>" + "Types : " + pokemon.types + "</p>");


    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
  }