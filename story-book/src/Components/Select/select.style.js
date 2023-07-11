import styled, { css } from "styled-components";

const variantCSS = {
  default: css`
    width: 150px;
  `,
  secondary: css`
    width: 200px;
  `,
};

const sizeCSS = {
  default: css`
    font-size: 20px;
  `,
  small: css`
    font-size: 15px;
  `,
  large: css`
    font-size: 30px;
  `,
};

const colorCSS = {
  default: css``,
  skyBlue: css`
    background-color: skyblue;
  `,
  yellow: css`
    background-color: yellow;
  `,
  pink: css`
    background-color: pink;
  `,
};

export const Select = styled.select`
  font-size: ${({ theme }) => theme.fontSize.base};
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ color }) => colorCSS[color]}
  cursor: pointer;
`;
