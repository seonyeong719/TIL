import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../../Consts/signUpYup";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignupSchema) });
  console.log(getValues("password"));

  const onSubmit = (data) => console.log(data);

  return (
    <S.Div>
      <S.Wrap>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <p>회원가입</p>
          <S.InputWrapBtn>
            <S.ItemWrap>
              <S.Mark>*</S.Mark>
              <span>아이디</span>
            </S.ItemWrap>
            <S.InputBoxWrap>
              <input {...register("email")} placeholder="E-mail" />
            </S.InputBoxWrap>
          </S.InputWrapBtn>
          {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
          <S.InputWrap>
            <S.ItemWrap>
              <S.Mark>*</S.Mark>
              <span>비밀번호</span>
            </S.ItemWrap>
            <S.InputBoxWrap>
              <input
                {...register("password")}
                placeholder="특수문자, 영어, 숫자 포함 6자이상"
                type="password"
              />
            </S.InputBoxWrap>
          </S.InputWrap>
          {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
          <S.InputWrap>
            <S.ItemWrap>
              <S.Mark>*</S.Mark>
              <span>비밀번호 확인</span>
            </S.ItemWrap>
            <S.InputBoxWrap>
              <input {...register("confirmPW")} placeholder="PW check" type="password" />
            </S.InputBoxWrap>
          </S.InputWrap>
          {errors.confirmPW && <span style={{ color: "red" }}>{errors.confirmPW.message}</span>}
          <S.InputWrap>
            <S.ItemWrap>
              <S.Mark>*</S.Mark>
              <span>핸드폰</span>
            </S.ItemWrap>
            <S.InputBoxWrap>
              <input
                maxLength="13"
                {...register("phoneNumber", {
                  onChange: (e) => {
                    setValue(
                      "phoneNumber",
                      e.target.value
                        .replace(/[^0-9]/g, "")
                        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
                    );
                  },
                })}
                placeholder="010-0000-0000"
              />
            </S.InputBoxWrap>
          </S.InputWrap>
          {errors.phoneNumber && <span style={{ color: "red" }}>{errors.phoneNumber.message}</span>}
          <S.InputWrapBtn>
            <S.ItemWrap>
              <S.Mark>*</S.Mark>
              <span>나이</span>
            </S.ItemWrap>
            <S.InputBoxWrap>
              <input {...register("age")} placeholder="age" />
            </S.InputBoxWrap>
          </S.InputWrapBtn>
          {errors.age && <span style={{ color: "red" }}>{errors.age.message}</span>}
          <BtnWrap>
            <S.Button>회원가입</S.Button>
          </BtnWrap>
        </S.Form>
      </S.Wrap>
    </S.Div>
  );
};

export default SignUpPage;

const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 60%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Form = styled.form`
  border: 1px solid beige;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 40px 30px;
  max-width: 700px;
  min-width: 600px;
  & > p {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 82%;
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  background: pink;
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const ItemWrap = styled.div`
  display: flex;
  width: 20%;
  & > span {
    font-size: 16px;
    font-weight: 700;
  }
`;

const InputBoxWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  & > input {
    width: 100%;
    height: 10px;
    border: 1px solid beige;
    border-radius: 10px;
    margin: 10px 0px;
    display: flex;
    padding: 20px;
    margin-left: 10px;
    padding-left: 10px;
  }
`;
const InputWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const InputWrapBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Mark = styled.span`
  color: red;
  font-weight: 700;
`;

const S = {
  Div,
  Wrap,
  LogoImage,
  Form,
  Button,
  InputWrap,
  InputWrapBtn,
  Mark,
  ItemWrap,
  InputBoxWrap,
};
