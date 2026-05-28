import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

if (!WORDPRESS_URL) {
  throw new Error("NEXT_PUBLIC_WORDPRESS_API_URL is not defined");
}

export const client = new ApolloClient({
  link: new HttpLink({
    uri: WORDPRESS_URL,
    fetch,
  }),
  cache: new InMemoryCache(),
});
