import styled, { css } from "styled-components";
import { flexAllCenter } from "../../Styles/common";

const variantCSS = {
  default: css`
    background-color: ${({ theme }) => theme.color.white};
    ${flexAllCenter};
    cursor: pointer;
    box-sizing: border-box;
  `,
};

const shapeCSS = {
  moreBtn: css`
    border-radius: 500px;
    border: 1.5px solid ${({ theme }) => theme.color.gray[200]};
  `,

  default: css`
    border-radius: 6px;
    &:disabled {
      background: ${({ theme }) => theme.color.gray[200]};
      color: ${({ theme }) => theme.color.fontColor[100]};
      border: none;
    }
  `,
  checkBtn: css`
    border-radius: 10px;
    &:disabled {
      background: ${({ theme }) => theme.color.gray[200]};
      color: ${({ theme }) => theme.color.fontColor[100]};
      border: none;
    }
  `,

  round: css`
    border-radius: 50%;
  `,
};

const sizeCSS = {
  small: css`
    width: 40px;
    max-width: 60px;
    height: 40px;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.fontSize.medium};
  `,
  default: css`
    width: 96px;
    height: 48px;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.fontSize.medium};
  `,
  large: css`
    width: 128px;
    height: 64px;
    padding: 16px 9;
    font-size: ${({ theme }) => theme.fontSize.medium};
  `,
  full: css`
    width: 100%;
    aspect-ratio: 8 / 1;
    font-size: ${({ theme }) => theme.fontSize.medium};
  `,
};

export const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
    ${({ size }) => sizeCSS[size]}
	cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;
