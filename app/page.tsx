import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/background.png"
        alt="Man sitting in front of a pond"
        fill={true}
      />
    </div>
  );
}
