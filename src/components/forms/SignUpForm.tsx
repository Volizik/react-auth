import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {SocialMedia} from "../SocialMedia";
import { Form, Title, SocialText, Field, SubmitButton } from './commonStyles'
import styled from "styled-components";

const FormStyled = styled(Form)`
  opacity: 0;
  z-index: 1;
`;

export const SignUpForm = () => (
    <FormStyled action="#">
        <Title>Sign up</Title>
        <Field>
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Username"/>
        </Field>
        <Field>
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="Email"/>
        </Field>
        <Field>
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Password"/>
        </Field>
        <SubmitButton>Sign up</SubmitButton>
        <SocialText>Or Sign up with social platforms</SocialText>
        <SocialMedia />
    </FormStyled>
);
