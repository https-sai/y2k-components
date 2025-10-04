export default function Window() {
  return (
    <div className="w-[820px] bg-zinc-300 text-black border border-black hover:border-b-4 hover:border-r-4 shadow-[inset_2px_2px_0_#fff] rounded-sm p-3">
      <div
        className="flex items-center justify-between rounded-sm px-4 py-2 
      bg-blue-800 border border-black shadow-[inset_2px_2px_0_#fff]"
      >
        <span className="text-2xl font-semibold text-white">Title</span>
        <div className="flex gap-2">
          <button className="h-6 w-8 grid place-items-center bg-zinc-300 hover:bg-zinc-400 text-black border border-black shadow-[inset_2px_2px_0_#fff]">
            <p className="">-</p>
          </button>
          <button className="h-6 w-8 grid place-items-center bg-zinc-300 hover:bg-zinc-400 border border-black shadow-[inset_2px_2px_0_#fff] ">
            <span className="h-3 w-3 border border-black block"></span>
          </button>
          <button className="h-6 w-8 grid place-items-center bg-zinc-300 hover:bg-zinc-400 border border-black shadow-[inset_2px_2px_0_#fff]">
            <p className="">✕</p>
          </button>
        </div>
      </div>
      <div className="mt-3 rounded-sm border border-black bg-zinc-300 shadow-[inset_2px_2px_0_#fff] p-5"></div>
    </div>
  );
}
