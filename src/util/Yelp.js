const apiKey = '6NrFywQhkp1hAPR8fm8EJ1qL_3IE5P-QqeDnk6eaIWPRi83xVN2iP_B-RovCLKWs6Z6E6SKihAZlSO6ZjNvjetCLLJlRhoX8ZIUSqneU9S-InIvaBEt4obK8isnbXnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };
                });
            }
        });
    }
};

export default Yelp;
