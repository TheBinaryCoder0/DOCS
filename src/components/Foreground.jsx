import React from 'react'
import Card from './Card'
import { useRef } from 'react'

function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc: "Stylish Summer Dress - Perfect for casual outings, this dress features a vibrant floral pattern and a comfortable fit.",
            fileSize: "0.9mb",
            close: true,
            tagDetails: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green-600"
            }
        },
        {
            desc: "Classic Denim Jacket - A timeless piece that adds an edge to any outfit. Made from high-quality denim, available in various sizes.",
            fileSize: "1.2mb",
            close: false,
            tagDetails: {
                isOpen: true,
                tagTitle: "View Details",
                tagColor: "blue-600"
            }
        },
        {
            desc: "Elegant Evening Gown - This stunning gown features intricate lace details and a flowing silhouette, perfect for formal occasions.",
            fileSize: "2.5mb",
            close: true,
            tagDetails: {
                isOpen: false,
                tagTitle: "Unavailable",
                tagColor: "red-600"
            }
        },
        {
            desc: "Casual Sneakers - Comfortable and stylish, these sneakers are ideal for everyday wear, with a cushioned sole for added support.",
            fileSize: "1.8mb",
            close: true,
            tagDetails: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green-600"
            }
        }
    ];
    

  return (
    <>
        <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
            {data.map((item, index) => (
            <Card data={item} reference={ref} />
            ))}
        </div>
    </>
  )
}

export default Foreground