import React from "react";
import withRoot from "./withRoot";
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import App from './pages/App'
import Profile from './pages/Profile'
import Header from './components/Shared/Header'
import Loader from './components/Shared/Loading'
import Error from './components/Shared/Error'

const Root = () => (
    <Query query={ME_QUERY}>
        {({ loading, data, error }) => {
            if (loading) return <Loader />
            if (error) return <Error error={error} />
            const currentUser = data.me
            return (
                <Router>
                    <>
                        <Header currentUser={currentUser} />
                        <Switch>
                            <Route exact path="/" component={App} />
                            <Route path="/profile/:id" component={Profile} />
                        </Switch>
                    </>
                </Router>
            )
        }}
    </Query>
);

const ME_QUERY = gql`
{
    me {
        id 
        username
        email
    }
}
`

// const GET_TRACK_QUERY = gql`
// {
//     tracks {
//         id
//         title
//         description
//         url
//     }
// }
// `

export default withRoot(Root);
