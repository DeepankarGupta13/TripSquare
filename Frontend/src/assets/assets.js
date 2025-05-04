import logo from './Logo.png';
import search from './searchbar.svg';
import video from './video.mp4';
import map from './Map.png';
import location from './location.svg';
import whatsAppIcon from './WhatsApp.svg';
import pathLogo from './PathIcon.svg';
import timeSheet from './TimeSheet.svg';

export const assets = {
    logo: logo,
    phoneNumber: 7085282611,
    email: 'rihasahi16@gmail.com',
    search: search,
    videoLink: video,
    map: map,
    location: location,
    facebookLink: '',
    instagramLink: '',
    twitterLink: '',
    whatsappIcon: whatsAppIcon,
    pathLogo: pathLogo,
    timeSheet: timeSheet,
}

export const assetsList = [
    {
        id: 1,
        name: 'Meghalaya',
        price: 20000,
        duration: '5N/6D',
        description: "Meghalaya is a state in northeastern India, known for its stunning landscapes, lush green hills, and vibrant culture. It is home to the living root bridges, beautiful waterfalls, and unique indigenous tribes. The state offers a blend of adventure, natural beauty, and rich cultural experiences.",
        itinerary: [
            {
                day: 1,
                description: "Arrival in Guwahati, transfer to Shillong, visit Umiam Lake and local markets.",
                activities: [
                    "Arrival in Guwahati",
                    "Transfer to Shillong",
                    "Visit Ward's Lake",
                    "Explore Police Bazar",
                    "Dinner and overnight stay in Shillong"
                ],
            },
            {
                day: 2,
                description: "Visit Cherrapunji, explore Nohkalikai Falls and Mawsmai Cave.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Cherrapunji",
                    "Explore Nohkalikai Falls",
                    "Visit Mawsmai Cave",
                    "Return to Shillong for overnight stay"
                ],
            },
            {
                day: 3,
                description: "Visit Living Root Bridges in Nongriat, trek to the root bridges.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Living Root Bridges in Nongriat",
                    "Trek to the root bridges",
                    "Return to Shillong for overnight stay"
                ],
            },
            {
                day: 4,
                description: "Visit Dawki, explore Umngot River, and Mawlynnong Village.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Dawki and Umngot River",
                    "Boat ride on Umngot River",
                    "Explore Mawlynnong Village",
                    "Return to Shillong for overnight stay"
                ],
            },
            {
                day: 5,
                description: "Visit Elephant Falls, explore Don Bosco Museum, and shopping in Shillong.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Elephant Falls",
                    "Explore Don Bosco Museum",
                    "Shopping in Shillong",
                    "Dinner and overnight stay in Shillong"
                ],
            },
            {
                day: 6,
                description: "Transfer to Guwahati Airport for departure.",
                activities: [
                    "Breakfast at the hotel",
                    "Transfer to Guwahati Airport for departure"
                ],
            }
        ],
        inclusions: [
            "Accommodation in 3-star hotels",
            "Breakfast and dinner included",
            "All transfers and sightseeing as per itinerary",
            "Professional guide for sightseeing",
            "All applicable taxes"
        ],
        exclusions: [
            "Airfare",
            "Lunch",
            "Personal expenses",
            "Any other services not mentioned in inclusions"
        ],
        otherDetails: [
            "Best time to visit: October to April",
            "Weather: Pleasant and cool",
            "Local cuisine: Try traditional Khasi dishes"
        ],
        type: ['group', 'private', 'family', 'top', 'north East'],
        rating: 4.5,
        reviews: [
            {
                user: 'John Doe',
                rate: 4.5,
                comment: "Amazing experience! The landscapes were breathtaking and the local culture was fascinating.",
            },
            {
                user: 'Jane Smith',
                rate: 4.0,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Alice Johnson',
                rate: 5.0,
                comment: "Meghalaya is a hidden gem! The living root bridges were a highlight of the trip.",
            },
            {
                user: 'Bob Brown',
                rate: 4.8,
                comment: "The itinerary was perfect, and the accommodations were comfortable. Would love to visit again!",
            },
            {
                user: 'Charlie Green',
                rate: 4.2,
                comment: "The food was delicious, and the locals were friendly. A great way to explore Meghalaya!",
            },
            {
                user: 'Daisy White',
                rate: 4.7,
                comment: "The trek to the living root bridges was challenging but rewarding. A must-do for adventure lovers!",
            },
            {
                user: 'Ethan Black',
                rate: 4.6,
                comment: "The boat ride on Umngot River was serene and picturesque. A perfect way to unwind.",
            },
            {
                user: 'Fiona Blue',
                rate: 4.9,
                comment: "The trip exceeded my expectations! The natural beauty of Meghalaya is unparalleled.",
            },
            {
                user: 'George Yellow',
                rate: 4.3,
                comment: "The local markets in Shillong were vibrant and full of unique handicrafts. Loved shopping there!",
            },
            {
                user: 'Hannah Purple',
                rate: 4.4,
                comment: "Overall, a fantastic trip! Would recommend to anyone looking for a unique travel experience.",
            },
        ],
        otherPics:[0,1, 2, 3, 4, 5, 6, 7, 8, 9,],
        topFlag: true,
        currentSeason: true,
    },
    {
        id: 2,
        name: 'Manali',
        price: 15000,
        duration: '4N/5D',
        description: "Manali is a popular hill station in the Indian state of Himachal Pradesh, known for its stunning landscapes, adventure sports, and vibrant culture. It is a gateway to the Solang Valley, Rohtang Pass, and offersa range of outdoor activities like skiing, paragliding, and trekking. The town is also famous for its ancient temples and vibrant markets.",
        itinerary: [
            {
                day: 1,
                description: "Arrival in Manali, check-in to the hotel, and local sightseeing.",
                activities: [
                    "Arrival in Manali",
                    "Check-in to the hotel",
                    "Visit Hadimba Temple",
                    "Explore Manu Temple",
                    "Dinner and overnight stay in Manali"
                ],
            },
            {
                day: 2,
                description: "Visit Solang Valley for adventure activities.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Solang Valley",
                    "Adventure activities like paragliding and zorbing",
                    "Return to Manali for overnight stay"
                ],
            },
            {
                day: 3,
                description: "Excursion to Rohtang Pass.",
                activities: [
                    "Breakfast at the hotel",
                    "Excursion to Rohtang Pass",
                    "Snow activities and photography",
                    "Return to Manali for overnight stay"
                ],
            },
            {
                day: 4,
                description: "Visit Kullu and Manikaran.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Kullu Valley",
                    "Explore Manikaran Gurudwara and hot springs",
                    "Return to Manali for overnight stay"
                ],
            },
            {
                day: 5,
                description: "Departure from Manali.",
                activities: [
                    "Breakfast at the hotel",
                    "Check-out from the hotel",
                ],
            },
        ],
        inclusions: [
            "Accommodation in 3-star hotels",
            "Breakfast and dinner included",
            "All transfers and sightseeing as per itinerary",
            "Professional guide for sightseeing",
            "All applicable taxes"
        ],
        exclusions: [
            "Airfare",
            "Lunch",
            "Personal expenses",
            "Any other services not mentioned in inclusions"
        ],
        otherDetails: [
            "Best time to visit: March to June",
            "Weather: Pleasant and cool",
            "Local cuisine: Try Himachali dishes"
        ],
        type: ['group', 'private', 'family', 'top', 'south', 'north'],
        rating: 4.5,
        reviews: [
            {
                user: 'John Doe',
                rate: 4.5,
                comment: "Amazing experience! The landscapes were breathtaking and the local culture was fascinating.",
            },
            {
                user: 'Jane Smith',
                rate: 4.0,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Alice Johnson',
                rate: 5.0,
                comment: "Manali is a hidden gem! The living root bridges were a highlight of the trip.",
            },
            {
                user: 'Bob Brown',
                rate: 4.8,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Charlie Green',
                rate: 4.2,
                comment: "The food was delicious, and the locals were friendly. A great way to explore Manali!",
            },
            {
                user: 'Daisy White',
                rate: 4.7,
                comment: "The trek to the living root bridges was challenging but rewarding. A must-do for adventure lovers!",
            },
        ],
        otherPics:[0,1, 2, 3, 4, 5, 6, 7, 8, 9,],
        topFlag: true,
        currentSeason: true,
    },
    {
        id: 3,
        name: 'Sikkim',
        price: 25000,
        duration: '6N/7D',
        description: "Sikkim is a small state in northeastern India, known for its stunning landscapes, rich biodiversity, and vibrant culture. It is home to the majestic Kanchenjunga, the third highest mountain in the world. Sikkim offers a blend of adventure, spirituality, and natural beauty, making it a popular destination for travelers.",
        itinerary: [
            {
                day: 1,
                description: "Arrival in Bagdogra, transfer to Gangtok.",
                activities: [
                    "Arrival in Bagdogra",
                    "Transfer to Gangtok",
                    "Check-in to the hotel",
                    "Explore local markets",
                    "Dinner and overnight stay in Gangtok"
                ],
            },
            {
                day: 2,
                description: "Visit Tsomgo Lake and Baba Mandir.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Tsomgo Lake",
                    "Explore Baba Mandir",
                    "Return to Gangtok for overnight stay"
                ],
            },
            {
                day: 3,
                description: "Excursion to Nathula Pass.",
                activities: [
                    "Breakfast at the hotel",
                    "Excursion to Nathula Pass",
                    "Snow activities and photography",
                    "Return to Gangtok for overnight stay"
                ],
            },
            {
                day: 4,
                description: "Visit Pelling, explore Pemayangtse Monastery.",
                activities: [
                    "Breakfast at the hotel",
                    "Transfer to Pelling",
                    "Visit Pemayangtse Monastery",
                    "Explore Khecheopalri Lake",
                    "Dinner and overnight stay in Pelling"
                ],
            },
            {
                day: 5,
                description: "Visit Yuksom and Kanchenjunga National Park.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Yuksom",
                    "Explore Kanchenjunga National Park",
                    "Return to Pelling for overnight stay"
                ],
            },
            {
                day: 6,
                description: "Visit Ravangla and Buddha Park.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Ravangla",
                    "Explore Buddha Park",
                    "Return to Gangtok for overnight stay"
                ],
            },
            {
                day: 7,
                description: "Departure from Bagdogra.",
                activities: [
                    "Breakfast at the hotel",
                    "Check-out from the hotel",
                    "Transfer to Bagdogra Airport for departure"
                ],
            }
        ],
        inclusions: [
            "Accommodation in 3-star hotels",
            "Breakfast and dinner included",
            "All transfers and sightseeing as per itinerary",
            "Professional guide for sightseeing",
            "All applicable taxes"
        ],
        exclusions: [
            "Airfare",
            "Lunch",
            "Personal expenses",
            "Any other services not mentioned in inclusions"
        ],
        otherDetails: [
            "Best time to visit: March to June",
            "Weather: Pleasant and cool",
            "Local cuisine: Try Sikkimese dishes"
        ],
        type: ['group', 'private', 'family', 'top', 'north East'],
        rating: 4.5,
        reviews: [
            {
                user: 'John Doe',
                rate: 4.5,
                comment: "Amazing experience! The landscapes were breathtaking and the local culture was fascinating.",
            },
            {
                user: 'Jane Smith',
                rate: 4.0,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Alice Johnson',
                rate: 5.0,
                comment: "Sikkim is a hidden gem! The living root bridges were a highlight of the trip.",
            },
            {
                user: 'Bob Brown',
                rate: 4.8,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Charlie Green',
                rate: 4.2,
                comment: "The food was delicious, and the locals were friendly. A great way to explore Sikkim!",
            },
            {
                user: 'Daisy White',
                rate: 4.7,
                comment: "The trek to the living root bridges was challenging but rewarding. A must-do for adventure lovers!",
            },
        ],
        otherPics:[0,1, 2, 3, 4, 5, 6, 7, 8, 9,],
        topFlag: true,
        currentSeason: true,
    },
    {
        id: 4,
        name: 'Ooty',
        price: 18000,
        duration: '5N/6D',
        description: "Ooty, also known as Udhagamandalam, is a popular hill station in Tamil Nadu, India. It is known for its picturesque landscapes, tea gardens, and pleasant climate. Ooty is often referred to as the 'Queen of Hill Stations' and offers a range of outdoor activities, including boating, trekking, and exploring botanical gardens.",
        itinerary: [
            {
                day: 1,
                description: "Arrival in Coimbatore, transfer to Ooty.",
                activities: [
                    "Arrival in Coimbatore",
                    "Transfer to Ooty",
                    "Check-in to the hotel",
                    "Visit Botanical Gardens",
                    "Dinner and overnight stay in Ooty"
                ],
            },
            {
                day: 2,
                description: "Visit Doddabetta Peak and Tea Gardens.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Doddabetta Peak",
                    "Explore Tea Gardens",
                    "Return to Ooty for overnight stay"
                ],
            },
            {
                day: 3,
                description: "Visit Coonoor and Nilgiri Mountain Railway.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Coonoor",
                    "Ride on Nilgiri Mountain Railway",
                    "Return to Ooty for overnight stay"
                ],
            },
            {
                day: 4,
                description: "Visit Ooty Lake and Rose Garden.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Ooty Lake",
                    "Explore Rose Garden",
                    "Return to Ooty for overnight stay"
                ],
            },
            {
                day: 5,
                description: "Visit Pykara Lake and Waterfalls.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Pykara Lake and Waterfalls",
                    "Return to Ooty for overnight stay"
                ],
            },
            {
                day: 6,
                description: "Departure from Ooty.",
                activities: [
                    "Breakfast at the hotel",
                    "Check-out from the hotel",
                    "Transfer to Coimbatore Airport for departure"
                ],
            }
        ],
        inclusions: [
            "Accommodation in 3-star hotels",
            "Breakfast and dinner included",
            "All transfers and sightseeing as per itinerary",
        ],
        exclusions: [
            "Airfare",
            "Lunch",
            "Personal expenses",
            "Any other services not mentioned in inclusions"
        ],
        otherDetails: [
            "Best time to visit: April to June",
            "Weather: Pleasant and cool",
            "Local cuisine: Try South Indian dishes"
        ],
        type: ['group', 'private', 'family', 'top', 'south'],
        rating: 4.5,
        reviews: [
            {
                user: 'John Doe',
                rate: 4.5,
                comment: "Amazing experience! The landscapes were breathtaking and the local culture was fascinating.",
            },
            {
                user: 'Jane Smith',
                rate: 4.0,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Alice Johnson',
                rate: 5.0,
                comment: "Ooty is a hidden gem! The living root bridges were a highlight of the trip.",
            },
            {
                user: 'Bob Brown',
                rate: 4.8,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Charlie Green',
                rate: 4.2,
                comment: "The food was delicious, and the locals were friendly. A great way to explore Ooty!",
            },
            {
                user: 'Daisy White',
                rate: 4.7,
                comment: "The trek to the living root bridges was challenging but rewarding. A must-do for adventure lovers!",
            },
        ],
        otherPics:[0,1, 2, 3, 4, 5, 6, 7, 8, 9,],
        topFlag: true,
        currentSeason: true,
    },
    {
        id: 5,
        name: 'Coorg',
        price: 16000,
        duration: '4N/5D',
        description: "Coorg, also known as Kodagu, is a picturesque hill station in Karnataka, India. It is famous for its coffee plantations, lush greenery, and pleasant climate. Coorg offers a range of outdoor activities, including trekking, wildlife spotting, and exploring waterfalls. It is often referred to as the 'Scotland of India' due to its scenic beauty.",
        itinerary: [
            {
                day: 1,
                description: "Arrival in Coorg, check-in to the hotel, and local sightseeing.",
                activities: [
                    "Arrival in Coorg",
                    "Check-in to the hotel",
                    "Visit Abbey Falls",
                    "Explore Raja's Seat",
                    "Dinner and overnight stay in Coorg"
                ],
            },
            {
                day: 2,
                description: "Visit Dubare Elephant Camp and Nagarhole National Park.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Dubare Elephant Camp",
                    "Explore Nagarhole National Park",
                    "Return to Coorg for overnight stay"
                ],
            },
            {
                day: 3,
                description: "Visit Talakaveri and Bhagamandala.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Talakaveri",
                    "Explore Bhagamandala",
                    "Return to Coorg for overnight stay"
                ],
            },
            {
                day: 4,
                description: "Visit Madikeri Fort and Omkareshwara Temple.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Madikeri Fort",
                    "Explore Omkareshwara Temple",
                    "Return to Coorg for overnight stay"
                ],
            },
            {
                day: 5,
                description: "Departure from Coorg.",
                activities: [
                    "Breakfast at the hotel",
                    "Check-out from the hotel",
                    "Transfer to Mysore Airport for departure"
                ],
            }
        ],
        inclusions: [
            "Accommodation in 3-star hotels",
            "Breakfast and dinner included",
            "All transfers and sightseeing as per itinerary",
            "Professional guide for sightseeing",
            "All applicable taxes"
        ],
        exclusions: [
            "Airfare",
            "Lunch",
            "Personal expenses",
            "Any other services not mentioned in inclusions",
        ],
        otherDetails: [
            "Best time to visit: October to March",
            "Weather: Pleasant and cool",
            "Local cuisine: Try Coorgi dishes"
        ],
        type: ['group', 'private', 'family', 'top', 'south'],
        rating: 4.5,
        reviews: [
            {
                user: 'John Doe',
                rate: 4.5,
                comment: "Amazing experience! The landscapes were breathtaking and the local culture was fascinating.",
            },
            {
                user: 'Jane Smith',
                rate: 4.0,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Alice Johnson',
                rate: 5.0,
                comment: "Coorg is a hidden gem! The living root bridges were a highlight of the trip.",
            },
            {
                user: 'Bob Brown',
                rate: 4.8,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Charlie Green',
                rate: 4.2,
                comment: "The food was delicious, and the locals were friendly. A great way to explore Coorg!",
            },
            {
                user: 'Daisy White',
                rate: 4.7,
                comment: "The trek to the living root bridges was challenging but rewarding. A must-do for adventure lovers!",
            },
        ],
        otherPics:[0,1, 2, 3, 4, 5, 6, 7, 8, 9,],
        topFlag: true,
        currentSeason: true,
    },
    {
        id: 6,
        name: 'Kochi',
        price: 22000,
        duration: '5N/6D',
        description: "Kochi, also known as Cochin, is a vibrant city in Kerala, India. It is known for its rich history, diverse culture, and beautiful backwaters. Kochi offers a blend of modernity and tradition, with attractions like Fort Kochi, Chinese fishing nets, and the famous Kathakali dance. The city is also a gateway to exploring the backwaters of Kerala.",
        itinerary: [
            {
                day: 1,
                description: "Arrival in Kochi, check-in to the hotel, and local sightseeing.",
                activities: [
                    "Arrival in Kochi",
                    "Check-in to the hotel",
                    "Visit Fort Kochi",
                    "Explore Chinese fishing nets",
                    "Dinner and overnight stay in Kochi"
                ],
            },
            {
                day: 2,
                description: "Visit Mattancherry Palace and Jewish Synagogue.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Mattancherry Palace",
                    "Explore Jewish Synagogue",
                    "Visit St. Francis Church",
                    "Return to Kochi for overnight stay"
                ],
            },
            {
                day: 3,
                description: "Visit Alleppey backwaters.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Alleppey backwaters",
                    "Houseboat cruise and lunch",
                    "Return to Kochi for overnight stay"
                ],
            },
            {
                day: 4,
                description: "Visit Athirappilly Waterfalls.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Athirappilly Waterfalls",
                    "Explore Vazhachal Waterfalls",
                    "Return to Kochi for overnight stay"
                ],
            },
            {
                day: 5,
                description: "Visit Cherai Beach and local markets.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Cherai Beach",
                    "Explore local markets",
                    "Dinner and overnight stay in Kochi"
                ],
            },
            {
                day: 6,
                description: "Departure from Kochi.",
                activities: [
                    "Breakfast at the hotel",
                    "Check-out from the hotel",
                    "Transfer to Kochi Airport for departure"
                ],
            }
        ],
        inclusions: [
            "Accommodation in 3-star hotels",
            "Breakfast and dinner included",
            "All transfers and sightseeing as per itinerary",
            "Professional guide for sightseeing",
            "All applicable taxes"
        ],
        exclusions: [
            "Airfare",
            "Lunch",
            "Personal expenses",
            "Any other services not mentioned in inclusions"
        ],
        otherDetails: [
            "Best time to visit: October to March",
            "Weather: Pleasant and cool",
            "Local cuisine: Try Kerala dishes"
        ],
        type: ['group', 'private', 'family', 'top', 'south'],
        rating: 4.5,
        reviews: [
            {
                user: 'John Doe',
                rate: 4.5,
                comment: "Amazing experience! The landscapes were breathtaking and the local culture was fascinating.",
            },
            {
                user: 'Jane Smith',
                rate: 4.0,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Alice Johnson',
                rate: 5.0,
                comment: "Kochi is a hidden gem! The living root bridges were a highlight of the trip.",
            },
            {
                user: 'Bob Brown',
                rate: 4.8,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Charlie Green',
                rate: 4.2,
                comment: "The food was delicious, and the locals were friendly. A great way to explore Kochi!",
            },
            {
                user: 'Daisy White',
                rate: 4.7,
                comment: "The trek to the living root bridges was challenging but rewarding. A must-do for adventure lovers!",
            },
        ],
        otherPics:[0,1, 2, 3, 4, 5, 6, 7, 8, 9,],
        topFlag: true,
        currentSeason: true,
    },
    {
        id: 7,
        name: 'Chikmagalur',
        price: 17000,
        duration: '4N/5D',
        description: "Chikmagalur is a hill station in Karnataka, India, known for its coffee plantations, lush greenery, and pleasant climate. It is often referred to as the 'Coffee Land of Karnataka' and offers a range of outdoor activities, including trekking, wildlife spotting, and exploring waterfalls. Chikmagalur is a perfect destination for nature lovers and adventure enthusiasts.",
        itinerary: [
            {
                day: 1,
                description: "Arrival in Chikmagalur, check-in to the hotel, and local sightseeing.",
                activities: [
                    "Arrival in Chikmagalur",
                    "Check-in to the hotel",
                    "Visit Mullayanagiri Peak",
                    "Explore Baba Budangiri",
                    "Dinner and overnight stay in Chikmagalur"
                ],
            },
            {
                day: 2,
                description: "Visit Coffee Plantations and Jhari Waterfalls.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Coffee Plantations",
                    "Explore Jhari Waterfalls",
                    "Return to Chikmagalur for overnight stay"
                ],
            },
            {
                day: 3,
                description: "Visit Horanadu and Kalasa.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Horanadu",
                    "Explore Kalasa",
                    "Return to Chikmagalur for overnight stay"
                ],
            },
            {
                day: 4,
                description: "Visit Bhadra Wildlife Sanctuary.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Bhadra Wildlife Sanctuary",
                    "Wildlife spotting and photography",
                    "Return to Chikmagalur for overnight stay"
                ],
            },
            {
                day: 5,
                description: "Departure from Chikmagalur.",
                activities: [
                    "Breakfast at the hotel",
                    "Check-out from the hotel",
                    "Transfer to Mangalore Airport for departure"
                ],
            }
        ],
        inclusions: [
            "Accommodation in 3-star hotels",
            "Breakfast and dinner included",
            "All transfers and sightseeing as per itinerary",
            "Professional guide for sightseeing",
            "All applicable taxes"
        ],
        exclusions: [
            "Airfare",
            "Lunch",
            "Personal expenses",
            "Any other services not mentioned in inclusions"
        ],
        otherDetails: [
            "Best time to visit: October to March",
            "Weather: Pleasant and cool",
            "Local cuisine: Try Malnad dishes"
        ],
        type: ['group', 'private', 'family', 'top', 'south'],
        rating: 4.5,
        reviews: [
            {
                user: 'John Doe',
                rate: 4.5,
                comment: "Amazing experience! The landscapes were breathtaking and the local culture was fascinating.",
            },
            {
                user: 'Jane Smith',
                rate: 4.0,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Alice Johnson',
                rate: 5.0,
                comment: "Chikmagalur is a hidden gem! The living root bridges were a highlight of the trip.",
            },
            {
                user: 'Bob Brown',
                rate: 4.8,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Charlie Green',
                rate: 4.2,
                comment: "The food was delicious, and the locals were friendly. A great way to explore Chikmagalur!",
            },
            {
                user: 'Daisy White',
                rate: 4.7,
                comment: "The trek to the living root bridges was challenging but rewarding. A must-do for adventure lovers!",
            },
        ],
        otherPics:[0,1, 2, 3, 4, 5, 6, 7, 8, 9,],
        topFlag: true,
        currentSeason: true,
    },
    {
        id: 8,
        name: 'Pondicherry',
        price: 20000,
        duration: '5N/6D',
        description: "Pondicherry, also known as Puducherry, is a Union Territory in India, known for its French colonial architecture, serene beaches, and vibrant culture. It offers a unique blend of Indian and French influences, making it a popular destination for travelers. Pondicherry is famous for its Auroville community, beautiful beaches, and delicious cuisine.",
        itinerary: [
            {
                day: 1,
                description: "Arrival in Pondicherry, check-in to the hotel, and local sightseeing.",
                activities: [
                    "Arrival in Pondicherry",
                    "Check-in to the hotel",
                    "Visit Auroville",
                    "Explore French Quarter",
                    "Dinner and overnight stay in Pondicherry",
                ],
            },
            {
                day: 2,
                description: "Visit Paradise Beach and Aurobindo Ashram.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Paradise Beach",
                    "Explore Aurobindo Ashram",
                    "Return to Pondicherry for overnight stay",
                ],
            },
            {
                day: 3,
                description: "Visit Chunnambar Boat House and local markets.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Chunnambar Boat House",
                    "Explore local markets",
                    "Return to Pondicherry for overnight stay",
                ],
            },
            {
                day: 4,
                description: "Visit Serenity Beach and local temples.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Serenity Beach",
                    "Explore local temples",
                    "Return to Pondicherry for overnight stay",
                ],
            },
            {
                day: 5,
                description: "Visit Botanical Garden and local cafes.",
                activities: [
                    "Breakfast at the hotel",
                    "Visit Botanical Garden",
                    "Explore local cafes",
                    "Dinner and overnight stay in Pondicherry",
                ],
            },
            {
                day: 6,
                description: "Departure from Pondicherry.",
                activities: [
                    "Breakfast at the hotel",
                    "Check-out from the hotel",
                    "Transfer to Chennai Airport for departure",
                ],
            }
        ],
        inclusions: [
            "Accommodation in 3-star hotels",
            "Breakfast and dinner included",
            "All transfers and sightseeing as per itinerary",
            "Professional guide for sightseeing",
            "All applicable taxes"
        ],
        exclusions: [
            "Airfare",
            "Lunch",
            "Personal expenses",
            "Any other services not mentioned in inclusions"
        ],
        otherDetails: [
            "Best time to visit: October to March",
            "Weather: Pleasant and cool",
            "Local cuisine: Try French and South Indian dishes"
        ],
        type: ['group', 'private', 'family', 'top', 'south'],
        rating: 4.5,
        reviews: [
            {
                user: 'John Doe',
                rate: 4.5,
                comment: "Amazing experience! The landscapes were breathtaking and the local culture was fascinating.",
            },
            {
                user: 'Jane Smith',
                rate: 4.0,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Alice Johnson',
                rate: 5.0,
                comment: "Pondicherry is a hidden gem! The living root bridges were a highlight of the trip.",
            },
            {
                user: 'Bob Brown',
                rate: 4.8,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Charlie Green',
                rate: 4.2,
                comment: "The food was delicious, and the locals were friendly. A great way to explore Pondicherry!",
            },
            {
                user: 'Daisy White',
                rate: 4.7,
                comment: "The trek to the living root bridges was challenging but rewarding. A must-do for adventure lovers!",
            },
        ],
        otherPics:[0,1, 2, 3, 4, 5, 6, 7, 8, 9,],
        topFlag: true,
        currentSeason: true,
    },
    {
        id: 9,
        name: 'Kashmir',
        price: 30000,
        duration: '6N/7D',
        description: "Kashmir, often referred to as 'Paradise on Earth', is a region in northern India known for its breathtaking landscapes, lush valleys, and serene lakes. It is famous for its houseboats, shikaras, and vibrant culture. Kashmir offers a range of outdoor activities, including trekking, skiing, and exploring local markets.",
        itinerary: [
            {
                day: 1,
                description: "Arrival in Srinagar, check-in to the houseboat, and local sightseeing.",
                activities: [
                    "Arrival in Srinagar",
                    "Check-in to the houseboat",
                    "Visit Mughal Gardens",
                    "Explore Dal Lake",
                    "Dinner and overnight stay in the houseboat",
                ],
            },
            {
                day: 2,
                description: "Visit Gulmarg and Pahalgam.",
                activities: [
                    "Breakfast at the houseboat",
                    "Visit Gulmarg",
                    "Explore Pahalgam",
                    "Return to Srinagar for overnight stay",
                ],
            },
            {
                day: 3,
                description: "Visit Sonamarg and local markets.",
                activities: [
                    "Breakfast at the houseboat",
                    "Visit Sonamarg",
                    "Explore local markets",
                    "Return to Srinagar for overnight stay",
                ],
            },
            {
                day: 4,
                description: "Visit Betaab Valley and Aru Valley.",
                activities: [
                    "Breakfast at the houseboat",
                    "Visit Betaab Valley",
                    "Explore Aru Valley",
                    "Return to Srinagar for overnight stay",
                ],
            },
            {
                day: 5,
                description: "Visit Shankaracharya Temple and local markets.",
                activities: [
                    "Breakfast at the houseboat",
                    "Visit Shankaracharya Temple",
                    "Explore local markets",
                    "Return to Srinagar for overnight stay",
                ],
            },
            {
                day: 6,
                description: "Departure from Srinagar.",
                activities: [
                    "Breakfast at the houseboat",
                    "Check-out from the houseboat",
                    "Transfer to Srinagar Airport for departure",
                ],
            },
        ],
        inclusions: [
            "Accommodation in 3-star hotels",
            "Breakfast and dinner included",
            "All transfers and sightseeing as per itinerary",
            "Professional guide for sightseeing",
            "All applicable taxes"
        ],
        exclusions: [
            "Airfare",
            "Lunch",
            "Personal expenses",
            "Any other services not mentioned in inclusions"
        ],
        otherDetails: [
            "Best time to visit: October to March",
            "Weather: Pleasant and cool",
            "Local cuisine: Try French and South Indian dishes"
        ],
        type: ['group', 'private', 'family', 'top', 'north'],
        rating: 4.5,
        reviews: [
            {
                user: 'John Doe',
                rate: 4.5,
                comment: "Amazing experience! The landscapes were breathtaking and the local culture was fascinating.",
            },
            {
                user: 'Jane Smith',
                rate: 4.0,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Alice Johnson',
                rate: 5.0,
                comment: "Pondicherry is a hidden gem! The living root bridges were a highlight of the trip.",
            },
            {
                user: 'Bob Brown',
                rate: 4.8,
                comment: "The trip was well organized, and the guide was knowledgeable. Highly recommend!",
            },
            {
                user: 'Charlie Green',
                rate: 4.2,
                comment: "The food was delicious, and the locals were friendly. A great way to explore Pondicherry!",
            },
            {
                user: 'Daisy White',
                rate: 4.7,
                comment: "The trek to the living root bridges was challenging but rewarding. A must-do for adventure lovers!",
            },
        ],
        otherPics:[0,1, 2, 3, 4, 5, 6, 7, 8, 9,],
        topFlag: true,
        currentSeason: true,
    },
]