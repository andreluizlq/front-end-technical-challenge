/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { Stack } from '@mui/material';

interface IMapPointProps {
  lat: number;
  lng: number;
  text: string;
}

export default function MapPoint({ text }: IMapPointProps) {
  return <Stack>{text}</Stack>;
}
