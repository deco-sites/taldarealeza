import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Enable View Transitions API */}
      <meta name="view-transition" content="same-origin" />

      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-9P2TM04JWL"></script>

      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-9P2TM04JWL', {
          'server_container_url': 'https://server-side-tagging-orba6vngwq-uc.a.run.app',
         });
      `}}></script>

    </Head>
  );
}

export default GlobalTags;
