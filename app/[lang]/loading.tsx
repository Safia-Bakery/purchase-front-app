import safiaLogo from "@/public/images/safia-logo.png";
import Image from "next/image";

export default function Loading() {
  return (
    <div className={"loader"}>
      <Image
        className={"loadingCircle"}
        src={safiaLogo}
        height={50}
        width={50}
        alt="loading..."
      />
    </div>
  );
}
