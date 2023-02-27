import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision/src';
import {schemaTypes} from './schemas';
import  {defineConfig}  from "sanity/lib/exports";

export default defineConfig({
  name: 'default',
  title: 'portfolio',
  projectId: '35x65p4e',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
