import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    let raf = 0;

    const move = (e: MouseEvent) => {
      const x = e.clientX,
        y = e.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${x}px, ${y}px)`;
      });

      // decorate state based on hovered element
      const target = e.target as Element | null;
      const overLink = target?.closest?.(
        'a,button,[role="button"],input,textarea,select,summary,label,[data-cursor="link"]'
      );
      el.classList.toggle("is-link", !!overLink);
    };

    const down = () => ref.current!.classList.add("is-down");
    const up = () => ref.current!.classList.remove("is-down");

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseleave", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseleave", up);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="custom-cursor" ref={ref} aria-hidden>
      <img src="/icons/pencil-icon.png" alt="pencil" />
    </div>
  );
}
