import { Meta as StoryMeta, StoryObj } from "@storybook/react";
import Header from "~/components/Header";
import { globalStyleDecorator } from "~/decorators/globalStyleDecorator";

type Story = StoryObj<typeof Header>;
type Meta = StoryMeta<typeof Header>;

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
