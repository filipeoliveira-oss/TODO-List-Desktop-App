import * as React from "react"

function SaveSVG(props:any) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M172 522a1 1 0 112 0v4a1 1 0 11-2 0v-4zm-9 7h14a1 1 0 001-1v-11h-16v11a1 1 0 001 1zm19-12h-2v12a2 2 0 01-2 2h-16a2 2 0 01-2-2v-12h-2a4 4 0 00-4 4v24a4 4 0 004 4h24a4 4 0 004-4v-24a4 4 0 00-4-4z"
        transform="translate(-154 -517)"
        fill="currentColor"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SaveSVG
