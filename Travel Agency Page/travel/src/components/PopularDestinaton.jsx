const destination=[
  
    {
        image:'/Images-main/Images/gal1.jpg',
        title:"Paris,France",
        description:"The city of Light draws millions of visitors every year"
    },
    
    {
        image:'/Images-main/Images/gal2.jpg',
        title:"Bali,Indonesia",
        description:"The city of Light draws millions of visitors every year"
    },

    {
        image:'/Images-main/Images/gal3.png',
        title:"New Your,America",
        description:"The city of Light draws millions of visitors every year"
    },

    {
        image:'/Images-main/Images/gal4.jpg',
        title:"Tokyo,Japan",
        description:"The city of Light draws millions of visitors every year"
    }

];


const PopularDestinaton = () => {
  return (
    <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-8">Popular Destinatons</h3>
             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {destination.map((city,index)=>(
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                     <img src={city.image} alt={city.title} className="w-full h-48 object-cover 
                    transform transition duration-300 hover:scale-110" />
                   
                         <div className="p-4">
                            <h4 className="text-xl font-bold mb-2">{city.title}</h4>
                            <p className="text-gray-600">{city.description}</p>
                         </div>
                        </div>
                 
                ))}
             </div>
        </div>
    </div>
  )
}

export default PopularDestinaton