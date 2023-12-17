import styled from "styled-components";
import { IButtonProps } from "../../types";

export const ButtonWrapper = styled.div<IButtonProps>`
    background: ${({ bg }) => bg ? bg : 'transparent'};
    border-radius: 16px;
    box-shadow: 0px 24px 48px 0px rgba(44, 39, 56, 0.16), 0px 12px 24px 0px rgba(44, 39, 56, 0.08);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    ${({ size, isicon }) => {
    switch (size) {
      case "sm":
        return `font-size: 14px; padding: 6px 33px;`;
      case "md":
        return isicon ? 'font-size: 25px; padding: 10px 12.76px;' : `font-size: 16px; padding: 14px 24px;`;
      case "lg":
        return `font-size: 16px; padding: 14px 35px;`;
      default:
        return `font-size: 16px; padding: 16px 24px;`;
    }
  }};
    color: ${({ font }) => font ? font : '#fff'};
    width: fit-content
`