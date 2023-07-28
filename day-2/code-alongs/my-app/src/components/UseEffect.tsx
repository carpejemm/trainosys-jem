import React, { useState } from 'react'

const Child: React.FC = () => {
  console.log('%c Child Render start', 'background: #8024C9; color: white');
  React.useEffect(() => {
    console.log('%c Child - useEffect with []', 'background: #17E0C1; color: #230341');

    return () => console.log('%c Child - Cleanup useEffect with []', 'background: #17E0C1; color: #230341');
  }, []);

  console.log('%c Child Render end', 'background: #8024C9; color: white');
  return <p>child</p>;
};

const Parent: React.FC = () => {
  const [shouldRenderChild, setShouldRenderChild] = React.useState<boolean>(() => {
    console.log('%c Parent Lazy initializer', 'background: #8024C9; color: white');
    return false;
  });

  console.log('%c Parent Render start', 'background: #8024C9; color: white');

  React.useEffect(() => {
    console.log('%c Parent - useEffect with []', 'background: #17E0C1; color: #230341');

    return () => console.log('%c Parent - Cleanup useEffect with []', 'background: #17E0C1; color: #230341');
  }, []);

  React.useEffect(() => {
    console.log('%c Parent - useEffect with [dependency]', 'background: #17E0C1; color: #230341');

    return () => console.log('%c Parent - Cleanup useEffect with [dependency]', 'background: #17E0C1; color: #230341');
  }, [shouldRenderChild]);

  console.log('%c Parent Render end', 'background: #8024C9; color: white');
  return (
    <div>
      <button onClick={() => setShouldRenderChild((shouldRenderChild) => !shouldRenderChild)}>Should render child?</button>
      {shouldRenderChild ? <Child /> : null}
    </div>
  );
};

export default Parent;
