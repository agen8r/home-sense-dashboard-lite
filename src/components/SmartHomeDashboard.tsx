import { MetricCard } from "./MetricCard";
import { TemperatureChart } from "./TemperatureChart";

export function SmartHomeDashboard() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-light text-foreground mb-2">
            Smart Home
          </h1>
          <p className="text-muted-foreground">
            Monitor your home environment
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            label="Temperature"
            value="23.4°C"
            variant="temperature"
          />
          <MetricCard
            label="Humidity"
            value="74%"
            variant="humidity"
          />
          <MetricCard
            label="Microphone"
            value="45"
            variant="microphone"
          />
        </div>

        {/* Temperature Chart */}
        <div className="max-w-4xl mx-auto">
          <TemperatureChart />
        </div>
      </div>
    </div>
  );
}