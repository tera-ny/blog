import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Header from "~/components/Header";
import { globalStyleDecorator } from "~/decorators/globalStyleDecorator";

type Story = ComponentStoryObj<typeof Header>;
type Meta = ComponentMeta<typeof Header>;

export default {
  component: Header,
  decorators: [globalStyleDecorator],
} as Meta;

export const Default: Story = {
  args: {
    contents: [{ title: "Home", ref: "" }, { title: "Test", ref: "/test" }],
  },
  parameters: {
    nextRouter: {
      pathname: "/test",
      asPath: "/test",
    },
  },
};
