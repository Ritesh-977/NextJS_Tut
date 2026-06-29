import Link from "next/link";
import { Card } from "../../../components/card";


export default function Notifications() {
    return (
        <Card>
            <div>
            <h1>Notifications</h1>
            </div>
            <div>
            <Link href="/complex-dashboard/archived">Archived</Link>
            </div>
        </Card>
    );
}