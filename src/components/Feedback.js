import React, { useState } from "react";

export default function Feedback() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [className, setClassName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${name}! Your feedback has been submitted.`);
        // Clear form
        setName('');
        setAge('');
        setRollNo('');
        setClassName('');
    }

    return (
        <div>
            <h1 align="center" >Feedback</h1>
            
            <form onSubmit={handleSubmit}>
                <table align="center">
                    <tbody>
                        <tr>
                        
 
                            <h2 className="text-red-500
                             font-mono">Name:</h2>
                            <td>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter your name"   />
                            </td>
                        </tr>
                        <tr>
                        <h2 className="text-red-500" >Age:</h2>
                            <td>
                                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required placeholder="Enter your age" />
                            </td>
                        </tr>
                        <tr>
                        <h2 className="text-red-500" >RollNo:</h2>
                            <td>
                                <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} required placeholder="Enter your roll number" />
                            </td>
                        </tr>
                        <tr>
                        <h2 className="text-red-500" >Class:</h2>
                            <td>
                                <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} required placeholder="Enter your class" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{ textAlign: 'center' }}>
                                <button type="submit">Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        
        </div>
    );
}
