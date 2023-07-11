import * as S from "./button.style";

function Button(props) {
  const { variant = "default", shape = "default", size = "default", children, ...rest } = props;
  return (
    <S.Button variant={variant} shape={shape} size={size} {...rest}>
      {children}
    </S.Button>
  );
}
export default Button;
