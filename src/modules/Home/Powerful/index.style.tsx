import styled from "styled-components";

export const PowerfulWrapper = styled.div`

`

export const PowerfulContainer = styled.div`
    max-width: 1340px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;

`

export const ToolButton = styled.div`
    position: relative;
    width: fit-content;
    span {
        position: relative;
        z-index: 20;
        width: fit-content;
        display: flex;
        height: 40px;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        border-radius: 40px;
        border: 2px solid rgba(255, 255, 255, 0.04);
        background: radial-gradient(1176.24% 116.69% at 6.91% 0%, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.06) 100%);
        backdrop-filter: blur(4px);
        color: #F6F6F8;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px; /* 128.571% */
    }

`

export const Top = styled.div`
    max-width: 424px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 24px;
`

export const Icon = styled.div`
    text-align: center;
    font-family: Lato;
    font-size: 54px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    color: #F6F6F8;
`

export const SubTitle = styled.div`
    color: #C4C2CC;
    text-align: center;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Divider = styled.div`
    bottom: -2px;
    position: absolute;
    width: 33px;
    height: 4px;
    border-radius: 8px;
    background: var(--Primary-CTA, #865DFF);
    z-index: 10;
    right: calc(50% - 14px);
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 24px;
    border-radius: 48px;
    background: #1E1D29;
`

export const List = styled.div`
    padding: 24px;
`

export const ContentTitle = styled.div`
    color: #F6F6F8;
    font-family: Lato;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const ContentContent = styled.div`
    color: #C4C2CC;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`