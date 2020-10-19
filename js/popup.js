/*
    (c) Ulferno 2020

    Name: calculate.js
    Description: Fire function on button click.

*/

$(() => {
    $('#discord-button').click(() => {
        window.open('https://discord.gg/XAZQEQB', '_blank');
    })

    $.getJSON('../manifest.json', (data) => {
        $('#version').html(`(${data.version})`); // Update the <span> with the id 'version' to the version specified in the manifest.json
    })
})