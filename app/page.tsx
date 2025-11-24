import Image from "next/image";

export default function HomePage() {
  return (
  <div className="flex flex-col items-center justify-center w-full h-full">
  <Image
    src="/logo.png"
    width={180}
    height={180}
    alt="Tiramisu"
    className="w-36 md:w-44"
  />
</div>

  );
}
