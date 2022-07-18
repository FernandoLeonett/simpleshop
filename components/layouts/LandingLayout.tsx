import React, {Children} from "react";

import HomeContent from "../custom_style_component/HomeContent";
interface Props {
  children: React.ReactNode;
}

export default function ({children}: props): JSX.Element {
  return (
    <div>
      <HomeContent contenido={children} />
    </div>
  );
}
