//Abre el modal para agregar Pokémon
function openNewPokemon() {
    clearForm();
    $('#modalPokemon').modal('show');
}

//Abre el modal para editar un Pokémon
function openPokemonEdicion(idPokemon) {
    if(!isNaN(idPokemon)) {
        clearForm();
        /* Por definir */
    } else {
        alert("ID de Pokémon inválido")
    }
}

//Llena el modal con información de un Pokémon dado
function fillForm(data) {
    /* Por definir */
}

//Limpia los Form del modal
function clearForm() {
    $("form_pokemon_id").val("");
}

//Elimina un Pokémon
function eliminarPokemon(idPokemon) {
    let opcion = confirm("¿Estás seguro que quieres eliminar este Pokémon?");
    if(opcion) {
        let form = '<form id=form_delete action="team_view.html" method="POST"' +
                '<input type="hidden" name="c" value="pokemon">' +
                '<input type="hidden" name="m" value="eliminar">' +
                '<input type="hidden" name="id_pokemon" value="'+idPokemon+'">' +
                '</form>';
    
        $("#wrapper").append(form);
        $("form_delete").submit();
    }
}