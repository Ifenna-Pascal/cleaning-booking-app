export const services= [
    {
        id: 1,
        name: "All Services",
        type: "all",
        link: "/services",
        header: "Regardless of how messy things are, we do our best to clean.",
        content: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue."
    },
    {
        id: 2,
        name: "Laundry",
        type: "laundry",
        link: "/services/laundry",
        header: "Fabric are more attractive when laundered.",
        content: "We offer world class laundry and dry cleaning services at crystal home deterge,adhering to the global best practices in the laundry and dry cleaning industry,we cater for all your wears,beddings,curtains,e.t.c. Best part?We offer free dry cleaning services for any ten(10) clothing items to all our clients!   "
    },
    {
        id: 3,
        name: "Post Construction",
        link: "/services/post_construction",
        type: "post_construction",
        header: "Renovation after construction is key to construction maintenance ",
        content: "Do you have a newly constructed building In need of industrial cleaning,or a newly renovated space that needs to be revamped?, well you found us!. At crystal home deterge we are fully committed and our highly professional team are ready to clean for you."
    },
    {
        id: 4,
        name: "Deep Cleaning",
        link: "/services/deep_cleaning",
        type:"deep_cleaning",
        header: "There is huge wall between CLEAN and SUPER CLEAN",
        content: "There’s clean and there’s SUPER CLEAN!. Whenever you need your space sparkling,we are your one stop! committed to giving you a crystal experience,we are ready to go deep into all corners,vents and details,clean all dirts,remove all stains and ready to give you the sparkle you desire "
    },
    {
        id: 5,
        name: "Organization / Home Edit",
        type: "home_edit",
        link: "/services/home_edit",
        header: "Maintain a healthy home  environment at your comfort and zero stress.",
        content: "Are you constantly burdened with organizing your wardrobe? Or eating unhealthy because of a disorganized pantry?.Well we are your solution! At crystal home deterge limited,we are swear by four concrete steps; edit,categorize,maintain and contain. Our team is well equipped and acquainted to help you maintain your space and improve your lifestyle."
    },
    {
        id: 6,
        name: "Carpet and rugs",
        link: "/services/carpet_and_rugs",
        type: "carpet_and_rugs",
        header: "The Beauty of your Rugs lies in its cleanliness",
        content: "Just like accessories give essence to outlooks,your rugs and carpets give essence to your space,complimenting its beauty. Which is why they should never have to look dull or dirty. we offer carpets and rugs cleaning at our clients location and also render pick up and delivery services, understanding the various carpet/rug fabrics is essential for maintaining it properly, our professional cleaners at Crystal home deterge are well acquainted and well equipped to maintain them for you."
    },
    {
        id: 7,
        name: "Upholstery",
        link: "/services/upholstery",
        type:"upholstery",
        header: "To elimate prevaling dust details has to be put in place ",
        content: `Ever wonder where the dust goes while you sweep and micro clean your space? Well you guessed right!,Upholsteries are known to harbor germs,dusts and pathogens which can be dangerous to you or those around you. With a clear knowledge on the implications of this,we at crystal home deterge are tasked the duty of always learning the best ways to clean and maintain your upholstery with our professionally trained and well equipped team.`
    },
    {
        id: 8,
        name: "Fumigation",
        type: "fumigation",
        link: "/services/fumigation",
        header: "Avoid sharing space with pests and rodents. Theyu can be eliminated",
        content: `With crystal home deterge,you won’t have to worry about sharing your space with rodents or pests. Our pest control experts and fumigation team understand how these rodents behave and are well equipped to exterminate them,ensuring that your pest problem is gone forever !`
    }

];


export const bedRooms = [
    {
        name: "1 Bedroom",
        value: '1'
    }, 
    {
        name: "2 Bedrooms",
        value: '2'
    }, 
    {
        name: "3 Bedrooms",
        value: '3'
    }, 
    {
        name: "4 Bedrooms",
        value: '4'
    }, 
]

export const entrance = [
    {
        name: 'Main Door',
    },
    {
        name: 'Remote Lock'
    },
    {
        name: 'I will be home'
    },
    {
        name: 'Entry Code'
    }
]

export const findService = (name) => {
    return services.find(x => x.name.split(" ")[0] === name);
}
