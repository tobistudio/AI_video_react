import styled from "styled-components";

export const LandingWrapper = styled.div`
    background-image: url('/assets/img/BG.png');
    background-repeat: no-repeat;
    padding-top: 176px;
    padding-bottom: 30px;
`

export const Container = styled.div`
    display: flex;
    max-width: 1320px;
    margin: auto;
    justify-content: space-between;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 584px;
`

export const Right = styled.div`
    position: relative;
`

export const Button = styled.div`
    position: relative;
    border-radius: 40px;
    width: fit-content;
    border: 1px solid rgba(255, 255, 255, 0.04);
    background: radial-gradient(1176.24% 116.69% at 6.91% 0%, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.06) 100%);
    backdrop-filter: blur(4px);
    padding: 8px 16px;
    color: #F6F6F8;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 128.571% */
    z-index: 20;
`

export const BottomButton = styled.div`
    border-radius: 8px;
    background: var(--Primary-CTA, #865DFF);
    position: absolute;
    width: 231px;
    height: 4px;
    bottom: -2px;
    left: 13px;
    z-index: 10;
`

export const Title = styled.div`
    font-family: Lato;
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 59.5px; /* 119% */
    color: white;
    max-width: 390px;
`

export const SubText = styled.div`
    color: #F6F6F8;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 140% */
`

export const ScanArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(8px);
    padding: 8px;
    padding-left: 16px;
`

export const InputArea = styled.div`
    display: flex;
    color: #C4C2CC;
    gap: 12px;
`

export const Intro = styled.div`
    display: flex;
    gap: 16px;
`

export const Imagine = styled.div`

`

export const IntroText = styled.div`
    display: flex;
    flex-direction: column;
    h2 {
        margin: 0;
        color: #F6F6F8;
        font-family: Lato;
        font-size: 32px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
    }
    p {
        margin: 0;
        color: #F6F6F8;
        font-family: Lato;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`

export const Box = styled.div`
    position: relative;
    border-radius: 48px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    background: radial-gradient(1176.24% 116.69% at 6.91% 0%, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.06) 100%);
    backdrop-filter: blur(4px);
    padding: 8px;
    z-index: 20;
`

export const BottomBar = styled.div`
    z-index: 10;
    position: absolute;
    top: calc(100% - 4px);
    border-radius: 8px;
    background: var(--Primary-CTA, #865DFF);
    width: 187px;
    height: 8px;
    left: calc(50% - 85px);
`

export const Divider = styled.div`
    width: 2px;
    height: 100%;
    background: rgba(255, 255, 255, 0.12);
`