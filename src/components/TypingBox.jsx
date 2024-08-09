import React, { useState } from "react";
import { generate } from "random-words";

const TypingBox = () => {
    //? A state to store the list of words
    //? generate(50) returns an array of 50 words
    const [wordsList, setWordsList] = useState(() => generate(50));

    return (
        <div>
            {/* Outer Rectangle of typeBox */}
            <div className="typeBox">
                <div className="typeBox--words">
                    {wordsList.map((word) => {
                        return (
                            <span className="typeBox--word">
                                {/* Break each word into a character */}
                                {word.split("").map((char) => {
                                    return <span>{char}</span>;
                                })}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TypingBox;
