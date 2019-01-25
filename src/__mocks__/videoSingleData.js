export default {
  collection: {
    version: "1.0",
    links: [
      {
        prompt: "Next",
        rel: "next",
        href: "https://images-api.nasa.gov/search?page=2&q=mars"
      }
    ],
    items: [
      {
        links: [
          {
            rel: "preview",
            render: "image",
            href:
              "https://images-assets.nasa.gov/image/PIA03201/PIA03201~thumb.jpg"
          }
        ],
        data: [
          {
            nasa_id: "PIA03201",
            date_created: "2005-11-15T21:13:36Z",
            description_508: "Mars-shine",
            keywords: ["Mars", "Mars Exploration Rover MER"],
            title: "Mars-shine",
            secondary_creator: "NASA/JPL-Caltech/Cornell",
            media_type: "video",
            description: "Mars-shine",
            center: "JPL"
          }
        ],
        href: "https://images-assets.nasa.gov/image/PIA03201/collection.json"
      }
    ],
    metadata: {
      total_hits: 18600
    },
    href: "https://images-api.nasa.gov/search?q=mars"
  }
};
