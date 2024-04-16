function Avatar({
  name,
  usn,
  image,
}: {
  name: string;
  usn: string;
  image: string;
}) {
  return (
    <div className="h-[300px] group">
      <div className="w-[12rem] h-[12rem] overflow-hidden relative flex justify-center items-center z-[1] duration-700 translate-y-[35px] group-hover:translate-y-0">
        <div className="flex justify-center items-center flex-col gap-1">
          <div className="absolute top-0 left-0 w-1/2 h-1/2">
            <img
              src={image}
              alt="Avatar"
              className="w-[12rem] overflow-hidden border-[2px] border-[#1da1f2] rounded-[25%] max-w-max"
            />
          </div>
        </div>
      </div>

      <div className="w-[12rem] h-[12rem] overflow-hidden relative flex justify-center items-center box-border duration-700 -translate-y-[7.5rem] shadow-['0_20px_40px_rgba(0,0,0,0.4)'] group-hover:-translate-y-8">
        <div className="flex justify-center items-center flex-col gap-1">
          <h3 className="mb-[2px] p-0 text-lg text-center text-white">
            {name}
          </h3>
          <p className="text-sm m-0 p-0 text-center text-white">{usn}</p>
          <p className="text-sm m-0 p-0 text-center text-white">
            Department of Artificial Intelligence & Machine Learning
          </p>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
