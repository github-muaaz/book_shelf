import React, { useState } from 'react';
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import FormHelperText from '@mui/material/FormHelperText';
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";

import CenterBox from "../../components/elements/center-box";
import Index from "../../components/elements/form";
import Api from "../../service/api";

interface FormData {
    name: string;
    email: string;
    key: string;
    secret: string;
}

const SignUp: React.FC = () => {
    const initialFormData = {
        name: '',
        email: '',
        key: '',
        secret: '',
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const validate = (data: FormData): Partial<FormData> => {
        const errors: Partial<FormData> = {};

        if (!data.name || data.name.trim().length <= 0)
            errors.name = 'Name must not be empty';

        if (!data.email || !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)))
            errors.email = 'Email should be correct email format';

        if (!data.key || data.key.trim().length <= 0)
            errors.key = 'Key must not be empty';

        if (!data.secret || data.secret.trim().length <= 0)
            errors.secret = 'Secret must not be empty';

        return errors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const errors = validate(formData);

        if (Object.keys(errors).length === 0) {
            Api.SignUp(formData);

            setFormData(initialFormData);
            setErrors({});
        } else {
            setErrors(errors);
        }

        e.currentTarget.reset();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <CenterBox>
            <Stack
                spacing={{ xs: 2, sm: 4 }}
                useFlexGap
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h2" fontSize={isSmallScreen ? 28 : 38} fontWeight={600}>
                    Sign Up
                </Typography>

                <Index
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: 2,
                    }}
                >
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel error={!!errors.name} htmlFor="name">Name</FormLabel>
                        <OutlinedInput
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            error={!!errors.name}
                            placeholder="Enter your name"
                            sx={{ fontSize: isSmallScreen ? 16 : undefined }}
                        />
                        {errors.name && <FormHelperText error id="component-error-text">{errors.name}</FormHelperText>}
                    </FormControl>

                    <FormControl component="fieldset" fullWidth>
                        <FormLabel error={!!errors.email} htmlFor="email">Email</FormLabel>
                        <OutlinedInput
                            id="emil"
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            error={!!errors.email}
                            placeholder="Enter your email"
                            sx={{ fontSize: isSmallScreen ? 16 : undefined }}
                        />
                        {errors.email && <FormHelperText error id="component-error-text">{errors.email}</FormHelperText>}
                    </FormControl>

                    <FormControl component="fieldset" fullWidth>
                        <FormLabel
                            error={!!errors.key}
                            htmlFor="key"
                        >
                            Key
                        </FormLabel>
                        <OutlinedInput
                            id="key"
                            name="key"
                            value={formData.key}
                            onChange={handleChange}
                            required
                            placeholder="Enter your key"
                            error={!!errors.key}
                            sx={{ fontSize: isSmallScreen ? 16 : undefined }}
                        />
                        {errors.key && <FormHelperText error id="component-error-text">{errors.key}</FormHelperText>}
                    </FormControl>

                    <FormControl component="fieldset" fullWidth>
                        <FormLabel
                            error={!!errors.secret}
                            htmlFor="secret"
                        >
                            Secret
                        </FormLabel>
                        <OutlinedInput
                            id="secret"
                            name="secret"
                            value={formData.secret}
                            onChange={handleChange}
                            required
                            placeholder="Enter your secret"
                            error={!!errors.secret}
                            sx={{ fontSize: isSmallScreen ? 16 : undefined }}
                        />
                        {errors.secret && <FormHelperText error id="component-error-text">{errors.secret}</FormHelperText>}
                    </FormControl>

                    <Box>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                backgroundColor: '#6200EE',
                                '&:hover': {
                                    backgroundColor: '#6200EE',
                                },
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Index>
            </Stack>
        </CenterBox>
    );
};

export default SignUp;
