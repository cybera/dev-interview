# README

## Goal

**Print the names of co-stars in Tom Hanks movies to the command line via a Python script.**

You will be getting this data from a graph database (Neo4J) containing `Movie` and `Person` nodes with `ACTED_IN` relations.

You can write your script in *scripts/answer.py* and run it with `bin/run`.

Haven't used a graph database before? Great! Don't worry about understanding it fully. You'll need just enough to get what you need out of it.

## Rules

1. You can ask questions about anything at any time.

2. You can look up documentation or code snippets (or anything else) at any time from anywhere. We've included what we think will be the most necessary and helpful documentation below.

3. There are no real "tricks" to this. We want to see how you go about figuring out something new.

4. Feel free to talk out loud about what you're thinking, especially if you're getting stuck. It's totally okay to involve us in working through any of the problems.

5. Don't worry about making your code look nice. You shouldn't expect to have to write a lot of code, but what matters most is working code.

6. You have a maximum of 30 minutes to complete this before we go on with the interview. Let this be your guide for how much you should be involving us.

## Important Documentation

### Neo4J Cypher query language

Here's a crash course in Cypher, related to your problem. Let's start with a really basic query. How do you find 'Tom Hanks'?

```cypher
MATCH (p:Person { name: 'Tom Hanks' })
RETURN p
```

#### Testing Cypher Queries

You can run your query right away, if you like. Neo4J has a browser based query interface at [http://localhost:7474](http://localhost:7474). Here are the login credentials:

- Username: `neo4j`
- Password: `password`

The browser itself contains some useful information:

![neo4j-info](images/neo4j-info.png)

And it can help you visualize and explore the graph while tuning a query:

![single-node](images/single-node.png)

Clicking the expand icon gives you:

![expanded-node](images/expanded-node.png)

#### Matching relationships

How would you list movies Tom Hanks has been in?

```cypher
MATCH (p:Person { name: 'Tom Hanks' })-[:ACTED_IN]->(m:Movie)
RETURN m.title
```

##### Explanation

The `MATCH` clause in Cypher is very pattern oriented. The parts between the `()` are nodes in your graph, the parts between `[]` are relationships, and the `->` indicates the direction of a relationship. You draw the pattern of nodes/relationships with `(a)-[r]->(b)`. You can read the above as: "Match a `Person` with the `name` 'Tom Hanks' and assign that to `p`, follow the `ACTED_IN` relationship to any `Movie` and assign that movie to `m`. Then return the `title` of every `m` movie you found."

Relationships can go in two directions, and you can specify more than one relationship in a single `MATCH` statement. For example, `MATCH (a)-[:RELATIONSHIP]->(c)<-[:RELATIONSHIP]-(b)` is valid and will find all `a` and `b` nodes that share a common `RELATIONSHIP` with any `c` node.

You can also split your matches onto separate lines. The following is equivalent to `MATCH (a:City)-[:IN]->(c:Country)<-[:IN]-(b:City)`:

```cypher
MATCH (a:City)-[:IN]->(c:Country)
MATCH (b:City)-[:IN]->(c)
WHERE a <> b
```

Because we're reusing `c`, we don't have to repeat that it's a `Country`. However, we do need to add `WHERE a <> b` (`<>` means 'not equal to') becaue in the multiple line version, `a` and `b` could match the same `City`.

[Here's more comprehensive documentation on Cypher](https://neo4j.com/docs/developer-manual/3.4/cypher/) and a [handy refcard](https://neo4j.com/docs/cypher-refcard/3.4/) if want to look up anything specific. But keep in mind that the 2nd Tom Hanks query above is very close to what you need, and most of the rest can be found in this README. We don't expect you to be a Cypher expert in half an hour.

### Python Neo4J driver

You can find the original documentation for the neo4j Python driver [here](https://github.com/neo4j/neo4j-python-driver), but it's more complex than what you'll need.

Here is a simplified version of their "Quick Example" (you'll still have to make at least one change other than your query, as they assume your script accesses neo4j through 'localhost', which isn't the case here, where we're using Docker containers):

```python
from neo4j import GraphDatabase

driver = GraphDatabase.driver("bolt://localhost:7687", auth=("neo4j", "password"))

results = driver.session().run('''
MATCH (n)
RETURN n.prop
''')

for r in results:
  print(r['n.prop'])
```

### Docker

This exercise is running 2 Docker containers on the laptop: One for "neo4j" and one for the "app", which is where your script runs. We don't expect you to learn or know Docker as well in this exercise, but you should think of these 2 containers as if they're 2 separate servers.

#### Networking with Docker

Within the Docker containers, other services will be available by using their service name as a hostname. For example, `bolt://neo4j` will allow you to access `neo4j` from the `app` container via the "bolt" protocol.

#### Basic commands

We've pulled out the commands you'll need in Docker into scripts in the `bin` directory:

- `bin/run` to run your python script, located in *scripts/answer.py*. Right now, it just says 'hello world'. Feel free to run it as many times as you need to. Not a bad idea to run it right now!
- `bin/rebuild-app` to rebuild the application container (you may find you need to install a library)
- `bin/python-console` and `bin/bash-console`: Depending on how you like to work (if you want to test commands or code snippets), these may be useful. But you can also just re-run the first 2 commands to test changes.

#### Dockerfiles

Dockerfiles specify steps for building a container. You'll need to edit one of them to get everything working. The app's Dockerfile is in *setup/app/Dockerfile* and neo4j's is in *setup/neo4j/Dockerfile*.

## For interviewers

This should be run and working before the interview:

```bash
bin/setup
```

Make sure to run this command after the interview:

```bash
bin/teardown
```

(Empty the Trash and clear your browser cache)
