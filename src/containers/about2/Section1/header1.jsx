import React from "react";

const Header = (props) => {
  console.log(props);
  return props.header.map((item, index) => {
    return (
      <div key={index}>
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
      </div>
    );
  });
};

export default Header;
