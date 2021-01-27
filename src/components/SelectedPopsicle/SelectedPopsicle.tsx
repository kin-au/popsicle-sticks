import React from "react";

interface SelectedPopsicleProps {
  selectedUser: any;
  setSelectedUser: any;
  showingSelected: boolean;
  setShowingSelected: any;
}

function SelectedPopsicle(props: SelectedPopsicleProps) {
  return (
    <>
      <div>
        <h1>{props.selectedUser.username}</h1>
        <button
          onClick={() => {
            props.setSelectedUser({});
            props.setShowingSelected(false);
          }}
        >
          OK
        </button>
      </div>
    </>
  );
}

export default SelectedPopsicle;
