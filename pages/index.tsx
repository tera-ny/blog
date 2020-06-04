import * as React from "react";
import Link from "next/link";
export default () => {
  return (
    <React.Fragment>
      <h1>記事一覧</h1>
      <div>
        <Link href="/posts/20200605">
          <a>SwiftPMで作るiOS向けStaticLibraryを作ってみた</a>
        </Link>
      </div>
    </React.Fragment>
  );
};
