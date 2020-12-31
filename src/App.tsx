import React, {useState} from 'react';

import {SignInForm, SignUpForm} from "./components/forms";
import {SignInSidePanel} from "./components/SignInSidePanel";
import {SignUpSidePanel} from "./components/SignUpSidePanel";

import { AppContainer, FormsContainer, SignInSignUp, PanelsContainer } from './AppStyled'

function App() {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <AppContainer isSignUp={isSignUp} className={`${isSignUp && 'sign-up-mode'}`}>
            <FormsContainer>
                <SignInSignUp>
                    <SignInForm/>
                    <SignUpForm/>
                </SignInSignUp>
            </FormsContainer>

            <PanelsContainer>
                <SignInSidePanel onButtonClick={() => setIsSignUp(true)}/>
                <SignUpSidePanel onButtonClick={() => setIsSignUp(false)}/>
            </PanelsContainer>
        </AppContainer>
    );
}

export default App;
