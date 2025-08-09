import Link from "next/link";

const AppFooter = () => {
  return (
    <div className={`outfit text-white py-4 mt-40 pb-20 tracking-tight text-sm`}>
      <hr className="mb-20"/>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-end-5 flex flex-col gap-7">
          <div>
            <div>Create with NextJs in 20w5</div>
            <div>
              Inspired by{" "}
              <Link
                href={"https://www.dannpetty.com/"}
                className="underline"
                target="_blank"
              >
                DannPetty&apos;s Website
              </Link>
            </div>
          </div>
          <div>
            ig: @rafaelchr_ <br />
            email: rafaelmanurung80@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
