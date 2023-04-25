import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
}

export default MyApp;

// 349. The "_app.js" File & Layout Wrapper
// CAME FROM pages/index.js
// Ok. This is kind of your route Component.
// This "MyApp" component acts as the root Component "Next.Js" will render.
// It receives props and uses object de-structuring "{...pageProps}" to pull information out of the props, and this information is a Component prop and a page prop.
// These props are passed into this "MyApp" component automatically by "Next.js", since "Next.js" is the thing using that specific Component.
// And Component is a prop that holds the actual page content that should be rendered. So it will be different whenever we switch a page and page props are specific props our pages might be getting, and at the moment our pages are not getting any props at all, because at the moment we have no source that would provide such props, let's change it.
// That "MyApp" Component will be the actual page content of our different pages. And it will change whenever we navigate from page-1 to page-2.
// We can utilize this "_app.js" file and simply wrap this component here with our "<Layout>".
// So we can remove the layout wrapper from "index.js" and add "<Layout>" here
// 349. The "_app.js" File & Layout Wrapper
