import styled from "styled-components";

export const FeatureWrapper = styled.div`
    padding-bottom: 60px;
    padding-top: 60px;
    max-width: 1320px;
    margin: auto;
`

export const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    padding-bottom: 24px;
    max-width: 424px;
    margin: auto;
`

export const Button = styled.div`
    border-radius: 40px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    background: radial-gradient(1176.24% 116.69% at 6.91% 0%, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.06) 100%);
    backdrop-filter: blur(4px);
    color: #F6F6F8;
    width: fit-content;
    z-index: 20;
    padding: 8px 16px;
    position: relative;
`

export const BottomSide = styled.div`
    position: absolute;
    border-radius: 8px;
    background: var(--Primary-CTA, #865DFF);
    width: 54px;
    height: 4px;
    bottom: -2px;
    left: calc(50% - 27px);
    z-index: 10;
`

export const TitleTag = styled.div`
    position: relative;
    width: fit-content;
`

export const Title = styled.div`
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

export const AiList = styled.div`
    padding: 48px;
    border-radius: 48px;
    background: rgba(255, 255, 255, 0.02);
    display: flex;
    justify-content: space-between;
    overflow: hidden;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    min-width: 588px;
    transition: all .3s;
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 100px;
`

export const Tab = styled.div<{ isTab: number }>`
    padding: 24px;
    border-radius: 24px;
    background: ${props => props.isTab ? 'rgba(255, 255, 255, 0.04)' : 'transparent'};
    backdrop-filter: blur(24px);
    display: flex;
    gap: 16px;
    cursor: pointer;
`

export const Icon = styled.div<{ isTab: number }>`
    display: flex;
    width: 64px;
    height: 64px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 42px;
    border: 2px solid rgba(255, 255, 255, 0.04);
    background: radial-gradient(1176.24% 116.69% at 6.91% 0%, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.06) 100%);
    backdrop-filter: blur(4px);
    opacity: ${props => props.isTab ? 1 : 0.64};
    color: ${props => props.isTab ? '#865DFF' : '#C4C2CC'};
`

export const TabRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const TabTitle = styled.div<{ isTab: number }>`
    color: ${props => props.isTab ? '#F6F6F8' : '#C4C2CC'};
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const TabSubTitle = styled.div<{ isTab: number }>`
    color: ${props => props.isTab ? '#F6F6F8' : '#C4C2CC'};
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const ImageArea = styled.div`
    padding: 8px;
    border-radius: 48px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    background: radial-gradient(1176.24% 116.69% at 6.91% 0%, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.06) 100%);
    backdrop-filter: blur(4px);
`