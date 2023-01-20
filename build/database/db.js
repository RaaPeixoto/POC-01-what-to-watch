"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = __importDefault(require("pg"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var Pool = pg_1.default.Pool;
var connection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.MODE === "prod" ? true : false
});
console.log("Connected database.");
exports.default = connection;
