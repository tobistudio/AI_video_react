import React from 'react'
import * as Styled from './index.style'
import { FaRegClosedCaptioning } from "react-icons/fa6"

export const Powerful: React.FC = () => {
    return (
        <Styled.PowerfulWrapper>
            <Styled.PowerfulContainer>
                <Styled.Top>
                    <Styled.ToolButton>
                        <span>Tools</span>
                        <Styled.Divider />
                    </Styled.ToolButton>
                    <Styled.Icon>More powerful tools to help you</Styled.Icon>
                    <Styled.SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</Styled.SubTitle>
                </Styled.Top>
                <Styled.Content>
                    {
                        [...new Array(9)].map((ele) =>
                            <Styled.List>
                                <FaRegClosedCaptioning size={48} color='#865DFF' />
                                <Styled.ContentTitle>Caption animation</Styled.ContentTitle>
                                <Styled.ContentContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Styled.ContentContent>
                            </Styled.List>
                        )
                    }
                </Styled.Content>
            </Styled.PowerfulContainer>
        </Styled.PowerfulWrapper>
    )
}