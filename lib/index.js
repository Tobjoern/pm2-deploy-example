"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/hello', function (req, res) {
    res.status(200).send('World!');
});
app.listen(3000, function () {
    console.log("Listening on http://localhost:3000/hello.");
});
//# sourceMappingURL=index.js.map