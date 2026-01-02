import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        mt: 5
      }}
    >
      <Typography
        display="flex"
        justifyContent="center"
        alignItems="center"
        variant="h6"
        sx={{ fontSize: 18, color: "HighlightText" }}
      >
        © 2026 Crafted by 
        <Link
          href="https://github.com/Jones-6199"
          target="_blank"
          underline="none"
          sx={{
            mx: 0.5,
            fontSize: 18,
            color: "#00e676",
            fontWeight: 500,
            "&:hover": {
              color: "#1de9b6",
            },
            fontFamily: "Georgia"
          }}
        >
          Benziane Younes
        </Link>
      </Typography>
    </Box>
  );
}
