import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  // yup의 email 조건을 사용하면 한국과 외국의 이메일 조건이 다르기 때문에  . 뒤에 붙여주는 (com)같은 이메일 조건이 불가.
  // 그래서 email조건 보단 matches를 사용해 정규표현식을 넣어주는걸 추천.
  email: yup
    .string()
    .required("이메일을 필수로 입력해주세요")
    .email("이메일 형식에 맞게 입력해주세요"),
  password: yup
    .string()
    .required("비밀번호는 필수 입력입니다.")
    .min(8, "최소8자 이상 입력해주세요")
    .max(18, "18자 이내로 입력해주세요")
    .matches(
      /^.*(?=^.{8,18}$)(?=.*d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
      "특수문자, 문자, 숫자를 포함한 형태의 암호를 입력해 주세요"
    ),
  confirmPW: yup
    .string()
    .required("비밀번호를 다시 확인해주세요.")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
  phoneNumber: yup
    .string()
    .matches(/^\d{3}-\d{4}-\d{4}$/, "올바른 핸드폰 번호 형식이 아닙니다.")
    .required("핸드폰 번호를 입력해주세요."),
  age: yup
    .number()
    .required("나이를 입력해주세요.")
    .min(10, "양심이 있으십니까?")
    .max(100, "100이하 값을 입력해주세요.")
    .typeError("나이는 숫자로 입력해주세요."),
});
