import React, { useState } from 'react'
import * as Styled from './index.style'
import { dataTabList, dataTabRight } from './data'

export const Feature: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<number>(0)

    return (
        <Styled.FeatureWrapper>
            <Styled.TitleArea>
                <Styled.TitleTag>
                    <Styled.Button>
                        Features
                    </Styled.Button>
                    <Styled.BottomSide></Styled.BottomSide>
                </Styled.TitleTag>
                <Styled.Title>AI Magic Tools</Styled.Title>
                <Styled.SubTitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                </Styled.SubTitle>
            </Styled.TitleArea>
            <Styled.AiList>
                <Styled.Left>
                    {
                        dataTabList.map((ele, id) => (
                            <Styled.Tab key={id} onClick={() => setCurrentTab(id)} isTab={currentTab === id ? 1 : 0}>
                                <Styled.Icon isTab={currentTab === id ? 1 : 0}>
                                    {ele.icon}
                                </Styled.Icon>
                                <Styled.TabRight>
                                    <Styled.TabTitle isTab={currentTab === id ? 1 : 0}>{ele.title}</Styled.TabTitle>
                                    <Styled.TabSubTitle isTab={currentTab === id ? 1 : 0}>{ele.subtitle}</Styled.TabSubTitle>
                                </Styled.TabRight>
                            </Styled.Tab>
                        ))
                    }
                </Styled.Left>
                <Styled.Right>
                    {
                        dataTabRight.map((ele, id) => (
                            <Styled.ImageArea key={id}>
                                <img src={ele.imgSrc} alt='img' />
                            </Styled.ImageArea>
                        ))
                    }
                </Styled.Right>
            </Styled.AiList>
        </Styled.FeatureWrapper>
    )
}