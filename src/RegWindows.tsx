import { useState } from 'react'
import './RegWindows.css'

function TogglePassword(){
    var input: HTMLInputElement = document.getElementById('password') as HTMLInputElement;
    var icon: HTMLElement = document.getElementById('icon') as HTMLElement;
    if (input != null && icon != null) {
        if (input.type === "password") {
            input.type = "text";
            icon.classList.add('selected');
        } else {
            input.type = "password";
            icon.classList.remove('selected');
        }  
    }
}

function PasswordInput() {

    return (
        <>
            <div className="input-wrapper">
                <input type="password" id="password" placeholder="Type your password"/>
                <div className="input-icon" id="icon" onClick={() => TogglePassword()}></div>
            </div>
        </>
    )
}

export default PasswordInput