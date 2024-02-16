import { Decorator } from "@storybook/react";

export const globalStyleDecorator: Decorator = (Story) => (
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

        h1,
        h2,
        h3 {
          font-weight: 500;
        }
        h4 {
          font-weight: 300;
        }
        h1 {
          padding-top: 4px;
          font-size: 24px;
        }
        h2 {
          padding-top: 4px;
          padding-bottom: 0;
        }
        p {
          font-size: 14px;
          color: #494949;
        }
      `}
    </style>
  </>
);
