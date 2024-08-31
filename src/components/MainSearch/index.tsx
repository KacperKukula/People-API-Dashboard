import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import './style.scss'
import { LoadingButton } from '@mui/lab';
import axios, { AxiosResponse } from 'axios';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { HttpMethod } from '@/models/HttpMethod';

type HttpMethodType = typeof HttpMethod[keyof typeof HttpMethod];

function Search() {

    const [requesting, setRequestng] = useState(false);
    const [response, setResponse] = useState(null);

    const [ method ] = useState<HttpMethodType>(HttpMethod.POST);

    const sendRequest = (): any => {

        setRequestng(true);

        axios({
            method: 'POST',
            url: window.config.address + '/',
        })
        .then(response => {
            console.log(response)
            setResponse(response)
        })
        .catch(fail => {
            setResponse(fail)
        })
    }

    return (
        // <div className="search">

        //     <div className="method">
        //         POST
        //     </div>

        //     <input type="text" />

        //     <LoadingButton
        //         variant="contained"
        //         color='primary'
        //         loading={false}
        //         startIcon={<SendIcon fontSize="small"/>}
        //         onClick={sendRequest}
        //         />
        // </div>

        <FormControl>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={method}
                label="Age">

                {Object.entries(HttpMethod).map(([key, value]) => (
                    <MenuItem key={key} value={value}>
                        {key}
                    </MenuItem>
                ))}

            </Select>

            <TextField
                id="outlined-error"
                label="Error"
                defaultValue="Hello World"/>

            <LoadingButton
                variant="contained"
                color='primary'
                loading={false}
                startIcon={<SendIcon fontSize="small"/>}
                onClick={sendRequest}/>

        </FormControl>
    );
}

export default Search;