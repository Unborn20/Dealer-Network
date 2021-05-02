import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Login from './User/Login';
import Register from './User/Register';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Redirect to="/login"/>
            </Switch>
        </Router>
    );
}

export default AppRouter;