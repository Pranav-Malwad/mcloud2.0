'use client'
import React from 'react';
import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const ShinySkeleton = styled(Skeleton)(({ theme }) => ({
  background: `
    linear-gradient(
      90deg,
      ${theme.palette.grey[300]} 25%,
      ${theme.palette.grey[100]} 37%,
      ${theme.palette.grey[300]} 63%
    )
  `,
  backgroundSize: '200% 100%',
  animation: 'shiny 1.5s infinite'
}));

const Shimmer = ({ variant, width, height }) => {
  return (
    <Box sx={{ width, height }}>
      <ShinySkeleton variant={variant} width={width} height={height} />
    </Box>
  );
};

export default Shimmer;
