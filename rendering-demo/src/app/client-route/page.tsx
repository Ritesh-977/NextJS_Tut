"use client"

import { serverSideFunction } from "@/src/utils/server-utils"

export default function ClientRoutePage() {
    const result = serverSideFunction();
    return <h1> Client Page - {result} </h1>
}