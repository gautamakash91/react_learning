import React from 'react';
import { render } from 'react-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";


export default class DD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '// type your code...',
        }
    }

    render() {
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true
        };
        return (
            <div align="center">
                <TextField
                    select
                    id="outlined-state1"
                    variant="outlined"
                    style={{ paddingTop: 5, width:100, marginBottom:100 }}
                >
                    <div style={{position:"relative",top:100}}>
                    <MenuItem value={0} key={0} selected disabled style={{ height: 10}}>
                        --Select--
                    </MenuItem>
                    </div>
                </TextField>
            </div>
        );
    }
}