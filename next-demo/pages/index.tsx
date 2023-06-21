import type { NextPage } from 'next'
import { useState } from 'react';
import PokemonImage from '../components/PokemonImage'

// type for PokemonImage properties
interface pokemonType {
    name: string,
    src: string,
}

const Home: NextPage = () => {
    // list of pokemon
    const pokemon: pokemonType[] = [
        { name: "Crustle", src: "/crustle.png" },
        { name: "Wooper", src: "/wooper.png" },
        { name: "Gengar", src: "/gengar.png" },
        { name: "Watchog", src: "/watchog.png" },
    ];
    // state variable for chosen pokemon; starts as "none"
    const [chosen, setChosen] = useState("none");

    return (
        <main className="container mx-auto flex flex-col gap-6 items-center pt-12 pb-24">
            <h1 className="text-5xl font-bold">
                Cool website
            </h1>
            <p className="text-3xl">
                Chosen Pokemon: {chosen}
            </p>
            <div className="flex gap-3">
                {pokemon.map((x: pokemonType) =>
                    <PokemonImage
                        src={x.src}
                        name={x.name}
                        chosen={chosen}
                        callback={() => setChosen(x.name)}
                    />
                )}
            </div>
        </main>
    )
}

export default Home

