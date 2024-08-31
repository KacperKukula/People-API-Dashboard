import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios';
import { useState } from 'react';
import SpeedIcon from '@mui/icons-material/Speed';
import SaveIcon from '@mui/icons-material/Save';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

enum EnumConnectionStates {
    RESTING,
    SUCCESS,
    FAILURE,
    PROCEED
};

function ConnectionTest() {

    const [connectionState, setConnetctionState] = useState(EnumConnectionStates.RESTING);
    const [ loading, setLoading ] = useState(false);

    const getColorTestButton = (): string => {
        switch (connectionState) {
            case EnumConnectionStates.SUCCESS: return 'success'
            case EnumConnectionStates.FAILURE: return 'error'
            case EnumConnectionStates.RESTING:
            default: return 'secondary'
        }
    }

    const getIconTestButton = () => {
        switch (connectionState) {
            case EnumConnectionStates.SUCCESS: return (<CheckIcon />)
            case EnumConnectionStates.FAILURE: return (<CloseIcon />)
            case EnumConnectionStates.RESTING:
            default: return (<SpeedIcon />)
        }
    }

    const getLabelTestButton = () => {
        switch (connectionState) {
            case EnumConnectionStates.SUCCESS: return 'Connected'
            case EnumConnectionStates.FAILURE: return 'Not connected'
            case EnumConnectionStates.RESTING:
            default: return 'Check connection'
        }
    }

    const testConnection = () => {
        setLoading(true)

        axios({
            method: 'post',
            url: window.config.address + '/appStatus',
        })
        .then(response => {
            setConnetctionState(EnumConnectionStates.SUCCESS)
        })
        .catch(fail => {
            setConnetctionState(EnumConnectionStates.FAILURE)
        })
        .finally(() => setLoading(false))
    }

    return (
        <LoadingButton
            size="small"
            color={getColorTestButton()}
            loading={loading}
            loadingIndicator="Checking"
            startIcon={getIconTestButton()}
            variant="contained"
            onClick={testConnection} >
            {getLabelTestButton()}
        </LoadingButton>
    ); 
}

export default ConnectionTest;