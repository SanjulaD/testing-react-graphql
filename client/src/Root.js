import React from "react";
import withRoot from "./withRoot";
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const Root = () => (
    <Query query={GET_TRACK_QUERY}>
        {({ loading, data, error }) => {
            if (loading) return <div>loading</div>
            if (error) return <div>Error</div>

            return (
                <div>
                    {
                        data.tracks.map((item) => <div>{item.title}</div>)
                    }
                </div>
            )
        }}
    </Query>
);

const GET_TRACK_QUERY = gql`
{
    tracks {
        id
        title
        description
        url
    }
}
`

export default withRoot(Root);
