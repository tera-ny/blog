import { ComponentMeta, ComponentStory } from "@storybook/react";
import AnchorLink from "~/components/AnchorLink";
import { globalStyleDecorator } from "~/decorators/globalStyleDecorator";

type Story = ComponentStory<typeof AnchorLink>;
type Meta = ComponentMeta<typeof AnchorLink>;

export default {
  component: AnchorLink,
  decorators: [globalStyleDecorator],
} as Meta;

export const Default: Story = ({ href }) => (
  <AnchorLink href={href ?? ""}>Test</AnchorLink>
);
