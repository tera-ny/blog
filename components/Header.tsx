import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  contents: { title: string; ref: string }[];
}

const Header: FC<Props> = ({ contents }) => {
  const router = useRouter();
  return (
    <>
      <header>
        {contents.map((item, index) =>
          item.ref === router.pathname ? (
            <span key={index}>{item.title}</span>
          ) : (
            <Link key={index} href={item.ref} passHref legacyBehavior>
              <a>
                <span>{item.title}</span>
              </a>
            </Link>
          )
        )}
      </header>
      <style jsx>
        {`
          header {
            padding: 34px 54px 0;
            display: flex;
            gap: 28px;
            font-size: 20px;
          }
          a {
            color: #000000;
          }
          a:hover {
            color: #f8ab38;
          }
          @media (max-width: 700px) {
            header {
              padding: 20px 20px 12px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
