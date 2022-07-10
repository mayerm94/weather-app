import {useContext} from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { ErrorContext } from '../contexts/ErrorContext';

export default function ErrorAlert() {
  const { error, setError } = useContext(ErrorContext)
  return (
      error? <Alert variant="filled" severity="error" onClose={() => {setError(null)}}>
        <AlertTitle>Error</AlertTitle>
        {`Details: ${error}`}
      </Alert>
      :null
  );
}