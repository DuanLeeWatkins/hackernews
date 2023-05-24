import React from "react";
import Link from "./Link";
import { gql, useQuery } from "@apollo/client";


//The FEED_QUERY variable uses gql, a library that uses tagged template literals to parse the GraphQL query document we define.
//This query document is then passed into the useQuery hook in the LinkList component. 
const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;
//When the LinkList component initially renders, there won’t be any information on the data variable. For this reason, we need to check that data is truthy before trying to render any of the links that will come out of it. 
//Once our GraphQL request resolves with some data, the LinkList component will re - render and data will be truthy.Our links are available on data.feed.links which we can map over to render.
const LinkList = () => {
  const {data} = useQuery(FEED_QUERY)
  return (
      <div>
          {data && (
              <>
                  {data.feed.links.map((link) => (
                    <Link key={link.id} link={link} />
                ))}
              </>
          )}
    </div>
  );
};

export default LinkList;
