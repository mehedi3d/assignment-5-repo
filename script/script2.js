function hiddennamebyid(elementid){
    const h =document.getElementById(elementid);
    h.classList.add('hidden')
}
function removeid(elementid){
    const a =document.getElementById(elementid);
    a.classList.remove('hidden')
}
//
const buttons = document.querySelectorAll('.btn');


        buttons.forEach(button => {
            button.addEventListener('click', function() {
                
                // buttons.forEach(btn => {
                //     btn.classList.remove('red');
                // });

                // Set the clicked button to red
                button.classList.add('bg-[#1DD100]');
            });
        });


        //
    //     <script>
    //     function addToTable(site) {
    //         const site = document.getElementById("siteTable");
    //         let row = site.insertRow(-1);
    //         let siteCell = row.insertCell(0);
    //         let priceCell = row.insertCell(1);

    //         siteCell.innerHTML = site;
    //         priceCell.innerHTML = "$550";
    //     }
    // </script>