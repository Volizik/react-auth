import React from 'react';
import registerIcon from "../../img/register.svg";
import {PanelProps} from "../../types";

export const SignUpSidePanel = ({onButtonClick}: PanelProps) => (
    <div className="panel right-panel">
        <div className="content">
            <h3>One of us ?</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={onButtonClick}>
                Sign in
            </button>
        </div>
        <img src={registerIcon} className="image" alt="registration icon"/>
    </div>
);
