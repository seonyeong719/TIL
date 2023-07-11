import { Input } from "./input.style";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      options: ["primary"],
      control: { type: "radio" },
    },
    shape: {
      options: ["moreBtn", "round"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large", "full"],
      continue: { type: "select" },
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  shape: "default",
  size: "default",
};
