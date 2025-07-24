import React, { useState } from 'react';

const ImageGallery = ({ images, itemName }) => {
    const [mainImage, setMainImage] = useState(images[0]);
    const placeholderImage = `https://placehold.co/800x600/e2e8f0/4a5568?text=${encodeURIComponent(itemName)}`;

    return (
        <div>
            <div className="w-full max-h-[500px] mx-auto aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img 
                    src={mainImage || placeholderImage} 
                    alt={itemName} 
                    className="w-full h-full object-center object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src=placeholderImage; }}
                />
            </div>
            <div className="mt-4 grid grid-cols-5 gap-4">
                {images.map((image, index) => (
                    <div 
                        key={index} 
                        className={`cursor-pointer rounded-lg overflow-hidden border-2 ${mainImage === image ? 'border-indigo-500' : 'border-transparent'}`}
                        onClick={() => setMainImage(image)}
                    >
                        <img 
                            src={image || placeholderImage} 
                            alt={`${itemName} thumbnail ${index + 1}`}
                            className="w-full h-full object-center object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src=placeholderImage; }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
