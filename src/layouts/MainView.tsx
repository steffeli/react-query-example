import React from "react";
import TopMenu from "../components/TopMenu";

interface MainViewProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function MainView(props: MainViewProps) {
  const { children } = props;
  return (
    <div>
      <TopMenu />
      {children}
    </div>
  );
}

export default MainView;
