import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {SocialMedia} from "../SocialMedia";
import { Form, Field, SocialText, Title, SubmitButton } from './commonStyles';
import styled from "styled-components";

const FormStyled = styled(Form)`
  z-index: 2;
`;

export const SignInForm = () => (
    <FormStyled action="#">
        <Title>Sign in</Title>
        <Field>
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Username"/>
        </Field>
        <Field>
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Password"/>
        </Field>
        <SubmitButton>Login</SubmitButton>
        <SocialText>Or Sign in with social platforms</SocialText>
        <SocialMedia />
    </FormStyled>
);
