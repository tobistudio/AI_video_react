import React from 'react'
import * as Styled from './index.style'
import { Button } from '../../../components'
import { DataList, ImageData } from './data'

export const Increase: React.FC = () => {
    return (
        <Styled.IncreaseWrapper>
            <Styled.IncreaseContainer>
                <Styled.Left>
                    <Styled.LeftTop>
                        <Styled.LeftButton>
                            <Styled.Top>
                                <h5>
                                    Impacts
                                </h5>
                            </Styled.Top>
                            <Styled.Divide></Styled.Divide>
                        </Styled.LeftButton>
                        <Styled.Title>
                            Increased
                            creator growth
                        </Styled.Title>
                        <Styled.SubTitle>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Styled.SubTitle>
                    </Styled.LeftTop>
                    <Button bg='#865DFF'>Get started</Button>
                </Styled.Left>
                <Styled.Right>
                    <Styled.CardArea>
                        {
                            DataList.map((ele, id) => (
                                <Styled.Card key={id}>
                                    <Styled.First>
                                        <Styled.FirstLeft>
                                            <h2>{ele.title}</h2>
                                            <p>{ele.subtitle}</p>
                                        </Styled.FirstLeft>
                                        <Styled.FirstRight>
                                            {ele.icon}
                                        </Styled.FirstRight>
                                    </Styled.First>
                                    <Styled.Second>
                                        {ele.content}
                                    </Styled.Second>
                                    <Styled.Three>
                                        <img src={ele.imgSrc} alt='small' />
                                        <Styled.ThreeText>
                                            <h3>{ele.name}</h3>
                                            <p>{ele.role}</p>
                                        </Styled.ThreeText>
                                    </Styled.Three>
                                </Styled.Card>
                            ))
                        }

                    </Styled.CardArea>
                    <Styled.SlideArea></Styled.SlideArea>
                </Styled.Right>
            </Styled.IncreaseContainer>
            <Styled.IncreaseContainer>
                <Styled.Right>
                    <Styled.CardArea>
                        {
                            ImageData.map((ele, id) => (
                                <Styled.ImageCard>
                                    <Styled.ImageTop>
                                        <img src={ele.avatar} alt='avatar' />
                                        <Styled.TextArea>
                                            <h3>{ele.title}</h3>
                                            <p>{ele.subtitle}</p>
                                        </Styled.TextArea>
                                    </Styled.ImageTop>
                                    <img src={ele.imgSrc} alt='img' />
                                </Styled.ImageCard>
                            ))
                        }
                    </Styled.CardArea>
                    <Styled.SlideArea>
                    </Styled.SlideArea>
                </Styled.Right>
                <Styled.Left>
                    <Styled.LeftTop>
                        <Styled.LeftButton>
                            <Styled.Top>
                                <h5>
                                    Creators
                                </h5>
                            </Styled.Top>
                            <Styled.Divide></Styled.Divide>
                        </Styled.LeftButton>
                        <Styled.Title>
                            Loved by
                            1M+ creators
                        </Styled.Title>
                        <Styled.SubTitle>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Styled.SubTitle>
                    </Styled.LeftTop>
                    <Button bg='#865DFF'>Get started</Button>
                </Styled.Left>
            </Styled.IncreaseContainer>
        </Styled.IncreaseWrapper>
    )
}