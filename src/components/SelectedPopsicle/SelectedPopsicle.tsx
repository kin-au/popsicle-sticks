import React from "react";

interface SelectedPopsicleProps {
  selectedUser: any;
  setSelectedUser: any;
  disableElement: boolean;
  setDisableElement: any;
}

function SelectedPopsicle(props: SelectedPopsicleProps) {
  return (
    <>
      <div>
        <h1>{props.selectedUser.username}</h1>
        <button
          onClick={() => {
            props.setSelectedUser({});
            props.setDisableElement(false);
          }}
        >
          OK
        </button>
      </div>
    </>
  );
}

export default SelectedPopsicle;
