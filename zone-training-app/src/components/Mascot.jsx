import drData from "../assets/dr_data.png";

export function Mascot({ size = 48 }) {
  return (
    <img
      src={drData}
      alt="Dr. Data"
      width={size}
      height={size}
      style={{ objectFit: "contain", flexShrink: 0, display: "block" }}
    />
  );
}
