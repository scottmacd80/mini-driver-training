Array.prototype.unique = function () {
    return this.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
}

var articleCategories = new Vue({
    el: '#listing',
    data: {
        items: [],
        cats: [],
        filteredItems: [],
        itemsPerPage: 6,
        currentItems: 6,
        currentPage: 1
    },
    mounted() {
        axios.get("/Umbraco/Api/ArticlesApi/GetArticles")
            .then(response => {
                this.items = response.data;
                this.filteredItems = this.items;
                this.cats = this.items.map(item => item.Category).unique();
                //this.filterSort();
            });
    },
    methods: {
        filterSort: function (e) {
            var category = document.getElementById("newsFilter").value;

            //filter category 
            if (category === "All") {
                this.filteredItems = this.items;
            }
            else {
                this.filteredItems = this.items.filter(y => y.Category === category);
            }
            e.preventDefault(e);
        },
        showAll: function(e) {
            this.filteredItems = this.items;
            document.getElementById("newsFilter").selectedIndex = "0";
            e.preventDefault(e);
        },
        loadMore: function () {
            if (this.filteredItems.length > this.itemsPerPage) {
                this.currentPage++;
                this.currentItems = this.currentPage * this.itemsPerPage;
            }
        },
        resetItemsCount: function() {
            this.currentItems = this.itemsPerPage;
            this.currentPage = 1;
        }
    }
});

function getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
        body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight
    );
};

function getScrollTop() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

window.onscroll = function () {
    if (getScrollTop() < getDocumentHeight() - window.innerHeight) return;
    articleCategories.loadMore();
};


