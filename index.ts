import { z } from "zod";

// creating a schema for strings
const mySchema = z.string();

// parsing
const parsedData = mySchema.parse("tuna"); // => "tuna"
// mySchema.parse(12); // => throws ZodError

console.log(parsedData);
