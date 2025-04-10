import { useI18nInspector } from "../hooks/useI18nInspector";
import React from "react";
import { downloadJson } from "../utils/jsonUtils";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


const InspectorOverlay = ({ keys = [] }) => {

  const { getJson,toggleInspect, isInspectMode } = useI18nInspector();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 10,
        right: 10,
        background: "rgba(0,0,0,0.7)",
        color: "white",
        padding: "8px 12px",
        borderRadius: "4px",
        fontSize: "12px",
        zIndex: 1000,
        maxWidth: "300px",
      }}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        {/* <button>
          i18n Inspector ▾
        </button>
        <div
          style={{
            position: "absolute",
            bottom: "100%",
            right: 0,
            background: "white",
            color: "black",
            padding: "8px",
            borderRadius: "4px",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            zIndex: 1001,
          }}
        > */}
          <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button>i18n Inspector ^</button>
                </DropdownMenu.Trigger>
          
                <DropdownMenu.Content
                  sideOffset={4}
                  style={{
                    // position: "absolute",
                    // bottom: "100%",
                    // right: 0,
                    // background: "white",
                    color: "black",
                    padding: "8px",
                    borderRadius: "4px",
                    // boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    zIndex: 1001,
                  }}
                >
                  <DropdownMenu.Item onSelect={() => toggleInspect()} >
                      <button>{isInspectMode ? "Disable" : "Enable"} Inspect Mode</button>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onSelect={() => downloadJson(getJson())}>
                      <button>Download JSON</button>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
        {/* </div> */}
      </div>
    </div>
  );
};

export { InspectorOverlay };
