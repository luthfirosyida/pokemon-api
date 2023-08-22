const poke_container = document.getElementById('poke_container');
const pokemons_number = 50 ;
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#F5DEB3',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#D8BFD8',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const main_types = Object.keys(colors);
console.log(main_types);

const fetchPokemons = async () => {
	for (let 
		i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};


const getPokemon = async id => {
	const url = 
	`https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);

	// console.log(pokemon);
	
};
	function createPokemonCard(pokemon) {
		const pokemonEl = document.createElement(`div`);
		pokemonEl.classList.add(`pokemon`);
		
		const poke_types = pokemon.types.map(el => el.type.name);
		const type = main_types.find(type => poke_types.indexOf(type) > -1 );
		const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
		const color = colors[type];
		pokemonEl.style.backgroundColor = color;
		
		const pokeInnerHTML = `
		<div class="img-container">
		<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" />
		</div>
		<div class="info">
			<span class="number">#${pokemon.id} </span>
			<h3 class="name">${name}</h3>
			<small class="type">Type : <span>${capitalizeFirstLetter(type)}</span> </small>
			</div>
			<div class="btn-details" >
			<button type="button" class="btn" data-bs-toggle="modal" onclick="detail('${
				pokemon.id
			}')" data-bs-target="#pokemonModal">   Details   </button> 	
			</div>
			
			`;
		 console.log(pokemon.id);
		 pokemonEl.innerHTML = pokeInnerHTML;
		 poke_container.appendChild(pokemonEl);
	}

	function getListUrl () {
		for (let 
			i = 1; i <= 10; i++) {
			console.log('https://pokeapi.co/api/v2/pokemon/[i]');
			
		}
		
	}

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function detail(val) {

		// const pokemonEl = document.createElement(`div`);
		// pokemonEl.classList.add(`pokemon`);
		// const poke_types = pokemon.types.map(el => el.type.name);
		// const type = main_types.find(type => poke_types.indexOf(type) > -1 );
		const url =
		`https://pokeapi.co/api/v2/pokemon/${val}`;
		console.log("val " + val);
		$.ajax({
		  url: url,
		  success: function (res) {
			// console.log(res.forms);

			modal = "";
                $.each(res.forms, function(key, val){
                    srcGambar = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png"
                    modal =
                    `<div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Hello, I'm ${capitalizeFirstLetter(val.name)}!</h1>
						<h4 id="idDetail"> #${res.id}</h4>
                    </div>
                    <div class="modal-body">
						<div class="container">
							<div id="row-img" class="row">
								<div class="col-2"></div>
								<div class="col-8"><img src="${srcGambar.replace('{id}',res.id)}" style="width : 300px; height : 300px; align-item: center" /></div>
								<div class="col-2"></div>	
							</div>
						  

							<div id="row-types" class="row" style:"margin-top: 20px">
								<div class="col-4">  </div>
								<div class="col-7"> Types : ${capitalizeFirstLetter(res.types.map(t => t.type.name).join(" & ")) } </div>
								<div class="col-2"></div>	
							</div>

  							<div id="row-abilities" class="row" style:"margin-top: 40px">
							  	<div class="col-3">  </div>
							 	<div class="col-8"> Abilities : ${capitalizeFirstLetter(res.abilities.map(a => a.ability.name).join(" , ")) } </div>
							  	<div class="col-2"></div>	
						  	</div>

  							</div>
							<div id="row2" class="row">
							  <nav>
							  <div class="nav nav-tabs" id="nav-tab" role="tablist">
								<button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" style="width : 50%"> Profile </button>
								<button class="nav-link" id="nav-stat-tab" data-bs-toggle="tab" data-bs-target="#nav-stat" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" style="width : 50%" > Statistic </button>
							  </div>
							</nav>

							
							<div class="tab-content" id="nav-tabContent">
							  	<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-profile-tab">
							  	<div class="row" style:"margin-top: 10px">
									<div class="col-5"> Species = ${capitalizeFirstLetter(val.name)} </div>
									<div class="col-2"> </div>
									<div class="col-5"></div>	
								</div>

								<div class="row" style:"margin-top: 20px">
									<div class="col-5"> Height = ${res.height} m </div>
									<div class="col-2"> </div>
									<div class="col-5"></div>	
								</div>

								
								<div class="row" style:"margin-top: 20px">
									<div class="col-5"> Weight = ${res.weight} kg </div>
									<div class="col-2"> </div>
									<div class="col-5"></div>	
								</div>

								<div class="row" style:"margin-top: 20px">
									<div class="col-7"> Abilities = ${capitalizeFirstLetter(res.abilities.map(a => a.ability.name).join(" & ")) }  </div>
									<div class="col-2"> </div>
									<div class="col-3"></div>	
								</div>

								<div class="row" style:"margin-top: 20px">
									<div class="col-8"> Type = ${capitalizeFirstLetter(res.types.map(t => t.type.name).join(" & "))} </div>
									<div class="col-2"> </div>
									<div class="col-2"></div>	
								</div>

							  <!-- Force next columns to break to new line at md breakpoint and up -->
							  <div class="w-100 d-none d-md-block"></div>
							</div>
							</div>
							<div class="tab-pane fade" id="nav-stat" role="tabpanel" aria-labelledby="nav-profile-tab">


							<div class="row" style:"margin-top: 10px">
							  	<div class="col-5"> ${res.stats[0].stat.name.toUpperCase()} </div>
							  	<div class="col-2">${res.stats[0].base_stat} </div>
							  	<div class="col-5"> 
								  	<div class="progress-wrapper">
								  		<div class="progress">
									  	<div class="progress-bar bg-success" role="progressbar" aria-label="Success example" style="width: ${res.stats[0].base_stat}%" aria-valuemin="0" aria-valuemax="100">${res.stats[0].base_stat} </div>
								  		</div>
									</div>	
						  	</div>

							<div class="row" style:"margin-top: 20px">
							  <div class="col-5"> ${res.stats[1].stat.name.toUpperCase()} </div>
							  <div class="col-2">${res.stats[1].base_stat} </div>
							  <div class="col-5">
									<div class="progress-wrapper">
										<div class="progress">
								 	 		<div class="progress-bar bg-warning" role="progressbar" aria-label="Success example" style="width : ${res.stats[1].base_stat}%" aria-valuemin="0" aria-valuemax="100">${res.stats[1].base_stat} </div>
							  			</div>
							  		</div>	
						  	</div>

						  	<div class="row" style:"margin-top: 20px">
							  	<div class="col-5"> ${res.stats[2].stat.name.toUpperCase()} </div>
							  	<div class="col-2">${res.stats[2].base_stat} </div>
							  	<div class="col-5">
								  <div class="progress-wrapper">
								  	<div class="progress">
										<div id="prog-spc-attack" class="progress-bar bg-info" role="progressbar" aria-label="Success example" style="width : ${res.stats[2].base_stat}%" background-color:"black" aria-valuemin="0" aria-valuemax="100">${res.stats[2].base_stat} </div>
									</div>
								</div>
								</div>	
						  	</div>
							
							<div class="row" style:"margin-top: 20px">
							  <div class="col-5"> ${res.stats[3].stat.name.toUpperCase()} </div>
							  <div class="col-2">${res.stats[3].base_stat} </div>
							  <div class="col-5">
							  	<div class="progress-wrapper">
							  		<div class="progress">
									<div class="progress-bar bg-warning" role="progressbar" aria-label="Success example" style="width : ${res.stats[3].base_stat}%" aria-valuemin="0" aria-valuemax="100">${res.stats[3].base_stat} </div>
								</div>
							</div> 
							  </div>	
						  	</div>
						  
							<div class="row" style:"margin-top: 20px">
							  	<div class="col-5"> ${res.stats[4].stat.name.toUpperCase()} </div>
							  	<div class="col-2">${res.stats[4].base_stat} </div>
							  	<div class="col-5">
								  <div class="progress-wrapper">
								  <div class="progress">
										<div class="progress-bar bg-info" role="progressbar" aria-label="Success example" style="width : ${res.stats[4].base_stat}%" aria-valuemin="0" aria-valuemax="100">${res.stats[4].base_stat} </div>
									</div>
								</div>
								</div>	
						  	</div>

							<div class="row" style:"margin-top: 20px">
							  <div class="col-5"> ${res.stats[5].stat.name.toUpperCase()} </div>
							  <div class="col-2">${res.stats[5].base_stat} </div>
							  <div class="col-5">
							  <div class="progress-wrapper">
							  		<div class="progress">
										<div class="progress-bar bg-danger" role="progressbar" aria-label="Success example" style="width: ${res.stats[5].base_stat}%" aria-valuemin="0" aria-valuemax="100"> ${res.stats[5].base_stat} </div>
							  		</div> 
							  </div>	
						  	</div>
							  
								</div>
							</div>
							</div>
							
					</div>
					</div>
					

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style:"font-color=black">
                            Close
                        </button>
                    </div>`
                });
				console.log(res.forms);
                $("#detailModal").html(modal);
		  },
		});
	  
	  } 

	fetchPokemons();
