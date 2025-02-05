import { Stethoscope, Heartbeat, FirstAid, Syringe } from "lucide-react";

export const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-20 text-primary/10 float">
        <Stethoscope size={48} />
      </div>
      <div className="absolute top-40 right-32 text-primary/10 float float-delay-1">
        <Heartbeat size={48} />
      </div>
      <div className="absolute bottom-32 left-32 text-primary/10 float float-delay-2">
        <FirstAid size={48} />
      </div>
      <div className="absolute bottom-40 right-20 text-primary/10 float">
        <Syringe size={48} />
      </div>
    </div>
  );
};