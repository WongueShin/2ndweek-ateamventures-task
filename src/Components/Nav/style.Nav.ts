import styled from "styled-components";

export const NavWarpper= styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    visibility: hidden;
`

export const Nav = styled.nav`
    visibility: visible;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: #1565C0;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    @media (max-width: 425px){
        height: 44px;
        width: 100vw;
    }
`

export const PopupBackground = styled.div<{isPopup: boolean}>`
    background-color: #000000;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    visibility: ${Props=>Props.isPopup? "visible" : "hidden"};
    z-index: 4999 !important;
`

export const Popup = styled.div<{isPopup: boolean}>`
    background-color: #FFFFFF;
    height: 100%;
    width: 280px;
    left: 0px;
    top: 0px;
    position: absolute;
    transition: transform 0.25s ease-in ;
    visibility: ${Props=>Props.isPopup?"visible" : "hidden"} !important;
    transform: translateX(${Props => Props.isPopup?"0px" : "-280px"});
    z-index: 5000 !important;
`

export const PopupHeader = styled.div`
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #E5E5E5;
`

export const ColorLogo = styled.div`
    background-image: url("Images/Colorlogo.png");
    background-size: cover;
    width: 91.52px;
    height: 12px;
    position: absolute;
    left: 20px;
    top: 16px;
`

export const PopupUserInfo = styled.div`
    height: 20px;
    color: #323D45;
    position: absolute;
    left: 32px;
    top: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 20px;
    font-weight: 800;
`

export const PopupUserIcon = styled.div`
    background-image: url("Images/UserIconBlack.png");
    background-size: cover;
    width: 15px;
    height: 15px;
    margin-right: 8px;
`

export const PopupLogout = styled.div`
    height: 20px;
    position: absolute;
    left: 32px;
    top: 124px;
    color: #323D45;
    font-weight: 800;
`

export const Menu = styled.div`
    background-image: url("Images/Menu.png");
    background-size: cover;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 10px;
    left: 20px;
    display: none;
    @media (max-width: 425px){
        display: block;
    }
`

export const Logo = styled.div`
    background-image: url("Images/Logo.png");
    width: 153px;
    height: 20px;
    background-size: cover;
    position: relative;
    left: 2.78%;
    top: 35.71%;

    @media (max-width: 425px){
        width: 91.8px;
        height: 12px;
        left: 16.67%;
    }
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    //width: 208.67px;
    height: 20px;
    position: absolute;
    right: 40px;
    top: 25px;
    @media (max-width: 425px){
        display: none;
    }
`

export const UserIcon = styled.div`
    background-image: url("Images/UserIcon.png");
    background-size: cover;
    height: 15px;
    width: 16.67px;
    margin-right: 8px;
`
export const UserName = styled.span`
    color: #FFFFFF;
    line-height: 20px;
    font-weight: 500;
    &::after{
        content: '';
        height: 100%;
        border: 1px solid #FFFFFF;
        margin: 0 30px ;
    }
`

export const Logout = styled.span`
    color: #FFFFFF;
    line-height: 20px;
    font-weight: 500;
`

