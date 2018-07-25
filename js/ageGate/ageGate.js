"use strict";

var countries = [{
    "code": "GB",
    "country": "United Kingdom",
    "age": "18"
}, {
    "code": "US",
    "country": "United States",
    "age": "21"
}, {
    "code": "AF",
    "country": "Afghanistan",
    "age": "18"
}, {
    "code": "AL",
    "country": "Albania",
    "age": "18"
}, {
    "code": "DZ",
    "country": "Algeria",
    "age": "18"
}, {
    "code": "AS",
    "country": "American Samoa",
    "age": "21"
}, {
    "code": "AO",
    "country": "Angola",
    "age": "18"
}, {
    "code": "AG",
    "country": "Antigua and Barbuda",
    "age": "16"
}, {
    "code": "AR",
    "country": "Argentina",
    "age": "18"
}, {
    "code": "AM",
    "country": "Armenia",
    "age": "18"
}, {
    "code": "AU",
    "country": "Australia",
    "age": "18"
}, {
    "code": "AT",
    "country": "Austria",
    "age": "18"
}, {
    "code": "AZ",
    "country": "Azerbaijan",
    "age": "18"
}, {
    "code": "BS",
    "country": "Bahamas",
    "age": "18"
}, {
    "code": "BD",
    "country": "Bangladesh",
    "age": "18"
}, {
    "code": "BY",
    "country": "Belarus",
    "age": "18"
}, {
    "code": "BE",
    "country": "Belgium",
    "age": "18"
}, {
    "code": "BZ",
    "country": "Belize",
    "age": "18"
}, {
    "code": "BM",
    "country": "Bermuda",
    "age": "18"
}, {
    "code": "BO",
    "country": "Bolivia",
    "age": "18"
}, {
    "code": "BA",
    "country": "Bosnia and Herzegovina",
    "age": "18"
}, {
    "code": "DZ",
    "country": "Botswana",
    "age": "18"
}, {
    "code": "BR",
    "country": "Brazil",
    "age": "18"
}, {
    "code": "VG",
    "country": "British Virgin Islands",
    "age": "16"
}, {
    "code": "BN",
    "country": "Brunei",
    "age": "18"
}, {
    "code": "BG",
    "country": "Bulgaria",
    "age": "18"
}, {
    "code": "BI",
    "country": "Burundi",
    "age": "18"
}, {
    "code": "KH",
    "country": "Cambodia",
    "age": "21"
}, {
    "code": "CM",
    "country": "Cameroon",
    "age": "21"
}, {
    "code": "CA",
    "country": "Canada",
    "age": "19"
}, {
    "code": "CV",
    "country": "Cape Verde",
    "age": "18"
}, {
    "code": "KY",
    "country": "Cayman Islands",
    "age": "18"
}, {
    "code": "CF",
    "country": "Central African Republic",
    "age": "18"
}, {
    "code": "CL",
    "country": "Chile",
    "age": "18"
}, {
    "code": "CN",
    "country": "China",
    "age": "18"
}, {
    "code": "CO",
    "country": "Colombia",
    "age": "18"
}, {
    "code": "KM",
    "country": "Comoros",
    "age": "18"
}, {
    "code": "CR",
    "country": "Costa Rica",
    "age": "18"
}, {
    "code": "HR",
    "country": "Croatia",
    "age": "18"
}, {
    "code": "CU",
    "country": "Cuba",
    "age": "18"
}, {
    "code": "CY",
    "country": "Cyprus",
    "age": "17"
}, {
    "code": "CZ",
    "country": "Czech Republic",
    "age": "18"
}, {
    "code": "CD",
    "country": "Democratic Republic of the Congo",
    "age": "18"
}, {
    "code": "DK",
    "country": "Denmark",
    "age": "18"
}, {
    "code": "DO",
    "country": "Dominican Republic",
    "age": "18"
}, {
    "code": "EC",
    "country": "Ecuador",
    "age": "18"
}, {
    "code": "EG",
    "country": "Egypt",
    "age": "21"
}, {
    "code": "SV",
    "country": "El Salvador",
    "age": "18"
}, {
    "code": "GQ",
    "country": "Equatorial Guinea",
    "age": "18"
}, {
    "code": "ER",
    "country": "Eritrea",
    "age": "18"
}, {
    "code": "EE",
    "country": "Estonia",
    "age": "18"
}, {
    "code": "ET",
    "country": "Ethiopia",
    "age": "18"
}, {
    "code": "FK",
    "country": "Falkland Islands",
    "age": "18"
}, {
    "code": "FJ",
    "country": "Fiji",
    "age": "18"
}, {
    "code": "FI",
    "country": "Finland",
    "age": "18"
}, {
    "code": "FR",
    "country": "France",
    "age": "18"
}, {
    "code": "GA",
    "country": "Gabon",
    "age": "18"
}, {
    "code": "GM",
    "country": "Gambia",
    "age": "18"
}, {
    "code": "GE",
    "country": "Georgia",
    "age": "16"
}, {
    "code": "DE",
    "country": "Germany",
    "age": "18"
}, {
    "code": "GH",
    "country": "Ghana",
    "age": "18"
}, {
    "code": "GI",
    "country": "Gibraltar",
    "age": "18"
}, {
    "code": "GR",
    "country": "Greece",
    "age": "18"
}, {
    "code": "GU",
    "country": "Guam",
    "age": "21"
}, {
    "code": "GT",
    "country": "Guatemala",
    "age": "18"
}, {
    "code": "GW",
    "country": "Guinea-Bissau",
    "age": "18"
}, {
    "code": "GY",
    "country": "Guyana",
    "age": "18"
}, {
    "code": "HT",
    "country": "Haiti",
    "age": "16"
}, {
    "code": "HN",
    "country": "Honduras",
    "age": "18"
}, {
    "code": "HK",
    "country": "Hong Kong",
    "age": "18"
}, {
    "code": "HU",
    "country": "Hungary",
    "age": "18"
}, {
    "code": "IS",
    "country": "Iceland",
    "age": "20"
}, {
    "code": "IN",
    "country": "India",
    "age": "18"
}, {
    "code": "ID",
    "country": "Indonesia",
    "age": "21"
}, {
    "code": "IR",
    "country": "Iran",
    "age": "18"
}, {
    "code": "JQ",
    "country": "Iraq",
    "age": "18"
}, {
    "code": "IE",
    "country": "Ireland",
    "age": "18"
}, {
    "code": "IL",
    "country": "Israel",
    "age": "18"
}, {
    "code": "IT",
    "country": "Italy",
    "age": "18"
}, {
    "code": "JM",
    "country": "Jamaica",
    "age": "16"
}, {
    "code": "JP",
    "country": "Japan",
    "age": "20"
}, {
    "code": "JO",
    "country": "Jordan",
    "age": "18"
}, {
    "code": "KZ",
    "country": "Kazakhstan",
    "age": "21"
}, {
    "code": "KE",
    "country": "Kenya",
    "age": "18"
}, {
    "code": "XK",
    "country": "Kosovo",
    "age": "18"
}, {
    "code": "KW",
    "country": "Kuwait",
    "age": "18"
}, {
    "code": "KG",
    "country": "Kyrgyzstan",
    "age": "18"
}, {
    "code": "LV",
    "country": "Latvia",
    "age": "18"
}, {
    "code": "LB",
    "country": "Lebanon",
    "age": "18"
}, {
    "code": "LS",
    "country": "Lesotho",
    "age": "18"
}, {
    "code": "LY",
    "country": "Libya",
    "age": "18"
}, {
    "code": "LI",
    "country": "Liechtenstein",
    "age": "18"
}, {
    "code": "LT",
    "country": "Lithuania",
    "age": "18"
}, {
    "code": "LU",
    "country": "Luxembourg",
    "age": "16"
}, {
    "code": "MO",
    "country": "Macau",
    "age": "18"
}, {
    "code": "MK",
    "country": "Macedonia",
    "age": "18"
}, {
    "code": "MW",
    "country": "Malawi",
    "age": "18"
}, {
    "code": "MY",
    "country": "Malaysia",
    "age": "18"
}, {
    "code": "MV",
    "country": "Maldives",
    "age": "18"
}, {
    "code": "MT",
    "country": "Malta",
    "age": "17"
}, {
    "code": "MU",
    "country": "Mauritius",
    "age": "18"
}, {
    "code": "FM",
    "country": "Federated States of Micronesia",
    "age": "21"
}, {
    "code": "MX",
    "country": "Mexico",
    "age": "18"
}, {
    "code": "MD",
    "country": "Moldova",
    "age": "16"
}, {
    "code": "MN",
    "country": "Mongolia",
    "age": "18"
}, {
    "code": "ME",
    "country": "Montenegro",
    "age": "18"
}, {
    "code": "MA",
    "country": "Morocco",
    "age": "16"
}, {
    "code": "MZ",
    "country": "Mozambique",
    "age": "18"
}, {
    "code": "NA",
    "country": "Namibia",
    "age": "18"
}, {
    "code": "NP",
    "country": "Nepal",
    "age": "18"
}, {
    "code": "NL",
    "country": "Netherlands",
    "age": "18"
}, {
    "code": "NZ",
    "country": "New Zealand",
    "age": "18"
}, {
    "code": "NI",
    "country": "Nicaragua",
    "age": "18"
}, {
    "code": "NE",
    "country": "Niger",
    "age": "18"
}, {
    "code": "NG",
    "country": "Nigeria",
    "age": "18"
}, {
    "code": "MP",
    "country": "Northern Mariana Islands",
    "age": "21"
}, {
    "code": "KP",
    "country": "North Korea",
    "age": "18"
}, {
    "code": "NO",
    "country": "Norway",
    "age": "20"
}, {
    "code": "OM",
    "country": "Oman",
    "age": "21"
}, {
    "code": "PK",
    "country": "Pakistan",
    "age": "21"
}, {
    "code": "PW",
    "country": "Palau",
    "age": "21"
}, {
    "code": "PS",
    "country": "Palestine",
    "age": "16"
}, {
    "code": "PA",
    "country": "Panama",
    "age": "18"
}, {
    "code": "PG",
    "country": "Papua New Guinea",
    "age": "18"
}, {
    "code": "PY",
    "country": "Paraguay",
    "age": "20"
}, {
    "code": "PE",
    "country": "Peru",
    "age": "18"
}, {
    "code": "PH",
    "country": "Philippines",
    "age": "18"
}, {
    "code": "PL",
    "country": "Poland",
    "age": "18"
}, {
    "code": "PT",
    "country": "Portugal",
    "age": "18"
}, {
    "code": "PR",
    "country": "Puerto Rico",
    "age": "18"
}, {
    "code": "QA",
    "country": "Qatar",
    "age": "21"
}, {
    "code": "CG",
    "country": "Republic of the Congo",
    "age": "18"
}, {
    "code": "RO",
    "country": "Romania",
    "age": "18"
}, {
    "code": "RU",
    "country": "Russia",
    "age": "18"
}, {
    "code": "RW",
    "country": "Rwanda",
    "age": "18"
}, {
    "code": "WS",
    "country": "Samoa",
    "age": "18"
}, {
    "code": "SA",
    "country": "Saudi Arabia",
    "age": "18"
}, {
    "code": "SN",
    "country": "Senegal",
    "age": "18"
}, {
    "code": "RS",
    "country": "Serbia",
    "age": "18"
}, {
    "code": "SC",
    "country": "Seychelles",
    "age": "18"
}, {
    "code": "SG",
    "country": "Singapore",
    "age": "18"
}, {
    "code": "SO",
    "country": "Somalia",
    "age": "18"
}, {
    "code": "SB",
    "country": "Solomon Islands",
    "age": "21"
}, {
    "code": "ZA",
    "country": "South Africa",
    "age": "18"
}, {
    "code": "KR",
    "country": "South Korea",
    "age": "19"
}, {
    "code": "SS",
    "country": "South Sudan",
    "age": "18"
}, {
    "code": "SK",
    "country": "Slovakia",
    "age": "18"
}, {
    "code": "SI",
    "country": "Slovenia",
    "age": "18"
}, {
    "code": "ES",
    "country": "Spain",
    "age": "18"
}, {
    "code": "LK",
    "country": "Sri Lanka",
    "age": "21"
}, {
    "code": "SD",
    "country": "Sudan",
    "age": "18"
}, {
    "code": "SZ",
    "country": "Swaziland",
    "age": "18"
}, {
    "code": "SE",
    "country": "Sweden",
    "age": "18"
}, {
    "code": "CH",
    "country": "Switzerland",
    "age": "18"
}, {
    "code": "SY",
    "country": "Syria",
    "age": "18"
}, {
    "code": "TW",
    "country": "Taiwan",
    "age": "18"
}, {
    "code": "TJ",
    "country": "Tajikistan",
    "age": "21"
}, {
    "code": "TZ",
    "country": "Tanzania",
    "age": "18"
}, {
    "code": "TH",
    "country": "Thailand",
    "age": "21"
}, {
    "code": "TG",
    "country": "Togo",
    "age": "18"
}, {
    "code": "TK",
    "country": "Tokelau",
    "age": "18"
}, {
    "code": "TO",
    "country": "Tonga",
    "age": "21"
}, {
    "code": "TT",
    "country": "Trinidad and Tobago",
    "age": "18"
}, {
    "code": "TN",
    "country": "Tunisia",
    "age": "18"
}, {
    "code": "TR",
    "country": "Turkey",
    "age": "18"
}, {
    "code": "TM",
    "country": "Turkmenistan",
    "age": "18"
}, {
    "code": "UG",
    "country": "Uganda",
    "age": "18"
}, {
    "code": "UA",
    "country": "Ukraine",
    "age": "18"
}, {
    "code": "AE",
    "country": "United Arab Emirates",
    "age": "21"
}, {
    "code": "GB",
    "country": "United Kingdom",
    "age": "18"
}, {
    "code": "US",
    "country": "United States",
    "age": "21"
}, {
    "code": "VI",
    "country": "United States Virgin Islands",
    "age": "18"
}, {
    "code": "UY",
    "country": "Uruguay",
    "age": "18"
}, {
    "code": "VU",
    "country": "Vanuatu",
    "age": "18"
}, {
    "code": "VE",
    "country": "Venezuela",
    "age": "18"
}, {
    "code": "VN",
    "country": "Vietnam",
    "age": "18"
}, {
    "code": "YE",
    "country": "Yemen",
    "age": "18"
}, {
    "code": "ZM",
    "country": "Zambia",
    "age": "18"
}, {
    "code": "ZW",
    "country": "Zimbabwe",
    "age": "18"
}];

var yearBuilder = function yearBuilder(startYear) {
    var currentYear = new Date().getFullYear(),
        years = [];
    startYear = startYear || 1980;

    while (startYear <= currentYear) {
        years.push(startYear++);
    }

    return years;
};

//cookie

var setCookie = function setCookie(name) {
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = name + "=true; path=/;domain=." + window.location.host + ";expires=" + d.toUTCString();
};

var getCookie = function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
};
var deleteCookie = function deleteCookie(name) {
    return document.cookie = name + '=;path=/;domain=.' + window.location.host + ';expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

// build modal

function buildModal() {

    var years = yearBuilder(1900);

    //document.body.style.overflow = 'hidden';

    var outerModal = document.createElement('div');
    outerModal.id = 'ageOuterModal';

    var innerModal = document.createElement('div');
    innerModal.id = 'ageInnerModal';

    var logo = document.createElement('img');
    logo.src = "/Assets/img/logo-inverted.png";

    var title = document.createElement('h1');
    title.id = 'ageTitle';
    title.appendChild(document.createTextNode("Discover one of life’s privileges"));

    var subTitle = document.createElement('p');
    subTitle.id = 'ageSubTitle';
    subTitle.appendChild(document.createTextNode("Please enter your details below."));

    var countrySelectContainer = document.createElement('div');
    countrySelectContainer.id = 'countrySelectContainer';

    var countrySelectContainerInner = document.createElement('div');
    countrySelectContainerInner.id = 'countrySelectContainerInner';

    var countrySelectLabel = document.createElement('label');
    countrySelectLabel.htmlFor = 'countrySelect';
    countrySelectLabel.appendChild(document.createTextNode("Country"));

    var countrySelect = document.createElement('select');
    countrySelect.id = 'countrySelect';
    countrySelect.name = 'countrySelect';

    countries.forEach(function (x) {
        var countryOption = document.createElement('option');
        countryOption.value = x.age;
        countryOption.dataset.country = x.country;
        countryOption.appendChild(document.createTextNode(x.country));
        countrySelect.appendChild(countryOption);
    });

    var ageSelectContainer = document.createElement('div');
    ageSelectContainer.id = 'ageSelectContainer';

    var ageSelectContainerInner = document.createElement('div');
    ageSelectContainerInner.id = 'ageSelectContainerInner';

    var ageSelectLabel = document.createElement('label');
    ageSelectLabel.htmlFor = 'ageSelect';
    ageSelectLabel.appendChild(document.createTextNode("Birth Year"));

    var yearSelect = document.createElement('select');
    yearSelect.id = 'ageSelect';
    yearSelect.name = 'ageSelect';
    years.forEach(function (x, i) {
        var yearOption = document.createElement('option');
        yearOption.value = x;
        if (i == years.length - 1) {
            yearOption.selected = true;
        }
        yearOption.appendChild(document.createTextNode(x));
        yearSelect.appendChild(yearOption);
    });

    var message = document.createElement('p');
    message.id = 'ageGateMessage';

    var termsLink = document.createElement('a');
    termsLink.id = 'termsLink';
    termsLink.href = '/terms-conditions';
    termsLink.appendChild(document.createTextNode('Terms & Conditions'));

    var privacyLink = document.createElement('a');
    privacyLink.id = 'privacyLink';
    privacyLink.href = '/terms-conditions';
    privacyLink.appendChild(document.createTextNode('Privacy & Cookie Policy'));

    var enterButton = document.createElement('button');
    enterButton.id = "enterButton";
    enterButton.appendChild(document.createTextNode('Enter'));

    function checkAge() {
        var today = new Date();
        var thisYear = today.getFullYear();

        if (thisYear - parseInt(yearSelect.value) >= parseInt(countrySelect.value)) {
            setCookie('ageGate');
            setCookie('AgeVerify');
            outerModal.style.display = 'none';
            //document.body.style.overflow = '';
        } else {
            updateMessage('You must be of legal drinking age in your country to enter.');
        }
    }

    function updateMessage(msg) {
        var text = document.createTextNode(msg);
        if (message.hasChildNodes()) {
            message.removeChild(message.childNodes[0]);
        }
        message.appendChild(text);
    }

    enterButton.onclick = checkAge;

    innerModal.appendChild(logo);
    innerModal.appendChild(title);
    innerModal.appendChild(subTitle);
    countrySelectContainer.appendChild(countrySelectLabel);
    ageSelectContainer.appendChild(ageSelectLabel);
    countrySelectContainerInner.appendChild(countrySelect);
    ageSelectContainerInner.appendChild(yearSelect);
    countrySelectContainer.appendChild(countrySelectContainerInner);
    ageSelectContainer.appendChild(ageSelectContainerInner);
    innerModal.appendChild(countrySelectContainer);
    innerModal.appendChild(ageSelectContainer);
    innerModal.appendChild(message);
    innerModal.appendChild(enterButton);
    //innerModal.appendChild(termsLink);
    //innerModal.appendChild(privacyLink);
    outerModal.appendChild(innerModal);
    document.body.appendChild(outerModal);
}

if (getCookie('ageGate') === undefined) {
    buildModal();
}