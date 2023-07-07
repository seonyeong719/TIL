import styled from "styled-components";
import { TOGGLE_LIST } from "../../../Consts/menu_list";
import { useNavigate, useParams } from "react-router-dom";

function Side() {
  const list = TOGGLE_LIST;
  const navigate = useNavigate();
  const { category, menu } = useParams();

  const urlNavigate = (elPath, ePath) => {
    // navigate(`${}`);
    console.log(elPath);
  };

  return (
    <S.Wrapper>
      <S.Wrap>
        <S.CategoryTitle>
          {list.map((el) => (
            <S.CategoryList>
              <S.Title>{el.category}</S.Title>
              <S.ListMenuWrap>
                {el.children.map((e) => (
                  <S.ListMenu onClick={() => urlNavigate(el.path, e.path)}>{e.list}</S.ListMenu>
                ))}
              </S.ListMenuWrap>
            </S.CategoryList>
          ))}
        </S.CategoryTitle>
      </S.Wrap>
    </S.Wrapper>
  );
}
export default Side;

const Wrapper = styled.div`
  border-right: 1px solid black;
  width: 250px;
  height: 88vh;
  padding: 30px;
`;

const Wrap = styled.div``;

const CategoryTitle = styled.ul``;

const CategoryList = styled.li`
  list-style: none;
  /* font-size: 25px;
  margin-bottom: 20px;
  font-weight: 600;
  cursor: pointer; */
  /* &:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
    color: red;
  } */
`;

const Title = styled.span`
  list-style: none;
  font-size: 25px;
  margin-bottom: 15px;
  font-weight: 600;
  cursor: pointer;
`;
const ListMenuWrap = styled.ul`
  font-size: 18px;
  list-style: none;
  margin-left: 40px;
  margin-top: 20px;
  /* display: none; */
`;

const ListMenu = styled.li`
  margin: 15px 0;
  font-weight: 400;
`;

const S = {
  Wrapper,
  Wrap,
  CategoryTitle,
  CategoryList,
  Title,
  ListMenuWrap,
  ListMenu,
};
