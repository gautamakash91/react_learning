import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import "./style.css";

export default class Callbk extends Component {
    constructor(props) {
        super(props);

        this.state = {
            a: 1,
            b: 2,
            c: 0
        }
    }

    componentDidMount() {
        this.setState({
            a: this.state.b,
        }, function () {
            this.setState({
                c: this.state.a
            })
        })
    }

    render() {
        return (
                <Grid container justify="center">
                <Grid item xs={12} lg={4}>
                <Card>
                    <CardContent>
                        <TextField
                            id="outlined-name"
                            label="Email"
                            fullWidth
                            // className={classes.textField}
                            // value={values.name}
                            // onChange={handleChange('name')}
                            margin="normal"
                            variant="outlined"
                        />
                        <br />
                        <Button variant="outlined">
                            <span className="text">Submit</span>
                            <Icon>
                                send
                            </Icon>
                        </Button>
                    </CardContent>
                </Card>
                </Grid>
                <iframe width="100%" height="515" src="https://www.youtube.com/embed/NB1oucqQ0g8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.817537084968!2d85.80549491439633!3d20.349155116007246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e025984c55%3A0xee1fcd1f11e55141!2sDLF+CYBER+CITY!5e0!3m2!1sen!2sin!4v1562140386280!5m2!1sen!2sin" width="100%" height="550" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </Grid>
        )
    }
}