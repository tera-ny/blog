import { Meta as StoryMeta, StoryObj } from "@storybook/react";
import Profile from "~/components/Profile";
import { globalStyleDecorator } from "~/decorators/globalStyleDecorator";

type Story = StoryObj<typeof Profile>;
type Meta = StoryMeta<typeof Profile>;

export default {
  component: Profile,
  decorators: [globalStyleDecorator],
} as Meta;

export const Default: Story = {};
