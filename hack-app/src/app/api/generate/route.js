// Import `GoogleGenerative` from the package we installed earlier.
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Create an asynchronous function POST to handle POST 
// request with parameters request and response.
export async function POST(req, res) {

    try {
        // Access your API key by creating an instance of GoogleGenerativeAI we'll call it GenAI
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

        const schema ={
            description: "Plan de Actividades",
            type: SchemaType.ARRAY,
            items: {
                type: SchemaType.OBJECT,
                properties: {
                    actividad: {
                        type: SchemaType.STRING,
                        description: "Nombre de Actividad",
                        nullable: false,
                    },
                    descripcion: {
                        type: SchemaType.STRING,
                        description: "Descripcion de Actividad",
                        nullable: false,
                    },
                    estilo: {
                        type: SchemaType.STRING,
                        description: "Estilo de Aprendizaje",
                        nullable: false
                    }
                },
                required: ["actividad", "descripcion", "estilo"],
            },
        };

        // Ininitalise a generative model
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: schema,
            },
         });

        // Retrieve the data we recieve as part of the request body
        const data = await req.json()

        // Define a prompt varibale
        const prompt = data.body

        // Pass the prompt to the model and retrieve the output
        const result = await model.generateContent(prompt)
        const output = result.response.text();

        const OutputJSON = JSON.parse(output);

        // console.log(output)

        // Send the llm output as a server reponse object
        return NextResponse.json(OutputJSON)
    } catch (error) {
        console.error(error)
    }
}