import * as React from "react"

function CheckSVG(props:any) {
  return (
    <svg
      width="50%"
      height="50%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 12.5l2 2 5-5"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="check"
      />
      <path
        d="M7 3.338A9.954 9.954 0 0112 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
        strokeWidth={2.5}
        strokeLinecap="round"
        className="circleCheck"
      />
    </svg>
  )
}

export default CheckSVG
