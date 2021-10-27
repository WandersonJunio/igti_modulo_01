import { Router } from "express";
import { promises as fs} from "fs";

const route = Router();

const { readFile, writeFile } = fs;

route.get("/maisModelos", async (req, res, next) => {
  try {
    const carList = JSON.parse(await readFile("car-list.json"));
    
    var moreModels = [];
    for (var i=0; i < Object.keys(carList).length; i++) {
      if (response) {
        if (Object.keys(response).length > 0) {
          if (response['total'] <= carList[i].models.length) {
            response['total'] = carList[i].models.length;
            response['marca'] = carList[i].brand;
          }
          continue;
        }
      }

      var response = new Object();
      response['total'] = carList[i].models.length;
      response['marca'] = carList[i].brand;
    };

    moreModels.push(response);
    res.json(moreModels);
  } catch (error) {
    res.json({message: error})
    next();
  }
});

route.get("/menosModelos", async (req, res, next) => {
  try {
    const carList = JSON.parse(await readFile("car-list.json"));
    var moreModels= [];
    for (var i=0; i < Object.keys(carList).length; i++) {
      if (response) {
        if (Object.keys(response).length > 0) {
          if (carList[i].models.length < response['total']) {
            response['total'] = carList[i].models.length;
            response['marca'] = carList[i].brand;
          }
          continue;
        }
      }

      var response = new Object();
      response['total'] = carList[i].models.length;
      response['marca'] = carList[i].brand;
    };

    moreModels.push(response);
    res.json(moreModels);
  } catch (error) {
    res.json({message: error})
    next();
  }
});

route.get("listaMaisModelos/:qtd", (req, res, next) => {

});

export default route;