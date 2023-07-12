import * as S from "./select.style";

function Select(props) {
  const { variant, shape, size, color, children, ...rest } = props;
  return (
    <S.Select variant={variant} size={size} color={color} {...rest}>
      {/* {mock.map((el) => (
        <option>{el}</option>
      ))} */}
      {/* {children.map((el) => (
        <option>{el}</option>
      ))} */}
      {children}
    </S.Select>
  );
}

export default Select;
