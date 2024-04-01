import { SVGProps } from "react"

export const Close = ({stroke, ...props}: SVGProps<SVGSVGElement>) => (
    <svg width="24" height="25" {...props} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 9.5L9 15.5M9 9.5L15 15.5M22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5Z" stroke={stroke || "#151515"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);