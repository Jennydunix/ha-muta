import Image from "next/image";

export const Logo = () => {
    return (
        <Image
        src="/ha-muta.svg"
        height={100} width={100} alt="logo" priority />
    )
}