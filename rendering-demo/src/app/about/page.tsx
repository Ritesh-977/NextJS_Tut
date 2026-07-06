// Every component in a Next.js app defaults to being a server component.
// It runs only on the server, has access to backend resources, and never ships to the client. 
// But if you want to use client specific features like useState, useEffect, localStorage, etc, then you need to make it a client component.
// To make client component, we use the "use client" directive at the top of the file.
import { cookies } from "next/headers";


export default async function About() {
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme");
    console.log(theme);
    console.log("About server componenet");
    return <h1>About Page {new Date().toLocaleTimeString()}</h1>
}
