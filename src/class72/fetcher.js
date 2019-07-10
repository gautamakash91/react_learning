import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class Fetcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: "",
      loader: false
    }
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  login = () => {
    this.setState({
      loader: true
    })
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then((res_json) => {
        console.log(res_json)
        if (res_json.token) {
          this.setState({
            message: "Login Successful",
            loader: false
          })
        } else {
          this.setState({
            message: "Login Failed",
            loader: false
          })
        }
      })
  }

  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} md={4} style={{ marginTop: 100 }}>
            <Card>
              <CardContent>
                <TextField
                  id="outlined-name"
                  label="Email"
                  fullWidth
                  value={this.state.email}
                  onChange={this.handleEmail}
                  margin="normal"
                  variant="outlined"
                />
                <br />
                <TextField
                  id="outlined-name"
                  label="Password"
                  type="password"
                  fullWidth
                  value={this.state.password}
                  onChange={this.handlePassword}
                  margin="normal"
                  variant="outlined"
                />
                <br />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.login}
                >
                  {this.state.loader ?
                    <CircularProgress size={20} style={{ color: "white" }} />
                    :
                    "Login"
                  }
                </Button>
                {this.state.message}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}