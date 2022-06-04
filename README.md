# API in Express and MongoDB
API in Express and MongoDB is a backend using Express as a web server and Mongo as a Database Managment System. \

## Instructions
1. Create a database named 'univ' with two collections: 'universities' and 'professors' \
2. You can import documents into 'universities' and 'professors' collections using 'restore-db.sh' script \
3. Create a file named '.env' into 'server' folder whith this content: \
PORT=port_number_of_your_Mongo_server \
MONGO_URL:mongodb://db_user:db_password@db_host:db_port/univs?authSource=admin \

## End Points
### universities collection
GET /universities - Get all the universities \
GET /universities/ID - Get one university by ID \
GET /universities/ID/professors - Get all the professors of a university by university ID \
POST /universities - Create a university \
PUT /universities/ID - Update a university data by ID \
DEL /universities/ID - Delete a university by ID \
DEL /universities - Delete all the universities \

### professors collection
GET /professors - Get all the professors \
GET /professors/ID - Get one professor by ID \
POST /professors - Create a professor \
PUT /professors/ID - Update a professor data by ID \
DEL /professors/ID - Delete a professor by ID \
DEL /professors - Delete all the professors \
