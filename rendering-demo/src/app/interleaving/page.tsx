import { ServerComponentOne } from "../components/server-component-one"
import { ClientComponentOne } from "../components/client-component-one"

export default function InterLeavingPage() {
    return (
        <>
            <h1> Interleaving Page </h1>
            {/* Server Component inside another Server Component */}
            <ServerComponentOne />

            {/* Client Component inside another Client Component  */}
            {/* <ClientComponentOne /> */}


        </>
    )
}

// Note:
// We can not import server component inside a client component
// But we can import client component inside a server component