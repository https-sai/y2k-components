export default function Postit() {
  return (
    <div className="grid p-4 w-100">
      <div className="relative">
        <span className="pointer-events-none absolute -left-2 -top-5 h-10 w-5 rotate-45 bg-blue-100/60"></span>
        <span className="pointer-events-none absolute -right-2 -top-5 h-10 w-5 -rotate-45  bg-blue-100/60"></span>
        <span className="pointer-events-none absolute -left-2 -bottom-5 h-10 w-5 -rotate-45  bg-blue-100/60"></span>
        <span className="pointer-events-none absolute -right-2 -bottom-5 h-10 w-5 rotate-45  bg-blue-100/60"></span>

        <div
          className="p-4 pl-10 lined-background-container
         border-yellow-300 border-b-3 border-r-3 hover:border-b-6 hover:border-r-6"
        >
          <h1 className="text-2xl font-bold">Heading</h1>
          <p className="mt-3 italic">“context”</p>
          <p className="mt-1">- footer</p>
        </div>
      </div>
    </div>
  );
}
