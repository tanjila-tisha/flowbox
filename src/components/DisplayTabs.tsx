import { useState, SyntheticEvent } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ContentTab } from "../types";

interface TabPanelProps {
  children: JSX.Element;
  selected: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, selected, ...other } = props;

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      {...other}
    >
      {value === selected && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

interface DisplayTabsProps {
  tabs: ContentTab[];
}

const DisplayTabs = ({ tabs }: DisplayTabsProps): JSX.Element  => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event: SyntheticEvent, newTabValue: number) => {
    setSelectedTab(newTabValue);
  };

  return (
    <Box sx={{ marginY: 5 }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tabs value={selectedTab} onChange={handleChange} aria-label="tabs">
          {tabs.map(({ label, value }: ContentTab) => (
            <Tab label={label} key={value} data-testid={`data-id-${label}`} />
          ))}
        </Tabs>
      </Box>
      {tabs.map(({ value, content }: ContentTab) => (
        <TabPanel value={value} selected={selectedTab} key={value}>
          {content}
        </TabPanel>
      ))}
    </Box>
  );
};

export default DisplayTabs;
