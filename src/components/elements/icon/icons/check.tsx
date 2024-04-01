import { SVGProps } from "react"

export const Check = ({stroke, ...props}: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" width={'16px'} height="16px" {...props} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2371_66)">
            <path d="M18.3334 9.23806V10.0047C18.3324 11.8017 17.7505 13.5503 16.6745 14.9896C15.5986 16.4289 14.0862 17.4818 12.3629 17.9913C10.6396 18.5008 8.7978 18.4396 7.11214 17.8169C5.42648 17.1941 3.98729 16.0431 3.00922 14.5356C2.03114 13.0281 1.56657 11.2448 1.68481 9.45166C1.80305 7.65853 2.49775 5.95167 3.66531 4.58562C4.83288 3.21958 6.41074 2.26755 8.16357 1.87152C9.91641 1.47549 11.7503 1.65668 13.3918 2.38806M18.3334 3.33329L10.0001 11.675L7.50008 9.17496" stroke={stroke || "#FEFEFE"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_2371_66">
                <rect width="20" height="20" fill={stroke || "white"}/>
            </clipPath>
        </defs>
    </svg>
);