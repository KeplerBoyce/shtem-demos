import React from "react";
import Image from "next/image";

const PokemonImage = (props) => {
    // destructure properties
    const { src, name, chosen, callback } = props;
    return (
        <button
            onClick={() => callback()}
            className={"flex flex-col gap-2 items-center duration-200 p-4 rounded-xl "
                + (chosen === name ? "bg-blue-200 hover:bg-blue-300" : "bg-gray-200 hover:bg-gray-300")}
        >
            <Image src={src} alt={name} width={240} height={240} />
            <p className="text-xl">
                {name}
            </p>
        </button>
    )
}

export default PokemonImage

