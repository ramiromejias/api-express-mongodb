#!/bin/sh
for collection in universities professors;  do
   docker exec -it db_api-express-mongodb_1 mongoimport /json/$collection.json -u admin -p admin --type json -d univ -c $collection --drop --authenticationDatabase admin
done
