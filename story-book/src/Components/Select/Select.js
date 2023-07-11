import * as S from "./select.style";

function Select(props) {
  const mock = [20, 30, 40, 50];

  const { variant, shape, size, color, ...rest } = props;
  return (
    <S.Select variant={variant} size={size} color={color} {...rest}>
      {mock.map((el) => (
        <option>{el}</option>
      ))}
    </S.Select>
  );
}

export default Select;
