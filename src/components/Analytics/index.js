import React from 'react'

/* As browser does not refresh with next... react.... 
          you need a "history change trigger" set up in Google Tag Manager. 
          That would register pageviews on history changes.  
  
          https://developers.google.com/analytics/devguides/collection/gtagjs/pages
*/

const Analytics = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING}', {
              page_path: window.location.pathname,
            });
          `
      }}
    />
  </>
)

export default Analytics
