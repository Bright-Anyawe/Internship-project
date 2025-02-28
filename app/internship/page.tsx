"use client";

import React from "react";
import {
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  Box,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

// Motion-wrapped components
const MotionPaper = motion(Paper);
const MotionListItem = motion(ListItem);

export default function InternshipReviewPage() {
  const theme = useTheme();

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 4,
        // Optional subtle background color for the container
        backgroundColor: theme.palette.grey[50],
      }}
    >
      {}
      <MotionPaper
        elevation={3}
        // A soft gradient background with some padding and rounded corners
        sx={{
          p: 3,
          borderRadius: 2,
          background: `linear-gradient(135deg, ${theme.palette.grey[100]} 0%, #ffffff 100%)`,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: theme.palette.primary.main }}
          >
            Internship Project Review
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.grey[800] }}>
            A quick overview and company feedback on the project.
          </Typography>
        </Box>

        {}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            // Left border accent for a professional touch
            sx={{
              borderLeft: `4px solid ${theme.palette.secondary.main}`,
              pl: 2,
              mb: 1,
            }}
          >
            Project Overview
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.grey[800] }}>
            This internship project involves developing a dashboard application
            using React and Next.js. The goal is to create a user-friendly
            interface that allows users to track their skills and progress over
            time.
          </Typography>
        </Box>

        {}
        <Box>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              borderLeft: `4px solid ${theme.palette.secondary.main}`,
              pl: 2,
              mb: 1,
            }}
          >
            Company Review
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: theme.palette.grey[800] }}>
            The company has reviewed the project and provided the following
            feedback:
          </Typography>
          <List>
            {}
            <MotionListItem
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              sx={{ color: theme.palette.grey[700] }}
            >
              Excellent use of React components and hooks.
            </MotionListItem>
            <MotionListItem
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              sx={{ color: theme.palette.grey[700] }}
            >
              Clean and maintainable code structure.
            </MotionListItem>
            <MotionListItem
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              sx={{ color: theme.palette.grey[700] }}
            >
              Good implementation of responsive design.
            </MotionListItem>
            <MotionListItem
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              sx={{ color: theme.palette.grey[700] }}
            >
              Consider adding more unit tests to improve code coverage.
            </MotionListItem>
          </List>
        </Box>
      </MotionPaper>
    </Container>
  );
}
