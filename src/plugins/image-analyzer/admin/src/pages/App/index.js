import React from 'react';
import { Layout, BaseHeaderLayout, ContentLayout } from '@strapi/design-system/Layout';
import { Button } from '@strapi/design-system/Button';
import { Main } from '@strapi/design-system/Main';
import { Stack } from '@strapi/design-system/Stack';
import { Typography } from '@strapi/design-system/Typography';

const ImageAnalyzerPage = () => {
  const handleButtonClick = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Layout>
      <BaseHeaderLayout
        title="Image Analyzer"
        subtitle="Analyze images using OpenAI"
        as="h2"
      />
      <ContentLayout>
        <Main>
          <Stack spacing={4}>
            <Typography variant="beta">Welcome to the Image Analyzer plugin!</Typography>
            <Button onClick={() => handleButtonClick('/image-analyzer')}>
              Call Index API
            </Button>
            {/* Add other buttons to call other APIs */}
          </Stack>
        </Main>
      </ContentLayout>
    </Layout>
  );
};

export default ImageAnalyzerPage;
