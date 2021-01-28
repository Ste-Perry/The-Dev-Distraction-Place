//@ts-check

import React from "react";


const Sounds = () => {
    const [showElements, setShowElements] = React.useState(false);
    let onClick = () => {
        if (showElements === true) {
            setShowElements(false);
        } else {
            setShowElements(true);
        }
    };

    return (
        <div className="sounds-menu">
        <button className="meditation-button" onClick={onClick}>Sounds</button>
            {showElements ? <div>
                <div>Rain and Thunderstorm Sounds For Focus, Relaxing and Sleep</div>
                <audio controls>
                    <source src="/nature-sounds/1.m4a" type="audio/ogg" />
                        Your browser does not support the audio element.
                </audio>

                <div>Calm Seashore</div>
                <audio controls>
                    <source src="/nature-sounds/2.m4a" type="audio/ogg" />
                        Your browser does not support the audio element.
                </audio>

                <div>Nature Forest Birds</div>
                <audio controls>
                    <source src="/nature-sounds/3.opus" type="audio/ogg" />
                        Your browser does not support the audio element.
                </audio>

            </div> :null}
        </div>
    )

}

export default Sounds;
