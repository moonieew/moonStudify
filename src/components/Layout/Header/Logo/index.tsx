import { LogoIcon } from "@/components/Icon";
import Link from "next/link";

function Logo() {
    return (
        <Link href="/">
            <LogoIcon />
        </Link>
    );
}

export default Logo;