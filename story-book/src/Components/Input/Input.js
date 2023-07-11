import * as S from "./input.style";

const Input = ({ variant, shape, status, size, children, ...rest }) => {
  return (
    <S.Input
      variant={variant}
      shape={shape}
      status="default"
      size={size}
      {...rest}
      placeholder={children}
    />
  );
};
export default Input;
