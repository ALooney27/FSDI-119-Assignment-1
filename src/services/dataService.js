

class DataService {

    getServices() {
        //TODO: fetch data from server

        // temp. return mock data
        return [
            {
                id: "1234",
                title: "Custom Pools",
                image: "/images/Concrete_IMG_3.jpg",
                description: "Have you been thinking about a new pool for the family? Our company offers various designs for your next pool."
            },
            {
                id: "5678",
                title: "Concrete Floor",
                image: "/images/Concrete_IMG_5.jpg",
                description: "Tired of the same empty backyard? Add a new look to your home with new concrete."
            },
            {
                id: "9123",
                title: "Custom Fountains",
                image: "/images/Concrete_IMG_6.jpg",
                description: "Looking into remodeling your backyard? Ask about our custom fountains"
            }
        ]
    }

}

export default new DataService();