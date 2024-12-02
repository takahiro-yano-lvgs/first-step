import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import * as root from "./controller/index.js";

const app = new Hono();

app.use("/css/*", serveStatic({ root: "./public/css" }));
app.use("/js/*", serveStatic({ root: "./public/js" }));
app.use("/font/*", serveStatic({ root: "./public/font" }));
app.use("/image/*", serveStatic({ root: "./public/image" }));

app.get("/", root.index);

serve(app, () => {
    console.log("http://localhost:3000/");
});
