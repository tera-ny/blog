---
to: stories/<%= path%>.stories.tsx
---
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import <%= Name %> from "~/components/<%= path%>";
import { globalStyleDecorator } from "~/decorators/globalStyleDecorator";

type Story = ComponentStoryObj<typeof <%= Name %>>;
type Meta = ComponentMeta<typeof <%= Name %>>;

export default {
  component: <%= Name %>,
  decorators: [globalStyleDecorator],
} as Meta;

export const Default: Story = {};
