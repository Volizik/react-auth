import React from 'react';
import loginIcon from "../../img/login.svg";
import {PanelProps} from "../../types";

export const SignInSidePanel = ({onButtonClick}: PanelProps) => (
    <div className="panel left-panel">
        <div className="content">
            <h3>New here ?</h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
            </p>
            <button className="btn transparent"  onClick={onButtonClick}>
                Sign up
            </button>
        </div>
        <img src={loginIcon} className="image" alt="login icon"/>
    </div>
);
