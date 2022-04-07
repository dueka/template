import React, { useEffect, Fragment, ReactNode } from "react";
import { withRouter } from "react-router-dom";

interface ScrollToTopProps {
  history?: any;
  children?: ReactNode;
}

function ScrollToTop({ history, children }: ScrollToTopProps) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
