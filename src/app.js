import React from 'react';
import "./styles/styles.sass";
import { ErrorBoundary } from './components/error-boundary/error-boundary';
import Header from './components/header/header';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ErrorBoundary>
                <Header>
                    
                </Header>
                
            </ErrorBoundary>
        );
    }
};