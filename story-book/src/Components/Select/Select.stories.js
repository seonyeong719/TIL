import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    variant: {
      options: ["default", "secondary"],
      control: { type: "radio" },
    },
    size: {
      options: ["default", "small", "large"],
      control: { type: "select" },
    },
    color: {
      options: ["default", "skyBlue", "pink", "yellow"],
      control: { type: "select" },
    },
  },
};

export const Primary = {
  args: {
    variant: "default",
    size: "default",
    color: "default",
    children: "Select",
  },
};
