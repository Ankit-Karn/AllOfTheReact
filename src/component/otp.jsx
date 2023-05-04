import React, { useState } from "react";
import axios from 'axios'
import './otp.css'


export default function OTP() {

    const [mobile, setMobile] = useState('')
    const [err, setErr] = useState('')

    function handleChange(event) {
        setMobile(event.target.value)
    }

    async function handleClick(e) {
        e.preventDefault();

        if (mobile.length !== 10) {
            setErr("Please enter a valid 10-digit mobile number");
            return;
        }

        const url = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP';
        const data = { mobile: mobile };

        // axios -> 
        // try {
        //     const response = await axios.post(url, data, { header: { 'Content-type': 'application/json' } });
        //     console.log(response);
        //     console.log("SUCCESS");
        // } catch (error) {
        //     console.log("error", error)
        // }
        // setMobile('')

        // fetch ->
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseJson = await response.json();
            console.log(responseJson);
           console.log("SUCCESS");
        }catch(error){
            console.log("error", error);
        }
        setMobile('')

    }

    return (
        <div className="otp-div">
            <input type='number' onChange={handleChange} /> <br />
            <button onClick={handleClick} className="btn">Get OTP</button>
            {err && <p>{err}</p>}
        </div>
    )
}