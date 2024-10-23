import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11);

    const playserStyle = {
        border: "2px solid green",
        padding: '5px',
        margin: '15px',
        borderRadius: '15px'
    }
    const addPlayer = () => {
        setTeam(team + 1);
    }

    const reducePlayer = () => {
        setTeam(team - 1);
    }

    return (
        <div style={playserStyle}>Players :{team}
            <button onClick={addPlayer}>Add</button>
            <button onClick={reducePlayer}>REmove</button>

        </div>

    )
}