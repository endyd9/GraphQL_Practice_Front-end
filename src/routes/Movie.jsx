import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

export const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;

export default function Movie() {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });
  console.log(data, loading);

  if (loading) return <h1>loading...</h1>;

  return <h1>{data.movie.title}</h1>;
}
