let express = require("express");
let app = express();

let userRoute = require('./routes/userRouter');
let authRouter = require('./routes/authRouter');
app.get("/", () => {
    console.log('work checker');
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use('/user', userRoute);
app.use('/users', userRoute);
app.use('/auth', authRouter);

app.listen(3000);
let db = require('./database').getInstance();
db.setModels();


// let express = require("express");
// let app = express();
// let someRoute = require('./routes').someRouter;
// app.get("/", () => {
//     console.log('work checker');
// });
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// //app.use('/someUrl', someRoute);
// app.listen(3000);
