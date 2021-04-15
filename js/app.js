const alertBanner = document.getElementById('alert');

// create the HTML for the banner
alertBanner.innerHTML = 
`
<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete.</p>
    <p class="alert-banner-close">x</p>
</div>
`
// Click Event Listener for 'x' to close Alert
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains('alert-banner-close')) {
        alertBanner.style.display = "none"
    }
});

// -------------- Line Graph - traffic-chart --------------
const trafficCanvas = document.getElementById('traffic-chart');
// Object Literal representing the data for the traffic chart
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [900, 1200, 1700, 2000, 1500, 1150, 1400, 1850, 1300, 1700,
            2200],
        backgroundColor: '#5556aa70',
        borderColor: '#5556aa70',
        borderWidth: 1,
    }]
};
// Object Literal setting options to change for the chart
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales : {
        yAxis: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend : {
        display: false
    }
};
// Creating the chart
let trafficChart = new Chart(trafficCanvas, { 
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// -------------- Bar Graph - Daily-chart --------------
const dailyCanvas = document.getElementById('daily-chart');
// Object Literal representing the data for the Daily chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [100, 130, 140, 200, 90, 250, 100],
        borderWidth: 1,
        backgroundColor: '#5556aa',
        borderColor: '#5556aa'
    }]
};
// Object Literal setting options to change for the chart
dailyOptions = {
    scales: {
        yAxis: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};
// Creating the chart
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// -------------- Doughnut Graph - Mobile-chart --------------
const mobileCanvas = document.getElementById('mobile-users');
// Object Literal representing the data for the Mobile chart
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [800, 1200, 1500],
        borderWidth: 1,
        backgroundColor: [
            "#5556aa70",
            "#12dd0070",
            "#27768a70"
        ],
        borderColor: [
            "#5556aa",
            "#12dd00",
            "#27768a"
        ]
    }]
};
// Object Literal setting options to change for the chart
const mobileOptions = {
    legend: {
        positon: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
};
// Creating the chart
const mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
})

// -------------- Messaging Section --------------

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');
// Event Listener for send
send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert('User and Message fields must be filled out');
    }
    else if (user.value === "") {
        alert('User field must be filled out');
    }
    else if (message.value === "") {
        alert('Message field must be filled out');
    }
    else {
        alert(`Message successfully sent to: ${user.value}`);
    }   
});