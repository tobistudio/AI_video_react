import styled from "styled-components";

export const AppLayoutWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const AppLayoutContainer = styled.div`
    contain: content;
`

export const HeaderWrapper = styled.div`
    backdrop-filter: blur(14px);
    position: fixed;
    width: 100vw;
    z-index: 99;

`

export const HeaderContainer = styled.div`
    display: flex;
    max-width: 1320px;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0px;
    margin: auto;
`

export const NavbarItem = styled.div`
    color: #F6F6F8;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    cursor: pointer;
`

export const Button = styled.div`
    padding: 14px 24px;
    border-radius: 16px;
    border: 1px solid (#fff, #A181FF);
    background: #865DFF;
    width: fit-content;
    color: #FFF;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    cursor: pointer;
`

export const Navbar = styled.div`
    display: flex;
    gap: 72px;
`

export const Right = styled.div`
    display: flex;
    align-items: center;
    color: #F6F6F8;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    gap: 48px;
`

export const LoginButton = styled.div`
    cursor: pointer;
`

export const FooterWrapper = styled.div`
    background: rgba(255, 255, 255, 0.02);
    padding: 60px 0;
`

export const FooterContainer = styled.div`
    max-width: 1320px;
    margin: auto;
    display: flex;
    justify-content: space-between;
`

export const FooterLeft = styled.div`
    max-width: 359px;
    p {
        color: #C4C2CC;
        font-family: Lato;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`

export const FooterRight = styled.div`
    display: flex;
    gap: 24px;
`

export const IconArea = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 48px;
`

export const IconPart = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 42px;
    border: 2px solid rgba(255, 255, 255, 0.04);
    opacity: 0.64;
    background: radial-gradient(1176.24% 116.69% at 6.91% 0%, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.06) 100%);
    backdrop-filter: blur(4px);
`

export const CompanyArea = styled.div`
    flex: 1 1 0;
`

export const PracticeArea = styled.div`
    flex: 1 1 0;
`

export const FooterTitle = styled.div`
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: #F6F6F8;
`

export const FooterContent = styled.div`
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    a {
        text-decoration: none;
        color: #C4C2CC;
        font-family: Lato;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 125% */
    }
`