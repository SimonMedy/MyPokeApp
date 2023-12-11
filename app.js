const getAllPokemonsBtn = document.getElementById('getallpokemonsBtn')


const getAllPokemons = async () => {
  let requestString = `http://localhost:3331/api/pokemons`;
  console.log(requestString); 

  let data = await fetch(requestString, { method: 'GET' }); //appelle de la requete vers la route requestString
  console.log(data);

  let response = await data.json(); //conversion des données recup en json pour les lires
  console.log(response);
};

//recup pokemon avec id
const getPokemonAvecId = async () => {
  let pokemonId = document.getElementById('pokemonInput').value;
  console.log(pokemonId);

  let requestString = `http://localhost:3331/api/pokemons/${pokemonId}`;
  console.log(requestString); 

  let data = await fetch(requestString, { method: 'GET' }); //appelle de la requete vers la route requestString
  console.log(data);

  let response = await data.json(); //conversion des données recup en json pour les lires
  console.log(response);
}

//recup pokemon avec nom
const getPokemonAvecNom = async () => {
  let pokemonName = document.getElementById('pokemonInput').value;
  console.log(pokemonName);

  let requestString = `http://localhost:3331/api/pokemons/nom/${pokemonName}`;
  console.log(requestString);

  let data = await fetch(requestString, { method: 'GET' }); //appelle de la requete vers la route requestString
  console.log(data);

  let response = await data.json(); //conversion des données recup en json pour les lires
  console.log(response);
}


//ajouter pokemon en bdd
const addPokemon = async () => {
  let pokemonName = document.getElementById('pokemonInput').value;
  console.log(pokemonName);
  let requestString = `http://localhost:3331/api/pokemons/`;
  
  let response = await fetch(requestString, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nom: pokemonName })
  });

  if (response.ok) {
    console.log('Pokemon added successfully!');
  } else {
    console.error('Failed to add pokemon');
  }
};

//supprimer pokemon en bdd avec pokemonInput
const supprimerPokemon = async () => {
  let pokemonName = document.getElementById('pokemonInput').value;
  console.log(pokemonName);
  let requestString = `http://localhost:3331/api/pokemons/${pokemonName}`;
  
  let response = await fetch(requestString, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nom: pokemonName })
  });

  if (response.ok) {
    console.log('Pokemon deleted successfully!');
  } else {
    console.error('Failed to delete pokemon');
  }
};

document.getElementById('supprPokemonBtn').addEventListener('click', supprimerPokemon);

document.getElementById('addPokemonBtn').addEventListener('click', addPokemon);

document.getElementById('getPokemonAvecIdBtn').addEventListener('click', getPokemonAvecId);

document.getElementById('getPokemonAvecNomBtn').addEventListener('click', getPokemonAvecNom);

getAllPokemonsBtn.addEventListener('click', getAllPokemons);

