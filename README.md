# README

## Goal

Print the names of co-stars in Tom Hanks movies to the command line via a Python script. You will be getting this data from a graph database (Neo4J) containing `Movie` and `Person` nodes with `ACTED_IN` relations.

Haven't used a graph database before? Great! Don't worry about understanding it fully. You'll need just enough to get what you need out of it.

## Important Documentation

### Neo4J Cypher query language

https://neo4j.com/docs/developer-manual/current/cypher/

### Python Neo4J driver

https://github.com/neo4j/neo4j-python-driver

Note: For simple queries like you'll be running here, you can call `driver.session.run(...)` directly. Don't worry about running your queries within transactions.

### Docker

Docker is a tool for running containers. For the purpose of this exercise, think of containers as just a lightweight virtual machine within this actual laptop, or an easy way of simulating a multi-server environment.

If you're unfamiliar with Docker or have trouble running any of the commands, feel free to ask questions. We're using Docker as a tool to administer this test, not to test you with.

## Rules

1. You can ask questions about anything at any time.

2. You can look up documentation or code snippets (or anything else) at any time from anywhere. We've included what we think will be the most helpful documentation above.

3. There are no real "tricks" to this. We want to see how you go about figuring out something new.

4. Feel free to talk out loud about what you're thinking, especially if you're getting stuck. It's totally okay to involve us in working through any of the problems.

5. Don't worry about making your code look nice. You shouldn't expect to have to write a lot of code, but what matters most is working code.

6. You have a maximum of 20 minutes to complete this before we go on with the interview. Let this be your guide for how much you should be involving us.

## Helpful information

### Neo4J login credentials

Username: neo4j
Password: password

### Running a Python console

```bash
docker-compose run app python
```

### Rebuilding a Docker image

You may find that you need to add a library. We can help you figure out where to do that if you're unfamiliar with docker-compose and Dockerfiles.

When you're done, you can rebuild your image with this command:

```bash
docker-compose build app
```

### Running a Python script

Any scripts put in the *scripts* folder in this project will be available at */mnt/scripts* within the Docker 'app' container.

You can run a script via:

```bash
docker-compose run app python /mnt/scripts/helloworld.py
```

Take note of where *helloworld.py* is within this project. You can put your script right beside that one.

### Running a Bash console

You can start up a bash console via:

```bash
docker-compose run app bash
```

### Networking and docker-compose

Within the Docker containers, other services will be available by using their service name as a hostname. For example, `bolt://neo4j` will be allow you to access `neo4j` from the `app` container via the "bolt" protocol.

## For interviewers

This should be run and working before the interview:

```bash
bin/setup
```

Make sure to run this command after the interview:

```bash
bin/teardown
```

(and empty your Trash)