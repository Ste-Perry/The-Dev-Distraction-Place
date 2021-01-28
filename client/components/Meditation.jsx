//@ts-check

import React from "react";

const Meditation = () => {
    const [showMantras, setShowMantras] = React.useState(false);
    const onClick = () => {
        if (showMantras === true) {
            setShowMantras(false);
        } else {
            setShowMantras(true);
        }
    };

    return (
        <div className="meditation-main">
            <div className="mantras-menu">
                <button onClick={onClick}>Mantras</button>

                {showMantras ? <div>
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
            <img className="spiral" src="/spinning/spinning-spiral.gif" />
            <div className="sounds-menu">Sounds</div>
        </div>
    );
};

export default Meditation;
