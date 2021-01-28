//@ts-check

import React from "react";

const Mantras = () => {
    const [showElements, setShowElements] = React.useState(false);
    let onClick = () => {
        if (showElements === true) {
            setShowElements(false);
        } else {
            setShowElements(true);
        }
    };

    return (
        <div className="mantras-menu">
                <button className="meditation-button" onClick={onClick}>Mantras</button>

                {showElements ? <div>
                    <div>Meditation for Positive Energy</div>
                    <audio controls>
                        <source src="/mantras/1.opus" type="audio/ogg" />
                        Your browser does not support the audio element.
                    </audio>

                    <div>10-Minute Meditation For Anxiety</div>
                    <audio controls>
                        <source src="/mantras/2.opus" type="audio/ogg" />
                        Your browser does not support the audio element.
                    </audio>

                    <div>OM Mantra Meditation</div>
                    <audio controls>
                        <source src="/mantras/3.opus" type="audio/ogg" />
                        Your browser does not support the audio element.
                    </audio>
                </div> : null}

            </div>
    );
};

export default Mantras;
