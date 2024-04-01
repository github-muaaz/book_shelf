import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import CenterBox from "../../components/elements/center-box";

const Home: React.FC = () => {

    return(
        <CenterBox>
            <Typography variant="h1">
                Home page
            </Typography>

            <Box
                sx={{
                    mt: '70px',
                    typography: 'body1',
                    '& > :not(style) ~ :not(style)': {
                        ml: 2,
                    },
                }}
            >
                <Link href="/books">Books</Link>
                <Link href="/sign-in">Sign in</Link>
                <Link href="/sign-up">Sign up</Link>
            </Box>
        </CenterBox>
    )
}

export default Home;