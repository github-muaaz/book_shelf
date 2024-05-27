import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { NavLink } from "react-router-dom";
import { CardMedia, List, ListItem, ListItemText, CircularProgress, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import Icon from "../elements/icon";
import Api from "../../service/api";
import BookInterface from "../../interfaces/Book";

const Header: React.FC = () => {
    const [user, setUser] = useState<{ name: string }>();
    const [searchBooks, setSearchBooks] = useState<BookInterface[]>([]);
    const [isListOpen, setIsListOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state
    const abortControllerRef = useRef<AbortController | null>(null);
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        Api.Me().then(user => setUser(user));
        abortControllerRef.current = new AbortController();

        const handleClickOutside = (event: MouseEvent) => {
            if (
                listRef.current &&
                !listRef.current.contains(event.target as Node) &&
                event.target !== document.getElementById("search-input")
            ) {
                setIsListOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            if (abortControllerRef.current)
                abortControllerRef.current.abort();

            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const fetchBooks = async (title: string) => {
        try {
            return await Api.FetchData(`/books/${title}`, {
                signal: abortControllerRef.current?.signal
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    };

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setSearchTerm(title);

        if (!abortControllerRef.current) {
            abortControllerRef.current = new AbortController();
        } else {
            abortControllerRef.current.abort();
            abortControllerRef.current = new AbortController();
        }

        if (title.trim().length === 0) {
            setSearchBooks([]);
            setIsListOpen(false);
            return;
        }

        setLoading(true);
        const res = await fetchBooks(title);

        if (res) {
            setSearchBooks(res);
            setIsListOpen(true);
            setLoading(false);
        }
    };

    return (
        <Box
            display="grid"
            gridTemplateColumns="auto 1fr auto"
            gridTemplateAreas={isSmallScreen
                ? `
                    "logo bell"
                    "search search"
                `
                : `
                    "logo search bell"
                `}
            justifyContent="space-between"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ width: '100%' }}
        >
            <Box id='logo' gridArea="logo">
                <NavLink to="/">
                    <Icon pointer icon="logo" />
                </NavLink>
            </Box>

            <Box
                display="flex"
                id='profile'
                alignItems="center"
                gap={{ xs: 1.5, sm: 3 }}
                gridArea="bell"
                sx={{ justifyContent: 'end' }}
            >
                <Icon pointer icon="bell" />

                <Box
                    display={'flex'}
                    gap={'20px'}
                    alignItems={'center'}
                >
                    <Typography>
                        {user?.name}
                    </Typography>

                    <CardMedia
                        component="img"
                        sx={{ width: 35, display: { sm: 'block' } }}
                        image="./image/user-image-2.png"
                        alt="avatar"
                    />
                </Box>
            </Box>

            <Box
                id='search'
                gridArea="search"
                position="relative"
                display={'flex'}
                alignItems={'center'}
                mt={isSmallScreen ? 2 : 0}
            >
                {loading ? <CircularProgress size={24} /> : <Icon icon="search" />}
                <Box
                    ref={listRef}
                    boxShadow={4}
                    sx={{
                        position: 'absolute',
                        left: 0,
                        top: '100%',
                        zIndex: 800,
                        maxWidth: '800px',
                        maxHeight: '500px',
                        overflow: 'scroll',
                        backgroundColor: '#283618',
                        borderRadius: '12px',
                        display: isListOpen ? 'block' : 'none',
                    }}
                >
                    <List>
                        {searchBooks?.map((book, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    display: 'flex',
                                    gap: '30px'
                                }}
                            >
                                <img src={book.cover} alt={'images'} style={{ height: '50px' }} />

                                <Typography
                                    style={{ color: 'white', width: 'fit-content' }}
                                >
                                    isbn: {book.isbn}
                                </Typography>

                                <ListItemText
                                    primaryTypographyProps={{ fontWeight: 'bold' }}
                                    primary={book.title}
                                    style={{ color: 'white' }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <InputBase
                    fullWidth
                    onClick={() => setIsListOpen(true)}
                    onChange={handleChange}
                    value={searchTerm}
                    id="search-input"
                    sx={{ color: '#283618', ml: 1, flex: 1 }}
                    placeholder="Search for any training you want"
                />
            </Box>
        </Box>
    );
};

export default Header;