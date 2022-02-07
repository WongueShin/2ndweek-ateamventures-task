import React from "react";
import styled from "styled-components";

export const Nav:React.FC = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: #1565C0;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`

export const Logo:React.FC = styled.div`
    background-image: url("Images/Logo.png");
    width: 153px;
    height: 20px;
    background-size: cover;
    position: relative;
    left: 2.78%;
    top: 35.71%;
`

export const UserInfo:React.FC = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 208.67px;
    height: 20px;
    position: absolute;
    right: 40px;
    top: 25px;
`

export const UserIcon:React.FC = styled.div`
    background-image: url("Images/UserIcon.png");
    height: 15px;
    width: 16.67px;
    margin-right: 8px;
`