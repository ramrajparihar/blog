/*
 Template Name: Veltrix - Responsive Bootstrap 4 Admin Dashboard
 Author: Themesbrand
 File: Morris chart Init
 */


!function ($) {
    "use strict";

    var MorrisCharts = function () {
    };

        //creates line chart
        // MorrisCharts.prototype.createLineChart = function (element, data, xkey, ykeys, labels, lineColors) {
        //     Morris.Line({
        //         element: element,
        //         data: data,
        //         xkey: xkey,
        //         ykeys: ykeys,
        //         labels: labels,
        //         hideHover: 'auto',
        //         gridLineColor: '#eef0f2',
        //         resize: true, //defaulted to true
        //         lineColors: lineColors,
        //         lineWidth: 2
        //     });
        // },

        //creates Bar chart
        MorrisCharts.prototype.createBarChart = function (element, data, xkey, ykeys, labels, lineColors) {
            Morris.Bar({
                element: element,
                data: data,
                xkey: xkey,
                ykeys: ykeys,
                labels: labels,
                gridLineColor: '#eef0f2',
                barSizeRatio: 0.4,
                resize: true,
                hideHover: 'auto',
                barColors: lineColors
            });
        },
        MorrisCharts.prototype.init = function () {

            //create line chart
            // var $data = [
            //     {y: '1 Jan', a: 50, b: 80, c: 20},
            //     {y: '2 Jan', a: 130, b: 100, c: 80},
            //     {y: '3 Jan', a: 80, b: 60, c: 70},
            //     {y: '4 Jan', a: 70, b: 200, c: 140},
            //     {y: '5 Jan', a: 180, b: 140, c: 150},
            //     {y: '6 Jan', a: 105, b: 100, c: 80},
            //     {y: '7 Jan', a: 250, b: 150, c: 200}
            // ];
            // this.createLineChart('morris-line-example', $data, 'y', ['a', 'b', 'c'], ['Activated', 'Pending', 'Deactivated'], ['#ccc', '#3c4ccf', '#02a499']);

            //creating bar chart

            var $barData = [
                {y: '1 Jan', a: 150, b: 90},
                {y: '2 Jan', a: 75, b: 65},
                {y: '3 Jan', a: 50, b: 40},
                {y: '4 Jan', a: 75, b: 65},
                {y: '5 Jan', a: 50, b: 40},
                {y: '6 Jan', a: 75, b: 65},
                {y: '7 Jan', a: 100, b: 90},
                {y: '8 Jan', a: 90, b: 75}
            ];
            this.createBarChart('morris-bar-example34', $barData, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#0070d2','#9d53f2']);

            //creating bar chart
            var $barData = [
                {y: '1 Jan', a: 100, b: 90},
                {y: '2 Jan', a: 75, b: 65},
                {y: '3 Jan', a: 50, b: 40},
                {y: '4 Jan', a: 75, b: 65},
                {y: '5 Jan', a: 50, b: 40},
                {y: '6 Jan', a: 75, b: 65},
                {y: '7 Jan', a: 100, b: 90},
                {y: '8 Jan', a: 90, b: 75}
            ];
            this.createBarChart('morris-bar-example', $barData, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#26aba4','#f7a452']);  
        },
        //init
        $.MorrisCharts = new MorrisCharts, $.MorrisCharts.Constructor = MorrisCharts
}(window.jQuery),

//initializing 
    function ($) {
        "use strict";
        $.MorrisCharts.init();
    }(window.jQuery);