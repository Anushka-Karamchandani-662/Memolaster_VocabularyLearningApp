import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserWords.css" 


function UserAdvance()
{
    const navigate=useNavigate()
    const [data,setData]=useState([])

    useEffect(() => {
        const data = { userId: localStorage.getItem('userId') }
        const headers = { Authorization: localStorage.getItem('token') }
        axios.post('http://localhost:3001/get-advance-words', data, { headers })
            .then(res => {
                console.log(res.data, "15")
                setData(res.data.data.cartThree)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

   
    return(
        <div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                        style={{
                            backgroundColor: 'orange',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                        }}
                        onClick={()=>{
                            navigate('/get/advance');
                        }}
                    >
                        Add more words
                    </button>
                    <button 
                        style={{
                            backgroundColor: 'red',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                        }}
                        onClick={()=>{
                            localStorage.clear();
                            navigate('/login');
                        }}
                    >
                        Logout
                    </button>
                </div>
            </div>

        <div class="table-container">
            <div style={{ textAlign: 'center' }}>
                <h1>Words To Review</h1>
            </div>
            <div class="table-row header">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ marginLeft: '2px' }}>
                    </div>
                    <div style={{ marginRight: '3px' }}>
                            <h1>Word</h1>
                    </div>
                    <div style={{ marginLeft: '100px' }}>
                            <h1>Meaning</h1>
                    </div>
                    <div style={{ marginLeft: '100px' }}>
                            <h1>Usage</h1>
                    </div>
                    <div style={{ marginLeft: '100px' }}>
                            <h1>Part of Speech</h1>
                    </div>
                    <div style={{ marginLeft: '50px' }}>
                            <h1>Synonyms</h1>
                    </div>
                    <div style={{ marginLeft: '50px' }}>
                            <h1>Mneumonics</h1>
                    </div>
                    <div style={{ marginLeft: '2px' }}>
                    </div>
                    </div>
            </div>
        </div>

        {data.map((item,index)=>{
            return (
                <div class="table-container">
                <div class="table-row">
                    <div class="table-cell">{item.Word}</div>
                    <div class="table-cell">{item.Meaning}</div>
                    <div class="table-cell">{item.Usage}</div>
                    <div class="table-cell">{item['Part of Speech']}</div>
                    <div class="table-cell">{item.Synonyms}</div>
                    <div class="table-cell">{item.Mnemonic}</div>
                </div>
            </div>
            )
        })}
    </div>
    )
}

export default UserAdvance;
