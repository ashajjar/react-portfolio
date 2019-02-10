import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import ProjectPage from './components/ProjectPage';
import ContactPage from './components/ContactPage';
import NotFoundPage from './components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact={true} path="/" exact component={HomePage} />
                <Route exact={true} path="/portfolio" component={PortfolioPage} />
                <Route path="/portfolio/:id" component={ProjectPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;