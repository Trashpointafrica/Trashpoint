import Image from "next/image";
import recyclablesFram from "@/app/assets/images/recyclablesFram.png";

/**
 * The RecyclablesSection component is a React functional component that renders a section with pictures of recyclables.
 *
 */
const RecyclablesSection = () => {
  return (
    <section className=" relative w-full">
      <Image
        src={recyclablesFram}
        width={0}
        height={0}
        sizes="1010px"
        style={{ width: "100%", height: "auto" }}
        unoptimized
        className="w-full"
        alt="Recyclables"
      />
    </section>
  );
};

export default RecyclablesSection;
