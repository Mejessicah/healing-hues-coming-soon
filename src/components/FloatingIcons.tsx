import { Stethoscope, Activity, Heart, Syringe } from "lucide-react";

export const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: "1000px" }}>
      <div className="absolute top-20 left-20 text-primary/20 float" style={{ transformStyle: "preserve-3d" }}>
        <Stethoscope size={48} strokeWidth={1.5} />
      </div>
      <div className="absolute top-40 right-32 text-primary/20 float float-delay-1" style={{ transformStyle: "preserve-3d" }}>
        <Activity size={48} strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-32 left-32 text-primary/20 float float-delay-2" style={{ transformStyle: "preserve-3d" }}>
        <Heart size={48} strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-40 right-20 text-primary/20 float" style={{ transformStyle: "preserve-3d" }}>
        <Syringe size={48} strokeWidth={1.5} />
      </div>
    </div>
  );
};