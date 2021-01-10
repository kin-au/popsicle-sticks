import React from "react";

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
}

export default Header;
