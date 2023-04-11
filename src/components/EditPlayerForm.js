import React, { useState } from "react";

const EditPlayerForm = ({ player, onUpdatePlayer, onCancel }) => {
    const [name, setName] = useState(player.name);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        onUpdatePlayer({ ...player, score: 0});
        setName('');
    }; 

    return (
        <form onSubmit={handleSubmit}>
         <input type="text" className="form-control" placeholder="Enter player name" value={name} onChange={(e) => setName(e.target.value)} />
            <div className="mt-2 d-flex">
                <button type="submit" className="btn btn-success me-2">
                 Update
                </button>
                <button type="button" className="btn btn-light" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default EditPlayerForm;