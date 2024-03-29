export default {
  name: 'heroImage',
  type: 'document',
  title: 'Home Images',
  fields: [
    {
      name: 'image1',
      type: 'image',
      title: 'First Image',
    },
    {
      name: 'image2',
      type: 'image',
      title: 'Second Image',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Carrousel Images',
      of: [{type: 'image'}],
    },
  ],
}