import * as S from "./input.style";

const Input = ({ variant = "default", shape = "default", status = "default", ...rest }) => {
  return <S.Input variant={variant} shape={shape} status="default" {...rest} />;
};
export default Input;
