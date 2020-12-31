import styled from "styled-components";

export const SocialMediaStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialButton = styled.button`
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: #333;
  border-radius: 50%;
  border: 1px solid #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: #4481eb;
    border-color: #4481eb;
  }
`;

