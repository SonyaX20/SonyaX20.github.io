import { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        // 全局脚本已经在 index.html 中引入，这里只需触发渲染
        // 对应原生代码中的: (adsbygoogle = window.adsbygoogle || []).push({});
        // eslint-disable-next-line no-undef
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      // 本地开发或脚本未完全加载时，静默忽略错误即可
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center', minHeight: '150px', width: '100%' }}
      data-ad-client="ca-pub-3729271493600231"
      data-ad-slot="6963685550"
      data-ad-layout="in-article"
      data-ad-format="fluid"
    />
  );
};

export default AdBanner;
