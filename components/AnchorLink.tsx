import { FC, PropsWithChildren } from "react";
import Link from "next/link";

interface Props {
  href: string;
}
/**
 * 別タブで開くリンクコンポーネント
 * @param href 対象のURL
 * @param children クリック可能な内包するためのコンポーネント
 */
const AnchorLink: FC<PropsWithChildren<Props>> = ({ href, children }) => (
  <>
    <Link href={href} legacyBehavior>
      <a target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    </Link>
    <style jsx>
      {`
        a {
          color: #000000;
          font-size: 18px;
        }
        a:hover {
          color: #f8ab38;
        }
      `}
    </style>
  </>
);

export default AnchorLink;
