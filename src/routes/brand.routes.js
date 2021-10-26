import { Router } from "express";
import { promises as fs} from "fs";

const route = Router();

const { readFile, writeFile } = fs;

route.get("/maisModelos", async (req, res, next) => {
  try {
    const carList = JSON.parse(await readFile("car-list.json"));
    
    const moreModels = carList.map((brand) => {
      var response;
      for (var i=0; i < brand.models.length; i++) {
        console.log(brand.models[i])

      }
      // for (i in brand.models) {
      //   // response[brand.models[i]] += brand.models[i];

      // };
    })

    console.log();
  } catch (error) {
    res.json({message: error})
    next();
  }
});

export default route;