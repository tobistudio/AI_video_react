import React from 'react'
import * as Styled from './index.style'
import { Button } from '../../../components'
import { IoMdLink } from "react-icons/io"

export const Landing: React.FC = () => {
    return (
        <Styled.LandingWrapper>
            <Styled.Container>
                <Styled.Left>
                    <div style={{ position: 'relative' }}>
                        <Styled.Button>
                            #1 AI MINECRAFT ANALYTIC TOOL
                        </Styled.Button>
                        <Styled.BottomButton></Styled.BottomButton>
                    </div>
                    <Styled.Title>
                        Rapid scan,
                        Swift solutions,
                        AI perfects your Minecraft server.
                    </Styled.Title>
                    <Styled.SubText>
                        Blockalytics AI is a generative AI problem finder that scans through YOUR files and finds current and future bugs in one click. Powered by OpenAI.
                    </Styled.SubText>
                    <Styled.ScanArea>
                        <Styled.InputArea>
                            <IoMdLink color='#C4C2CC' size={24} />
                            <div>Drop</div>
                        </Styled.InputArea>
                        <Button bg='#865DFF'>Try 1 scan free!</Button>
                    </Styled.ScanArea>
                    <Styled.Intro>
                        <Styled.Imagine>
                            <img src={'/assets/img/peoples.png'} alt='peoples' />
                        </Styled.Imagine>
                        <Styled.Divider></Styled.Divider>
                        <Styled.IntroText>
                            <h2>+5.6</h2>
                            <p>Customers and Users</p>
                        </Styled.IntroText>
                    </Styled.Intro>
                </Styled.Left>
                <Styled.Right>
                    <Styled.Box>
                        <img src={'/assets/img/landing-img.png'} alt='box' />
                    </Styled.Box>
                    <Styled.BottomBar></Styled.BottomBar>
                </Styled.Right>
            </Styled.Container>
        </Styled.LandingWrapper>
    )
}