import React from 'react';
import { Typography, Stack } from '@mui/material';

interface ILabelFieldsProps {
  title: string;
}

export default function LabelFields({ title }: ILabelFieldsProps) {
  return (
    <Stack direction="row" sx={{ mt: '0.1rem' }}>
      <Typography variant="body2" color="grey.500" fontWeight="600">
        {title}
      </Typography>
    </Stack>
  );
}
