import React, { useEffect, useState } from 'react';
import "./CreateForm.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { createProfileAction, getSectorsAction } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import { routerConfigurations } from '../../routes';
import { validateForm } from '../../shared/errorHandling';


const CreateForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [createFormValue, setCreateFormValue] = useState({
        username: "",
        sectors: "",
        checked: false
    });

    const [errorMessages, setErrorMessages] = useState({
        username: '',
        sectors: '',
        checked: '',
    });

    useEffect(() => {
        dispatch(getSectorsAction());
    }, [dispatch]);

    const { sectors: allSectors } = useSelector((state) => state.getSector);

    const [categoryData, setCategoryData] = useState({});

    const renderOptions = (category, data) => {
        return (
            <optgroup label={category} key={category._id}>
                {data.map((item) => (
                    <option key={item._id} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </optgroup>
        );
    };

    useEffect(() => {
        // Group data by category
        const groupedData = {};
        allSectors?.forEach((item) => {
            if (!groupedData[item.category]) {
                groupedData[item.category] = [];
            }
            groupedData[item.category].push(item);
        });
        setCategoryData(groupedData);
    }, [allSectors]);

    const handleChange = (event) => {
        const { name, checked, value } = event.target;
        setCreateFormValue({
            ...createFormValue,
            [name]: name === 'checked' ? checked : value,
        });
        setErrorMessages({
            ...errorMessages,
            [name]: '',
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        //validate the form
        if (!validateForm(createFormValue, setErrorMessages)) {
            return;
        }
        dispatch(createProfileAction(createFormValue));
        navigate(routerConfigurations.profile);
    }

    const { username, sectors, checked } = createFormValue;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <div className='createFormMainDiv'>
                <Box
                    sx={{
                        '& > :not(style)': { m: 1, width: isMobile ? '30ch' : '50ch' },
                    }}
                    autoComplete="off"
                >
                    <TextField
                        id="username"
                        label="Name"
                        variant="outlined"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        error={!!errorMessages.username}
                        helperText={errorMessages.username}
                    />
                </Box>
                <Box
                    sx={{
                        '& > :not(style)': { m: 1, width: isMobile ? '30ch' : '50ch' },
                    }}
                >
                    <FormControl>
                        <InputLabel htmlFor="select-label">Sectors</InputLabel>
                        <Select
                            native
                            name="sectors"
                            value={sectors}
                            id="select-label"
                            label="Sectors"
                            onChange={handleChange}
                            error={!!errorMessages.sectors}
                            displayEmpty
                        >
                            <option aria-label="None" value="" />
                            {Object.keys(categoryData).map((category) => renderOptions(category, categoryData[category]))}
                        </Select>
                    </FormControl>
                </Box>
                <Box
                    sx={{ marginLeft: "7px" }}
                >
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox
                                name="checked"
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />}
                            label="Agree to terms"
                        />
                        {errorMessages.checked && (
                            <Typography color="error" variant="body1">
                                {errorMessages.checked}
                            </Typography>
                        )}
                    </FormGroup>
                </Box>
                <Box
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                >
                    <Button variant="contained" onClick={submitHandler}>Save</Button>
                </Box>
            </div>
        </>
    )
}

export default CreateForm