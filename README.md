## A demo project about parse server and parse dashboard
___

![alt text](Screenshot_1"Parse Dashboard)
### Build with parse nodejs express and mongodb run on Atlas

Read more about parse at [parseplatform.org](https://parseplatform.org)
Read more about mongodb Atlas at [cloud.mongodb.com](https://cloud.mongodb.com)

#### Step 1
```sh
git clone https://github.com/atheodosiou/parse-server-example.git
```
#### Step 2
```sh
cd parse-server-example
```
After clone the project, you must create a .env file and specify the environment variables needed!
#### Step 3
.env file should be at root folder
```
APP_ID=myAppId
MASTER_KEY=myMasterKey
SERVER_URL=http://localhost:3000/parse
PARSE_MOUNT=/parse
PORT=3000
MONGODB_URI=myMongoDbAtlasSRVconnectionString
```
#### Step 4
```sh
npm install
```
#### Step 5
Run the parse server
```sh
npm run start
```
#### Step 6
Run the parse dashboard
```sh
npm run dashboard
```

Browse project at http://localhost:3000/
Test if everything is ok at http://localhost:3000/test
Run the parse dashboard at http://localhost:4040
