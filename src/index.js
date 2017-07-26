import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import {Router, Route} from 'react-router'
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker'
import {fetchPeople} from './actions/FetchPeopleAction'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

let history = createHistory()
const store = configureStore()
store.dispatch(fetchPeople())
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>

    </Provider>
    </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
