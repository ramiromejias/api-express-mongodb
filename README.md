# API in Express and MongoDB
API in Express and MongoDB is a backend using Express as a web server and Mongo as a Database Managment System.

## INSTRUCTIONS
1. Create a database named 'univ' with two collections: 'universities' and 'professors'\
2. You can import documents into 'universities' and 'professors' collections using 'restore-db.sh' script
3. Create a file named '.env' into 'server' folder whith this content:\
PORT=port_number_of_your_Mongo_server\
MONGO_URL:mongodb://db_user:db_password@db_host:db_port/univs?authSource=admin\
