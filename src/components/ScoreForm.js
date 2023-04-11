import React, { useState } from "react";

const ScoreForm = ({ players, onUpdatePlayerScore }) => {
    const [selectedPlayerId, setSelectedPlayerId] = useState('');
    const [won, setWon] = useState(0);
    const [lost, setLost] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!selectedPlayerId || (!won && !lost)) return;

        const player = players.find((p) => p.id === parseInt(selectedPlayerId));
        const updatedScore = player.score + won * 3 - lost;
        onUpdatePlayerScore({ ...player, score: updatedScore });

        setSelectedPlayerId('');
        setWon(0);
        setLost(0);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <label htmlFor="player-select">Select Player:</label>
            <select id="player-select" className="form-control" value={selectedPlayerId} onChange={(e) => setSelectedPlayerId(e.target.value)}
            >
                <option value="">Choose...</option>
                {players.map((player) => (
                    <option key={player.id} value={player.id}>
                        {player.name}
                    </option>
                ))}
            </select>
            <label htmlFor="won">Matches won: </label>
            <input type="number" id="won" className="form-control" value={won} onChange={(e) => setWon(parseInt(e.target.value))} />
            <label htmlFor="lost">Matches lost:</label>
            <input type="number" id="lost" className="form-control" value={lost} onChange={(e) => setLost(parseInt(e.target.value))} />
            <button type="submit" className="btn btn-primary mt-3">Update score</button>
        </form>
    );
};

export default ScoreForm;