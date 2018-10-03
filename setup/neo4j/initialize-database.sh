#!/bin/bash

cat /mnt/neo4j/movies.cypher | cypher-shell -u neo4j -p password --format plain