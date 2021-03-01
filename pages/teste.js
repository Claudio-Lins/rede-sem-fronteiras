import React from "react";
import { Button } from "reactstrap";

export default (props) => {
  return (
    <div className="min-h-screen bg-green-500 items-center flex mx-auto justify-between">
      <div className='flex mx-auto'>
        <Button color="danger">Danger!</Button>
      </div>
    </div>
  );
};
