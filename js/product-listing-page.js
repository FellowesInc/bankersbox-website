$(window).on('load', function () {

    // Filter Show/Hide functionality for mobile
    const filterSection = document.querySelector('.filter-section');
    const mediaQueryMax992 = window.matchMedia('(max-width: 992px)');

    if (mediaQueryMax992.matches && filterSection) {
        const clickHeader = document.querySelector('.filter-section__title');
        const clickIcon = document.querySelectorAll('.filter-icon');
        const btnWrapper = document.querySelector('.filter-section__btn-wrapper');
        const filterWrapper = document.querySelector('.filter-section__filter-wrapper');
        const openIcon = document.querySelector('.filter-open');
        const closeIcon = document.querySelector('.filter-close');
        const filterHeader = document.querySelectorAll('.filter-header');

        $(clickHeader).click(function () {
            $(btnWrapper).toggleClass('show');
            $(filterWrapper).toggleClass('show');
            $(closeIcon).toggleClass('show');
            $(openIcon).toggleClass('hide');
        });
        $(clickIcon).click(function () {
            $(btnWrapper).toggleClass('show');
            $(filterWrapper).toggleClass('show');
            $(closeIcon).toggleClass('show');
            $(openIcon).toggleClass('hide');
        });

        $(filterHeader).each(function () {
            $(this).click(function () {
                const filterSection = $(this).siblings('.filters');
                console.log(filterSection);
                $(filterSection).toggleClass('show');
                $(this).find('.filter-subhead__open').toggleClass('hide');
                $(this).find('.filter-subhead__close').toggleClass('show');
            });
        });
    }

    // Setup Data Structure for Knockout Bindings
    function ProductListingViewModel() {
        var self = this;

        self.assets = ko.observableArray([
            {
                imageSrc: './img/product-listing-page/plp-product-image-placeholder.png',
                itemNumber: '00025.1',
                productLine: 'Stor/File™',
                title: '16" Letter/Legal',
                description: 'Medium Duty box with string and button closure with FastFold quick assembly.',
                dimentions: '11"H x 12.25"W x 16"D',
                productURL: '#',
            },
            {
                imageSrc: './img/product-listing-page/plp-product-image-placeholder.png',
                itemNumber: '00025.1',
                productLine: 'Stor/File™',
                title: '16" Letter/Legal',
                description: 'Medium Duty box with string and button closure with FastFold quick assembly.',
                dimentions: '11"H x 12.25"W x 16"D',
                productURL: '#',
            },
            {
                imageSrc: './img/product-listing-page/plp-product-image-placeholder.png',
                itemNumber: '00025.1',
                productLine: 'Stor/File™',
                title: '16" Letter/Legal',
                description: 'Medium Duty box with string and button closure with FastFold quick assembly.',
                dimentions: '11"H x 12.25"W x 16"D',
                productURL: '#',
            },
            {
                imageSrc: './img/product-listing-page/plp-product-image-placeholder.png',
                itemNumber: '00025.1',
                productLine: 'Stor/File™',
                title: '16" Letter/Legal',
                description: 'Medium Duty box with string and button closure with FastFold quick assembly.',
                dimentions: '11"H x 12.25"W x 16"D',
                productURL: '#',
            },
            {
                imageSrc: './img/product-listing-page/plp-product-image-placeholder.png',
                itemNumber: '00025.1',
                productLine: 'Stor/File™',
                title: '16" Letter/Legal',
                description: 'Medium Duty box with string and button closure with FastFold quick assembly.',
                dimentions: '11"H x 12.25"W x 16"D',
                productURL: '#',
            },
            {
                imageSrc: './img/product-listing-page/plp-product-image-placeholder.png',
                itemNumber: '00025.1',
                productLine: 'Stor/File™',
                title: '16" Letter/Legal',
                description: 'Medium Duty box with string and button closure with FastFold quick assembly.',
                dimentions: '11"H x 12.25"W x 16"D',
                productURL: '#',
            },
        ]);
    }

    ko.applyBindings(new ProductListingViewModel());
});