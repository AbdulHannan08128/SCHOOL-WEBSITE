import React from "react";
import Image from "next/image";
import type { performer_type } from "@/types";
import { COLORS } from "@/constants";

interface PerformerCardProps {
  performer: performer_type;
}

const PerformerCard: React.FC<PerformerCardProps> = ({ performer }) => {
  return (
    <div
      className="w-80 h-auto flex items-center justify-center flex-wrap gap-4 py-4 rounded-xl border-2"
      style={{ borderColor: COLORS.primary, backgroundColor:COLORS.bg}}
    >
      <div className="">
        <Image
          src={performer.image}
          alt={performer.name}
          height={100}
          width={100}
          className=" rounded-3xl border-4"
          style={{ borderColor: COLORS.primary }}
        />
      </div>
      <div>
        <span className=" text-xl font-bold">{performer.name}</span>
        <div className="flex gap-1 justify-center align-middle">
          <span
            className="p-2 rounded-lg"
            style={{ background: COLORS.secondary }}
          >
            {performer.exam}
          </span>
          <span className=" font-bold pt-2" style={{ color: COLORS.link }}>
            .
          </span>
          <span
            className="p-2 rounded-lg font-extrabold"
            style={{ background: COLORS.primary }}
          >
            <span>{performer.marks}</span>
            <span>/</span>
            <span>{performer.max_marks}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformerCard;
