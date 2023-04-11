import React, { useState } from "react";

const AddPlayerForm = ({ onAddPlayer }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        onAddPlayer({ name, score: 0});
        setName('');
    }; 

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter player name" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit" className="btn btn-primary">
                 Add Player
                </button>
            </div>
        </form>
    );
};

export default AddPlayerForm;