import React, {Fragment,Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './componets/layout/Navbar';
import Users from './componets/users/Users';
import Search from './componets/users/Search';
import Alert from './componets/layout/Alert';
import About from './componets/pages/About';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users:[],
    loading:false,
    alert:null
  }

  //Search Users
  searchUsers = async text => {
    this.setState({ loading:true});
    const res = await axios
    .get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState ({users:res.data.items, loading:false});
    
  };
  //clear the user

  clearUsers = () => this.setState({users: [], loading:false})
  // alert users

  setAlert = (msg,type) => {
    this.setState({alert: {msg, type}});

    setTimeout(() => this.setState({ alert:null}),2000);
  }
    
  render(){
    const { users, loading} = this.state;
    return (
      <Router>

     
      <div className="App">
          <Navbar />
          <div className="container"><br></br>
          <Alert alert={this.state.alert}/>
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search searchUsers={this.searchUsers} 
           clearUsers={this.clearUsers} 
           showClear={users.length > 0  ? true : false} 
           setAlert={this.setAlert}/>
          <Users loading={loading} users={this.state.users} />

              </Fragment>)}/>
            )}

            <Route exact path="/about" component={About} />

          </Switch>
          

          </div>  
      </div>
      </Router>
    );
  }  
}

export default App;
