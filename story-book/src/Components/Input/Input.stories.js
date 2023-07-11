import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      options: ["default", "secondary"],
      control: { type: "radio" },
    },
    shape: {
      options: ["default", "littleShape", "shape"],
      control: { type: "radio" },
    },
    size: {
      options: ["default", "small", "large"],
      control: { type: "select" },
    },
    status: {
      options: ["default", "success", "error"],
      control: { type: "select" },
    },
  },
};

export const Primary = {
  args: {
    variant: "default",
    shape: "default",
    size: "default",
    children: "Input",
  },
};
