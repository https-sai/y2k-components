import React, { useState } from "react";

type MenuNode = {
  label: string;
  children?: MenuNode[];
  dividerAbove?: boolean;
};

const MENU: MenuNode[] = [
  {
    label: "Programs",
    children: [
      {
        label: "Accessories",
        children: [
          {
            label: "Accessibility",
            children: [
              { label: "Accessibility Wizard" },
              { label: "Magnifier" },
              { label: "Narrator" },
              { label: "On-Screen Keyboard" },
              { label: "Utility Manager" },
            ],
          },
          { label: "Communications" },
          { label: "Entertainment" },
          { label: "Games" },
          { label: "Imaging" },
          { label: "Notepad" },
          { label: "Paint" },
          { label: "Synchronization" },
          { label: "WordPad" },
        ],
      },
      {
        label: "Gimp",
        children: [
          {
            label: "GIMP 2",
            children: [{ label: "Readme" }, { label: "Uninstall" }],
          },
        ],
      },
      { label: "VLC" },
      { label: "Internet Explorer" },
      { label: "Microsoft Excel" },
      { label: "Microsoft Word" },
    ],
  },
  { label: "Documents" },
  { label: "Settings" },
  { label: "Search" },
  { label: "Help" },
  { label: "Run…" },
  { label: "Log Off…" },
  { label: "Shut Down…" },
];

const panel =
  "bg-gray-200 border border-gray-400 shadow-[2px_2px_0_#0003] text-[13px] text-black/90 min-w-[220px]";

function Divider() {
  return <div className="my-2 h-px bg-gray-300 border-t border-white" />;
}
const Chevron = () => <span className="ml-auto">▶</span>;

/** One menu level; controls which child index is open */
function MenuLevel({
  nodes,
  onSelect,
}: {
  nodes: MenuNode[];
  onSelect: (label: string) => void;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className={`${panel}`} onMouseLeave={() => setOpenIndex(null)}>
      {nodes.map((n, i) => (
        <React.Fragment key={i}>
          {n.dividerAbove && <Divider />}
          <li className="relative" onMouseEnter={() => setOpenIndex(i)}>
            {/* Make row clickable; only trigger for leaves */}
            <button
              type="button"
              onClick={() => !n.children && onSelect(n.label)}
              className="w-full text-left flex items-center gap-2 px-3 py-1.5 pr-6
                         cursor-default select-none border-b
                         hover:bg-blue-800 hover:text-white"
            >
              <span className="inline-block h-4 w-4 bg-gradient-to-b from-gray-50 to-gray-300 border border-gray-400 mr-1" />
              <span>{n.label}</span>
              {n.children && <Chevron />}
            </button>

            {n.children && openIndex === i && (
              <div className="absolute left-full top-[-6px] z-10">
                <MenuLevel nodes={n.children} onSelect={onSelect} />
              </div>
            )}
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
}

export default function Menu() {
  const [open, setOpen] = useState(false);

  const handleSelect = (label: string) => {
    if (label === "Shut Down…" /* || label === "Log Off…" */) {
      setOpen(false); // close menu
    }
  };

  return (
    <div className="min-h-screen w-full">
      {/* Start button bottom-left */}
      <button
        className="bottom-2 left-2 z-20 flex items-center gap-2 px-3 py-1.5
                   bg-[#2c7a2c] text-white border border-green-900 border-b-3 border-r-3 hover:border-b-4 hover:border-r-4 shadow active:translate-y-px"
        onClick={() => setOpen((v) => !v)}
      >
        Menu
      </button>

      {/* Root menu (toggles open/closed) */}
      {open && (
        <div className="fixed bottom-12 left-2 z-10">
          <MenuLevel nodes={MENU} onSelect={handleSelect} />
        </div>
      )}
    </div>
  );
}
