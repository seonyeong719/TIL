import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "error"],
      control: { type: "radio" },
    },
    shape: {
      options: ["moreBtn", "submitBtn", "checkBtn", "round"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large", "full"],
      control: { type: "select" },
    },
  },
};

export const Primary = {
  args: {
    variant: "primary",
    shape: "moreBtn",
    size: "small",
    children: "Button",
  },
};
