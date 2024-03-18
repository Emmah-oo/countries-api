"use client"
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";
const Backbutton = () => {
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-center cursor-pointer shadow-md gap-2 py-2 px-5 my-5 ml-5 w-[30%] md:w-[15%] lg:w-[10%]"
      onClick={() => router.back()}
    >
      <BsArrowLeft />
      Back
    </div>
  );
};

export default Backbutton;
