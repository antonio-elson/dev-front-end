import React from 'react';
import { BrowserRouter, Switch, Route } from  'react-router-dom';
import HomeScreen from './screens/home';
import ParlamentarScreen from './screens/parlamentar';
import ParlamentaresScreen from './screens/parlamentares';


const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/parlamentares" component={ParlamentaresScreen} />
            <Route exact path="/parlamentares/senador" component={ParlamentarScreen} />
        </Switch>
    </BrowserRouter>
)

export default Routes;