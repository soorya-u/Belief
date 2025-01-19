export default function Avatar({
  name,
  usn,
  image,
}: {
  name: string;
  usn: string;
  image: string;
}) {
  return (
    <div className="group h-[300px]">
      <div className="relative z-[1] flex h-[12rem] w-[12rem] translate-y-[35px] items-center justify-center overflow-hidden duration-700 group-hover:translate-y-0">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="absolute left-0 top-0 h-1/2 w-1/2">
            <img
              src={image}
              alt="Avatar"
              className="w-[12rem] max-w-max overflow-hidden rounded-[25%] border-[2px] border-[#1da1f2]"
            />
          </div>
        </div>
      </div>

      <div className="relative box-border flex h-[12rem] w-[12rem] -translate-y-[7.5rem] items-center justify-center overflow-hidden shadow-['0_20px_40px_rgba(0,0,0,0.4)'] duration-700 group-hover:-translate-y-8">
        <div className="flex flex-col items-center justify-center gap-1">
          <h3 className="mb-[2px] p-0 text-center text-lg text-white">
            {name}
          </h3>
          <p className="m-0 p-0 text-center text-sm text-white">{usn}</p>
          <p className="m-0 p-0 text-center text-sm text-white">
            Department of Artificial Intelligence & Machine Learning
          </p>
        </div>
      </div>
    </div>
  );
}
