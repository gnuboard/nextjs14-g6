// src/app/(home)/page.js

import React from 'react';
import { Typography, Grid, Container } from '@mui/material';
import Latest from '@/components/Latest';
import LatestGallery from '@/components/LatestGallery';
import LatestGallerySlide from '@/components/LatestGallerySlide';
import CookieConsentPopup from '@/components/CookieConcentPopup';

const Home = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Home
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Latest bo_table="free" view_type="write" rows={5} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Latest bo_table="notice" view_type="write" rows={5} />
        </Grid>
        <Grid item xs={12}>
          <LatestGallerySlide bo_table="gallery" view_type="write" rows={4} />
        </Grid>
        <Grid item xs={12}>
          <LatestGallery bo_table="gallery" view_type="write" rows={4} />
        </Grid>
      </Grid>
      <CookieConsentPopup />
    </div>
  );
};

export default Home;