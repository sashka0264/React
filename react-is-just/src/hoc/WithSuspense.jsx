/* eslint-disable react/display-name */
import React, { Suspense } from "react";

const WithSuspense = (MyComponent, Spinner) => {
  return (props) => {
    const fallback = !!Spinner ? <Spinner/> : null;
    return <Suspense fallback={fallback}>
      <MyComponent {...props}/>
    </Suspense>;
  };
};

export default WithSuspense;