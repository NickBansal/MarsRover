export default {
  'collection': {
    'version': '1.0',
    'links': [
      {
        'prompt': 'Next',
        'rel': 'next',
        'href': 'https://images-api.nasa.gov/search?page=2&q=mars'
      }
    ],
    'items': [
      {
        'links': [
          {
            'rel': 'preview',
            'render': 'image',
            'href': 'https://images-assets.nasa.gov/image/PIA04778/PIA04778~thumb.jpg'
          }
        ],
        'data': [
          {
            'nasa_id': 'PIA04778',
            'date_created': '2003-10-08T21:49:42Z',
            'description_508': 'Mars in Color',
            'keywords': [
              'Mars',
              '2001 Mars Odyssey'
            ],
            'title': 'Mars in Color',
            'secondary_creator': 'NASA/JPL/Arizona State University',
            'media_type': 'image',
            'description': 'Mars in Color',
            'center': 'JPL'
          }
        ],
        'href': 'https://images-assets.nasa.gov/image/PIA04778/collection.json'
      }
    ],
    'metadata': {
      'total_hits': 18600
    },
    'href': 'https://images-api.nasa.gov/search?q=mars'
  }
}
