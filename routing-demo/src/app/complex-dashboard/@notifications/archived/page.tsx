import Link from "next/link";
import { Card } from "../../../../components/card";


export default function Archived() {
    return (
        <Card>
            <div>
            <h1>Archived</h1>
            </div>
            <div>
            <Link href="/complex-dashboard">Default</Link>
            </div>
        </Card>
    );
}