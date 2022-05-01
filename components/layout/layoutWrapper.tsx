import Layout from "./layout";
import DefaultLayout from "./default";
const layouts = {
  default: DefaultLayout,
  admin: Layout
};

const LayoutWrapper = (props: JSX.IntrinsicAttributes) => {
  // to get the text value of the assigned layout of each component
  const GetLayout = layouts[props.children.type.layout];
  // if we have a registered layout render children with said layout
  if (GetLayout != null) {
    return <DefaultLayout {...props}>{props.children}</DefaultLayout>;
  }
  // if not render children with fragment
  return <Layout {...props}>{props.children}</Layout>;
};

export default LayoutWrapper;