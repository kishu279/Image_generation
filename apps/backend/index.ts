import express from "express";
import {TrainModel , GenerateImage , GenerateImageFromPack} from "common/types";
import { prismaClient } from "db";

const PORT = process.env.PORT || 8080 ; 

const app = express();

app.post("/ai/training", (req , res ) => {
    
});

app.post("/ai/generate", (req , res ) => {

});

app.post("/pack/generate", (req , res ) => {

});

app.post("/pack/bulk", (req , res ) => {

});

app.get("/image", (req , res ) => {

});

app.listen(3000, () => {
  console.log("Server is running on port 8080");
});