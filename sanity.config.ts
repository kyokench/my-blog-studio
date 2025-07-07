import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas/schema'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'


export default defineConfig({
  name: 'default',
  title: 'my-blog',

  projectId: 'wjvd5gs5',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
