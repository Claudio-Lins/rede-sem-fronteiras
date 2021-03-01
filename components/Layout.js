
import Head from "next/head";
import Menu from './Menu'


export default function Layout({ children, title = "Rede Sem Fronteiras" }) {
  return (
    <>
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <header>
          <Menu />
        </header>
        {children}
      </div>
    </>
  );
}
