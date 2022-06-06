import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Profile from "~/components/Profile";
import { globalStyleDecorator } from "~/decorators/globalStyleDecorator";

type Story = ComponentStoryObj<typeof Profile>;
type Meta = ComponentMeta<typeof Profile>;

export default {
  component: Profile,
  decorators: [globalStyleDecorator],
} as Meta;

export const Default: Story = {};
