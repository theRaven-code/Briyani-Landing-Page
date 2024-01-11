// FullScreenLayout.jsx
import React, { ReactNode } from "react";
import { Box } from "@mui/material";

interface FullScreenLayoutProps {
  children: ReactNode;
}

const FullScreenLayout: React.FC<FullScreenLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {children}
    </Box>
  );
};

export default FullScreenLayout;
