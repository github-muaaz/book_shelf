import { SVGProps } from "react"

export const Search = ({stroke, ...props}: SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21L16.65 16.65M11 6C13.7614 6 16 8.23858 16 11M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke={stroke || "#283618"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);