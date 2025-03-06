

export const RootRoute = () => {
  return <div>
    {data.map((item)=> {
      return <div key={item.id}>
        <img src={item.image} alt={item.name} style={{width:'100px'}}/>
        <div>{item.name}</div>
        </div>
    }
    )
  }
   </div>
  }
      


        
        

  
   



const data = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    name: "Bulbasaur",
    types: ["grass", "poison"],
  },
  {
    id: 4,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    name: "Charmander",
    types: ["fire"],
  },
  {
    id: 7,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    name: "Squirtle",
    types: ["water"],
  },
  {
    id: 10,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    name: "Caterpie",
    types: ["bug"],
  },
  {
    id: 25,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    name: "Pikachu",
    types: ["electric"],
  },
  {
    id: 74,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    name: "Geodude",
    types: ["rock", "ground"],
  },
];





























