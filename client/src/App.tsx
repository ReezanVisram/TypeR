import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Prices from './components/pages/Prices';
import Home from './components/pages/Home';
import Test from './components/pages/Test';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/prices/'>
                    <Prices />
                </Route>
                <Route path='/test/'>
                    <Test />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
