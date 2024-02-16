import * as React from "react"

function PencilSVG(props:any) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="-5 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="currentColor"
    >
      <path d="M18.344 4.781l-3.406 3.063s1.125.688 2.156 1.656c1 .969 1.719 2.063 1.719 2.063l2.906-3.469s-.031-.625-1.406-1.969c-1.406-1.344-1.969-1.344-1.969-1.344zM7.25 21.938l-.156 1.5 10.813-11.25s-.719-1-1.594-1.844a15.796 15.796 0 00-1.938-1.563L3.562 20.031l1.688-.094.188 1.813zM0 26.719l2.688-5.5 1.5-.125.125 1.719 1.813.25-.188 1.375L.5 27.188z" />
    </svg>
  )
}

export default PencilSVG
