export const TOGGLE_LIST = [
  {
    path: "user",
    category: "회원관리",
    isSelected: false,
    children: [
      {
        path: "user-info",
        list: "회원정보",
        isToggle: false,
      },
      {
        path: "user-list",
        list: "회원목록",
        isToggle: false,
      },
    ],
  },
  {
    path: "product",
    category: "상품관리",
    isSelected: false,
    children: [
      {
        path: "product-info",
        list: "상품정보",
        isToggle: false,
      },
      {
        path: "product-list",
        list: "상품목록",
        isToggle: false,
      },
    ],
  },
];
