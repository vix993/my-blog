import Link from "next/link";

export const Skill = ({ name }) => {
  return (
    <span className="bg-yellow-100 rounded-lg text-sm max-w-xs p-2 flex justify-center items-center h-8">
      {name}
    </span>
  );
};