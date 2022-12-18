import { Fragment } from "react/cjs/react.production.min";
import MainHeader from "./main-header";

function Layout(propsn) {
  return (
    <Fragment>
      <MainHeader />
      <main>{propsn.children}</main>
    </Fragment>
  );
}

export default Layout;
