import {defineField, defineType} from 'sanity/lib/exports'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: "Title of the skill",
      type: 'string',
    }),
    defineField({
      name: 'progrss',
      title: 'Progress',
      type: 'number',
      description: "Progress of skill from 0 - 100",
      validation: (Rule)=> Rule.min(0).max(100),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
})
