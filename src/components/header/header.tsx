import React, {ChangeEvent, useState} from "react";
import Box from "@mui/material/Box";
import InputBase from '@mui/material/InputBase';
import {NavLink} from "react-router-dom";
import {CardMedia, List, ListItem, ListItemText} from "@mui/material";

import Icon from "../elements/icon";
import BookItemInterface from "../../interfaces/BookItem";
import Api from "../../service/api";

const Header: React.FC = () => {
    const [searchBooks, setSearchBooks] = useState<BookItemInterface[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;

        // check if search query is valid
        if (title.trim().length === 0){
            setSearchBooks([]);
            return;
        }

        Api.FetchData(`/books/${title}`)
            .then(res => {
                if (res)
                    setSearchBooks(res);
            })
    }

    console.log('ds', searchBooks)

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap={4}
            p={2}
        >
            <Box
                display="flex"
                alignItems="center"
                gap={4}
            >
                <NavLink to="/">
                    <Icon pointer icon="logo"/>
                </NavLink>

                <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                >
                    <Icon icon="search"/>

                    <Box
                        sx={{position: 'relative', minWidth: '350px'}}
                    >
                        <Box
                            boxShadow={4}
                            sx={{
                                position: 'absolute',
                                left: 0,
                                top: '100%',
                                zIndex: 800,
                                backgroundColor: '#fff',
                                borderRadius: '12px',
                        }}
                        >
                            <List>
                                {searchBooks.map((bookItem, index) => (
                                    <ListItem key={index}>
                                        <ListItemText
                                            className={'pointer'}
                                            primaryTypographyProps={{ fontWeight: 'bold' }}
                                            primary={bookItem.book.title}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>

                        <InputBase
                            fullWidth
                            onChange={handleChange}
                            id="search-input"
                            sx={{color: '#fff', ml: 1, flex: 1}}
                            placeholder="Search for any training you want"
                        />
                    </Box>
                </Box>
            </Box>

            <Box
                display="flex"
                alignItems="center"
                gap={3}
            >
                <Icon pointer icon="bell"/>

                <CardMedia
                    component="img"
                    sx={{width: 35, display: {xs: 'none', sm: 'block'}}}
                    image="./image/user-image-2.png"
                    alt="avatar"
                />
            </Box>
        </Box>
    )

};

export default Header;
