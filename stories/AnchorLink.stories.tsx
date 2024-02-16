import { Meta as StoryMeta, StoryFn } from "@storybook/react";
import AnchorLink from "~/components/AnchorLink";
import { globalStyleDecorator } from "~/decorators/globalStyleDecorator";

type Story = StoryFn<typeof AnchorLink>;
type Meta = StoryMeta<typeof AnchorLink>;

export default {
  component: AnchorLink,
  decorators: [globalStyleDecorator],
} as Meta;

export const Default: Story = ({ href }) => (
  <AnchorLink href={href ?? ""}>Test</AnchorLink>
);
