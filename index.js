import 'dotenv/config'
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import path from "path";
import { fileURLToPath } from 'url';

const app  = express();
const port = process.env.PORT || 3000;

const apiGatewayURL = process.env.API_URL;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req,res)=>{
    res.render("home");
})

app.get("/view", async (req,res)=>{
    try{    
        const response = await axios.get(apiGatewayURL)
        console.log(response.data)
        res.render("view",{data:response.data.Students});
    }
    catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data");
    }
})

app.get("/add", (req,res)=>{
    res.render("add");
})

app.post("/add", async (req,res)=>{
    try
    {
        const data = req.body;
        console.log(data)
        const response = await axios.post(apiGatewayURL,data)
        console.log(response)
        res.render("add",{ message: "Data added successfully!" })
        
    }
    catch(error){
        console.error("Error fetching data:", error);
        res.status(500).render("add", { message: "Error in adding data!" });
    }
})

app.get("/update", async (req,res)=>{

    try{    
        const response = await axios.get(apiGatewayURL)
        console.log(response.data)
        res.render("update",{data:response.data});
    }
    catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).render("update",{message:"Unable to Fetch Data"});
    }
})

app.post("/update", async (req,res)=>{
    try
    {
        const data = req.body;
        console.log(data)
        const response = await axios.patch(apiGatewayURL,data)
        console.log(response)
        const response2 = await axios.get(apiGatewayURL)
        res.render("update",{ data:response2.data,  message: "Data updated successfully!" })
        
    }
    catch(error){
        console.error("Error fetching data:", error);
        res.status(500).render("update", { message: "Error in updating data!" });
    }
})

app.get("/delete", async (req,res)=>{
    try{    
        const response = await axios.get(apiGatewayURL)
        console.log(response.data)
        res.render("delete",{data:response.data});
    }
    catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).render("delete",{message:"Unable to Fetch Data"});
    }
})

app.post("/delete", async (req,res)=>{
    const data = {
        id: req.body.id,
    };
    
    try {
        const response = await axios.delete(apiGatewayURL, {
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(data),
        });
        console.log(response);
        const response2 = await axios.get(apiGatewayURL);
        res.render("delete", { data: response2.data, message: "Data deleted successfully!" });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).render("delete", { message: "Error in deleting data!" });
    }
    
})

app.post("/viewOne", async (req, res)=>{
    const data = req.body.id;
    console.log(data)
    const response = await axios.get(apiGatewayURL+`/students?id=${data}`)
    console.log("Hi")
    console.log(response.data)
    res.render("view", {data:[response.data]})
})



app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})