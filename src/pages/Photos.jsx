import { ImageCarousel } from '../components/Images/ImageCarousel'
import PhotoGrid from '../components/PhotoGrid'

export function Photos() {
  const images = [
    {
      src: "images/icelanddog.jpg",
      alt: "Dog in Iceland"
    },
    {
      src: "images/romephoto.jpg",
      alt: "Scene from Rome"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Photography</h1>
      <ImageCarousel images={images} />
      <div className="my-12">
        <h2 className="text-2xl font-bold text-center mb-8">Photo Gallery</h2>
        <PhotoGrid images={images} />
      </div>
    </div>
  )
} 