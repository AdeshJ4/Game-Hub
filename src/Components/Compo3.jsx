// Effect clean up
// clean up function stop or undo whatever our useEffect is doing.
// ex if our useEffect is fetching data then clean up should stop or abort that task.
// if you are connecting then it should be disconnecting..
// Sometimes you don't need to use cleanup function..

import { useEffect } from "react";

const Compo3 = () => {
  const connect = () => console.log("Connected...");
  const disConnect = () => console.log("Disconnected...");

  useEffect(() => {
    connect();

    return () => disConnect();
  }, []);

  return (
    <>
      <h1>Effect Clean up</h1>
    </>
  );
};

export default Compo3;
