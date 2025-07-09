import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const temperatureData = [
  { time: '00:00', temperature: 22.1 },
  { time: '04:00', temperature: 21.8 },
  { time: '08:00', temperature: 23.2 },
  { time: '12:00', temperature: 24.5 },
  { time: '16:00', temperature: 25.1 },
  { time: '20:00', temperature: 23.8 },
  { time: '24:00', temperature: 22.9 },
];

export function TemperatureChart() {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card">
      <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
        Temperature over time
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={temperatureData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="time" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              domain={['dataMin - 1', 'dataMax + 1']}
            />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="hsl(var(--temperature))"
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--temperature))', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: 'hsl(var(--temperature))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}