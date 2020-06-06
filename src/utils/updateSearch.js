const updateSearch = (val, menu, list) => {
    val = val.toLowerCase();
    if (val === '')
        return [];
    let searchList = menu.filter(item => !list.includes(item));
    return searchList.filter(item => item.toLowerCase().includes(val));

}

export default updateSearch;

// * {
//     box-sizing: inherit;
//     outline: none;
// }

// html {
//     box-sizing: border-box;
// }

// body {
//     font-family: 'Arvo', serif;
// }

// .container {
//     padding: 0;
// }

// .row {
//     max-width: 100%;
//     margin: 0;
// }

// .navbar {
//     background-color: rgba(0, 0, 0, 0.7);
// }

// .navbar-brand {
//     font-family: 'Lexend Tera', sans-serif;
//     letter-spacing: 0.3em;
// }

// .footer {
//     background-color: rgba(0, 0, 0, 0.5);
//     color: rgb(209, 194, 194);
// }


// .background {
//     background-image: url('../images/background.jpg');
//     filter: grayscale(100%);
//     background-size: cover;
//     position: fixed;
//     min-height: 100vh;
//     min-width: 100vw;
//     z-index: -1;
// }

// .body-container {
//     background-color: #dddddd;
// }

// .text-field-container {
//     position: relative;
//     width: 100%;
//     max-width: 100% !important;
// }

// .text-field:focus+.placeholder,
// .text-field:not(focus):valid+.placeholder {
//     font-size: 0.8rem;
//     top: -4px;
//     left: 0px;
//     padding: 0 2px;
//     background-color: #dddddd;
// }

// .text-field {
//     color: #323232;
//     font-size: 1.2rem;
//     padding: 0.5em;
//     padding-left: 0.8em;
//     border: none;
//     border: 1px solid #323232;
//     border-radius: 7px;
//     background-color: #e8e4e1;
// }

// .placeholder {
//     color: #323232;
//     background-color: #e8e4e1;
//     font-size: 1.2rem;
//     position: absolute;
//     top: 30px;
//     left: 17px;
//     transition: 0.2s linear;
//     pointer-events: none;
// }

// .error {
//     font-size: 12px;
//     color: red;
// }

// .dish-list-box {
//     position: absolute;
//     width: 100%;
//     height: 90%;
//     overflow-y: scroll;
// }

// .dish-list-box::-webkit-scrollbar,
// .timeline-card-container::-webkit-scrollbar,
// .timeline-card .card-body .card-text::-webkit-scrollbar {
//     width: 0px;
//     background: transparent;
// }

// .dish-name {
//     background-color: #f0ecec;
//     width: 100%;
//     border: 1px solid #323232;
//     border-bottom: none;
//     text-align: left;
//     font-size: 1.2rem;
// }

// .dish-name:last-of-type {
//     border-bottom: 1px solid #323232;
// }

// .dish-name:hover {
//     background-color: #dddddd;
// }

// .timeline-container {
//     background-image: linear-gradient(to bottom, #dddddd, #bbbbbb);
//     padding: 5%;

// }

// .timeline-card-container {
//     display: flex;
//     justify-items: center;
//     min-width: 90%;
//     overflow-x: scroll;
// }

// .timeline-card {
//     color: rgb(209, 194, 194);
//     background-color: #323232;
//     flex-shrink: 0;
//     width: min(300px, 90vw);
//     height: 300px;
// }

// .timeline-card .card-body .card-text {
//     height: 100%;
//     width: 100%;
//     overflow-y: scroll;
// }

// .timeline-card .card-title {
//     font-size: min(1.5rem, 5vw);
// }

// .timeline-card .card-body .card-subtitle {
//     font-size: min(1rem, 4vw);
// }

// .timeline-line {
//     min-width: max(5%, 70px);
//     align-self: center;
//     border-bottom: 5px dashed black;
// }

// .redeem-container {
//     color: rgb(151, 131, 131);
// }