import Image from "next/image";

const page = () => {
  return (
    <div className="px-6 border-2 border-red-500 md:px-20 py-24">
      <div className="flex max-xl:flex-col gap-16">
        <div className="flex flex-col justify-center">
          <p className="small-text">
            Smart Shopping Starts Here
            <Image 
            src="/assets/icons/arrow-right.svg"
            alt="arrow-right"
            height={16}
            width={16}
            />
            </p>
        </div>
      </div>
    </div>
  );
};

export default page;
