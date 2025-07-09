import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  variant: "temperature" | "humidity" | "microphone";
  className?: string;
}

const variantStyles = {
  temperature: "bg-temperature text-temperature-foreground",
  humidity: "bg-humidity text-humidity-foreground", 
  microphone: "bg-microphone text-microphone-foreground"
};

export function MetricCard({ label, value, variant, className }: MetricCardProps) {
  return (
    <div className={cn(
      "bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-200",
      className
    )}>
      <div className="text-center space-y-2">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          {label}
        </p>
        <div className={cn(
          "inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl font-bold",
          variantStyles[variant]
        )}>
          {value}
        </div>
      </div>
    </div>
  );
}