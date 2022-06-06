import { NextPage } from "next";
import NextHead from "next/head";

const code = ["0", "3", "6", "9", "c", "f"];

const codes = code
  .flatMap((c) => code.map((t) => c + c + t + t))
  .flatMap((c) => code.map((t) => c + t + t));

const Page: NextPage = () => {
  return (
    <>
      <NextHead>
        <title>
          WebSafeColor Pallet
        </title>
        <meta name={"description"} content={"WebSafeColorのカラーパレット"} />
      </NextHead>
      <main>
        <div className="container">
          {codes.map((code, key) => (
            <div
              key={key}
              style={{ backgroundColor: `#${code}` }}
              className="item"
            >
              <div>
                <span className="caption">
                  #{code}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
      <style jsx>
        {`
        main {
          padding: 32px 20px;
        }
        .container {
          display: grid;
          grid-template-columns: repeat(auto-fit ,200px);
          gap: 20px;
          justify-content: center;
          box-sizing: border-box;
        }
        .item {
          width: 200px;
          height: 200px;
          padding: 8px;
          box-sizing: border-box;
          box-shadow: 10px 5px 5px rgba(0,0,0,0.3);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .caption {
          color: black;
          background-color: white;
          padding: 4px;
          box-sizing: border-box;
        }
        `}
      </style>
    </>
  );
};

export default Page;
