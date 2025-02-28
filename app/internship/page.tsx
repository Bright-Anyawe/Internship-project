"use client";

import React from "react";
import {
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionPaper = motion(Paper);
const MotionListItem = motion(ListItem);

export default function InternshipReviewPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {}
      <MotionPaper
        elevation={3}
        sx={{ p: 3 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Internship Project Review
          </Typography>
          <Typography variant="body1">
            A quick overview and company feedback on the project.
          </Typography>
        </Box>

        {}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Project Overview
          </Typography>
          <Typography variant="body1">
            This internship project involves developing a dashboard application
            using React and Next.js. The goal is to create a user-friendly
            interface that allows users to track their skills and progress over
            time.
          </Typography>
        </Box>

        {}
        <Box>
          <Typography variant="h5" component="h2" gutterBottom>
            Company Review
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            The company has reviewed the project and provided the following
            feedback:
          </Typography>
          <List>
            {}
            <MotionListItem
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Excellent use of React components and hooks.
            </MotionListItem>
            <MotionListItem
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Clean and maintainable code structure.
            </MotionListItem>
            <MotionListItem
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Good implementation of responsive design.
            </MotionListItem>
            <MotionListItem
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Consider adding more unit tests to improve code coverage.
            </MotionListItem>
          </List>
        </Box>
      </MotionPaper>
    </Container>
  );
}
