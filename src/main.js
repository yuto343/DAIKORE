// Import main css
import "~/assets/style/index.scss";

// Import default layout so we don't need to import it to every page
import DefaultLayout from "~/layouts/Default.vue";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // Add a meta tag
  head.meta.push({
    name: "twitter:card",
    content: "summary_large_image"
  });
  head.meta.push({
    name: "og:image",
    content: "https://yutonakano.com/ogp.png"
  });
  head.meta.push({
    name: "og:url",
    content: "https://yutonakano.com"
  });
  head.meta.push({
    name: "og:title",
    content: "ダイジナノハコレカラ"
  });
}
