import React, {useState} from 'react';
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import FormHelperText from '@mui/material/FormHelperText';
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import CenterBox from "../../components/elements/center-box";
import Form from "../../components/elements/form/form";

interface FormData {
    username: string;
    password: string;
}

const SignIn: React.FC = () => {
    const initialFormData = {
        username: '',
        password: '',
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);

    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validate = (data: FormData): Partial<FormData> => {
        const errors: Partial<FormData> = {};

        if (!data.username || !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.username)))
            errors.username = 'Username should be correct email format';

        if (!data.password || data.password.trim().length < 8)
            errors.password = 'Password must be at least 8 characters';

        return errors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const errors = validate(formData);

        // check if error does not exist
        if (Object.keys(errors).length === 0){

            // todo Api call [no sign-in api in doc]
            console.log('Form data:', formData);
            alert('No sign-in api in doc')

            // reset form data to default
            setFormData(initialFormData);
            setErrors({});
        } else
            setErrors(errors);

        e.currentTarget.reset();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <CenterBox>
            <Stack
                spacing={{xs: 2, sm: 4}}
                useFlexGap
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h2" fontSize={38} fontWeight={600}>
                    Sign in
                </Typography>

                <Form
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: '100%',
                        minWidth: '430px',
                        gap: 2,
                    }}
                >
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel error={!!errors.username} htmlFor="username">Username</FormLabel>
                        <OutlinedInput
                            id="username"
                            name="username"
                            type="text"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            error={!!errors.username}
                            placeholder="Enter your username"
                        />
                        {errors.username && <FormHelperText error id="component-error-text">{errors.username}</FormHelperText>}
                    </FormControl>

                    <FormControl component="fieldset" fullWidth>
                        <FormLabel error={!!errors.password} htmlFor="password">Password</FormLabel>
                        <OutlinedInput
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Enter your password"
                            error={!!errors.password}
                        />
                        {errors.password && <FormHelperText error id="component-error-text">{errors.password}</FormHelperText>}
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
                            Sign In
                        </Button>

                        <Box sx={{display: 'flex', gap: 1, justifyContent: 'center'}}>
                            <Typography variant="caption" display="block" gutterBottom>
                                Don't have account?
                            </Typography>
                            <Link href="/sign-up" variant="body2" underline={'none'}>
                                Go to sign up.
                            </Link>
                        </Box>
                    </Box>
                </Form>
            </Stack>
        </CenterBox>
    );
};

export default SignIn;
