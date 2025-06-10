// MonkeytypeIcon.jsx
const MonkeytypeIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Keyboard outline */}
    <rect x="2" y="6" width="20" height="12" rx="2" stroke="white" strokeWidth="2" fill="none" />
    {/* Keys */}
    <rect x="5" y="9" width="2" height="2" rx="0.5" fill="white" />
    <rect x="8" y="9" width="2" height="2" rx="0.5" fill="white" />
    <rect x="11" y="9" width="2" height="2" rx="0.5" fill="white" />
    <rect x="14" y="9" width="2" height="2" rx="0.5" fill="white" />
    <rect x="17" y="9" width="2" height="2" rx="0.5" fill="white" />
    <rect x="5" y="12" width="2" height="2" rx="0.5" fill="white" />
    <rect x="8" y="12" width="2" height="2" rx="0.5" fill="white" />
    <rect x="11" y="12" width="2" height="2" rx="0.5" fill="white" />
    <rect x="14" y="12" width="2" height="2" rx="0.5" fill="white" />
    <rect x="17" y="12" width="2" height="2" rx="0.5" fill="white" />
    {/* Spacebar */}
    <rect x="8" y="15" width="8" height="2" rx="0.5" fill="white" />
  </svg>
);

export default MonkeytypeIcon;
