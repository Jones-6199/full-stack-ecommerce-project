import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";

const Links = ({ title }) => {
  const [hover, setHover] = useState(false);
  const [subHover, setSubHover] = useState(false);

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <ExpandMore sx={{ fontSize: 16, ml: 1 }} />

      {/* Main dropdown menu */}
      {hover && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            minWidth: 170,
            zIndex: 2,
            
          }}
        >
          <Paper sx={{ mt: 2  }}>
            <List>
              {/* Dashboard */}
              <ListItem disablePadding>
                <ListItemButton sx={{ px: 1.5 }}>
                  <ListItemText
                    primary="Dashboard"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: 15,
                        fontWeight: 300,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              {/* Products with submenu */}
              <ListItem
                disablePadding
                sx={{ position: "relative" }}
                onMouseEnter={() => setSubHover(true)}
                onMouseLeave={() => setSubHover(false)}
              >
                <ListItemButton sx={{ px: 1.5 }}>
                  <ListItemText
                    primary="Products"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: 15,
                        fontWeight: 300,
                      },
                    }}
                  />
                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>

                {subHover && (
                  <Box sx={{ position: "absolute", top: 0, left: "100%" }}>
                    <Paper sx={{ ml: 1, minWidth: 150 }}>
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton sx={{ px: 1.5 }}>
                            <ListItemText
                              primary="Add Product"
                              sx={{
                                "& .MuiTypography-root": {
                                  fontSize: 15,
                                  fontWeight: 300,
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton sx={{ px: 1.5 }}>
                            <ListItemText
                              primary="Edit Product"
                              sx={{
                                "& .MuiTypography-root": {
                                  fontSize: 15,
                                  fontWeight: 300,
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Paper>
                  </Box>
                )}
              </ListItem>

              {/* Orders */}
              <ListItem disablePadding>
                <ListItemButton sx={{ px: 1.5 }}>
                  <ListItemText
                    primary="Orders"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: 15,
                        fontWeight: 300,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              {/* Profile */}
              <ListItem disablePadding>
                <ListItemButton sx={{ px: 1.5 }}>
                  <ListItemText
                    primary="Profile"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: 15,
                        fontWeight: 300,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

// Prop types for ESLint
Links.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Links;
