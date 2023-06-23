import React from "react";

const PokemonImage = (props) => {
    // destructure properties
    const { src, name, chosen, callback } = props;
    return (
        <button
            onClick={() => callback()}
            className={"flex flex-col gap-2 items-center duration-200 p-4 rounded-xl "
                + (chosen === name ? "bg-blue-200 hover:bg-blue-300" : "bg-gray-200 hover:bg-gray-300")}
        >
            <img src={src} alt={name} width={240} />
            <p className="text-xl">
                {name}
            </p>
        </button>
    )
}

export default PokemonImage

