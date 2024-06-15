import React, { PropsWithChildren } from 'react';

const ContentWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {children}
    </div>
  );
};

export default ContentWrapper;
