import {MainLayout} from '../components/layouts/main-layout.component';
import {useState, useEffect} from 'react';
import {Result} from "../models/result/Result";
import {NextPageContext} from "next";
import {PageResultInfo} from "../components/page-result-info/page-result-info.component";
import {ItemCollection} from "../components/item-collection/item-collection.component";
import {DeviceDetectorProvider} from "../contexts/device-detector.context";
import {load} from "../services/result.service";
import {isIe, isMobile} from "../services/device-detector.service";
import {createSeoScript} from "../services/seo.service";

interface ResultPageProps {
  result: Result,
  isMobileView: boolean,
  isIeView: boolean,
}


/**
 * Индексная страница
 * @param serverResult
 * @param isMobileView
 * @param isIeView
 * @constructor
 */
export default function Home({ result: serverResult, isMobileView, isIeView }: ResultPageProps) {
  const [result, setResult] = useState(serverResult);
  useEffect(() => {
    if (!serverResult) {
      load().then(result => setResult(result));
    }
    load().then(result => setResult(result));
  }, []);

  if (!result) {
    return (
        <MainLayout>
          <div>Loading...</div>
        </MainLayout>
    )
  }

  return (
    <MainLayout title={'ozeex | index page'} seoJson={createSeoScript(result.item)}>
        <DeviceDetectorProvider isMobileView={isMobileView} isIeView={isIeView}>
            <PageResultInfo info={result.info} />
            <ItemCollection items={result.item} />
        </DeviceDetectorProvider>
    </MainLayout>
  )
}

Home.getInitialProps = async ({req}: NextPageContext) => {
  let isMobileView = isMobile(req);
  let isIeView = isIe(req);
  if (!req) { // на клиенте
      return {
        result: [],
        isMobileView: Boolean(isMobileView),
        isIeView: Boolean(isIeView)
      }
  }
  const result = await load();

  return {
    result,
    isMobileView: Boolean(isMobileView),
    isIeView: Boolean(isIeView)
  }
};
