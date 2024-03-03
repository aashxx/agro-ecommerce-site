export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Seeds', value: 'seeds' },
            { title: 'Crop Protection', value: 'crop-protection' },
            { title: 'Plant Nutrition', value: 'plant-nutrition' },
            { title: 'Farming Tools', value: 'farming-tools' },
          ],
        },
      },
      {
        name: 'subCategory',
        title: 'Sub Category',
        type: 'string',
        options: {
          list: [
            { title: 'No Sub Category', value: 'no-sub-category' },
            { title: 'Vegetable Seeds - Seeds', value: 'vegetable-seeds' },
            { title: 'Flower Seeds - Seeds', value: 'flower-seeds' },
            { title: 'Fruit Seeds - Seeds', value: 'fruit-seeds' },
            { title: 'Cereals - Seeds', value: 'cereals' },
            { title: 'Insecticides - Crop Protection', value: 'insecticides' },
            { title: 'Fungicides - Crop Protection', value: 'fungicides' },
            { title: 'Herbicides - Crop Protection', value: 'herbicides' },
            { title: 'Plant Growth Promoters - Plant Nutrition', value: 'plant-growth-promoters' },
            { title: 'Fertilizers - Plant Nutrition', value: 'fertilizers' },
          ],
        },
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'details',
        title: 'Details',
        type: 'string',
      }
    ]
  }