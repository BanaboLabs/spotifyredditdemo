import React from "react";

export default function Contact(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="9" stroke={props.contactcolor} />
      <circle cx="10" cy="16" r="0.5" fill={props.contactcolor} />
      <path
        d="M10 14V13.1432C10 12.429 10.357 11.762 10.9512 11.3659L11.5497 10.9669C12.4558 10.3628 13 9.34591 13 8.25694V8C13 6.34315 11.6569 5 10 5V5C8.34315 5 7 6.34315 7 8V8"
        stroke={props.contactcolor}
      />
    </svg>
  );
}
