import React from 'react'
import * as Styled from './index.style'
import { SlideData } from './data'

export const BetweenBar: React.FC = () => {
    return (
        <Styled.BetweenWrapper>
            <Styled.Title>Trusted by 375,000 customers like</Styled.Title>
            <Styled.SlideSection>
                {
                    [...new Array(2)].map((e) =>
                        SlideData.map((ele, id) => (
                            <Styled.SlideItem key={id}>{ele.imgSrc}</Styled.SlideItem>
                        ))
                    )
                }
            </Styled.SlideSection>
        </Styled.BetweenWrapper>
    )
}