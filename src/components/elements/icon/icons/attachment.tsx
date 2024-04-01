import { SVGProps } from "react"

export const Attachment = ({stroke, ...props}: SVGProps<SVGSVGElement>) => (
    <svg width="16" height="17" {...props} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.28">
            <path d="M8.47167 12.7427L7.52886 13.6855C6.22711 14.9872 4.11656 14.9872 2.81481 13.6855C1.51306 12.3837 1.51306 10.2732 2.81481 8.97142L3.75762 8.02861M12.2429 8.97142L13.1857 8.02861C14.4875 6.72687 14.4875 4.61632 13.1857 3.31457C11.884 2.01282 9.77341 2.01282 8.47167 3.31457L7.52886 4.25738M5.66693 10.8333L10.3336 6.16667" stroke={stroke || "#151515"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
    </svg>
);