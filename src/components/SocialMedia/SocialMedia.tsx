import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGoogle, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { SocialMediaStyled, SocialButton } from './SocialMediaStyled';

export const SocialMedia = () => (
    <SocialMediaStyled>
        <SocialButton>
            <FontAwesomeIcon icon={faFacebookF} />
        </SocialButton>
        <SocialButton>
            <FontAwesomeIcon icon={faTwitter} />
        </SocialButton>
        <SocialButton>
            <FontAwesomeIcon icon={faGoogle} />
        </SocialButton>
        <SocialButton>
            <FontAwesomeIcon icon={faLinkedinIn} />
        </SocialButton>
    </SocialMediaStyled>
);
