import { Tooltip } from "react-tooltip";

export const TransWithInspect = (key, translatedValue) => {
  return (
    <>
      <span
        style={{
          backgroundColor: "rgba(255, 255, 0, 0.5)",
          cursor: "pointer",
        }}
        data-tooltip-id={`translation-tooltip-${key}`}
        onClick={() => navigator.clipboard.writeText(key)}
      >
        {translatedValue}
      </span>
      <Tooltip
        id={`translation-tooltip-${key}`}
        place="bottom"
        variant="info"
        content={key}
        data-tooltip-wrapper="span"
        style={{
          color: "#fff",
          backgroundColor: "#333",
          fontSize: "12px",
        }}
      />
    </>
  );
};
