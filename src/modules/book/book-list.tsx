import React, { ReactNode, useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { useMediaQuery } from "@mui/material";
import CardContent from "@mui/material/CardContent";

import Api from "../../service/api";
import Header from "../../components/header";
import Status from "../../components/elements/status";
import HoverBox from "../../components/elements/hover-box";
import Buttons from "../../components/buttons";
import BookInterface from "../../interfaces/Book";
import CreateModal from "../../components/modal-bodies/create-modal";
import CustomModal from "../../components/elements/modal";
import BookItemInterface from "../../interfaces/BookItem";
import CustomList from "../../components/elements/list/list";

const keys = ['Cover', 'Pages', 'Published', 'Isbn'];

const BookList: React.FC = () => {
    const [books, setBooks] = useState<BookItemInterface[]>(fake); // Replace 'fake' with initial data or empty array

    const [modalBody, setModalBody] = useState<ReactNode>(null);

    useEffect(() => {
        Api.FetchData('/books')
            .then((res: any) => {
                if (res)
                    setBooks(res)
            });
    }, []);

    // converting book properties into list items
    const mapToListItems = (book: BookInterface): string[] => {
        const arr: string[] = [];

        keys.forEach(key => {
            const lowerCaseKey = key.toLowerCase() as keyof BookInterface;
            arr.push(key + ': ' + book[lowerCaseKey]);
        });

        return arr;
    };

    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const handleCreate = () => setModalBody(<CreateModal onClose={() => setModalBody(null)} />);

    console.log('books', books);

    return (
        <Container maxWidth="xl" sx={{ padding: '0 40px' }}>
            <CustomModal onClose={() => setModalBody(null)}>
                {modalBody}
            </CustomModal>

            <Header />

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems={isSmallScreen ? "center" : "start"}
                flexDirection={isSmallScreen ? "column" : "row"}
                gap={{xs: 2, sm: 4}}
                p={2}
            >
                <Box>
                    <Box display="flex" gap={2}>
                        <Typography variant="body1" color="white" fontWeight="bold" sx={{ fontSize: isSmallScreen ? '24px' : '36px' }}>
                            You’ve got
                        </Typography>
                        <Typography variant="body1" color="#6200EE" fontWeight="bold" sx={{ fontSize: isSmallScreen ? '24px' : '36px' }}>
                            {`${books?.length} books`}
                        </Typography>
                    </Box>
                    <Typography variant="body1" color="white" sx={{ fontSize: isSmallScreen ? '16px' : '20px' }}>
                        Your books today
                    </Typography>
                </Box>

                <Button
                    type="submit"
                    variant="contained"
                    onClick={handleCreate}
                    sx={{
                        mt: {xs: 0, sm: 3},
                        mb: {xs: 0, sm: 2},
                        backgroundColor: '#6200EE',
                        '&:hover': {
                            backgroundColor: '#6200EE',
                        },
                        width: isSmallScreen ? '100%' : 'auto',
                        fontSize: isSmallScreen ? '16px' : 'inherit',
                    }}
                >
                    + Create a book
                </Button>
            </Box>

            <Box sx={{ marginTop: '36px' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {books?.map((bookItem: BookItemInterface) => {
                        const { book } = bookItem;

                        return (
                            <Grid item xs={4} key={book.id}>
                                <HoverBox
                                    body={<Buttons book={book} />}
                                >
                                    <Card sx={{ borderRadius: '12px' }}>
                                        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            <Typography variant="body1" fontWeight="600" fontSize={isSmallScreen ? '14px' : '16px'}>
                                                {book.title}
                                            </Typography>

                                            <CustomList items={mapToListItems(book)} />

                                            <Box
                                                display="flex"
                                                justifyContent={'space-between'}
                                                alignItems="start"
                                            >
                                                <Typography variant="body1" style={{ fontSize: isSmallScreen ? '12px' : '14px', fontWeight: 700 }}>
                                                    {`${book.author} / ${book.published}`}
                                                </Typography>

                                                <Status status={bookItem.status} />
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </HoverBox>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Container>
    )
}

export default BookList;

const fake = [
    {
        "book": {
            "id": 21,
            "isbn": "9781118464465",
            "title": "Guide",
            "cover": "http://url.to.book.cover",
            "author": "Eben 3",
            "published": 2013,
            "pages": 198
        },
        "status": 0
    },
    {
        "book": {
            "id": 22,
            "isbn": "9781118464465",
            "title": "Pi User",
            "cover": "http://url.to.book.cover",
            "author": "Eben",
            "published": 2012,
            "pages": 21
        },
        "status": 1
    },
    {
        "book": {
            "id": 23,
            "isbn": "9781118464465",
            "title": "User Guide",
            "cover": "http://url.to.book.cover",
            "author": "Eben 2",
            "published": 2011,
            "pages": 331
        },
        "status": 0
    },
    {
        "book": {
            "id": 24,
            "isbn": "9781118464465",
            "title": "Raspberry Pi",
            "cover": "http://url.to.book.cover",
            "author": "Eben Upton",
            "published": 2010,
            "pages": 22
        },
        "status": 2
    }
]
