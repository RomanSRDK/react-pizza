import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="136" cy="130" r="120" />
    <rect x="0" y="270" rx="0" ry="0" width="280" height="24" />
    <rect x="0" y="314" rx="10" ry="10" width="280" height="88" />
    <rect x="5" y="428" rx="5" ry="5" width="90" height="30" />
    <rect x="145" y="420" rx="20" ry="20" width="134" height="40" />
  </ContentLoader>
);

export default Skeleton;
