import * as React from "react"

function SendSVG(props:any) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M580.407 278.75C581.743 281.205 586 289 586 289s15.75-30.5 16-31l.02-.09-21.613 20.84zM570 272s7.298 4.381 9.345 5.597L601 257c-2.464 1.194-31 15-31 15z"
        transform="translate(-570 -257)"
        fill="#000"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SendSVG
