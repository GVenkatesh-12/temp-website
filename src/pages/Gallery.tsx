
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Image, ImageIcon } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const Gallery = () => {
  const [openImage, setOpenImage] = useState<null | {src: string, alt: string}>(null);

  // Sample gallery images for 2020
  const gallery2020 = [
    {
      id: 1,
      src: "/documents/iSSSC Photos/2020_8.jpeg", 
      alt: "Technical workshop 2020"
    },
    {
      id: 2,
      src: "/documents/iSSSC Photos/2022.jpeg",
      alt: "University campus during conference 2020"
    },
    {
      id: 3,
      src: "/documents/iSSSC Photos/2020_5.jpeg",
      alt: "Conference collaboration session 2020"
    },
    {
      id: 4,
      src: "/documents/iSSSC Photos/2020_4.jpeg",
      alt: "Research exhibition 2020"
    },
    {
      id: 5,
      src: "/documents/iSSSC Photos/2020_9.jpeg", 
      alt: "Technical workshop 2020"
    },
    {
      id: 6,
      src: "/documents/iSSSC Photos/2020_3.jpeg",
      alt: "University campus during conference 2020"
    },
    {
      id: 7,
      src: "/documents/iSSSC Photos/2020_2.jpeg",
      alt: "Conference collaboration session 2020"
    },
    {
      id: 8,
      src: "/documents/iSSSC Photos/2020_7.jpeg",
      alt: "Research exhibition 2020"
    },
    {
      id: 9,
      src: "/documents/iSSSC Photos/2020_6.jpeg",
      alt: "Research exhibition 2020"
    }
   
  ];

  // Sample gallery images for 2022
  const gallery2022 = [
    {
      id: 1,
      src: "/documents/iSSSC Photos/2022_1.jpeg",
      alt: "Opening ceremony 2022"
    },
    {
      id: 2,
      src: "/documents/iSSSC Photos/2022_9.jpeg",
      alt: "Award ceremony 2022"
    },
    {
      id: 3,
      src: "/documents/iSSSC Photos/2022_12.jpeg",
      alt: "Conference dinner 2022"
    },
    {
      id: 4,
      src: "/documents/iSSSC Photos/2022_7.jpeg",
      alt: "Technical presentation 2022"
    },
    {
      id: 5,
      src: "/documents/iSSSC Photos/2022_8.jpeg",
      alt: "Opening ceremony 2022"
    },
    {
      id: 6,
      src: "/documents/iSSSC Photos/2022_2.jpeg",
      alt: "Award ceremony 2022"
    },
    {
      id: 7,
      src: "/documents/iSSSC Photos/2022_6.jpeg",
      alt: "Conference dinner 2022"
    },
    {
      id: 8,
      src: "/documents/iSSSC Photos/2022_5.jpeg",
      alt: "Technical presentation 2022"
    },
    {
      id: 9,
      src: "/documents/iSSSC Photos/2022_13.jpeg",
      alt: "Opening ceremony 2022"
    },
    {
      id: 10,
      src: "/documents/iSSSC Photos/2022_14.jpeg",
      alt: "Award ceremony 2022"
    },
    {
      id: 11,
      src: "/documents/iSSSC Photos/2022_15.jpeg",
      alt: "Conference dinner 2022"
    },
    {
      id: 12,
      src: "/documents/iSSSC Photos/2022_16.jpeg",
      alt: "Technical presentation 2022"
    },
    {
      id: 13,
      src: "/documents/iSSSC Photos/2022_17.jpeg",
      alt: "Opening ceremony 2022"
    },
    {
      id: 14,
      src: "/documents/iSSSC Photos/2022_18.jpeg",
      alt: "Award ceremony 2022"
    },
    {
      id: 15,
      src: "/documents/iSSSC Photos/2022_3.jpeg",
      alt: "Conference dinner 2022"
    },
    {
      id: 16,
      src: "/documents/iSSSC Photos/2022_4.jpeg",
      alt: "Technical presentation 2022"
    },
    {
      id: 17,
      src: "/documents/iSSSC Photos/2022_21.jpeg",
      alt: "Opening ceremony 2022"
    },
    {
      id: 18,
      src: "/documents/iSSSC Photos/2022_21.jpeg",
      alt: "Opening ceremony 2022"
    }
  ];

  // Handle opening the image in a lightbox
  const handleImageClick = (image: {src: string, alt: string}) => {
    setOpenImage(image);
  };

  // Close the lightbox dialog
  const handleCloseDialog = () => {
    setOpenImage(null);
  };

  // Render gallery images in a grid
  const renderGalleryGrid = (images: any[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {images.map((image) => (
        <div key={image.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <div 
            className="cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <AspectRatio ratio={4/3}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );

  // Render gallery carousel for mobile view
  const renderGalleryCarousel = (images: any[]) => (
    <div className="mb-8">
      <Carousel className="w-full max-w-xs sm:max-w-md mx-auto">
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <Card>
                <CardContent className="p-1">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleImageClick(image)}
                  >
                    <AspectRatio ratio={4/3}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </AspectRatio>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl">
      <div className="glassmorphism p-6 sm:p-8 rounded-xl">
        <div className="flex items-center gap-3 mb-6">
          <Image className="h-6 w-6 text-conference-blue" />
          <h1 className="text-3xl md:text-4xl font-bold text-conference-navy">Photo Gallery</h1>
        </div>
        
        <p className="text-gray-700 mb-8">
          Explore moments from our previous symposiums. Browse through collections from iSSSC 2020 and iSSSC 2022.
        </p>
        
        <Tabs defaultValue="2022" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-8">
            <TabsTrigger value="2020" className="text-base">iSSSC 2020</TabsTrigger>
            <TabsTrigger value="2022" className="text-base">iSSSC 2022</TabsTrigger>
          </TabsList>
          
          <TabsContent value="2020">
            <h2 className="text-2xl font-bold text-conference-blue mb-4 flex items-center gap-2">
              <ImageIcon className="h-5 w-5" />
              iSSSC 2020
            </h2>
            
            {/* Responsive display: Grid for larger screens, Carousel for mobile */}
            <div className="hidden sm:block">
              {renderGalleryGrid(gallery2020)}
            </div>
            <div className="block sm:hidden">
              {renderGalleryCarousel(gallery2020)}
            </div>
          </TabsContent>
          
          <TabsContent value="2022">
            <h2 className="text-2xl font-bold text-conference-blue mb-4 flex items-center gap-2">
              <ImageIcon className="h-5 w-5" />
              iSSSC 2022
            </h2>
            
            {/* Responsive display: Grid for larger screens, Carousel for mobile */}
            <div className="hidden sm:block">
              {renderGalleryGrid(gallery2022)}
            </div>
            <div className="block sm:hidden">
              {renderGalleryCarousel(gallery2022)}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Lightbox Dialog - Image only, no text */}
      <Dialog open={openImage !== null} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-4xl w-full p-1 sm:p-2 bg-white">
          {openImage && (
            <div className="relative w-full">
              <img 
                src={openImage.src} 
                alt={openImage.alt} 
                className="w-full h-auto object-contain max-h-[70vh]" 
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
