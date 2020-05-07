import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const LOCATION = gql`
  query location {
    location(long: 1.5, lat: 1.2) {
      id
      name
    }
  }
`;
export default function MapExample() {
  const { loading, error, data } = useQuery(LOCATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (
    <div>
      {data.location.map((i) => {
        return <p key={i.id}>{i.name}</p>;
      })}
    </div>
  );
}
