import { DecoratorFn } from "@storybook/react";

export const globalStyleDecorator: DecoratorFn = (Story) => (
  <>
    <Story />
    <style jsx global>
      {`
        h1,
        h2,
        h3,
        h4,
        h5,
        p,
        a,
        img {
          margin: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        p,
        html,
        body {
          font-family: "Rubik", "M PLUS Rounded 1c",sans-serif;
          margin: 0;
        }
      `}
    </style>
  </>
);
