import React, {ReactNode} from "react";
import {styled} from "@mui/system";

const Container = styled('div')(() => ({
    position: 'relative',
    '&:hover .inner': {
        display: 'block'
    }
}));

const Inner = styled('div')(() => ({
    position: 'absolute',
    right: '-31px',
    top: '10%',
    zIndex: '700',
    display: 'none'
}))

interface Props {
    children: ReactNode;
    body: ReactNode;
}

const HoverBox: React.FC<Props> = ({children, body}) => {

    return (
        <Container>
            {children}

            <Inner className={'inner'}>
                {body}
            </Inner>
        </Container>
    )
}

export default HoverBox;