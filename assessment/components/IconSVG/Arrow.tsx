'use client';

type RightArrowProps = {
  currentColor?: string;
  width?: string;
  height?: string;
};

export default function RightArrow({ currentColor = 'currentColor' , width = 'width', height = 'height' }: RightArrowProps) {
  return (
    <svg
      className="transform -rotate-90 group-hover:-rotate-45 transition-transform duration-300"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={currentColor}
    >
      <path d="M17 15.586 6.707 5.293 5.293 6.707 15.586 17H7v2h12V7h-2v8.586z" />
    </svg>
  );
}