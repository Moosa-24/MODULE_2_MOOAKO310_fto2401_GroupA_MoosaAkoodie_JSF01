// app.js

function headerData() {
    return {
        // Define your header data here
    };
}

function filterData() {
    return {
        categories: [], // Categories data
        selectedCategory: 'all',
        async fetchCategories() {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                const categories = await response.json();
                this.categories = categories;
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        },
        async filterProducts() {
            try {
                let url = 'https://fakestoreapi.com/products';
                if (this.selectedCategory !== 'all') {
                    url += `/category/${this.selectedCategory}`;
                }
                const response = await fetch(url);
                const products = await response.json();
                // Handle products as needed
            } catch (error) {
                console.error('Error filtering products:', error);
            }
        }
    };
}

function sortData() {
    return {
        selectedSort: 'default',
        async sortProducts() {
            try {
                const sortOrder = this.selectedSort === 'default' ? '' : `?sort=${this.selectedSort}`;
                const response = await fetch(`https://fakestoreapi.com/products${sortOrder}`);
                const products = await response.json();
                // Handle sorted products as needed
            } catch (error) {
                console.error('Error sorting products:', error);
            }
        }
    };
}

function productList() {
    return {
        products: [],
        async fetchProducts() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const products = await response.json();
                this.products = products; // Store products including image URLs
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
    };
}

