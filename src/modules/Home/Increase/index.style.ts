import styled from "styled-components";

export const IncreaseWrapper = styled.div`
    padding-bottom: 30px;
    background: rgba(255, 255, 255, 0.02);
`

export const IncreaseContainer = styled.div`
    max-width: 1320px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 536px;
`

export const Right = styled.div`
`

export const CardArea = styled.div`
    display: flex;
    gap: 24px;
`

export const Card = styled.div`
    max-width: 320px;
    padding: 24px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.02);
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const SlideArea = styled.div`

`

export const LeftButton = styled.div`
    position: relative;
    width: fit-content;
`

export const Top = styled.div`
    border-radius: 40px;
    border: 2px solid rgba(255, 255, 255, 0.04);
    background: radial-gradient(1176.24% 116.69% at 6.91% 0%, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.06) 100%);
    backdrop-filter: blur(4px);
    width: fit-content;
    z-index: 20;
    padding: 8px 16px;
    position: relative;
    h5 {
        margin: 0;
        color: #F6F6F8;
        font-family: Lato;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px; /* 128.571% */
    }
`

export const LeftTop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const Divide = styled.div`
    position: absolute;
    width: 49px;
    height: 4px;
    border-radius: 8px;
    background: var(--Primary-CTA, #865DFF);
    bottom: -2px;
    left: calc(50% - 24px);
    z-index: 10;
`

export const Title = styled.div`
    font-family: Lato;
    font-size: 54px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    color: #F6F6F8;
`

export const SubTitle = styled.div`
    color: #C4C2CC;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const First = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
`

export const Second = styled.div`
    color: #F6F6F8;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    min-height: 120px;
`

export const Three = styled.div`
    border-radius: 80px;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(12px);
    display: flex;
    gap: 8px;
    width: fit-content;
    img {
        margin: 4px;
    }
`

export const FirstLeft = styled.div`
    h2 {
        color: var(--Primary-CTA, #865DFF);
        font-family: Lato;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin: 0;
    }
    p {
        color: #C4C2CC;
        font-family: Lato;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin: 0;
    }
`

export const FirstRight = styled.div`

`

export const ThreeText = styled.div`
    padding: 10.5px 0;
    padding-right: 24px;
    h3 {
        color: #F6F6F8;
        font-family: Lato;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
    }
    p {
        color: #C4C2CC;
        font-family: Lato;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
    }
`

export const ImageCard = styled.div`
    padding: 24px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.02);
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const ImageTop = styled.div`
    display: flex;
    gap: 8px;
    border-radius: 80px;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(12px);
    img {
        width: 48px;
        height: 48px;
        margin: 4px;
    }
    align-items: center;
`

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    h3 {
        margin: 0;
        color: #F6F6F8;
        font-family: Lato;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    
    p {
        color: #C4C2CC;
        font-family: Lato;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
    }
`