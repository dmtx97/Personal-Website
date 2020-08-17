import TextField from "@material-ui/core/TextField";

import {
    withStyles,
  } from '@material-ui/core/styles';

export const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'grey',
      },
      '& .MuiFilledInput-underline:after': {
        borderColor: '#2F0945',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(TextField);

