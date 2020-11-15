import Head from 'next/head'
import {MainContainer, Root} from "./main-layout.styled";
import {Header} from "../header/header.component";
import {Footer} from "../footer/footer.component";

// todo
/**
 * Основной лэйаут страницы
 * @param children
 * @param title страници
 * @param seoJson данные для генераии сео
 * @constructor
 */
export function MainLayout ({ children, title = '', seoJson = {} }) {
    return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{title}</title>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoJson) }} />
        </Head>
        <Root>
            <MainContainer>
                <Header />
                <main>{children}</main>
                <Footer />
            </MainContainer>
        </Root>
      </>
    );
}