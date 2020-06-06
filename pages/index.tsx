import * as React from "react";
import Link from "next/link";
import json from "~/metaData.json";
export default () => {
  const metaDatas: { [key: string]: any } = json;
  return (
    <React.Fragment>
      <h1>記事一覧</h1>
      <div>
        {Object.entries(metaDatas).map(([key, value]) => {
          return (
            <React.Fragment>
              <Link href={key}>
                <a>{value.title}</a>
              </Link>
              <br />
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};
