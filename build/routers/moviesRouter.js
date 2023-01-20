"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var moviesController_1 = require("../controllers/moviesController");
var router = (0, express_1.Router)();
router.get("/posts/:plataform/:genre", moviesController_1.getMovies);
exports.default = router;
