import '../styles/MainView.css';
import Card from './Card';
import { useState, useEffect } from 'react';

const MainView = () => {
    const hints = ["Height", "Weightclass", "Stance", "Reach", "Wins", "Losses"];
    const [fighterName, setFighterName] = useState('');
    const [fighterData, setFighterData] = useState({});

    const handleInputChange = (e) => {
        setFighterName(e.target.value);
    };
    
    // TODO: Create api with fighter data
    const handleSubmit = () => {
        if (fighterName) {
            const data = {
                height: '7',
                weightclass: 'Heavyweight',
                stance: 'Southpaw',
                reach: '7',
                wins: 7,
                losses: 7
            }
            console.log(fighterData);
            console.log(fighterName);
            setFighterData(data);
        }
    }
    
    return (
        <div className="main-view">
            <input
                type="text"
                placeholder="Enter fighter's name"
                value={fighterName}
                onChange={handleInputChange}
                className="fighter-input"
            />
            <button onClick={handleSubmit}>Submit</button>
            <table className="hints-table">
                <thead>
                    <tr>
                        {hints.map((hint, index) => (
                            <th key={index}>{hint}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {hints.map((hint, index) => (
                            <td key={index}>
                                <Card hintValue={fighterData[hint.toLowerCase()]} />
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MainView;