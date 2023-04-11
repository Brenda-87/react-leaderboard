import React, { useState } from 'react';
import { FaCrown, FaEdit, FaTrash } from 'react-icons/fa';
import AddPlayerForm from './AddPlayerForm';
import EditPlayerForm from './EditPlayerForm';
import ScoreForm from './ScoreForm';

const Leaderboard = () => {
    const [players, setPlayers] = useState([
        { id: 1, name: 'Player 1', score: 100 },
        { id: 2, name: 'Player 2', score: 90 },
        { id: 3, name: 'Player 3', score: 80 }, 
        { id: 4, name: 'Player 4', score: 70 },
        { id: 5, name: 'Player 5', score: 60 },
    ]);

    const [editingPlayerId, setEditingPlayerId] = useState(null);

    const sortedPlayers = players.sort((a, b) => b.score - a.score);

    const addPlayer = (player) => {
        setPlayers([
            ...players,
            { id: Date.now(), ...player, score: 0 },
        ]);
    };

    const updatePlayer = (updatedPlayer) => {
        setPlayers(players.map((player) => (player.id === updatedPlayer.id ? updatedPlayer : player)));
        setEditingPlayerId(null);
    };

    const removePlayer = (playerId) => {
        setPlayers(players.filter((player) => player.id !== playerId));
    };

    return (
        <div className="container">
            <h1 className="text-center my-4">Marema</h1>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedPlayers.map((player, index) => (
                        <tr key={player.id}>
                            <td>
                                {index === 0 ? (
                                    <FaCrown className="text-warning" />
                                ) : (
                                  index + 1
                                )}
                            </td>
                            <td>{player.name}</td>
                            <td>{player.score}</td>
                            <td>
                                {editingPlayerId !== player.id && (
                                    <button className="btn btn-sm btn-primary me-2" onClick={() => setEditingPlayerId(player.id)}>
                                        Edit
                                    </button>
                                )}
                            </td>
                            <td><EditPlayerForm player={player} onUpdatePlayer={updatePlayer} onCancel={() => setEditingPlayerId(null)} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="container">
                <AddPlayerForm onAddPlayer={addPlayer} />
                <ScoreForm players={players} onUpdatePlayerScore={updatePlayer} />
            </div>
        </div>
    )
};

export default Leaderboard;

