import { Head } from "@inertiajs/react"
import bpFavicon from "../images/bpFavicon.png"

export default function HeadComponent({ title, keywords, description }) {
    return (
        <Head>
            <title>{title}</title>
            <meta head-key="description" name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="icon" href={bpFavicon} />
        </Head>
    )
}