function WeatherDetailsItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="p-4">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-lg font-semibold mt-1">{value}</div>
    </div>
  );
}
export default WeatherDetailsItem;
