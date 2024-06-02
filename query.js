import { connect } from './connect.js';

export const insertelement = async (req, res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const cardname = req.body.cardname;
    const cardnumber = req.body.cardnumber;
    const expmonth = req.body.expmonth;
    const expyear = req.body.expyear;

    try {
        await connect.query(
            `INSERT INTO logindata values(?, ?, ? , ? , ? , ? , ? , ? , ?)`, 
            [fullname,email, address,city ,state,cardname, cardnumber , expmonth ,expyear]
        );
        
        // Redirect only after successful insertion
        
    } catch (error) {
        console.error("Error while inserting element:", error);
        res.status(500).send("Error occurred while inserting element.");
    }
};
export const signup = async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    try {
        await connect.query(
            `INSERT INTO signup values( ? , ? , ?)`, 
            [username,email,password]
        );  
    } catch (error) {
        console.error("Error while inserting element:", error);
        res.status(500).send("Error occurred while inserting element.");
    }
};
export const login = async (req, res) => {
    const loginname = req.body.loginname;
    const loginpassword = req.body.loginpassword;
    try {
        await connect.query(
            `INSERT INTO login values( ? ,  ?)`, 
            [loginname,loginpassword]
        );  
    } catch (error) {
        console.error("Error while inserting element:", error);
        res.status(500).send("Error occurred while inserting element.");
    }
};