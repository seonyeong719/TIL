import styled, { css } from "styled-components";

const variantCSS = {
  default: css`
    border: 1px solid black;
  `,
  secondary: css`
    border: 3px dotted purple;
  `,
};

const shapeCSS = {
  default: css`
    border-radius: 5px;
  `,
  littleShape: css`
    border-radius: 15px;
  `,
  shape: css`
    border-radius: 30px;
  `,
};

const sizeCSS = {
  default: css`
    width: 300px;
    padding: 15px;
    font-size: 20px;
  `,
  small: css`
    width: 200px;
    padding: 20px;
    font-size: 15px;
  `,
  large: css`
    width: 500px;
    padding: 30px;
    font-size: 30px;
  `,
};

const statusCSS = {
  default: css`
    color: ${({ theme }) => theme.color.fontColor[300]};
  `,
  success: css`
    color: ${({ theme }) => theme.color.success};
  `,
  error: css`
    color: ${({ theme }) => theme.color.error};
  `,
};

export const Input = styled.input`
  width: 100%;
  background: none;
  outline: none;
  color: ${({ theme }) => theme.color.gray[200]};
  font-size: ${({ theme }) => theme.fontSize.base};
  border: 2px solid ${({ theme }) => theme.color.gray[100]};
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
    ${({ status }) => statusCSS[status]}
    :focus {
    border: 2px solid ${({ theme }) => theme.color.primary[300]};
  }
  cursor: pointer;
`;
