import express from "express";
import graphqlHTTP from "express-graphql";
import { schema } from "./data/schema";

var connect = require("./dbConnect");
connect(require("./settings").DEV_DB_URI);

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(3000, () =>
  console.log("Running server on port localhost:4000/graphql")
);
